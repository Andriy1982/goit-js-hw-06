'use strict'

import users from './user.js'

const getSortedUniqueSkills = users => {
  const getAllSkills = users.reduce((acc, user) => {
     acc.push(...user.skills);
return acc;
  }, []);
  
  const result = getAllSkills.filter((item, index) => {
     return getAllSkills.indexOf(item) === index;
}).sort();
  return result;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]