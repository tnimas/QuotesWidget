# Project Overview

This project is a customizable quote widget designed for the Lively Wallpaper application. It displays quotes from a user-defined list and updates them at specified intervals (daily, hourly, or every minute).

The project consists of two main files:

*   `index.html`: The core of the widget, containing the HTML structure, CSS for styling, and JavaScript for functionality.
*   `LivelyProperties.json`: A configuration file that defines the user-customizable properties of the widget within the Lively Wallpaper interface.

## How it Works

The widget's logic is handled by JavaScript within `index.html`. It parses a list of quotes provided by the user and displays them one by one. The quote rotation is determined by the selected update interval.

The `LivelyProperties.json` file allows users to customize the following aspects of the widget:

*   **Quotes Data**: A text area to input quotes in the format `Quote | Author`.
*   **Update Interval**: A dropdown to select how often the quote should change.
*   **Font Size**: A slider to adjust the text size of the quote.
*   **Text Color**: A color picker to change the color of the displayed text.

## Development

This is a simple frontend project with no external dependencies or complex build process. To make changes, you can directly edit the `index.html` and `LivelyProperties.json` files.

*   `index.html`: Modify this file to change the widget's appearance (CSS) or behavior (JavaScript).
*   `LivelyProperties.json`: Modify this file to add, remove, or change the customizable properties of the widget.

There are no build or run commands. To see the changes, you need to load the widget in the Lively Wallpaper application.
