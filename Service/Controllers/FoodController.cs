using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Cosmos;
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
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery(Name = "id")] string id, [FromQuery(Name = "partition")] string partition)
        {
            if (this.GetPartitionQuery(id, partition, out Guid gId, out string partitionKey))
            {
                var result = await helper.Get(gId, partitionKey);
                return Ok(result);
            }
            else
            {
                var result = helper.Get();
                return Ok(result);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromQuery(Name = "id")] string id, [FromQuery(Name = "partition")] string partition)
        {
            if (this.GetPartitionQuery(id, partition, out Guid gId, out string partitionKey))
            {
                try
                {
                    return Ok(await helper.Delete(gId, partitionKey));
                }
                catch(CosmosException ex) when (ex.StatusCode == HttpStatusCode.NotFound)
                {
                    Console.WriteLine("Coud not find item to delete");
                }
            }

            return Ok();
        }

        private bool GetPartitionQuery(string id, string partition, out Guid outId, out string outString)
        {
            outId = Guid.Empty;
            outString = string.Empty;

            if(!string.IsNullOrWhiteSpace(id) &&
                !string.IsNullOrWhiteSpace(partition)
                && Guid.TryParse(id, out outId))
            {
                outString = partition;
                return true;
            }
            return false;
        }
    }
}
