import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Footer = ({ closeBurgerTimeout, navigationItems }) => {
	Footer.propTypes = {
		closeBurgerTimeout: PropTypes.func.isRequired,
		navigationItems: PropTypes.arrayOf(PropTypes.object).isRequired,
	}
	return (
		<footer className='flex flex-col py-8 text-center md:flex-row md:justify-center text-skin-base bg-skin-footer-fill'>
			{navigationItems.map(item => (
				<NavLink
					key={item.path}
					exact={item.path === '/'}
					to={item.path}
					onClick={closeBurgerTimeout}
					className='mx-auto w-max sm:mx-0 sm:w-auto btn sm:mr-2'
					activeClassName='text-skin-secondary btn-active'>
					{item.name}
				</NavLink>
			))}
		</footer>
	)
}

export default Footer
