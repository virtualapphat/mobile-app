import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

function Icon({ name = 'add', size = 22, color = 'white' }) {
	return <FontAwesome5 style={styles.icon} name={name} size={size} color={color} />;
}

const styles = StyleSheet.create({
	icon: {
		margin: 8,
		height: 30
	},
});

export default Icon;
