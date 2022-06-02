using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Nasa_rover.API.Domain.Models;

namespace Nasa_rover.API.Domain.Repositories
{
    public interface IPoemRepository {
        Task<IEnumerable<Poem>> ListAsync();
        Task AddAsync(Poem poem);
    }

}