import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

function Button({ onPress, children }) {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={onPress}>
			<View style={styles.background}>
				<Text style={styles.text}>{children}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#dbdb4b',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 25,
		width: 150,
		alignItems: 'center',
		justifyContent: 'center',
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
