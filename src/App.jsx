import { React } from "react";
import style from "./App.module.css";
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";
import { Sidebar } from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

import { trafficStateModule } from './recoil/traffic'

function App() {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <div className={style.container}>
        <AppHeader 
          title="ヘッダー"
          forward={trafficStateModule.increment}
          back={trafficStateModule.decrement}
        />
        <div className={style.mainarea}>
          <main className={style.main}>
            <Outlet />
          </main>
          <aside className={style.sidebar}>
            <Sidebar />
          </aside>
        </div>
        <AppFooter />
      </div>
    </RecoilRoot>
  );
}

export default App;
