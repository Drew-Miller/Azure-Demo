using System;
using System.Threading.Tasks;
using Data.Models.Interfaces;
using Data.Repository.Interfaces;
using Service.Helpers.Interfaces;

namespace Service.Helpers.Base
{
    public abstract class BaseHelper<T>: IHelper<T>
        where T: IPartitionModel
    {
        protected IPartitionRepository<T> repo;

        public IPartitionRepository<T> Repo { get { return this.repo; }}

        public BaseHelper(IPartitionRepository<T> repo)
            => this.repo = repo;

        public async Task<T> Create(T model)
        {
            return await repo.Create(model);
        }

        public async Task<Guid> Delete(T model)
        {
            return await repo.Delete(model);
        }

        public async Task<Guid> Delete(Guid id, string partition)
        {
            return await repo.Delete(id, partition);
        }
    }
}