import React from 'react';
import { Switch, TextInput, StyleSheet, View } from 'react-native';
import { COLORS } from 'constants';
import Input from '../Input';

function Field({ type = 'text', value, onChange, children }) {
	const Component = getFieldComponent(type);
	const componentProps = getFieldProps({ type, onChange });
	return (
		<View style={styles.background}>
			<Component {...componentProps} value={value} />
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderWidth: 4,
		borderWidth: 4,
		borderColor: COLORS.SECONDARY,
		color: COLORS.PRIMARY,
		fontSize: 20,
		fontWeight: 'bold',
		width: '100%',
	},
	checkbox: {
		margin: 8,
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
			return { onChangeText: onChange, style: styles.input };
		case 'number':
			return { onChangeText: onChange, style: styles.input, keyboardType: 'numeric' };
		case 'boolean':
			return { onValueChange: onChange, style: styles.checkbox };
		default:
			return {};
	}
}

export default Field;
