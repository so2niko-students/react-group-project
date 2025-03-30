using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using react_group_project.Server.Data;
using react_group_project.Server.Models;

namespace react_group_project.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostItemsController : ControllerBase
    {
        ApplicationContext db;

        public PostItemsController(ApplicationContext context)
        {
            db = context;

            if (!db.PostItems.Any())
            {
                db.PostItems.Add(new PostItem
                {
                    Title = "Title44",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    AuthorName = "author name1",
                    AuthorLastName = "author lastName1",
                    DateOfCreation = "date of creation1",
                    ImgPath = "src/images/img1.jpg",
                    Text = "Text44 Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                });

                db.PostItems.Add(new PostItem
                {
                    Title = "Title55",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    AuthorName = "author name22",
                    AuthorLastName = "author lastName22",
                    DateOfCreation = "date of creation1",
                    ImgPath = "src/images/img1.jpg",
                    Text = "Text55 Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                });

                db.SaveChanges();
            }
        }

        [HttpGet]
        public async Task<IEnumerable<PostItem>> Get() => await db.PostItems.ToListAsync();

        [HttpGet("{id}")]
        public async Task<PostItem> Get(int id) => await db.PostItems.FirstOrDefaultAsync(x => x.Id == id);

        [HttpPost]
        public async Task<PostItem> Post(Req req)
        {
            var path = Path.Combine("wwwroot", req.Picture?.FileName);

            using (var stream = new FileStream(path, FileMode.Create))
            {
                StreamWriter writer = new StreamWriter(stream);
                await req.Picture.CopyToAsync(stream);
            }

            PostItem postItem = new PostItem
            {
                Title = req.Title,
                Description = req.Description,
                AuthorName = req.AuthorName,
                AuthorLastName = req.AuthorLastName,
                DateOfCreation = req.DateOfCreation,
                ImgPath = req.Picture?.FileName,
                Text = req.Text
            };

            var result = db.PostItems.Add(postItem);
            await db.SaveChangesAsync();

            return result.Entity;
        }
    }
}
