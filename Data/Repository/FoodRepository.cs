using Data.Interfaces;
using Data.Models.Interfaces;
using Data.Repository.Base;
using Data.Repository.Interfaces;

namespace Data.Repository
{
    public class FoodRepository<T>: PartitionRepository<T>, IFoodRepository<T> where T: IFood
    {
        public FoodRepository(ICosmosDb cosmos): base(cosmos, "/FoodGroup") { }
    }
}