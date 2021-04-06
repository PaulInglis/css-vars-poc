import React from 'react';
import { Color } from './color';

import './App.scss';

const App: React.FC = () => {

  const applyTheme = (primary: Color, secondary: Color, alt1: Color, alt2: Color, alt3: Color) => {
    const root = document.documentElement.style;

    root.setProperty("--brand-primary", primary.toHex());
    root.setProperty("--brand-secondary", secondary.toHex());
    root.setProperty("--alternative1", alt1.toHex());
    root.setProperty("--alternative2", alt2.toHex());
    root.setProperty("--alternative3", alt3.toHex());
  }

  const applyTheme1 = () => {
    const primary: Color = new Color("#335c67");
    const secondary: Color = new Color("#FFF3B0");
    const alt1: Color = new Color("#E09F3E");
    const alt2: Color = new Color("#9E2A2B");
    const alt3: Color = new Color("#540B0E");

    applyTheme(primary, secondary,alt1,alt2,alt3);
  }

  const applyTheme2 = () => {
    const primary: Color = new Color("#0e1e35");
    const secondary: Color = new Color("#587283");
    const alt1: Color = new Color("#F1EADD");
    const alt2: Color = new Color("#D7DCCC");
    const alt3: Color = new Color("#293C28");

    applyTheme(primary, secondary,alt1,alt2,alt3);
  }

  const applyTheme3 = () => {
    const primary: Color = new Color("#2C172A");
    const secondary: Color = new Color("#513944");
    const alt1: Color = new Color("#634646");
    const alt2: Color = new Color("#A99071");
    const alt3: Color = new Color("#D0BA84");

    applyTheme(primary, secondary,alt1,alt2,alt3);
  }

  const applyTheme4 = () => {
    const primary: Color = new Color("#7A6F66");
    const secondary: Color = new Color("#99C877");
    const alt1: Color = new Color("#E5C559");
    const alt2: Color = new Color("#EF8275");
    const alt3: Color = new Color("#DB4B51");

    applyTheme(primary, secondary,alt1,alt2,alt3);
  }

  const applyTheme5 = () => {
    const primary: Color = new Color("#FCC6E9");
    const secondary: Color = new Color("#D151AA");
    const alt1: Color = new Color("#A43765");
    const alt2: Color = new Color("#5B6595");
    const alt3: Color = new Color("#C04E9D");

    applyTheme(primary, secondary,alt1,alt2,alt3);
  }
  
  const applyTheme6 = () => {
    const primary: Color = new Color("#05415A");
    const secondary: Color = new Color("#129096");
    const alt1: Color = new Color("#CCE8B8");
    const alt2: Color = new Color("#EEC93E");
    const alt3: Color = new Color("#FD7309");

    applyTheme(primary, secondary,alt1,alt2,alt3);
  }

  return (
    <div className="App">
      <div>
        Below are the colours as set by the theme defintion.  Click the buttons to apply a new theme programatically
      </div>
      <div className="palette">
        <div className="primary-box">Primary <span></span></div>
        <div className="secondary-box">Secondary <span></span></div>
        <div className="alt1-box">Alt 1 <span></span></div>
        <div className="alt2-box">Alt 2 <span></span></div>
        <div className="alt3-box">Alt 3 <span></span></div>
      </div>
      <div className="controls">
        <button onClick={() => applyTheme1()}>Apply Theme 1</button>
        <button onClick={() => applyTheme2()}>Apply Theme 2</button>
        <button onClick={() => applyTheme3()}>Apply Theme 3</button>
        <button onClick={() => applyTheme4()}>Apply Theme 4</button>
        <button onClick={() => applyTheme5()}>Apply Theme 5</button>
        <button onClick={() => applyTheme6()}>Apply Theme 6</button>
      </div>
    </div>
  );
}

export default App;
