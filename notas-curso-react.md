# Sección 4

## 37
    1. React debe retornar solo un nodo padre */}
## 38 
    1. Ingresar JS excepto objetos se coloca entre {}
    2. Si el valor no cambiara, ni esta relacionado con HOOKS no va dentro la función
        JSON.stringify para mirar el objeto 
    3. Promesas son objetos
    4. Funciones async no pueden renderizarse

## 40
    1. props => "propetypes"
    2. Pasa de un componente padre a uno hijo como params

## 41
    1. propTypes => se utiliza para definir el tipo a las props
    2. sigue propTypes personalizables

    3. propTypes 
    FirtsApp.propTypes = {
        title: PropTypes.string.isRequired
    }
    -string     => requiere string
    -isRequired => indica que sera obligatorio
   
## 42
    1. DefaultProps

## 45
    1. Los hooks se utilizan con constantes para evitar alterar su valor

# Sección 5

## 50
    1. Pruebas unitarias      : Pequeñas funciones
    2. Pruebas de integración : Enfocadas en cómo reaccionan a varias piezas en conjunto


## 83
    useEffect( () => {
        getGifs(category);
    }, [  ] );   Si el array queda vacío se ejecutara una sola vez

    1. Se ejecutará después de que el renderizado es confirmado en la pantalla.