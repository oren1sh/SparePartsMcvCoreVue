using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TheBookVueCoreMvc.Models;

namespace TheBookVueCoreMvc.DataLayer.Interfaces
{
    public interface IChaptersRepository
    {
        Task<List<Chapter>> GetChaptersAsync();
        Task<Chapter> UpdateChapterAsync(Chapter upChapter);
    }
}