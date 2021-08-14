import { Text as NativeText } from 'react-native';
import React from 'react';

import { globalStyles } from 'styles';

export const Text = ({ style, ...rest }) => {
	return <NativeText style={{ ...globalStyles.text, ...style }} {...rest} />;
};
