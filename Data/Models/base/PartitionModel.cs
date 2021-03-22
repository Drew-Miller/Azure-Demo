using Data.Models.Interfaces;

namespace Data.Models.Base
{
    public abstract class PartitionModel: ModelBase, IPartitionModel
    {
        public abstract string Partition();
    }
}
