# TL;DR

A system in which an object 'A' passes through a series of objects for processing.
Each of these linked objects modify the object 'A' and invoke the next one up.

This is not always considered a distinct design pattern, but rather a lax implementation of CoR.
Also, 'middleware' is often used to refer to an abstraction layer, a piece of software that sits between (middle) two other pieces of software.

# Usefulness

- Allows processing to be done in a particular order and to change at runtime.
- Encapsulates modification logic.
