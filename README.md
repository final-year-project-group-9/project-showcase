# Project Showcase Platform
## Overview
The Project Showcase Platform is a comprehensive web application designed to streamline the process of showcasing student projects. This platform is aimed at colleges, students, and recruiters, providing a centralized place for students to display their projects, collaborate with peers, and connect with potential recruiters.

## Features
### For Colleges
* Registration and Management: Colleges can register on the platform and upload data for all students across different branches.
* Automated Credential Generation: The platform automatically generates login credentials for students.
### For Students
* Profile Customization: Students can create and customize their profiles to highlight their skills and projects.
* Project Feed: A LinkedIn-like feed where students can view and comment on projects posted by peers.
* Project Management: Tools for students to manage their projects, including details, progress tracking, and collaboration features.
* Group Formation: Students can form groups based on targeted skills and collaborate on projects.
* GitHub Integration: Seamless integration with GitHub for project repositories.
* Analytics Dashboard: Insights and analytics on project views, comments, and interactions.
### For Recruiters
* Recruiter Login: Separate login for recruiters to search for student profiles and view their projects.
* Advanced Search Features: Robust search capabilities to find students based on specific criteria and skills.
* Project Viewing: Detailed project pages with comprehensive information on each project.
### Additional Features
* Recommendation System: Personalized project and student recommendations based on user interactions and preferences.
## Tech Stack
* Frontend: Angular, Tailwind CSS
* Backend: Node.js, Express
* Database: PostgreSQL
* Version Control: Git, GitHub
## Setup Instructions
### Prerequisites
* Node.js (version 18 or later)
* Angular CLI
* PostgreSQL
* Git
### Installation
1. Clone the Repository:

```
git clone https://github.com/your-username/project-showcase-platform.git
cd project-showcase-platform
```
2. Backend Setup:

```
cd backend
npm install
```
3. Database Setup:

```
CREATE DATABASE project_showcase;
```
Update backend/src/config/database.js with your PostgreSQL credentials.

5. Frontend Setup:

```
cd ../frontend
npm install
```
6. Running the Application:

Open two terminals:

* Terminal 1: Start the backend server.

```
cd backend
npm start
```
* Terminal 2: Start the frontend server.

```
cd frontend
ng serve
```
Visit http://localhost:4200 in your browser to access the application.
