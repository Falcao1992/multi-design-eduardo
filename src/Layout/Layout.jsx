import React, { useState } from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'
import Header from './Header/Header'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import navigationItems from './navigationItems'

const Layout = ({ children }) => {
	Layout.propTypes = {
		children: PropTypes.element.isRequired,
	}
	const [activeBurger, setActiveBurger] = useState(false)

	const handleOpenBurger = () => {
		setActiveBurger(!activeBurger)
	}

	const closeBurgerTimeout = () => {
		setTimeout(() => {
			setActiveBurger(false)
		}, 700)
	}

	return (
		<MainStyled className='bg-skin-fill'>
			<Header>
				<NavBar
					activeBurger={activeBurger}
					setActiveBurger={setActiveBurger}
					handleOpenBurger={handleOpenBurger}
					closeBurgerTimeout={closeBurgerTimeout}
					navigationItems={navigationItems}
				/>
			</Header>
			<section>{children}</section>
			<Footer
				closeBurgerTimeout={closeBurgerTimeout}
				navigationItems={navigationItems}
			/>
		</MainStyled>
	)
}
const MainStyled = styled.main`
	height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr auto;

	@media (min-width: 640px) {
		min-height: 100vh;
		height: auto;
	}
`

export default Layout
