import React from "react";
import AppRouter from "components/Router";
import { useEffect, useState } from "react";
import { authService } from "firebaseSetting";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} React + Firebase</footer>
    </>
  )
}

export default App;