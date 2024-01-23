import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/682373/pexels-photo-682373.jpeg?auto=compress',
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={[styles.text, styles.heading]}>deer</Text>
        <Text style={[styles.text, styles.label]}>wild animal</Text>
        <Text style={[styles.text, styles.desc]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          fugit esse accusantium ut consequuntur cupiditate ab molestias iste
          perferendis deserunt?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 8,
  },
  image: {
    height: 180,
    resizeMode: 'cover',
  },
  content: {
    padding: 10,
  },
  text: {color: '#000'},
  heading: {fontSize: 16, fontWeight: 'bold'},
  label: {fontSize: 13, fontWeight: '400'},
  desc: {fontSize: 10, fontWeight: '400'},
});
