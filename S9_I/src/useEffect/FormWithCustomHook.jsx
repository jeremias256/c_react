import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { onResetForm, onInputChange, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

  //TODO opcional const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="jere@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-4">
        Borrar
      </button>
    </>
  );
};
