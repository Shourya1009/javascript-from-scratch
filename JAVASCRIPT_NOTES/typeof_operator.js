// The typeof operator in JavaScript is used to determine the data type of a value or variable. It returns a string indicating the type, such as "string", "number", "boolean", "object", etc.

/*
Key POints :-
1] Always outputs the data type as a string.
2] Can be used anywhere without imports or dependencies.
3] Determines the type of literals, variables, and expressions.

*Special Cases:*
-> typeof null returns "object" (a known quirk).
-> Functions return "function" instead of "object".
-> Useful for checking types in dynamic or untyped environments.
*/

console.log(typeof "Hello");
console.log(typeof 24);
console.log(typeof false);
console.log(typeof {});
console.log(typeof undefined);
console.log(typeof null);
