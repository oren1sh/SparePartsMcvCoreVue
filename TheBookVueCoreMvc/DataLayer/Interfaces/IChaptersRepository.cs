using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TheBookVueCoreMvc.Models;

namespace TheBookVueCoreMvc.DataLayer.Interfaces
{
    public interface ICarsRepository
    {
        Task<List<Car>> GetCarsAsync();
        Task<Car> UpdateCarAsync(Car upCar);
    }
}