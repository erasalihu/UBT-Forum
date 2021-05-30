using backend.Model;
using backend.Model.Sead;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Message> ChatBox { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserInfo> UsersInfos { get; set; }
        public DbSet<Warnings> Warnings { get; set; }
        public DbSet<Reputations> Reputations { get; set; }
        public DbSet<Emails> Emails { get; set; }
    }
}