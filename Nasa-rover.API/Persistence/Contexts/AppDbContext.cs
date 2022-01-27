using Microsoft.EntityFrameworkCore;
using Nasa_rover.API.Domain.Models;

namespace Nasa_rover.API.Persistence.Contexts
{
    public class AppDbContext : DbContext
    {
        public DbSet<Rover> Rovers { get; set; }
        public DbSet<Poem> Poems { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Rover>().ToTable("Rovers");
            builder.Entity<Rover>().HasKey(p => p.Id);
            builder.Entity<Rover>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<Rover>().Property(p => p.Name).IsRequired().HasMaxLength(30);
            builder.Entity<Rover>().Property(p => p.shortDescription).IsRequired().HasMaxLength(70);
            builder.Entity<Rover>().HasMany(p => p.Poems);

            builder.Entity<Rover>().HasData
            (
                new Rover {
                    Id = 1,
                    Name = "Spirit",
                    Description = "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue.",
                    shortDescription = "Cum sociis natoque penatibus et magnis dis parturient montes.",
                    Weight = 1234,
                    Wheel = 6,
                    ImageUrl = "https://localhost:5001/img/Spirit.jpg",
                    SmallImageUrl = "https://localhost:5001/img/Spirit_300x300px.png"
                },
                new Rover {
                    Id = 2,
                    Name = "Opportunity",
                    Description = "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
                    shortDescription = "Fusce dapibus, tellus ac cursus commodo.",
                    Weight = 1234,
                    Wheel = 6,
                    ImageUrl = "https://localhost:5001/img/Opportunity.jpg",
                    SmallImageUrl = "https://localhost:5001/img/Opportunity_300x300px.png"
                },
                new Rover {
                    Id = 3,
                    Name = "Curiosity",
                    Description = "Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
                    shortDescription = "Donec ullamcorper nulla non metus auctor fringilla.",
                    Weight = 1234,
                    Wheel = 6,
                    ImageUrl = "https://localhost:5001/img/Curiosity.jpg",
                    SmallImageUrl = "https://localhost:5001/img/Curiosity_300x300px.png"
                },
                new Rover {
                    Id = 4,
                    Name = "Perseverance",
                    Description = "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.",
                    shortDescription = "Nullam id dolor id nibh ultricies vehicula ut id elit.",
                    Weight = 1234,
                    Wheel = 6,
                    ImageUrl = "https://localhost:5001/img/Perseverance.jpg",
                    SmallImageUrl = "https://localhost:5001/img/Perseverance_300x300px.png"
                }
            );

            builder.Entity<Poem>().ToTable("Poems");
            builder.Entity<Poem>().HasKey(p => p.Id);
            builder.Entity<Poem>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<Poem>().Property(p => p.Text).IsRequired().HasMaxLength(200);

            builder.Entity<Poem>().HasData
            (
                new Poem {
                    Id = 100,
                    Text = "Spirit - Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.",
                    RoverId = 1
                },
                new Poem {
                    Id = 101,
                    Text = "Opportunity - Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.",
                    RoverId = 2
                },
                new Poem {
                    Id = 102,
                    Text = "Curiosity - Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.",
                    RoverId = 3
                },
                new Poem {
                    Id = 103,
                    Text = "Spirit - Donec id elit non mi porta gravida at eget metus. Donec sed odio dui.",
                    RoverId = 1
                }
            );
        }

    }
}