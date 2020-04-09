import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

class Envivo extends Component {
  render () {
    return (
      <Container>
        <Content>
          <List>
          </List>
          <ListItem avatar>
            <Left>
              <Thumbnail source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/envivoimg/flor_rubio_formulaEspectacular_radioFormula_03.jpg' }} />
            </Left>
            <Body>
              <Text>Fórmula Espectacular con Flor Rubio</Text>
              <Text note>103.3 FM</Text>
            </Body>
            <Right>
            </Right>
            <Left>
              <Thumbnail source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/envivoimg/eduardo_ruiz_healy_radioFormula_03.jpg' }} />
            </Left>
            <Body>
              <Text>Eduardo Ruíz Healy	</Text>
              <Text note>104.1 FM</Text>
            </Body>
            <Right>
            </Right>
          </ListItem>
        </Content>
        <Content>
          <ListItem avatar>
            <Left>
              <Thumbnail source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/envivoimg/formulaFinanciera_radioFormula_03.jpg' }} />
            </Left>
            <Body>
              <Text>Fórmula Financiera	 con Ma. Carmen Cortés, Marco A. Mares y Jóse Yuste</Text>
              <Text note>1470 AM</Text>
            </Body>
            <Right>
            </Right>
            <Left>
              <Thumbnail source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/envivoimg/paola_rojas_enFormula_radioFormula_03.jpg' }} />
            </Left>
            <Body>
              <Text>Paola Rojas en Fórmula con Paola Rojas		</Text>
              <Text note>970 AM</Text>
            </Body>
            <Right>
            </Right>
          </ListItem>
        </Content>
        <Content>
          <ListItem avatar>
            <Left>
              <Thumbnail source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/envivoimg/chumel_torres_LaRadioDeLaRepublica_radioFormula_03.jpg' }} />
            </Left>
            <Body>
              <Text>La Radio de la República  Con Chumel Torres	</Text>
              <Text note>1500 AM</Text>
            </Body>
            <Right>
            </Right>
            <Left>
              <Thumbnail source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/envivoimg/contra_ataque_deportivo_radioFormula_03.jpg' }} />
            </Left>
            <Body>
              <Text>Contra Ataque Deportivo con Luis García, Christian Martinoli, Antonio Rosique, Rodolfo Vargas			</Text>
              <Text note>TeleFórmula</Text>
            </Body>
            <Right>
            </Right>
          </ListItem>
        </Content>
      </Container >

    )
  }
}

export default Envivo;