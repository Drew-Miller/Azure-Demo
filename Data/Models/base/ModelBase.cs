using System;
using Newtonsoft.Json;

namespace Data.Models.Base
{
    public abstract class ModelBase
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
