(() => {
  // función para obtener información de una película por Id
  function getMovieById(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getBioActorById(id: string) {
    console.log({ id });
  }

  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  // Crear una película
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log(title, description, rating, cast);
  }

  // Crea un nuevo actor
  function createActor(name: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (name === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  //Continuacion

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    return isRetired ? 3000 : 4000;
  };
})();
