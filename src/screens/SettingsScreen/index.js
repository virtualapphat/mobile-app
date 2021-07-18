import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { ROUTES } from 'constants';


function Screen(props) {
	function onClick() {
		props.navigation.navigate(ROUTES.CREATE_HAT);
	}
	return (
		<View>
			<Text>Screen</Text>
			<Button onPress={onClick} title='Create Hat' />
		</View>
	);
}

export default Screen;

const styles = StyleSheet.create({});
