import { Link } from "react-router-dom";

export function ProjectsEN() {
    return (
            <main>
  <p className="text" style={{ textAlign: "left" }}>
    <Link to="/AppEn" style={{ textDecoration: "none", color: "white" }}>
      &lt;-- Back
    </Link>
  </p>
  <h1 className="text" style={{ fontSize: 40 }}>
    My Projects
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
      <span className="kol">Hosting Where I'm admin)</span>
    </a>
    <Link
      to="/"
      style={{ textDecoration: "none" }}
      className="item"
    >
      This site)
      <br />
      <br />
      <br />
      <br />
      <span className="kol">
        Yes, (idk what whrite this, lol)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    </Link>
    <a
      href="https://rafcha.pw/"
      style={{ textDecoration: "none" }}
      className="item"
    >
      The list will be updated)
      <br />
      <br />
      <br />
      <br />
      <span className="kol">Yes</span>
    </a>
  </div>
</main>
    )
}