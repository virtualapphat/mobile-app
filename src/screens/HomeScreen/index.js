import React from 'react';
import { StyleSheet, View, Text, Modal, ImageBackground } from 'react-native';

import { ROUTES,COLORS } from 'constants';
import { Button, Icon } from 'components';

function Screen(props) {
	function onClick() {
		props.navigation.navigate(ROUTES.CREATE_HAT);
	}
	return (
		<View style={styles.container}>
			<ImageBackground
				resizeMode='contain'
				source={require('assets/images/hat.jpeg')}
				style={styles.image}
			>
				<Button onPress={onClick}>Open V-Hat</Button>
			</ImageBackground>
		</View>
	);
}

export default Screen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: COLORS.GRAY_DARK
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
