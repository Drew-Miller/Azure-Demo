using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Data.Models.Interfaces;
using Data.Repository.Interfaces;
using Service.Helpers.Interfaces;

namespace Service.Controllers.Base
{
    [ApiController]
    [Route("[controller]")]
    public abstract class BaseDbController<T> : ControllerBase where T: IPartitionModel
    {
        private ILogger<DataController> _logger;

        private IPartitionRepository<T> _repo;
        
        protected IHelper<T> helper;

        public BaseDbController(ILogger<DataController> logger, IPartitionRepository<T> repo)
            => (_logger, _repo) = (logger, repo);
    }
}