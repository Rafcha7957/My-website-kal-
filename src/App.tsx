import image from '/photo_2025-01-18_23-10-42.jpg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <main>
  <Link
    to="AppEn"
    style={{
      padding: 3,
      backgroundColor: "#303030",
      borderRadius: "10%",
      textDecoration: "none"
    }}
    className="text anim"
  >
    Go to EN
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
    Привет, я <span style={{ backgroundColor: "blue" }}>Rafcha</span>
  </p>
  <p className="text" style={{ color: "blue", margin: "50px 0 0 0" }}>
    Обо мне ㄟ(≧◇≦)ㄏ
  </p>
  <p className="text">
    Я начинающий Fullstack-разработчик и системный администратор из России. ᓚᘏᗢ
  </p>
  <p className="text" style={{ color: "rgb(0, 132, 255)" }}>
    Другое
  </p>
  <div className="container">
    <Link to="Skills" style={{ textDecoration: "none" }} className="item">
      Знания
      <br />
      <br />
      <br />
      <br />
      <span className="col">Языки программирования</span>
    </Link>
    <Link to="/Projects" style={{ textDecoration: "none" }} className="item">
      Проекты
      <br />
      <br />
      <br />
      <br />
      <span className="col">Или где я работаю</span>
    </Link>
    <a href='https://t.me/rafchapw' style={{ textDecoration: "none" }} className="item">
      Связь<br />
      <br />
      <br />
      <br />
      <span className="col">Связаться со мной</span>
    </a>
    <Link 
    to="/DontYet"
    style={{ textDecoration: "none" }} className="item">
      Блог ( Бэкенд )<br />
      <br />
      <br />
      <br />
      <span className="col">Мой блог&nbsp;</span>
    </Link>
  </div>
</main>
    </>
  )
}

export default App
