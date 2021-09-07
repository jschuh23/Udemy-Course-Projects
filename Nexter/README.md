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

5. Tested on Chrome, Firefox, Safari, Android phone and iPhone

## LESSONS LEARNED

1. Learned how to use logical properties (`margin-inline`, `margin-block`, `padding-inline`, `padding-block`) which, per MDN, "provide the ability to control layout through logical, rather than physical, direction and dimension mappings." [CSS-Tricks](https://css-tricks.com/css-logical-properties-and-values/)

2. Learned how to use hsl color values and how amazingly easy it is to quickly create color schemes. [Smashing Magazine](https://www.smashingmagazine.com/2021/07/hsl-colors-css/)

3. Learned how to use the `@use` and `@forward` SASS rules instead of `@import`. The `@import` rule is being deprecated so this is an important feature to learn about and start implimenting in SASS files sooner than later. [Kevin Powell - YouTube](https://www.youtube.com/watch?v=CR-a8upNjJ0&list=LL&index=16)

