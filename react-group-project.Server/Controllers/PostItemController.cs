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
    }
}
