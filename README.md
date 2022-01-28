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
### folder integration --> Se colocan los TC
### folder fixtures --> Se coloca la data para los TC

## Localizador de elemento (path locator)
Para contrar un elemento dentro de una pagina se necesita la ruta. Se puede encontrar mediante los atributos/propiedades del elemento en cuestion:
 - CSS
	 - ID --> #password
	 - CLASS --> .userName

-	XPath
	-	Relativa --> //a[@aria-label='Visitar Pediaa.Com’] 
	-	Absolute --> /html[1]/body[1]/div[2]/c-wiz[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[3]/div[2]/c-wiz[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/img[1]

Cypress, no soporta la localización del elemento por XPath, por lo cual, podemos instalar la libreria cypress-xpath y colocar en dicho archivo con los test **require('cypress-xpath')** y en vez de usar el command **cy.get('ruta')** se usa **cy.xpath('ruta_xpath')**

## Command Fixture
Permite leer los datos de un archivo dentro del folder fixtures.
### Si es un solo objeto
```
cy.fixture('sauceCredentials')
	.then(credentials => {
		cy.log(this.credentials)
})
```
### Si es un array de objetos
```
//test_data contiene el array con los objetos
const test_data = require('../../fixtures/ sauceCredentials.json')

//Como test_data es un array, podemos usar el ciclo forEach
//test, es una variable que contendra cada elemento del array
test_data.forEach(test => {
	it(‘nombre del test’, () => {
		cy.log(test.username)
	})
})
```

## Cypress-Cucumber
Para poder utilizar Cucumber con Cypress, debemos instalar la librera con el comando
 > npm install --save-dev cypress-cucumber-preprocessor
Luego, debemos configurar cypress para que reconozca a cucumber
- Agregar en cypress/plugins/index.js
```
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
``` 
- Agregar en cypress.json
```
"testFiles": "**/*.feature“ //Para visualizar únicamente los archivos .feature
``` 
- Agregar en package.json
```
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
``` 
Finalizada la configuración, se recomienda descargar el plugin Cucumber (Gherkin) Full Support en Visual Studio Code para que reconozca y ayude en la manuplación de archivos .feature

### Restricción
Para que la libreria reconozca la definición de los pasos, dicha definición de pasos debe estar en una carpeta con exactamente el mismo nombre del archivo .feature, por ejemplo
Google.feature 
./Google/definicion-pasos.js
Tanto el archivo feature como la carpeta con el archivo de la definicion de pasos, deben estar en la carpeta de cypress/integration

### Reutilizar pasos
Para poder re-utilizar pasos entre los distintos features, debemos crear la definición del paso en un archivo .js. El autor nos recomienda que el nombre del archivo sea el mismo del paso y que se guarde en integration/common, por ejemplo:
```
// Google.feature
Feature: Navegacion Google
  Scenario: Validar logo Google
	Given en la pagina "www.google.com"
	Then visualizo el logo de Google
```
```
// Facebook.feature
Feature: Navegacion Facebook

Scenario: Validar logo Facebook
    Given en la pagina "www.facebook.com"
	Then observo la pagina principal
```
El paso en comun es Given en la pagina "URL", por lo tanto, debemos crear en la carpeta integration/common el archivo con el nombre (sugerido) en_la_pagina_string.js y dentro colocar
```
import { Given } from "cypress-cucumber-preprocessor/steps";

Given('en la pagina {string}', (url) => {
    cy.visit(url)
})
```

### Tags (etiqueta)
Muchas veces, necesitamos ejecutar ciertos TC, tanto desde el Runner como desde línea de comandos, por lo cual, recurríamos a las Tags (Etiquetas)
Tenemos distintas formas de configurarlo
- Archivo cypress.json

  Agregamos en el archivo cypress.json
```
"env":{
	"TAGS": "@Simple"
}
```
Eso logrará que cada vez que ejecutemos npm cypress run o npm cypress open, solo podamos ejecutar los scenarios que tengan la etiqueta @Simple
- Desde comandos
Podemos ejecutar el comando

 	> npx cypress-tags run -e 
 TAGS='@Simple'

	Ocurrira el mismo efecto que escribirlo en el archivo cypress.json, pero con al diferencia, que podremos realizarlo en forma dinamica.

#### NOTA
Al utilizar cypress-tags consegiremos que solamente se ejecuten y visualice el resultado final, aquellos features que en sus escenarios (scenario) posee cierta etiqueta, en cambio, al usar el comando cypress, ejecutará todos los escenarios (scenario) y features ignorando los que no poseea dicha etiqueta, por lo cual, el resultado final, se visualizaran todos los features.



### Script
Para evitar confuciones o errores en el momento de escribir el comando, podemos generar Scripts y directamente llamarlos.
Para escribir dichos Scripts, debemos agregarlos en el package.json
```
  "scripts": {
    "cypress": "cypress open",
    "test:run:smoke": "cypress-tags run -e TAGS=\"@Smoke\"",
    "test:open:simple": "cypress open -e TAGS=\"@Simple\""
  },
```
Para poder ejecutarlo, debemos realizar
 > npm run test:run:smoke 


## Link de las clases: 
https://docs.google.com/document/d/1G8t5zQK-jb1MjjOT-l-TWrNGzpX96k0Sr9pPGXiWz5Y/edit?usp=sharing