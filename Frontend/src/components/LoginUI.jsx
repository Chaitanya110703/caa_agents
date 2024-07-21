import React from "react";
import LoginForm from "./LoginForm";

export default function LoginUI() {

  return (
    <main className="vh-100 d-flex align-self-center">
      <div className="container bordered d-flex justify-content-center">
        <LoginForm />
      </div>
    </main>
  );
}
