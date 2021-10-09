import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BurgerMenuIconOpen from './icons/BurgerMenuIconOpen'
import BurgerMenuIconClose from './icons/BurgerMenuIconClose'

const NavBar = ({ activeBurger, closeBurgerTimeout, handleOpenBurger, navigationItems }) => {
	NavBar.propTypes = {
		activeBurger: PropTypes.bool.isRequired,
		closeBurgerTimeout: PropTypes.func.isRequired,
		handleOpenBurger: PropTypes.func.isRequired,
		navigationItems: PropTypes.arrayOf(PropTypes.object).isRequired,
	}

	return (
		<nav className='fixed top-0 z-50 w-full bg-skin-header-fill'>
			<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
				<div className='flex relative z-50 justify-between items-center px-4 h-20 bg-skin-header-fill'>
					<div className='flex absolute inset-y-0 left-4 items-center sm:hidden'>
						<button
							type='button'
							aria-controls='mobile-menu'
							aria-expanded='false'
							onClick={handleOpenBurger}
							className='inline-flex justify-center items-center p-2 rounded-md text-skin-base hover:text-skin-secondary hover:bg-skin-btn-hover focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
							<span className='sr-only'>Open menu on the left</span>
							{!activeBurger ? <BurgerMenuIconOpen /> : <BurgerMenuIconClose />}
						</button>
					</div>
					<div className='flex flex-1 justify-center items-center sm:items-stretch sm:justify-start'>
						<div id='menu desktop' className='hidden sm:block sm:ml-6'>
							<div className='flex space-x-4 bg-opacity-90 text-skin-base'>
								{navigationItems.map(item => (
									<NavLink
										key={item.path}
										exact
										to={item.path}
										onClick={closeBurgerTimeout}
										activeClassName='text-skin-secondary btn-active'
										className='btn'>
										{item.name}
									</NavLink>
								))}
							</div>
						</div>
					</div>
					<div className='mr-4 text-sm tracking-wide text-skin-base helperCenter'>
						<span>Eduardo Lépine</span>
					</div>
					<div>
						<Link to='/smart-home/'>
							<img
								className='h-16'
								src='https://i.pinimg.com/474x/8d/a8/3b/8da83bcea62f70edcfc4f611e760eac1.jpg'
								alt='chiot leve la patte'
							/>
						</Link>
					</div>
				</div>
			</div>

			<div
				className={`sm:hidden fixed z-30 w-full bg-skin-header-fill bg-opacity-90 transition duration-700 ease-in-out ${
					activeBurger ? 'transform translate-y-0' : 'transform -translate-y-full'
				}`}
				id='mobile-menu'>
				<div className='z-40 px-2 pt-2 pb-3 space-y-1 text-skin-base'>
					{navigationItems.map(item => (
						<NavLink
							key={item.path}
							exact
							to={item.path}
							onClick={closeBurgerTimeout}
							activeClassName='text-skin-secondary btn-active'
							className='block btn'>
							{item.name}
						</NavLink>
					))}
				</div>
			</div>
		</nav>
	)
}

export default NavBar
