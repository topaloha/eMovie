// get rawNewText from user's disc

const fileSelect = document.getElementById('fileSelect');
const sub = document.getElementById('sub');
const demo = document.getElementById('demo');



// <imput> is hidden and can be reached by click the button
fileSelect.addEventListener('click', () => sub && sub.click(), false);





// get activated by 'onchange' at the <input>    
var readIt = function(obj, callback) {
  var reader = new FileReader() ;
var text = 'a';
  reader.onload = function() {
    text = reader.result;

    callback(text);
  };
  reader.readAsText(obj[0]);
  
};
//////////////////////////////////////////////////////////////////////////////
// * this was a warm up to take a text from users' device. Now let's do the math

// makes the text clear and unduplicated 
function duplicatonsFree(t) {

	var duplicationFreeArr = [];
	text = t.toLowerCase();

	if(text && text.length) duplicationFreeArr = text.match(/[A-Za-z]+/g);
	let x = (names) => names.filter((v,i) => names.indexOf(v) === i);

	duplicationFreeArr = x(duplicationFreeArr);
console.log(duplicationFreeArr.length);//remove it
	return duplicationFreeArr;

}
