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

import { counterIncrement, counterDecrement } from './actions';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.onPressIncrement = this.onPressIncrement.bind(this);
        this.onPressDecrement = this.onPressDecrement.bind(this);
        this.onPressClear = this.onPressClear.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
    }

    onPressIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    onPressDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    onPressClear = () => {
        this.setState({ count: 0 });
    }

    onChangeText = (number) => {
        const count = parseInt(number, 10);
        this.setState({ count });
    }

    render = () => {
        console.log(this.props);
        const { container, countViewStyle, welcome } = styles;
        return (
            <View style={container}>
                <TextInput
                    style={{ width: 100, height: 40, borderWidth: 5, margin: 2 }}
                    onChangeText={this.onChangeText}
                    value={this.state.count.toString()}
                    textAlign={'center'}
                />
                <View style={countViewStyle}>
                    <Button onPress={this.props.counterIncrement} title="+" />
                    <Text style={welcome}>{this.props.count}</Text>
                    <Button onPress={this.props.counterDecrement} title="-" />
                </View>
                <Button onPress={this.onPressClear} title="Clear" />
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

const mapStateToProps = (state) => ({ count: state });

export default connect(mapStateToProps, { counterIncrement, counterDecrement })(Main);
