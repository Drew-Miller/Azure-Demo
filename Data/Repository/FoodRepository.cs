using System.Threading.Tasks;
using Microsoft.Azure.Cosmos;
using Data;
using Data.Models;
using Data.Repository.Base;

namespace Data.Repository
{
    public class FoodRepository: BasePartitionRepository<Food>
    {
        public FoodRepository(CosmosDb cosmos): base(cosmos, "/FoodGroup") { }
    }
}