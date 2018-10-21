import * as commonColor from 'commonColor';
import variables from 'platform';

const { deviceHeight, headerHeight } = variables;

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
    marginBottom: 20,
  },

  rechargeLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
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
};
