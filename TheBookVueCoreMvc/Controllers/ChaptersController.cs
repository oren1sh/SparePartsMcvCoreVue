using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using TheBookVueCoreMvc.DataLayer;
using TheBookVueCoreMvc.DataLayer.Interfaces;
using TheBookVueCoreMvc.Models;

namespace TheBookVueCoreMvc.Controllers
{
    public class ChaptersController : Controller
    {
        private readonly AppDbContext _context;
        private readonly IRootsRepository _roots;
        private readonly IChaptersRepository _chapters;

        public ChaptersController(AppDbContext context, IRootsRepository roots, IChaptersRepository chapters)
        {
            _context = context;
            _roots = roots;
            _chapters = chapters;
        }


        /// <summary>
        /// get all data
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<List<Chapter>> GetChaptersAsyncData()
        {
            return await _chapters.GetChaptersAsync();
        }

        // GET: Chapters
        public async Task<IActionResult> GetChaptersAsync()
        {
            return View(await _chapters.GetChaptersAsync());
        }
        /// <summary>
        /// uptdate root
        /// </summary>
        /// <param name="upRoot"></param>
        /// <returns></returns>
        public async Task<Root> UpdateRootAsync([FromBody]Root upRoot)
        {
            return await _roots.UpdateRootAsync(upRoot);
        }



        // GET: Chapters
        public async Task<IActionResult> Index()
        {
            return View(await _chapters.GetChaptersAsync());
        }

        // GET: Chapters/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var chapter = await _context.CommodityChapters
                .FirstOrDefaultAsync(m => m.Id == id);
            if (chapter == null)
            {
                return NotFound();
            }

            return View(chapter);
        }

        // GET: Chapters/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Chapters/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,Discripton,Code,Active")] Chapter chapter)
        {
            if (ModelState.IsValid)
            {
                _context.Add(chapter);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(chapter);
        }

        // GET: Chapters/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var chapter = await _context.CommodityChapters.FindAsync(id);
            if (chapter == null)
            {
                return NotFound();
            }
            return View(chapter);
        }

        // POST: Chapters/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,Discripton,Code,Active")] Chapter chapter)
        {
            if (id != chapter.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(chapter);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ChapterExists(chapter.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(chapter);
        }

        // GET: Chapters/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var chapter = await _context.CommodityChapters
                .FirstOrDefaultAsync(m => m.Id == id);
            if (chapter == null)
            {
                return NotFound();
            }

            return View(chapter);
        }

        // POST: Chapters/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var chapter = await _context.CommodityChapters.FindAsync(id);
            _context.CommodityChapters.Remove(chapter);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ChapterExists(int id)
        {
            return _context.CommodityChapters.Any(e => e.Id == id);
        }
    }
}
