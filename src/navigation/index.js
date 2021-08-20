import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import * as Screens from 'screens';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { ROUTES } from 'constants';

import Drawer from './Drawer';

export const navigationRef = React.createRef();

function Navigator() {
	return (
		<NavigationContainer ref={navigationRef}>
			<Drawer />
		</NavigationContainer>
	);
}

export { Navigator };
