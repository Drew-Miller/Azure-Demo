using System.Threading.Tasks;
using Microsoft.Azure.Cosmos;
using Data;
using Data.Models.Partition;
using Repository.Base;

namespace Repository.Partition
{
    public abstract class ValuePartitionRepository<T>: BasePartitionRepository<T> where T : ValueModel
    {
        public ValuePartitionRepository(CosmosDb cosmos): base(cosmos, "/Value") { }

        protected override PartitionKey GetPartitionKey(T model)
        {
            return new PartitionKey(model.Value);
        }
    }
}