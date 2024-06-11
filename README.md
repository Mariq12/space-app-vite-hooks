# <p align="center">SPACE-APP-VITE-HOOKS</p>

Proyecto React + Vite realizado en dos cursos:

<p>
  <img src="https://img.shields.io/badge/PARTE 1-brightgreen?style=for-the-badge" alt="Completado">
</p>

![Completado](https://img.shields.io/badge/status-completado-brightgreen) 

+ ✔️  **Curso de React: Styled Components y manipulando archivos estáticos.**

*Nota:*

En este curso se realizó toda la estructura del proyecto, donde incluye el uso de Styled Components y manipulación de estilos estáticos.
### Ver Demo

![space-app-vite](https://github.com/Mariq12/space-app-vite/assets/101030215/eac4b4bf-cb1d-4a90-bd51-80ba471c1163)

Ver Demo en [Vercel](https://space-app-vite-two.vercel.app/)

Ir al repositorio de [GitHub](https://github.com/Mariq12/space-app-vite)

---

<p>
<img src="https://img.shields.io/badge/PARTE%202-red?style=for-the-badge" alt="PARTE 2">
</p>


![En proceso](https://img.shields.io/badge/status-en_proceso-red)
 + ⏳ **Curso de Hooks en ReactJS: conociendo su potencial y utilidad.**

## <p align="center">PARTE 2</p>
## Descripción

En este proyecto se aplican las funciones que React nos ofrece, conocidas como HOOKS. Desde la gestión del estado hasta el acceso al DOM virtual, la gestión del ciclo de vida del componente y cómo optimizar las aplicaciones. Además, se profundiza en el estado global y se crean HOOKS personalizados.

## Características del Proyecto
+ Conocimiento de Hooks de ReactJS.
+ Gestión del Estado con useState.
+ Acceso al DOM Virtual con useRef.
+ Comprensión del ciclo de Vida con useEffect.
+ Implementación de estados globales con contextAPI.
+ Utilización de useReducer en Aplicaciones Complejas.
+ Construcción de Hooks Personalizados.


## Iniciar el proyecto
Ejecutar:

    npm run dev

### Opcional
En el script del package.json se agrega `start` 

        "scripts": {
        "start": "vite",
        "dev": "vite",
        },

Se ejecuta el proyecto con:

     npm start
Inicia el proyecto en [http://localhost:5173/](http://localhost:5173/) 

## Hooks
### useSate
Está relacionado al state o al estado del componente, las aplicaciones hechas en React, son reactivas, es decir reaccionan a estímulos o eventos, de tal manera que cuando hablamos de estado, nos referimos a la situación de la aplicación.

    //Definición de un estado
    const [estado, setEstado] = useState(<valor inicial>);

    const [filter, setFilter] = useState('');

### useRef
Tiene dos propósitos: 
1. Almacenar valores mutables (valores que cambian en el tiempo) que no deben generar una nueva renderización cuando se actualizan.
2. Almacenar referencias a elementos del DOM.

        const myRef = useRef();

        const filterBox = useRef(null);

Se obtiene un objeto myRef, el cual permite almacenar valores y acceder a ellos. Para usar la variable myRef con cualquier elemento, la pasamos como la prop ref del elemento.

    <div ref={myRef}>Este div lo accesamos con useRef</div>

## Errores
1. Distinguia mayúsculas y minúsculas
    ### Solución
    Utilización de:

        toLowerCase

    Resultado:

    No distingue entre mayúsculas y minúsculas.

2. No permite buscar imágenes si el nombre tiene tilde.
    ### Solución
    Utilización de:

        toLocaleLowerCase

    Convierte una cadena a minúsculas considerando las reglas específicas de la configuración regional del idioma, soluciona problemas de conversión a minúsculas en idiomas con *reglas particulares*.

    Resultado:

    Permite buscar sin importar las diferencias de mayúsculas y minúsculas

        normalize

    Normaliza cadenas de texto para realizar una búsqueda más robusta que ignore diacríticos y caracteres especiales.

    Se emplea en Gallery:

        <ImageContainer>
            {photos.filter(photo => {
              return filter === '' || photo.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
                  .includes(filter.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""))
            })
              .map(photo => (<Image
                  toggleFavorite={toggleFavorite}
                  requestZoom={selectPhoto}
                  key={photo.id}
                  photo={photo} />))}
        </ImageContainer>

    Resultado:

    Permte buscar sin tener que agregar la tilde .

## Intalación
### Opcional
1. Instalación del paquete de **[React-Loaders-Kit](https://seimodei.github.io/react-loaders-kit-examples/)**, ejecuando en cmd dentro del proyecto:

    npm i --save react-loaders-kit

2. Creación del componente Loading.
3. Conectar en el App.jsx.

## Tecnologias
* [React + Vite](https://vitejs.dev/guide/)
* JavaScript
