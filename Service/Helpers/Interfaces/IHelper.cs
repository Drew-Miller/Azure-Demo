using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Data.Models.Interfaces;
using Data.Repository.Interfaces;

namespace Service.Helpers.Interfaces
{
    public interface IHelper<T>
        where T: IPartitionModel
    {
        IPartitionRepository<T> Repo { get; }
        IEnumerable<T> Get();
        Task<T> Get(Guid id, string partition);
        Task<T> Create(T model);
        Task<Guid> Delete(T model);
        Task<Guid> Delete(Guid id, string partition);
    }
}