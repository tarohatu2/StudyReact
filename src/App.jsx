import { React } from "react";
import style from "./App.module.css";
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className={style.container}>
      <AppHeader title="ヘッダー" />
      <main>
        <Outlet />
      </main>
      <aside></aside>
      <AppFooter />
    </div>
  );
}

export default App;
