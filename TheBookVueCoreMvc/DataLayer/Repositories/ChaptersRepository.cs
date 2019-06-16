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
    public class ChaptersRepository : IChaptersRepository
    {
        private readonly AppDbContext _context;

        public ChaptersRepository(AppDbContext context)
        {
            _context = context;
        }


        /// <summary>
        /// get all the roots 
        /// </summary>
        /// <returns></returns>
        public async Task<List<Chapter>> GetChaptersAsync()
        {
            List<Chapter> chapters =  await _context.CommodityChapters.Include(c => c.Roots).ToListAsync();
            chapters.ForEach(item => { item.TypeId = item.Type + "-" + item.Id;});
            chapters.ForEach(item =>
            {
                foreach (var root in item.Roots)
                {
                    root.TypeId = root.Type + "-" + root.Id;
                }
            });
            return chapters;

        }


        /// <summary>
        /// update Chapter name by id
        /// </summary>
        /// <param name="upChapters"></param>
        /// <returns></returns>
        public async Task<Chapter> UpdateChapterAsync(Chapter upChapter)
        {
            Chapter refChapter = await _context.CommodityChapters.FirstOrDefaultAsync(r => r.Id == upChapter.Id);

            if (refChapter == null || refChapter == default(Chapter))
            {
                return null;

            }
            refChapter.Name = upChapter.Name;
            _context.CommodityChapters.Update(refChapter);
            await _context.SaveChangesAsync();

            return refChapter;


        }
    }
}
