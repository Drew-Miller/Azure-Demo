using System;
using System.Threading.Tasks;
using Microsoft.Azure.Cosmos;
using Data.Interfaces;

namespace Data
{
    public class CosmosDb: ICosmosDb
    {
        // The Cosmos client instance
        private CosmosClient client;

        // The database we will create
        private Database database;

        // The container to add our items.
        private string containerId;

        public CosmosDb(string databaseId, string containerId, string applicationName, string endpointUri, string primaryKey)
        {
            this.containerId = containerId;

            this.client = new CosmosClient(endpointUri, primaryKey, new CosmosClientOptions()
            {
                ApplicationName = applicationName
            });

            try
            {
                this.database = this.client.CreateDatabaseIfNotExistsAsync(databaseId).Result;
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