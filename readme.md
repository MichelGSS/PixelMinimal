# PixelMinimal
 
## Introduction
PixelMinimal is a minimalist pixel art editor built using HTML, CSS, and JavaScript. It allows users to create pixel art in a simple, intuitive, and responsive environment. This project was developed to provide an easy-to-use interface where users can adjust the grid dimensions, select colors, and draw continuously using the mouse. It is designed for anyone who enjoys creating pixel art, from beginners to more experienced artists.

## Project Overview
The PixelMinimal editor is designed to be highly customizable, offering features like adjustable grid size, color selection for different mouse buttons, and support for drawing or erasing while dragging the mouse. The project focuses on user experience, aiming to keep the interface clean and responsive while still providing core functionalities that enable pixel art creation. The project was built following agile development principles, emphasizing simplicity, efficiency, and user-friendliness.

## Features
PixelMinimal offers a variety of features aimed at making pixel art creation both easy and enjoyable:
- **Adjustable Grid Size**: Users can set the width, height, and pixel size of the grid to customize their drawing canvas.
- **Color Selection**: Two color pickers allow users to choose different colors for the left and right mouse buttons, enabling quick switching between primary and secondary colors.
- **Continuous Drawing and Erasing**: Users can click and drag to draw or erase pixels continuously, with the option to erase using the middle mouse button.
- **Responsive Design**: The interface adjusts to different screen sizes, making it accessible on both desktop and mobile devices.
- **Intuitive Controls**: The controls are designed to be straightforward, ensuring that users can start creating art quickly.

## File Descriptions
The project consists of several files, each playing a specific role in the functionality and structure of the pixel art editor:

### 1. **index.html**
   - This is the main HTML file for the project, serving as the entry point for the PixelMinimal editor.
   - It contains the structure for the grid, controls for adjusting grid size and colors, and buttons for clearing the grid.
   - The file includes sections like header, grid container, control panel, and JavaScript linking for interactive functionalities.
   - It also contains a link to the "Contato" page, allowing users to access contact information.

### 2. **contact.html**
   - This file provides a simple contact page with links to the creator’s GitHub and LinkedIn profiles.
   - It includes a brief description and icons for each platform, encouraging users to connect or explore the source code further.
   - The contact page maintains the same minimalist style as the main editor page, keeping the design consistent throughout the project.

### 3. **style.css**
   - This file handles the styling of both the main editor and the contact page.
   - It includes CSS rules for the layout, colors, fonts, buttons, and grid elements.
   - It ensures that the grid displays correctly and that controls are positioned and styled for easy interaction.
   - The CSS also includes animations for elements like hover effects, as well as responsive design adjustments to make the project usable on different screen sizes.
   - Key design decisions for CSS involved using a clean, flat design with minimal distractions, enhancing the overall user experience.

### 4. **script.js**
   - This JavaScript file powers the interactive functionality of the PixelMinimal editor.
   - It includes functions for creating the grid, updating pixel colors based on mouse events, and managing continuous drawing or erasing.
   - The file contains event listeners to handle mouse clicks, dragging, and color changes.
   - One of the major challenges in writing this script was ensuring that drawing and erasing worked smoothly, especially when dragging across pixels. The solution involved carefully managing mouse events and preventing unexpected behaviors, like blocking icons during dragging.
   - The script also includes utility functions, like resetting the grid and initializing the editor when the page loads.

## Design Decisions
The development of PixelMinimal involved several design decisions aimed at creating a simple yet effective pixel art editor:

### 1. **Minimalist Interface**
   - The primary goal was to keep the interface clean and focused on the grid, with minimal distractions. This was achieved by using a flat design with clear buttons, intuitive controls, and an uncluttered layout.
   - I chose a two-color picker setup to allow quick switching between primary and secondary colors, as it aligns with how most pixel art editors operate.

### 2. **Event Handling for Drawing and Erasing**
   - One of the biggest challenges was ensuring smooth drawing and erasing, especially when dragging the mouse across the grid. To prevent issues like the appearance of blocking icons, I had to optimize the event handling logic, ensuring that it accurately detects mouse states and avoids unwanted browser behaviors like context menus or default dragging actions.
   - The choice to use `e.preventDefault()` in key event listeners was crucial for improving the user experience, as it prevents browser interference during continuous drawing.

### 3. **Responsive Design**
   - From the beginning, I aimed to make PixelMinimal usable on both desktop and mobile devices. The CSS was written to ensure that elements adjust automatically based on screen size, making the project accessible to a wider audience.
   - The grid size and controls were tested on different devices to ensure a consistent user experience.

## Usage Instructions
To start using PixelMinimal:
1. Open the `index.html` file in any modern web browser.
2. Use the controls to adjust the grid size, width, height, and pixel size according to your preferences.
3. Select colors using the two color pickers. The left color picker sets the color for the left mouse button, and the right color picker sets the color for the right mouse button.
4. Click and drag to draw continuously or use the middle mouse button to erase pixels.
5. To reset the grid, click the "Limpar Grade" button.
6. For contact information, visit the "Contato" page through the link in the header.

## Future Enhancements
There are several potential improvements for PixelMinimal, including:
- Adding a color palette for quick color selection.
- Implementing a save/load feature to store and retrieve pixel art creations.
- Introducing a grid overlay toggle to help with alignment during pixel art creation.

## Conclusion
PixelMinimal is a simple but powerful pixel art editor, designed to provide users with an intuitive and responsive environment for creating art. Whether you're a beginner or an experienced artist, the project aims to make pixel art creation fun and accessible. I hope you enjoy using it as much as I enjoyed developing it!

