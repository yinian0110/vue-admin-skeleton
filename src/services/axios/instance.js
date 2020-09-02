import axios from 'axios';
import { DEFAULT_AXIOS_CONFIGURE } from '../../config';
import {
  onRequestFail, onRequestSuccess,
  onResponseFail, onResponseSuccess,
} from '../../interceptors/axios';


const instance = axios.create(DEFAULT_AXIOS_CONFIGURE);
instance.interceptors.request.use(onRequestSuccess, onRequestFail);
instance.interceptors.response.use(onResponseSuccess, onResponseFail);

export default instance;
