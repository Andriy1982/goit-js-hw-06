'use strict'

import users from './user.js'


const getNamesSortedByFriendsCount = users => {
  return users.sort((prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length).map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]