import React, { Component } from 'react';
import {
  Card,
  Container,
  CardItem,
  Body,
  Text,
  Thumbnail,
  ListItem,
  List,
  Content,
  Left,
  Right,
  Button
} from 'native-base';
export default class CardExample extends Component {
  render () {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/2020/04/3181-casos-coronavirus-en-mexico-salud-federal-hoy-ultimas-noticias-8-de-abril.jpg' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text >Ver Más</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/2020/02/yanet110220.jpg' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Ver Más</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/2019/05/ingridcoronado.jpg' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Ver Más</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/2020/04/3181-casos-coronavirus-en-mexico-salud-federal-hoy-ultimas-noticias-8-de-abril.jpg' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Ver Más</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/2020/04/johnny-depp-pierde-dedo-pelea-salvaje.jpg' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Ver Más</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/2020/04/ALEJANDRO-080420.jpg' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Ver Más</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/2020/04/3181-casos-coronavirus-en-mexico-salud-federal-hoy-ultimas-noticias-8-de-abril.jpg' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text >Ver Más</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/2020/02/yanet110220.jpg' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Ver Más</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/2019/05/ingridcoronado.jpg' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Ver Más</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/2020/04/3181-casos-coronavirus-en-mexico-salud-federal-hoy-ultimas-noticias-8-de-abril.jpg' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Ver Más</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/2020/04/johnny-depp-pierde-dedo-pelea-salvaje.jpg' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Ver Más</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.radioformula.com.mx/wp-content/uploads/2020/04/ALEJANDRO-080420.jpg' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Ver Más</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container >

    );
  }
}