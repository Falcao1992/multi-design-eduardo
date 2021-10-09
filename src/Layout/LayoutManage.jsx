import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import Layout from './Layout'

const LayoutManage = ({ component: Component, ...rest }) => {
	LayoutManage.propTypes = {
		component: PropTypes.elementType.isRequired,
	}

	return (
		<Route
			{...rest}
			render={props => (
				<Layout>
					<Component {...props} />
				</Layout>
			)}
		/>
	)
}

export default LayoutManage
