-- Insert into `user`
INSERT INTO `serenity`.`user` (`id`, `firstname`, `lastname`, `email`, `password`, `roles`) 
VALUES 
(1, 'John', 'Doe', 'john.doe@example.com', 'password123', '{"roles": ["user"]}'),
(2, 'Jane', 'Doe', 'jane.doe@example.com', 'password123', '{"roles": ["user"]}');

-- Insert into `clinic`
INSERT INTO `serenity`.`clinic` (`id`, `name`, `address`, `city`, `zipcode`, `phone_number`, `email`, `handicap_access`, `free_parking`) 
VALUES 
(1, 'Clinic 1', '123 Main St', 'Anytown', '12345', '555-555-5555', 'clinic1@example.com', 1, 0),
(2, 'Clinic 2', '456 Main St', 'Anytown', '12345', '555-555-5555', 'clinic2@example.com', 0, 1);

-- Insertions pour la table `serenity`.`intervention`
INSERT INTO `serenity`.`intervention` (`name`, `anesthesia`, `duration`, `location_body`, `user_id`, `clinic_id`) VALUES
('Intervention 1', 1, NULL, 1, 1, 1),
('Intervention 2', 0, '02:30:00', 2, 2, 2),
('Intervention 3', 1, '01:15:00', 3, 3, 3);

-- Insert into `appointment`
INSERT INTO `serenity`.`appointment` (`id`, `date`, `user_id`, `intervention_id`) 
VALUES 
(1, '2023-06-15 10:00:00', 1, 1),
(2, '2023-06-16 11:00:00', 2, 2);

-- Insert into `clinic_has_specialist`
INSERT INTO `serenity`.`clinic_has_specialist` (`clinic_id`, `specialist_id`) 
VALUES 
(1, 1),
(2, 1);

-- Insert into `clinic_hours`
INSERT INTO `serenity`.`clinic_hours` (`id`, `clinic_id`, `open_hours`, `close_hours`, `day`) 
VALUES 
(1, 1, '08:00:00', '17:00:00', 1),
(2, 2, '08:00:00', '17:00:00', 1);

-- Insert into `check_list`
INSERT INTO `serenity`.`check_list` (`id`, `identity_card`, `vital_card`, `blue_card`, `anesthesia_appointment`, `appointment_id`) 
VALUES 
(1, 1, 1, 1, 1, 1),
(2, 1, 1, 1, 1, 2);

-- Insert into `patient_form`
INSERT INTO `serenity`.`patient_form` (`id`, `gender`, `birthdate`, `address`, `zipcode`, `city`, `country`, `family_situation`, `child`, `user_id`) 
VALUES 
(1, 'Male', '1980-01-01', '123 Main St', '12345', 'Anytown', 'USA', 'Single', 0, 1),
(2, 'Female', '1985-02-01', '456 Main St', '12345', 'Anytown', 'USA', 'Married', 1, 2);

-- Insert into `specialist`
INSERT INTO `serenity`.`specialist` ( `user_id`) 
VALUES 
(1),
(2);

-- Insert into `specialist_has_intervention`
INSERT INTO `serenity`.`specialist_has_intervention` (`specialist_id`, `intervention_id`) 
VALUES 
(1, 1),
(2, 2);

-- Insert into `speciality`
INSERT INTO `serenity`.`speciality` (`id`, `name`) 
VALUES 
(1, 'Speciality 1'),
(2, 'Speciality 2');

-- Insert into `specialist_has_speciality`
INSERT INTO `serenity`.`specialist_has_speciality` (`specialist_id`, `speciality_id`) 
VALUES 
(1, 1),
(2, 2);

-- Insertions pour la table `serenity`.`speciality`
INSERT INTO `serenity`.`speciality` (`name`) VALUES
('Speciality 1'),
('Speciality 2'),
('Speciality 3');

-- Insertions pour la table `serenity`.`specialist_has_speciality`
INSERT INTO `serenity`.`specialist_has_speciality` (`specialist_id`, `speciality_id`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- Insertions pour la table `serenity`.`steps_info`
INSERT INTO `serenity`.`steps_info` (`title`, `description`) VALUES
('Step 1', 'Description of step 1'),
('Step 2', 'Description of step 2'),
('Step 3', 'Description of step 3');

-- Insertions pour la table `serenity`.`read_steps_info`
INSERT INTO `serenity`.`read_steps_info` (`intervention_id`, `steps_info_id`, `is_checked`) VALUES
(1, 1, 0),
(2, 2, 1),
(3, 3, 1);
