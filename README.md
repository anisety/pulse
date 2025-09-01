# Pulse

Pulse is a web application designed to provide real-time data visualization and analysis. It features a React-based frontend that communicates with a powerful Python backend capable of performing complex data processing, including Natural Language Processing (NLP) tasks.

## Features

*   **Real-time Data Dashboard**: A responsive dashboard to visualize data streams.
*   **NLP-powered Insights**: The backend can process and analyze text data to extract meaningful insights.
*   **RESTful API**: A clean and simple API to connect the frontend and backend.
*   **Containerized**: The entire application can be run using Docker for easy setup and deployment.

## Project Structure

The project is divided into two main parts:

*   `frontend/`: A React application that provides the user interface.
*   `backend/`: A Python/FastAPI application that serves the data and performs analysis.

## Getting Started

### Prerequisites

*   Node.js and npm
*   Python 3.8+ and pip
*   Docker (optional)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/anisety/pulse.git
    cd pulse
    ```

2.  **Frontend Setup:**
    ```bash
    cd frontend
    npm install
    npm start
    ```

3.  **Backend Setup:**
    ```bash
    cd backend
    pip install -r requirements.txt
    uvicorn main:app --reload
    ```

