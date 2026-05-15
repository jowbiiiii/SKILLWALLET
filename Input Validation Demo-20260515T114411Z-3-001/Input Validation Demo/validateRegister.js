/**
 * Validation Middleware for User Registration
 * Validates: name, email, password
 */

const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;
  const errors = [];

  // Validate name field
  if (!name) {
    errors.push({
      field: 'name',
      message: 'Name is required'
    });
  } else if (typeof name !== 'string' || name.trim() === '') {
    errors.push({
      field: 'name',
      message: 'Name must be a non-empty string'
    });
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    errors.push({
      field: 'name',
      message: 'Name must contain only letters and spaces'
    });
  } else if (name.length < 2) {
    errors.push({
      field: 'name',
      message: 'Name must be at least 2 characters long'
    });
  } else if (name.length > 50) {
    errors.push({
      field: 'name',
      message: 'Name must not exceed 50 characters'
    });
  }

  // Validate email field
  if (!email) {
    errors.push({
      field: 'email',
      message: 'Email is required'
    });
  } else if (typeof email !== 'string' || email.trim() === '') {
    errors.push({
      field: 'email',
      message: 'Email must be a non-empty string'
    });
  } else {
    // Email regex pattern - simple but effective
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push({
        field: 'email',
        message: 'Email must be a valid email address'
      });
    } else if (email.length > 100) {
      errors.push({
        field: 'email',
        message: 'Email must not exceed 100 characters'
      });
    }
  }

  // Validate password field
  if (!password) {
    errors.push({
      field: 'password',
      message: 'Password is required'
    });
  } else if (typeof password !== 'string' || password.trim() === '') {
    errors.push({
      field: 'password',
      message: 'Password must be a non-empty string'
    });
  } else {
    // Password must be at least 8 characters
    if (password.length < 8) {
      errors.push({
        field: 'password',
        message: 'Password must be at least 8 characters long'
      });
    }
    
    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      errors.push({
        field: 'password',
        message: 'Password must contain at least one uppercase letter'
      });
    }
    
    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      errors.push({
        field: 'password',
        message: 'Password must contain at least one lowercase letter'
      });
    }
    
    // Check for at least one number
    if (!/[0-9]/.test(password)) {
      errors.push({
        field: 'password',
        message: 'Password must contain at least one number'
      });
    }
    
    // Check for at least one special character
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      errors.push({
        field: 'password',
        message: 'Password must contain at least one special character (!@#$%^&*)'
      });
    }

    // Password max length
    if (password.length > 100) {
      errors.push({
        field: 'password',
        message: 'Password must not exceed 100 characters'
      });
    }
  }

  // If there are errors, return validation error response
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors
    });
  }

  // If all validations pass, proceed to next middleware/controller
  next();
};

module.exports = validateRegister;
