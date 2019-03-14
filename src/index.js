module.exports = function check(str, bracketsConfig) {
  let brackets = {};
	for (let i=0; i<bracketsConfig.length; i++) {
		let property = bracketsConfig[i][0];
		brackets[property] = bracketsConfig[i][1];;
  }	
  
  function wrapStrArray (str) {
    let array = [];
    for (let i=0; i<str.length; i++) {
      array.push(str[i]);
    }
    return array;
  }

	function checkBrackets (strArray) {
		for (let i=0; i<strArray.length; i++) {
			let a = strArray[i];
			if (strArray[i+1] == brackets[a] && strArray[i+1] != undefined) {
				strArray.splice(i, 2);
				i=-1;
			}
		}
		if (strArray[0]) {
			return	false;
		} else {
			return	true;
		}
  }

  let strArray = wrapStrArray(str);
  let result = checkBrackets(strArray);
  return result;
}
