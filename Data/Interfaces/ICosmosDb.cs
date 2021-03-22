using System.Threading.Tasks;
using Microsoft.Azure.Cosmos;

namespace Data.Interfaces
{
    public interface ICosmosDb
    {
        Task<ContainerResponse> CreateContainer(string containerName);
        Task<DatabaseResponse> Delete();
        void Dispose();
    }
}