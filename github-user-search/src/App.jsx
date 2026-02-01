import githubApi from "./services/githubApi";

function App() {
  const testApi = async () => {
    const response = await githubApi.get("/users/octocat");
    console.log(response.data);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <button onClick={testApi}>Test API</button>
    </div>
  );
}

export default App;

