import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from 'screens';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { ROUTES, COLORS } from 'constants';

import { useSelector, useDispatch } from 'react-redux';
import { Selectors, Actions } from 'redux';

import { FirebaseApi } from 'api';

const Stack = createStackNavigator();

const HeaderButtonComponent = props => (
	<HeaderButton IconComponent={Ionicons} iconSize={23} color='white' {...props} />
);

const defaultNavigationOptions = props => {
	return {
		title: 'VIRTUAL HAT',
		headerStyle: {
			backgroundColor: COLORS.GRAY,
		},
		headerTintColor: 'white',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
		headerRight: () => {
			return (
				<HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
					<Item
						title='falllback'
						iconName='ios-menu'
						onPress={() => {
							props.navigation.toggleDrawer();
						}}
					/>
				</HeaderButtons>
			);
		},
	};
};

export function HomeStackNavigator() {
	const user = useSelector(Selectors.getUser);

	const initialRoute = user ? ROUTES.HOME : ROUTES.LOGIN;
	console.log('App.user', user, initialRoute);
	return (
		<Stack.Navigator initialRouteName={initialRoute} screenOptions={defaultNavigationOptions}>
			{SCREENS.map(screen => {
				if (screen.private && !user) return null;
				if (!screen.private && user) return null;
				return (
					<Stack.Screen
						key={screen.name}
						name={screen.name}
						component={screen.component}
						options={{ title: screen.name }}
					/>
				);
			})}
		</Stack.Navigator>
	);
}

// export function PayStackNavigator() {
// 	return (
// 		<Stack.Navigator initialRouteName={ROUTES.PAY} screenOptions={defaultNavigationOptions}>
// 			<Stack.Screen name={ROUTES.PAY} component={Screens.PayScreen} options={{ title: 'PAY' }} />
// 		</Stack.Navigator>
// 	);
// }

// export function TermsOfPolicyStackNavigator() {
// 	return (
// 		<Stack.Navigator
// 			initialRouteName={ROUTES.TERMS_OF_SERVICE}
// 			screenOptions={defaultNavigationOptions}
// 		>
// 			<Stack.Screen
// 				name={ROUTES.TERMS_OF_SERVICE}
// 				component={Screens.TermsOfPolicyScreen}
// 				options={{ title: 'TERMS_OF_SERVICE' }}
// 			/>
// 		</Stack.Navigator>
// 	);
// }

// export function PrivacyPolicyStackNavigator() {
// 	return (
// 		<Stack.Navigator
// 			initialRouteName={ROUTES.PRIVACY_POLICY}
// 			screenOptions={defaultNavigationOptions}
// 		>
// 			<Stack.Screen
// 				name={ROUTES.PRIVACY_POLICY}
// 				component={Screens.PrivacyPolicyScreen}
// 				options={{ title: 'PRIVACY_POLICY' }}
// 			/>
// 		</Stack.Navigator>
// 	);
// }
// export function SupportStackNavigator() {
// 	return (
// 		<Stack.Navigator initialRouteName={ROUTES.SUPPORT} screenOptions={defaultNavigationOptions}>
// 			<Stack.Screen
// 				name={ROUTES.SUPPORT}
// 				component={Screens.SupportScreen}
// 				options={{ title: 'SUPPORT' }}
// 			/>
// 		</Stack.Navigator>
// 	);
// }
// export function SettingsStackNavigator() {
// 	return (
// 		<Stack.Navigator initialRouteName={ROUTES.SETTINGS} screenOptions={defaultNavigationOptions}>
// 			<Stack.Screen
// 				name={ROUTES.SETTINGS}
// 				component={Screens.SettingsScreen}
// 				options={{ title: 'SETTINGS' }}
// 			/>
// 		</Stack.Navigator>
// 	);
// }
// export function AboutUsStackNavigator() {
// 	return (
// 		<Stack.Navigator initialRouteName={ROUTES.ABOUT_US} screenOptions={defaultNavigationOptions}>
// 			<Stack.Screen
// 				name={ROUTES.ABOUT_US}
// 				component={Screens.AboutUsScreen}
// 				options={{ title: 'ABOUT_US' }}
// 			/>
// 		</Stack.Navigator>
// 	);
// }

export default {
	HomeStackNavigator,
	// SettingsStackNavigator,
	// SupportStackNavigator,
	// AboutUsStackNavigator,
	// PrivacyPolicyStackNavigator,
	// TermsOfPolicyStackNavigator,
};
