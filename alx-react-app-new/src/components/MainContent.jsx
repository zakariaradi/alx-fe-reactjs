import UserProfile from "./UserProfile";

export default function MainContent() {
  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: '#eef2f3',
        minHeight: '300px'
      }}
    >
      <UserProfile
        name="Zakaria"
        age={25}
        bio="Frontend developer passionate about React and UI design."
      />

      <UserProfile
        name="Amina"
        age={22}
        bio="Student interested in web development and cybersecurity."
      />
    </main>
  );
}

