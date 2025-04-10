#!node

import fs from 'fs/promises';

await fs.mkdir('benno-steno-dicts', { recursive: true });

const movement = {
	// Arrow keys
	"#TPH-R": "{#Left}{^}",
	"#TPHER": "{#Backspace}{^}",

	"#TPH-G": "{#Right}{^}",
	"#TPHEG": "{#Delete}{^}",

	"#TPH-P": "{#Up}{^}",
	"#TPHEP": "{#Control_L(Shift_L(k))}{#Up}{^}",

	"#TPH-B": "{#Down}{^}",
	"#TPHEB": "{#Control_L(Shift_L(k))}{^}",

	// Entire words
	"#TPH-RB": "{#Control_L(Left)}{^}",
	"#TPHERB": "{#Control_L(Backspace)}{^}",
	"#TPH-BG": "{#Control_L(Right)}{^}",
	"#TPHEBG": "{#Control_L(Delete)}{^}",
};

// Generate select stuff (basically just add shift if U is pressed)
const movement2 = {};
for (const [key, value] of Object.entries(movement)) {
	movement2[key] = value;

	if (!key.includes('-'))
		continue;

	movement2[key.replace('-', 'U')] = 
		value
		.replace('{#', '{Shift_L(')
		.replace('}{^}', ')}{^}');
}

// Generate repetitions
const movement3 = {};
for (const [key, value] of Object.entries(movement2)) {
	movement3[key] = value;
	movement3[key + 'S'] = `${value}${value}`;
	movement3[key + 'T'] = `${value}${value}${value}`;
	movement3[key + 'TS'] = `${value}${value}${value}${value}`;
}

await fs.writeFile('benno-steno-dicts/movement.json', JSON.stringify(movement3, null, '\t'), 'utf-8')

const casing = {
	// "NK" -> "Normal Case"
	"TPH-BG": "{:set_space: }{:set_case:normal}",
	// "TK" -> "Title Case"
	"T-BG": "{:set_case:title}{:set_space:}",
	// "PK" -> "Pascal Case"
	"P-BG": "{:set_case:title}{:set_space:}",
	// "CK" -> "Camel Case"
	"KR-BG": "{:set_case:title}{:set_space:}{>}",
	// "SK" -> "Snake Case"
	"S-BG": "{:set_case:lower}{:set_space:_}",
	// "SKS" -> "Screaming Snake Case"
	"S-BGS": "{:set_case:lower}{:set_space:_}",
	// "KK" -> "Kebab Case"
	"K-BG": "{:set_case:lower}{:set_space:-}",
}
await fs.writeFile('benno-steno-dicts/casing.json', JSON.stringify(casing, null, '\t'), 'utf-8')

await fs.writeFile('benno-steno-dicts.json', JSON.stringify({ ...movement3, ...casing }, null, '\t'), 'utf-8')
