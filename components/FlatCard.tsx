import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlatCard = (props: any) => {
  return (
    <View style={[styles.card, styles[props?.color]]}>
      <Text>{props?.color}</Text>
    </View>
  );
};

const styles: any = StyleSheet.create({
  card: {
    flex: 1,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    margin: 4,
  },
  cardOne: {backgroundColor: '#638889'},
  cardTwo: {backgroundColor: '#9DBC98'},
  cardThree: {backgroundColor: '#EBD9B4'},
  cardFour: {backgroundColor: '#F9EFDB'},
});

export default FlatCard;
