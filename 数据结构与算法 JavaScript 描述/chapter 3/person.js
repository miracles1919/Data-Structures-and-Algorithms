/**
 * 创建 Person 类，用于保存人的姓名和性别信息。
 * 写一个函数显示列表中所有拥有相同性别的人。
 */

 var List = require('./list')

 var GENDER = {
     'female': 0,
     'male': 1
 }

 function Person(name, gender) {
     this.name = name;
     this.gender = gender;
 }

 var personList = new List()
personList.append(new Person('a', GENDER.female))
personList.append(new Person('b', GENDER.female))
personList.append(new Person('c', GENDER.male))
personList.append(new Person('d', GENDER.female))
personList.append(new Person('e', GENDER.female))
personList.append(new Person('f', GENDER.male))
personList.append(new Person('g', GENDER.male))

femaleList = personList.toString().filter(function(item){
    return item.gender === GENDER.female
})

maleList = personList.toString().filter(function(item){
    return item.gender === GENDER.male
})

console.log(maleList)
console.log(femaleList)