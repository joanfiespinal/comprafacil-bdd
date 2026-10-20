
Feature: Gestión del carrito de compras de CompraFácil
  Como cliente de CompraFácil
  Quiero buscar productos y agregarlos al carrito
  Para realizar mis compras en línea

  Scenario: Agregar un producto disponible al carrito
    Given que el cliente está en la tienda y el producto está disponible
    When el cliente agrega el producto al carrito
    Then el producto debe aparecer en el carrito

  Scenario: Buscar un producto existente
    Given que el cliente está en la página principal
    When el cliente busca "Laptop"
    Then el sistema debe mostrar los productos que coinciden con "Laptop"

  Scenario: Buscar un producto inexistente
    Given que el cliente está en la tienda
    When el cliente busca "ProductoXYZ123"
    Then el sistema debe informar que no se encontraron productos

  Scenario: Intentar agregar un producto sin existencias
    Given que el producto seleccionado no tiene existencias
    When el cliente intenta agregarlo al carrito
    Then el sistema debe impedir que se agregue y mostrar un mensaje de falta de existencias

  Scenario: Intentar comprar con el carrito vacío
    Given que el carrito de compras está vacío
    When el cliente intenta finalizar la compra
    Then el sistema debe impedir la compra y solicitar que agregue productos
