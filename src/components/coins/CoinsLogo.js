import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';

import colors from '../../res/colors';

const CoinsLogo = () => {

    return (
        <View style={styles.headerTitleApp}>
            <Icon
                style={styles.iconMoney}
                name='finance'
                color={colors.fuchsia}
                type='material-community'
            />
            <Image
                style={styles.imageTitleApp}
                source={require(('../../assets/Logo.png'))}
            />
        </View>
    );
    
}

const styles = StyleSheet.create({
    headerTitleApp: {
        flexDirection: 'row',
        width: '50%'
    },
    iconMoney: {
        marginTop: 15,
        paddingRight: 5
    },
    imageTitleApp: {
        width: '65%', 
        height: 35,
        marginTop: 10,
    }
});

export default CoinsLogo;