using System;
using Newtonsoft.Json;

namespace Data.Models.Interfaces
{
    public interface IPartitionModel: IModelBase
    {
        string Partition();
    }
}
