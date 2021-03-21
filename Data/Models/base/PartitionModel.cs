using System;
using Newtonsoft.Json;
using Microsoft.Azure.Cosmos;

namespace Data.Models.Base
{
    public abstract class PartitionModel: ModelBase
    {
        public abstract string Partition();

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
