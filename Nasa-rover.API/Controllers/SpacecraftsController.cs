using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Nasa_rover.API.Domain.Models;
using Nasa_rover.API.Domain.Services;
using Nasa_rover.API.Recourses;

namespace Nasa_rover.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class SpacecraftsController : Controller
    {
        private readonly ISpacecraftService _spacecraftService;
        private readonly IMapper _mapper;

        public SpacecraftsController(ISpacecraftService spacecraftServices, IMapper mapper)
        {
            _spacecraftService = spacecraftServices;
            _mapper = mapper;
        }
        
        [HttpGet]
        public async Task<IEnumerable<Rover>> GetAllAcync()
        {
            var rovers = await _spacecraftService.ListAsync();
            return rovers;
        }

        [HttpGet("rover")]
        public async Task<ActionResult<Rover>> Get(string roverName, bool includePoem = false) // (string name of Rover)
        {
        
          try
          {
            var rover  = await _spacecraftService.GetRoverAsync(roverName, includePoem);

            if (rover == null) return NotFound();

            //return _mapper.Map<Rover>(results);
            return rover;

            }catch (Exception)
            {
              return this.StatusCode(StatusCodes.Status500InternalServerError, "Database faliure");
            }
          }
        }
}
