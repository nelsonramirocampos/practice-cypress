Feature: Suite de TC para Adequateshop


Scenario: Registrar usuario nuevo
    Given el nombre "Nelson" email "nelson@ggmail.com" y password "123456"
    When llamamos al servicio registration

Scenario Outline: Realizar login de un usuario registrado
    Given el usuario "<userName>" email "<userEmail>" y password "<userPassword>"
    When llamamos al servicio login
    Examples:
        | userName | userEmail | userPassword |
        | Nelson  | nelson@ggmail.com  | 123456  |

Scenario: Obtener todos los usuarios
    Given el token para el usuario "Nelson" email "nelson@ggmail.com" y password "123456"
    When llamamos al servicio users