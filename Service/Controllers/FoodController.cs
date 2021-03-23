using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Data.Interfaces;
using Data.Models;
using Data.Repository.Interfaces;
using Service.Controllers.Base;
using Service.Helpers;
using Service.Helpers.Interfaces;

namespace Service.Controllers
{
    public class FoodController : BaseDbController<Food>
    {
        protected IEnumerable<Food> _foods;

        public FoodController(ILogger<DataController> logger, IFoodRepository<Food> repo): base(logger, repo)
        {
            helper = new FoodHelper<Food>(repo);
            var beef = new Food()
            {
                Id = new Guid("185d7c5b-3ec8-4203-9765-ce41a64c5bd5"),
                Name = "Filet",
                FoodGroup = "Beef Product"
            };
            var baked = new Food()
            {
                Id = new Guid("e122110a-aab7-4666-8138-39a36191927b"),
                Name = "Bagel",
                FoodGroup = "Baked Product"
            };
            var cheese = new Food()
            {
                Id = new Guid("4071930c-cd0f-467e-9ec6-457290794add"),
                Name = "Cheddar",
                FoodGroup = "Cheese Product"
            };
            var sausage = new Food()
            {
                Id = new Guid("ad452e00-84c1-4b68-a730-c44516622d84"),
                Name = "Italian Sausage",
                FoodGroup = "Sausage and Luncheon Meats"
            };
            this._foods = new List<Food>() { beef, baked, cheese, sausage };
        }

        [HttpGet("init")]
        public async Task<IActionResult> Init()
        {
            foreach(var food in this._foods)
            {
                await helper.Create(food);
            }

            return Ok(this._foods);
        }

        [HttpGet("delete")]
        public async Task<IActionResult> Delete()
        {
            foreach(var food in this._foods)
            {
                await helper.Delete(food.Id, food.Partition());
            }

            return Ok(this._foods);
        }
    }
}
