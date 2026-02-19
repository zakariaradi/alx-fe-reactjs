function useAuth() {
  const isAuthenticated = () => {
    return localStorage.getItem("auth") === "true";
  };

  return { isAuthenticated };
}

export default useAuth;
