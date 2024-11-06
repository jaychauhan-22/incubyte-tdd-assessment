# String Calculator

A simple implementation of a string calculator to demonstrate basic arithmetic operations and handling of custom delimiters, negative numbers, and edge cases.

## Features

- **Empty String Handling:** Returns `0` when the input is empty.
- **Single Number Input:** Returns the number itself when the input contains a single number.
- **Sum of Numbers:** Returns the sum when the input contains multiple numbers separated by commas.
- **Support for Newlines:** Handles numbers separated by commas and newlines (newline as a delimiter).
- **Custom Delimiters:** Supports custom delimiters (e.g., `//[delimiter]\n`).
- **Negative Number Handling:** Throws an exception with a message when a negative number is found.
- **Ignore Numbers Greater Than 1000:** Ignores numbers greater than 1000 while summing.
- **Flexible Delimiters:** Supports multiple custom delimiters (e.g., `//[*][%]\n`).

## Tech Stack

- **Programming Language:** [TypeScript](https://www.typescriptlang.org/)
- **Testing Framework:** [Jest](https://jestjs.io/)
