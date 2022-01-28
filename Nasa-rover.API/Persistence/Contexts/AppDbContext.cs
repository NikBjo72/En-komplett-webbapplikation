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
            builder.Entity<Rover>().Property(p => p.shortDescription).IsRequired().HasMaxLength(150);
            builder.Entity<Rover>().HasMany(p => p.Poems);

            builder.Entity<Rover>().HasData
            (
                new Rover {
                    Id = 1,
                    Name = "Spirit",
                    Description = "Spirit, också känd som MER-A (Mars Exploration Rover-A) eller MER-2, var NASAs första sond i Marsutforskningsprogrammet Mars Exploration Rover Mission. Den sköts upp med en Delta II-raket från Cape Canaveral Air Force Station, den 10 juni 2003 och landade på Mars yta, den 3 januari 2004. Den är syskonfarkost till MER-B, kallad Opportunity. Uppdraget var tänkt att pågå i 90 dagar, men tack vare att solcellerna då och då blåstes rena av starka vindar på Mars, överlevde Spirit i 2 269 dagar. Under sin tid på Mars tillryggalade den totalt 7,73 kilometer</br>2007 - I juli drog en enorm sandstorm in över bilen. Sandstormar på Mars kan pågå i flera månader. Detta gjorde att solcellerna på bilen inte kunde producera tillräckligt med energi. Detta medförde att Spirit under några veckor var försatt i viloläge. </br>2009 - Under sommaren körde den fast i sand vid &quot;Troy&quot; på västra sidan av &quot;Home Plate&quot;.</br>2010 - 26 januari meddelade NASA att Spirit numera ses som en stationär forskningsplattform [2]. Den 3 januari hade sex år gått sedan Spirit landande på Mars. Den 22 mars förlorade man kontakten med Spirit. </br>2011 - Den 25 maj 2011 förklarar NASA att uppdraget är avslutat, efter ett sista försök att återfå kontakten med rymdsonden.</br> ",
                    shortDescription = "Spirit, också känd som MER-A (Mars Exploration Rover-A) eller MER-2, var NASAs första sond i Marsutforskningsprogrammet Mars Exploration Rover Mission.",
                    Weight = 1234,
                    Wheel = 6,
                    ImageUrl = "https://localhost:5001/img/Spirit.jpg",
                    SmallImageUrl = "https://localhost:5001/img/Spirit_300x300px.png"
                },
                new Rover {
                    Id = 2,
                    Name = "Opportunity",
                    Description = "Opportunity (engelska: &quot;möjlighet&quot;), också känd som MER-B (Mars Exploration Rover-B) eller MER-1, med smeknamnet Oppy, var NASAs andra rymdsond i Mars-utforskningsprogrammet Mars Exploration Rover Mission. MER-B sköts iväg 8 juli 2003 och landade i området Meridiani planum på planeten Mars den 25 januari 2004. Den är tvillingfarkost till MER-A, Spirit.</br>NASA förklarade den 13 februari 2019 uppdraget för avslutat då man inte sedan juni 2018 haft kontakt med farkosten. Detta efter att en större sandstorm dragit fram över området där den befann sig. </br>Syftet var bland annat att utforska eventuell förekomst av vatten på planetens yta. Rymdsonden uppskattades kunna fungera i 90 dagar, men sonden fungerade i över femton år. </br>Nasa hade kontakt med sonden under hela färden till Mars och även vid inbromsningen och utfällningen. Av bilderna kunde man konstatera att marken består av finkornigt material, troligtvis i olika skikt. Robotens hjul gjorde tydliga avtryck i det mörkgråa eller svarta markskiktet. Av spektrumet att döma består marken av mineralen hematit, vilket vanligtvis bildas med hjälp av vatten.",
                    shortDescription = "Opportunity (engelska: &quot;möjlighet&quot;), också känd som MER-B (Mars Exploration Rover-B) eller MER-1",
                    Weight = 1234,
                    Wheel = 6,
                    ImageUrl = "https://localhost:5001/img/Opportunity.jpg",
                    SmallImageUrl = "https://localhost:5001/img/Opportunity_300x300px.png"
                },
                new Rover {
                    Id = 3,
                    Name = "Curiosity",
                    Description = "MSL (Mars Science Laboratory) är en obemannad motoriserad landfarkost som sköts upp på uppdrag av NASA den 26 november 2011. Enligt plan landade strövaren på Mars vid kratern Gale den 5 augusti 2012 kl. 05:30. Strövaren är tre gånger så tung och dubbelt så bred som de tidigare Mars Exploration Rovers (MER) Spirit och Opportunity som landade på Mars 2004. Efter landningen har Curiosity analyserat ett flertal prover från marsjorden och från stenar. Strövaren förväntades vid uppskjutningen arbeta i minst ett marsår (cirka två jordår) och planerades att bli den strövare som täckte en större del av planetytan än någon tidigare strövare. Uppdraget var att undersöka Mars tidigare och dåvarande förmåga att hysa liv. Curiosity är fortfarande aktiv, vilket innebär att den har överlevt långt längre än vad man först trodde eller planerade för.",
                    shortDescription = "Curiosity väger omkring 900 kg, varav 80 kg är vetenskapliga instrument. Den kan köra över hinder som är 75 cm höga.",
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
                    Heading = "Etiam porta",
                    Text = "Spirit - Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.",
                    Author = "Niklas Björk",
                    RoverId = 1
                },
                new Poem {
                    Id = 101,
                    Heading = "Etiam porta",
                    Text = "Opportunity - Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.",
                    Author = "Niklas Björk",
                    RoverId = 2
                },
                new Poem {
                    Id = 102,
                    Heading = "Etiam porta",
                    Text = "Curiosity - Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.",
                    Author = "Niklas Björk",
                    RoverId = 3
                },
                new Poem {
                    Id = 103,
                    Heading = "Etiam porta",
                    Text = "Spirit - Donec id elit non mi porta gravida at eget metus. Donec sed odio dui.",
                    Author = "Niklas Björk",
                    RoverId = 1
                },
                new Poem {
                    Id = 104,
                    Heading = "Etiam porta",
                    Text = "Spirit - Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.",
                    Author = "Niklas Björk",
                    RoverId = 1
                },
                new Poem {
                    Id = 105,
                    Heading = "Etiam porta",
                    Text = "Opportunity - Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.",
                    Author = "Niklas Björk",
                    RoverId = 2
                },
                new Poem {
                    Id = 106,
                    Heading = "Etiam porta",
                    Text = "Curiosity - Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.",
                    Author = "Niklas Björk",
                    RoverId = 3
                },
                new Poem {
                    Id = 107,
                    Heading = "Etiam porta",
                    Text = "Spirit - Donec id elit non mi porta gravida at eget metus. Donec sed odio dui.",
                    Author = "Niklas Björk",
                    RoverId = 1
                },
                new Poem {
                    Id = 108,
                    Heading = "Etiam porta",
                    Text = "Perseverance - Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.",
                    Author = "Niklas Björk",
                    RoverId = 4
                },
                new Poem {
                    Id = 109,
                    Heading = "Etiam porta",
                    Text = "Perseverance - Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.",
                    Author = "Niklas Björk",
                    RoverId = 4
                },
                new Poem {
                    Id = 110,
                    Heading = "Etiam porta",
                    Text = "Perseverance - Donec id elit non mi porta gravida at eget metus. Donec sed odio dui.",
                    Author = "Niklas Björk",
                    RoverId = 4
                }
            );
        }

    }
}