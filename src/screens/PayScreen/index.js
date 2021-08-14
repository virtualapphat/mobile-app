import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import { ROUTES } from 'constants';
import { Text, Button } from 'components';
import { FirebaseApi } from 'api';

import { globalStyles } from 'styles';


function Screen({ route, navigation }) {
	const [hat, setHat] = useState(null);
	const [closed, setClosed] = useState(false);
	function onClick() {
		navigation.navigate(ROUTES.HATS);
	}

	function closeHat() {
		setClosed(true);
	}

	useEffect(() => {
		FirebaseApi.getHat(route?.params?.id).then(data => setHat(data));
		return () => {};
	}, []);


	if (!hat) {
		return <ActivityIndicator size='small' color='#0000ff' />;
	}

	if (closed) {
		return (
			<View>
				<Text>for: hat name</Text>
			</View>
		);
	}

	return (
		<View style={globalStyles.page}>
			<View style={styles.details}>
				<Text>name: test</Text>
				<Text>amount: 20$</Text>
			</View>
			<View style={styles.actions}>
				<Button variant='outlined' title='Pay with credit card' />
				<Button variant='outlined' title='Pay with crypto wallet' />
			</View>
		</View>
	);
}

export default Screen;

const styles = StyleSheet.create({
	details: {
		flex: 1,
		justifyContent: 'center',
	},
	actions: {
		height: 300,
	},
});
