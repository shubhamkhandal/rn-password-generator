import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View style={[styles.card]}>
      <Text>Elevated card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    margin: 4,
    backgroundColor: '#afafaf',
    elevation: 4,
  },
});
