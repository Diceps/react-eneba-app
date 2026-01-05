-- Adminer 4.7.8 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `game_keys`;
CREATE TABLE `game_keys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `image_url` varchar(256) NOT NULL,
  `location` varchar(60) NOT NULL,
  `price` int(11) NOT NULL,
  `starting_price` int(11) NOT NULL,
  `currency` varchar(30) NOT NULL,
  `cashback` int(11) NOT NULL,
  `wishlisted` int(11) NOT NULL,
  `platform` varchar(128) NOT NULL,
  `platform_image_url` varchar(256) NOT NULL,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

INSERT INTO `game_keys` (`id`, `name`, `image_url`, `location`, `price`, `starting_price`, `currency`, `cashback`, `wishlisted`, `platform`, `platform_image_url`) VALUES
(1,	'Red Dead Redemption (Nintendo Switch) eShop Key EUROPE',	'https://diceps.github.io/react-eneba-app/assets/images/red-dead-3x4.png',	'Europe',	1830,	0,	'EUR',	201,	775,	'Nintendo',	'https://diceps.github.io/react-eneba-app/assets/icons/nintendo.svg'),
(2,	'Red Dead Redemption XBOX LIVE Key EUROPE',	'https://diceps.github.io/react-eneba-app/assets/images/red-dead-3x4.png',	'Europe',	4811,	0,	'EUR',	529,	78,	'Xbox Live',	'https://diceps.github.io/react-eneba-app/assets/icons/xbox.svg'),
(3,	'Split Fiction (Xbox Series X|S) XBOX LIVE Key GLOBAL',	'https://diceps.github.io/react-eneba-app/assets/images/split-fiction-3x4.jpg',	'Global',	3321,	4999,	'EUR',	365,	1085,	'Xbox Live',	'https://diceps.github.io/react-eneba-app/assets/icons/xbox.svg'),
(4,	'EA SPORTS™ FIFA 23 Standard Edition Xbox One Key GLOBAL',	'https://diceps.github.io/react-eneba-app/assets/images/fifa-23-3x4.jpg',	'Global',	2280,	6999,	'EUR',	251,	2799,	'Xbox Live',	'https://diceps.github.io/react-eneba-app/assets/icons/xbox.svg'),
(5,	'Red Dead Redemption 2 Rockstar Games Launcher Key GLOBAL',	'https://diceps.github.io/react-eneba-app/assets/images/red-dead-2-3x4.jpg',	'Global',	1196,	5999,	'EUR',	132,	25375,	'Rockstar Games Launcher',	'https://diceps.github.io/react-eneba-app/assets/icons/rockstar-social-club.svg'),
(6,	'Split Fiction Steam Key (PC) GLOBAL',	'https://diceps.github.io/react-eneba-app/assets/images/split-fiction-3x4.jpg',	'Global',	4500,	4999,	'EUR',	495,	1180,	'Steam',	'https://diceps.github.io/react-eneba-app/assets/icons/steam.svg'),
(7,	'Split Fiction EA App Key (PC) GLOBAL',	'https://diceps.github.io/react-eneba-app/assets/images/split-fiction-3x4.jpg',	'Global',	3396,	4999,	'EUR',	374,	721,	'EA App',	'https://diceps.github.io/react-eneba-app/assets/icons/ea-app.svg'),
(8,	'Split Fiction (Nintendo Switch 2) eShop Key EUROPE',	'https://diceps.github.io/react-eneba-app/assets/images/split-fiction-3x4.jpg',	'Europe',	3624,	4999,	'EUR',	401,	329,	'Nintendo',	'https://diceps.github.io/react-eneba-app/assets/icons/nintendo.svg'),
(9,	'Red Dead Redemption 2 (PC) Green Gift Key GLOBAL',	'https://diceps.github.io/react-eneba-app/assets/images/red-dead-2-3x4.jpg',	'Global',	1107,	5999,	'EUR',	122,	9225,	'Green gift',	'https://diceps.github.io/react-eneba-app/assets/icons/green-gift.svg'),
(10,	'Red Dead Redemption 2 (Xbox One) Xbox Live Key EUROPE',	'https://diceps.github.io/react-eneba-app/assets/images/red-dead-2-3x4.jpg',	'Europe',	1201,	0,	'EUR',	132,	2352,	'Xbox Live',	'https://diceps.github.io/react-eneba-app/assets/icons/xbox.svg'),
(11,	'FIFA 23 (PS5) PSN Key EUROPE',	'https://diceps.github.io/react-eneba-app/assets/images/fifa-23-3x4.jpg',	'Europe',	4014,	7999,	'EUR',	442,	761,	'PSN',	'https://diceps.github.io/react-eneba-app/assets/icons/psn.svg'),
(12,	'FIFA 23 (ENG/PL) (PC) Origin Key EUROPE',	'https://diceps.github.io/react-eneba-app/assets/images/fifa-23-3x4.jpg',	'Europe',	2718,	0,	'EUR',	299,	17,	'Origin',	'https://diceps.github.io/react-eneba-app/assets/icons/origin.svg');

-- 2026-01-05 15:41:00
