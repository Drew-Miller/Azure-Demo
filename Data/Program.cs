using System;
using System.Threading.Tasks;
using System.Configuration;
using Microsoft.Azure.Cosmos;
using Data.Models;
using Repository;
using Demo;

namespace Data
{
    class Program
    {
        // The Azure Cosmos DB endpoint for running this sample.
        private static readonly string EndpointUri = ConfigurationManager.AppSettings["EndPointUri"];

        // The primary key for the Azure Cosmos account.
        private static readonly string PrimaryKey = ConfigurationManager.AppSettings["PrimaryKey"];

        public static async Task Main(string[] args)
        {
            await Program.RunCustom();
        }

        private static async Task RunDemo()
        {
            await DemoCosmos.Start();
        }

        private static async Task RunCustom()
        {
            CosmosDb cosmosDb = new CosmosDb(EndpointUri, PrimaryKey, "CosmosDemoDb");
            var repo = new ARepository(cosmosDb);

            var model = new A()
            {
                Id = "1",
                Field = "Class A"
            };

            await repo.Create(model);
            await repo.Delete(model);

            DatabaseResponse response = await cosmosDb.Delete();
            cosmosDb.Dispose();
        }
    }
}
