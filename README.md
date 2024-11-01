# worksheet2

Absolutely, let's dive into each part naturally and answer each question thoroughly. I’ll break down each code segment, explaining types, type coercion, and inheritance/prototypes along the way.

---

### 1. **Types in Different Languages**

#### **Java**

1. **`double foo1 = 1.72;`**
   - **Type**: `double`
   - This is a `double`, which in Java is a decimal or floating-point number.
   - **Example Use**: If you try printing `foo1` like `System.out.println(foo1);`, it will output `1.72`.

2. **`void foo2(int bar){ System.out.println("Goodbye."); }`**
   - **Type**: `void` (method with an `int` parameter that doesn’t return anything)
   - `foo2` is a method that takes an integer and simply prints "Goodbye."
   - **Example Use**: Calling `foo2(10);` prints `Goodbye.` but doesn’t return anything because it’s `void`.

3. **`int[] foo3 = new int[] {1,2,3,4,5};`**
   - **Type**: `int[]` (array of integers)
   - This creates an array of integers. In Java, arrays have a fixed size and type.
   - **Example Use**: You can print `foo3` as `System.out.println(Arrays.toString(foo3));` which will output `[1, 2, 3, 4, 5]`.

#### **Python**

1. **`foo4 = [1, 2, 3, 4, 5, 'hi']`**
   - **Type**: `list`
   - `foo4` is a list containing a mix of integers and a string (`'hi'`).
   - **Example Use**: `foo4[5]` would return `'hi'`.

2. **`foo5 = {'bar': 'baz', 2: 3}`**
   - **Type**: `dict` (dictionary)
   - `foo5` is a dictionary with mixed key types, using both a string (`'bar'`) and an integer (`2`).
   - **Example Use**: `foo5['bar']` returns `'baz'`, and `foo5[2]` returns `3`.

3. **`def foo6(bar): return bar + 1`**
   - **Type**: `function`
   - `foo6` is a function that takes a number and returns it incremented by one.
   - **Example Use**: Calling `foo6(3)` returns `4`.

#### **JavaScript**

1. **`const foo7 = 23.8;`**
   - **Type**: `number`
   - `foo7` is a decimal number.
   - **Example Use**: `console.log(foo7);` outputs `23.8`.

2. **`const foo8 = [1, 2, 3, 4, 5, 'hi'];`**
   - **Type**: `array`
   - `foo8` is an array containing integers and a string.
   - **Example Use**: `console.log(foo8[5]);` returns `'hi'`.

3. **`const foo9 = {'bar': 'baz', 2: 3};`**
   - **Type**: `object`
   - `foo9` is an object with mixed-type keys (`'bar'` and `2`).
   - **Example Use**: `console.log(foo9['bar']);` returns `'baz'`.

4. **`const foo10 = x => x + 5;`**
   - **Type**: `function`
   - `foo10` is a function that adds `5` to the input.
   - **Example Use**: `foo10("hello");` returns `"hello5"` (concatenates the string and `5`), while `foo10(4);` returns `9`.

5. **`function foo11(x){ return function(y){ return x + y; } }`**
   - **Type**: `function` (that returns another function)
   - `foo11` takes an input and returns another function that takes a second input and adds them.
   - **Example Use**: `foo11(3)(5);` returns `8`, and `foo11("hello")("world");` returns `"helloworld"`.

---

### 2. **Type Coercion in Each Language**

#### **Java**

1. **`0 == false;`**
   - **Result**: Error (Java doesn’t allow direct comparison between integers and booleans)

2. **`String foo = "bar"; foo = 1;`**
   - **Result**: Error (Java doesn’t allow reassignment of a `String` variable to an integer)

3. **`foo + "bar";`**
   - **Result**: If `foo` were a `String`, this would concatenate `foo` with `"bar"`, outputting something like `"1bar"` if `foo` were `"1"`.

#### **Python**

1. **`0 == False`**
   - **Result**: `True` (Python considers `0` and `False` equal in value)

2. **`foo = "bar"; foo = 1`**
   - **Result**: `foo` now holds `1` (Python allows reassignment with any type, so it works without errors)

3. **`foo + "bar"`**
   - **Result**: Error (If `foo` is an integer, `1 + "bar"` throws a `TypeError` since you can’t add `int` and `str` directly)

#### **JavaScript**

1. **`0 == false`**
   - **Result**: `true` (JavaScript considers `0` and `false` loosely equal, but `===` would give `false`)

2. **`var foo = "bar"; foo = 1;`**
   - **Result**: `foo` is now `1` (JavaScript allows reassignment to any type without error)

3. **`foo + "bar"`**
   - **Result**: If `foo` is an integer, it’ll concatenate it as a string, resulting in `"1bar"`.

### **Type Coercion Summary**
- **Java**: Strict and type-safe; assignments across types need explicit casting.
- **Python**: Flexible with dynamic typing, but some operations (like `int` + `str`) require conversion.
- **JavaScript**: Loosely typed; auto-coerces in unexpected ways (like `0 == false`), making `===` useful to avoid type coercion surprises.

---

### 3. **Object Inheritance Through Prototypes in JavaScript**

#### **Prototype Inheritance Example**

1. **Code**:
   ```javascript
   function Animal(name) {
       this.name = name;
   }
   console.log(Animal.prototype);
   ```

   - **Explanation**: `Animal.prototype` starts as an empty object that stores properties shared across instances.

2. **Adding a Method**:
   ```javascript
   Animal.prototype.speak = function() {
       console.log(this.name + ' makes a sound.');
   };
   console.log(Animal.prototype);
   ```

   - **Explanation**: Now `Animal.prototype` has a `speak` method. This shared method will be accessible to any `Animal` instance.

3. **Creating an Instance**:
   ```javascript
   const dog = new Animal('Buddy');
   dog.speak(); // Outputs: Buddy makes a sound.
   console.log(Object.getPrototypeOf(dog));
   ```

   - **Explanation**: `dog` inherits `speak` from `Animal.prototype`, so calling `dog.speak()` outputs `"Buddy makes a sound."`

#### **ES6 Class Syntactic Sugar Example**

- **Class Example**:
   ```javascript
   class AnimalClass {
       constructor(name) {
           this.name = name;
       }
       speak() {
           console.log(this.name + ' makes a sound.');
       }
   }
   ```

- **Using the Class**:
   ```javascript
   const cat = new AnimalClass('Whiskers');
   cat.speak(); // Outputs: Whiskers makes a sound.
   ```

   - **Explanation**: `AnimalClass` offers a cleaner syntax, but under the hood, it’s still using prototypes.

In summary, while ES6 classes make JavaScript’s object-oriented style more approachable, prototypes are the backbone of inheritance in JavaScript. The class syntax simply hides it, making the code cleaner and more familiar.
