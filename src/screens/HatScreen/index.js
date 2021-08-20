import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ActivityIndicator, Animated } from 'react-native';

import { ROUTES, COLORS } from 'constants';
import { Button, Text } from 'components';
import { FirebaseApi } from 'api';

import { globalStyles } from 'styles';

function Screen({ route, navigation }) {
	const [hat, setHat] = useState(null);
	const [closed, setClosed] = useState(false);


	function onClick() {
		// navigation.navigate(ROUTES.HATS);
	}

	function closeHat() {
		setClosed(true);
	}

	useEffect(() => {
		FirebaseApi.getHat(route.params.id).then(data => setHat(data));
		return () => {};
	}, []);

	if (!hat) {
		return <ActivityIndicator size='small' color='#0000ff' />;
	}

	if (closed) {
		return (
			<View style={{ ...globalStyles.page, ...styles.container }}>
				<Text>name: {hat.name}</Text>

				<Text>collected: 100</Text>
				<Text>fee: 5</Text>
				<Text>total: 95</Text>
				<Button onPress={() => setClosed(false)} title='WALLET' />
			</View>
		);
	}

	return (
		<View style={{ ...globalStyles.page, ...styles.container }}>
			<View style={styles.row}>
				<Text>name: {hat.name}</Text>
				<Text>balance: {hat.totalAmount || 0}</Text>
			</View>
			<View style={styles.row}>
				<Button onPress={closeHat} title='Close Hat' />
				<Button onPress={onClick} title='Share' />
			</View>
		</View>
	);
}

export default Screen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	row: {
		marginVertical: 16,
	},
});
