using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Net;
using Microsoft.Azure.Cosmos;

namespace Data.Cosmos
{
    public class CosmosDb 
    {
        // The Cosmos client instance
        private CosmosClient cosmosClient;

        // The database we will create
        private Database database;

        // Move these to app settings
        private string databaseId = "DemoDatabase";
        private string containerId = "DemoContainer";

        public CosmosDb(string endpoint, string key, string name)
        {
            this.cosmosClient = new CosmosClient(endpoint, key, new CosmosClientOptions()
            {
                ApplicationName = name
            });

            this.CreateDatabase();
        }

        public async Task<Container> CreateContainer(string containerName)
        {
            Container container = await this.database.CreateContainerIfNotExistsAsync(this.containerId, containerName, 400);
            Console.WriteLine("Created Container: {0}\n", this.containerId);
            return container;
        }

        public Task<DatabaseResponse> Delete()
        {
            return this.database.DeleteAsync();
        }

        public void Dispose() 
        {
            this.cosmosClient.Dispose();
        }

        private async void CreateDatabase()
        {
            this.database = await this.cosmosClient.CreateDatabaseIfNotExistsAsync(this.databaseId);
        }
    }
}