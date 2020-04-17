import React, { Component, useState, useEffect } from 'react';
import { Image } from 'react-native';
import { Content, Card, CardItem, Text, Button, Icon, Left, Body, Spinner } from 'native-base';

//import { gql } from "apollo-boost";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_POSTS = gql`
query {
  posts {
    edges {
      node {
        id
        title
        content
        date
          featuredImage {
          mediaItemUrl
        }
      }
    }
  }
}
`;

const Home = () => {

  const { loading, error, data } = useQuery( GET_POSTS );
  const ulrimg = useState( "https://x.kinja-static.com/assets/images/logos/placeholders/default.png" );

  useEffect( () => {
    console.log( "loading", loading );
    console.log( "error", JSON.stringify( error ) );
    console.log( "data", JSON.stringify( data ) );
  }, [] )

  return (
    <>
      <Content>
        {

          ( data && data.posts )
            ? data.posts.edges.map( ( { node } ) => (
              <Card key={node.id} style={{ flex: 0 }}>
                <CardItem >
                  <Body>
                    <Image key={node.id} source={{ uri: node.featuredImage != null ? node.featuredImage.mediaItemUrl : "https://x.kinja-static.com/assets/images/logos/placeholders/default.png" }} style={{ height: 400, width: 600, flex: 1 }} />
                    <Text>
                      {node.title}
                    </Text>
                    <Text>
                      {node.content}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{ color: '#87838B' }}>
                      <Icon name="share" />
                      <Text>1,926</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
            ) )

            :
            <Content>
              <Spinner color='blue' />
            </Content>
        }
      </Content>
    </>
  )
}



export default Home;