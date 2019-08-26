import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Item, Form, Input, Button, Label } from "native-base";
import * as firebase from "firebase";
import {Actions} from 'react-native-router-flux';

var config = {
    apiKey: "AIzaSyC11mTUJ0TdZIDctB1VwQ-m2Rt_oEuvvvA",
    authDomain: "rosy-griffin-228411.firebaseapp.com",
    databaseURL: "https://rosy-griffin-228411.firebaseio.com",
    projectId: "rosy-griffin-228411",
    storageBucket: "rosy-griffin-228411.appspot.com",
     messagingSenderId: "147862235797"
};

if (!firebase.apps.length) {
firebase.initializeApp(config);
}

export default class Login extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  SignUp = (email, password) => {
    try {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => { 
                 console.log(user);
           });
    } catch (error) {
          console.log(error.toString(error));
        }
      };

  login = (email, password) => {
    try {
      firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then(res => {
             console.log(res.user.password);
             Actions.operation();
      });
    } catch (error) {
          console.log(error.toString(error));
        }
      };



render() {
    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input autoCapitalize="none" 
            autoCorrect={false} 
            onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button full rounded success
          onPress={() => this.login(this.state.email, this.state.password)}>
            <Text>Login</Text>
          </Button>

          <Button full rounded default style={{ marginTop: 20 }}
          onPress={() => this.SignUp(this.state.email, this.state.password)}> 
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


