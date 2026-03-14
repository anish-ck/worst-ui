/**
 * Simulates an annoyingly long network request or action
 * @param {number} min Minimum milliseconds
 * @param {number} max Maximum milliseconds 
 * @returns Promise that resolves after a random time
 */
export const fakeDelay = (min = 2000, max = 8000) => {
  const delay = Math.floor(Math.random() * (max - min + 1) + min);
  return new Promise((resolve) => setTimeout(resolve, delay));
};
