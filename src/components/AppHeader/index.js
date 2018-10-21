/**
*
* AppHeader Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Icon,
} from 'native-base';

import styles from './styles';

const AppHeader = (props) => {
  const {
    title, hasLeft, hasRight, hasTitle,
    leftIcon, rightIcon, leftPress, rightPress,
  } = props;

  const leftButton = (
    <Left>
      <Button
        onPress={leftPress}
        style={styles.button}
      >
        <Icon name={leftIcon} />
        {/* <Text>{translate(backMessage)}</Text> */}
      </Button>
    </Left>
  );
  const rightButton = (
    <Right>
      <Button
        onPress={rightPress}
        style={styles.button}
      >
        {rightIcon && <Icon name={rightIcon} />}
      </Button>
    </Right>
  );
  const titleBody = (
    <Body><Title>{title}</Title></Body>
  );

  return (
    <Header style={styles.headerStyle}>
      { hasLeft && leftButton }
      { hasTitle && titleBody }
      { hasRight && rightButton }
    </Header>
  );
};

AppHeader.defaultProps = {
  title: 'homeTitle',
  hasLeft: true,
  hasTitle: true,
  hasRight: true,
  // backMessage: 'back',
  leftIcon: 'arrow-back',
  rightIcon: '',
  leftPress: () => Actions.pop(),
  rightPress: () => null,
};

AppHeader.propTypes = {
  title: PropTypes.string,
  hasLeft: PropTypes.bool,
  hasTitle: PropTypes.bool,
  hasRight: PropTypes.bool,
  // backMessage: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  leftPress: PropTypes.func,
  rightPress: PropTypes.func,
};

export default AppHeader;
