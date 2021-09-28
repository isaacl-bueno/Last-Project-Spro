using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project.Core.Models;
using LastProject.API.ORM;
using LastProject.API.Entities;
using Microsoft.Extensions.Caching.Memory;

namespace ProductController.Api.Controller
{
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly LastDbContext lastDbContext;

        public ProductController(LastDbContext lastDbContext)
        {
            this.lastDbContext = lastDbContext;
        }

        [HttpGet("")]
        public IEnumerable<Product> GetAll()
        {
            return lastDbContext.Set<Product>().AsQueryable().ToList();
        }

        [HttpGet("{id}")]
        public async Task<Product> GetById([FromRoute] string id)
        {
            return lastDbContext.Set<Product>().AsQueryable().Where(x => x.Id == id).FirstOrDefault() ?? throw new Exception("Item não encontrado");
        }

        [HttpPost("")]
        public async Task<Product> Upsert([FromBody] Product product)
        {
            var product1 = lastDbContext.Set<Product>().AsQueryable().Where(x => x.Id == product.Id).FirstOrDefault();

            if (product1 == null)
            {
                product1 = new Product();
                product1.Id = Guid.NewGuid().ToString();

                lastDbContext.Set<Product>().Add(product1);
            }

            product1.Name = product.Name;
            product1.Amount = product.Amount;
            product1.Date = product.Date;

            lastDbContext.SaveChanges();

            return await GetById(product1.Id);
        }

        [HttpDelete("{id}")]
        public void Delete([FromRoute] string id)
        {
            var product1 = lastDbContext.Set<Product>().AsQueryable().Where(x => x.Id == id).FirstOrDefault() ?? throw new Exception("Item não encontrado");
            lastDbContext.Set<Product>().Remove(product1);
            lastDbContext.SaveChanges();
        }
    }
}
