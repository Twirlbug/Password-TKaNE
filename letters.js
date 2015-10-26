var RestartWords = function(){
	location.reload(); 
};

var LetterRemoval = function(){
	var place = document.getElementById("selecter").selectedIndex;
	var x = document.getElementById("letters");
    var text = x.elements[0].value;
	text = text.toLowerCase(); 
	LetterSwitcher(text, place);
}


var LetterSwitcher = function(letterall, poss){

	if (!(letterall.indexOf('a') >= 0)){
		CheckLetter(poss, "a");
	}
	if (!(letterall.indexOf('b') >= 0)){
		CheckLetter(poss, "b");
	}
	if (!(letterall.indexOf('c') >= 0)){
		CheckLetter(poss, "c");
	}
	if (!(letterall.indexOf('d') >= 0)){
		CheckLetter(poss, "d");
	}
	if (!(letterall.indexOf('e') >= 0)){
		CheckLetter(poss, "e");
	}
	if (!(letterall.indexOf('f') >= 0)){
		CheckLetter(poss, "f");
	}
	if (!(letterall.indexOf('g') >= 0)){
		CheckLetter(poss, "g");
	}
	if (!(letterall.indexOf('h') >= 0)){
		CheckLetter(poss, "h");
	}
	if (!(letterall.indexOf('i') >= 0)){
		CheckLetter(poss, "i");
	}
	if (!(letterall.indexOf('j') >= 0)){
		CheckLetter(poss, "j");
	}
	if (!(letterall.indexOf('k') >= 0)){
		CheckLetter(poss, "k");
	}
	if (!(letterall.indexOf('l') >= 0)){
		CheckLetter(poss, "l");
	}
	if (!(letterall.indexOf('m') >= 0)){
		CheckLetter(poss, "m");
	}
	if (!(letterall.indexOf('n') >= 0)){
		CheckLetter(poss, "n");
	}
	if (!(letterall.indexOf('o') >= 0)){
		CheckLetter(poss, "o");
	}
	if (!(letterall.indexOf('p') >= 0)){
		CheckLetter(poss, "p");
	}
	if (!(letterall.indexOf('q') >= 0)){
		CheckLetter(poss, "q");
	}
	if (!(letterall.indexOf('r') >= 0)){
		CheckLetter(poss, "r");
	}
	if (!(letterall.indexOf('s') >= 0)){
		CheckLetter(poss, "s");
	}
	if (!(letterall.indexOf('t') >= 0)){
		CheckLetter(poss, "t");
	}
	if (!(letterall.indexOf('u') >= 0)){
		CheckLetter(poss, "u");
	}
	if (!(letterall.indexOf('v') >= 0)){
		CheckLetter(poss, "v");
	}
	if (!(letterall.indexOf('w') >= 0)){
		CheckLetter(poss, "w");
	}
	if (!(letterall.indexOf('x') >= 0)){
		CheckLetter(poss, "x");
	}
	if (!(letterall.indexOf('y') >= 0)){
		CheckLetter(poss, "y");
	}
	if (!(letterall.indexOf('z') >= 0)){
		CheckLetter(poss, "z");
	}
}



var CheckLetter = function(pos, lettergone){
	var word =document.getElementById("wordabout").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordabout").innerHTML= "      ";
	}
	
	
	var word =document.getElementById("wordafter").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordafter").innerHTML= "      ";
	}
	
	
	var word =document.getElementById("wordafter").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordafter").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordagain").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordagain").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordbelow").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordbelow").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordcould").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordcould").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordevery").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordevery").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordfirst").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordfirst").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordfound").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordfound").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordgreat").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordgreat").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordhouse").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordhouse").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordlarge").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordlarge").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordlearn").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordlearn").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordnever").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordnever").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordother").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordother").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordplace").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordplace").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordplanet").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordplanet").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordpoint").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordpoint").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordright").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordright").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordsmall").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordsmall").innerHTML= "      ";
	}
	var word =document.getElementById("wordsound").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordsound").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordspell").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordspell").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordstill").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordstill").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordstudy").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordstudy").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordtheir").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordtheir").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordthere").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordthere").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordthese").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordthese").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordthing").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordthing").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordthink").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordthink").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordthree").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordthree").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordwater").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordwater").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordwhere").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordwhere").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordwhich").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordwhich").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordworld").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordworld").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordwould").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordwould").innerHTML= "      ";
	}
	
	var word =document.getElementById("wordwrite").innerHTML;
	console.log (toRemove(word, pos, lettergone));
	if (toRemove(word, pos, lettergone)) {
		document.getElementById("wordwrite").innerHTML= "      ";
	}
}

var toRemove = function(word, position, lettercheck){
	//console.log(word);
	//console.log(word.charAt(position));
	if (word.charAt(position)===lettercheck) {
		return true;
	} else {
		return false;
	}
	
	
}



