import { useState } from "react";

const LogIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
      <div>User is {isLoggedIn ? "Logged in" : "Logged out"}</div>
    </div>
  );
};

export default LogIn;
