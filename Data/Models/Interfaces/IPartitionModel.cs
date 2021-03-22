using System;
using Newtonsoft.Json;
using Microsoft.Azure.Cosmos;

namespace Data.Models.Interfaces
{
    public interface IPartitionModel: IModelBase
    {
        string Partition();
    }
}
