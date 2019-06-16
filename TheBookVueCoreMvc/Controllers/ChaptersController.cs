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
    public class CarsController : Controller
    {
        private readonly AppDbContext _context;
        private readonly IPartsRepository _Parts;
        private readonly ICarsRepository _Cars;

        public CarsController(AppDbContext context, IPartsRepository Parts, ICarsRepository Cars)
        {
            _context = context;
            _Parts = Parts;
            _Cars = Cars;
        }


        /// <summary>
        /// get all data
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<List<Car>> GetCarsAsyncData()
        {
            return await _Cars.GetCarsAsync();
        }

        // GET: Cars
        public async Task<IActionResult> GetCarsAsync()
        {
            return View(await _Cars.GetCarsAsync());
        }
        /// <summary>
        /// uptdate Part
        /// </summary>
        /// <param name="upPart"></param>
        /// <returns></returns>
        public async Task<Part> UpdatePartAsync([FromBody]Part upPart)
        {
            return await _Parts.UpdatePartAsync(upPart);
        }



        // GET: Cars
        public async Task<IActionResult> Index()
        {
            return View(await _Cars.GetCarsAsync());
        }

        // GET: Cars/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var Car = await _context.CommodityCars
                .FirstOrDefaultAsync(m => m.Id == id);
            if (Car == null)
            {
                return NotFound();
            }

            return View(Car);
        }

        // GET: Cars/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Cars/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,Discripton,Code,Active")] Car Car)
        {
            if (ModelState.IsValid)
            {
                _context.Add(Car);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(Car);
        }

        // GET: Cars/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var Car = await _context.CommodityCars.FindAsync(id);
            if (Car == null)
            {
                return NotFound();
            }
            return View(Car);
        }

        // POST: Cars/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,Discripton,Code,Active")] Car Car)
        {
            if (id != Car.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(Car);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CarExists(Car.Id))
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
            return View(Car);
        }

        // GET: Cars/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var Car = await _context.CommodityCars
                .FirstOrDefaultAsync(m => m.Id == id);
            if (Car == null)
            {
                return NotFound();
            }

            return View(Car);
        }

        // POST: Cars/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var Car = await _context.CommodityCars.FindAsync(id);
            _context.CommodityCars.Remove(Car);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool CarExists(int id)
        {
            return _context.CommodityCars.Any(e => e.Id == id);
        }
    }
}
