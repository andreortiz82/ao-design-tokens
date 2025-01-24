const filterByMode = (data, mode) => {
  return Object.keys(data).reduce((acc, key) => {
    if (key.includes(mode)) {
      acc[key] = data[key];
    }
    return acc;
  }, {});
};

const TokenTable = (props) => {
  const { title, data, type, hash } = props;

  return (
    <article className="TokenTable">
      <h2 id={hash}>{title}</h2>
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
    </article>
  );
};

const Gallery = () => {
  return <section className="Gallery">Gallery HERE</section>;
};

// Render the component to the DOM
ReactDOM.render(<Gallery />, document.getElementById("root"));
