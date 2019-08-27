import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Item, Form, Input, Button, Label } from "native-base";
import * as firebase from "firebase";
import {Actions} from 'react-native-router-flux';




export default class DetailsInfo extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      phonenumber: "",
      personToContact: "",
      details: "",
      image: "",
      audio: "",
    };
  }

render() {
    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input autoCapitalize="none" 
            autoCorrect={false} 
           
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
      
            />
          </Item>
          <Item floatingLabel>
            <Label>Phone</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
      
            />
          </Item>
          <Item floatingLabel>
            <Label>Details</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
      
            />
          </Item>
          <Button full rounded success
          >
            <Text>Login</Text>
          </Button>

          <Button full rounded default style={{ marginTop: 20 }}> 
          <Text>Signup</Text>
          </Button>
        </Form>
      </Container>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


