
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
  `password` VARCHAR(32) NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `roles` JSON NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`cabinet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`cabinet` (
  `id_cabinet` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  `zipcode` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `handicap_acces` TINYINT NOT NULL DEFAULT 0,
  `free_parking` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_cabinet`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`intervention`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`intervention` (
  `id_intervention` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `anaesthesia` INT NOT NULL,
  `duration` TIME NULL DEFAULT NULL,
  `location_body` INT NOT NULL,
  `user_id` INT NOT NULL,
  `cabinet_id_cabinet` INT NOT NULL,
  PRIMARY KEY (`id_intervention`, `user_id`, `cabinet_id_cabinet`),
  INDEX `fk_intervention_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_intervention_cabinet1_idx` (`cabinet_id_cabinet` ASC) VISIBLE,
  CONSTRAINT `fk_intervention_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `serenity`.`user` (`id`),
  CONSTRAINT `fk_intervention_cabinet1`
    FOREIGN KEY (`cabinet_id_cabinet`)
    REFERENCES `serenity`.`cabinet` (`id_cabinet`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`appointment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`appointment` (
  `id_appointment` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `user_id` INT NOT NULL,
  `intervention_id_intervention` INT NOT NULL,
  PRIMARY KEY (`id_appointment`, `user_id`, `intervention_id_intervention`),
  INDEX `fk_appointment_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_appointment_intervention1_idx` (`intervention_id_intervention` ASC) VISIBLE,
  CONSTRAINT `fk_appointment_intervention1`
    FOREIGN KEY (`intervention_id_intervention`)
    REFERENCES `serenity`.`intervention` (`id_intervention`),
  CONSTRAINT `fk_appointment_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `serenity`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`specialist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`specialist` (
  `id_specialist` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id_specialist`, `user_id`),
  INDEX `fk_specialist_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_specialist_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `serenity`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`cabinet_has_specialist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`cabinet_has_specialist` (
  `cabinet_id_cabinet` INT NOT NULL,
  `specialist_id_specialist` INT NOT NULL,
  PRIMARY KEY (`cabinet_id_cabinet`, `specialist_id_specialist`),
  INDEX `fk_cabinet_has_specialist_specialist1_idx` (`specialist_id_specialist` ASC) VISIBLE,
  INDEX `fk_cabinet_has_specialist_cabinet1_idx` (`cabinet_id_cabinet` ASC) VISIBLE,
  INDEX `fk_cabinet_has_specialist_cabinet1` (`cabinet_id_cabinet` ASC) VISIBLE,
  CONSTRAINT `fk_cabinet_has_specialist_cabinet1`
    FOREIGN KEY (`cabinet_id_cabinet`)
    REFERENCES `serenity`.`cabinet` (`id_cabinet`),
  CONSTRAINT `fk_cabinet_has_specialist_specialist1`
    FOREIGN KEY (`specialist_id_specialist`)
    REFERENCES `serenity`.`specialist` (`id_specialist`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`cabinet_hours`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`cabinet_hours` (
  `idcabinet_hours` INT NOT NULL AUTO_INCREMENT,
  `cabinet_id_cabinet` INT NOT NULL,
  `open_hours` TIME NOT NULL,
  `close_hours` TIME NOT NULL,
  `day` INT NOT NULL,
  PRIMARY KEY (`idcabinet_hours`, `cabinet_id_cabinet`),
  INDEX `fk_cabinet_hours_cabinet1_idx` (`cabinet_id_cabinet` ASC) VISIBLE,
  CONSTRAINT `fk_cabinet_hours_cabinet1`
    FOREIGN KEY (`cabinet_id_cabinet`)
    REFERENCES `serenity`.`cabinet` (`id_cabinet`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`check_list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`check_list` (
  `id_check_list` INT NOT NULL AUTO_INCREMENT,
  `identity_card` TINYINT NOT NULL DEFAULT 0,
  `vital_card` TINYINT NOT NULL DEFAULT 0,
  `blue_card` TINYINT NOT NULL DEFAULT 0,
  `anesthesia_appointment` TINYINT NOT NULL DEFAULT 0,
  `appointment_id_appointment` INT NOT NULL,
  PRIMARY KEY (`id_check_list`, `appointment_id_appointment`),
  INDEX `fk_check_list_appointment1_idx` (`appointment_id_appointment` ASC) VISIBLE,
  CONSTRAINT `fk_check_list_appointment1`
    FOREIGN KEY (`appointment_id_appointment`)
    REFERENCES `serenity`.`appointment` (`id_appointment`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`patient_form`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`patient_form` (
  `id_patient_form` INT NOT NULL AUTO_INCREMENT,
  `gender` VARCHAR(32) NOT NULL,
  `birthdate` DATE NOT NULL DEFAULT "1900-01-01",
  `address` VARCHAR(255) NOT NULL,
  `zipcode` VARCHAR(100) NOT NULL,
  `city` VARCHAR(100) NOT NULL,
  `country` VARCHAR(100) NOT NULL,
  `familly_situation` VARCHAR(100) NULL DEFAULT NULL,
  `child` INT NOT NULL DEFAULT 0,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id_patient_form`, `user_id`),
  UNIQUE INDEX `id_UNIQUE` (`id_patient_form` ASC) VISIBLE,
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
  `specialist_id_specialist` INT NOT NULL,
  `intervention_id_intervention` INT NOT NULL,
  PRIMARY KEY (`specialist_id_specialist`, `intervention_id_intervention`),
  INDEX `fk_specialist_has_intervention_intervention1_idx` (`intervention_id_intervention` ASC) VISIBLE,
  INDEX `fk_specialist_has_intervention_specialist1_idx` (`specialist_id_specialist` ASC) VISIBLE,
  CONSTRAINT `fk_specialist_has_intervention_intervention1`
    FOREIGN KEY (`intervention_id_intervention`)
    REFERENCES `serenity`.`intervention` (`id_intervention`),
  CONSTRAINT `fk_specialist_has_intervention_specialist1`
    FOREIGN KEY (`specialist_id_specialist`)
    REFERENCES `serenity`.`specialist` (`id_specialist`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`specialty`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`specialty` (
  `id_specialty` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_specialty`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`specialist_has_specialty`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`specialist_has_specialty` (
  `specialist_id_specialist` INT NOT NULL,
  `specialty_id_specialty` INT NOT NULL,
  PRIMARY KEY (`specialist_id_specialist`, `specialty_id_specialty`),
  INDEX `fk_specialist_has_specialty_specialty1_idx` (`specialty_id_specialty` ASC) VISIBLE,
  INDEX `fk_specialist_has_specialty_specialist1_idx` (`specialist_id_specialist` ASC) VISIBLE,
  CONSTRAINT `fk_specialist_has_specialty_specialist1`
    FOREIGN KEY (`specialist_id_specialist`)
    REFERENCES `serenity`.`specialist` (`id_specialist`),
  CONSTRAINT `fk_specialist_has_specialty_specialty1`
    FOREIGN KEY (`specialty_id_specialty`)
    REFERENCES `serenity`.`specialty` (`id_specialty`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`steps_info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`steps_info` (
  `id_steps_info` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id_steps_info`),
  UNIQUE INDEX `id_theme_UNIQUE` (`id_steps_info` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `serenity`.`read_steps_info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `serenity`.`read_steps_info` (
  `intervention_id_intervention` INT NOT NULL,
  `steps_info_id_steps_info` INT NOT NULL,
  `is_checked` TINYINT NOT NULL DEFAULT 0,
  `id` INT NOT NULL,
  PRIMARY KEY (`intervention_id_intervention`, `steps_info_id_steps_info`, `id`),
  INDEX `fk_intervention_has_steps_info_steps_info1_idx` (`steps_info_id_steps_info` ASC) VISIBLE,
  INDEX `fk_intervention_has_steps_info_intervention1_idx` (`intervention_id_intervention` ASC) VISIBLE,
  CONSTRAINT `fk_intervention_has_steps_info_intervention1`
    FOREIGN KEY (`intervention_id_intervention`)
    REFERENCES `serenity`.`intervention` (`id_intervention`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_intervention_has_steps_info_steps_info1`
    FOREIGN KEY (`steps_info_id_steps_info`)
    REFERENCES `serenity`.`steps_info` (`id_steps_info`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
