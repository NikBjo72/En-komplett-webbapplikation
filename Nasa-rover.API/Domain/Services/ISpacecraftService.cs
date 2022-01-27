using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Nasa_rover.API.Domain.Models;

namespace Nasa_rover.API.Domain.Services
{
    public interface ISpacecraftService {
        Task<IEnumerable<Rover>> ListAsync();
        Task<Rover> GetRoverAsync(string name, bool includePoem = false);
    }

}