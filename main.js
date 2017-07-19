var adjectives = [
	'random',
	'glitchy',
	'yaoi',
	'generic',
	'pet looking',
	'rainbow',
	'ugly',
	'beautiful',
	'inverted',
	'funky',
	'foreign',
	'testable'
];
var nouns = [
	' poop',
	' head',
	' edits',
	' alphabet'
];
var prepositions = [
	' of doom',
	' in space',
	' in time',
	''
];
function createOptions() {
	var options = [];
	for (var i = 0; i < 20; i++) {
		options.push(
			adjectives[Math.floor(Math.random()*adjectives.length)] +
			nouns[Math.floor(Math.random()*nouns.length)] +
			prepositions[Math.floor(Math.random()*prepositions.length)]
		);
	}
	writeOptions(options);
}
function writeOptions(options) {
	var lis = options.map(function (option) {
		var li = $('<li>');
		li.text(option);
		return li;
	});
	$('.target').empty();
	for (var i = 0; i < lis.length; i++) {
		$('.target').append(lis[i]);
	}
}
$('.generate').click(createOptions);