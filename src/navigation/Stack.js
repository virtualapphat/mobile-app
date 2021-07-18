import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from 'screens';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { ROUTES, COLORS } from 'constants';

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
	return (
		<Stack.Navigator initialRouteName={ROUTES.HOME} screenOptions={defaultNavigationOptions}>
			<Stack.Screen
				name={ROUTES.HOME}
				component={Screens.HomeScreen}
				options={{ title: 'Home' }}
			/>
			<Stack.Screen
				name={ROUTES.HAT}
				component={Screens.HatScreen}
				options={({ route }) => ({ title: route.params.hatName })}
			/>
			<Stack.Screen
				name={ROUTES.HATS}
				component={Screens.HatsScreen}
				options={{ title: 'HATS' }}
			/>
			<Stack.Screen
				name={ROUTES.CREATE_HAT}
				component={Screens.CreateHat}
				options={{ title: 'Create Hat' }}
			/>
		</Stack.Navigator>
	);
}

export function TermsOfPolicyStackNavigator() {
	return (
		<Stack.Navigator
			initialRouteName={ROUTES.TERMS_OF_SERVICE}
			screenOptions={defaultNavigationOptions}
		>
			<Stack.Screen
				name={ROUTES.TERMS_OF_SERVICE}
				component={Screens.TermsOfPolicyScreen}
				options={{ title: 'TERMS_OF_SERVICE' }}
			/>
		</Stack.Navigator>
	);
}

export function PrivacyPolicyStackNavigator() {
	return (
		<Stack.Navigator
			initialRouteName={ROUTES.PRIVACY_POLICY}
			screenOptions={defaultNavigationOptions}
		>
			<Stack.Screen
				name={ROUTES.PRIVACY_POLICY}
				component={Screens.PrivacyPolicyScreen}
				options={{ title: 'PRIVACY_POLICY' }}
			/>
		</Stack.Navigator>
	);
}
export function SupportStackNavigator() {
	return (
		<Stack.Navigator initialRouteName={ROUTES.SUPPORT} screenOptions={defaultNavigationOptions}>
			<Stack.Screen
				name={ROUTES.SUPPORT}
				component={Screens.SupportScreen}
				options={{ title: 'SUPPORT' }}
			/>
		</Stack.Navigator>
	);
}
export function SettingsStackNavigator() {
	return (
		<Stack.Navigator initialRouteName={ROUTES.SETTINGS} screenOptions={defaultNavigationOptions}>
			<Stack.Screen
				name={ROUTES.SETTINGS}
				component={Screens.SettingsScreen}
				options={{ title: 'SETTINGS' }}
			/>
		</Stack.Navigator>
	);
}
export function AboutUsStackNavigator() {
	return (
		<Stack.Navigator initialRouteName={ROUTES.ABOUT_US} screenOptions={defaultNavigationOptions}>
			<Stack.Screen
				name={ROUTES.ABOUT_US}
				component={Screens.AboutUsScreen}
				options={{ title: 'ABOUT_US' }}
			/>
		</Stack.Navigator>
	);
}

export default {
	HomeStackNavigator,
	SettingsStackNavigator,
	SupportStackNavigator,
	AboutUsStackNavigator,
	PrivacyPolicyStackNavigator,
	TermsOfPolicyStackNavigator,
};
