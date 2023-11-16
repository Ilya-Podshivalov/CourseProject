using CourseProject.Models;
using Microsoft.EntityFrameworkCore;

namespace CourseProject.Data
{
    public class PostContext : DbContext
    {
        // public List<PostModel> Posts { get; set; }

        /*public DataContext() { 
            Posts = new List<PostModel>();
        }*/
        public PostContext(DbContextOptions<PostContext> options) : base(options) { }

        public DbSet<PostModel> Posts { get; set; }
    }
}
