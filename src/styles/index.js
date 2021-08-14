import { StyleSheet } from 'react-native';

import { COLORS } from 'constants';

const page = {};

export const globalStyles = StyleSheet.create({
	page: {
		backgroundColor: COLORS.GRAY_DARK,
		flex: 1,
		alignItems: 'center',
	},

	text: {
		color: COLORS.WHITE,
		fontFamily: 'Satisfy',
		fontSize: 20,
		textTransform: 'uppercase',
		marginVertical: 4,
	},
});
