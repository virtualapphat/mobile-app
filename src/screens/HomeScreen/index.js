import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Modal, ImageBackground, Animated } from 'react-native';

import { ROUTES, COLORS } from 'constants';
import { Button, Icon } from 'components';

function Screen(props) {
	function onClick() {
		props.navigation.navigate(ROUTES.CREATE_HAT);
	}
	const position = useRef(new Animated.ValueXY({ x: 0, y: -1000 })).current;

	useEffect(() => {
		Animated.spring(position, {
			toValue: { x: 0, y: 0 },
			useNativeDriver: false,
		}).start();
	}, []);

	return (
		<Animated.View style={{ ...styles.container, ...position.getLayout() }}>
			<ImageBackground
				resizeMode='contain'
				source={require('assets/images/hat.jpeg')}
				style={styles.image}
			>
				<Button onPress={onClick}>Open V-Hat</Button>
			</ImageBackground>
		</Animated.View>
	);
}

export default Screen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: COLORS.GRAY_DARK,
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
