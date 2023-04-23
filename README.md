# Design Patterns Made Simple

List of super-simplified design patterns with brief explanations, implementations and client-code usage.

Some patterns from the book are purposefully ignored, and some others are added.

The idea is not to summarize the book. An AI would probably do a better job than me.
Rather, I attempt to fairly represent useful patterns as seen in the wild, in the most plain and simple way possible.

Abstractions and big, smart-sounding words are kept at a minimum.

## Why

Mostly because Design Patterns are a pain point for me.
I've always struggled to understand, recognize and use them properly.

Although there are plenty of resources (linked below) that attempt to achieve the same goal as this repository, I remember finding some of them **very** hard to follow when I first started out as a dev.

Also, quite a few of them have examples and/or explanations that (in my opinion) do not represent faithfully the patterns described in the book.

Hopefully, this provides a simple starting points for newbies.

## How

The patterns are divided by [category](./src/), each subdirectory representing a pattern with a brief explanation, implementation code and an example use case (client code).

Comments are added here and there, wherever further context felt necessary.

Some (but not all) of the `interfaces` are simply used to clearly point to each piece of the puzzle (the [observer](./src/behavioral/observer/), for example).
Not all of them are strictly necessary of even commonplace.

Best way to approach this IMO is to read the pattern's description, open the implementation and use case files side by side and stare at the screen until something clicks.

## Improvements - TODOs

- [ ] **Complex Examples**: The examples are kept as simple as possible, and thus very different to real world usages. It might be nice to also add more complex examples.
- [ ] **When to use**: There are brief explanations of what each pattern is and it's benefits, but no mention of *in what scenarios* it's use is appropriate.
- [ ] **Common pitfalls**: Each design pattern has its pros and cons. Currently, there is no mention of the latter.
- [ ] **Other langs**: Only typescript is used at the moment.

## Resources

- [kamranahmedse](https://github.com/kamranahmedse/design-patterns-for-humans)
- [refactoring.guru](https://refactoring.guru/design-patterns)
- [baeldung](https://www.baeldung.com/design-patterns-series)
- [wikipedia](https://en.wikipedia.org/wiki/Design_Patterns#Patterns_by_type)
- The book [Design Patterns: Elements of Reusable Object-Oriented Software](https://en.wikipedia.org/wiki/Design_Patterns)
