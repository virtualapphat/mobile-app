import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

function Input({ ...rest }) {
	return <TextInput style={styles.input} {...rest} />;
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
	input: {
		borderBottomWidth: 1,
		width: '100%',
	},
});

export default Input;
