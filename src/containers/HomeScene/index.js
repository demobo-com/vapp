/**
 *
 * HomeScene Container
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
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
  ListItem,
} from 'native-base';
import {
  ScrollView,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

import AppHeader from 'components/AppHeader';

import injectReducer from 'utils/injectReducer';

import { TRANSACTION_LIST } from './constants';
// import { defaultAction } from './actions';
import cardBackground from './assets/cardBackground.png';
import cardFront from './assets/cardFrond.png';
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
      rotateDeg: new Animated.Value(0),
      isFront: true,
    };
  }

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

  onRotateImage = () => {
    const { rotateDeg, isFront } = this.state;
    if (isFront) {
      Animated.timing(rotateDeg, {
        toValue: 180,
        duration: 400,
      }).start(() => this.setState({ isFront: false }));
    } else {
      Animated.timing(rotateDeg, {
        toValue: 0,
        duration: 400,
      }).start(() => this.setState({ isFront: true }));
    }
  }

  getCardImageStyles = () => {
    const { rotateDeg } = this.state;
    const rotateY = rotateDeg.interpolate({
      inputRange: [0, 90, 180],
      outputRange: ['0deg', '90deg', '180deg'],
    });
    const rotateYB = rotateDeg.interpolate({
      inputRange: [0, 90, 180],
      outputRange: ['180deg', '90deg', '0deg'],
    });
    const zIndex = rotateDeg.interpolate({
      inputRange: [0, 90, 180],
      outputRange: [1, 0, -1],
    });
    const zIndexB = rotateDeg.interpolate({
      inputRange: [0, 90, 180],
      outputRange: [-1, 0, 1],
    });
    const opacity = rotateDeg.interpolate({
      inputRange: [0, 90, 91, 180],
      outputRange: [1, 1, 0, 0],
    });
    const opacityB = rotateDeg.interpolate({
      inputRange: [0, 90, 91, 180],
      outputRange: [0, 0, 1, 1],
    });

    const cardFrontStyle = {
      transform: [{ rotateY }],
      zIndex,
      opacity,
    };
    const cardBackgroundStyle = {
      transform: [{ rotateY: rotateYB }],
      zIndex: zIndexB,
      opacity: opacityB,
    };

    return [cardFrontStyle, cardBackgroundStyle];
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

  renderTransactionList = () => (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      {
        TRANSACTION_LIST && TRANSACTION_LIST.map((item, index) => {
          const key = index;
          return (
            <ListItem
              style={styles.listItem}
              key={key}
            >
              <Text style={styles.left}>{item.date}</Text>
              <Text style={styles.center}>{item.itemType === 'payment' ? '$' : '-$'}{parseFloat(item.amount).toLocaleString()}</Text>
              <Text style={styles.right}>{item.itemType}</Text>
            </ListItem>
          );
        })
      }
    </ScrollView>
  )

  renderCardImage = () => (
    <TouchableWithoutFeedback onPress={this.onRotateImage}>
      <View style={styles.imageView}>
        <Animated.Image
          source={cardFront}
          style={[styles.image, this.getCardImageStyles()[0]]}
          resizeMode="contain"
        />
        <Animated.Image
          source={cardBackground}
          style={[styles.image, this.getCardImageStyles()[1]]}
          resizeMode="contain"
        />
      </View>
    </TouchableWithoutFeedback>
  )

  render() {
    const { balance } = this.state;
    return (
      <Container>
        <AppHeader
          title="ViSync"
          leftIcon="md-settings"
          rightIcon="md-menu"
          leftPress={() => Actions.push('settings')}
          rightPress={() => Actions.push('history')}
        />

        <Content
          contentContainerStyle={styles.contentContainer}
          style={styles.content}
          scrollEnabled={false}
        >
          <Text style={styles.balance}>{balance > 0 ? '$' : '-$'}{parseFloat(Math.abs(balance).toFixed(2)).toLocaleString()}</Text>
          { this.renderCardImage() }
          {this.renderRechargeLine()}
          <View style={styles.horizontalLine} />
          {this.renderTransactionList()}
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
