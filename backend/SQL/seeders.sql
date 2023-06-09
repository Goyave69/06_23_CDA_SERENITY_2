-- Insertions pour la table `serenity`.`user`
INSERT INTO `serenity`.`user` (`firstname`, `lastname`, `email`, `password`, `created_at`, `roles`) VALUES
('Alice', 'Smith', 'alice.smith@example.com', 'password123', '2023-06-08 12:00:00', '{"role": "user"}'),
('Bob', 'Johnson', 'bob.johnson@example.com', 'password456', '2023-06-08 13:00:00', '{"role": "user"}'),
('Charlie', 'Brown', 'charlie.brown@example.com', 'password789', '2023-06-08 14:00:00', '{"role": "user"}');

-- Insertions pour la table `serenity`.`clinic`
INSERT INTO `serenity`.`clinic` (`name`, `address`, `city`, `zipcode`, `phone_number`, `email`, `handicap_access`, `free_parking`) VALUES
('ABC Clinic', '456 Oak Street', 'Townsville', '54321', '987-654-3210', 'info@abcclinic.com', 1, 1),
('XYZ Clinic', '789 Maple Avenue', 'Cityville', '12345', '123-456-7890', 'info@xyzclinic.com', 0, 1),
('123 Clinic', '321 Elm Road', 'Villageville', '98765', '456-789-0123', 'info@123clinic.com', 1, 0);

-- Insertions pour la table `serenity`.`intervention`
INSERT INTO `serenity`.`intervention` (`name`, `anaesthesia`, `duration`, `location_body`, `user_id`, `clinic_id`) VALUES
('Intervention 1', 1, NULL, 1, 1, 1),
('Intervention 2', 0, '02:30:00', 2, 2, 2),
('Intervention 3', 1, '01:15:00', 3, 3, 3);

-- Insertions pour la table `serenity`.`appointment`
INSERT INTO `serenity`.`appointment` (`date`, `user_id`, `intervention_id`) VALUES
('2023-06-10 10:00:00', 1, 1),
('2023-06-11 14:30:00', 2, 2),
('2023-06-12 09:15:00', 3, 3);

-- Insertions pour la table `serenity`.`specialist`
INSERT INTO `serenity`.`specialist` (`user_id`) VALUES
(1),
(2),
(3);

-- Insertions pour la table `serenity`.`clinic_has_specialist`
INSERT INTO `serenity`.`clinic_has_specialist` (`clinic_id`, `specialist_id`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- Insertions pour la table `serenity`.`clinic_hours`
INSERT INTO `serenity`.`clinic_hours` (`clinic_id`, `open_hours`, `close_hours`, `day`) VALUES
(1, '08:00:00', '17:00:00', 1),
(2, '09:30:00', '18:30:00', 2),
(3, '07:00:00', '16:00:00', 3);

-- Insertions pour la table `serenity`.`check_list`
INSERT INTO `serenity`.`check_list` (`identity_card`, `vital_card`, `blue_card`, `anesthesia_appointment`, `appointment_id`) VALUES
(1, 1, 0, 1, 1),
(0, 1, 1, 0, 2),
(1, 0, 1, 1, 3);

-- Insertions pour la table `serenity`.`patient_form`
INSERT INTO `serenity`.`patient_form` (`gender`, `birthdate`, `address`, `zipcode`, `city`, `country`, `family_situation`, `child`, `user_id`) VALUES
('Female', '1985-03-15', '789 Pine Lane', '23456', 'Countryside', 'Countryland', 'Single', 0, 1),
('Male', '1979-09-20', '123 Cedar Avenue', '87654', 'Urbanville', 'Countryland', 'Married', 2, 2),
('Female', '1992-07-10', '456 Walnut Street', '54321', 'Citytown', 'Countryland', 'Married', 1, 3);

-- Insertions pour la table `serenity`.`specialist_has_intervention`
INSERT INTO `serenity`.`specialist_has_intervention` (`specialist_id`, `intervention_id`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- Insertions pour la table `serenity`.`specialty`
INSERT INTO `serenity`.`specialty` (`name`) VALUES
('Specialty 1'),
('Specialty 2'),
('Specialty 3');

-- Insertions pour la table `serenity`.`specialist_has_specialty`
INSERT INTO `serenity`.`specialist_has_specialty` (`specialist_id`, `specialty_id`) VALUES
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
