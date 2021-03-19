using System;
using System.Threading.Tasks;
using System.Configuration;
using Microsoft.Azure.Cosmos;
using Data.Cosmos;
using Data.Cosmos.Models;
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
            var dbClient = new CosmosDb(EndpointUri, PrimaryKey, "CosmosDemoDb");
            var container = await dbClient.CreateContainer("/Model");

            var model = new DemoModel()
            {
                Id = "1",
                Value = "Hello World!"
            };
            ItemResponse<DemoModel> create = await container.CreateItemAsync<DemoModel>(model, new PartitionKey(model.Id));
            Console.WriteLine("Created Model {0} {1}\n", create.Resource.Id, create.Resource.Value);
            ItemResponse<DemoModel> delete = await container.DeleteItemAsync<DemoModel>(model.Id, new PartitionKey(model.Id));
            Console.WriteLine("Deleted Model {0} {1}\n", delete.Resource.Id, delete.Resource.Value);

            DatabaseResponse response = await dbClient.Delete();
            Console.WriteLine("Deleted Database:\n");
            Console.WriteLine(response);
            Console.WriteLine("\n");

            dbClient.Dispose();
        }
    }
}
