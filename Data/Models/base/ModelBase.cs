using System;
using Newtonsoft.Json;

namespace Data.Models.Base
{
    public abstract class ModelBase
    {
        [JsonProperty(PropertyName = "id")]
        public Guid Id { get; set; }
    }
}
