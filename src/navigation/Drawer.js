import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
	HomeStackNavigator,
	SettingsStackNavigator,
	SupportStackNavigator,
	AboutUsStackNavigator,
	PrivacyPolicyStackNavigator,
	TermsOfPolicyStackNavigator,
} from './Stack';

import { ROUTES } from 'constants';

const Drawer = createDrawerNavigator();

function MyDrawer() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name={ROUTES.HOME} component={HomeStackNavigator} />
			<Drawer.Screen name={ROUTES.SETTINGS} component={SettingsStackNavigator} />
			<Drawer.Screen name={ROUTES.SUPPORT} component={SupportStackNavigator} />
			<Drawer.Screen name={ROUTES.PRIVACY_POLICY} component={PrivacyPolicyStackNavigator} />
			<Drawer.Screen name={ROUTES.TERMS_OF_SERVICE} component={TermsOfPolicyStackNavigator} />
			<Drawer.Screen name={ROUTES.ABOUT_US} component={AboutUsStackNavigator} />
		</Drawer.Navigator>
	);
}

export default MyDrawer;
