using react_group_project.Server.Models;
using System.ComponentModel.DataAnnotations;

namespace react_group_project.Server.Requests
{
    public class CreatePostRequest
    {
        [Required]
        public required string Title { get; set; }

        public string? ShortDescription { get; set; }

        [Required]
        public required string FullText { get; set; }

        [Required]
        public virtual int CreatorId { get; set; }

        [Required]
        public required DateTime CreateDateTime { get; set; }

        public IFormFile? Image { get; set; }
    }
}
