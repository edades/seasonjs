(function($){
	this.Season = function(){
		this.options = null;
	}

	Season.prototype.open = function(argument){
		 this.options = argument;
		 fillModal.call(this);
	};

	Season.prototype.close = function(argument){
		 console.log('se cierra la porkeria');
	};

	function fillModal(){
		// def configs
		this.options.headerText = (this.options.headerText) ? this.options.headerText : 'Subscribe to our news!';
		this.options.emailPlaceholder = (this.options.emailPlaceholder) ? this.options.emailPlaceholder : 'Your Email...';
		this.options.buttonText = (this.options.buttonText) ? this.options.buttonText : 'Subscribe now';
		this.options.buttonLink = (this.options.buttonLink) ? this.options.buttonLink : '#';
		// enf def configs
		var seasonform  = `<div class="seasonform">
												<div class="header">
													<p>`+this.options.headerText+`</p>
												</div>
												<div class="mainbox">
													<form id="frmseason">
														<input type="email" placeholder="`+this.options.emailPlaceholder+`">
													</form>
													<a href="`+this.options.buttonLink+`" class="btn">`+this.options.buttonText+`</a>
												</div>
											 </div>`;
		var theme = getTheme.call(this);
		$('head').append(theme);
    $(this.options.mainBox).append(seasonform);
	}

	function getTheme(){
		var theme;
		switch (this.options.theme) {
			case 'summer':
				theme = `<style>
								 </style>`;
				break;
			case 'winter':
				theme = `<style>
								 </style>`;
				break;
			case 'spring':
				theme = `<style>
								 </style>`;
				break;
			case 'autumn':
				theme = `<style>
								 </style>`;
				break;
			default:
				// def config
				this.options.bgColor = (this.options.bgColor) ? this.options.bgColor : '#92e1ee';
				this.options.width = (this.options.width) ? this.options.width : '200px';
				this.options.height = (this.options.height) ? this.options.height : '190px';
				this.options.mainBox = (this.options.mainBox) ? this.options.mainBox : 'body';
				this.options.header = (this.options.header) ? this.options.header : 'block';
				this.options.headerBgcolor = (this.options.headerBgcolor) ? this.options.headerBgcolor : 'black';
				this.options.headerColor = (this.options.headerColor) ? this.options.headerColor : 'white';
				this.options.headerHeight = (this.options.headerHeight) ? this.options.headerHeight : '30px';
				this.options.inputBorderRadius = (this.options.inputBorderRadius) ? this.options.inputBorderRadius : '10px';
				this.options.inputBorderColor = (this.options.inputBorderColor) ? this.options.inputBorderColor : 'black';
				this.options.inputColor = (this.options.inputColor) ? this.options.inputColor : 'black';
				this.options.inputWidth = (this.options.inputWidth) ? this.options.inputWidth : '100%';
				this.options.inputPlaceholderColor = (this.options.inputPlaceholderColor) ? this.options.inputPlaceholderColor : 'black';
				this.options.inputPlaceholderOpacity = (this.options.inputPlaceholderOpacity) ? this.options.inputPlaceholderOpacity : '0.5';
				this.options.buttonWidth = (this.options.buttonWidth) ? this.options.buttonWidth : '60%';
				this.options.buttonHeight = (this.options.buttonHeight) ? this.options.buttonHeight : '30px';
				this.options.buttonBgcolor = (this.options.buttonBgcolor) ? this.options.buttonBgcolor : 'red';
				this.options.buttonFloat = (this.options.buttonFloat) ? this.options.buttonFloat : 'none';
				this.options.buttonPadding = (this.options.buttonPadding) ? this.options.buttonPadding : '5px';
				this.options.buttonBorderColor = (this.options.buttonBorderColor) ? this.options.buttonBorderColor : 'orange';
				this.options.buttonBorderRadius = (this.options.buttonBorderRadius) ? this.options.buttonBorderRadius : '10px';
				this.options.buttonBgcolorHover = (this.options.buttonBgcolorHover) ? this.options.buttonBgcolorHover : 'black';
				this.options.buttonColor = (this.options.buttonColor) ? this.options.buttonColor : 'white';
				this.options.buttonColorHover = (this.options.buttonColorHover) ? this.options.buttonColorHover : 'white';
				this.options.buttonBorderColorHover = (this.options.buttonBorderColorHover) ? this.options.buttonBorderColorHover : 'blue';
				this.options.buttonBorderRadiusHover = (this.options.buttonBorderRadiusHover) ? this.options.buttonBorderRadiusHover : '10px';
				this.options.buttonFontSize = (this.options.buttonFontSize) ? this.options.buttonFontSize : '15px';
				// end def config
				theme = `<style>
									.seasonform{
										background: `+this.options.bgColor+`;
										width: `+this.options.width+`;
										height: `+this.options.height+`;
										display: block;
    								position: relative;
									}
									.seasonform .header{
								    width: 100%;
								    height: `+this.options.headerHeight+`;
								    background: `+this.options.headerBgcolor+`;
								    margin-bottom: 1em;
								    display: `+this.options.header+`;
								    box-sizing: border-box;
									}
									.seasonform .header p{
										color:`+this.options.headerColor+`;;
										line-height: 1.7;
    								text-align: center;
									}
									.seasonform .mainbox{
										width: 100%;
										height: 100%;
										padding: 1em;
										box-sizing: border-box;
									}
									.seasonform .mainbox input{
										border: 1px solid `+this.options.inputBorderColor+`;
										color: `+this.options.inputColor+`;
										width: `+this.options.inputWidth+`;
										background: #aee3eb;
										height: 36px;
								    border-radius: 10px;
								    padding: 5px;
								    box-sizing: border-box;
									}
									.seasonform .mainbox input[type="email"]::-webkit-input-placeholder {
									  color: `+this.options.inputPlaceholderColor+` !important;
									  opacity: `+this.options.inputPlaceholderOpacity+`;
									}
									.seasonform .mainbox input[type="email"]::-moz-placeholder {
									  color: `+this.options.inputPlaceholderColor+` !important;
									  opacity: `+this.options.inputPlaceholderOpacity+`;
									}
									.seasonform .mainbox input[type="email"]:-ms-input-placeholder {
									  color: `+this.options.inputPlaceholderColor+` !important;
									  opacity: `+this.options.inputPlaceholderOpacity+`;
									}
									.seasonform .mainbox input[type="email"]:-moz-placeholder {
									  color: `+this.options.inputPlaceholderColor+` !important;
									  opacity: `+this.options.inputPlaceholderOpacity+`;
									}
									.seasonform .mainbox .btn{
										width: `+this.options.buttonWidth+`;
								    height: `+this.options.buttonHeight+`;
								    background: `+this.options.buttonBgcolor+`;
								    display: block;
								    box-sizing: border-box;
								    float: `+this.options.buttonFloat+`;
								    padding: `+this.options.buttonPadding+`;
								    color: `+this.options.buttonColor+`;
								    text-decoration: none;
								    text-align: center;
								    margin: 1em auto;
								    border: 1px solid `+this.options.buttonBorderColor+`;
								    border-radius: `+this.options.buttonBorderRadius+`;
								    font-size: `+this.options.buttonFontSize+`;
									}
									.seasonform .mainbox .btn:hover{
										background: `+this.options.buttonBgcolorHover+`;
										color: `+this.options.buttonColorHover+`;
										border: 1px solid `+this.options.buttonBorderColorHover+`;
								    border-radius: `+this.options.buttonBorderRadiusHover+`;
									}
								 </style>`;
				break;
		}
		return theme;
	}

})(jQuery)