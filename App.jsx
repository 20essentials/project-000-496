import React, { StrictMode, useEffect, useState } from "react";
import { render } from "react-dom";
import ecsstatic from "ecsstatic";

const styles = ecsstatic.css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
  }
  a {
    -webkit-tap-highlight-color: transparent;
  }
  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: white transparent;
  }
  body {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
  }
  h1 {
    position: relative;
    font-size: 10vw;
  }
`;

const words = ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "REACT"];

function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return <h1>{words[index]}</h1>;
}

const root = document.createElement("div");
document.body.appendChild(root);

render(
  <StrictMode>
    <div css={styles}>
      <App />
    </div>
  </StrictMode>,
  root
);

export default App;
