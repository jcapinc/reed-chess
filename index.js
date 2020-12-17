function square(color) {
	const div = document.createElement('div');
	const size = "50px";
	div.style.border = "1px solid black";
	div.style.backgroundColor = color;
	div.style.width = size;
	div.style.height = size;
	div.style.float = "left";
	return div;
}

function blackSquare() {
	return square('black');
}

function whiteSquare() {
	return square('white');
}

function row(contents) {
	if (!Array.isArray(contents)) {
		contents = [contents];
	}
	const row = document.createElement('div');
	row.style.clear = 'both';
	contents.map(element => row.appendChild(element));
	return row;
}

function output(contents) {
	if (!Array.isArray(contents)) {
		contents = [contents];
	}
	const main = document.getElementById('main');
	main.innerHTML = "";
	contents.map(element => main.appendChild(element));
}

function exampleOne() {
	output(
		row(
			[
				blackSquare(),
				blackSquare(),
				whiteSquare()
			]
		)
	);
}

function exampleTwo() {
	output(
		[
			row(
				[
					blackSquare(),
					blackSquare(),
					whiteSquare()
				]
			),
			row(
				[
					whiteSquare(),
					whiteSquare(),
					blackSquare()
				]
			)
		]
	)
}

/// START WORK HERE:
const sq = [];
for (let i = 0; i < 64 ; i++) {
	if (i % 2 == 0) sq.push(whiteSquare());
	else sq.push(blackSquare());
}
const rows = [];
for (let i = 0; i < 64; i += 8) {
	let slice = sq.slice(i, i + 8)
	if (i % 16 === 0) slice = slice.reverse();
	rows.push(row(slice));
}
output(rows);