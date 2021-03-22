using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Data;
using Data.Interfaces;
using Data.Models;
using Data.Models.Interfaces;
using Data.Repository;
using Data.Repository.Interfaces;

namespace Service
{
    public class Startup
    {
        public Startup(IWebHostEnvironment env)
        {
            var environment = env.EnvironmentName;
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", reloadOnChange: true, optional: true)
                .AddJsonFile($"appsettings.{environment}.json", optional: true)
                .AddJsonFile($"secrets.json", optional: true);
            this.Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<ICosmosDb, CosmosDb>(x => this.SetupCosmos());
            services.AddSingleton<ICosmosRepository, CosmosRepository>();
            services.AddSingleton<IFoodRepository<Food>, FoodRepository>();
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        private CosmosDb SetupCosmos()
        {
            var cosmosConfig = this.Configuration.GetSection("Cosmos");
            var databaseId = cosmosConfig.GetValue<string>("DatabaseId");
            var containerId = cosmosConfig.GetValue<string>("ContainerId");
            var applicationName = cosmosConfig.GetValue<string>("ApplicationName");
            var endpointUri = cosmosConfig.GetValue<string>("EndpointUri");
            var primaryKey = cosmosConfig.GetValue<string>("PrimaryKey");
            return new CosmosDb(databaseId, containerId, applicationName, endpointUri, primaryKey);
        }
    }
}
