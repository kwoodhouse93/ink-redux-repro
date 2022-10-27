#!/usr/bin/env node
import React from 'react'
import { render } from 'ink'
import App from './App'
import store from 'app/store'
import { Provider } from 'ink-redux'

render(
	<Provider store={store}>
		<App />
	</Provider>
)
