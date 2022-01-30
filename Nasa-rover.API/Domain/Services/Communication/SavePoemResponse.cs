using Nasa_rover.API.Domain.Models;

namespace Nasa_rover.API.Domain.Services.Communication
{
    public class SavePoemResponse :BaseResponse
    {
        public Poem Poem { get; private set; }

        private SavePoemResponse(bool success, string message, Poem poem) : base(success, message)
        {
        this.Poem = poem;
        }

        public SavePoemResponse(Poem poem) : this(true, string.Empty, poem)
        { }
        public SavePoemResponse(string message) : this(false, message, null)
        { }
    }
}