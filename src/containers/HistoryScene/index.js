/**
 *
 * HistoryScene Container
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import { Actions } from 'react-native-router-flux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Text,
  View,
  ListItem,
  Button,
} from 'native-base';
import { ScrollView, WebView } from 'react-native';

import AppHeader from 'components/AppHeader';

// import { translate } from 'utils/helpers';

import { YEARS, MONTH } from './constants';
import styles from './styles';

export class HistoryScene extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      selectYear: '2018',
      selectMonth: 'October',
    };
  }
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

  renderSideBar = () => {
    const { selectYear } = this.state;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.list}
      >
        {YEARS.map((item) => (
          <ListItem
            key={item}
            style={styles.listItem}
          >
            <Button
              onPress={() => this.setState({ selectYear: item })}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </Button>
            {item === selectYear && MONTH.map((month) => (
              <Text
                key={month}
                style={styles.month}
                onPress={() => this.setState({ selectMonth: month })}
              >{month}
              </Text>
            ))}
          </ListItem>
        ))}
      </ScrollView>
    );
  }

  render() {
    const { selectYear, selectMonth } = this.state;
    return (
      <Container>
        <AppHeader title="" />

        <Content
          contentContainerStyle={styles.contentContainer}
          style={styles.content}
          scrollEnabled={false}
        >
          { this.renderSideBar() }
          <View>
            <Text style={styles.currentTime}>{selectYear}&nbsp;&nbsp;{selectMonth}</Text>
            <WebView
              style={styles.webView}
              source={
                require('./amCharts.html') // eslint-disable-line
              }
            />
            <Text style={styles.total}>Total Savings：$108.66</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

HistoryScene.defaultProps = {
  // test: '',
};

HistoryScene.propTypes = {
  // test: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(HistoryScene);
