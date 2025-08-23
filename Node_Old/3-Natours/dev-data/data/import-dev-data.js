const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Tour = require('../../models/tourModel');

// Load env variables
dotenv.config({ path: path.join(__dirname, '../../.env') });

// Validate env variables
if (!process.env.DATABASE || !process.env.DATABASE_PASSWORD) {
  console.error('❌ Missing DATABASE or DATABASE_PASSWORD in .env file');
  process.exit(1);
}

// Replace password in DB connection string
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// Connect to MongoDB
mongoose
  .connect(DB)
  .then(() => console.log('✅ Database connection successful'))
  .catch((err) => {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1);
  });

// Load JSON data
const toursFile = path.join(__dirname, 'tours-simple.json');
let tours = [];

try {
  tours = JSON.parse(fs.readFileSync(toursFile, 'utf-8'));
} catch (err) {
  console.error('❌ Error reading tours JSON file:', err.message);
  process.exit(1);
}

// Import data into DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('📥 Data successfully imported!');
  } catch (err) {
    console.error('❌ Error importing data:', err.message);
  } finally {
    process.exit();
  }
};

// Delete all data
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('🗑️ Data successfully deleted!');
  } catch (err) {
    console.error('❌ Error deleting data:', err.message);
  } finally {
    process.exit();
  }
};

// Handle CLI args
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
} else {
  console.log('ℹ️ Usage: node import-dev-data.js --import | --delete');
  process.exit();
}
