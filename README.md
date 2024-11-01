# worksheet2
In Java, types are strictly defined. The line double foo1 = 1.72; sets foo1 as a double for decimal numbers. void foo2(int bar) is a method of type void because it simply prints "Goodbye." without returning a value. The line int[] foo3 = new int[] {1,2,3,4,5}; defines foo3 as an integer array, holding only integers.

In Python, types are dynamic and flexible. The line foo4 = [1, 2, 3, 4, 5, 'hi'] makes foo4 a list with mixed types. The dictionary foo5 = {'bar': 'baz', 2: 3} allows mixed key types. Finally, def foo6(bar): return bar + 1 defines foo6 as a function that increments its input by 1.

In JavaScript, const foo7 = 23.8; makes foo7 a number, while const foo8 = [1, 2, 3, 4, 5, 'hi']; makes foo8 an array with mixed types. The object const foo9 = {'bar': 'baz', 2: 3}; supports mixed key types. Finally, const foo10 = x => x + 5; is a function that takes an input x and adds 5.

Type Coercion Results in Each Language
In Java:

0 == false; results in an error because Java doesn’t allow comparison between integers and booleans.
Assigning String foo = "bar"; foo = 1; results in an error since Java doesn’t allow reassigning a String variable to an integer.
If foo were a String, foo + "bar"; would concatenate them (e.g., "1bar" if foo were "1").
In Python:

0 == False returns True since 0 and False are considered equivalent.
Assigning foo = "bar"; foo = 1; works because Python allows reassigning variables to any type.
foo + "bar" causes an error if foo is an integer, as Python won’t mix int and str without conversion.
In JavaScript:

0 == false returns true because JavaScript loosely compares types. Using === would return false.
Assigning var foo = "bar"; foo = 1; works since JavaScript allows reassigning variables with different types.
If foo is an integer, foo + "bar" will concatenate, resulting in "1bar".
JavaScript Prototype Inheritance and ES6 Classes
In JavaScript, prototypes are used to share properties and methods across instances. Defining function Animal(name) { this.name = name; } initializes Animal.prototype as an empty object. Adding Animal.prototype.speak = function() { console.log(this.name + ' makes a sound.'); }; attaches a speak method to Animal.prototype, allowing all Animal instances to access speak().

ES6 classes provide a clearer syntax. The example class AnimalClass { constructor(name) { this.name = name; } speak() { console.log(this.name + ' makes a sound.'); } } achieves the same functionality with a more readable syntax, though it still uses prototypes behind the scenes.
