/**
 *
 * HistoryScene Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { Actions } from 'react-native-router-flux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Text,
  View,
} from 'native-base';

import AppHeader from 'components/AppHeader';

import { translate } from 'utils/helpers';

import styles from './styles';

export class HistoryScene extends React.Component { // eslint-disable-line
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
    const { test } = this.props;
    return (
      <Container>
        <AppHeader title="History Scene" />

        <Content
          contentContainerStyle={styles.contentContainer}
          style={styles.content}
        >
          <View style={styles.contentView}>
            <Text style={styles.generateText}>{translate(test)}</Text>
            <Text style={styles.generateText}>{translate('generatorMessage')}</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

HistoryScene.defaultProps = {
  test: '',
};

HistoryScene.propTypes = {
  test: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(HistoryScene);
