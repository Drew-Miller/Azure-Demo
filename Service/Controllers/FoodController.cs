using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Data;

namespace Service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FoodController : ControllerBase
    {
        private readonly ILogger<DataController> _logger;
        private readonly CosmosDb _db;

        public FoodController(ILogger<DataController> logger, CosmosDb db)
        {
            _logger = logger;
            _db = db;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            await this._db.Test();
            return Ok();
        }
    }
}
