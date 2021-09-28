using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Naylah;
using LastProject.API.ORM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;

namespace LastProject
{
    public class ProjectService : Service<ProjectServiceOptions>
    {
        public ProjectService(IHostEnvironment environment, IConfiguration configuration) : base(environment, configuration)
        {
         Options.Name = "Project API";
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddControllers();

            services.AddMemoryCache();

            services.AddDbContext<LastDbContext>(opt => opt.UseInMemoryDatabase("ProjectDB"));

            services.AddSwaggerGen();
        }

        public override void Configure(IApplicationBuilder app)
        {
            base.Configure(app);

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Needs API V1");
            });

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
