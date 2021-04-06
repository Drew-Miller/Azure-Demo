using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataController : ControllerBase
    {
        private List<string> _firstNames = new List<string>()
        {
            "Liam",
            "Olivia",
            "Noah",
            "Emma",
            "Oliver",
            "Ava",
            "William",
            "Sophia",
            "Elijah",
            "Isabella"
        };

        private List<string> _lastNames = new List<string>()
        {
            "Smith",
            "Johnson",
            "Williams",
            "Brown",
            "Jones",
            "Miller",
            "Davis",
            "Garcia",
            "Rodriguez",
            "Wilson"
        };

        private readonly ILogger<DataController> _logger;

        public DataController(ILogger<DataController> logger)
        {
            _logger = logger;
        }

        [HttpGet("Greeting")]
        public IActionResult GetGreeting()
            => Ok($"Hello World! @ {DateTime.Now: MM/dd/yy H:mm:ss}");

        [HttpGet("Users")]
        public IActionResult GetUsers()
            => Ok(this.CreateUsers());

        private IEnumerable<User> CreateUsers()
        {
            var random = new Random();
            for (int i = 0; i < 10; i++)
            {
                yield return new User()
                {
                    FirstName = this._firstNames[random.Next(0, this._firstNames.Count - 1)],
                    LastName = this._lastNames[random.Next(0, this._firstNames.Count - 1)],
                    ID = $"{i}{random.Next(0, 9)}{random.Next(0, 9)}{random.Next(0, 9)}"
                };
            }
        }
    }

    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ID { get; set; }
    }
}
