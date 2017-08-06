'use strict';
/**
 * Created by liyang on 2017-07-22.
 */

import LoginStore from './LoginStore';
import TestStore from './TestStore';

const Stores = {
    LoginStore : new LoginStore(),
    TestStore : new TestStore()
};

export default Stores;