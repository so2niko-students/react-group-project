using Microsoft.EntityFrameworkCore;
using react_group_project.Server.Models;

namespace react_group_project.Server.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<PostItem> PostItems { get; set; }
    }

}
