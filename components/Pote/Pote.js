import React from 'react';

import { View, Text } from 'react-native';

import NumberFormat from 'react-number-format';

import styles from  './Styles';

const Pote = (props) => {
    const valor = !props.value ? 0 : props.value;
    return (
        <View style={styles.pote}>
            <Text style={styles.poteName}>{props.name}</Text>
            <NumberFormat
                value={valor}
                fixedDecimalScale={true}
                decimalScale={2}
                displayType={'text'}
                decimalSeparator=","
                thousandSeparator="."
                prefix={'R$ '}
                renderText={value => <Text style={styles.poteValue} >{value}</Text>} />
        </View>
    )
}

export default Pote;