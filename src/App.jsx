import { useState } from 'react';
import data from './data/data.json';

function App() {
  const [activeTab, setActiveTab] = useState(data[0]?.id || 0);

  const clickHandler = (id) => {
    setActiveTab(id);
  }

  return (
    <>
      <div className="container">
        <h2 className="title">Tabs System</h2>
        <p className="sub-title">
          Click on each tab to read it's content! 😊
        </p>
        <div className="tabs">
          <div className="tab-buttons">
            {
              data.map(tab => <h3 key={tab.id} className={tab.id === activeTab ? 'active' : ''}
              onClick={() => clickHandler(tab.id)}> {tab.title} </h3>)
            }
          </div>
          <div className="tab-content">
            {
              data.map(tab => (
                  <div key={tab.id} className={tab.id === activeTab ? 'active' : ''}>
                    <h4>{tab.title}</h4>
                    <p>
                      {tab.content}
                    </p>
                  </div>
              ))
            }
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
