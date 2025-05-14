# Final Output Grading System

A web-based grading system for evaluating final output projects. Built with Express.js, EJS, and Firebase.

## Features

- View list of student groups and their project documentation
- Grade projects based on predefined criteria
- Real-time updates using Firebase
- Modern and responsive UI
- Secure data storage

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Firebase account

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd final-output-grading-system
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Firebase configuration:
```
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
```

4. Update the Firebase configuration in `public/js/firebase-config.js` with your Firebase project credentials.

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Firestore Database
3. Create the following collections:
   - `groups`: Store group information
   - `grades`: Store grading results

### Groups Collection Structure
```javascript
{
  groupNumber: string,
  projectTitle: string,
  docsLink: string
}
```

### Grades Collection Structure
```javascript
{
  scores: {
    Functionality: number,
    Design: number,
    CodeQuality: number,
    Innovation: number,
    Documentation: number
  },
  comments: string,
  totalScore: number,
  timestamp: string
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details "# output-grading-system" 
"# output-grading-system" 
