-- MySQL dump 10.16  Distrib 10.3.9-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: uchub
-- ------------------------------------------------------
-- Server version	10.3.9-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentario_model`
--

DROP TABLE IF EXISTS `comentario_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentario_model` (
  `id` bigint(20) NOT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `fecha_publicacion` datetime DEFAULT NULL,
  `usuario_id` bigint(20) DEFAULT NULL,
  `recurso_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1ac1ngc5bsse7c5r4lwm02pm4` (`recurso_id`),
  KEY `FKp62iyjv9vbqd6eqf1dj7xe5ua` (`usuario_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario_model`
--

LOCK TABLES `comentario_model` WRITE;
/*!40000 ALTER TABLE `comentario_model` DISABLE KEYS */;
INSERT INTO `comentario_model` VALUES (8,'100% recommended','2018-10-16 02:40:46',4,NULL),(9,'This book made me pass my math exam','2018-10-16 02:40:48',4,2),(10,'This book is beautiful','2018-10-16 02:40:49',4,5),(11,'Filosofical book, I could read it a thousand times!','2018-10-16 02:40:51',3,7),(12,'Bill gates is amazing, his books are absolutely recomendable. READ IT!','2018-10-16 02:40:52',3,6),(13,'Everybody should read it','2018-10-16 02:40:53',3,6),(14,'Everybody should read it','2018-10-15 21:38:26',3,6),(23,'This book helped me to learn a lot of things that clojure is hard at','2018-10-24 07:48:45',5,5),(24,'Clojure\'s hard af','2018-10-24 07:55:15',5,5),(25,'Clojure\'s hard af','2018-10-24 07:55:21',5,5),(26,'amazing','2018-10-24 07:59:14',5,5),(27,'this man is a god','2018-10-24 08:00:30',5,7),(28,'nice','2018-10-24 08:01:38',5,6),(29,'qiwoeuoqwue','2018-10-24 08:21:07',5,5),(30,'asdasd','2018-10-24 08:22:48',5,5),(31,'ahora?','2018-10-24 08:23:31',5,5),(32,'ahora1','2018-10-24 08:54:01',5,5),(33,'prueba','2018-10-24 08:56:24',5,5),(34,'now it works?','2018-10-24 16:59:23',5,2),(35,'now?','2018-10-24 17:00:25',5,2),(36,'does it look nice?','2018-10-24 17:00:32',5,2),(42,'pinche libro vergas','2018-10-30 13:19:27',5,6);
/*!40000 ALTER TABLE `comentario_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consulta_modelo`
--

DROP TABLE IF EXISTS `consulta_modelo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consulta_modelo` (
  `id` int(11) NOT NULL,
  `recurso_id` bigint(20) DEFAULT NULL,
  `usuario_id` bigint(20) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhncp2gkaxf1i5wlcxqx2uvven` (`recurso_id`),
  KEY `FK75fcdm3wvnxg34fajiwfemfvc` (`usuario_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consulta_modelo`
--

LOCK TABLES `consulta_modelo` WRITE;
/*!40000 ALTER TABLE `consulta_modelo` DISABLE KEYS */;
INSERT INTO `consulta_modelo` VALUES (20,2,3,NULL),(21,6,3,'2018-10-17 08:58:12');
/*!40000 ALTER TABLE `consulta_modelo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `etiqueta_model`
--

DROP TABLE IF EXISTS `etiqueta_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `etiqueta_model` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_8lf3ynttj3jp7c8m3rw0pv9wg` (`nombre`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etiqueta_model`
--

LOCK TABLES `etiqueta_model` WRITE;
/*!40000 ALTER TABLE `etiqueta_model` DISABLE KEYS */;
INSERT INTO `etiqueta_model` VALUES (22,'Video'),(18,'Libro');
/*!40000 ALTER TABLE `etiqueta_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (49),(49);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recurso_model`
--

DROP TABLE IF EXISTS `recurso_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recurso_model` (
  `id` bigint(20) NOT NULL,
  `autor` varchar(255) DEFAULT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `edicion` varchar(255) DEFAULT NULL,
  `etiquetas` varchar(255) DEFAULT NULL,
  `formato` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `num_consultas` int(11) NOT NULL,
  `num_likes` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recurso_model`
--

LOCK TABLES `recurso_model` WRITE;
/*!40000 ALTER TABLE `recurso_model` DISABLE KEYS */;
INSERT INTO `recurso_model` VALUES (2,'Baldor','134','best math book','10000','mate, algebra, ecuaciones','pdf','Fisica Teorica',62,3),(5,'Jobs','134','Aprende programación funcional desde 0 hasta super duper heroe','1','programación, clojure, funcional, facil','course','Clojure para dummies',172,23),(6,'Bill Gates','134','Aprende como tener ideas maravillosas desde el billonario mas joven en la decada de los 90s','3','multimillonarios, bill gates, windows, pensamiento','epub','How was windows thought?',15,111),(7,'Chalequitos','134','Conoce las maravillosas aventuras que vivió nuestro dios chalecos desde el momento que supero su etapa más fuerte, El bachillerato.','100','analítico, pensador, filosofía, chalecos, y despues del bachillerato qué?','pdf','What about after highschool?',23,3),(43,'','','','',NULL,'','',0,0),(44,'','','','',NULL,'','',0,0),(45,'87','Epico','akjsdhkjasdkjasksk','87987',NULL,'879','879',1,0);
/*!40000 ALTER TABLE `recurso_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repositorio_model`
--

DROP TABLE IF EXISTS `repositorio_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `repositorio_model` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `etiquetas` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `propietario_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKq3jtsu2gq4822xhvfvparyvf8` (`propietario_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repositorio_model`
--

LOCK TABLES `repositorio_model` WRITE;
/*!40000 ALTER TABLE `repositorio_model` DISABLE KEYS */;
INSERT INTO `repositorio_model` VALUES (47,'Conjunto de papers donde podrás adentrarte al mundo de la inteligencia artificial y el aprendizaje automático','machine learning, papers, pdfs','Machine Learning',5);
/*!40000 ALTER TABLE `repositorio_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repositorio_model_recursos`
--

DROP TABLE IF EXISTS `repositorio_model_recursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `repositorio_model_recursos` (
  `repositorio_model_id` bigint(20) NOT NULL,
  `recursos_id` bigint(20) NOT NULL,
  UNIQUE KEY `UK_7pggn7jijdw67o08ulfjp3w9m` (`recursos_id`),
  KEY `FKq8ngwnubpg9hqpgt6d8ylnq2n` (`repositorio_model_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repositorio_model_recursos`
--

LOCK TABLES `repositorio_model_recursos` WRITE;
/*!40000 ALTER TABLE `repositorio_model_recursos` DISABLE KEYS */;
INSERT INTO `repositorio_model_recursos` VALUES (47,5),(47,2);
/*!40000 ALTER TABLE `repositorio_model_recursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_model`
--

DROP TABLE IF EXISTS `usuario_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario_model` (
  `id` bigint(20) NOT NULL,
  `carrera` varchar(255) DEFAULT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `cuenta` bigint(20) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `usuario` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_model`
--

LOCK TABLES `usuario_model` WRITE;
/*!40000 ALTER TABLE `usuario_model` DISABLE KEYS */;
INSERT INTO `usuario_model` VALUES (1,'Mercadotecnia','1234','restrada@ucol.mx',44302241,'Romina Estrada','STUDENT','restrada'),(3,'Telemática','0987','cesario@ucol.mx',91981447,'Cesario','STUDENT','cesarin'),(4,'Software','jijiji','juanitos@ucol.mx',59010225,'Juan Vazquez','STUDENT','jnito'),(5,'Software','geral123','gamezcua@ucol.mx',20136019,'Gerald Amezcua','MANAGER','gamezcua'),(37,'Software','jijiji','juanitos@ucol.mx',79717103,'Juan','STUDENT','jnito'),(38,'Diseño','qwe','pwd@p.casd',26087124,'pwd','STUDENT',NULL),(39,'Ing. Telemática','987654','namezcua@ucol.mx',15645965,'nicolas','STUDENT',NULL),(40,'Ing. Software','123','nicolas@ucol.mx',61250629,'nicolasito','STUDENT',NULL),(41,'Ing. Telemática','123','pa@ti.to',37717776,'patito','STUDENT',NULL),(48,'Ing. Software','12345','g@lari.os',20157895,'Gerardo','STUDENT',NULL);
/*!40000 ALTER TABLE `usuario_model` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-02 12:26:11
