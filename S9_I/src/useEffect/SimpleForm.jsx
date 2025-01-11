import { useState, useEffect } from "react";
import { Message } from "./Message.jsx";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "jeremias256",
    email: "jere@gmail.com",
  });

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const { username, email } = formState;

  useEffect(() => {
    console.log("useEffect called!");
  }, []);

  useEffect(() => {
    console.log("formState name changed!");
  }, [username]);

  useEffect(() => {
    console.log("formState email changed!");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      {username === "jeremias256" && <Message />}

      <input
        type="email"
        className="form-control mt-2"
        placeholder="jere@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
