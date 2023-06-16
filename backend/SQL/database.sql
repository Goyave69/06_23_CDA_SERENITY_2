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
CREATE SCHEMA IF NOT EXISTS `serenity` DEFAULT CHARACTER SET utf8mb3 ;
USE `serenity` ;

-- -----------------------------------------------------
-- Table `serenity`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(70) NOT NULL,
  `lastname` VARCHAR(70) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `roles` JSON NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
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
  `handicap_access` TINYINT NOT NULL DEFAULT 0,
  `free_parking` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;




-- -----------------------------------------------------
-- Table `serenity`.`intervention`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`intervention` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `anaesthesia` INT NOT NULL,
  `duration` TIME NULL DEFAULT NULL,
  `location_body` INT NOT NULL,
  `user_id` INT NOT NULL,
  `clinic_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`, `clinic_id`),
  INDEX `fk_intervention_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_intervention_clinic1_idx` (`clinic_id` ASC) VISIBLE,
  CONSTRAINT `fk_intervention_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `serenity`.`user` (`id`),
  CONSTRAINT `fk_intervention_clinic1`
    FOREIGN KEY (`clinic_id`)
    REFERENCES `serenity`.`clinic` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;




-- -----------------------------------------------------
-- Table `serenity`.`appointment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`appointment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `user_id` INT NOT NULL,
  `intervention_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`, `intervention_id`),
  INDEX `fk_appointment_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_appointment_intervention1_idx` (`intervention_id` ASC) VISIBLE,
  CONSTRAINT `fk_appointment_intervention1`
    FOREIGN KEY (`intervention_id`)
    REFERENCES `serenity`.`intervention` (`id`),
  CONSTRAINT `fk_appointment_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `serenity`.`user` (`id`))
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
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

INSERT INTO `serenity`.`specialist` (`id`, `user_id`) VALUES
(1, 1);


-- -----------------------------------------------------
-- Table `serenity`.`clinic_has_specialist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`clinic_has_specialist` (
  `clinic_id` INT NOT NULL,
  `specialist_id` INT NOT NULL,
  PRIMARY KEY (`clinic_id`, `specialist_id`),
  INDEX `fk_clinic_has_specialist_specialist1_idx` (`specialist_id` ASC) VISIBLE,
  INDEX `fk_clinic_has_specialist_clinic1_idx` (`clinic_id` ASC) VISIBLE,
  CONSTRAINT `fk_clinic_has_specialist_clinic1`
    FOREIGN KEY (`clinic_id`)
    REFERENCES `serenity`.`clinic` (`id`),
  CONSTRAINT `fk_clinic_has_specialist_specialist1`
    FOREIGN KEY (`specialist_id`)
    REFERENCES `serenity`.`specialist` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;



-- -----------------------------------------------------
-- Table `serenity`.`clinic_hours`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`clinic_hours` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `clinic_id` INT NOT NULL,
  `open_hours` TIME NOT NULL,
  `close_hours` TIME NOT NULL,
  `day` INT NOT NULL,
  PRIMARY KEY (`id`, `clinic_id`),
  INDEX `fk_clinic_hours_clinic1_idx` (`clinic_id` ASC) VISIBLE,
  CONSTRAINT `fk_clinic_hours_clinic1`
    FOREIGN KEY (`clinic_id`)
    REFERENCES `serenity`.`clinic` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;



-- -----------------------------------------------------
-- Table `serenity`.`check_list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`check_list` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `identity_card` TINYINT NOT NULL DEFAULT 0,
  `vital_card` TINYINT NOT NULL DEFAULT 0,
  `blue_card` TINYINT NOT NULL DEFAULT 0,
  `anesthesia_appointment` TINYINT NOT NULL DEFAULT 0,
  `appointment_id` INT NOT NULL,
  PRIMARY KEY (`id`, `appointment_id`),
  INDEX `fk_check_list_appointment1_idx` (`appointment_id` ASC) VISIBLE,
  CONSTRAINT `fk_check_list_appointment1`
    FOREIGN KEY (`appointment_id`)
    REFERENCES `serenity`.`appointment` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;



-- -----------------------------------------------------
-- Table `serenity`.`patient_form`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`patient_form` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `gender` VARCHAR(32) NOT NULL,
  `birthdate` DATE NOT NULL DEFAULT "1900-01-01",
  `address` VARCHAR(255) NOT NULL,
  `zipcode` VARCHAR(100) NOT NULL,
  `city` VARCHAR(100) NOT NULL,
  `country` VARCHAR(100) NOT NULL,
  `family_situation` VARCHAR(100) NULL DEFAULT NULL,
  `child` INT NOT NULL DEFAULT 0,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_patient_form_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_patient_form_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `serenity`.`user` (`id`))
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
  CONSTRAINT `fk_specialist_has_intervention_intervention1`
    FOREIGN KEY (`intervention_id`)
    REFERENCES `serenity`.`intervention` (`id`),
  CONSTRAINT `fk_specialist_has_intervention_specialist1`
    FOREIGN KEY (`specialist_id`)
    REFERENCES `serenity`.`specialist` (`id`))
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

INSERT INTO `serenity`.`specialty` (`id`, `name`) VALUES
(1, 'Specialty 1');


-- -----------------------------------------------------
-- Table `serenity`.`specialist_has_speciality`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`specialist_has_speciality` (
  `specialist_id` INT NOT NULL,
  `speciality_id` INT NOT NULL,
  PRIMARY KEY (`specialist_id`, `speciality_id`),
  INDEX `fk_specialist_has_speciality_speciality1_idx` (`speciality_id` ASC) VISIBLE,
  INDEX `fk_specialist_has_speciality_specialist1_idx` (`specialist_id` ASC) VISIBLE,
  CONSTRAINT `fk_specialist_has_speciality_specialist1`
    FOREIGN KEY (`specialist_id`)
    REFERENCES `serenity`.`specialist` (`id`),
  CONSTRAINT `fk_specialist_has_speciality_speciality1`
    FOREIGN KEY (`speciality_id`)
    REFERENCES `serenity`.`speciality` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;




-- -----------------------------------------------------
-- Table `serenity`.`steps_info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`steps_info` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_theme_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`read_steps_info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`read_steps_info` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `is_checked` TINYINT NULL DEFAULT 0,
  `steps_info_id` INT NOT NULL,
  `intervention_id` INT NOT NULL,
  PRIMARY KEY (`id`, `steps_info_id`, `intervention_id`),
  INDEX `fk_read_steps_info_steps_info1_idx` (`steps_info_id` ASC) VISIBLE,
  INDEX `fk_read_steps_info_intervention1_idx` (`intervention_id` ASC) VISIBLE,
  CONSTRAINT `fk_read_steps_info_steps_info1`
    FOREIGN KEY (`steps_info_id`)
    REFERENCES `serenity`.`steps_info` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_read_steps_info_intervention1`
    FOREIGN KEY (`intervention_id`)
    REFERENCES `serenity`.`intervention` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
