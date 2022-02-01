---
title: Explained Better - Liskov Substitution Principle 
date: "2022-01-26T22:40:32.169Z"
visible: true
description: A cautionary tale of cross site scripting and how to defend your site from it.
topic: coding, design
---

If you've ever studied software development you've probably heard of the SOLID principles. They're useful rules for writing clean, extensible code that works and stays working for many years after it's been put into production. If you haven't seen them before, briefly, here's each principle and it's full description:
 - #### Single Responsibility Principle
 - - > A class should have one and only one reason to change, meaning that a class should have only one job.
 - #### Open-Closed Principle
 - - > Objects or entities should be open for extension but closed for modification.
 - #### Liskov Substitution Principle
 - - > Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.
 - #### Interface Segregation Principle
 - - > A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.
 - #### Dependency Inversion Principle
 - - > Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.

Reading through that list, most principles seem straightforward. Single Responsibility is a term you ca piece together pretty easily from the name. The guy that coined the acronym, Robert Martin, championed writing code that worked this way as well. When you read a function name you should immediately be able to tell what it does without doing anything weird or unexpected. It's a good guideline to try to adhere to, but in practice it can't always be followed. **Sometimes things have to get complex and hard to read for reasons like performance or just plain maintainablity** (not everything needs to be an interface) and, unfortunately, this doesn't apply to every SOLID principle. Some of them represent ideas that are a little too complex to just fit in the title.

If you were to skim over each principle, the one that would go the most over your head would probably be the Liskov Substitution principle. It uses a weird math comparison to try and get at its point, but like most math concepts, it reads like a logic problem. You can't just read it and immediately understand what it's saying. I'm going to try to explain it and leave you with a firmer understanding of the principle.
> The point of the Liskov Substitution principle is that anything a parent class can do, a sub class should *also* be able to do. 
When you use inheritance in programming, this is usually what happens by default whe you create a subclass, but the important thing to note is that you shouldn't interfere with what the parent class was initially created to do.
```python
class Animal:
    def __init__(self, name: str, legs: int) -> None:
        self.name = name
        self.legs = legs

    def say_hi(self) -> None:
        print(f'Hi! My name is {self.name} and I have {self.legs} legs!')

class Dog(Animal):
    def bark(self) -> None:
        print('Woof!')

if __name__ == '__main__':
    big_dog = Dog('Scruffy', 4)
    #inherits the method
    big_dog.say_hi()
```
Reading through the examples that are out there, people use things like the `Square` and `Rectangle` class comparisons. One of the search results says those are complicated and then writes out 200 lines of code defining a coffee maker object and some other stuff. You don't need to worry about that. We're keeping it simple. Most of the time you already follow this principle. The problem only comes in if you start trying to get clever with the class you're inheriting. If you overwrite the behavior of the parent class with anything that stops it from doing what it was originally intended to do, your software is going to be confusing to others. If you wanted to do that you'd have to in some way change the methods you're inheriting to something else, like this:
```python
class Dog(Animal):
    #BAD IDEA
    def say_hi(self, target: str) -> None:
        print(f'Woof! Hi {target}!')
```
This looks efficient. It looks sort of like what you would expect the class to do. However, if you tried to wrap the `say_hi` method back into the original class, you'd be missing the target parameter from before. It makes the less predictable down the pipeline, if someone were to make a subtype of dog, they wouldn't know what behavior to expect from this method.
If they took the `target` parameter out, it would be fine.
```python
class Dog(Animal):
    #This works
    def say_hi(self) -> None:
        print(f'Woof!')
```
If you're looking for direct, easy to follow guidelines that will ensure that you are following this principle, try to stick to doing these:

 - #### Don't overwrite any methods that are already defined. If you do need to overwrite a method, ensure that at least the parameters passed into it are the same.
 - #### Never overwrite, omit or set properties to be something other than what the original parent class intended.
That's really it. That's all you need to do. Follow these and you'll be writing better code. Stay SOLID.