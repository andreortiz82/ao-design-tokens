import { useState, useEffect } from "react";

import {
  foundation,
  semantic,
  size,
  typography,
  effects,
} from "./assets/tokens";

const Toast = () => {
  return (
    <div className="fixed top-4 right-4 bg-black text-white px-4 py-2 rounded shadow-lg">
      Copied to clipboard
    </div>
  );
};

const TokenTable = (props) => {
  const { title, data, type, hash } = props;
  const [toastMessage, setToastMessage] = useState(null);
  const copyToken = (value) => {
    console.log(value);
    navigator.clipboard.writeText(value);
    setToastMessage(true);
    setTimeout(() => {
      setToastMessage(null);
    }, 1000);
  };

  return (
    <article className="flex flex-col gap-4 ">
      {toastMessage && <Toast />}
      <h2 className="text-3xl" id={hash}>
        {title}
      </h2>
      <table className="table-auto w-full">
        <thead className="text-left">
          <th className="p-2 bg-slate-200">Token</th>
          <th className="p-2 bg-slate-200">Value</th>
        </thead>
        <tbody>
          {Object.keys(data).map((key) => {
            return (
              <tr key={key} className="even:bg-slate-100">
                <td
                  onClick={() => copyToken(`var(--${key})`)}
                  className="p-2 font-mono cursor-pointer hover:underline"
                >{`var(--${key})`}</td>
                <td
                  className="p-2 cursor-pointer hover:underline"
                  onClick={() => copyToken(data[key])}
                >
                  <div className="flex gap-2 items-center">
                    <span
                      className="w-10 h-10 rounded-md"
                      style={{ background: data[key] }}
                    ></span>
                    <span className="font-mono">{data[key]}</span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
};

function App() {
  return (
    <main className="w-3/4 m-auto">
      <header className="sticky top-0 pb-8 pt-4 bg-white/80 flex justify-between items-center">
        <a href="/">
          <h1 className="text-3xl font-bold">AO Design Tokens</h1>
        </a>
        <nav className="flex gap-6">
          <a href="#light">Foundation Light</a>
          <a href="#dark">Foundation Dark</a>
          <a href="#semantic">Semantic</a>
          <a href="#size">Size</a>
          <a href="#typography">Typography</a>
          <a href="#effects">Effects</a>
        </nav>
      </header>
      <section className="flex flex-col gap-4">
        <TokenTable
          title="Foundation Light"
          data={foundation.light}
          type="foundation"
          hash="light"
        />
        <TokenTable
          title="Foundation Dark"
          data={foundation.dark}
          type="foundation"
          hash="dark"
        />
        <TokenTable
          title="Semantic"
          data={semantic}
          type="semantic"
          hash="semantic"
        />
        <TokenTable title="Size" data={size} type="size" hash="size" />
        <TokenTable
          title="Typography"
          data={typography}
          type="typography"
          hash="typography"
        />
        <TokenTable
          title="Effects"
          data={effects}
          type="effects"
          hash="effects"
        />
      </section>
    </main>
  );
}

export default App;
