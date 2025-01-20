import image from '/photo_2025-01-18_23-10-42.jpg'
import './App.css'
import { Link } from 'react-router-dom'

function AppEn() {
    return (
      <>
      <main>
  <Link
    to="/"
    style={{
      padding: 3,
      backgroundColor: "#303030",
      borderRadius: "10%",
      textDecoration: "none"
    }}
    className="text anim"
  >
    Перейти на RU
  </Link>
  <div className="cont1">
    <img
      src={image}
      width={200}
      height={200}
      className="img1 idk image-container"
    />
  </div>
  <p className="text">
    Hello, I'm <span style={{ backgroundColor: "blue" }}>Rafcha</span>
  </p>
  <p className="text" style={{ color: "blue", margin: "50px 0 0 0" }}>
    About Me ㄟ(≧◇≦)ㄏ
  </p>
  <p className="text">
    I'm beginner fullstack developer and sys.admin from Russia ᓚᘏᗢ
  </p>
  <p className="text" style={{ color: "rgb(0, 132, 255)" }}>
    Other
  </p>
  <div className="container">
    <Link to="/SkillsEN" style={{ textDecoration: "none" }} className="item">
      Skills
      <br />
      <br />
      <br />
      <br />
      <span className="col">programm language</span>
    </Link>
    <Link to="/ProjectsEN" style={{ textDecoration: "none" }} className="item">
      Projects
      <br />
      <br />
      <br />
      <br />
      <span className="col">Or where I working&nbsp;&nbsp;&nbsp;</span>
    </Link>
    <a 
    href='https://t.me/rafchapw'
    style={{ textDecoration: "none" }} className="item">
      Communication<br />
      <br />
      <br />
      <br />
      <span className="col">Communication with me</span>
    </a>
    <Link 
    to="/DontYet"
    style={{ textDecoration: "none" }} className="item">
      Blog ( backend )<br />
      <br />
      <br />
      <br />
      <span className="col">My Blog&nbsp;</span>
    </Link>
  </div>
</main>
    </>
    )
}

export default AppEn
