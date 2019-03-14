/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
// minus 1
// the next should be bigger then prev
// exclude repeative
// [2, 3, 1]
module.exports = function getLoveTrianglesCount(preferences = []) {
  // console.log('preferences', preferences);

  let count = 0;


  preferences.forEach((person, index)=> {
    const dontRepeat = [person - 1];
    var nextLover = preferences[person - 1];
    if (index < person || nextLover < person || dontRepeat.includes(nextLover-1)) {
      // console.log('nextLover return', person, nextLover, dontRepeat);
      return;
    }
    dontRepeat.push(nextLover-1);
    var nextNextLover = preferences[nextLover - 1];
    if (dontRepeat.includes(nextNextLover-1)) {
      // console.log('nextNextLover return', nextLover, nextNextLover, dontRepeat);
      return;
    }
    

    const endOfTriangle = preferences[nextNextLover - 1];

    // console.log('nextNextLover', index, person, nextLover, nextNextLover, endOfTriangle);

    if (index === (nextNextLover - 1)) {
      count++
    }
  });

  // console.log('result', count);
  return count;
};
