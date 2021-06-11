import React from 'react';
import { TopSubs, SubsCategory, SubsItems, AddModal, UserInfo } from './components';

function App() {
  return (
    <div className="app">
      <div className="container">
        <AddModal />
        <div className="box">
          <div className="left-section">
            <TopSubs />
            <div className="subs">
              <SubsCategory />
              <SubsItems />
            </div>
          </div>
          <div className="right-section">
            <UserInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
