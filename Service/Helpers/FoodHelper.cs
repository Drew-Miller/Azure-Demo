using Data.Models.Interfaces;
using Data.Repository.Interfaces;
using Service.Helpers.Base;
using Service.Helpers.Interfaces;

namespace Service.Helpers
{
    public class FoodHelper<T>: BaseHelper<T> where T: IFood
    {
        public FoodHelper(IFoodRepository<T> repo): base(repo) { }
    }
}