import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { COLORS } from 'constants';

const variants = ['contained', 'outlined', 'text'];

function Button({ variant, onPress, title, children }) {
	const styles = getStyle({ variant });
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={onPress}>
			<View style={styles.background}>
				<Text style={styles.text}>{title || children}</Text>
			</View>
		</TouchableOpacity>
	);
}

function getStyle({ variant }) {
	switch (variant) {
		case 'outlined':
			return outlinedStyles;
		default:
			return styles;
	}
}
const outlinedStyles = StyleSheet.create({
	background: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 25,
		borderColor: COLORS.SECONDARY,
		borderWidth: 4,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 5,
	},
	text: {
		color: 'white',
		fontFamily: 'Satisfy',
		fontSize: 20,
		textTransform: 'uppercase',
		textAlign: 'center',
	},
});

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#dbdb4b',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 25,
		width: 150,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 5,
	},
	text: {
		color: 'black',
		fontFamily: 'Satisfy',
		fontSize: 20,
		textTransform: 'uppercase',
		textAlign: 'center',
	},
});

export default Button;
