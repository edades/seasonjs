## Season JS

Add a simple custom subscribe form to yout website

![Image of SeasonJS](http://vvcap.com/img/f5bZair9yMP.png)
![Image of SeasonJS 2](http://vvcap.com/img/rMUUNq39K0F.png)

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
- bgColor > main background color ('red' | '#ffffff')
- mainBox > element where was created the subscribe form. for default add this after body tag
- width > width to the form ('300px' or '90%')
- height > height to the form ('300px')
- header > use or not header ('block' | 'none')
- headerBgcolor > bg color
- headerColor > text color
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
- buttonFontSize (10px | 2rem)
- buttonColorHover
- buttonBorderColorHover
- buttonBorderRadiusHover

soon more options :)
