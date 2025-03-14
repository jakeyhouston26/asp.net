using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BowlingLeagueAPI.Data;
using BowlingLeagueAPI.Models;

namespace BowlingLeagueAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlersController : ControllerBase
    {
        private readonly BowlingLeagueContext _context;

        public BowlersController(BowlingLeagueContext context)
        {
            _context = context;
        }

        // GET: api/Bowlers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bowler>>> GetBowlers()
        {
            return await _context.Bowlers
                .Include(b => b.Team)
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks")
                .ToListAsync();
        }
    }
}
