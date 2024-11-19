import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Header = () => {
  const [header, setHeader] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const headerRef = ref(db, "header");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
      setLoading(false);
    });
  }, []);
  return (
    <header className="header">
      {!loading && (
        <h1 className="primary--heading">
          {header.name}
          <span className="heading--deco">{header.fam}</span>
        </h1>
      )}
      <h2 className="secondary--heading">Informatika</h2>
    </header>
  );
};

export default Header;
