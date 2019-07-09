import React from 'react';
import seedColors from './seedColors';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import PaletteList from './PaletteList';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './colorHelper';
import './App.css';

function App() {
  const findGenPalette = id => generatePalette(seedColors.find(seed => seed.id === id));
  const findGenSingle = (paletteId, colorId) => {
    const palette = generatePalette(seedColors.find(seed => seed.id === paletteId));
    return palette.colors.map(col => col.find(c => c.id === colorId));
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={rp => <PaletteList palettes={seedColors} {...rp} />} />
        <Route exact path="/palette/:id" render={rp => <Palette palette={findGenPalette(rp.match.params.id)} />} />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={rp => (
            <SingleColorPalette
              paletteId={rp.match.params.paletteId}
              shades={findGenSingle(rp.match.params.paletteId, rp.match.params.colorId)}
              emoji={findGenPalette(rp.match.params.paletteId).emoji}
              paletteName={findGenPalette(rp.match.params.paletteId).paletteName}
            />
          )}
        />
        <Route exact render={() => <h1>Not found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
