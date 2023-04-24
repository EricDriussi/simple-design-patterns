# Description

A system in which an object "A" passes through a dynamic chain of linked objects until one of them handles it.
Each of these linked objects **either** take responsibility for "A" **or** passes it to the next one.

Some less strict implementations allow for the linked objects to **both** process **and** pass the object along.
This blurs the line between CoR and Middleware.

# Usefulness

- Allows processing multiple types of objects differently as part as the same process.
  - Especially useful when you know where the processing needs to happen, but not the types or sequence of objects.
- Allows processing to be done in a particular order and to change at runtime.
- Encapsulates handling logic.
