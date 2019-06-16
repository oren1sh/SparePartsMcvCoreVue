using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheBookVueCoreMvc.DataLayer.Interfaces;
using TheBookVueCoreMvc.Models;

namespace TheBookVueCoreMvc.DataLayer.Repositories
{
    public class CarsRepository : ICarsRepository
    {
        private readonly AppDbContext _context;

        public CarsRepository(AppDbContext context)
        {
            _context = context;
        }


        /// <summary>
        /// get all the Parts 
        /// </summary>
        /// <returns></returns>
        public async Task<List<Car>> GetCarsAsync()
        {
            List<Car> Cars =  await _context.CommodityCars.Include(c => c.Parts).ToListAsync();
            Cars.ForEach(item => { item.TypeId = item.Type + "-" + item.Id;});
            Cars.ForEach(item =>
            {
                foreach (var Part in item.Parts)
                {
                    Part.TypeId = Part.Type + "-" + Part.Id;
                }
            });
            return Cars;

        }


        /// <summary>
        /// update Car name by id
        /// </summary>
        /// <param name="upCars"></param>
        /// <returns></returns>
        public async Task<Car> UpdateCarAsync(Car upCar)
        {
            Car refCar = await _context.CommodityCars.FirstOrDefaultAsync(r => r.Id == upCar.Id);

            if (refCar == null || refCar == default(Car))
            {
                return null;

            }
            refCar.Name = upCar.Name;
            _context.CommodityCars.Update(refCar);
            await _context.SaveChangesAsync();

            return refCar;


        }
    }
}
