-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-04-2021 a las 07:12:12
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `productostienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productosexistentes`
--

CREATE TABLE `productosexistentes` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `imagen` varchar(400) NOT NULL,
  `precio` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `en_carrito` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productosexistentes`
--

INSERT INTO `productosexistentes` (`id_producto`, `nombre`, `imagen`, `precio`, `stock`, `en_carrito`) VALUES
(1, 'Adidas Yeezy Boost', 'https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Adidas-Yeezy-Boost-350-V2-Zebra-1_600x.png?v=1541153763', 150, 15, 0),
(2, 'Cangurera Adidas', 'https://cangureras.net/wp-content/uploads/cangureras-adidas.jpg\r\n', 25, 7, 2),
(3, 'Gorra Adidas', 'https://i.pinimg.com/originals/52/9f/57/529f57192de156db1b0f23fc334bc18d.png', 30, 23, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productosnuevos`
--

CREATE TABLE `productosnuevos` (
  `id_nuevo` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `imagen` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productosnuevos`
--

INSERT INTO `productosnuevos` (`id_nuevo`, `nombre`, `imagen`) VALUES
(6, 'Zapato gris de tela', '2021-04-11T04-28-34.093Z-zapato.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `username` varchar(20) NOT NULL,
  `password` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`username`, `password`) VALUES
('Felipe', '$2a$12$/68OgOaSg.hiYz/.1YUz5Obv0mkJJZQFTNGfksVGQMxowEn7VJR4i');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productosexistentes`
--
ALTER TABLE `productosexistentes`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `productosnuevos`
--
ALTER TABLE `productosnuevos`
  ADD PRIMARY KEY (`id_nuevo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productosexistentes`
--
ALTER TABLE `productosexistentes`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productosnuevos`
--
ALTER TABLE `productosnuevos`
  MODIFY `id_nuevo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
