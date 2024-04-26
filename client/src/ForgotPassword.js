import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = React.useState('');
  const [isSending, setIsSending] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      const response = await axios.post('https://enms-xi.vercel.app/resetpassword', {
        email,
      });
      
      if (response.data === 'success') {
        // Handle success scenario, e.g., show success message to user
        console.log('Password reset email sent successfully');
      } else {
        setError('Failed to send password reset email');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setError('Failed to send password reset email');
    } finally {
      setIsSending(false);
    }
  };

  const handleForgotPasswordClick = () => {
    // You can add custom logic here to handle what happens when the user clicks on "Forgot Password"
    console.log('Forgot Password button clicked');
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        Enter your email address below to receive instructions on how to reset your password.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={isSending}
          sx={{ mt: 2 }}
          onClick={handleForgotPasswordClick} // Adding onClick handler
        >
          {isSending ? 'Sending...' : 'Send Password Reset Email'}
        </Button>
        {error && (
          <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </form>
    </Box>
  );
}

export default ForgotPassword;
