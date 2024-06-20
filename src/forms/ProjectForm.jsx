import { useProjectFormReducer } from "../hooks";

export default function ProjectForm() {
  const { state, dispatch, handleSubmit } = useProjectFormReducer();

  const handleProjectName = (payload) => {
    dispatch({
      type: "CHANGE_PROJECT_NAME",
      payload,
    });
  };
  const handleAssociation = (payload) => {
    dispatch({
      type: "CHANGE_PROJECT_ASSOCIATION",
      payload,
    });
  };

  console.log({ state });

  return (
    <form>
      {state.errors.projectName && (
        <p style={{ color: "red" }}>{state.errors.projectName}</p>
      )}
      {state.errors.association && (
        <p style={{ color: "red" }}>{state.errors.association}</p>
      )}
      <label>Project Name (required)</label>
      <input
        type="text"
        onChange={(e) => handleProjectName(e.target.value)}
        value={state.projectName}
      />
      <label>Association (required)</label>
      <select
        onChange={(e) => handleAssociation(e.target.value)}
        value={state.association}
      >
        <option>Select</option>
        <option>Resource/1a2b3c</option>
        <option>Resource/2b3c4d</option>
        <option>Resource/3b4c5d</option>
      </select>
      <button onClick={(e) => handleSubmit(e, state, dispatch)}>Save</button>
    </form>
  );
}
