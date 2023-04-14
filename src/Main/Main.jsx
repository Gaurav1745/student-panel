import React ,{ useContext } from "react";
import Header from "../Components/HeaderTemplate/Header";
import Content from "../Content/Content";
import { ThemeContext } from "../ThemeContext";
import "./Main.css";

const Main = () => {
  const { DarkTheme } = useContext(ThemeContext);

  return (
    <div className={`main ${DarkTheme && "dark"}`}>
      <Header />
      <Content />
    </div>
  );
};

export default Main;
