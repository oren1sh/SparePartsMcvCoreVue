using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheBookVueCoreMvc.Models;

namespace TheBookVueCoreMvc.DataLayer
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Root> CommodityRoots { get; set; }

        public DbSet<Chapter> CommodityChapters { get; set; }

    }
}
