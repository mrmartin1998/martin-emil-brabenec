export function validateContact(data) {
  const errors = {};

  // Name validation
  if (!data.name || data.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Subject validation
  if (!data.subject || data.subject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters';
  }

  // Message validation
  if (!data.message || data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
} 