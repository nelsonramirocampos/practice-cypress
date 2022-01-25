# practice-cypress

## Requisitos
- NodeJs
- Visual Studio Code (u otro IDE)
- Git (Opcional. Para clonar repositorio)

## Como crear un proyecto Cypress desde cero

Abrir una terminal, posicionarnos en una carpeta vacia y ejecutar el comando

>   npm init

lo cual iniciara un proyecto node desde cero.

Luego de crear el proyecto node, lo abrimos en un editor de codigo como Visual Studio Code.

En la terminar de nuestro IDE, ejecutamos el comando

>   npm install cypress --save-dev

que nos descargará la libreria Cypress para desarrollo.


## Como abrir el runner de Cypress

Los comandos para poder abrir el runner de Cypress

>   npx cypress open

ó

>   npm ./node_modules/.bin/cypress open


## Como clonar el repositorio
Para poder clonar el repositorio, se necesita tener instalado git en nuestro equipo.
Si ya tenemos instalado git, usamos el comando:

>   git clone https://github.com/nelsonramirocampos/practice-cypress.git


## Instalar dependencias del proyecto
Una vez descargado el proyecto, se necesita descargar las dependencias aclaradas en el archivo cypress.json, eso lo hacemos mediante el comando:
>   npm install


## Estructura del proyecto
### Carpeta integration --> Se colocan los Casos De Prueba


## Localizador de elemento (path locator)
Para contrar un elemento dentro de una pagina se necesita la ruta. Se puede encontrar mediante los atributos/propiedades del elemento en cuestion:
 - CSS
	 - ID --> #password
	 - CLASS --> .userName

-	XPath
	-	Relativa --> //a[@aria-label='Visitar Pediaa.Com’] 
	-	Absolute --> /html[1]/body[1]/div[2]/c-wiz[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[3]/div[2]/c-wiz[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/img[1]

Cypress, no soporta la localización del elemento por XPath, por lo cual, podemos instalar la libreria cypress-xpath y colocar en dicho archivo con los test **require('cypress-xpath')** y en vez de usar el command **cy.get('ruta')** se usa **cy.xpath('ruta_xpath')**