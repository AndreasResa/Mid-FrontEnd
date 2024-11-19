const Skills = () => {
  return (
    <article className="skills">
      <h3 className="title">Skills</h3>
      <div className="skills__content--flow">
        <ol role="list" className="special__skills">
          <li role="listitem">HTML</li>
          <li role="listitem">CSS</li>
          <li role="listitem">Python</li>
          <li role="listitem">Editing</li>
          <li role="listitem">Gaming</li>
        </ol>
        <section className="skill__diagram">
          <figcaption className="diagram">
            <h5 className="diagram--id">HTML</h5>{" "}
            <span className="skill-bar html">85%</span>
          </figcaption>
          <figcaption className="diagram">
            <h5 className="diagram--id">CSS</h5>{" "}
            <span className="skill-bar css">90%</span>
          </figcaption>
          <figcaption className="diagram">
            <h5 className="diagram--id">JavaScript</h5>{" "}
            <span className="skill-bar javascript">40%</span>
          </figcaption>
          <figcaption className="diagram">
            <h5 className="diagram--id">Python</h5>{" "}
            <span className="skill-bar python">60%</span>
          </figcaption>
        </section>
      </div>
    </article>
  );
};

export default Skills;
