import sixFacedDieStringRoller from "./ex4A.mjs";

const numbers = ["One", "Two", "Three", "Four", "Five", "Six"];
const randomValue = numbers[Math.floor(Math.random() * numbers.length)];

sixFacedDieStringRoller(randomValue);
