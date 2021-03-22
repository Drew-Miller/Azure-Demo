using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Data.Interfaces;
using Data.Models;
using Data.Models.Interfaces;
using Data.Repository.Interfaces;
using Service.Controllers.Base;

namespace Service.Controllers
{
    public class FoodController : BaseDbController<IFoodRepository<Food>, Food>
    {
        protected IEnumerable<IFood> _foods;

        public FoodController(ILogger<DataController> logger, IFoodRepository<Food> repo): base(logger, repo)
        {
            this._repo = repo;

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
                await this._repo.Create(food);
            }

            return Ok(this._foods);
        }

        [HttpGet("delete")]
        public async Task<IActionResult> Delete()
        {
            foreach(var food in this._foods)
            {
                await this._repo.Delete(food.Id, food.Partition());
            }

            return Ok(this._foods);
        }

        [HttpGet("teardown")]
        public async Task<IActionResult> TearDown()
        {
            await this._repo.TearDown();
            return Ok();
        }
    }
}
