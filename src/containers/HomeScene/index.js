/**
 *
 * HomeScene Container
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import { Actions } from 'react-native-router-flux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import {
  Container,
  Content,
  Text,
  View,
  Button,
  Input,
} from 'native-base';

import AppHeader from 'components/AppHeader';

import injectReducer from 'utils/injectReducer';

// import { selectTest } from './selectors';
// import { defaultAction } from './actions';
import reducer from './reducer';

// import { selectCounter } from '../../selectors';
import {
  addToCounter,
  minusToCounter,
} from '../../actions';

import styles from './styles';

export class HomeScene extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      balance: 805.72,
      sendValue: 0,
    };
  }

  // componentWillMount() {
  // }
  //
  // componentWillReceiveProps(nextProps) {
  // }
  //
  // componentDidMount() {
  // }
  //
  // componentWillUnmount() {
  // }

  onChangeBlance = () => {
    const { balance, sendValue } = this.state;
    this.setState({ balance: balance + sendValue });
  }

  onChangeSendValue = (value) => {
    this.setState({ sendValue: Number(value) });
  }

  renderRechargeLine = () => (
    <View style={styles.rechargeLine}>
      <Input
        style={styles.input}
        keyboardType="numeric"
        onChangeText={this.onChangeSendValue}
        returnKeyType="done"
      />
      <Button
        onPress={this.onChangeBlance}
        style={styles.button}
      >
        <Text>Send</Text>
      </Button>
    </View>
  )

  render() {
    const { balance } = this.state;
    return (
      <Container>
        <AppHeader title="Home Scene" hasLeft={false} hasRight={false} />

        <Content
          contentContainerStyle={styles.contentContainer}
          style={styles.content}
        >
          <Text style={styles.balance}>{balance > 0 ? '$' : '-$'}{Math.abs(balance).toFixed(2)}</Text>
          {this.renderRechargeLine()}
        </Content>
      </Container>
    );
  }
}

HomeScene.defaultProps = {
  // addCounter: null,
  // counter: 0,
  // changeLanguage: () => null,
  // minusCounter: null,
  // test: '',
};

HomeScene.propTypes = {
  // addCounter: PropTypes.func,
  // counter: PropTypes.number,
  // changeLanguage: PropTypes.func,
  // minusCounter: PropTypes.func,
  // test: PropTypes.string,
};

const mapStateToProps = createPropsSelector({
  // counter: selectCounter,
  // test: selectTest,
});

const mapDispatchToProps = (dispatch) => ({
  addCounter: () => dispatch(addToCounter()),
  minusCounter: () => dispatch(minusToCounter()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homeScene', reducer });

// const withSagas = sagas.map((saga) => injectSaga(saga));

export default compose(
  withReducer,
  // ...withSagas,
  withConnect,
)(HomeScene);
