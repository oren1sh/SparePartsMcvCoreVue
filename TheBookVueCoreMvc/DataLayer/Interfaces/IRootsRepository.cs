using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TheBookVueCoreMvc.Models;

namespace TheBookVueCoreMvc.DataLayer.Interfaces
{
    public interface IRootsRepository
    {
        Task<List<Root>> GetRootsAsync();
        Task<Root> UpdateRootAsync(Root upRoot);
    }
}