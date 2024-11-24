using System.ComponentModel.DataAnnotations;

namespace react_group_project.Server.Models
{
    public class UserGroup
    {
        [Key]
        public required int Id { get; set; }

        [Required]
        public required string Name { get; set; }

        [Required]
        public List<Permission> Permissions { get; set; } = new List<Permission>();
    }
}
