-- Insertions pour la table `serenity`.`user`
INSERT INTO `serenity`.`user` (`firstname`, `lastname`, `email`, `password`, `created_at`, `roles`) VALUES
('Alice', 'Smith', 'alice.smith@example.com', '$argon2id$v=19$m=65536,t=3,p=4$S/jParJAIny6cxKTN7T54g$IZykcIK48nESE00ud1fy3mCfvNya/zHuwvTkl3CWmlc', '2023-06-08 12:00:00', '["ROLE_USER"]'),
('Bob', 'Johnson', 'bob.johnson@example.com', '$argon2id$v=19$m=65536,t=3,p=4$WERaEYwgLXd8d3l7qJlE0Q$9QewYMWeCIg+Fbj66efohpA7JZhLB5q8MTfkVS408yg', '2023-06-08 13:00:00', '["ROLE_USER"]'),
('Charlie', 'Brown', 'charlie.brown@example.com', '$argon2id$v=19$m=65536,t=3,p=4$ExENtD5LZWvfx45UyFADFQ$WdudY+XcFXjCFBmKuWHLNGndeLTFTZwWCpyqzEwy3WQ', '2023-06-08 14:00:00', '["ROLE_USER"]');
-- Password User 1: password123
-- Password User 2: password456
-- Password User 3: password789

-- Insert into `user`
INSERT INTO `serenity`.`user` (`id`, `firstname`, `lastname`, `email`, `address`, `city`, `zipcode`, `phone_number`, `password`, `roles`)
VALUES
(1, 'John', 'Doe', 'john.doe@example.com', '123 Main Street', 'New York', '10001', '555-1234', '$argon2id$v=19$m=65536,t=3,p=4$S/jParJAIny6cxKTN7T54g$IZykcIK48nESE00ud1fy3mCfvNya/zHuwvTkl3CWmlc', '["ROLE_USER"]'),
(2, 'Jane', 'Doe', 'jane.doe@example.com', '456 Elm Street', 'Los Angeles', '90001', '555-5678', '$argon2id$v=19$m=65536,t=3,p=4$WERaEYwgLXd8d3l7qJlE0Q$9QewYMWeCIg+Fbj66efohpA7JZhLB5q8MTfkVS408yg', '["ROLE_USER"]');
-- Password User 1: password123
-- Password User 2: password456

-- Insert into `clinic`
INSERT INTO `serenity`.`clinic` (`id`, `name`, `address`, `city`, `zipcode`, `phone_number`, `email`, `handicap_access`, `free_parking`) 
VALUES 
(1, 'Clinic 1', '123 Main St', 'Anytown', '12345', '555-555-5555', 'clinic1@example.com', 1, 0),
(2, 'Clinic 2', '456 Main St', 'Anytown', '12345', '555-555-5555', 'clinic2@example.com', 0, 1);

-- Insert into `specialist`
INSERT INTO `serenity`.`specialist` ( `user_id`) 
VALUES 
(1),
(2);

-- Insertions pour la table `serenity`.`intervention`
INSERT INTO `serenity`.`intervention` (`name`, `anaesthesia`, `duration`, `location_body`, `user_id`, `clinic_id`) VALUES
('Intervention 1', 1, NULL, 1, 1, 1),
('Intervention 2', 0, '02:30:00', 2, 2, 2);

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
INSERT INTO `serenity`.`check_list` (`id`, `identity_card`, `vital_card`, `blue_card`, `anaesthesia_appointment`, `appointment_id`) 
VALUES 
(1, 1, 1, 1, 1, 1),
(2, 1, 1, 1, 1, 2);

-- Insert into `patient_form`
INSERT INTO `serenity`.`patient_form` (`id`, `gender`, `birthdate`, `address`, `zipcode`, `city`, `country`, `family_situation`, `child`, `user_id`) 
VALUES 
(1, 'Male', '1980-01-01', '123 Main St', '12345', 'Anytown', 'USA', 'Single', 0, 1),
(2, 'Female', '1985-02-01', '456 Main St', '12345', 'Anytown', 'USA', 'Married', 1, 2);


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

-- Insertions pour la table `serenity`.`steps_info`
INSERT INTO `serenity`.`steps_info` (`title`, `description`) VALUES
('Step 1', 'Description of step 1'),
('Step 2', 'Description of step 2'),
('Step 3', 'Description of step 3');

-- Insertions pour la table `serenity`.`read_steps_info`
INSERT INTO `serenity`.`read_steps_info` (`intervention_id`, `steps_info_id`, `is_checked`) VALUES
(1, 1, 0),
(2, 2, 1);
