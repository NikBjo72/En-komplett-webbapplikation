using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Nasa_rover.API.Domain.Repositories;
using Nasa_rover.API.Domain.Services;
using Nasa_rover.API.Persistence.Contexts;
using Nasa_rover.API.Persistence.Repositories;
using Nasa_rover.API.Services;

namespace Nasa_rover.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddDbContext<AppDbContext>(options =>
	            options.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));

            services.AddScoped<ISpacecraftRepository, SpacecraftRepository>();
            services.AddScoped<ISpacecraftService, SpacecraftService>();

            services.AddScoped<IPoemRepository, PoemRepository>();
            services.AddScoped<IPoemService, PoemService>();

            services.AddScoped<IUnitOfWork, UnitOfWork>();

            services.AddAutoMapper(Assembly.GetExecutingAssembly());

            services.AddControllers();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseDefaultFiles();

            app.UseStaticFiles();

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
