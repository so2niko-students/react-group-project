
using Microsoft.EntityFrameworkCore;
using react_group_project.Server.DatabaseProviders;

public static class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        ConfigureServices(builder.Services);


        var app = builder.Build();

        app.UseDefaultFiles();
        app.UseStaticFiles();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();
        app.UseStaticFiles();

        app.UseAuthorization();

        app.MapControllers();

        app.MapFallbackToFile("/index.html");


        using (var scope = app.Services.CreateScope())
        {
            var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            dbContext.Database.EnsureDeleted();
            dbContext.Database.EnsureCreated();
        }

        app.Run();

    }

    private static void ConfigureServices(IServiceCollection services)
    {
        services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();

        services.AddDbContext<IDataBaseContext, ApplicationDbContext>(options =>
            options.UseSqlServer("Server=localhost;Database=postItem;Trusted_Connection=True;TrustServerCertificate=True;"));
    }
}

