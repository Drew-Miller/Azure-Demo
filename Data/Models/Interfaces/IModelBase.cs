using System;

namespace Data.Models.Interfaces
{
    public interface IModelBase
    {
        Guid Id { get; set; }
        string ToString();
    }
}
