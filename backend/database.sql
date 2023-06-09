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

INSERT INTO `serenity`.`user` (`id`, `firstname`, `lastname`, `email`, `password`, `created_at`, `roles`) VALUES
(1, 'John', 'Doe', 'johndoe@example.com', 'password123', '2023-06-08 12:00:00', '{"role": "user"}');


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

INSERT INTO `serenity`.`clinic` (`id`, `name`, `address`, `city`, `zipcode`, `phone_number`, `email`, `handicap_access`, `free_parking`) VALUES
(1, 'Serenity Clinic', '123 Main Street', 'Cityville', '12345', '123-456-7890', 'info@serenityclinic.com', 1, 1);


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
  INDEX `fk_intervention_cabinet1_idx` (`clinic_id` ASC) VISIBLE,
  CONSTRAINT `fk_intervention_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `serenity`.`user` (`id`),
  CONSTRAINT `fk_intervention_cabinet1`
    FOREIGN KEY (`clinic_id`)
    REFERENCES `serenity`.`clinic` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

INSERT INTO `serenity`.`intervention` (`id`, `name`, `anaesthesia`, `duration`, `location_body`, `user_id`, `clinic_id`) VALUES
(1, 'Intervention 1', 1, NULL, 1, 1, 1);



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


INSERT INTO `serenity`.`appointment` (`id`, `date`, `user_id`, `intervention_id`) VALUES
(1, '2023-06-10 10:00:00', 1, 1);

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
  INDEX `fk_cabinet_has_specialist_specialist1_idx` (`specialist_id` ASC) VISIBLE,
  INDEX `fk_cabinet_has_specialist_cabinet1_idx` (`clinic_id` ASC) VISIBLE,
  INDEX `fk_cabinet_has_specialist_cabinet1` (`clinic_id` ASC) VISIBLE,
  CONSTRAINT `fk_cabinet_has_specialist_cabinet1`
    FOREIGN KEY (`clinic_id`)
    REFERENCES `serenity`.`clinic` (`id`),
  CONSTRAINT `fk_cabinet_has_specialist_specialist1`
    FOREIGN KEY (`specialist_id`)
    REFERENCES `serenity`.`specialist` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

INSERT INTO `serenity`.`clinic_has_specialist` (`clinic_id`, `specialist_id`) VALUES
(1, 1);


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
  INDEX `fk_cabinet_hours_cabinet1_idx` (`clinic_id` ASC) VISIBLE,
  CONSTRAINT `fk_cabinet_hours_cabinet1`
    FOREIGN KEY (`clinic_id`)
    REFERENCES `serenity`.`clinic` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

INSERT INTO `serenity`.`clinic_hours` (`id`, `clinic_id`, `open_hours`, `close_hours`, `day`) VALUES
(1, 1, '08:00:00', '17:00:00', 1);


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

INSERT INTO `serenity`.`check_list` (`id`, `identity_card`, `vital_card`, `blue_card`, `anesthesia_appointment`, `appointment_id`) VALUES
(1, 1, 1, 1, 1, 1);


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


INSERT INTO `serenity`.`patient_form` (`id`, `gender`, `birthdate`, `address`, `zipcode`, `city`, `country`, `family_situation`, `child`, `user_id`) VALUES
(1, 'Male', '1990-01-01', '456 Elm Street', '54321', 'Townville', 'Countryland', 'Married', 2, 1);


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


INSERT INTO `serenity`.`specialist_has_intervention` (`specialist_id`, `intervention_id`) VALUES
(1, 1);

-- -----------------------------------------------------
-- Table `serenity`.`specialty`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`specialty` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

INSERT INTO `serenity`.`specialty` (`id`, `name`) VALUES
(1, 'Specialty 1');


-- -----------------------------------------------------
-- Table `serenity`.`specialist_has_specialty`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`specialist_has_specialty` (
  `specialist_id` INT NOT NULL,
  `specialty_id` INT NOT NULL,
  PRIMARY KEY (`specialist_id`, `specialty_id`),
  INDEX `fk_specialist_has_specialty_specialty1_idx` (`specialty_id` ASC) VISIBLE,
  INDEX `fk_specialist_has_specialty_specialist1_idx` (`specialist_id` ASC) VISIBLE,
  CONSTRAINT `fk_specialist_has_specialty_specialist1`
    FOREIGN KEY (`specialist_id`)
    REFERENCES `serenity`.`specialist` (`id`),
  CONSTRAINT `fk_specialist_has_specialty_specialty1`
    FOREIGN KEY (`specialty_id`)
    REFERENCES `serenity`.`specialty` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


INSERT INTO `serenity`.`specialist_has_specialty` (`specialist_id`, `specialty_id`) VALUES
(1, 1);


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


INSERT INTO `serenity`.`steps_info` (`id`, `title`, `description`) VALUES
(1, 'Step 1', 'Description of step 1');



-- -----------------------------------------------------
-- Table `serenity`.`read_steps_info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`read_steps_info` (
  `intervention_id` INT NOT NULL,
  `steps_info_id` INT NOT NULL,
  `is_checked` TINYINT NOT NULL DEFAULT 0,
  `id` INT NOT NULL,
  PRIMARY KEY (`intervention_id`, `steps_info_id`, `id`),
  INDEX `fk_intervention_has_steps_info_steps_info1_idx` (`steps_info_id` ASC) VISIBLE,
  INDEX `fk_intervention_has_steps_info_intervention1_idx` (`intervention_id` ASC) VISIBLE,
  CONSTRAINT `fk_intervention_has_steps_info_intervention1`
    FOREIGN KEY (`intervention_id`)
    REFERENCES `serenity`.`intervention` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_intervention_has_steps_info_steps_info1`
    FOREIGN KEY (`steps_info_id`)
    REFERENCES `serenity`.`steps_info` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

INSERT INTO `serenity`.`read_steps_info` (`intervention_id`, `steps_info_id`, `is_checked`, `id`) VALUES
(1, 1, 0, 1);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
