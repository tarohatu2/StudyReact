import { React } from "react";
import style from "./App.module.css";
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className={style.container}>
      <AppHeader title="ヘッダー" />
      <div className={style.mainarea}>
        <main className={style.main}>
          <Outlet />
        </main>
        <aside className={style.sidebar}>
          aaaaaaa
        </aside>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
