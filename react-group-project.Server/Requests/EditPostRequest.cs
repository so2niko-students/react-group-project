using System.ComponentModel.DataAnnotations;

namespace react_group_project.Server.Requests
{
    public class EditPostRequest
    {
        [Required]
        public required int Id { get; set; }

        [Required]
        public required string Title { get; set; }

        public string? ShortDescription { get; set; }

        [Required]
        public required string FullText { get; set; }

        public IFormFile? Image { get; set; }

        public string? ImageLink { get; set; }
    }
}
