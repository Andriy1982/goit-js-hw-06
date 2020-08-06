import users from './user.js'
console.log(users)

// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  return users.filter(item => !item.isActive)
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]