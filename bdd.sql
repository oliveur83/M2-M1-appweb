CREATE DATABASE TrackMates;
USE TrackMates;

CREATE TABLE utilisateur (
    id_util INT PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    passeword VARCHAR(255)
);
-- mettre univ et la fomration 
CREATE TABLE ue (
    id_ue INT PRIMARY KEY,
    label VARCHAR(255)
);
CREATE TABLE util_ue (
    id_ue INT,
    id_util INT,
    PRIMARY KEY (id_ue, id_util),
    FOREIGN KEY (id_ue) REFERENCES ue(id_ue),
    FOREIGN KEY (id_util) REFERENCES utilisateur(id_util)
);
CREATE TABLE theme (
    id_theme INT PRIMARY KEY,
    label VARCHAR(255),
    id_ue INT,
    FOREIGN KEY (id_ue) REFERENCES ue(id_ue)
);
CREATE TABLE quizz (
    id_quizz INT PRIMARY KEY,
    label VARCHAR(255),
    nb_jaime INT,
    id_theme INT,
    id_util INT,
    FOREIGN KEY (id_theme) REFERENCES theme(id_theme),
    FOREIGN KEY (id_util) REFERENCES utilisateur(id_util)
);
CREATE TABLE question (
    id_question INT PRIMARY KEY,
    label VARCHAR(255),
    id_quizz INT,
    FOREIGN KEY (id_quizz) REFERENCES quizz(id_quizz)
);
CREATE TABLE reponse (
    id_reponse INT PRIMARY KEY,
    label VARCHAR(255),
    id_question INT,
    FOREIGN KEY (id_question) REFERENCES question(id_question)
);
CREATE TABLE study (
    id_study INT PRIMARY KEY,
    label VARCHAR(255),
    id_theme INT,
    FOREIGN KEY (id_theme) REFERENCES theme(id_theme)
);
CREATE TABLE chat (
    id_chat INT PRIMARY KEY,
    label VARCHAR(255),
    id_study INT,
    FOREIGN KEY (id_study) REFERENCES study(id_study)
);
CREATE TABLE mdj_choix (
    id_mdj_choix INT PRIMARY KEY,
    nb_jours INT,
    id_util INT,
    FOREIGN KEY (id_util) REFERENCES util_ue(id_util)
);
CREATE TABLE note_quizz (
    id_note_quizz INT PRIMARY KEY,
    id_util INT,
    id_quizz INT,
     FOREIGN KEY (id_util) REFERENCES utilisateur(id_util),
    FOREIGN KEY (id_quizz) REFERENCES quizz(id_quizz)
);


