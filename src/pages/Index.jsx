// Complete the Index page component here
// Use chakra-ui
import React, { useState, useEffect } from "react";
import { Box, Button, Input, VStack, Text, useToast, Image, Flex, Spacer } from "@chakra-ui/react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toast = useToast();

  const SUPABASE_URL = "https://merrefvnykbgyhbdzpleh.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGcjl4JIUzI1NiIsInR5cCI6IkpXVCJ9.j324l3";

  useEffect(() => {
    const session = localStorage.getItem("supabase.auth.token");
    if (session) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      if (data.access_token) {
        localStorage.setItem("supabase.auth.token", JSON.stringify(data));
        setIsLoggedIn(true);
        toast({
          title: "Login Successful",
          description: "You have been successfully logged in.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        throw new Error(data.error_description || "Failed to login");
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("supabase.auth.token");
    setIsLoggedIn(false);
    toast({
      title: "Logout Successful",
      description: "You have been successfully logged out.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <VStack spacing={4}>
        {isLoggedIn ? (
          <>
            <Text>Welcome back!</Text>
            <Button leftIcon={<FaSignOutAlt />} colorScheme="red" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={handleLogin}>
              Login
            </Button>
          </>
        )}
      </VStack>
    </Flex>
  );
};

export default Index;
