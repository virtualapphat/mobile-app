import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	FlatList,
	TouchableOpacity,
	ImageBackground,
} from 'react-native';
import 'react-native-get-random-values';
import { nanoid, customAlphabet } from 'nanoid';

import { ROUTES } from 'constants';


const names = customAlphabet('qwertyuiopasdfghjklzxcvbnm', 6);

import { Hat } from 'models';

const listData = [
	new Hat({ id: nanoid(), name: `name-${names()}` }),
	new Hat({ id: nanoid(), name: `name-${names()}` }),
	new Hat({ id: nanoid(), name: `name-${names()}` }),
	new Hat({ id: nanoid(), name: `name-${names()}` }),
	new Hat({ id: nanoid(), name: `name-${names()}` }),
	new Hat({ id: nanoid(), name: `name-${names()}` }),
	new Hat({ id: nanoid(), name: `name-${names()}` }),
	new Hat({ id: nanoid(), name: `name-${names()}` }),
];

function Screen(props) {
	function onClick() {
		props.navigation.goBack();
	}

	const renderListItem = itemData => {
		const onClickHat = () => {
			props.navigation.navigate(ROUTES.HAT, { hatName: itemData.item.name });
		};
		return (
			<TouchableOpacity style={styles.item} onPress={onClickHat}>
				<View style={styles.container}>
					<View style={styles.header}>
						<ImageBackground
							style={styles.background}
							source={{
								uri: 'https://cdn.pixabay.com/photo/2013/07/12/19/18/magic-154526_960_720.png',
							}}
						>
							<Text style={styles.title}>{itemData.item.name}</Text>
						</ImageBackground>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View>
			<FlatList style={styles.list} data={listData} renderItem={renderListItem} numColumns={1} />
			<Text>Hats Screen</Text>
			<Button onPress={onClick} title='Back' />
		</View>
	);
}

export default Screen;

const styles = StyleSheet.create({
	list: {},
	item: {
		margin: 15,
		flex: 1,
		height: 200,
		borderRadius: 4,
		borderWidth: 2,
	},
	container: {
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		elevation: 3,
		flex: 1,
	},
	header: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	background: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
	},
	title: {
		color: 'white',
		fontSize: 40,
		fontWeight: 'bold',
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0.6)',
	},
});
