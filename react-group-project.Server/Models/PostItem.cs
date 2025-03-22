namespace react_group_project.Server.Models
{
    public class BasePostItem
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string AuthorName { get; set; }
        public string AuthorLastName { get; set; }
        public string DateOfCreation { get; set; }
        public string Text { get; set; }
    }
    public class PostItem : BasePostItem
    {
        public string ImgPath { get; set; }
    }
    public class Req : BasePostItem
    {
        public IFormFile? Picture { get; set; }
    }
}
