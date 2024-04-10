const filterByMode = (data, mode) => {
  return Object.keys(data).reduce((acc, key) => {
    if (key.includes(mode)) {
      acc[key] = data[key];
    }
    return acc;
  }, {});
};

const TokenTable = (props) => {
  const { title, data, type } = props;

  return (
    <div className="TokenTable">
      <h2>{title}</h2>
      <table>
        <thead>
          <th>Token</th>
          <th>Value</th>
        </thead>
        <tbody>
          {type === "foundation"
            ? Object.keys(data).map((key) => {
                return (
                  <tr key={key}>
                    <td>{`var(--${key
                      .replace("light-", "")
                      .replace("dark-", "")})`}</td>
                    <td>
                      <div className="foundation-swatch">
                        <span
                          className="swatch"
                          style={{ background: data[key] }}
                        ></span>
                        <span>{data[key]}</span>
                      </div>
                    </td>
                  </tr>
                );
              })
            : Object.keys(data).map((key) => {
                return (
                  <tr key={key}>
                    <td>{`var(--${key})`}</td>
                    <td>{data[key]}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

const Gallery = () => {
  return (
    <div>
      <h1>AO Design Tokens</h1>
      <p>
        A collection of design tokens for the AO design system. These tokens
        support light and dark mode and are based on the{" "}
        <a target="_blank" href="https://www.radix-ui.com/colors">
          Radix Color System.
        </a>
        <ol>
          <li>
            To get started, install the package from npm:
            <pre>
              <code>npm install ao-design-tokens</code>
            </pre>
          </li>
          <li>
            Import the tokens in your project:
            <pre>
              <code>@import "ao-design-tokens";</code>
            </pre>
          </li>
          <li>
            Use the tokens in your CSS:
            <pre>
              <code>
                .my-element &#123; <br />
                &nbsp;&nbsp;background-color: var(--colors-pink-9); <br />
                &nbsp;&nbsp;color: var(--color-primary); <br />
                &#125;
              </code>
            </pre>
          </li>
        </ol>
      </p>

      <TokenTable
        title="Foundation Light"
        data={filterByMode(window.foundation, "light-")}
        type="foundation"
      />
      <TokenTable
        title="Foundation Dark"
        data={filterByMode(window.foundation, "dark-")}
        type="foundation"
      />
      <TokenTable title="Semantic" data={window.semantic} type="semantic" />
      <TokenTable title="FX" data={window.fx} type="fx" />
      <TokenTable title="Size" data={window.size} type="size" />
      <TokenTable
        title="Typography"
        data={window.typography}
        type="typography"
      />
    </div>
  );
};

// Render the component to the DOM
ReactDOM.render(<Gallery />, document.getElementById("root"));
