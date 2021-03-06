'use strict'

import users from './user.js'

const calculateTotalBalance = users => {
  return users.reduce((acc, value) => acc + value.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916