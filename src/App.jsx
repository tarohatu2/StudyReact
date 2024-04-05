import { React } from "react";
import style from "./App.module.css";
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";
function App() {
  return (
    <div className={style.container}>
      <AppHeader title="ヘッダー" />
      <main>
        <section></section>
      </main>
      <aside></aside>
      <AppFooter />
    </div>
  );
}

export default App;
