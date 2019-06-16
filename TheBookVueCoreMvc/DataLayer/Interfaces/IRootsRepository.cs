using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TheBookVueCoreMvc.Models;

namespace TheBookVueCoreMvc.DataLayer.Interfaces
{
    public interface IPartsRepository
    {
        Task<List<Part>> GetPartsAsync();
        Task<Part> UpdatePartAsync(Part upPart);
    }
}