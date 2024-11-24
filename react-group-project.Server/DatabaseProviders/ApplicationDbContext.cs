using Microsoft.EntityFrameworkCore;
using react_group_project.Server.Models;

namespace react_group_project.Server.DatabaseProviders
{
    public class ApplicationDbContext : DbContext, IDataBaseContext
    {
        public required DbSet<User> Users { get; set; }
        public required DbSet<PostItem> PostItems { get; set; }
        public required DbSet<UserGroup> UserGroups { get; set; }
        public required DbSet<Permission> Permissions { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Добавление данных для Permission
            modelBuilder.Entity<Permission>().HasData(
                new Permission { Id = 1, Name = "Reading" },
                new Permission { Id = 2, Name = "Creating" },
                new Permission { Id = 3, Name = "Editing" },
                new Permission { Id = 4, Name = "Administrating" }
            );

            modelBuilder.Entity<UserGroup>().HasData(
            new UserGroup { Id = 1, Name = "Admin" },
            new UserGroup { Id = 2, Name = "General" },
            new UserGroup { Id = 3, Name = "Extended" }
            );

            modelBuilder.Entity<User>().HasData(
               new User { Id = 1, Login = "viktor", Name = "Viktor Ponomarenko", UserGroupId = 1 },
               new User { Id = 2, Login = "olena", Name = "Olena Thomas", UserGroupId = 2 }
            );

            modelBuilder.Entity<PostItem>().HasData(
            new PostItem
            {
                Id = 1,
                Title = "Introduction to C# Programming",
                ShortDescription = "C# is a modern, object-oriented programming language developed by Microsoft. It is widely used for building Windows applications, web applications, and games. In this article, we will cover the basics of C# programming, including its syntax, data types, and control structures.",
                FullText = "C# is a popular programming language that is widely used in various industries. It was developed by Microsoft and is part of the .NET framework. In this article, we will cover the fundamentals of C# programming, starting with the basic syntax. C# is an object-oriented language, which means it is based on the concept of objects and classes. It uses a syntax that is similar to other C-based languages such as Java and C++. Some of the key features of C# include its strong typing, garbage collection, and support for modern programming paradigms like LINQ and async/await. As a modern language, C# also supports object-oriented principles such as inheritance, polymorphism, and encapsulation. By mastering C#, you can build powerful applications for various platforms, including desktop, web, and mobile devices.",
                CreatorId = 1,
                CreatDateTime = DateTime.Now
            },
            new PostItem
            {
                Id = 2,
                Title = "Understanding Delegates in C#",
                ShortDescription = "A delegate is a type that represents references to methods with a particular parameter list and return type. In C#, delegates are used to pass methods as arguments to other methods, and they provide a way to implement callback methods.",
                FullText = "Delegates are one of the most important concepts in C# programming, allowing methods to be passed as parameters and enabling powerful event-driven programming. A delegate is similar to a function pointer in C or C++, but it is type-safe and more powerful. In C#, delegates are used to define callback methods, which can be invoked asynchronously or in response to events. For example, when a button is clicked in a user interface, a delegate can be used to invoke the corresponding event handler. Delegates are also used to implement LINQ (Language Integrated Query) expressions, which allow developers to write SQL-like queries directly in C# code. By understanding delegates and how to use them, C# developers can write more flexible and efficient code, allowing for greater modularity and scalability.",
                CreatorId = 1,
                CreatDateTime = DateTime.Now
            },
            new PostItem
            {
                Id = 3,
                Title = "Exploring the Basics of Python for Data Science",
                ShortDescription = "Python has become one of the most popular programming languages for data science. It is known for its simplicity, flexibility, and a rich set of libraries that make data analysis and machine learning tasks much easier.",
                FullText = "Python is widely regarded as one of the best programming languages for data science due to its simplicity and rich ecosystem of libraries and frameworks. Data scientists use Python to perform data analysis, create machine learning models, and build data visualizations. Some of the most popular libraries for data science in Python include Pandas, NumPy, Matplotlib, and Scikit-learn. With these libraries, Python enables developers to easily manipulate large datasets, perform statistical analysis, and implement machine learning algorithms. Additionally, Python has a large and active community that continuously develops and maintains open-source tools and frameworks, making it an excellent choice for both beginners and experienced data scientists. Whether you are working on small projects or large-scale machine learning applications, Python offers the tools and support needed to succeed.",
                CreatorId = 2,
                CreatDateTime = DateTime.Now
            },
            new PostItem
            {
                Id = 4,
                Title = "Why JavaScript is Essential for Web Development",
                ShortDescription = "JavaScript is the backbone of modern web development, powering everything from interactive websites to complex web applications. It is an essential language for front-end developers and works seamlessly with HTML and CSS.",
                FullText = "JavaScript is the language of the web, powering dynamic, interactive websites and web applications. As a client-side language, JavaScript runs in the user's browser, enabling real-time interactivity without requiring page reloads. It is used to manipulate HTML and CSS, making it a key player in modern web development. JavaScript is often used in conjunction with HTML and CSS to create responsive, user-friendly websites that adapt to different screen sizes and devices. In addition to front-end development, JavaScript is also used for server-side programming through Node.js, which enables developers to build scalable web applications with a single language for both client and server code. With the rise of front-end frameworks like React, Angular, and Vue.js, JavaScript has become even more powerful, allowing developers to build complex single-page applications (SPAs) that provide a smooth and dynamic user experience.",
                CreatorId = 2,
                CreatDateTime = DateTime.Now
            }
            );
        }
    }
}
