
import users from './user.js'
console.log(users)

// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
return users.filter(item => item.gender === gender).map(item => item.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]