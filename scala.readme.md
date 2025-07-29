![logo](resumaker_icon.png)

# Resu-Maker

A **Scala-based resume generator** that creates professional PDF resumes using LaTeX. Built with functional programming principles and type-safe domain modeling.

## Features

- **Type-Safe Resume Data**: Strongly typed domain model prevents data inconsistencies
- **Professional PDF Output**: Clean, professional formatting with clickable links
- **Hot Reloading**: Live preview with automatic recompilation during development
- **Functional Programming**: Built with Cats Effect for pure functional programming
- **Rich Resume Model**: Supports multiple jobs per workplace, skills tracking, and various education types

## Architecture

The project is structured around three main components:

- **`Entities.scala`**: Domain model with case classes for resume data
- **`Latex.scala`**: LaTeX generation and PDF compilation
- **`Main.scala`**: Application entry point with resume data

## Prerequisites

### LaTeX Installation
```shell
# Ubuntu/Debian
sudo apt install texlive-latex-extra

# macOS (using Homebrew)
brew install --cask mactex

# Windows
# Download and install MiKTeX from https://miktex.org/
```

### Scala/SBT
Ensure you have SBT installed. The project uses Scala 3.6.4.

## Quick Start

1. **Clone the repository**
   ```shell
   git clone https://github.com/kadenjtaylor/resumaker.git
   cd resumaker
   ```

2. **Run the application**
   ```shell
   sbt run
   ```

3. **Check the output**
   Look in the `latex/` directory for your generated PDF resume!

## Development Workflow

### Live Development
For real-time updates during development:

```shell
sbt ~run
```

This will watch for file changes and automatically recompile your resume.

### Customizing Your Resume

1. **Edit the resume data** in `src/main/scala/dev/kaden/Main.scala`
2. **Modify the LaTeX template** in `src/main/scala/dev/kaden/Latex.scala` if needed
3. **Run the application** to see your changes

## Project Structure

```
resumaker/
├── src/main/scala/dev/kaden/
│   ├── Entities.scala      # Domain model and data structures
│   ├── Latex.scala         # LaTeX generation and compilation
│   └── Main.scala          # Application entry point
├── latex/                  # Generated LaTeX files and PDF output
├── build.sbt              # SBT build configuration
└── README.md              # This file
```

## Resume Data Model

The project uses a rich, type-safe domain model:

- **Contact Information**: Phone numbers, email addresses, location
- **Experience**: Workplaces with multiple jobs, skills, and technologies
- **Education**: Degrees, diplomas, and certifications
- **Extras**: Additional information and achievements

### Example Resume Structure

```scala
val myResume = Resume(
  Header(
    name = "Your Name",
    tagline = "Your professional tagline",
    contactInfo = ContactInfo(phone, email),
    location = Location(city, state)
  ),
  Experience(
    Workplace(
      name = "Company Name",
      link = "https://company.com",
      blurb = "Company description",
      tenure = Past(startDate, endDate),
      SoftwareJob(
        title = "Software Engineer",
        description = "Job description",
        skillsAndTools = List("Kafka", "Docker"),
        langsAndLibs = Map("Scala" -> List("Cats-Effect", "Http4s"))
      )
    )
  ),
  Education(
    EducationRecord(
      institution = "University Name",
      link = "https://university.edu",
      awarded = 2020,
      proof = Degree("Computer Science")
    )
  ),
  Extras(
    Element("Additional achievements and interests")
  ),
  Footer("https://github.com/yourusername/resumaker", LocalDate.now())
)
```

## Technical Stack

- **Scala 3.6.4**: Modern Scala with latest language features
- **Cats Effect 3.3.12**: Functional programming library for effects
- **SBT**: Build tool and dependency management
- **LaTeX**: PDF generation and formatting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `sbt run`
5. Submit a pull request

## License

This project is open source. Feel free to use it for your own resume generation needs.

## Author

Created by [Kaden Taylor](https://github.com/kadenjtaylor) - a software engineer passionate about functional programming and clean code.

---

*Generated with ❤️ using Scala and LaTeX*
