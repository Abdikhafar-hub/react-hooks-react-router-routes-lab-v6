import React from "react";
import NavBar from "../components/NavBar";

function ErrorPage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Oops! Looks like something went wrong.</h1> {/* Update this text */}
      </main>
    </>
  );
}

export default ErrorPage;
