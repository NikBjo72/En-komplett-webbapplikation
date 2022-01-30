using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Nasa_rover.API.Domain.Models;
using Nasa_rover.API.Domain.Repositories;
using Nasa_rover.API.Domain.Services;
using Nasa_rover.API.Recourses;
using Nasa_rover.API.Extensions;

namespace Nasa_rover.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class PoemsController : Controller
    {
        private readonly IPoemService _poemService;
        private readonly IMapper _mapper;

        public PoemsController(IPoemService poemServices, IMapper mapper)
        {
            _poemService = poemServices;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<PoemResource>> GetAllAcync()
        {
            var poems = await _poemService.ListAsync();
            var resource = _mapper.Map<IEnumerable<Poem>, IEnumerable<PoemResource>>(poems);
            
            return resource;
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] SavePoemResource resource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState.GetErrorMessages());
            }

            var poem = _mapper.Map<SavePoemResource, Poem>(resource);
            var result = await _poemService.SaveAsync(poem);

            if (!result.Success)
            {
		        return BadRequest(result.Message);
            }

            var poemResource = _mapper.Map<Poem, PoemResource>(result.Poem);
            return Ok(poemResource);
        } 
        
    }
}
