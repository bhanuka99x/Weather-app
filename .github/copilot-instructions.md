# Copilot Instructions for Weather-app

## Project Overview
- This is a static weather app built with HTML, CSS, and images. There is no backend or JavaScript logic present in the current codebase.
- The main UI is defined in `index.html`, with styles in `Style/main.css` and weather icons in `images/`.

## Key Files & Structure
- `index.html`: Main entry point. Contains meta tags for SEO, favicon, and basic HTML structure.
- `Style/main.css`: All styling rules. Uses a custom font-family ('Pop'), but no font import is present.
- `images/`: Contains weather-related icons (e.g., clear, clouds, drizzle, etc.).
- No build system, package manager, or test framework is present.

## Patterns & Conventions
- All assets are referenced with relative paths (e.g., `./images/clear.png`).
- CSS resets margin and padding for all elements and sets a custom font-family.
- No JavaScript or dynamic data fetching is implemented yet.
- SEO is partially addressed with meta tags in the HTML head.

## Developer Workflows
- No build or test commands are required; simply open `index.html` in a browser to view the app.
- To add new weather icons, place PNG files in `images/` and reference them in HTML/CSS as needed.
- For styling changes, edit `Style/main.css` directly.

## Integration Points
- No external dependencies or APIs are integrated at this stage.
- If adding JavaScript, place scripts before the closing `</body>` tag in `index.html`.

## Example Patterns
- Favicon setup:
  `<link rel="shortcut icon" href="./images/clear.png" type="image/x-icon">`
- Meta description for SEO:
  `<meta name="description" content="Get real-time weather updates and forecasts for your city with our Weather App.">`
- CSS global reset:
  `* { margin: 0; padding: 0; font-family: 'Pop'; }`

## Recommendations for AI Agents
- Focus on static site improvements, SEO, and UI enhancements unless JavaScript is introduced.
- When adding new features, maintain the existing directory and naming conventions.
- Reference images and styles using relative paths for portability.

---
If any section is unclear or missing, please provide feedback to improve these instructions.
