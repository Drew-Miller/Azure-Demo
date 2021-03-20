using System.Threading.Tasks;
using Microsoft.Azure.Cosmos;
using Data;
using Data.Models.Base;

namespace Repository.Base
{
    public abstract class BasePartitionRepository<T> where T: ModelBase
    {
        protected Container container;

        public BasePartitionRepository(CosmosDb cosmos, string containerName)
        {
            this.container = cosmos.CreateContainer(containerName).Result;
        }

        public async Task<T> Create(T model)
        {
            ItemResponse<T> response;
            var partitionKey = this.GetPartitionKey(model);

            try
            {
                response = await container.ReadItemAsync<T>(model.Id, partitionKey);                
            }
            catch (System.Exception)
            {
                response = await container.CreateItemAsync<T>(model, partitionKey);                
            }

            return response.Resource;
        }

        public async Task<string> Delete(T model)
        {
            var partitionKey = this.GetPartitionKey(model);

            try
            {
                ItemResponse<T> response = await container.DeleteItemAsync<T>(model.Id, partitionKey);
                return model.Id;                
            }
            catch (System.Exception)
            {
                return null;
            }
        }

        protected abstract PartitionKey GetPartitionKey(T model);
    }
}
