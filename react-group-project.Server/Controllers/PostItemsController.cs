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
                    dateOfCreation = "date of creation1",
                    Img = "src/images/img1.jpg"
                });

                db.PostItems.Add(new PostItem
                {
                    Title = "Title55",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    AuthorName = "author name1",
                    dateOfCreation = "date of creation1",
                    Img = "src/images/img1.jpg"
                });

                db.SaveChanges();
            }
        }

        [HttpGet]
        public async Task<IEnumerable<PostItem>> Get()
        {
            return await db.PostItems.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<PostItem> Get(int id)
        {
            var item =  await db.PostItems.FirstOrDefaultAsync(x => x.Id == id);

            return item;
        }
    }
}
