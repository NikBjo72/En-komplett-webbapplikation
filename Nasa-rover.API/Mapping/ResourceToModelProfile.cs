using AutoMapper;
using Nasa_rover.API.Domain.Models;
using Nasa_rover.API.Recourses;

namespace Nasa_rover.API.Mapping
{
    public class ResourceToModelProfile : Profile
    {
        public ResourceToModelProfile()
        {
            CreateMap<SavePoemResource, Poem>();
        }
    }
}