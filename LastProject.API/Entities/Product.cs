using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace LastProject.API.Entities
{
    public class Product : IEntityTypeConfiguration<Product>
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public int Amount { get; set; }

        public DateTime Date { get; set; }

        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.HasKey(x => x.Id);
        }
    }
}