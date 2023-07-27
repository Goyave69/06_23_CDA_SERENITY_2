-- Insérer des données dans la table `check_list`
INSERT INTO `serenity`.`check_list` (`id`, `name`, `subtext`) VALUES
(1, 'Checklist 1', 'Obligatoire'),
(2, 'Checklist 2', 'De moins de 3 jours');

-- Insérer des données dans la table `clinic`
INSERT INTO `serenity`.`clinic` (`id`, `name`, `address`, `city`, `zipcode`, `phone_number`, `email`, `handicap_access`, `free_parking`, `open_hours`, `close_hours`) VALUES
(1, 'Clinic 1', '123 Main Street', 'City 1', '12345', '123-456-7890', 'clinic1@example.com', 1, 1, '08:00:00', '17:00:00'),
(2, 'Clinic 2', '456 Elm Street', 'City 2', '67890', '987-654-3210', 'clinic2@example.com', 0, 1, '09:00:00', '18:00:00');

-- Insérer des données dans la table `user`
INSERT INTO `serenity`.`user` (`id`, `email`, `password`, `roles`, `phone_number`, `firstname`, `lastname`, `gender`, `birthdate`, `address`, `city`, `zipcode`, `country`, `family_situation`, `child`, `created_at`) VALUES
(1, 'user1@example.com', '$argon2id$v=19$m=65536,t=3,p=4$ZklWurDoLrvMGSM2IAeUWw$buc8JVRSYNY5zlS4OMfPgn3UovCs/xSy4cJj2boZom0', 1, '111-111-1111', 'John', 'Doe', 'Male', '1990-01-01', '123 First Street', 'City 1', '12345', 'Country 1', 'Single', 0, '2023-07-07 10:00:00'),
(2, 'user2@example.com', '$argon2id$v=19$m=65536,t=3,p=4$spb2Fq6XfjZRZAfNXn46gA$s5M+xMrmFFn52juW7G1Qi28mv5k6aKHtoC6qoaxee4I', 1, '222-222-2222', 'Jane', 'Smith', 'Female', '1995-01-01', '456 Second Street', 'City 2', '67890', 'Country 2', 'Married', 2, '2023-07-07 11:00:00');
-- User 1 Password : password1
-- User 2 Password : password2

-- Insérer des données dans la table `specialist`
INSERT INTO `serenity`.`specialist` (`id`, `user_id`) VALUES
(1, 1),
(2, 2);

-- Insérer des données dans la table `clinic_has_specialist`
INSERT INTO `serenity`.`clinic_has_specialist` (`clinic_id`, `specialist_id`) VALUES
(1, 1),
(2, 2);

-- Insérer des données dans la table `surgery`
INSERT INTO `serenity`.`surgery` (`id`, `name`, `location`) VALUES
(1, 'Surgery 1', 'Location 1'),
(2, 'Surgery 2', 'Location 2');

-- Insérer des données dans la table `intervention`
INSERT INTO `serenity`.`intervention` (`id`, `anaesthesia`, `date`, `duration`, `user_id`, `clinic_id`, `surgery_id`) VALUES
(1, 1, '2023-08-12 10:00:00', '02:00:00', 1, 1, 1),
(2, 2, '2023-09-12 10:00:00', '01:30:00', 2, 2, 2);


-- Insérer des données dans la table `steps_info`
INSERT INTO `serenity`.`steps_info` (`id`, `title`, `image`, `description`, `surgery_id`) VALUES
(1, 'Step 1', '0bcbda94-a200-4b6e-aa61-37479fd11103-heart-cartoon.png', 'Description for Step 1', 1),
(2, 'Step 2', '6b0a8da1-11c0-4d02-b816-73e9f81ffa96-hand-cartoon.png', 'Description for Step 2', 2);

-- Insérer des données dans la table `read_steps_info`
INSERT INTO `serenity`.`read_steps_info` (`id`, `is_checked`, `steps_info_id`, `intervention_id`) VALUES
(1, 1, 1, 1),
(2, 0, 2, 1);

-- Insérer des données dans la table `speciality`
INSERT INTO `serenity`.`speciality` (`id`, `name`) VALUES
(1, 'Speciality 1'),
(2, 'Speciality 2');

-- Insérer des données dans la table `specialist_has_speciality`
INSERT INTO `serenity`.`specialist_has_speciality` (`specialist_id`, `speciality_id`) VALUES
(1, 1),
(2, 2);

-- Insérer des données dans la table `specialist_has_intervention`
INSERT INTO `serenity`.`specialist_has_intervention` (`specialist_id`, `intervention_id`) VALUES
(1, 1),
(2, 2);

-- Insérer des données dans la table `read_arrival_preparation`
INSERT INTO `serenity`.`read_arrival_preparation` (`id`, `steps`, `intervention_id`) VALUES
(1, 1, 1),
(2, 0, 2);

-- Insérer des données dans la table `done_check_list`
INSERT INTO `serenity`.`done_check_list` (`id`, `is_checked`, `intervention_id`, `check_list_id`) VALUES
(1, 1, 1, 1),
(2, 0, 2, 2);

-- Insérer des données dans la table `appointment_for_intervention`
INSERT INTO `serenity`.`appointment_for_intervention` (`id`, `date`, `specialist_id`, `intervention_id`, `speciality_id`) VALUES
(1, '2023-07-10 15:00:00', 1, 1, 1),
(2, '2023-07-11 14:30:00', 2, 2, 2);

-- Insérer des données dans la table `done_administrative`
INSERT INTO `serenity`.`done_administrative` (`id`, `is_checked`, `category`, `intervention_id`) VALUES
(1, 1, 1, 1),
(2, 0, 2, 2);
