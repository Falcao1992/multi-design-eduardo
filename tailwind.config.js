function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgba(var(${variableName})), ${opacityValue}`
		}
		return `rgba(var(${variableName}))`
	}
}

module.exports = {
	// mode: 'jit',
	darkMode: 'media',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			msm: { max: '640px' },
			mmd: { max: '768px' },
			mlg: { max: '1024px' },
			mxl: { max: '1280px' },
			m2xl: { max: '1536px' },
		},
		extend: {
			textColor: {
				skin: {
					base: withOpacity('--color-text-base'),
					secondary: withOpacity('--color-text-secondary'),
				},
			},
			backgroundColor: {
				skin: {
					fill: withOpacity('--color-fill'),
					'header-fill': withOpacity('--color-fill-header'),
					'footer-fill': withOpacity('--color-fill-footer'),
					'header-fill-light': withOpacity('--color-fill-header-light'),
					'btn-hover': withOpacity('--color-hover-button'),
					'active-item': withOpacity('--color-fill-active-item'),
				},
			},
		},
	},
}
