using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BowlingLeagueAPI.Models
{
    public class Bowler
    {
        [Key]
        public int BowlerID { get; set; }
        public string? FirstName { get; set; }
        public string? MiddleInit { get; set; }
        public string? LastName { get; set; }
        public string? Address { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? Zip { get; set; }
        public string? PhoneNumber { get; set; }
        
        [ForeignKey("Team")]
        public int TeamID { get; set; }
        public Team? Team { get; set; }
    }
}
