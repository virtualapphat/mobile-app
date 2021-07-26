import React from 'react';
import { Switch, TextInput, StyleSheet, View } from 'react-native';

import Input from '../Input';

function Field({ type = 'text', value, onChange, children }) {
	const Component = getFieldComponent(type);
	const componentProps = getFieldProps({ type, onChange });
	return (
		<View>
			<Component {...componentProps} value={value} />
		</View>
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
	input: {
		borderBottomWidth: 1,
		width: '100%',
	},
});

function getFieldComponent(type) {
	switch (type) {
		case 'text':
		case 'number':
			return Input;
		case 'boolean':
			return Switch;
		default:
			return Input;
	}
}

function getFieldProps({ type, onChange }) {
	switch (type) {
		case 'text':
			return { onChangeText: onChange };
		case 'number':
			return { onChangeText: onChange, keyboardType: 'numeric' };
		case 'boolean':
			return { onValueChange: onChange };
		default:
			return {};
	}
}

export default Field;
