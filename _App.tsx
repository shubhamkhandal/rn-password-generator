/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  // useColorScheme
} from 'react-native';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <View style={isDarkMode ? styles.lightContent : styles.lightContent}>
        <Text>Hello sys</Text>
      </View> */}
        <View>
          <Text style={{margin: 4}}>Flat cards</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {['cardOne', 'cardTwo', 'cardThree', 'cardFour'].map((val, idx) => (
              <React.Fragment key={idx}>
                <FlatCard color={val} />
              </React.Fragment>
            ))}
          </View>
        </View>
        <View>
          <Text style={{margin: 4}}>Elevated cards</Text>
          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {['', '', '', ''].map((val, idx) => (
                <React.Fragment key={idx}>
                  <ElevatedCard />
                </React.Fragment>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={{marginVertical: 10}}>
          <FancyCard />
        </View>
        <View>
          <ActionCard />
        </View>
        <View>
          <ContactList />
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
  },
  lightContent: {
    color: '#ffffff',
  },
  darkContent: {
    color: '#000000',
  },
});
