# Polling System

Welcome to the Polling System project! This project allows users to create polls, vote in them, view poll results, and add comments to the poll. It's built using React for the frontend and a custom JSON server as the backend.

**1. Features**

   **a. Create Polls:** Create polls with multiple options.

   **b. Vote in Polls:** Users can vote for their preferred option in each poll.

   **c. View Poll Results:** Users can see the results of polls they've participated in.

   **d. Add Comments to poll :** User can comment to the poll


**2. Technologies Used**

   **Frontend:** React, React Router, Tailwind CSS

   **Backend:** JSON Server (mock API)

   **Additional Tools:** Axios for API calls



**3. Setup Instructions**

  To run this project locally, follow these steps:

   **a. Clone the repository:**

     git clone https://github.com/athiragithubworld/PollingSystem_Vlocity.git

     cd polling-system

   **b. Install dependencies:**

     npm install

     

   **c. Start the JSON Server:**

     The backend is simulated using JSON Server. Start it with:

     json-server --watch db.json --port 5000 (or) npx json-server --watch db.json --port 5000

   **d. Start the React application:**

     Open a new terminal and start the React app:

     npm run dev


   **e. Open in your browser:**

     Visit http://localhost:3000 or the port mention in the code editor to see the application running.


**4. Project Structure**

    The project structure is organized as follows:

      **public/:** Static assets and index.html.

      **src/:** Source files for the React application.

      **Components/:** React components for different parts of the application.

      **App.jsx:** Main component where routing and main layout are defined.

      **main.js:** Entry point of the React application.
