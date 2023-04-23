import { TextEditor } from "./pattern_implementation";

const editor = new TextEditor();

editor.write("Hi");
const firstSave = editor.save();
editor.write("Mom");
const secondSave = editor.save();
editor.write("!!!");
editor.print(); // HiMom!!!

editor.restore(firstSave);
editor.print(); // Hi

editor.restore(secondSave);
editor.print(); // HiMom
