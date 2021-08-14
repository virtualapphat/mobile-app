import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ROUTES } from 'constants';
import { Field, Icon, Text, Button } from 'components';
import { FirebaseApi } from 'api';
import { globalStyles } from 'styles';

const fields = [
	{
		name: 'name',
		label: 'NAME',
		type: 'text',
		icon: 'hat-cowboy-side',
	},
	{
		name: 'amount',
		label: 'AMOUNT',
		type: 'number',
		icon: 'dollar-sign',
	},
	{
		name: 'isPrivate',
		label: 'IS PRIVATE',
		type: 'boolean',
		icon: 'people-arrows',
	},
	{
		name: 'isFixed',
		label: 'IS FIXED PRICE',
		type: 'boolean',
		icon: 'lock',
	},
];

function CreateHatScreen(props) {
	const [form, setForm] = useState({});
	async function onClick() {
		const user = FirebaseApi.auth.currentUser();
		const { data } = await FirebaseApi.database.add('hats', { ...form, userId: user.uid });
		props.navigation.replace(ROUTES.HATS);
	}

	return (
		<View style={globalStyles.page}>
			<View style={styles.form}>
				{fields.map(field => {
					return (
						<View style={styles.field} key={field.name}>
							<View style={styles.label}>
								<Icon name={field.icon} />
								<Text>{field.label}</Text>
							</View>
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
		</View>
	);
}

export default CreateHatScreen;

const styles = StyleSheet.create({
	form: {
		alignItems: 'center',
		width: '100%',
	},
	label: {
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: 16,
	},
	field: {
		justifyContent: 'center',
		width: '80%',
		marginVertical: 8,
	},
});
