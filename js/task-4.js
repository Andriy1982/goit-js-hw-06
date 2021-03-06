'use strict'

import users from './user.js'

const getInactiveUsers = users => {
  return users.filter(item => !item.isActive)
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]