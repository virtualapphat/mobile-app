import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Icon({ name = 'add', size = 23, color = 'black' }) {
	return <Ionicons name={name} size={size} color={color} />;
}

export default Icon;
