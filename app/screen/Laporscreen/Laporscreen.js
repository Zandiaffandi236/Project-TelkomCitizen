import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Body,
  Icon,
  Text,
} from 'native-base';
import {StackActions} from 'react-navigation';

export default class Laporscreen extends Component {
  _back = () => {
    const popAction = StackActions.pop({
      n: 1,
    });
    this.props.navigation.dispatch(popAction);
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this._back}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Laporkan Masalah</Title>
          </Body>
        </Header>
        <Content>
          <Text>This is Content Section</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
