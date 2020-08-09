
import users from './user.js'


const getUsersWithGender = (users, gender) => {
return users.filter(item => item.gender === gender).map(item => item.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]