Feature: Suite de TC para Adequateshop


Scenario: Registrar usuario nuevo
    Given el nombre "Nelson" email "nelson@ggmail.com" y password "123456"
    When llamamos al servicio registration
