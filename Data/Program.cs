using System;
using System.Threading.Tasks;
using System.Configuration;
using Microsoft.Azure.Cosmos;
using Data;
using Data.Models;

namespace Data
{
    // The Azure Cosmos DB endpoint for running this sample.
    private static readonly string EndpointUri = ConfigurationManager.AppSettings["EndPointUri"];

    // The primary key for the Azure Cosmos account.
    private static readonly string PrimaryKey = ConfigurationManager.AppSettings["PrimaryKey"];

    class Program
    {
        public static async Task Main(string[] args)
        {
            // await Demo.Run();
            var dbClient = new DbClient(EndpointUri, PrimaryKey, 'CosmosDemoDb');
            var container = dbClient.CreateContainer();
            Itemresponse<string> response = await container.CreateItemAsync<Model>('Hello World!');
        }
    }
}
