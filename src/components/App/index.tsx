import * as React from "react";

const App: React.FC = () => (
  <>
      <div className="section is-large ">
        <div className="container is-max-desktop">
          <div className="columns">
              <div className="column">1</div>
              <div className="column">
                  <h1 className="title">Calculate</h1>
                  <div className="field">
                    <input className="input is-rounded" type="text" placeholder="Primary input"/>
                  </div>
                  <div className="field">
                      <input className="input is-rounded" type="text" placeholder="Primary input"/>
                  </div>
                  <div className="field">
                      <input className="input is-rounded" type="text" placeholder="Primary input"/>
                  </div>
              </div>
          </div>
        </div>
      </div>
  </>
);

export default App;
