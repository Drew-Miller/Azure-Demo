using System.Threading.Tasks;
using Data;
using Data.Models;
using Repository.Partition;

namespace Repository
{
    public class ARepository: ValuePartitionRepository<A>
    {
        public ARepository(CosmosDb cosmos): base(cosmos) { }
    }
}