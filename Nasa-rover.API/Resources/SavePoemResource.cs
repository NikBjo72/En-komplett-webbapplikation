using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Nasa_rover.API.Recourses
{
    public class SavePoemResource {
        [Required]
        [MaxLength(30)]
        public string Heading { get; set; }

        [Required]
        [MaxLength(200)]
        public string Text { get; set; }

        [Required]
        [MaxLength(30)]
        public string Author  { get; set; }

        [Required]
        public int RoverId { get; set; }

        public DateTime CreatedDate  { get; set; } = DateTime.Today;

    }
}
