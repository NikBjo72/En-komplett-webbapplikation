using System.Threading.Tasks;

namespace Nasa_rover.API.Domain.Repositories
{
    public interface IUnitOfWork
    {
         Task CompleteAsync();
    }
}