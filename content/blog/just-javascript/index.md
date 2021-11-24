---
title: What I Learned From Just Javascript
date: "2021-08-23T22:40:32.169Z"
visible: true
description: A few tidbits from Dan Abramov and Maggie Appleton's learning material on the main programming language of the web.
topic: design, coding
---



#### There are 9 value types in javascript and you should know them off the top of your head
When you don't have strict typing, it can be easy to get carried away in a world of `const` and `let`. Don't let that happen. You're better than that. Briefly, here's a bit about each of them:
 - `undefined` which is used for *unintentionally* missing values
 - `null` which is used for *intentionally*
 - Booleans (`true` and `false`)
 - Numbers (`-20`, `4.54`)
 - BigInts which are a new, official addition to the language mainly to have something that competes with python
 - Strings (`'Strings'`)
 - Symbols which the course doesn't go over at all and I've never personally had a reason to write
 - Objects `{}`
 - Functions `(x => { x * 2 })`

 That's it. That's all you need to know and the average Joe probably uses everything but BigInts and Symbols on a daily basis.


#### Values are an immutable, unchangable thing
This course talks a good amount about the mental model, and an important part of that is supposed to be the idea that values such as the number `3` or the string `'something'` exist outside of your code that most importantly **can't be changed** and **can merely be observed** by variables. The distinction here is that a variable and a value pointed at by a variable are two distinct things. I think this is partially due to the wording we often use (such as contains) when talking about our code. This relates to another prevalent topic in the course:


#### 'Passing a variable' into a function isn't a thing
Javascript doesn't do this one. It doesn't work the same way a lower level does where you need to think about pointers. When a function call is being compiled it will take whatever value the variable is looking at and reference that **value** all on its lonesome.


#### Referencing a nested object with a different variable can get pretty confusing
Even if an object is declared as a `const`, it's contents can be changed. Anything nested within an object can always be modified. This can lead to some nasty patterns, so a good heuristic for not having to deal with this is, when creating a new object with some components of a different one, assigning the new values at their most granular level.
```js
const jerry = { address: {street: '123 street street', zip: 55555} };
const tomAddress = jerry.address;
tomAddress.zip = 12345;

//uh oh! prints 12345
console.log(jerry.address.zip);
```
Additionally, the same thing can happen when you assign a variable to an array.
This is why another good rule of thumb is to use the spread operator when trying to copy any elements of an array. This is another headache saver.

```js
//bad way
const oldArray = [1,2,3];
const newArray = oldArray;
newArray.push(6);

//prints 6
console.log(oldArray.at(-1));

//good way
const oldArray = [1,2,3];
const newArray = [...oldArray];
newArray.push(6);

//prints the old array as expected
console.log(oldArray);
```

#### Javascript is pretty neat
If you felt you learned a thing or two from going through this, [I recommend purchasing Just Javascript for yourself and going through it.](https://justjavascript.com/) It's brief, enjoyable, and will likely help you gain a deeper understanding of the code you're writing and reading through every day.
