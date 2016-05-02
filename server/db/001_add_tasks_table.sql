BEGIN;

CREATE TABLE `taskka_dev`.`tasks` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `createdAt` TIMESTAMP NOT NULL,
  `updatedAt` TIMESTAMP NULL,
  `name` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC)
);

ALTER TABLE `taskka_dev`.`tasks` 
ADD INDEX `name_INDEX` (`name` ASC);

COMMIT;