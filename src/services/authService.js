// src/services/authService.js
export const login = async (email, password) => {
    // Mock API call (Replace with actual API logic later)
    if (email === "admin@example.com" && password === "password") {
      return { success: true, token: "mock-jwt-token", user: { name: "Admin" } };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  };
  