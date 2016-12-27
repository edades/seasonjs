## Season JS

Add a simple custom subscribe form to yout website

### How to use
* First add `<script src="../seasonjs.js"></script>` after jquery integration.
* Second, create a div where add the subscribe form. for example: `<div class="maincontent"></div>`
* Now you can customize your suscribe form :)

Simple use
```markdown
var season = new Season();
season.open({
  mainBox: '.maincontent'
});
```

### Customize Options
- mainBox > element where was created the subscribe form. for default add this after body tag
- width > width to the form ('300px' or '90%')
- height > height to the form ('300px')
- header > use or not header ('block' | 'none')
- headerText > header text
- buttonText > submit button text
- buttonLink > href of submit button (link)
- emailPlaceholder > email field placeholder
- headerHeight > header height (px or %)
- inputBorderRadius > input border radius (10px for default)
- inputBorderColor > color for input border
- inputColor
- inputWidth
- inputPlaceholderColor
- inputPlaceholderOpacity
- buttonWidth
- buttonHeight
- buttonBgcolor
- buttonFloat > (left | none | right)
- buttonPadding
- buttonBorderColor
- buttonBorderRadius
- buttonBgcolorHover
- buttonColor
- buttonColorHover
- buttonBorderColorHover
- buttonBorderRadiusHover

soon more options :)
