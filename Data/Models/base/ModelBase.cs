using System;
using Newtonsoft.Json;
using Data.Models.Interfaces;

namespace Data.Models.Base
{
    public abstract class ModelBase: IModelBase
    {
        [JsonProperty(PropertyName = "id")]
        public Guid Id { get; set; }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
