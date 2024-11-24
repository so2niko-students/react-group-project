using Microsoft.EntityFrameworkCore;
using react_group_project.Server.Models;

namespace react_group_project.Server.DatabaseProviders
{
    public interface IDataBaseContext
    {
        public DbSet<User> Users { get;}
        public DbSet<PostItem> PostItems { get; }
        public DbSet<UserGroup> UserGroups { get;  }
        public DbSet<Permission> Permissions { get; }
    }
}
