import { Link } from 'react-router-dom'
import './App.css'

export function Skills() {
    return (
        <>
            <main>
  <p className="text" style={{ textAlign: "left" }}>
    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
      &lt;-- Вернуться
    </Link>
  </p>
  <h1 className="text" style={{ fontSize: 40 }}>
    Мои знания
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
        js фреймворк для бэкенда, но быстрее и удобнее express<span className="red"> (Пока не использую)</span>
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
      <span className="kol">node.js фреймворк для бэкенда<span className="red"> (Пока не использую)</span></span>
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
        JS бэкенд фреймворк, от которого уже пошли остальные<span className="red"> (Пока не использую)</span>
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
        js фреймворк для фронтенда, от которого уже пошёл next<span className="green"> (Использую(для сайтиков только)))</span>
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
      <span className="kol">Уже React фреймворк для фронтенда<span className="red"> (Пока не использую)</span></span>
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
        Язык программирования для веба, царица всех веб фреймворков)<span className="red"> (Пока не использую)</span>
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
      <span className="kol">Язык программированя основанный на JS<span className="green"> (Использую)</span></span>
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
      <span className="kol">Самый любимый и многими ненавистный язык<span className="green"> (Использую)</span></span>
    </a>
    <a
      href="https://www.rust-lang.org/ru"
      style={{ textDecoration: "none" }}
      className="item"
    >
      🦀 Rust (и axum с tokio))
      <br />
      <br />
      <br />
      <br />
      <span className="kol">Просто крутой язык :)<span className="green">(Использую)</span></span>
    </a>
    <a
      href="https://learn.microsoft.com/ru-ru/cpp/c-language/?view=msvc-170"
      style={{ textDecoration: "none" }}
      className="item"
    >
      <span className="gcc">С</span> Си
      <br />
      <br />
      <br />
      <br />
      <span className="kol">Язык, очень старый<span className="red"> (Пока не использую)</span></span>
    </a>
    <a
      href="https://learn.microsoft.com/ru-ru/dotnet/csharp"
      style={{ textDecoration: "none" }}
      className="item"
    >
      <span className="gcc">С#</span> Си Шарп
      <br />
      <br />
      <br />
      <br />
      <span className="kol">Язык, учу для геймдева<span className="yellow"> (Учу)</span></span>
    </a>
  </div>
</main>
        </>
    )
}