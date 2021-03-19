using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Net;
using Microsoft.Azure.Cosmos;

namespace Data
{
    public class DbClient 
    {
        // The Cosmos client instance
        private CosmosClient cosmosClient;

        // The database we will create
        private Database database;

        // Move these to app settings
        private string databaseId = "DemoDatabase";
        private string containerId = "DemoContainer";

        public DbClient(string endpoint, string key, string name)
        {
            this.cosmosClient = new CosmosClient(endpoint, key, new CosmosClientOptions()
            {
                ApplicationName = name
            });
        }

        public Container CreateContainer(string containerName)
        {
            Container container = await this.database.CreateContainerIfNotExistsAsync(containerId, containerName, 400);
            Console.WriteLine("Created Container: {0}\n", this.container.Id);
            return container;
        }

    }
}