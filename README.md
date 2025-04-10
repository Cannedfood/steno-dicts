# steno-dicts
 Some extensions for lapwing steno theory, mostly with a focus on making it easier to program with

## Movement
Extends the lapwing movement with deleting and selection:
- Press e with one of the semi-modal movements to erase
- Press u with one of the semi-modal movements to select
- TODO: Press eu with one of the semi-modal movements to move

## Casing
Provides various casing styles that are commonly found during programming.

```js
{
	// "NK" -> "normal case"
	"TPH-BG": "{:set_space: }{:set_case:normal}",
	// "TK" -> "Title Case"
	"T-BG": "{:set_case:title}{:set_space:}",
	// "PK" -> "PascalCase"
	"P-BG": "{:set_case:title}{:set_space:}",
	// "CK" -> "camelCase"
	"KR-BG": "{:set_case:title}{:set_space:}{>}",
	// "SK" -> "snake_case"
	"S-BG": "{:set_case:lower}{:set_space:_}",
	// "SKS" -> "SCREAMING_SNAKE_CASE"
	"S-BGS": "{:set_case:lower}{:set_space:_}",
	// "KK" -> "kebab-case"
	"K-BG": "{:set_case:lower}{:set_space:-}",
}
```
