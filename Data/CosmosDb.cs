using System;
using System.Collections.Generic;
using System.Configuration;
using System.Threading.Tasks;
using Microsoft.Azure.Cosmos;
using Data.Models;
using Data.Repository;

namespace Data
{
    public class CosmosDb 
    {
        // The Cosmos client instance
        private CosmosClient client;

        // The database we will create
        private Database database;

        // Move these to app settings
        private string databaseId = "FoodDatabase";
        private string containerId = "FoodContainer";
        private static readonly string EndpointUri = ConfigurationManager.AppSettings["EndPointUri"];
        private static readonly string PrimaryKey = ConfigurationManager.AppSettings["PrimaryKey"];

        public CosmosDb(string endpoint, string key, string applicationName)
        {
            this.client = new CosmosClient(endpoint, key, new CosmosClientOptions()
            {
                ApplicationName = applicationName
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

        public static async Task Test()
        {
            CosmosDb cosmosDb = new CosmosDb(EndpointUri, PrimaryKey, "AzureDemo");
            var repo = new FoodRepository(cosmosDb);

            var beef = new Food()
            {
                Id = Guid.NewGuid(),
                Name = "Filet",
                FoodGroup = "Beef Product"
            };
            var baked = new Food()
            {
                Id = Guid.NewGuid(),
                Name = "Bagel",
                FoodGroup = "Baked Product"
            };
            var cheese = new Food()
            {
                Id = Guid.NewGuid(),
                Name = "Cheddar",
                FoodGroup = "Cheese Product"
            };
            var sausage = new Food()
            {
                Id = Guid.NewGuid(),
                Name = "Italian Sausage",
                FoodGroup = "Sausage and Luncheon Meats"
            };
            var foods = new List<Food>() { beef, baked, cheese, sausage };

            foreach(var food in foods)
            {
                await repo.Create(food);
            }
            foreach(var food in foods)
            {
                await repo.Delete(food.Id, food.Partition());
            }

            DatabaseResponse response = await cosmosDb.Delete();
            cosmosDb.Dispose();
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