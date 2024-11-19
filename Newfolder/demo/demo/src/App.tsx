import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://192.168.1.6:8000/') // Use your server's IP address
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Fetched Data</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

export default DataFetchingComponent;
