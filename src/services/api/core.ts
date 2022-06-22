import axios from 'axios';

import { IS_PRODUCTION } from '@/config';

export const apiPoints = {
  v2: {
    email: 'api/v2/email',
  },
};

axios.defaults.baseURL = IS_PRODUCTION
  ? 'https://dev-api.digittee.io/'
  : 'https://dev-api.digittee.io/';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default axios;
