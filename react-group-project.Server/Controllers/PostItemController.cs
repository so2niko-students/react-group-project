using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using react_group_project.Server.DatabaseProviders;
using react_group_project.Server.Models;
using react_group_project.Server.Requests;

namespace react_group_project.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostItemController : ControllerBase
    {
        private readonly ILogger<PostItemController> _logger;
        private readonly IDataBaseContext _DataBaseContext = null!;

        public PostItemController(IDataBaseContext dataBaseContext, ILogger<PostItemController> logger)
        {
            _logger = logger;
            _DataBaseContext = dataBaseContext;
        }

        [HttpGet(Name = "GetPostItems")]
        public async Task<IEnumerable<PostItem>> Get()
        {
            var res = await _DataBaseContext.PostItems.Include(x => x.Creator).ThenInclude(x => x.UserGroup).ThenInclude(x => x.Permissions).AsNoTracking().ToListAsync();
            return res;
        }

        [HttpGet("{id}", Name = "GetPostItem")]
        public async Task<ActionResult<PostItem>> Get(int id)
        {
            var postItem = await _DataBaseContext.PostItems.Include(x => x.Creator).ThenInclude(x => x.UserGroup).ThenInclude(x => x.Permissions).FirstOrDefaultAsync(x => x.Id == id);

            if (postItem != null) return postItem;
            return NotFound();
        }

        [HttpPost(Name = "AddPostItem")]
        public async Task<IActionResult> Add(CreatePostRequest postRequest)
        {

            var post = new PostItem()
            {
                Title = postRequest.Title,
                ShortDescription = postRequest.ShortDescription,
                FullText = postRequest.FullText,
                CreatorId = postRequest.CreatorId,
                CreateDateTime = postRequest.CreateDateTime,
            };

            if (postRequest.Image != null)
            {
                var filePath = Path.Combine("wwwroot", "images", "postItems", $"{postRequest.Image.FileName}");
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await postRequest.Image.CopyToAsync(stream);
                }

                post.ImageLink = Path.Combine("images", "postItems", postRequest.Image.FileName);
            }

            _DataBaseContext.PostItems.Add(post);
            await _DataBaseContext.SaveChangesAsync();

            return Ok(post);
        }

        [HttpPatch("{id}", Name = "EditPostItem")]
        public async Task<IActionResult> Edit(int id, EditPostRequest editRequest)
        {
            var post = _DataBaseContext.PostItems.First(x => x.Id == id);


            if (post.Title == editRequest.Title &&
                post.ShortDescription == editRequest.ShortDescription &&
                post.FullText == editRequest.FullText &&
                post.ImageLink == editRequest.ImageLink)
            {
                return Ok(post);
            }

            post.Title = editRequest.Title;
            post.ShortDescription = editRequest.ShortDescription;
            post.FullText = editRequest.FullText;

            if (editRequest.Image != null)
            {
                var filePath = Path.Combine("wwwroot", "images", "postItems", $"{editRequest.Image.FileName}");
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await editRequest.Image.CopyToAsync(stream);
                }

                post.ImageLink = Path.Combine("images", "postItems", editRequest.Image.FileName);
            }
            else
            {
                post.ImageLink = editRequest.ImageLink;
            }

            await _DataBaseContext.SaveChangesAsync();

            return Ok(post);
        }
    }
}
