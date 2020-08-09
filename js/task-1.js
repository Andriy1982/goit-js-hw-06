'use strict'

import users from './user.js'

const getUserNames = users => {
   return users.map(element => element.name);
  };

  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]