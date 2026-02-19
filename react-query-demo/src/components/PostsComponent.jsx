import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function PostsComponent() {
  const {
    data,
    isLoading,
    error,       
    refetch,
  } = useQuery("posts", fetchPosts, {
    staleTime: 10000, 
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error fetching posts</p>; 

  return (
    <div>
      <h2>Posts</h2>

      {/* Refetch interaction */}
      <button onClick={() => refetch()}>
        Refetch Posts
      </button>

      {data.slice(0, 10).map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent;
