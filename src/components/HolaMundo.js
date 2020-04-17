import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Body, Title, Right, Input, Item } from 'native-base';
import Home from '../containers/Home';
import Envivo from '../containers/Envivo';
import Noticias from '../containers/Noticias';
import Podcast from '../containers/Podcast';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient(
  {
    uri: 'https://testdo.radioformula.com.mx/graphql',
  }
);
export default class HolaMundo extends Component {
  render () {

    return (

      <ApolloProvider client={client}>
        <Container>
          <Header hasTabs>
            <Left />
            <Body>
              <Image center source={{ uri: 'https://g3p3p2d4.stackpathcdn.com/wp-content/uploads/2018/08/RF_logo_H_250x40_01.png' }} style={{ height: 80, width: 120, flex: 1 }} />
            </Body>
            <Right />
          </Header>
          <Tabs locked>
            <Tab heading={<TabHeading><Icon name="home" /><Text>Inicio</Text></TabHeading>}>
              <Home />
            </Tab>
            <Tab heading={<TabHeading><Icon name="radio" /><Text>En Vivo</Text></TabHeading>}>
              <Envivo />
            </Tab>
            <Tab heading={<TabHeading><Icon name="paper" /><Text>Noticias</Text></TabHeading>}>
              <Noticias />
            </Tab>
            <Tab heading={<TabHeading><Icon name="mic" /><Text>Podcast</Text></TabHeading>}>
              <Podcast />
            </Tab>
          </Tabs>
        </Container>
      </ApolloProvider>
    )
  }
}