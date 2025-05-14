import express from 'express';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Initialize dotenv
dotenv.config();

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Helper function to get year level text
const getYearLevelText = (yearLevel) => {
  const levels = {
    1: 'First Year',
    2: 'Second Year',
    3: 'Third Year',
    4: 'Fourth Year'
  };
  return levels[yearLevel] || 'Unknown Year';
};

// Make helper functions available to all views
app.locals.getYearLevelText = getYearLevelText;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/year/:yearLevel', (req, res) => {
  const yearLevel = parseInt(req.params.yearLevel);
  if (yearLevel >= 1 && yearLevel <= 4) {
    res.render('groups', { yearLevel });
  } else {
    res.redirect('/');
  }
});

app.get('/add-group/:yearLevel', (req, res) => {
  const yearLevel = parseInt(req.params.yearLevel);
  if (yearLevel >= 1 && yearLevel <= 4) {
    res.render('add-group', { yearLevel });
  } else {
    res.redirect('/');
  }
});

app.get('/group/:id/rubric', async (req, res) => {
  res.render('rubric', { groupId: req.params.id });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
