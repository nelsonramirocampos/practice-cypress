Feature: Sauce Demo Tests

@Simple
@Smoke
Scenario: Inicio de sesion correcto
    Given en la pagina principal de "https://www.saucedemo.com/"
    When ingreso el nombre de usuario "standard_user"
    When ingreso el password "secret_sauce"
    When presiono en el boton ingresar
    Then visualizo el logo de la pagina

@Parametros
@Smoke
Scenario Outline: Inicio de sesion correcto - Outline
    Given en la pagina principal de "<url>"
    When ingreso el nombre de usuario "<userName>"
    When ingreso el password "<userPassword>"
    When presiono en el boton ingresar
    Then visualizo el logo de la pagina

    Examples:
        | url                      | userName       | userPassword  |
        |https://www.saucedemo.com/| standard_user  | secret_sauce  | 
        |https://www.saucedemo.com/| standard_user  | secret_sauce  | 
        |https://www.saucedemo.com/| standard_user  | secret_sauce  |         