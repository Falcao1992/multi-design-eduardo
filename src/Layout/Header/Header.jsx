import React from 'react'
import PropTypes from 'prop-types'

function Header({ children }) {
	Header.propTypes = {
		children: PropTypes.element.isRequired,
	}
	return (
		<header className='min-h-[80px] bg-skin-header-fill'>{children}</header>
	)
}

export default Header
