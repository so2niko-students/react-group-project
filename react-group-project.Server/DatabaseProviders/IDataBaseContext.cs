using Microsoft.EntityFrameworkCore;
using react_group_project.Server.Models;

namespace react_group_project.Server.DatabaseProviders
{
    public interface IDataBaseContext
    {
        DbSet<User> Users { get;}
        DbSet<PostItem> PostItems { get; }
        DbSet<UserGroup> UserGroups { get;  }
        DbSet<Permission> Permissions { get; }
    }
}
