using Nasa_rover.API.Persistence.Contexts;
using Nasa_rover.API.Domain.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Nasa_rover.API.Domain.Repositories;
using System.Linq;


namespace Nasa_rover.API.Persistence.Repositories
{
    public class PoemRepository : BaseRepository, IPoemRepository
    {
        public PoemRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Poem>> ListAsync()
        {
            return await _context.Poems.ToListAsync();
        }

        public async Task AddAsync(Poem poem)
	    {
	    	await _context.Poems.AddAsync(poem);
	    }
    }
}