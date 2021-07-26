import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { ROUTES } from 'constants';
import { Field } from 'components';
import { FirebaseApi } from 'api';

const fields = [
	{
		name: 'name',
		type: 'text',
	},
	{
		name: 'amount',
		type: 'number',
	},
	{
		name: 'isPrivate',
		type: 'boolean',
	},
	{
		name: 'isFixed',
		type: 'boolean',
	},
];

function CreateHatScreen(props) {
	const [form, setForm] = useState({});
	async function onClick() {
		console.log('form', form);
		const user = FirebaseApi.auth.currentUser();
		const { data } = await FirebaseApi.database.add('hats', { ...form, userId: user.uid });
		console.log('data', data);
		props.navigation.replace(ROUTES.HATS);
	}

	return (
		<View style={styles.form}>
			{fields.map(field => {
				return (
					<View style={styles.field} key={field.name}>
						<Text>{field.name}</Text>
						<Field
							type={field.type}
							value={form[field.name]}
							onChange={value => setForm({ ...form, [field.name]: value })}
						/>
					</View>
				);
			})}

			<Button onPress={onClick} title='CREATE' />
		</View>
	);
}

export default CreateHatScreen;

const styles = StyleSheet.create({
	form: {
		alignItems: 'center',
	},
	field: {
		justifyContent: 'center',
		width: '80%',
		height: 50,
		marginVertical: 20,
	},
});
