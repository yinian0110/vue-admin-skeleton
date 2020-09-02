import ActionBase from '../base';


export default class CommonProvider extends ActionBase {
  /**
   * @returns {Promise<ResponseGetter|Object>}
   */
  qa() {
    return this.get('/common/config/qa');
  }
}
