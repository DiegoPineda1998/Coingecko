import React from 'react';
import { StyleSheet, View } from 'react-native';

import CoinsLogo from './CoinsLogo';
import CoinsSearch from './CoinsSearch';

const CoinsHeader = ({ getSearch }) => {

    return (
        <View style={styles.header}>
            <CoinsLogo />
            <CoinsSearch getSearch={getSearch} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        marginBottom: 10
    }
});

export default CoinsHeader;