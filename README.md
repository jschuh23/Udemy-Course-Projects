# Udemy-Natours
Natours Project - Udemy Advanced CSS and SASS course by Jonas Schmedtmann

This project followed the design presented in the Udemy course, but I adjusted some portions to fit more inline with the current techniques I've learned. Overall, it was a great project and I learned a lot of new tehcniques that I can definitely add into future projects.

MY ADJUSTMENTS
1. Mobile-first design with media queries set at:
    - min-width:37.5em (600px)
    - min-width:48em (768px)
    - min-width:60em (960px)

2. Used my own color scheme and adjusted it to meet the WCAG 2 AA contrast ratio thresholds

3. Used Grid and Flexbox for layouts instead of floats

4. Adjusted the navigation view to include a hamburger menu only for smaller screens, then adjusted to a full navigation for larger screens

5. Adjusted the design of the secondary button

6. Removed linear gradients set over most images

7. Removed most clip-path and skew layouts from original design

8. Removed may animations from the original design (section heading animations, box animations in features section)


CONTINUED DEVELOPMENT
1. Utilized Sass and created a 7-1 folder structure containing the following folders and files:
    - abstracts
        - _mixins.scss
        - _variables.scss
    - base
        - _animations.scss
        - _reset.scss
        - _typography.scss
        - _utilities.scss
    - components
        - _buttons.scss
        - _modal.scss
    - layout
        - _footer.scss
        - _forms.scss
        - _header.scss
        - _navigation.scss
    - pages
        - _home.scss

2. Utilized the BEM (Block Element Modifier) methodology for my naming convention in HTML and CSS

3. Used the clamp() CSS function for most font-sizes to make them more responsive


LESSONS LEARNED
1. Utilized a new VS Code extension to help format CSS code (https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-csscomb). Required me to setup a json config file for laying out my preferences.

2. Learned how to use the backdrop filter affect and how to use the @supports CSS at-rule feature query to specify declarations that depend on a browser's support (https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)

3. Began learning about responsive images and the differences in writing code for resolution switching for different images sizes, resolution switching for different screen resolutions, and art direction (https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). Still a lot to learn here!!

4. Learned how to create a CSS-only modal

5. Learned the best practice for inserting media queries into my Sass code
    
    @mixin respond($breakpoint) {
      @if $breakpoint == small { @media (min-width: 37.5em) { @content; } } //600px

      @if $breakpoint == medium { @media (min-width: 48em) { @content; } } //768px

      @if $breakpoint == large { @media (min-width: 60em) { @content; } } //960px
    }





