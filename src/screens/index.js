import HomeScreen from './HomeScreen/';
import HatsScreen from './HatsScreen';
import HatScreen from './HatScreen';
import CreateHat from './CreateHat';

import AboutUsScreen from './AboutUsScreen';
import PrivacyPolicyScreen from './PrivacyPolicyScreen';
import TermsOfPolicyScreen from './TermsOfPolicyScreen';
import SettingsScreen from './SettingsScreen';
import SupportScreen from './SupportScreen';
import { SignUpScreen, Login } from './Auth';
import PayScreen from './PayScreen';

/**
 * A module that says hello!
 * @module hello/world
 */
export {
	HomeScreen,
	HatScreen,
	HatsScreen,
	CreateHat,
	AboutUsScreen,
	PrivacyPolicyScreen,
	SupportScreen,
	SettingsScreen,
	TermsOfPolicyScreen,
	SignUpScreen,
	Login,
	PayScreen,
};

export const SCREENS = [
	{
		name: 'SIGN_UP',
		path: 'SIGN_UP',
		private: false,
		auth: true,
		component: SignUpScreen,
	},
	{
		name: 'LOGIN',
		path: 'LOGIN',
		private: false,
		auth: true,
		component: Login,
	},
	{
		name: 'HOME',
		path: 'HOME',
		private: true,
		component: HomeScreen,
	},
	{
		name: 'HAT',
		path: 'HAT',
		private: true,
		component: HatScreen,
	},
	{
		name: 'HATS',
		path: 'HATS',
		private: true,
		component: HatsScreen,
	},
	{
		name: 'CREATE_HAT',
		path: 'CREATE_HAT',
		private: true,
		component: CreateHat,
	},
];
