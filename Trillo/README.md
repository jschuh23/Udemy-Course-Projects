# Trillo Project - Udemy Advanced CSS and SASS course by Jonas Schmedtmann

This project followed the design presented in the Udemy course, but I adjusted some portions to fit more inline with the current techniques I've learned.

Please view my final project at https://jschuh23.github.io/Udemy-Course-Projects/Trillo/dist/index.html

## MY ADJUSTMENTS

1. Mobile-first design with media queries set at:

    - min-width: 31.25em (500px)
    - min-width: 37.5em (600px)
    - min-width: 50em (800px)
    - min-width: 62.5em (1000px)

2. This project was flexbox based as originally designed in the course. I adjusted this to include grid, as well as flexbox, as I placed my images in the mobile layout in different locations of the design compared to the original mobile version.

3. Adjusted the navigation view to include a hamburger menu for smaller screens (utilized JavaScript), then adjusted to a full navigation for larger screens

4. Adjusted the desktop navigation from the left side of the screen to the top

5. Removed the social/user logged in links from the original design and instead inserted a "Sign In" button

6. Reorganized the amenities section into three distinct sections instead of compiling all the information into one section

7. Removed the "friends" section that was located below the amenities

8. Removed the color gradient used throughout the site and adjusted the appearance of the secondary button

## CONTINUED DEVELOPMENT

1. Utilized Sass and created a 7-1 folder structure containing the following folders and files:

    - abstracts
        - \_mixins.scss
        - \_variables.scss
    - base
        - \_reset.scss
        - \_typography.scss
        - \_utilities.scss
    - components
        - \_buttons.scss
    - layout
        - \_footer.scss
        - \_grid.scss
        - \_header.scss
        - \_navigation.scss
    - pages
        - \_home.scss

2. Utilized the BEM (Block Element Modifier) methodology for my naming convention in HTML and CSS

## LESSONS LEARNED

1. Utilized npm scripts to compile sass (dart sass as node sass has been deprecated) instead of the VS Code extension Live SASS Compiler

2. Learned how to adjust the SVG color when inserted into HTML as an `<img>` by changing the `<path fill="">` attribute within the SVG code

3. Discovered that the SVG star images were not appearing on an iPhone so I did some research and learned that instead of writing percentages for the star widths and heights I needed to adjust these to pixels
