using System;
using System.Threading.Tasks;
using System.Configuration;
using Microsoft.Azure.Cosmos;
using Data;
using Data.Models;

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
            // await Demo.Run();
            var dbClient = new DbClient(EndpointUri, PrimaryKey, "CosmosDemoDb");
            var container = await dbClient.CreateContainer();
            Itemresponse<DemoModel> response = await container.CreateItemAsync<DemoModel>("Hello World!");
        }
    }
}
