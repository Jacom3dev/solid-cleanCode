(() => {

    // función para obtener información de una película por Id
    function getAllMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    interface IMovie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }
    function createMovie(movie:IMovie ) {
        console.log(movie);
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthDate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        if ( isDead ) return 1500;
        
        if ( isSeparated )  return 2500;

        if ( isRetired ) return 3000;

        return 4000; 
    }


})();