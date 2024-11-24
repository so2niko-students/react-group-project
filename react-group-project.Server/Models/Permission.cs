using System.ComponentModel.DataAnnotations;

namespace react_group_project.Server.Models
{
    public class Permission
    {
        [Key]
        public required int Id { get; set; }

        [Required]
        public required string Name { get; set; }

    }
}
