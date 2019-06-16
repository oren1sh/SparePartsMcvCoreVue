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
    public class PartsRepository : IPartsRepository
    {
        private readonly AppDbContext _context;

        public PartsRepository(AppDbContext context)
        {
            _context = context;
        }


        /// <summary>
        /// get all the Parts 
        /// </summary>
        /// <returns></returns>
        public async Task<List<Part>> GetPartsAsync()
        {
            return await _context.CommodityParts.ToListAsync();

        }


        /// <summary>
        /// update Part name by id
        /// </summary>
        /// <param name="upPart"></param>
        /// <returns></returns>
        public async Task<Part> UpdatePartAsync(Part upPart)
        {
            Part refPart = await _context.CommodityParts.FirstOrDefaultAsync(r => r.Id == upPart.Id);

            if (refPart == null || refPart == default(Part))
            {
                return null;

            }
            refPart.Name = upPart.Name;
            _context.CommodityParts.Update(refPart);
            await _context.SaveChangesAsync();

            return refPart;


        }

    }
}
