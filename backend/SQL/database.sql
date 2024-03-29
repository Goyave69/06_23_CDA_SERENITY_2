-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema serenity
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema serenity
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `serenity` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `serenity` ;

-- -----------------------------------------------------
-- Table `serenity`.`check_list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`check_list` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `subtext` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`clinic`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`clinic` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  `zipcode` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `handicap_access` TINYINT NOT NULL DEFAULT '0',
  `free_parking` TINYINT NOT NULL DEFAULT '0',
  `open_hours` TIME NOT NULL,
  `close_hours` TIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `roles` INT NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `firstname` VARCHAR(70) NOT NULL,
  `lastname` VARCHAR(70) NOT NULL,
  `gender` VARCHAR(45) NULL,
  `birthdate` DATE NULL,
  `address` VARCHAR(255) NULL,
  `city` VARCHAR(255) NULL,
  `zipcode` VARCHAR(45) NULL,
  `country` VARCHAR(100) NULL,
  `family_situation` VARCHAR(100) NULL,
  `child` INT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`specialist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`specialist` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_specialist_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_specialist_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `serenity`.`user` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`clinic_has_specialist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`clinic_has_specialist` (
  `clinic_id` INT NOT NULL,
  `specialist_id` INT NOT NULL,
  PRIMARY KEY (`clinic_id`, `specialist_id`),
  INDEX `fk_clinic_has_specialist_clinic1_idx` (`clinic_id` ASC) VISIBLE,
  INDEX `fk_clinic_has_specialist_specialist1_idx` (`specialist_id` ASC) VISIBLE,
  CONSTRAINT `fk_clinic_has_specialist_clinic1`
    FOREIGN KEY (`clinic_id`)
    REFERENCES `serenity`.`clinic` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_clinic_has_specialist_specialist1`
    FOREIGN KEY (`specialist_id`)
    REFERENCES `serenity`.`specialist` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`surgery`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`surgery` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `location` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `serenity`.`intervention`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`intervention` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `anaesthesia` INT NOT NULL,
  `date` DATETIME NOT NULL,
  `duration` TIME NULL DEFAULT NULL,
  `user_id` INT NOT NULL,
  `clinic_id` INT NOT NULL,
  `surgery_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`, `clinic_id`, `surgery_id`),
  INDEX `fk_intervention_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_intervention_clinic1_idx` (`clinic_id` ASC) VISIBLE,
  INDEX `fk_intervention_surgery1_idx` (`surgery_id` ASC) VISIBLE,
  CONSTRAINT `fk_intervention_clinic1`
    FOREIGN KEY (`clinic_id`)
    REFERENCES `serenity`.`clinic` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_intervention_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `serenity`.`user` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_intervention_surgery1`
    FOREIGN KEY (`surgery_id`)
    REFERENCES `serenity`.`surgery` (`id`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`steps_info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`steps_info` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NULL,
  `description` TEXT NOT NULL,
  `surgery_id` INT NOT NULL,
  PRIMARY KEY (`id`, `surgery_id`),
  UNIQUE INDEX `id_theme_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_steps_info_surgery1_idx` (`surgery_id` ASC) VISIBLE,
  CONSTRAINT `fk_steps_info_surgery1`
    FOREIGN KEY (`surgery_id`)
    REFERENCES `serenity`.`surgery` (`id`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`read_steps_info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`read_steps_info` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `is_checked` TINYINT NULL DEFAULT '0',
  `steps_info_id` INT NOT NULL,
  `intervention_id` INT NOT NULL,
  PRIMARY KEY (`id`, `steps_info_id`, `intervention_id`),
  INDEX `fk_read_steps_info_steps_info1_idx` (`steps_info_id` ASC) VISIBLE,
  INDEX `fk_read_steps_info_intervention1_idx` (`intervention_id` ASC) VISIBLE,
  CONSTRAINT `fk_read_steps_info_intervention1`
    FOREIGN KEY (`intervention_id`)
    REFERENCES `serenity`.`intervention` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_read_steps_info_steps_info1`
    FOREIGN KEY (`steps_info_id`)
    REFERENCES `serenity`.`steps_info` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`speciality`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`speciality` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`specialist_has_speciality`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`specialist_has_speciality` (
  `specialist_id` INT NOT NULL,
  `speciality_id` INT NOT NULL,
  PRIMARY KEY (`specialist_id`, `speciality_id`),
  INDEX `fk_specialist_has_speciality_specialist1_idx` (`specialist_id` ASC) VISIBLE,
  INDEX `fk_specialist_has_speciality_speciality1_idx` (`speciality_id` ASC) VISIBLE,
  CONSTRAINT `fk_specialist_has_speciality_specialist1`
    FOREIGN KEY (`specialist_id`)
    REFERENCES `serenity`.`specialist` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_specialist_has_speciality_speciality1`
    FOREIGN KEY (`speciality_id`)
    REFERENCES `serenity`.`speciality` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`specialist_has_intervention`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`specialist_has_intervention` (
  `specialist_id` INT NOT NULL,
  `intervention_id` INT NOT NULL,
  PRIMARY KEY (`specialist_id`, `intervention_id`),
  INDEX `fk_specialist_has_intervention_intervention1_idx` (`intervention_id` ASC) VISIBLE,
  INDEX `fk_specialist_has_intervention_specialist1_idx` (`specialist_id` ASC) VISIBLE,
  CONSTRAINT `fk_specialist_has_intervention_specialist1`
    FOREIGN KEY (`specialist_id`)
    REFERENCES `serenity`.`specialist` (`id`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_specialist_has_intervention_intervention1`
    FOREIGN KEY (`intervention_id`)
    REFERENCES `serenity`.`intervention` (`id`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`read_arrival_preparation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`read_arrival_preparation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `steps` INT NULL DEFAULT '0',
  `intervention_id` INT NOT NULL,
  PRIMARY KEY (`id`, `intervention_id`),
  INDEX `fk_read_steps_info_intervention1_idx` (`intervention_id` ASC) VISIBLE,
  CONSTRAINT `fk_read_steps_info_intervention10`
    FOREIGN KEY (`intervention_id`)
    REFERENCES `serenity`.`intervention` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`done_check_list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`done_check_list` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `is_checked` TINYINT NULL DEFAULT '0',
  `intervention_id` INT NOT NULL,
  `check_list_id` INT NOT NULL,
  PRIMARY KEY (`id`, `intervention_id`, `check_list_id`),
  INDEX `fk_read_steps_info_intervention1_idx` (`intervention_id` ASC) VISIBLE,
  INDEX `fk_read_steps_info_copy1_check_list1_idx` (`check_list_id` ASC) VISIBLE,
  CONSTRAINT `fk_read_steps_info_intervention11`
    FOREIGN KEY (`intervention_id`)
    REFERENCES `serenity`.`intervention` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_read_steps_info_copy1_check_list1`
    FOREIGN KEY (`check_list_id`)
    REFERENCES `serenity`.`check_list` (`id`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`appointment_for_intervention`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`appointment_for_intervention` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NULL,
  `specialist_id` INT NULL,
  `speciality_id` INT NOT NULL,
  `intervention_id` INT NOT NULL,
  PRIMARY KEY (`id`, `speciality_id`, `intervention_id`),
  INDEX `fk_appointment_for_intervention_specialist1_idx` (`specialist_id` ASC) VISIBLE,
  INDEX `fk_appointment_for_intervention_speciality1_idx` (`speciality_id` ASC) VISIBLE,
  INDEX `fk_appointment_for_intervention_intervention1_idx` (`intervention_id` ASC) VISIBLE,
  CONSTRAINT `fk_appointment_for_intervention_specialist1`
    FOREIGN KEY (`specialist_id`)
    REFERENCES `serenity`.`specialist` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_appointment_for_intervention_speciality1`
    FOREIGN KEY (`speciality_id`)
    REFERENCES `serenity`.`speciality` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_appointment_for_intervention_intervention1`
    FOREIGN KEY (`intervention_id`)
    REFERENCES `serenity`.`intervention` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`done_administrative`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`done_administrative` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `is_checked` TINYINT NULL DEFAULT '0',
  `category` INT NOT NULL,
  `intervention_id` INT NOT NULL,
  PRIMARY KEY (`id`, `intervention_id`),
  INDEX `fk_read_steps_info_intervention1_idx` (`intervention_id` ASC) VISIBLE,
  CONSTRAINT `fk_read_steps_info_intervention100`
    FOREIGN KEY (`intervention_id`)
    REFERENCES `serenity`.`intervention` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;