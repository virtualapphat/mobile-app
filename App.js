import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigator from 'navigation';
import AppLoading from 'expo-app-loading';

// store
import { store } from 'store';
import { Provider } from 'react-redux';

import * as Font from 'expo-font';


function fetchFonts() {
	return Font.loadAsync({
		Satisfy: require('assets/fonts/Satisfy-Regular.ttf'),
	});
}

// DEMO

export default function App() {
	const [ready, setReady] = useState(false);

	if (!ready) {
		return (
			<AppLoading
				onError={console.warn}
				startAsync={fetchFonts}
				onFinish={() => setReady(true)}
			/>
		);
	}
	return (
		<Provider store={store}>
			<AppNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {},
});
