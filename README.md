# Práctica 5.2: Pruebas BDD con Gherkin

## 1. Nombre del proyecto

**CompraFácil – Tienda en línea**

## 2. Descripción del proyecto

CompraFácil es una tienda en línea diseñada para permitir a los clientes buscar productos, agregarlos al carrito y comenzar el proceso de compra. En esta práctica se utiliza BDD (Behavior Driven Development) para describir el comportamiento esperado del sistema mediante escenarios escritos en Gherkin.

## 3. Funcionalidad principal

La funcionalidad principal consiste en gestionar la búsqueda de productos y el carrito de compras, verificando que el sistema responda correctamente tanto en situaciones normales como ante errores.

## 4. Escenarios de prueba

### Escenario 1: Agregar un producto disponible al carrito

**¿Qué valida?** Comprueba que el cliente pueda agregar un producto disponible y que este aparezca correctamente en el carrito.

### Escenario 2: Buscar un producto existente

**¿Qué valida?** Verifica que el sistema muestre los productos que coincidan con el término de búsqueda introducido por el cliente.

### Escenario 3: Buscar un producto inexistente

**¿Qué valida?** Comprueba que el sistema informe claramente cuando no encuentra productos que coincidan con la búsqueda.

### Escenario 4: Intentar agregar un producto sin existencias

**¿Qué valida?** Verifica que el sistema impida agregar productos agotados y muestre un mensaje informativo.

### Escenario 5: Intentar comprar con el carrito vacío

**¿Qué valida?** Comprueba que el sistema no permita finalizar una compra cuando el carrito no contiene productos.

## 5. Estructura Given, When, Then

Los escenarios utilizan tres palabras clave de Gherkin:

- **Given (Dado):** establece la situación inicial o las condiciones de la prueba.
- **When (Cuando):** describe la acción que realiza el usuario.
- **Then (Entonces):** especifica el resultado esperado.

## 6. Tipos de casos incluidos

La práctica contiene casos exitosos, como agregar un producto disponible y buscar uno existente, así como casos de error, como buscar productos inexistentes, intentar agregar productos agotados y finalizar una compra con el carrito vacío.

## 7. Conclusión

El uso de BDD y Gherkin permite describir de manera clara y organizada el comportamiento esperado de una aplicación. Los escenarios definidos para CompraFácil sirven como base para validar sus funcionalidades y facilitar la comunicación entre desarrolladores, testers y demás participantes del proyecto.

**Nota:** Los escenarios documentan el comportamiento esperado; por sí solos no ejecutan pruebas automatizadas.