using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Data.Models.Interfaces;
using Data.Repository.Interfaces;

namespace Service.Controllers.Base
{
    [ApiController]
    [Route("[controller]")]
    public abstract class BaseDbController<T, U> : ControllerBase
        where T: IPartitionRepository<U>
        where U: IPartitionModel
    {
        private protected ILogger<DataController> _logger;
        private protected T _repo;

        public BaseDbController(ILogger<DataController> logger, T repo)
            => (_logger, _repo) = (logger, repo);
    }
}
