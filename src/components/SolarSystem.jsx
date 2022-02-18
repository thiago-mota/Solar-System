import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planets.map(({ name, image }) => (
          <PlanetCard
            key={ name }
            planetName={ name }
            planetImage={ image }
          />))}
      </div>
    );
  }
}

export default SolarSystem;

// https://stackoverflow.com/questions/56758570/eslint-error-missing-parentheses-around-multilines-jsx-react-jsx-wrap-multiline