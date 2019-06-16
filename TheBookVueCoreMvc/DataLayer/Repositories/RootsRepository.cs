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
    public class RootsRepository : IRootsRepository
    {
        private readonly AppDbContext _context;

        public RootsRepository(AppDbContext context)
        {
            _context = context;
        }


        /// <summary>
        /// get all the roots 
        /// </summary>
        /// <returns></returns>
        public async Task<List<Root>> GetRootsAsync()
        {
            return await _context.CommodityRoots.ToListAsync();

        }


        /// <summary>
        /// update root name by id
        /// </summary>
        /// <param name="upRoot"></param>
        /// <returns></returns>
        public async Task<Root> UpdateRootAsync(Root upRoot)
        {
            Root refRoot = await _context.CommodityRoots.FirstOrDefaultAsync(r => r.Id == upRoot.Id);

            if (refRoot == null || refRoot == default(Root))
            {
                return null;

            }
            refRoot.Name = upRoot.Name;
            _context.CommodityRoots.Update(refRoot);
            await _context.SaveChangesAsync();

            return refRoot;


        }

    }
}
