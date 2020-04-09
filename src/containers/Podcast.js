import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
export default class ListAvatarExample extends Component {
  render () {
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/envivoimg/chumel_torres_LaRadioDeLaRepublica_radioFormula_03.jpg' }} />
              </Left>
              <Body>
                <Text>Chumel Torres</Text>
                <Text note>Aliquip fugiat laboris in do dolore consequat do Lorem minim id tempor duis.</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/envivoimg/paola_rojas_enFormula_radioFormula_03.jpg' }} />
              </Left>
              <Body>
                <Text>Paola Rojas</Text>
                <Text note>Aliquip fugiat laboris in do dolore consequat do Lorem minim id tempor duis.</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/envivoimg/flor_rubio_formulaEspectacular_radioFormula_03.jpg' }} />
              </Left>
              <Body>
                <Text>Flor Rubio</Text>
                <Text note>Aliquip fugiat laboris in do dolore consequat do Lorem minim id tempor duis.</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/envivoimg/chumel_torres_LaRadioDeLaRepublica_radioFormula_03.jpg' }} />
              </Left>
              <Body>
                <Text>Chumel Torres</Text>
                <Text note>Aliquip fugiat laboris in do dolore consequat do Lorem minim id tempor duis.</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/envivoimg/paola_rojas_enFormula_radioFormula_03.jpg' }} />
              </Left>
              <Body>
                <Text>Paola Rojas</Text>
                <Text note>Aliquip fugiat laboris in do dolore consequat do Lorem minim id tempor duis.</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/envivoimg/flor_rubio_formulaEspectacular_radioFormula_03.jpg' }} />
              </Left>
              <Body>
                <Text>Flor Rubio</Text>
                <Text note>Aliquip fugiat laboris in do dolore consequat do Lorem minim id tempor duis.</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}