import { useLoginFormReducer } from "../hooks/index.js";

export default function LoginForm() {
  const { state, dispatch, handleSubmit } = useLoginFormReducer();

  const handleEmail = (payload) => {
    dispatch({
      type: "CHANGE_EMAIL",
      payload,
    });
  };

  const handlePassword = (payload) => {
    dispatch({
      type: "CHANGE_PASSWORD",
      payload,
    });
  };

  return (
    <form>
      {state?.errors?.email && <p>{state.errors.email}</p>}
      {state?.errors?.password && <p>{state.errors.password}</p>}
      <label>Email (required)</label>
      <input
        type="text"
        value={state.email}
        onChange={(e) => handleEmail(e.target.value)}
      />
      <label>Password (required)</label>
      <input
        type="password"
        value={state.password}
        onChange={(e) => handlePassword(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e, state, dispatch)}>Login</button>
    </form>
  );
}
