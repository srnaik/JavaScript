/**
 * 
 */

function strinReverse(textString){

	if(!textString)
		return '';
	var revString = '';
	for(var i = textString.length-1; i >= 0; i--)
		revString += textString.charAt(i)
		return revString;
}