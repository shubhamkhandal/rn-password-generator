import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';

const Contacts: any[] = [
  {
    userId: 1,
    id: 1,
    title: 'delight or',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'Who may be easy for the services that',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'sharing less',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'and further times',
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: 'laborious resilience and to obtain it as a result',
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: 'that any reason for some pleasure for everyone',
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: 'happy consequences for',
    completed: false,
  },
];
const ContactList = () => {
  console.log(Contacts);
  return (
    <View>
      <Text>ContactList</Text>
      <ScrollView scrollEnabled={false}>
        {Contacts?.map(({id, title, completed}: any) => {
          return (
            <View key={id} style={styles.list}>
              <Text style={[styles.text]}>
                {id}. {title}
              </Text>
              {completed && (
                <Image
                  source={require('../assets/verified-badge.png')}
                  style={{height: 18, width: 18, overlayColor: 'green'}}
                />
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#000',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
