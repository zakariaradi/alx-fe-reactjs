import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.json();
};

function PostsComponent() {
  const { data, isLoading, isError, refetch } = useQuery(
    "posts",
    fetchPosts
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading posts</p>;

  return (
    <div>
      <h2>Posts</h2>

      <button onClick={refetch}>Refetch Posts</button>

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
