namespace Nasa_rover.API.Domain.Services.Communication
{
    public abstract class BaseResponse
    {
        public bool Success { get; protected set; }
        public string Message { get; protected set; }

        public BaseResponse(bool success, string message)
        {
        this.Success = success;
        this.Message = message;
        }
    }
}