using System.Threading.Tasks;
using Nasa_rover.API.Domain.Repositories;
using Nasa_rover.API.Persistence.Contexts;

namespace Nasa_rover.API.Persistence.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _context;

        public UnitOfWork(AppDbContext context)
        {
            _context = context;     
        }

        public async Task CompleteAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}