import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import colors from '../../res/colors';

const CoinItem = ({ coin }) => {

    const { name, image, symbol, current_price, price_change_percentage_24h } = coin;

    return (
        <View style={styles.containerItem}>
            <View style={styles.coinName}>
                <Image
                    style={styles.image}
                    source={{ uri: image }}
                />
                <View style={styles.containerNames}>
                    <Text style={styles.text}>{name}</Text>
                    <Text style={styles.textSymbol}>{symbol}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.textPrice}>$ {current_price} </Text>
                <Text style={[styles.pricePercentage, price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown]}>$ {price_change_percentage_24h} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerItem: {
        paddingTop: 5,
        paddingBottom: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: colors.bluePurple,
        borderBottomWidth: 0.5
    },
    containerNames: {
        marginLeft: 10
    },
    coinName: {
        flexDirection: 'row'
    },
    image: {
        width: 30,
        height: 30
    },
    text: {
        color: colors.white
    },
    textSymbol: {
        color: colors.gray,
        textTransform: 'uppercase'
    },
    textPrice: {
        color: colors.white,
        textAlign: 'right'
    },
    pricePercentage: {
        textAlign: 'right',
    },
    priceUp: {
        color: colors.green,
        fontSize: 10
    },
    priceDown: {
        color: colors.red,
        fontSize: 10
    }
});

export default CoinItem;