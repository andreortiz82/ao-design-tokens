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
    <article className="flex flex-col gap-4" id={hash}>
      {toastMessage && <Toast />}
      <h2 className="text-3xl">{title}</h2>
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

export const Logo = ({ alt }) => {
  const style = "dark:fill-zinc-100 fill-zinc-900";

  return (
    <div className="w-[80px]" title={alt}>
      <svg
        className="w-full h-full"
        width="100"
        height="50"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={style}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.169 0L56.338 49.2537H0L28.169 0ZM13.2639 41.5578L28.169 15.4962L43.0741 41.5578H13.2639Z"
        />
        <path
          className={style}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100 24.6269C100 38.2279 88.9648 49.2537 75.3521 49.2537C61.7395 49.2537 50.7042 38.2279 50.7042 24.6269C50.7042 11.0258 61.7395 0 75.3521 0C88.9648 0 100 11.0258 100 24.6269ZM92.3077 24.6269C92.3077 33.968 84.726 41.5578 75.3521 41.5578C65.9782 41.5578 58.3965 33.968 58.3965 24.6269C58.3965 15.2857 65.9782 7.6959 75.3521 7.6959C84.726 7.6959 92.3077 15.2857 92.3077 24.6269Z"
        />
      </svg>
    </div>
  );
};

function App() {
  return (
    <main className="w-3/4 m-auto">
      <header className="sticky top-0 pb-8 pt-4 bg-white/90 flex justify-between items-center">
        <a href="/ao-design-tokens/">
          <Logo alt={`AO Design Tokens`} />
        </a>
        <nav className="flex gap-6">
          <span className="text-slate-500">Token Groups</span>
          <a className="font-bold" href="#light">
            Foundation Light
          </a>
          <a className="font-bold" href="#dark">
            Foundation Dark
          </a>
          <a className="font-bold" href="#semantic">
            Semantic
          </a>
          <a className="font-bold" href="#size">
            Size
          </a>
          <a className="font-bold" href="#typography">
            Typography
          </a>
          <a className="font-bold" href="#effects">
            Effects
          </a>
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
