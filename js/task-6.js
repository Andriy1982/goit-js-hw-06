'use strict'

import users from './user.js'
console.log(users)

const getUsersWithAge = (users, min, max) => {
    return users.filter(item => (item.age > min) && (item.age < max))
  };
  
  console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
  
  console.log(getUsersWithAge(users, 30, 40));
  // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]