using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using react_group_project.Server.DatabaseProviders;
using react_group_project.Server.Models;

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
            return await _DataBaseContext.PostItems.ToListAsync();
        }

        [HttpGet("{id}", Name = "GetPostItem")]
        public async Task<ActionResult<PostItem>> Get(int id)
        {
            var postItem = await _DataBaseContext.PostItems.FirstOrDefaultAsync(x => x.Id == id);

            if (postItem != null) return postItem;
            return NotFound();
        }
    }
}
