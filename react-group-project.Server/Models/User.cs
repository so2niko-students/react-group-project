using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace react_group_project.Server.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public required string Login { get; set; }

        [Required]
        public required string Name { get; set; }

        public string? SurName { get; set; }

        [Required]
        public required int UserGroupId { get; set; }

        public virtual UserGroup UserGroup { get; set; } = null!;
    }
}
