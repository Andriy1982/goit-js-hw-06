'use strict'

import users from './user.js'
console.log(users)




// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {

//    return users.map(element => console.log(element.friends['friendName']))
// //    .filter(element => element === friendName);
       
// //    });(item => item.friendName )
//   };
  
//   console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
//   console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
// const hasFriend = (friend) => {this.friends.includes(friend)};

// const hasFriend = function(friend) {
    // this.friends.includes(friend)
// };
// console.log(users[1].friends[0])
const callback = (item) => {
    return (item.friends.includes(friendName));
    // console.log(item.friends.includes(friendName));
}
// callback(users[2])
console.log(callback(users[3], 'Goldie Gentry'))

const foo = (users, friendName) => {

 return users.filter(callback);
    
  
        // return users.filter(item => {
        //     return item.friends.includes(friendName);
        // } )
            // console.log(item) 
            // console.log(friendName)
      
}

//  return users.filter(user => user.friends.includes(friendName));
    // const qwe = 
    // console.log(qwe)
    // console.log(element.friends)
    // return element.friends[1] === friendName
//    const qwe = element.friends.filter(el => el === friendName);
//    
    // console.log(element.friends);


   
// }

console.log(foo(users, 'Goldie Gentry'))
