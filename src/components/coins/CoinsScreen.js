import React, { useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import colors from '../../res/colors';

import Http from '../../libs/http';

import CoinsHeader from './CoinsHeader';
import CoinsList from './CoinsList';

const CoinsScreen = () => {

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {

        getData();
    
    }, []);

    const getData = async() => {

        const data = await Http.get(url);
        setCoins(data);
    
    }

    const getSearch = (text) => {

        setSearch(text);

    }

    return (
        <View style={styles.container}>
          <StatusBar backgroundColor={colors.fuchsia} />
          <CoinsHeader getSearch={getSearch} />
          <CoinsList coins={coins} search={search} getData={getData} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.darkBlue,
      alignItems: 'center',
      flex: 1
    }
});

export default CoinsScreen;