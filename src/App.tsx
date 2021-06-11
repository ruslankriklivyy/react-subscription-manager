import React from 'react';
import { useStore } from 'effector-react';
import { TopSubs, SubsCategory, SubsItems, AddModal } from './components';
import { $isVisibleModal } from './store/store';

function App() {
  const visible = useStore($isVisibleModal);

  return (
    <div className="app">
      <div className="container">
        <AddModal visible={visible} />
        <div className="box">
          <div className="left-section">
            <TopSubs />
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
