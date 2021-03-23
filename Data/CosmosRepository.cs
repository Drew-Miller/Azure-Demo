using Data.Interfaces;
using Data.Models;
using Data.Repository;
using Data.Repository.Interfaces;

namespace Data
{
    public class CosmosRepository: ICosmosRepository
    {
        public IFoodRepository<Food> FoodRepository { get; }

        public CosmosRepository(ICosmosDb db)
        {
            this.FoodRepository = new FoodRepository<Food>(db);
        }
    }
}