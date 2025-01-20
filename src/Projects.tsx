import { Link } from "react-router-dom";

export function Projects() {
    return (
            <main>
  <p className="text" style={{ textAlign: "left" }}>
    <Link to="/" style={{ textDecoration: "none", color: "white", }}>
      &lt;-- Вернуться
    </Link>
  </p>
  <h1 className="text" style={{ fontSize: 40 }}>
    Мои Проекты
  </h1>
  <div className="container">
    <a
      href="https://kolama.de/"
      style={{ textDecoration: "none" }}
      className="item"
    >
      <span style={{ color: "#181818" }}>K</span> Kolama
      <br />
      <br />
      <br />
      <br />
      <span className="kol">Хостинг где я админ)</span>
    </a>
    <Link
      to="/"
      style={{ textDecoration: "none" }}
      className="item"
    >
      Этот сайт)
      <br />
      <br />
      <br />
      <br />
      <span className="kol">
        Ну, да (Мега неоптимизрованный кал)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    </Link>
    <a
      href="https://rafcha.pw/"
      style={{ textDecoration: "none" }}
      className="item"
    >
      Список будет пополняться)
      <br />
      <br />
      <br />
      <br />
      <span className="kol">Да</span>
    </a>
  </div>
</main>
    )
}