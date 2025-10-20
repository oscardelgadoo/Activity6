function formatTime(date) {
  return date.toLocaleTimeString();
}

function formatDate(date) {
  return date.toISOString();
}

function validateEmail(email) {
  return email.includes('@') && email.includes('.');
}

module.exports = { formatDate, validateEmail };
