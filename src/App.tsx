import React from 'react';
import { AddModal } from './components/AddModal';
import { SubsCategory } from './components/SubsCategory';
import { SubsItems } from './components/SubsItems';
import { TopSubs } from './components/TopSubs';
import { UserInfo } from './components/UserInfo';

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
