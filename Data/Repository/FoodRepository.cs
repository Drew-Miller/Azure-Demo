using System.Threading.Tasks;
using Microsoft.Azure.Cosmos;
using Data.Interfaces;
using Data.Models;
using Data.Models.Interfaces;
using Data.Repository.Base;
using Data.Repository.Interfaces;

namespace Data.Repository
{
    public class FoodRepository: PartitionRepository<Food>, IFoodRepository<Food>
    {
        public FoodRepository(ICosmosDb cosmos): base(cosmos, "/FoodGroup") { }
    }
}