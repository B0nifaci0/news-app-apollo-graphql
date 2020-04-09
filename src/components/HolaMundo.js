import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Body, Title, Right, Input, Item } from 'native-base';
import Home from '../containers/Home';
import Envivo from '../containers/Envivo';
import Noticias from '../containers/Noticias';
import Podcast from '../containers/Podcast';
export default class HolaMundo extends Component {
  render () {
    return (
      <Container>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Buscar Noticia " />
        </Item>
        {/*         <Header hasTabs>
          <Left />
          <Body>
            <Title>Noticias Radio Fórmula</Title>
          </Body>
          <Right />
        </Header> */}
        <Tabs>
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
    );
  }
}