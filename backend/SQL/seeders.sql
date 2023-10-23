-- Insérer des données dans la table `check_list`
INSERT INTO `serenity`.`check_list` (`id`, `name`, `subtext`) VALUES
(1, 'Carte Vitale', 'Obligatoire'),
(2, 'CB', 'Conseillé');

-- Insérer des données dans la table `clinic`
INSERT INTO `serenity`.`clinic` (`id`, `name`, `address`, `city`, `zipcode`, `phone_number`, `email`, `handicap_access`, `free_parking`, `open_hours`, `close_hours`) VALUES
(1, 'CLINEA Clinique De Champvert', '71 Rue Benoist Mary', 'Lyon', '69005', '04 28 63 69 20', 'contact.champvert@clinea.fr', 1, 1, '08:00:00', '19:00:00'),
(2, 'Clinique Saint Charles', '25 Rue de Flesselles', 'Lyon', '69001', '04 72 10 26 26', ' contact@cliniquesaintcharles.fr', 1, 1, '06:30:00', '19:30:00');

-- Insérer des données dans la table `user`
INSERT INTO `serenity`.`user` (`id`, `email`, `password`, `roles`, `phone_number`, `firstname`, `lastname`, `gender`, `birthdate`, `address`, `city`, `zipcode`, `country`, `family_situation`, `child`, `created_at`) VALUES
-- Admin 1 | Password : phpmyadmin
(1,'devmaster@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$V8wcvwCpiqqxLJjm0XDWPg$B+fTzDGen1ZlVWVRKw0a/RMJAS3EBS5GtL4tPjdznO8', 3, '111-111-1111', 'Majid', 'System', null, null, null, null, null, null, null, null, '2023-07-07 10:00:00'),

-- Practicien 1 | Password : chir1
(2,'e.herriot@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$OoC8KDq1EkKjZC/J9KBFDg$PsizE4dwNMYK4eaL1YH4CyCboPZ4fRRTg8DHLxtFwEw', 2, '0 825 08 25 69', 'Édouart', 'Herriot', null, null, '20 rue des Profs', null, '75009', null, null, null, '2023-07-08 10:00:00'),

-- Practicien 2 | Password : boycott
(3,'mme.parks@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$XQnE6wy87JMhg2303lGm9A$bYcj8EMbpt4pWhycMXbS7pUu8RQrpCHdfM7cgZ5NIPc', 2, '123-456-7890', 'Rosa', 'Parks', null, null, '20 rue du Boycott', null, '69001', null, null, null, '2023-07-08 11:00:00'),

-- Patient 1 | Password : password1
(4,'j.doe@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$ZklWurDoLrvMGSM2IAeUWw$buc8JVRSYNY5zlS4OMfPgn3UovCs/xSy4cJj2boZom0', 1, '04 03 02 01 00', 'John', 'Doe', 'Male', '1990-01-01', '123 rue de la Paix', 'Paris', '75001', 'France', 'Célibataire', 0, '2023-07-09 10:00:00'),

-- Patient 2 | Password : password2
(5,'jane.smith@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$spb2Fq6XfjZRZAfNXn46gA$s5M+xMrmFFn52juW7G1Qi28mv5k6aKHtoC6qoaxee4I', 1, '06 06 06 06 06', 'Jane', 'Smith', null, null, null, null, null, null, null, null, '2023-07-09 11:00:00'),

-- Patient 3 | Password : password2
(6,'beni@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$spb2Fq6XfjZRZAfNXn46gA$s5M+xMrmFFn52juW7G1Qi28mv5k6aKHtoC6qoaxee4I', 1, '06 06 06 06 06', 'Jamais', 'Malade', 'Male', '1980-04-09', '25 rue Duchamps', 'Paris', '75008', 'France', 'Marié', 3, '2023-07-09 11:00:00');

-- Insérer des données dans la table `specialist`
INSERT INTO `serenity`.`specialist` (`id`, `user_id`) VALUES
(1, 2),
(2, 3);

-- Insérer des données dans la table `clinic_has_specialist`
INSERT INTO `serenity`.`clinic_has_specialist` (`clinic_id`, `specialist_id`) VALUES
(1, 1),
(2, 2);

-- Insérer des données dans la table `surgery`
INSERT INTO `serenity`.`surgery` (`id`, `name`, `location`) VALUES
(1, 'Ablation du coeur', 'Poitrine'),
(2, 'Canal Carpien', 'Poignet');

