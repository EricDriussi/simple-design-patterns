# Description

An object that stores the state of another object (Originator), which enables the latter to restore any previous state.
Typically, the client code (Caretaker) would hold a history of the Originator states.

# Usefulness

- Adds snapshotting.
- Decouple snapshots from snapshotted object.
