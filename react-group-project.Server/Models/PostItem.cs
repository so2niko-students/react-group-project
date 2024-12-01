using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace react_group_project.Server.Models
{
    public class PostItem
    {
        [Key]
        public required int Id { get; set; }

        [Required]
        public required string Title { get; set; }

        public string? ShortDescription { get; set; }

        [Required]
        public required string FullText { get; set; }

        [Required]
        public virtual int CreatorId { get; set; }

        public virtual User Creator { get; set; } = null!;

        [Required]
        public required DateTime CreateDateTime { get; set; }

        public string? ImageLink { get; set; }
    }
}
