using System;
using System.Configuration;
using System.Threading.Tasks;
using Demo;

namespace Data
{
    class Program
    {
        private static readonly string databaseId = "FoodDatabase";
        private static readonly string containerId = "FoodContainer";
        private static readonly string ApplicationName = "AzureDemo";
        private static readonly string EndpointUri = ConfigurationManager.AppSettings["EndPointUri"];
        private static readonly string PrimaryKey = ConfigurationManager.AppSettings["PrimaryKey"];

        public static async Task Main(string[] args)
        {
            CosmosDb db = new CosmosDb(databaseId, containerId, ApplicationName, EndpointUri, PrimaryKey);
            await db.Test();
        }
    }
}
