# Customer Survey Kiosk

This is a React-based Customer Survey Kiosk application designed to collect user feedback efficiently. It features a simple and intuitive UI where users can answer survey questions, skip questions, and save their answers locally. At the end of the survey, users confirm submission, and their feedback is flagged as completed.

---

## Features

- **Welcome Screen**: A friendly introduction with a "Start Survey" button to begin.
- **Survey Flow**:
  - Users can answer each question on a scale.
  - Option to skip any question without answering.
  - "Prev", "Skip", and "Next" buttons for seamless navigation.
- **Data Persistence**:
  - Responses are saved in the browser's Local Storage.
  - Each question and answer is identified using a unique ID.
  - Customer sessions are tracked and marked as `COMPLETED` upon submission.
- **Thank You Screen**: Displays a confirmation message after survey completion.
- **Responsive Design**: The layout is optimized for desktop and kiosk displays.

---

## Technologies Used

- **Frontend**: React.js
- **Styling**: CSS
- **Data Storage**: Browser Local Storage

---

## Getting Started

### Prerequisites

- **Node.js** installed on your system.
- A package manager like **npm** or **yarn**.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Navigate to the project directory:
   ```bash
   cd customer-survey-kiosk
3. Install the dependencies:
   ```bash
   npm install
### Running the Application
To start the application in development mode, run:
```bash
npm start
 Open your browser and navigate to:
 ```arduino
 http://localhost:3000


