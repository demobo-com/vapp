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
import PieChart from 'react-native-pie-chart';
import {
  Container,
  Content,
  Text,
  View,
  Button,
} from 'native-base';
import { ScrollView } from 'react-native';

import AppHeader from 'components/AppHeader';

// import { translate } from 'utils/helpers';

import {
  YEARS,
  MONTH,
  USE_MODE,
  SLICECOLOR,
} from './constants';
import styles from './styles';

export class HistoryScene extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      selectYear: '2018',
      selectMonth: 'October',
      series: this.getSeries(),
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { selectYear, selectMonth } = this.state;
    if (nextState.selectYear !== selectYear || selectMonth !== nextState.selectMonth) {
      return true;
    }
    return false;
  }

  onChangeYear=(item) => {
    this.setState({ selectYear: item });
    this.onChangeSeries();
  }

  onChangeMonth=(item) => {
    this.setState({ selectMonth: item });
    this.onChangeSeries();
  }

  onChangeSeries=() => {
    this.setState({ series: this.getSeries() });
  }

  getSeries = () => [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
  ]

  renderSideBar = () => {
    const { selectYear, selectMonth } = this.state;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.list}
      >
        {YEARS.map((item, index) => {
          const isActive = item === selectYear;
          const activeYearStyles = [styles.button];
          const activeYearTextStyles = [styles.buttonText];
          const listViewStyles = [styles.listView];
          if (index === YEARS.length - 1) {
            listViewStyles.push(styles.lastListView);
          }
          if (isActive) {
            activeYearStyles.push(styles.activeButton);
            activeYearTextStyles.push(styles.activeButtonText);
          }
          return (
            <View key={item} style={listViewStyles}>
              <Button
                onPress={() => this.onChangeYear(item)}
                style={activeYearStyles}
              >
                <Text style={activeYearTextStyles}>{item}</Text>
              </Button>
              {isActive && MONTH.map((month) => {
                const isActiveMonth = selectMonth === month;
                const monthStyles = [styles.month];
                if (isActiveMonth) {
                  monthStyles.push(styles.activeMonth);
                }
                return (
                  <Text
                    key={month}
                    style={monthStyles}
                    onPress={() => this.onChangeMonth(month)}
                  >{month}
                  </Text>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    );
  }

  renderPieChart = () => {
    const { series } = this.state;
    return (
      <View style={styles.shadow}>
        <PieChart
          chart_wh={styles.chartWh}
          series={series}
          sliceColor={SLICECOLOR}
        />
      </View>
    );
  }

  renderPieChartDescription = () => {
    const { series } = this.state;
    return USE_MODE.map((item, index) => (
      <View key={item} style={styles.chartNoteLine}>
        <View style={[styles.circle, { backgroundColor: SLICECOLOR[index] }]} />
        <Text style={{ color: SLICECOLOR[index] }}>{item}</Text>
        <Text style={{ color: SLICECOLOR[index] }}>{series[index].toFixed(2)}</Text>
      </View>
    ));
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
          <View style={styles.rightPart}>
            <Text style={styles.currentTime}>{selectMonth},{selectYear}</Text>
            { this.renderPieChart() }
            { this.renderPieChartDescription() }
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
