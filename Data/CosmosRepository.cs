using Data.Interfaces;
using Data.Models;
using Data.Models.Interfaces;
using Data.Repository;
using Data.Repository.Interfaces;

namespace Data
{
    public class CosmosRepository: ICosmosRepository
    {
        public IFoodRepository<IFood> FoodRepository { get; }

        public CosmosRepository(ICosmosDb db)
        {
            this.FoodRepository = new FoodRepository<IFood>(db);
        }
    }
}