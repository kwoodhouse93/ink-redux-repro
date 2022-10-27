import React from 'react'
import { Box } from 'ink'
import { useScreenSize } from 'hooks/useScreenSize'
import Header from 'components/Header'
import Title from 'components/Title'

const App = () => {
	const { width, height } = useScreenSize()

	return <Box width={width} height={height} flexDirection='column'>
		<Header />
		<Title />
	</Box>
}

module.exports = App
export default App
