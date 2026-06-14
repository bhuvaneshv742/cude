/**
 * Vercel Web Analytics initialization
 * This file sets up analytics tracking for the application
 */

import { inject } from '@vercel/analytics';
import './script.js'; // Import the main game logic

// Initialize Vercel Web Analytics
// This will automatically track page views and send data to Vercel Analytics
inject({
  mode: 'auto', // Automatically detect development vs production
  debug: false  // Set to true to see analytics events in console
});
