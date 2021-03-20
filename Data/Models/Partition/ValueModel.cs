using Newtonsoft.Json;
using Data.Models.Base;

namespace Data.Models.Partition
{
    public abstract class ValueModel: ModelBase
    {
        public abstract string Value { get; }
    }
}
