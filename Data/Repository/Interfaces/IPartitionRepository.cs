using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Data.Models.Interfaces;

namespace Data.Repository.Interfaces
{
    public interface IPartitionRepository<T> where T: IPartitionModel
    {
        IEnumerable<T> Get();
        Task<T> Get(Guid id, string partition);
        Task<T> Create(T model);
        Task<T> Update(T model);
        Task<Guid> Delete(Guid id, string partition);
        Task<Guid> Delete(T model);
        Task TearDown();
    }
}