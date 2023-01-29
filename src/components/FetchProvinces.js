import React, { useEffect, useState } from "react";
import "./FetchProvinces.css";

export default function FetchProvinces() {
  const [provinces, setProvinces] = useState([]);
  const provinceAPI = "https://api.test-sfx-hub.co.za/api/utility/province";
  let username = "candidate";
  let password = "12345";
  useEffect(() => {
    fetch(provinceAPI, {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(`${username}:${password}`),
      },
    })
      .then((response) => response.json())
      .then((apiData) => {
        setProvinces(apiData);
      });
  }, [password, provinceAPI, username]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>value</th>
            <th>display-name</th>
          </tr>
        </thead>
        <tbody>
          {provinces.map((province, index) => (
            <tr key={index}>
              <td>{province.value}</td>
              <td>{province["display-name"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
