import React, { useEffect, useState } from "react";

export default function App() {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8081/api/customers/C1001")
      .then(response => response.json())
      .then(data => setCustomer(data))
      .catch(() => setCustomer({ status: "API unavailable" }));
  }, []);

  return (
    <main>
      <h1>Customer Digital Services</h1>
      <p>Customer status: {customer?.status ?? "Loading..."}</p>
      <p>Demo application — mock customer data only.</p>
    </main>
  );
}
