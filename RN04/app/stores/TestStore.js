'use strict';
/**
 * Created by liyang on 2017-07-22.
 */

import { observable, action } from 'mobx';

class TestStore {
    @observable item = 'This is an item.';

    @action set_item(data) {
        this.item = data;
    }
}
export default TestStore;