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
	'testable',
	'laser',
	'gritty',
	'old',
	'ancient',
	'creepy',
	'holy',
	'crazy',
	'unholy',
	'unfortunate',
	'original',
	'tasty',
	'German',
	'Egyptian',
	'Atlantian',
	'Greek',
	'cheeky',
	'Bohemian'
];
var nouns = [
	' poop',
	' head',
	' edits',
	' alphabet',
	' eyes',
	' laser',
	' kitten',
	' Jesus',
	' devil',
	' puppy',
	' french fry',
	' artist',
	' hairspray',
	' leader',
	' giant',
	' enchantress',
	' cat tower',
	' rainbow',
	' Joker'
];
var prepositions = [
	' of doom',
	' in space',
	' in time',
	' grasping at it\'s face',
	' around itself',
	' in goggles',
	' at a party',
	''
];
function createOption() {
	var adjective = Math.floor(Math.random()*adjectives.length),
		noun = Math.floor(Math.random()*nouns.length),
		preposition = Math.floor(Math.random()*prepositions.length),
		total = adjective * 10000 + noun * 100 + preposition;
	return {
		adjective: adjective,
		noun: noun,
		preposition: preposition,
		total: total
	};
}
function createOptions() {
	var options = [];
	for (var i = 0; i < 20; i++) {
		var option = createOption();
		var abort = 0;
		for (var ii = 0; ii < options.length; ii++ ){
			if (options[ii].total == option.total) {
				option = createOption();
				ii = 0;
				abort = 1;
			}
			if (abort >= 100) {
				break;
			}
		}
		options.push(option);
	}
	options = options.map(function(option) {
		return adjectives[option.adjective] + nouns[option.noun] + prepositions[option.preposition];
	});
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