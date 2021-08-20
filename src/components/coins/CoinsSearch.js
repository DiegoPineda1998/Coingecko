import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import colors from '../../res/colors';

const CoinsSearch = ({ getSearch }) => {

    return(
        <View style={styles.headerSearch}>
            <Icon
                style={styles.iconSearch}
                name='magnify'
                color={colors.bluePurple}
                type='material-community'
            />
            <TextInput
                style={styles.searchInput}
                placeholder='Search a coin'
                placeholderTextColor={colors.gray}
                onChangeText={text => getSearch(text)} />
        </View>
    );
}

const styles = StyleSheet.create({
    headerSearch: {
        flexDirection: 'row',
        width: '50%'
    },
    searchInput: {
        color: colors.white,
        borderBottomColor: colors.bluePurple,
        borderBottomWidth: 1,
        textAlign: 'center',
        width: '85%',
        marginTop: 7
    },
    iconSearch: {
        marginTop: 15
    }
});

export default CoinsSearch;