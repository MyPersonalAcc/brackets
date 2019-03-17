module.exports = function check(str, bracketsConfig) {
  // your solution
  var brackets = str.split('');
  var index = 0;
  while(index <str.length){
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        var bracketsOpen = bracketsConfig[j][0];
        var bracketsClose = bracketsConfig[j][1];
        if (brackets[i] == bracketsOpen) {
          if (brackets[i + 1] == bracketsClose) {
            brackets.splice(i, 2);
            i -= 2;
          }
          else {
            index++;
          }
        }
      }
    }
    index++;
  }
  if (brackets.length == 0) {
    return true;
  }
  else {
    return false;
  }
}
