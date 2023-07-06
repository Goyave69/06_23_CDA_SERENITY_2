-- Table serenity.clinic
INSERT INTO `serenity`.`clinic` (`id`, `name`, `address`, `city`, `zipcode`, `phone_number`, `email`, `handicap_access`, `free_parking`, `open_hours`, `close_hours`) VALUES
(1, 'Clinic A', '123 Main Street', 'City A', '12345', '123-456-7890', 'clinicA@example.com', 1, 1, '08:00:00', '18:00:00'),
(2, 'Clinic B', '456 Elm Street', 'City B', '67890', '987-654-3210', 'clinicB@example.com', 0, 1, '09:00:00', '17:00:00');

-- Table serenity.user
INSERT INTO `serenity`.`user` (`id`, `email`, `password`, `phone_number`, `firstname`, `lastname`, `gender`, `birthdate`, `address`, `city`, `zipcode`, `country`, `family_situation`, `child`, `created_at`, `roles`) VALUES
(1, 'user1@example.com', '$argon2id$v=19$m=65536,t=3,p=4$iz5HhlXHVDbYEL/LbhHN+w$gDXco5nIM6i8DuM/1LNv1uDfQ7TQK53TIXKYH9AA5O4', '111-111-1111', 'John', 'Doe', 'Male', '1980-01-01', '789 Oak Street', 'City A', '12345', 'Country A', 'Married', 2, '2022-01-01 12:00:00', 1),
(2, 'user2@example.com', '$argon2id$v=19$m=65536,t=3,p=4$O6U3Km+IxC3L8UyMa7JNOQ$V9woZss1q40pVGzglleMFaCjAfClyZHNLrD4+iuRH8I', '222-222-2222', 'Jane', 'Smith', 'Female', '1990-02-02', '987 Pine Street', 'City B', '67890', 'Country B', 'Single', 0, '2022-02-02 12:00:00', 2);
-- Password User 1: password1
-- Password User 2: password2

-- Table serenity.intervention
INSERT INTO `serenity`.`intervention` (`id`, `name`, `anaesthesia`, `duration`, `location_body`, `user_id`, `clinic_id`) VALUES
(1, 'Intervention A', 1, '02:30:00', 1, 1, 1),
(2, 'Intervention B', 0, '01:45:00', 2, 2, 2);

-- Table serenity.appointment
INSERT INTO `serenity`.`appointment` (`id`, `date`, `type`, `user_id`, `intervention_id`) VALUES
(1, '2022-05-01 10:00:00', 'Type A', 1, 1),
(2, '2022-06-01 11:30:00', 'Type B', 2, 2);

-- Table serenity.check_list
INSERT INTO `serenity`.`check_list` (`id`, `identity_card`, `vital_card`, `blue_card`, `anaesthesia_appointment`, `appointment_id`) VALUES
(1, 1, 1, 0, 0, 1),
(2, 1, 0, 0, 1, 2);

-- Table serenity.specialist
INSERT INTO `serenity`.`specialist` (`id`, `user_id`) VALUES
(1, 1),
(2, 2);

-- Table serenity.clinic_has_specialist
INSERT INTO `serenity`.`clinic_has_specialist` (`clinic_id`, `specialist_id`) VALUES
(1, 1),
(2, 2);

-- Table serenity.steps_info
INSERT INTO `serenity`.`steps_info` (`id`, `title`, `description`) VALUES
(1, 'Step 1', 'Description of Step 1'),
(2, 'Step 2', 'Description of Step 2'),
(3, 'Step 3', 'Description of Step 3');

-- Table serenity.read_steps_info
INSERT INTO `serenity`.`read_steps_info` (`id`, `is_checked`, `steps_info_id`, `intervention_id`) VALUES
(1, 1, 1, 1),
(2, 0, 2, 2);

-- Table serenity.specialist_has_intervention
INSERT INTO `serenity`.`specialist_has_intervention` (`specialist_id`, `intervention_id`) VALUES
(1, 1),
(2, 2);

-- Table serenity.speciality
INSERT INTO `serenity`.`speciality` (`id`, `name`) VALUES
(1, 'Speciality A'),
(2, 'Speciality B');

-- Table serenity.specialist_has_speciality
INSERT INTO `serenity`.`specialist_has_speciality` (`specialist_id`, `speciality_id`) VALUES
(1, 1),
(2, 2);
