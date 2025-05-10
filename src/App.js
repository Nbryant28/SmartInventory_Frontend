// App.js
import { useAuth } from "react-oidc-context";
import ProtectedData from "./components/Auth/ProtectedData";

function App() {
  const auth = useAuth();

  const clientId = "3bri1ceoomkh3u77gptuhjgh9m";
  const logoutUri = "http://localhost:3000"; // 
  const cognitoDomain = "https://smartinventory-login.auth.us-east-1.amazoncognito.com";


  const signOutRedirect = () => {
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) return <div>Loading...</div>;
  if (auth.error) return <div>Error: {auth.error.message}</div>;

  return auth.isAuthenticated ? (
    <div>
      <h2>Welcome, {auth.user?.profile.email}</h2>
      <ProtectedData />
      <button onClick={() => auth.removeUser()}>Local Sign out</button>
      <button onClick={signOutRedirect}>Cognito Sign out</button>
    </div>
  ) : (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
    </div>
  );
}

export default App;
