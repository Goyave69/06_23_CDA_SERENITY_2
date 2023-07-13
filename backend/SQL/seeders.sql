-- Insérer des données dans la table `check_list`
INSERT INTO `serenity`.`check_list` (`id`, `name`) VALUES
(1, 'Checklist 1'),
(2, 'Checklist 2');

-- Insérer des données dans la table `clinic`
INSERT INTO `serenity`.`clinic` (`id`, `name`, `address`, `city`, `zipcode`, `phone_number`, `email`, `handicap_access`, `free_parking`, `open_hours`, `close_hours`) VALUES
(1, 'Clinic 1', '123 Main Street', 'City 1', '12345', '123-456-7890', 'clinic1@example.com', 1, 1, '08:00:00', '17:00:00'),
(2, 'Clinic 2', '456 Elm Street', 'City 2', '67890', '987-654-3210', 'clinic2@example.com', 0, 1, '09:00:00', '18:00:00');

-- Insérer des données dans la table `user`
INSERT INTO `serenity`.`user` (`id`, `email`, `password`, `roles`, `phone_number`, `firstname`, `lastname`, `gender`, `birthdate`, `address`, `city`, `zipcode`, `country`, `family_situation`, `child`, `created_at`) VALUES
(1, 'user1@example.com', 'password1', 1, '111-111-1111', 'John', 'Doe', 'Male', '1990-01-01', '123 First Street', 'City 1', '12345', 'Country 1', 'Single', 0, '2023-07-07 10:00:00'),
(2, 'user2@example.com', 'password2', 1, '222-222-2222', 'Jane', 'Smith', 'Female', '1995-01-01', '456 Second Street', 'City 2', '67890', 'Country 2', 'Married', 2, '2023-07-07 11:00:00');

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
(1, 1, '2023-07-12 10:00:00', '02:00:00', 1, 1, 1),
(2, 2, '2023-07-12 10:00:00', '01:30:00', 2, 2, 2);

-- Insérer des données dans la table `steps_info`
INSERT INTO `serenity`.`steps_info` (`id`, `title`, `description`, `surgery_id`) VALUES
(1, 'Step 1', 'Description for Step 1', 1),
(2, 'Step 2', 'Description for Step 2', 2),
(3, 'Step 3', 'Description for Step 3', 2);

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

-- Insérer des données dans la table `arrival_preparation`
INSERT INTO `serenity`.`arrival_preparation` (`id`, `title`, `description`, `image`) VALUES
(1, 'Preparation 1', 'Description for Preparation 1', 'image1.jpg'),
(2, 'Preparation 2', 'Description for Preparation 2', 'image2.jpg');

-- Insérer des données dans la table `read_arrival_preparation`
INSERT INTO `serenity`.`read_arrival_preparation` (`id`, `is_checked`, `intervention_id`, `arrival_preparation_id`) VALUES
(1, 1, 1, 1),
(2, 0, 2, 2);

-- Insérer des données dans la table `done_check_list`
INSERT INTO `serenity`.`done_check_list` (`id`, `is_checked`, `intervention_id`, `check_list_id`) VALUES
(1, 1, 1, 1),
(2, 0, 2, 2);

-- Insérer des données dans la table `appointment_fo_intervention`
INSERT INTO `serenity`.`appointment_fo_intervention` (`id`, `date`, `specialist_id`, `intervention_id`, `speciality_id`) VALUES
(1, '2023-07-12 10:00:00', 1, 1, 1),
(2, '2023-07-12 10:00:00', 2, 2, 2);

-- Insérer des données dans la table `administrative`
INSERT INTO `serenity`.`administrative` (`id`, `title`) VALUES
(1, 'Administrative 1'),
(2, 'Administrative 2');

-- Insérer des données dans la table `done_administrative`
INSERT INTO `serenity`.`done_administrative` (`id`, `is_checked`, `intervention_id`, `administrative_id`) VALUES
(1, 1, 1, 1),
(2, 0, 2, 2);
