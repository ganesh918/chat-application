function ErrorState({
  message = "Something went wrong",
}) {
  return (
    <div className="error-state">

      <h2>⚠️</h2>

      <p>{message}</p>

    </div>
  );
}

export default ErrorState;