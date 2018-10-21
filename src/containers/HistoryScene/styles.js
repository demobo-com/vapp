import * as commonColor from 'commonColor';

import variables from 'platform';

const {
  deviceHeight,
  deviceWidth,
  headerHeight,
  statusbarHeight,
} = variables;

export default {
  contentContainer: {
    minHeight: deviceHeight - headerHeight - statusbarHeight,
    backgroundColor: commonColor.white,
    flexDirection: 'row',
  },
  content: {
    backgroundColor: commonColor.white,
  },

  list: {
    flexShrink: 0,
    flexGrow: 0,
    width: deviceWidth / 3,
    height: deviceHeight - headerHeight,
    borderRightWidth: 0.5,
    borderRightColor: commonColor.darkGrey,
  },
  listItem: {
    marginLeft: 0,
    paddingRight: 0,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  month: {
    lineHeight: 40,
  },
  button: {
    backgroundColor: 'transparent',
    width: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    color: commonColor.black,
  },

  currentTime: {
    fontSize: 15,
    paddingLeft: 15,
    marginTop: 20,
  },

  webView: {
    width: 300,
    overflow: 'hidden',
  },

  total: {
    position: 'absolute',
    width: deviceWidth * 2 / 3,
    textAlign: 'center',
    top: 400,
  },
};
