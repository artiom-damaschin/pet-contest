import React from 'react'
import PropTypes from 'prop-types'
import { Provider as ReduxProvider } from 'react-redux'

import { store } from '../../redux'

function AppProvider({ children }) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
export default AppProvider
