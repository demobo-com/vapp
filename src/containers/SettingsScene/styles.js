import { Dimensions } from 'react-native';
import { grey200, white } from 'commonColor';

import variables from 'platform';

const { height } = Dimensions.get('window');
const { headerHeight, statusbarHeight } = variables;

export default {
  contentContainer: {
    justifyContent: 'center',
  },
  content: {
    backgroundColor: grey200,
  },
  contentView: {
    backgroundColor: white,
    minHeight: height - headerHeight - statusbarHeight,
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  footerTble: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  generateText: {
    textAlign: 'center',
    marginVertical: 10,
  },
};
