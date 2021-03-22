using Data.Models.Base;
using Data.Models.Interfaces;

namespace Data.Models
{
    public class Food: PartitionModel, IFood
    {
        public string Name { get; set; }
        public string FoodGroup { get; set; }
        public override string Partition() { return this.FoodGroup; }
    }
}
