/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// react && redux module
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Buffer } from 'buffer';
import I18n from 'react-native-i18n';
import { AsyncStorage } from 'react-native';
import { createPropsSelector } from 'reselect-immutable-helpers';
import SplashScreen from 'react-native-splash-screen';

import AppRoutes from './routes';

import { selectLanguage } from './selectors';
import { setLanguage } from './actions';

const languages = ['en', 'zh'];

class TranslateRoute extends React.Component { // eslint-disable-line
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  componentWillMount() {
    this.getTransactions().then(console.log);
  }

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  getToken = () => {
    const tokenAPI = 'https://api-stg.syf.com/oauth2/v1/token';
    const body = 'grant_type=client_credentials&client_id=tG7IIcGGiYz6fRLArCHUvkfjZfqBKOkl&client_secret=EzYzsVqUtwh3YRwP';
    const tokenOption = {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.from(body).length,
      },
    };
    return fetch(tokenAPI, tokenOption)
      .then((d) => d.json())
      .then((d) => d.access_token);
  };

  getTransactions = () => this.getToken().then((accessToken) => {
    const url = 'https://api-stg.syf.com/m2020';
    const option = {
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    const getTransaction = (n) => {
      const nth = n === 1 ? '' : `/${n}`;
      return fetch(`${url}/credit/customers/5/transactions${nth}`, option)
        .then((d) => d.json());
    };
    return Promise.all([1, 2, 3, 4, 5, 6, 7, 8, 9].map(getTransaction));
  });

  changeLanguage = (value) => {
    const { updateLanguage } = this.props;
    try {
      const languageSaved = languages.find((language) => language.indexOf(value) !== -1);
      I18n.locale = languageSaved;
      AsyncStorage.setItem('language', value);
      updateLanguage(languageSaved);
    } catch (error) {
      console.warn('did not find saved language,, it will just proceed with deviceLocale');
    }
  };

  render() {
    return <AppRoutes changeLanguage={this.changeLanguage} />;
  }
}

TranslateRoute.defaultProps = {
  updateLanguage: () => null,
};

TranslateRoute.propTypes = {
  updateLanguage: PropTypes.func,
};


const mapStateToProps = createPropsSelector({
  newLanguage: selectLanguage,
});

const mapDispatchToProps = (dispatch) => ({
  updateLanguage: (language) => dispatch(setLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TranslateRoute);
