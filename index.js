'use strict'

var roster = [
  ["Number", "Name", "Position", "Points per Game"],
  [12, "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
  [9, "Ms. Buckets", "Point Guard", [19, 0, 11, 22, 0]],
  [31, "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]],
  [7, "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19]],
  [22, "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0]]
]

function convert_roster_format(roster) {
  // your code here
  // should return a new format of roster which is an array of object
  const arrObj = []
  const label = roster[0]
  for (let i = 1; i < roster.length; i++) {
    const newObj = {}
    newObj[label[0]] = roster[i][0];
    newObj[label[1]] = roster[i][1];
    newObj[label[2]] = roster[i][2];
    newObj[label[3]] = roster[i][3];
    arrObj.push(newObj)
  }
  return arrObj
}

var object_roster = convert_roster_format(roster)

console.log('object_roster: ', object_roster);

console.log(object_roster[2])
// => { "Number":  31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }
console.log(object_roster[0]["Name"] == "Joe Schmo")
// outputs true

module.exports = {
  convert_roster_format
}
