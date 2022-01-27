using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Nasa_rover.API.Domain.Models
{
    public abstract class Spacecraft {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string shortDescription { get; set; }
        public int Weight { get; set; }
        public int PoemId { get; set; }
        public string ImageUrl { get; set; }
        public string SmallImageUrl { get; set; }
        public IList<Poem> Poems { get; set; } = new List<Poem>();
    }

}