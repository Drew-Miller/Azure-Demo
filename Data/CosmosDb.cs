using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Net;
using Microsoft.Azure.Cosmos;

namespace Data
{
    public class CosmosDb 
    {
        // The Cosmos client instance
        private CosmosClient client;

        // The database we will create
        private Database database;

        // Move these to app settings
        private string databaseId = "DemoDatabase";
        private string containerId = "DemoContainer";

        public CosmosDb(string endpoint, string key, string name)
        {
            this.client = new CosmosClient(endpoint, key, new CosmosClientOptions()
            {
                ApplicationName = name
            });

            try
            {
                this.database = this.client.CreateDatabaseIfNotExistsAsync(this.databaseId).Result;
            }
            catch (System.Exception)
            {
                throw;
            }   
        }

        public Task<ContainerResponse> CreateContainer(string containerName)
        {
            return this.database.CreateContainerIfNotExistsAsync(this.containerId, containerName, 400);
        }

        public Task<DatabaseResponse> Delete()
        {
            return this.database.DeleteAsync();
        }

        public void Dispose() 
        {
            this.client.Dispose();
        }
    }
}