using Microsoft.Azure.Cosmos;
using Newtonsoft.Json;
using Data.Models.Base;

namespace Data.Models
{
    public class Food: PartitionModel
    {
        public string Name { get; set; }
        public string FoodGroup { get; set; }

        public override string Partition()
        {
            return this.FoodGroup;
        }
    }
}
