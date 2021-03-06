using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.Azure.Cosmos;
using Microsoft.Azure.Cosmos.Linq;
using Data.Interfaces;
using Data.Models.Interfaces;
using Data.Repository.Interfaces;

namespace Data.Repository.Base
{
    public abstract class PartitionRepository<T>: IPartitionRepository<T> where T: IPartitionModel
    {
        protected Container container;

        protected ICosmosDb cosmos;

        public PartitionRepository(ICosmosDb cosmos, string containerName)
        {
            this.cosmos = cosmos;
            this.container = this.cosmos.CreateContainer(containerName).Result;
        }
        
        public IEnumerable<T> Get()
        {
            return container.GetItemLinqQueryable<T>(true).AsEnumerable();
        }

        public async Task<T> Get(Guid id, string partition)
        {
            PartitionKey partitionKey = new PartitionKey(partition);
            ItemResponse<T> response = await container.ReadItemAsync<T>(id.ToString(), partitionKey);
            return response.Resource;
        }

        public async Task<T> Create(T model)
        {
            ItemResponse<T> response;
            PartitionKey partitionKey = new PartitionKey(model.Partition());

            try
            {
                response = await container.ReadItemAsync<T>(model.Id.ToString(), partitionKey);
            }
            catch(CosmosException ex) when (ex.StatusCode == HttpStatusCode.NotFound)
            {
                response = await container.CreateItemAsync<T>(model, partitionKey);        
            }

            return response.Resource;
        }

        public async Task<T> Update(T model)
        {
            PartitionKey partitionKey = new PartitionKey(model.Partition());
            ItemResponse<T> response = await this.container.ReplaceItemAsync<T>(model, model.Id.ToString(), partitionKey);
            return response.Resource;
        }

        public async Task<Guid> Delete(Guid id, string partition)
        {
            PartitionKey partitionKey = new PartitionKey(partition);
            ItemResponse<T> response = await container.DeleteItemAsync<T>(id.ToString(), partitionKey);
            return id;
        }

        public async Task<Guid> Delete(T model)
        {
            return await this.Delete(model.Id, model.Partition());
        }

        public async Task TearDown()
        {
            DatabaseResponse response = await this.cosmos.Delete();
            this.cosmos.Dispose();
        }
    }
}
