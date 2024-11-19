import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const aboutRef = ref(db, "about");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
      setLoading(false);
    });
  }, []);

  return (
    <article className="about__me">
      <h3 className="title">About Me</h3>
      {!loading && (
      <p>{about.title}</p>
      )}
    </article>
  );
};

export default About;
