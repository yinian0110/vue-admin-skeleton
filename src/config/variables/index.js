import LastError from './last-error';
import EventBus from './event-bus';
import ActionProvider from './action-provider';
import { APPLICATION_EXPORTS_DEBUG } from '../index';


const globalVariables = {
  ...LastError,
  ...EventBus,
  ...ActionProvider,
};

// eslint-disable-next-line no-underscore-dangle
window.__APPLICATION_GLOBAL__ = APPLICATION_EXPORTS_DEBUG ? globalVariables : undefined;

export default globalVariables;
