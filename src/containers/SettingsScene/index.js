/**
 *
 * SettingsScene Container
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
  ListItem,
  Switch,
  List,
} from 'native-base';

import AppHeader from 'components/AppHeader';

import { DATA_LIST } from './constants';
import styles from './styles';

export class SettingsScene extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    const initialValue = [];
    DATA_LIST.map((item) => initialValue.push(item.value));
    this.state = {
      dataList: initialValue,
    };
  }

  onValueChange = (index) => {
    const { dataList } = this.state;
    dataList[index] = !dataList[index];
    this.setState({ dataList });
  }

  renderSettingsList = () => {
    const { dataList } = this.state;
    return (
      <List style={styles.list}>
        {
          DATA_LIST && DATA_LIST.map((item, index) => (
            <ListItem style={styles.listItem} key={item.label}>
              <Text style={styles.label}>{item.label}</Text>
              <Switch
                onTintColor={styles.red}
                onValueChange={() => this.onValueChange(index)}
                value={dataList[index]}
              />
            </ListItem>
          ))
        }
      </List>
    );
  }

  render() {
    return (
      <Container>
        <AppHeader title="" />

        <Content
          contentContainerStyle={styles.contentContainer}
          style={styles.content}
          scrollEnabled={false}
        >
          <Text style={styles.limitNote}>
            Monthly Cash Withdrawal Allowance:
            <Text style={styles.importNote}> $100.00</Text>
          </Text>
          <Text style={styles.limitNote}>
            Direct Deposit to Savings Account:
            <Text style={styles.importNote}> 10%</Text>
          </Text>
          { this.renderSettingsList() }
        </Content>
      </Container>
    );
  }
}

SettingsScene.defaultProps = {
  // test: '',
};

SettingsScene.propTypes = {
//   test: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(SettingsScene);
