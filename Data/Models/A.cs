using Data.Models.Partition;

namespace Data.Models
{
    public class A: ValueModel
    {
        public override string Value { get { return ValueGroup.First; } }
        public string Field { get; set;}
    }
}