using Data.Models.Interfaces;

namespace Data.Repository.Interfaces
{
    public interface IFoodRepository<T>: IPartitionRepository<T> where T: IFood { }
}