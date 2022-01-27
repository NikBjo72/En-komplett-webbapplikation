using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Nasa_rover.API.Domain.Models
{
    public class Poem {

        public int Id { get; set; }
        public string Text { get; set; }
        public int RoverId { get; set; }
    }

}