-- Insérer des données dans la table `intervention`
INSERT INTO `serenity`.`intervention` (`anaesthesia`, `date`, `duration`, `user_id`, `clinic_id`, `surgery_id`) VALUES
(2, '2023-08-12 10:00:00', '02:00:00', 4, 1, 1),
(2, '2023-09-12 15:00:00', '02:00:00', 6, 1, 1),
(1, '2023-10-22 11:00:00', '01:00:00', 6, 2, 2),
(2, '2023-11-02 13:00:00', '02:00:00', 6, 1, 1);


-- Insérer des données dans la table `steps_info`
INSERT INTO `serenity`.`steps_info` (`id`, `title`, `image`, `description`, `surgery_id`) VALUES
(1, "Qu'est-ce que l'ablation ?", '1930bf52-869a-44e7-a38d-6100c86ba4bb-fibrilation-atrial.jpg', "L'ablation est une intervention destinée à rétablir le rythme normal du cœur, particulièrement si celui-ci ne réagit pas aux médicaments. Habituellement, le cœur bat entre 60 et 80 fois à la minute. L'action de pompage du cœur est déclenchée par des impulsions électriques. L'ablation peut servir à traiter un cœur dont les battements sont trop rapides (plus de 100 battements par minute), un problème appelé tachycardie ou un cœur qui bat en se contractant de façon désordonnée, un problème appelé fibrillation. ", 1),
(2, "Qu'est-ce que le syndrome du canal carpien ?", '3817b89d-bff0-4bda-835a-b142975f17ed-canal-carpien.jpg', "Le syndrome du canal carpien est une lésion qui touche la main et le poignet. Le canal carpien est un espace délimité par les os du poignet et un ligament rigide qui relie les os les uns aux autres. C'est par ce canal que passent le nerf médian de la main ainsi que les tendons des muscles fléchisseurs des doigts. Ces tendons relient les muscles aux os de la main; c'est par eux que sont relayés les mouvement des muscles aux os.", 2);

-- Insérer des données dans la table `read_steps_info`
INSERT INTO `serenity`.`read_steps_info` (`id`, `is_checked`, `steps_info_id`, `intervention_id`) VALUES
(1, 0, 1, 1),
(2, 1, 1, 2),
(3, 0, 2, 3),
(4, 0, 1, 4);

-- Insérer des données dans la table `speciality`
INSERT INTO `serenity`.`speciality` (`id`, `name`) VALUES
(1, 'Cardiologue'),
(2, 'Rhumatologue');

-- Insérer des données dans la table `specialist_has_speciality`
INSERT INTO `serenity`.`specialist_has_speciality` (`specialist_id`, `speciality_id`) VALUES
(1, 1),
(2, 2);

-- Insérer des données dans la table `specialist_has_intervention`
INSERT INTO `serenity`.`specialist_has_intervention` (`specialist_id`, `intervention_id`) VALUES
(1, 1),
(1, 2),
(2, 3),
(1, 4);

-- Insérer des données dans la table `read_arrival_preparation`
INSERT INTO `serenity`.`read_arrival_preparation` (`id`, `steps`, `intervention_id`) VALUES
(1, 1, 1),
(2, 5, 2),
(3, 0, 3),
(4, 0, 4);

-- Insérer des données dans la table `done_check_list`
INSERT INTO `serenity`.`done_check_list` (`id`, `is_checked`, `intervention_id`, `check_list_id`) VALUES
(1, 1, 1, 1),
(2, 0, 1, 2),
(1, 1, 2, 1),
(2, 1, 2, 2),
(1, 0, 3, 1),
(2, 0, 3, 2),
(1, 0, 4, 1),
(2, 0, 4, 2);

-- Insérer des données dans la table `appointment_for_intervention`
INSERT INTO `serenity`.`appointment_for_intervention` (`date`, `specialist_id`, `intervention_id`, `speciality_id`) VALUES
('2023-09-10 15:00:00', 1, 1, 1),
('2023-10-11 10:00:00', 2, 1, 2),
('2023-11-21 15:00:00', 1, 2, 1),
('2023-09-10 15:00:00', 2, 2, 2),
(null, null, 3, 1),
(null, null, 3, 1),
(null, null, 4, 1),
(null, null, 4, 1),
(null, null, 4, 1);

-- Insérer des données dans la table `done_administrative`
INSERT INTO `serenity`.`done_administrative` (`is_checked`, `category`, `intervention_id`) VALUES
(1, 1, 1),
(1, 2, 1),
(0, 3, 1),
(1, 1, 2),
(1, 2, 2),
(1, 3, 2),
(0, 1, 3),
(0, 2, 3),
(0, 3, 3),
(0, 1, 4),
(0, 2, 4),
(0, 3, 4);