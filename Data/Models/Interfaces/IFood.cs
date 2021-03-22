namespace Data.Models.Interfaces
{
    public interface IFood: IPartitionModel
    {
        string Name { get; set; }
        string FoodGroup { get; set; }
    }
}
