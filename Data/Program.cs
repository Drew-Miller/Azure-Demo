using System;
using System.Threading.Tasks;
using Demo;

namespace Data
{
    class Program
    {
        public static async Task Main(string[] args)
        {
            await CosmosDb.Test();
        }
    }
}
