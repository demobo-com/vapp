import * as commonColor from 'commonColor';
import variables from 'platform';

const {
  deviceHeight,
  deviceWidth,
  headerHeight,
} = variables;

export default {
  contentContainer: {
    backgroundColor: commonColor.white,
    paddingHorizontal: 16,
    height: deviceHeight - headerHeight,
  },
  content: {
    backgroundColor: commonColor.white,
  },

  balance: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
  },

  imageView: {
    width: deviceWidth - 32,
    height: (deviceWidth - 32) * 4 / 7,
  },
  image: {
    width: deviceWidth - 32,
    height: (deviceWidth - 32) * 4 / 7,
    position: 'absolute',
  },

  rechargeLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 40,
  },
  input: {
    borderWidth: 0.5,
    borderColor: commonColor.darkGrey,
    borderRadius: 8,
    marginRight: 20,
    height: 45,
  },
  button: {
    width: 80,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  horizontalLine: {
    backgroundColor: commonColor.greyer,
    height: 0.5,
  },

  listItem: {
    marginLeft: 0,
    paddingRight: 0,
    borderColor: commonColor.greyer,
    justifyContent: 'space-between',
  },
  left: {
    fontSize: 14,
    width: deviceWidth / 3 - 20,
  },
  center: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    width: deviceWidth / 4 + 20,
  },
  right: {
    fontSize: 14,
    textAlign: 'right',
    width: deviceWidth / 3,
  },
};
