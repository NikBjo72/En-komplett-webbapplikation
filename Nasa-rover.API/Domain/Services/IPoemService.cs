using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Nasa_rover.API.Domain.Models;
using Nasa_rover.API.Domain.Services.Communication;

namespace Nasa_rover.API.Domain.Repositories
{
    public interface IPoemService {
        Task<IEnumerable<Poem>> ListAsync();
        Task<SavePoemResponse> SaveAsync(Poem poem);
    }

}