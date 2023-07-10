-- Génération des fausses données pour la table check_list
INSERT INTO check_list (name) VALUES
  ('CheckList1'),
  ('CheckList2');

-- Génération des fausses données pour la table clinic
INSERT INTO clinic (name, address, city, zipcode, phone_number, email, handicap_access, free_parking, open_hours, close_hours) VALUES
  ('Clinic1', '123 Main St', 'City1', '12345', '123-456-7890', 'clinic1@example.com', 1, 1, '08:00:00', '17:00:00'),
  ('Clinic2', '456 Elm St', 'City2', '67890', '987-654-3210', 'clinic2@example.com', 0, 1, '09:00:00', '18:00:00');

-- Génération des fausses données pour la table user
INSERT INTO user (email, password, roles, phone_number, firstname, lastname, gender, birthdate, address, city, zipcode, country, family_situation, child, created_at) VALUES
  ('user1@example.com', 'password1', 1, '123-456-7890', 'John', 'Doe', 'Male', '1990-01-01', '123 Main St', 'City1', '12345', 'Country1', 'Married', 2, NOW()),
  ('user2@example.com', 'password2', 2, '987-654-3210', 'Jane', 'Smith', 'Female', '1995-02-02', '456 Elm St', 'City2', '67890', 'Country2', 'Single', 0, NOW());

-- Génération des fausses données pour la table specialist
INSERT INTO specialist (user_id) VALUES
  (1),
  (2);

-- Génération des fausses données pour la table clinic_has_specialist
INSERT INTO clinic_has_specialist (clinic_id, specialist_id) VALUES
  (1, 1),
  (2, 2);

-- Génération des fausses données pour la table surgery
INSERT INTO surgery (id, name, location) VALUES
  (1, 'Surgery1', 'Location1'),
  (2, 'Surgery2', 'Location2');

-- Génération des fausses données pour la table intervention
INSERT INTO intervention (anaesthesia, date, duration, user_id, clinic_id, surgery_id) VALUES
  (1, '2023-07-10', '02:30:00', 1, 1, 1),
  (2, '2023-07-11', '01:45:00', 2, 2, 2);

-- Génération des fausses données pour la table steps_info
INSERT INTO steps_info (title, description, surgery_id) VALUES
  ('Step1', 'Description1', 1),
  ('Step2', 'Description2', 2);

-- Génération des fausses données pour la table read_steps_info
INSERT INTO read_steps_info (is_checked, steps_info_id, intervention_id) VALUES
  (1, 1, 1),
  (0, 2, 2);

-- Génération des fausses données pour la table speciality
INSERT INTO speciality (name) VALUES
  ('Speciality1'),
  ('Speciality2');

-- Génération des fausses données pour la table specialist_has_speciality
INSERT INTO specialist_has_speciality (specialist_id, speciality_id) VALUES
  (1, 1),
  (2, 2);

-- Génération des fausses données pour la table specialist_has_intervention
INSERT INTO specialist_has_intervention (specialist_id, intervention_id) VALUES
  (1, 1),
  (2, 2);

-- Génération des fausses données pour la table arrival_preparation
INSERT INTO arrival_preparation (title, description, image) VALUES
  ('Preparation1', 'Description1', 'image1.jpg'),
  ('Preparation2', 'Description2', 'image2.jpg');

-- Génération des fausses données pour la table read_arrival_preparation
INSERT INTO read_arrival_preparation (is_checked, intervention_id, arrival_preparation_id) VALUES
  (1, 1, 1),
  (0, 2, 2);

-- Génération des fausses données pour la table done_check_list
INSERT INTO done_check_list (is_checked, intervention_id, check_list_id) VALUES
  (1, 1, 1),
  (0, 2, 2);

-- Génération des fausses données pour la table administrative
INSERT INTO administrative (title) VALUES
  ('Administrative1'),
  ('Administrative2');

-- Génération des fausses données pour la table done_administrative
INSERT INTO done_administrative (is_checked, intervention_id, administrative_id) VALUES
  (1, 1, 1),
  (0, 2, 2);