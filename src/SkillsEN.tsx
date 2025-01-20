import { Link } from 'react-router-dom'
import './App.css'

export function SkillsEN() {
    return (
        <>
            <main>
  <p className="text" style={{ textAlign: "left" }}>
    <Link to="/AppEn" style={{ textDecoration: "none", color: "white" }}>
      &lt;-- Back
    </Link>
  </p>
  <h1 className="text" style={{ fontSize: 40 }}>
    My skills
  </h1>
  <div className="container">
  <a
      href="https://elysiajs.com/"
      style={{ textDecoration: "none" }}
      className="item"
    >
      🦊 Elysia
      <br />
      <br />
      <br />
      <br />
      <span className="kol">
      js framework for the backend, but faster and more convenient than Express<span className="red"> (Not using it yet)</span>
      </span>
    </a>
    <a
      href="https://expressjs.com/"
      style={{ textDecoration: "none" }}
      className="item"
    >
      ✖ Express
      <br />
      <br />
      <br />
      <br />
      <span className="kol">node.js framework for backend<span className="red"> (Not using it yet)</span></span>
    </a>
    <a
      href="https://nodejs.org/en"
      style={{ textDecoration: "none" }}
      className="item"
    >
      <span style={{ color: "greenyellow" }}>JS</span> node.js <br />
      <br />
      <br />
      <br />
      <span className="kol">
      JS backend framework from which others have already taken their cues<span className="green"> (using)</span>
      </span>
    </a>
    <a
      href="https://react.dev/"
      style={{ textDecoration: "none" }}
      className="item"
    >
      ⚛ React
      <br />
      <br />
      <br />
      <br />
      <span className="kol">
      js framework for the frontend, from which next has already come<span className="green"> (I use it (for websites only)))</span>
      </span>
    </a>
    <a
      href="https://nextjs.org/"
      style={{ textDecoration: "none" }}
      className="item"
    >
      <span style={{ color: "black" }}>N</span> Next(14)
      <br />
      <br />
      <br />
      <br />
      <span className="kol">Already React framework for the frontend<span className="red"> (Not using it yet)</span></span>
    </a>
    <a
      href="https://javascript.com/"
      style={{ textDecoration: "none" }}
      className="item"
    >
      <span style={{ color: "yellow" }}>JS</span> JavaScript
      <br />
      <br />
      <br />
      <br />
      <span className="kol">
      Web programming language, queen of all web frameworks)<span className="red"> (Not using it yet)</span>
      </span>
    </a>
    <a
      href="https://www.typescriptlang.org/"
      style={{ textDecoration: "none" }}
      className="item"
    >
      <span style={{ color: "rgb(0, 162, 255)" }}>TS</span> TypeScript
      <br />
      <br />
      <br />
      <br />
      <span className="kol">JS based programming language<span className="green"> (using)</span></span>
    </a>
    <a
      href="https://www.python.org/"
      style={{ textDecoration: "none" }}
      className="item"
    >
      🐍 Python
      <br />
      <br />
      <br />
      <br />
      <span className="kol">The most beloved and most hated language<span className="green"> (using)</span></span>
    </a>
    <a
      href="https://www.rust-lang.org/ru"
      style={{ textDecoration: "none" }}
      className="item"
    >
      🦀 Rust (and axum with tokio))
      <br />
      <br />
      <br />
      <br />
      <span className="kol">Just a cool language :)<span className="green"> (using)</span></span>
    </a>
    <a
      href="https://learn.microsoft.com/ru-ru/cpp/c-language/?view=msvc-170"
      style={{ textDecoration: "none" }}
      className="item"
    >
      <span className="gcc">С</span>
      <br />
      <br />
      <br />
      <br />
      <span className="kol">Language, old<span className="red"> (Not using it yet)</span></span>
    </a>
    <a
      href="https://learn.microsoft.com/ru-ru/dotnet/csharp"
      style={{ textDecoration: "none" }}
      className="item"
    >
      <span className="gcc">С#</span>
      <br />
      <br />
      <br />
      <br />
      <span className="kol">Language I'm learning for gamedev<span className="yellow"> (Learning)</span></span>
    </a>
  </div>
</main>
        </>
    )
}