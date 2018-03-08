import React, { Component } from 'react';
import {
    // AppRegistry,
    View,
    StyleSheet,
    Text,
    TextInput,
    Button
} from 'react-native';
import { connect } from 'react-redux';

import { counterIncrement, counterDecrement, counterClear, counterSet, helloAction } from './actions';

class Main extends Component {
    constructor(props) {
        super(props);
        this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText = (number) => {
        this.props.counterSet(parseInt(number, 10));
    }

    render = () => {
        console.log(this.props);
        const { container, countViewStyle, welcome } = styles;
        const { helloText, pressedButton } = this.props.hello;
        return (
            <View style={container}>
                <TextInput
                    style={{ width: 100, height: 40, borderWidth: 5, margin: 2 }}
                    onChangeText={this.onChangeText}
                    value={this.props.count.toString()}
                    textAlign={'center'}
                />
                <View style={countViewStyle}>
                    <Button onPress={this.props.counterIncrement} title="+" />
                    <Text style={welcome}>{this.props.count}</Text>
                    <Button onPress={this.props.counterDecrement} title="-" />
                </View>
                <Button onPress={this.props.counterClear} title="Clear" />
                <Text>{helloText}</Text>
                <Text>Button was pressed => {pressedButton.toString()}</Text>
                <Button onPress={this.props.helloAction} title="Show me the magic" />
            </View>
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
  countViewStyle: {
    flexDirection: 'row'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

const mapStateToProps = (state) => ({ 
    count: state.counter,
    hello: state.hello
});

export default connect(mapStateToProps, 
    { 
        counterIncrement, 
        counterDecrement, 
        counterClear, 
        counterSet,
        helloAction
    })(Main);
