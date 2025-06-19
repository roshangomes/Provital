Provital
Provital is a web application designed to help users book appointments with lifestyle medicine experts. The app features a hero section with animated images, a search bar for finding experts, and sections explaining how the service works. The frontend is built with React and is intended to be deployed on GitHub Pages in the future.
Project Structure
The repository contains the following structure:

provital-frontend/: The React application source code.
src/: Contains the React components, styles, and assets.
public/: Static files like index.html.
package.json: Dependencies and scripts for the React app.



Features

Hero Section: Displays animated images (two columns with looping animations: one moves top to bottom, the other bottom to top) and a search bar to find lifestyle medicine experts.
How It Works: Explains the process of using Provital to book appointments.
Responsive Design: Optimized for both desktop and mobile devices.

Screenshots
Desktop Version
![Desktop Screenshot](images/Desktop-ss.png)

Mobile Version
### Mobile Version
![Mobile Screenshot 1](images/MobileS1.jpg)
![Mobile Screenshot 2](images/MobileS2.jpg)

Demo Video
Watch a demo of the Provital app:

https://github.com/user-attachments/assets/e02bbebc-856d-410f-a054-ac38489e30ac


Prerequisites
Before running the project locally, ensure you have the following installed:

Node.js: Version 20 or higher (recommended).
npm: Comes with Node.js, used for package management.

You can check your Node.js version with:
node -v

If needed, install Node.js 20 using a version manager like nvm:
nvm install 20
nvm use 20

Setup Instructions

Clone the Repository:
git clone https://github.com/roshangomes/provital.git
cd provital


Navigate to the Frontend Folder:
cd provital-frontend


Install Dependencies:
npm install


Run the App Locally:
npm start

This will start the development server, and the app will be available at http://localhost:3000.


Troubleshooting

Missing Images: Ensure the provital-frontend/src/assets/ folder contains the required images (Rectangle1.png to Rectangle8.png). If these are missing, the app may not render correctly. Add the images to the folder and commit them to the repository.
Port Conflict: If localhost:3000 is in use, npm start will prompt to use another port, or you can specify one:PORT=3001 npm start


React Version Issues: The app uses React 18.3.1 (downgraded from 19.1.0 to match react-scripts@5.0.1). If you encounter version conflicts, ensure your package.json matches:"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  ...
}



Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch:git checkout -b feature/your-feature-name


Make your changes and commit:git commit -m "Add your feature"


Push to your branch:git push origin feature/your-feature-name


Open a pull request on GitHub.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For questions or feedback, reach out to roshangomes.
Last updated: June 19, 2025
