/**
 * Auth Controller - Handles user registration
 * Only reached after validation middleware passes
 */

const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  // At this point, all validation has passed
  // In a real application, you would:
  // 1. Hash the password
  // 2. Store the user in a database
  // 3. Send a confirmation email
  // etc.

  // For this demo, we just simulate successful registration
  console.log(`[REGISTRATION] New user registered: ${email}`);

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    data: {
      name: name,
      email: email,
      // Note: Never return passwords in responses!
    }
  });
};

module.exports = {
  registerUser
};
