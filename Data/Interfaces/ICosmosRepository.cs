using Data.Models;
using Data.Models.Interfaces;
using Data.Repository.Interfaces;

namespace Data.Interfaces
{
    public interface ICosmosRepository
    {
        IFoodRepository<IFood> FoodRepository { get; }
    }
}