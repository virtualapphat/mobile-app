import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Switch } from 'react-native';

import { ROUTES } from 'constants';
import { Input } from 'components';

function Screen(props) {
	const [form, setForm] = useState({});
	function onClick() {
		// props.navigation.navigate(ROUTES.HATS);
		props.navigation.toggleDrawer();
	}
	console.log('form', form);
	return (
		<View style={styles.form}>
			<View style={styles.field}>
				<Text>Name</Text>
				<Input />
			</View>
			<View style={styles.field}>
				<Text style={styles.fieldTitle}>Private / Public</Text>
				<Switch
					style={styles.switch}
					value={form.isPrivate}
					onValueChange={value => setForm({ ...form, isPrivate: value })}
				/>
			</View>

			<Button onPress={onClick} title='Switch page' />
		</View>
	);
}

export default Screen;

const styles = StyleSheet.create({
	form: {
		alignItems: 'center',
	},
	field: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '80%',
		height: 50,
		marginVertical: 20,
	},
});
