import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { ROUTES } from 'constants';
import { Field } from 'components';

import { FirebaseApi } from 'api';

const fields = [
	{
		name: 'email',
		type: 'text',
	},
	{
		name: 'password',
		type: 'text',
	},
];

function SignUpScreen(props) {
	const [form, setForm] = useState({});

	async function onClick() {
		console.log('form', form);
		const { error, user } = await FirebaseApi.signup({
			email: form.email,
			password: form.password,
		});
		if (error) {
			return alert(error.message);
		}

		props.navigation.navigate('HOME');
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

function Login(props) {
	const [form, setForm] = useState({});

	async function onClick() {
		console.log('form', form);
		const { error, user } = await FirebaseApi.login({
			email: form.email,
			password: form.password,
		});
		if (error) {
			return alert(error.message);
		}

		props.navigation.navigate('HOME');
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

			<Button onPress={onClick} title='LOGIN' />
		</View>
	);
}

export { SignUpScreen, Login };

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
