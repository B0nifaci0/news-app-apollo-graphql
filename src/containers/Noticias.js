import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Tab, Tabs, ScrollableTab, StyleProvider } from 'native-base';
//import material from '../../native-base-theme/variables/material';
import Home from '../containers/Home';

class Noticias extends Component {
  render () {
    return (

      <Tabs renderTabBar={() => <ScrollableTab backgroundColor="transparent"
      />}>
        <Tab rounded heading="Entretenimiento" activeTextStyle={{ color: 'black', fontWeight: 'bold' }} activeTabStyle={{ backgroundColor: '#A9F5F2' }} tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'black', fontSize: 12 }} >
          <Home />
        </Tab >
        <Tab heading="Mundo" activeTextStyle={{ color: 'black', fontWeight: 'bold' }} activeTabStyle={{ backgroundColor: '#A9F5F2' }} tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'black', fontSize: 12 }} >
          <Home />
        </Tab>
        <Tab heading="Finanzas" activeTextStyle={{ color: 'black', fontWeight: 'bold' }} activeTabStyle={{ backgroundColor: '#A9F5F2' }} tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'black', fontSize: 12 }} >
          <Home />
        </Tab>
        <Tab heading="Vida y Estilo " activeTextStyle={{ color: 'black', fontWeight: 'bold' }} activeTabStyle={{ backgroundColor: '#A9F5F2' }} tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'black', fontSize: 12 }} >
          <Home />
        </Tab>
        <Tab heading="Mundo " activeTextStyle={{ color: 'black', fontWeight: 'bold' }} activeTabStyle={{ backgroundColor: '#A9F5F2' }} tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'black', fontSize: 12 }} >
          <Home />
        </Tab>
        <Tab heading="México " activeTextStyle={{ color: 'black', fontWeight: 'bold' }} activeTabStyle={{ backgroundColor: '#A9F5F2' }} tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'black', fontSize: 12 }} >
          <Home />
        </Tab>
        <Tab heading="Tecnología " activeTextStyle={{ color: 'black', fontWeight: 'bold' }} activeTabStyle={{ backgroundColor: '#A9F5F2' }} tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'black', fontSize: 12 }} >
          <Home />
        </Tab>
      </Tabs >

    )
  }
}
const styles = StyleSheet.create( {
  tab: {
    backgroundColor: 'white',
  }
} );
export default Noticias;