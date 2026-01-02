import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Avatar,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔐 SET TOKEN
    login();

    // ➡️ REDIRECT TO DASHBOARD
    navigate("/dashboard");
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
          <LockOutlinedIcon />
        </Avatar>

        <Typography variant="h5" mb={2}>
          Login
        </Typography>

        {/* ✅ USE CORRECT HANDLER */}
        <Box component="form" onSubmit={handleSubmit} width="100%">
          <TextField
            fullWidth
            required
            margin="normal"
            label="Email"
            name="email"
            type="email"
          />

          <TextField
            fullWidth
            required
            margin="normal"
            label="Password"
            name="password"
            type="password"
          />

          <FormControlLabel control={<Checkbox />} label="Remember me" />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 2, mb: 1 }}
          >
            Login
          </Button>

          <Box textAlign="center">
            <Link component={RouterLink} to="/register">
              Don't have an account? Sign up
            </Link>

            <br />

            <Link
              component={RouterLink}
              to="/forgot-password"
              underline="hover"
              sx={{ mt: 1, display: "inline-block" }}
            >
              Forgot password?
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
