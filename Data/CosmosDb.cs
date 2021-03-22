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

        public async Task Test()
        {
            var repo = new FoodRepository(this);

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

            DatabaseResponse response = await this.Delete();
            this.Dispose();
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