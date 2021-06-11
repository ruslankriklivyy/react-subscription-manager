import React from 'react';
import { TopSubs, SubsCategory, SubsItems, AddModal } from './components';

function App() {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="app">
      <div className="container">
        <AddModal visible={visible} />
        <div className="box">
          <div className="left-section">
            <TopSubs setVisible={setVisible} />
            <div className="subs">
              <SubsCategory />
              <SubsItems />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
