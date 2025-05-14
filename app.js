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
  apiKey: "AIzaSyD755gHzo3ygU_-sJeTBfD4ojDITCh1Sk0",
  authDomain: "crud-operation-js-ce264.firebaseapp.com",
  databaseURL: "https://crud-operation-js-ce264-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crud-operation-js-ce264",
  storageBucket: "crud-operation-js-ce264.firebasestorage.app",
  messagingSenderId: "1029829847088",
  appId: "1:1029829847088:web:faf7950db48840b8b1a5f5"
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

app.get('/login', (req, res) => {
  res.render('login');
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
