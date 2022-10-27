import React from 'react'
import { Box } from 'ink'
import { useScreenSize } from 'hooks/useScreenSize'
import Header from 'components/Header'
import Title from 'components/Title'
import LobbyList from 'features/lobbies/components/List'

const App = () => {
	const { width, height } = useScreenSize()

	return <Box width={width} flexDirection='column'>
		<Header />
		<Title />
		<LobbyList />
	</Box>
}

module.exports = App
export default App
