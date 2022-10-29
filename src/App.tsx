import React from 'react'
import { Box } from 'ink'
import { DefaultContextProvider } from 'app/context'
import { Provider } from 'react-redux/lib/alternate-renderers'
import store from 'app/store'

import ContextConsumer from 'features/ContextConsumer'
import Fetcher from 'features/Fetcher'

const App = () => {
	// return <DefaultContextProvider>
	return <Provider store={store}>
		<Box flexDirection='column'>
			<Fetcher />
			{/* <ContextConsumer /> */}
		</Box>
	</Provider>
	// </DefaultContextProvider>
}

module.exports = App
export default App
