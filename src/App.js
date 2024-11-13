import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
<div className="container">
  <header className="header">
    <h1 className="primary--heading">Andreas Resa<span className="heading--deco">Pangkerego</span></h1>
    <h2 className="secondary--heading">Web Developer</h2>
  </header>
  <aside className="aside">
    <figure className="image__container"> <img src="image/pribadi.jpg" alt className="image" /> </figure>
    <article className="details">
      <ul role="list" className="contact__information">
        <h3 className="title">Contact</h3>
        <li role="listitem"> <span className="icon"> <img src='https://icon-library.com/images/location-png-icon/location-png-icon-18.jpg'/> </span> <span className="text">Manado</span> </li>
        <li role="listitem"> <span className="icon"> <img src='https://img2.thaipng.com/20180627/vub/kisspng-telephone-call-computer-icons-home-business-phon-telefono-5b3448f5b37367.650218461530153205735.jpg' /> </span> <span className="text">085358475398</span> </li>
        <li role="listitem"> <span className="icon"> <img src='https://tse4.mm.bing.net/th?id=OIP.Lqg4orY6pE_HeBRwDLHy9wHaHa&pid=Api&P=0&h=180'/> </span> <span className="text">jrresa11@gmail.com</span> </li>
        <li role="listitem"> <span className="icon"> <img src='https://tse4.mm.bing.net/th?id=OIP.K3eTCYgVMc75Wm45wifs0gHaHa&pid=Api&P=0&h=180' /> </span> <span className="text">pangkerego_11</span> </li>
        <li role="listitem"> <span className="icon"> <img src='https://www.pngplay.com/wp-content/uploads/3/Black-Facebook-Logo-Transparent-File.png' /> </span> <span className="text">Andreas Resa</span> </li>
      </ul>
      <ul role="list" className="education">
        <h3 className="title">Education</h3>
        <li role="listitem">
          <h4 className="sub--title">Schools:</h4>
          <ul role="list" className="sublist">
            <li role="listitem" className="sublistitem"> <span className="text sub--text">SMP Don Bosco Manado</span> <span>2019</span> </li>
            <li role="listitem" className="sublistitem"> <span className="text sub--text">SMA Rex Mundi Manado</span> <span>2022</span> </li>
            <li role="listitem" className="sublistitem"> <span className="text sub--text">University Klabat Manado</span> <span>-</span> </li>
          </ul>
        </li>
      </ul>
    </article>
  </aside>
  <main className="main">
    <article className="about__me">
      <h3 className="title">About Me</h3>
      <p>Saya merupakan Mahasiswa dari Universitas Klabat Tingkat 3 semester 5 yang mempunyai hobi dalam bermain game,bulutangkis,dan basket. Minat saya membuat design web, dan cita-cita saya menjadi web developmet.</p>
    </article>
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
            <h5 className="diagram--id">HTML</h5> <span className="skill-bar html">85%</span>
          </figcaption>
          <figcaption className="diagram">
            <h5 className="diagram--id">CSS</h5> <span className="skill-bar css">90%</span>
          </figcaption>
          <figcaption className="diagram">
            <h5 className="diagram--id">JavaScript</h5> <span className="skill-bar javascript">40%</span>
          </figcaption>
          <figcaption className="diagram">
            <h5 className="diagram--id">Python</h5> <span className="skill-bar python">60%</span>
          </figcaption>
        </section>
      </div>
    </article>
  </main>
  <footer className="footer" />
</div>

  )
};
export default App;

