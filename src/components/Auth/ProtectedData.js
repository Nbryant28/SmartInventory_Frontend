import React, { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";

function ProtectedData() {
  const auth = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (auth.isAuthenticated) {
      console.log("Fetching protected data with token:", auth.user.access_token);
      console.log("API base URL:", process.env.REACT_APP_API_BASE_URL);

      fetch(`${process.env.REACT_APP_API_BASE_URL}/api/protected`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${auth.user.access_token}`,
        },
        
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch protected data");
          return res.json();
        })
        .then((data) => setData(data))
        .catch((err) => console.error(err));
        
    }
  }, [auth.isAuthenticated, auth.user]);

  if (!auth.isAuthenticated) return <p>Please sign in to view protected content.</p>;

  return (
    <div>
      <h2>Protected Data</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default ProtectedData;
