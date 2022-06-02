

using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Nasa_rover.API.Domain.Models;
using Nasa_rover.API.Domain.Repositories;
using Nasa_rover.API.Domain.Services;
using Nasa_rover.API.Domain.Services.Communication;

namespace Nasa_rover.API.Services
{
    public class PoemService : IPoemService
    {
        private readonly IPoemRepository _poemRepository;
        private readonly IUnitOfWork _unitOfWork;

        public PoemService(IPoemRepository poemRepository, IUnitOfWork unitOfWork)
        {
            _poemRepository = poemRepository;
            _unitOfWork = unitOfWork;
        }
        public async Task<IEnumerable<Poem>> ListAsync()
        {
            return await _poemRepository.ListAsync();
        }

        public async Task<SavePoemResponse> SaveAsync(Poem poem)
	{
		try
		{
			await _poemRepository.AddAsync(poem);
			await _unitOfWork.CompleteAsync();
			
			return new SavePoemResponse(poem);
		}
		catch (Exception ex)
		{
			// Do some logging stuff
			return new SavePoemResponse($"An error occurred when saving the category: {ex.Message}");
		}
	}

    }
}