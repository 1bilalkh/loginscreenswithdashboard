import React from "react";
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Link,
} from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import { Link as RouterLink } from "react-router-dom";


const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    console.log("Email:", data.get("email"));
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "primary.main", mb: 1 }}>
          <LockResetIcon />
        </Avatar>

        <Typography variant="h5" mb={1}>
          Forgot Password
        </Typography>

        <Typography variant="body2" color="text.secondary" textAlign="center">
          Enter your email address and we’ll send you a reset link.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} width="100%" mt={3}>
          <TextField
            fullWidth
            required
            label="Email Address"
            name="email"
            type="email"
            margin="normal"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
          >
            Send Reset Link
          </Button>

          <Box textAlign="center" mt={2}>
           <Link component={RouterLink} to="/Login" underline="hover">
              Back to Login
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
