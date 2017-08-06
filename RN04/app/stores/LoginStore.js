'use strict';
/**
 * Created by liyang on 2017-07-22.
 */


import { observable, action } from 'mobx';

class LoginStore {
    @observable isAuthenticated = false;

    @action set_isAuthenticated(bool) {
        this.isAuthenticated = bool;
    }
}
export default LoginStore;