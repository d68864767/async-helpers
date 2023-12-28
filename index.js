```javascript
// async-helpers/index.js

// This is a simple example of an asynchronous helper function
// that uses Promises. You can replace this with your actual code.

/**
 * Delays execution for a specified amount of time.
 * @param {number} ms - The amount of time to delay in milliseconds.
 * @returns {Promise} - A Promise that resolves after the specified delay.
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Export the helper function(s) for use in other packages
module.exports = {
  delay
};
```
