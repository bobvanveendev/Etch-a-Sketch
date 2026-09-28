# Etch-a-Sketch

A browser-based Etch-a-Sketch built with HTML, CSS and JavaScript as part of [The Odin Project](https://www.theodinproject.com/) Foundations course.

## Features

- Draw by moving the mouse over the grid
- Generate a custom grid size
- Supports grid sizes from 1×1 up to 100×100
- Random RGB colors for every interaction
- Progressive opacity with repeated interactions
- Wooden Etch-a-Sketch inspired design

## What I learned

This project helped me practice:

- Creating HTML elements with JavaScript
- Working with DOM manipulation
- Using event listeners
- Handling mouse events
- Working with function parameters
- Validating user input
- Dynamically changing CSS with JavaScript
- Using `data-*` attributes to store values on elements
- Creating and resetting a grid dynamically
- Generating random RGB colors

## Built with

- HTML
- CSS
- JavaScript

## How it works

The grid is generated entirely with JavaScript.

The default grid is 16×16. When the user chooses a custom size, the existing grid is removed and a new grid is created.

The size of each square is calculated based on the width of the grid container, so the overall drawing area keeps the same dimensions regardless of the selected grid size.

Moving the mouse over a square changes its color to a randomly generated RGB value. Repeated interactions progressively increase its opacity.

## Project assignment

This project is based on the Etch-a-Sketch assignment from The Odin Project:

https://www.theodinproject.com/lessons/foundations-etch-a-sketch
