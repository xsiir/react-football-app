import React from 'react';
import TeamsTable from './components/TeamsTable';

function  MainApplication() {
  return (
    <div className="container">
      <header className="App-header">
        <p>
        Wybierz interesujaca Cie lige
        </p>
        <TeamsTable></TeamsTable>
      </header>
    </div>
  );
}

export default MainApplication;
