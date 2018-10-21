import { Dimensions } from 'react-native';
import * as commonColor from 'commonColor';

import variables from 'platform';

const { height } = Dimensions.get('window');
const { headerHeight, statusbarHeight } = variables;

export default {
  red: commonColor.red,
  contentContainer: {
    minHeight: height - headerHeight - statusbarHeight,
    paddingLeft: 16,
    backgroundColor: commonColor.white,
    paddingTop: 20,
  },
  content: {
    backgroundColor: commonColor.white,
  },

  limitNote: {
    fontSize: 16,
    marginBottom: 5,
  },
  importNote: {
    fontSize: 17,
    fontWeight: '700',
  },
  input: {
    borderBottomWidth: 0.5,
    borderColor: commonColor.darkGrey,
    borderRadius: 8,
    height: 20,
    width: 60,
  },
  percentageInput: {
    borderBottomWidth: 0.5,
    borderColor: commonColor.darkGrey,
    borderRadius: 8,
    height: 20,
    flex: 0.5,
  },

  list: {
    marginTop: 20,
  },
  listItem: {
    height: 55,
    marginLeft: 0,
    justifyContent: 'space-between',
    borderColor: commonColor.greyer,
  },
  label: {
    fontSize: 17,
  },
};
