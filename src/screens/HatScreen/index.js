import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { ROUTES } from 'constants';


function Screen({ route, navigation }) {
	function onClick() {
		navigation.navigate(ROUTES.HATS);
	}
	return (
		<View>
			<Text>HAT SCREEN: {route.params.hatName}</Text>
			<Button onPress={onClick} title='Switch page' />
		</View>
	);
}

export default Screen;

const styles = StyleSheet.create({});
