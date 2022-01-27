using Nasa_rover.API.Persistence.Contexts;
using Nasa_rover.API.Domain.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Nasa_rover.API.Domain.Repositories;
using System.Linq;


namespace Nasa_rover.API.Persistence.Repositories
{
    public class SpacecraftRepository : BaseRepository, ISpacecraftRepository
    {
        public SpacecraftRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Rover>> ListAsync()
        {
            return await _context.Rovers.ToListAsync();
        }

        public async Task<Rover> GetRoverAsync(string name, bool includePoem = false)
        {
            IQueryable<Rover> rovers;

            if (includePoem)
            {
            rovers = _context.Rovers
            .Include(c => c.Poems);
            }
            else
            {
            rovers = _context.Rovers;
            }

            rovers = rovers.Where(c => c.Name == name);

            return await rovers.FirstOrDefaultAsync();
        }
    }
}