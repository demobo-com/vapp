import * as commonColor from 'commonColor';

import variables from 'platform';

const {
  deviceHeight,
  deviceWidth,
  headerHeight,
  statusbarHeight,
} = variables;

export default {
  chartWh: deviceWidth * 2 / 3 - 40,
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
  listView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  lastListView: {
    paddingBottom: 20,
  },

  month: {
    lineHeight: 40,
    textAlign: 'center',
    width: '100%',
  },
  activeMonth: {
    color: commonColor.brand,
  },
  button: {
    borderRadius: 0,
    backgroundColor: 'transparent',
    width: '100%',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: commonColor.brandInfo,
  },
  buttonText: {
    color: commonColor.black,
  },
  activeButtonText: {
    color: commonColor.white,
  },

  rightPart: {
    alignItems: 'center',
  },
  currentTime: {
    fontSize: 15,
    paddingLeft: 15,
    marginTop: 20,
  },

  shadow: {
    marginTop: 40,
    marginBottom: 20,
    borderRadius: deviceWidth / 3,
    shadowColor: 'rgba(0, 0, 0, 0.14)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    justifyContent: 'center',
    backgroundColor: commonColor.white,
  },

  total: {
    marginTop: 20,
    width: deviceWidth * 2 / 3,
    textAlign: 'center',
  },

  chartNoteLine: {
    width: deviceWidth * 2 / 3 - 20,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
};
