<!-- ![Trillo](./design/Trillo-screenshot.png) -->

# Nexter Project - Udemy Advanced CSS and SASS course by Jonas Schmedtmann

This project followed the design presented in the Udemy course, but I adjusted some portions to fit more inline with the current techniques I've learned. Overall, it was a great project and I learned a lot of new tehcniques that I can definitely add into future projects.
[Advanced CSS and SASS: Flexbox, Grid, Animations and more](https://www.udemy.com/course/advanced-css-and-sass/)

<!-- Please view my final project at https://jschuh23.github.io/Udemy-Course-Projects/Trillo/dist/index.html -->

## MY ADJUSTMENTS

1. Mobile-first design with media queries set at:

 - `min-width: 37.5em (600px)`
 - `min-width: 48.9em (783px)`
 - `min-width: 60em (960px)`

2. Used my own color scheme and adjusted it to meet the WCAG 2 AA contrast ratio thresholds

3. This project was grid based as originally designed in the course. I adjusted this to include flexbox, as well as grid.

4. Adjusted the desktop navigation from the left side of the screen to the top (note that this is not a usable navigation)

## CONTINUED DEVELOPMENT

1. Utilized Sass and created a 7-1 folder structure containing the following folders and files:

    - abstracts
        - \_index.scss
        - \_mixins.scss
        - \_variables.scss
    - base
        - \_reset.scss
        - \_typography.scss
        - \_utilities.scss
    - components
        - \_buttons.scss
    - layout
        - \_flex.scss
        - \_footer.scss
        - \_grid.scss
        - \_header.scss
        - \_navigation.scss
        - \_spacing.scss
    - pages
        - \_home.scss

2. Utilized the BEM (Block Element Modifier) methodology for my naming convention in HTML and CSS

3. Used axe DevTools to check accessibility within the page and made color adjustments accordingly to fix WCAG 2 AA contrast ratio thresholds

4. Utilized npm scripts to compile sass (dart sass as node sass has been deprecated) instead of the VS Code extension Live SASS Compiler

5. Tested on Chrome, Firefox, Android phone and iPhone

## LESSONS LEARNED

1. Used logical properties - `margin-inline`, `margin-block`, `padding-inline`, `padding-block`

2. Used hsl color values

3. Used the `@use` and `@forward` SASS rules instead of `@import`

