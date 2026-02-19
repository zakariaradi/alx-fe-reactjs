function Login() {
  const login = () => {
    localStorage.setItem("auth", "true");
    window.location.href = "/profile";
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
