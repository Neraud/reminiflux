const lightTheme = {
	body: '#fefefe',
	text: '#363537',
	link: 'blue',
	readentry: '#bbb',
	errorentry: 'red',
	hoverbg: 'grey',
	selectbg: 'lightslategrey',
	feedbubble: '#2a89bc',
	categorybubble: '#454545',
	preview: '#bbb',
	unreaddot: '#555',
	listheaderbg: '#ddd',
	itemheaderbg: 'lightgoldenrodyellow',
	buttonbg: '#bbb',
	buttonfg: '#363537',
	dropdownbg: '#fefefe',
	dropdownfg: '#363537',
	modalbg: 'darkgrey',
	errorbg: 'lightcoral',
	errorfg: 'inherit',
}

const darkTheme = {
	...lightTheme,
	...{
		body: '#363537',
		text: '#fafafa',
		link: '#2a89bc',
		readentry: '#999',
		categorybubble: '#959595',
		unreaddot: '#bbb',
		listheaderbg: '#464547',
		itemheaderbg: '#464547',
		buttonbg: '#565557',
		buttonfg: '#fafafa',
		dropdownbg: '#565557',
		dropdownfg: '#fafafa',
		modalbg: '#565557',
		errorbg: 'darkred',
	},
}

const catppuccinLatte = {
	...lightTheme,
	...{
		body: '#eff1f5', // base
		text: '#4c4f69', // text
		link: '#1e66f5', // blue
		readentry: '#6c6f85', // subtext0
		errorentry: '#d20f39', // red
		hoverbg: '#bcc0cc', // surface1
		selectbg: '#acb0be', // surface2
		feedbubble: '#7287fd', // accent (lavender)
		categorybubble: '#7287fd', // accent (lavender)
		preview: '#5c5f77', // subtext1
		unreaddot: '#7287fd', // accent (lavender)
		listheaderbg: '#bcc0cc', // surface1
		itemheaderbg: '#bcc0cc', // surface1
		buttonbg: '#ccd0da', // surface0
		buttonfg: '#7287fd', // accent (lavender)
		dropdownbg: '#ccd0da', // surface0
		dropdownfg: '#7287fd', // accent (lavender)
	},
}

const catppuccinMocha = {
	...darkTheme,
	...{
		body: '#1e1e2e', // base
		text: '#cdd6f4', // text
		link: '#89b4fa', // blue
		readentry: '#a6adc8', // subtext0
		errorentry: '#f38ba8', // red
		hoverbg: '#45475a', // surface1
		selectbg: '#585b70', // surface2
		feedbubble: '#b4befe', // accent (lavender)
		categorybubble: '#b4befe', // accent (lavender)
		preview: '#bac2de', // subtext1
		unreaddot: '#b4befe', // accent (lavender)
		listheaderbg: '#45475a', // surface1
		itemheaderbg: '#45475a', // surface1
		buttonbg: '#313244', // surface0
		buttonfg: '#b4befe', // accent (lavender)
		dropdownbg: '#313244', // surface0
		dropdownfg: '#b4befe', // accent (lavender)
	},
}

export const themes = {
	light: lightTheme,
	dark: darkTheme,
	catppuccinLatte: catppuccinLatte,
	catppuccinMocha: catppuccinMocha,
}

export function listThemeKeys() {
	return Object.keys(themes)
}

export function getTheme(themeKey) {
	if (!(themeKey in themes)) themeKey = 'auto'

	if (themeKey === 'auto') {
		themeKey = window.matchMedia
			? window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'
			: 'light'
	}

	return themes[themeKey]
}
