import React, { Component } from 'react';
import { View, Text, Image, Button, Pressable } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
    };

    this.soma = this.soma.bind(this);
    this.menos = this.menos.bind(this);
  }

  soma() {
    var value = this.state.numero + 1;
    this.setState({
      numero: value,
    });
  }

  menos() {
    if (this.state.numero > 0) {
      var value = this.state.numero - 1;
      this.setState({
        numero: value,
      });
    } else {
      return;
    }
  }

  render() {
    return (
      <View style={{ marginTop: 50, alignItems: 'center' }}>
        <Text style={{ color: 'orange', fontSize: 30 }}>
          Contador de Pessoas
        </Text>
        <Text style={{ fontSize: 28, color: 'red', textAlign: 'center' }}>
          {this.state.numero}
        </Text>
        <Pressable
          style={{
            height: 30,
            width: '70%',
            alignSelf: 'center',
            backgroundColor: 'blue',
            borderRadius: 10,
            justifyContent: 'center',
            marginTop: 10
          }}
          title="Mais"
          onPress={this.soma}>
          <Text
            style={{
              alignSelf: 'center',
              color: 'white',
            }}>
            Soma
          </Text>
        </Pressable>

        <Pressable
          style={{
            height: 30,
            width: '70%',
            alignSelf: 'center',
            backgroundColor: 'blue',
            borderRadius: 10,
            justifyContent: 'center',
            marginTop: 10
          }}
          title="menos"
          onPress={this.menos}>
          <Text
            style={{
              alignSelf: 'center',
              color: 'white',
            }}>
            Menos
          </Text>
        </Pressable>
      </View>
    );
  }
}

export default App;
