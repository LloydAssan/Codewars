// The code provided is supposed return a person's Full Name given their first and last names.
//
// But it's not working properly.
//
// Notes
// The first and/or last names are never null (None in Python), but may be empty.
//
// Task
// Fix the bug so we can all go home early.


class Dinglemouse{
  constructor( firstName, lastName ){
  this.firstName = firstName
  this.lastName = lastName
  }

  getFullName(){
      const full = this.firstName+' '+this.lastName;
      return full.trim()
  }
}
