

using System.Collections.Generic;
using System.Threading.Tasks;
using Nasa_rover.API.Domain.Models;
using Nasa_rover.API.Domain.Repositories;
using Nasa_rover.API.Domain.Services;

namespace Nasa_rover.API.Services
{
    public class SpacecraftService : ISpacecraftService
    {
        private readonly ISpacecraftRepository _spacecraftRepository;

        public SpacecraftService(ISpacecraftRepository spacecraftRepository)
        {
            this._spacecraftRepository = spacecraftRepository;
        }
        public async Task<IEnumerable<Rover>> ListAsync()
        {
            return await _spacecraftRepository.ListAsync();
        }

        public async Task<Rover> GetRoverAsync(string name, bool includePoem = false)
        {
            return await _spacecraftRepository.GetRoverAsync(name, includePoem);
        }

    }
}