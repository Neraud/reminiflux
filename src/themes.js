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

export const themes = {
	light: lightTheme,
	dark: darkTheme,
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
