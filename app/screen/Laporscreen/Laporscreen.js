import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Body,
  Icon,
  Text,
  Form,
  Textarea,
  Input,
} from 'native-base';
import styles from './styles';
import {StackActions} from 'react-navigation';

export default class Laporscreen extends Component {
  _back = () => {
    const popAction = StackActions.pop({
      n: 1,
    });
    this.props.navigation.dispatch(popAction);
  };

  _pickImg = () => {
    const pushAction = StackActions.push({
      routeName: 'Imgpick',
    });
    this.props.navigation.dispatch(pushAction);
  };

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={this._back}>
              <Icon style={styles.title} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Laporkan Masalah</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Button style={styles.upload} onPress={this._pickImg}>
              <Icon name="camera" />
            </Button>
            <Input placeholder="Ruangan" style={styles.input1} />
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Keterangan"
              style={styles.input2}
            />
            <Button block style={styles.button} onPress={this._back}>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
