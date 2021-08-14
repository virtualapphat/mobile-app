import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native';

import { ROUTES } from 'constants';
import { Field } from 'components';

import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';
import { Actions } from 'redux';

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
	const dispatch = useDispatch();
	async function onClick() {
		const { error, user } = await FirebaseApi.signup({
			email: form.email,
			password: form.password,
		});
		if (error) {
			return alert(error.message);
		}
		dispatch(Actions.setUser(user));
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
	const [loading, setLoading] = useState(false);
	const [mode, setMode] = useState('login'); // login / signup

	const dispatch = useDispatch();

	async function onClick() {
		setLoading(true);

		if (mode === 'login') {
			const { error, user } = await FirebaseApi.login({
				email: form.email,
				password: form.password,
			});
			if (error) {
				setLoading(false);
				return alert(error.message);
			}
			dispatch(
				Actions.user.setUser({
					uid: user.uid,
					displayName: user.displayName,
					photoURL: user.photoURL,
					email: user.email,
					emailVerified: user.emailVerified,
					phoneNumber: user.phoneNumber,
				})
			);
		} else {
			const { error, user } = await FirebaseApi.signup({
				email: form.email,
				password: form.password,
			});

			if (error) {
				setLoading(false);

				return alert(error.message);
			}
			dispatch(
				Actions.user.setUser({
					uid: user.uid,
					displayName: user.displayName,
					photoURL: user.photoURL,
					email: user.email,
					emailVerified: user.emailVerified,
					phoneNumber: user.phoneNumber,
				})
			);
		}
	}

	const toggleMode = () => (mode === 'login' ? setMode('signup') : setMode('login'));

	return (
		<LinearGradient style={styles.gradient} colors={['red', 'blue']}>
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

				{loading ? (
					<ActivityIndicator size='small' color='#0000ff' />
				) : (
					<>
						<Button onPress={onClick} title={mode === 'login' ? 'LOGIN' : 'SIGN UP'} />
						<Button
							onPress={toggleMode}
							title={mode === 'login' ? 'Create Account' : 'Already have account '}
						/>
					</>
				)}
			</View>
		</LinearGradient>
	);
}

export { SignUpScreen, Login };

const styles = StyleSheet.create({
	gradient: { height: '100%' },
	form: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	field: {
		justifyContent: 'center',
		width: '80%',
		height: 50,
		marginVertical: 20,
	},
});
