import React from 'react';
import {
	createDrawerNavigator,
	DrawerItem,
	DrawerItemList,
	DrawerContentScrollView,
} from '@react-navigation/drawer';

import {
	HomeStackNavigator,
	SettingsStackNavigator,
	SupportStackNavigator,
	AboutUsStackNavigator,
	PrivacyPolicyStackNavigator,
	TermsOfPolicyStackNavigator,
} from './Stack';

import * as Screens from 'screens';

import { ROUTES } from 'constants';

import { FirebaseApi } from 'api';

const Drawer = createDrawerNavigator();

function MyDrawer() {
	return (
		<Drawer.Navigator
			drawerContent={props => (
				<DrawerContentScrollView {...props}>
					<DrawerItem
						label='Hats'
						onPress={() => {
							props.navigation.navigate('HATS');
						}}
					/>
					<DrawerItemList {...props} />
					<DrawerItem
						label='Logout'
						onPress={() => {
							FirebaseApi.signOut();
							props.navigation.navigate('LOGIN');
						}}
					/>
				</DrawerContentScrollView>
			)}
		>
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
