/**
 *
 * HomeScene Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import {
  Container,
  Button,
  Content,
  Text,
} from 'native-base';

import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { translate } from '../../utils/helpers';

import sagas from './sagas';
import { selectTest } from './selectors';
import { selectCounter } from '../../selectors';

import {
  addToCounter,
  minusToCounter,
} from '../../actions';
import reducer from './reducer';

import styles from './styles';

export class HomeScene extends React.Component { // eslint-disable-line
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }
  //
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

  // onClick = () => {
  // }

  render() {
    const {
      addCounter, minusCounter, counter, test, changeLanguage,
    } = this.props;
    return (
      <Container>
        <AppHeader title="Home Scene" hasLeft={false} hasRight={false} />

        <Content
          contentContainerStyle={styles.contentContainer}
          style={styles.content}
        >
          <Text style={styles.generateText}>{translate(test)}</Text>
          <Text style={styles.generateText}>
            {translate('generatorMessage')}
          </Text>
          <Button
            onPress={() => {
              Actions.push('login');
            }}
            style={styles.button}
          >
            <Text>Go to Login!</Text>
          </Button>
          <Button
            onPress={() => {
              changeLanguage('zh');
            }}
            style={styles.button}
          >
            <Text>Change Language to ZH</Text>
          </Button>
          <Button
            onPress={() => {
              changeLanguage('en');
            }}
            style={styles.button}
          >
            <Text>Change Language to EN</Text>
          </Button>
          <Button
            onPress={() => {
              addCounter();
            }}
            style={styles.button}
          >
            <Text>Add counter</Text>
          </Button>
          <Button
            onPress={() => {
              minusCounter();
            }}
            style={styles.button}
          >
            <Text>Minus counter</Text>
          </Button>
          <Text style={styles.generateText}>
            {counter}
          </Text>
        </Content>

        <AppFooter pageName="HomeScene" />
      </Container>
    );
  }
}

HomeScene.defaultProps = {
  counter: 0,
  minusCounter: null,
  addCounter: null,
  test: '',
  changeLanguage: () => null,
};

HomeScene.propTypes = {
  counter: PropTypes.number,
  minusCounter: PropTypes.func,
  addCounter: PropTypes.func,
  test: PropTypes.string,
  changeLanguage: PropTypes.func,
};


const mapStateToProps = createPropsSelector({
  counter: selectCounter,
  test: selectTest,
});

const mapDispatchToProps = (dispatch) => ({
  addCounter: () => dispatch(addToCounter()),
  minusCounter: () => dispatch(minusToCounter()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homeScene', reducer });

const withSagas = sagas.map((saga) => injectSaga(saga));

export default compose(
  withReducer,
  ...withSagas,
  withConnect,
)(HomeScene);
