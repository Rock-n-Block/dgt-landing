import axios from 'axios';

import { IS_PRODUCTION } from '@/config';

axios.defaults.baseURL = IS_PRODUCTION ? '' : '';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default axios;
