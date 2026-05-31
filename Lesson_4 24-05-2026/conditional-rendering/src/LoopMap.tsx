function LoopMap() {
  const moviesList = [
    "Spiderman 2: The End",
    "Matrix 4",
    "Titanic",
    "Starwars",
  ];

  //   const moveisToRender = [];

  //   for (let i = 0; i < moviesList.length; ++i) {
  //     moveisToRender.push(<li>{moviesList[i]}</li>);
  //   }

  return (
    <div>
      <h2> Loop Map Componenet</h2>
      {/* <ul>{moveisToRender}</ul> */}
      <ul>
        {moviesList.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default LoopMap;
