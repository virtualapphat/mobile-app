import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { navigationRef, Navigator } from 'navigation';
import AppLoading from 'expo-app-loading';

// store
import { store } from 'redux';
import { Provider, useDispatch } from 'react-redux';

// init firebase
import { FirebaseApi } from 'api';
import { Selectors, Actions } from 'redux';

import * as Font from 'expo-font';


import Zabo from 'zabo-sdk-js';

// Zabo
// .connect()
// .onConnection(data => {
// 	account = data;
// 	console.log(account);
// })
// .onError(error => {
// 	console.error('account connection error:', error);
// });


function fetchFonts() {
	return Font.loadAsync({
		Satisfy: require('assets/fonts/Satisfy-Regular.ttf'),
	});
}

// DEMO

function App(props) {
	const [assetsReady, setAssetsReady] = useState(false);
	const [ready, setReady] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = FirebaseApi.observe(user => {
			unsubscribe();
			if (user) {
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
			setReady(true);
		});
	}, []);

	if (!ready || !assetsReady) {
		return (
			<AppLoading
				onError={console.warn}
				startAsync={fetchFonts}
				onFinish={() => setAssetsReady(true)}
			/>
		);
	}
	return <Navigator />;
}

export default () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

const styles = StyleSheet.create({
	container: {},
});
