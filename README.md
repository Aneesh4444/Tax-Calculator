# Tax-Calculator
Tax Calculator Web Application
This web application calculates taxes based on user input according to specified tax rules.

Project Overview
The purpose of this project is to create a tax calculator that computes taxes based on gross annual income, extra income, deductions, and the user's age category. The application follows specific tax calculation rules outlined in the assignment requirements.

Technologies Used
The project is developed using the following technologies:

HTML
CSS
JavaScript (Vanilla JS)
Bootstrap (for styling)
How to Run the Application
To run the tax calculator application locally, follow these steps:

Clone the repository to your local machine.
Open the index.html file in a web browser.
Alternatively, you can access the live demo of the application here (insert your hosted web app link).

Features and Functionality
Users can input their gross annual income, extra income, deductions, and select their age category.
Error handling:
Negative values are not allowed for income, extra income, and deductions.
Non-numeric inputs are handled with appropriate error messages.
Age category selection is mandatory before calculating taxes.
Edge case handling:
Taxes are not applied to income under or equal to 8 Lakhs after deductions.
Tax rates vary based on the user's age category.
Info icons:
Info icons are provided next to the "Gross Annual Income" label and input field, providing additional information about tax calculation rules.

Known Issues
The application does not support Internet Explorer (due to the use of modern JavaScript features).
Styling may not be fully optimized for all screen sizes and devices.
Future Improvements
Enhance responsive design for better mobile experience.
Implement real-time validation for input fields.
Provide customizable themes for users.
Include more interactive features such as charts or graphs for tax visualization.
