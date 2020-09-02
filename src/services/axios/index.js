import axios from './instance';
import CommonProvider from './actions/common';


export default {
  // -- [example]
  common: new CommonProvider(axios),
};
