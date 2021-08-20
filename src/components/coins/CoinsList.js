import React, { useState }  from 'react';
import { StyleSheet, FlatList } from 'react-native';

import CoinItem from './CoinItem';

const CoinsList = ({ coins, search, getData }) => {

    const [refreshing, setRefreshing] = useState(false);

    return(
        <FlatList
            style={styles.list}
            data={coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) ||
              coin.symbol.toLowerCase().includes(search.toLowerCase()))}
            renderItem={({ item }) => {
              return <CoinItem coin={item} />
            }}
            showsVerticalScrollIndicator={false}
            refreshing={refreshing}
            onRefresh={async () => {
              setRefreshing(true);
              await getData();
              setRefreshing(false);
            }}
        />
    );

}

const styles = StyleSheet.create({
    list: {
        width: '95%'
    }
});

export default CoinsList;