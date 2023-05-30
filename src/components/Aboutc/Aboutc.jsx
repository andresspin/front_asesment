import React from 'react';
import './aboutc.scss';

const Aboutc = () => {
  return (
    <div>
      <h2>About Page</h2>
      <p>
        <strong>Nombre:</strong> Andres Espinosa
      </p>
      <p>
        <strong>Descripción:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida
        fringilla sapien, at consequat turpis sodales et. Duis bibendum justo a hendrerit condimentum.
      </p>
      <img src="ruta-a-tu-imagen" alt="Imagen de perfil" />
      <p>
        <strong>Lista de 3 cosas que he aprendido en este programa:</strong>
      </p>
      <ul>
        <li>Conceptos fundamentales de React</li>
        <li>Manejo del estado y los ciclos de vida en React</li>
        <li>Uso de herramientas y bibliotecas complementarias de React, como React Router y Redux</li>
      </ul>
      <p>
        <strong>Correo:</strong> andresspin80@gmail.com
      </p>
      <p>
        <strong>Link a tu Github:</strong>{' '}
        <a href="https://github.com/andresspin/front_asesment">https://github.com/andresspin/front_asesment</a>
      </p>

      <h2>Preguntas</h2>
      <ol>
        <li>
          <strong>¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?</strong>
          <br />
          Las ceremonias más importantes de un Sprint son:
          <ul>
            <li>Reunión de planificación del Sprint: Se define el objetivo y se seleccionan las historias a incluir.</li>
            <li>Daily Scrum: Reunión diaria donde el equipo comparte su progreso y establece los planes para el día.</li>
            <li>Revisión del Sprint: El equipo muestra el trabajo completado y se recopilan comentarios.</li>
            <li>Retroalimentación del Sprint: El equipo reflexiona sobre el Sprint y planifica mejoras para el próximo.</li>
          </ul>
        </li>
        <li>
          <strong>¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.</strong>
          <br />
          Los wireframes son representaciones visuales de la estructura y el diseño de una interfaz de usuario. Pueden
          ser bocetos a mano o diseños digitales que ayudan a planificar la disposición de los elementos en una página.
          Algunas herramientas populares para crear wireframes son Figma, Sketch y Adobe XD.
        </li>
        <li>
          <strong>Explicar la diferencia entre let, const y var. Y dar un ejemplo en qué caso se utilizará.</strong>
          <br />
          - `let` se utiliza para declarar variables que pueden ser reasignadas dentro de su alcance. Se recomienda
          utilizar `let` cuando necesitas una variable que cambiará su valor en algún momento.
          <br />
          - `const` se utiliza para declarar variables con un valor constante. No se puede reasignar después de la
          inicialización. Se recomienda utilizar `const` cuando necesitas una variable cuyo valor no cambiará.
          <br />
          - `var` es la forma más antigua de declarar variables en JavaScript. A diferencia de `let` y `const`, `var`
          tiene un alcance de función en lugar de un alcance de bloque. No se recomienda su uso en código moderno.
          <br />
          
        </li>
        <li>
          <strong>¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?</strong>
          <br />
          Los tres comandos para crear una nueva rama llamada `rama-1` son:
          <ul>
            <li>git branch rama-1</li>
            <li>git checkout -b rama-1</li>
            <li>git switch -c rama-1</li>
          </ul>
        </li>
        <li>
          <strong>Explicar la diferencia entre git merge y git rebase.</strong>
          <br />
          - `git merge` combina los cambios de una rama en otra. Crea un nuevo commit con el contenido combinado de las
          ramas fusionadas.
          <br />
          - `git rebase` mueve o combina una secuencia de commits en una nueva base. Reescribe el historial de commits y
          crea nuevos commits para cada commit movido.
        </li>
        <li>
          <strong>¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?</strong>
          <br />
          - Un Pull Request (PR) es una solicitud de integración de cambios en un repositorio. Se utiliza para revisar y
          discutir los cambios antes de fusionarlos en la rama principal.
          <br />
          - `git pull` es un comando de Git que obtiene los cambios más recientes de un repositorio remoto y los fusiona
          automáticamente en la rama local actual.
        </li>
        <li>
          <strong>¿Qué es el Virtual DOM?</strong>
          <br />
          El Virtual DOM (DOM virtual) es una representación ligera y eficiente de la estructura de un DOM real en la
          memoria. Permite a las bibliotecas y frameworks de JavaScript, como React, realizar cambios eficientes en el
          árbol de elementos del DOM sin manipular directamente el DOM real en el navegador. El Virtual DOM compara la
          representación virtual con la actual y aplica solo los cambios necesarios, lo que mejora el rendimiento y la
          eficiencia de las aplicaciones.
        </li>
      </ol>

     
    </div>
  );
};

export default Aboutc;
