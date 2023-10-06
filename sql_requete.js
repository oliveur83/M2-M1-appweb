//back end en node.js
//structure des requete sql en js 
//tout mes requete sont des exemple qui pourront/devrons etre 
//modifier pour fonctionner en fonction du cas 

//TODO:  carte mental perso ou general 

/*
**************************
Table utilisateur
**************************
*/
//selection de tout les utilisateur 
const sql_read_utilisateur = "SELECT * FROM utilisateur;";
//insertion d'un utilisateur 
const sql_insert_utilisateur = "INSERT INTO utilisateur (nom, prenom, passeword) VALUES (?, ?, ?);";
const insertValues_utilisateur = ['Nom', 'Prénom', 'MotDePasse'];
//update d'un utilisateur 
const sql_up_utilisateur = "UPDATE utilisateur SET nom = ? WHERE id_util = ?;";
const updateValues_utilisateur = ['NouveauNom', 1];
//delete d'un utilisateur 
const sql_delete_utilisateur = "DELETE FROM utilisateur WHERE id_util = ?;";
const deleteValues_utilisateur = [1];
/*
**************************
Table ue
**************************
*/
//selection de ue 
const sql_read_ue = "SELECT * FROM ue;";
//insertion d'un ue 
const sql_insert_ue = "INSERT INTO ue (label) VALUES (?);";
const insertValues_ue = ['Nom de l\'UE'];
//update d'un ue 
const sql_up_ue = "UPDATE ue SET label = ? WHERE id_ue = ?;";
const updateValues_ue = ['NouveauNomUE', 1];
//delete d'un ue 
const sql_delete_ue = "DELETE FROM ue WHERE id_ue = ?;";
const deleteValues_ue = [1];
/*
**************************
Table util_ue
**************************
*/
//selection de tout utilisateur qui on des ue dans leur liste 
const sql_read_util_ue = "SELECT * FROM util_ue;";
//selection la liste des ue d'un utilisateur 
const sql_read_util_ue_one = "SELECT * FROM util_ue where id_util=?;";
const sql_select_liste_util = [1];
//insertion d'un ue dans la liste d'un utilisateur 
const sql_insert_util_ue = "INSERT INTO util_ue (id_util, id_ue) VALUES (?, ?);";
const insertValues_util_ue = [1, 1];
//delete d'un ue dans la liste d'un utilisateur 
const sql_delete_util_ue = "DELETE FROM util_ue WHERE id_util = ? AND id_ue = ?;";
const deleteValues_util_ue = [1, 2];
/*
**************************
 Table theme
**************************
*/
// selection de tout les theme par rapport a l'ue 
const sql_read_theme = "SELECT * FROM theme where id_ue=?;";
const readValues_theme = [1];
//insertion d'un theme dans ue (pour carte mental )
const sql_insert_theme = "INSERT INTO theme (label, id_ue) VALUES (?, ?);";
const insertValues_theme = ['Nom du thème', 1];
//update d'un theme dans un ue (pour carte mental )
const sql_up_theme = "UPDATE theme SET label  ? WHERE id_theme = ?;";
const updateValues_theme = ['NouveauNomTheme', 1];
// delete d'un theme s
const sql_delete_theme = "DELETE FROM theme WHERE id_theme = ?;";
const deleteValues_theme = [1];
/*
**************************
 Table quizz
**************************
*/
// selection de tout les quizz
const sql_read_quizz = "SELECT * FROM quizz;";
//TODO : selectionne les quizz quon a realiser 
//TODO: selectionner les quizz d'un ue particulier 
//insertion d'un quizz (creation d'un quizz)
const sql_insert_quizz = "INSERT INTO quizz (label, nb_jaime, id_theme, id_util) VALUES (?, ?, ?, ?);";
const insertValues_quizz = ['Nom du quizz', 0, 1, 1];
//update d'un quizz 
const sql_up_quizz = "UPDATE quizz SET label = ? WHERE id_quizz = ?;";
const updateValues_quizz = ['NouveauNomQuizz', 1];
//delete d'un quizz
const sql_delete_quizz = "DELETE FROM quizz WHERE id_quizz = ?;";
const deleteValues_quizz = [1];
/*
**************************
 Table question
**************************
*/
//seletion de tout les question 
const sql_read_question = "SELECT * FROM question;";
// selection des question par rapport au quizz
// insertion des création (creation de quizz-> creation de reponser )
const sql_insert_question = "INSERT INTO question (label, id_quizz) VALUES (?, ?);";
const insertValues_question = ['Enonce de la question', 1];
///update des question 
const sql_up_question = "UPDATE question SET label = ? WHERE id_question = ?;";
const updateValues_question = ['NouveauEnonceQuestion', 1];
//delete des question 
const sql_delete_question = "DELETE FROM question WHERE id_question = ?;";
const deleteValues_question = [1];
/*
**************************
 Table reponse
**************************
*/
//selection de toute les reponse 
const sql_read_reponse = "SELECT * FROM reponse;";
//TODO :selection des réponse en fonction de la question 

//insertion des reponser
const sql_insert_reponse = "INSERT INTO reponse (label, id_question) VALUES (?, ?);";
const insertValues_reponse = ['Texte de la réponse', 1];
//update des reponse
const sql_up_reponse = "UPDATE reponse SET label = ? WHERE id_reponse = ?;";
const updateValues_reponse = ['NouveauTexteReponse', 1];
//delete des reponser
const sql_delete_reponse = "DELETE FROM reponse WHERE id_reponse = ?;";
const deleteValues_reponse = [1];
/*
**************************
 Table study
**************************
*/
//selection de tout les study
const sql_read_study = "SELECT * FROM study;";
//TODO : selection du study en fonction du theme 
// insertion d'un study 
const sql_insert_study = "INSERT INTO study (label, id_theme) VALUES (?, ?);";
const insertValues_study = ['Nom de l\'étude', 1];
//update d'un study 
const sql_up_study = "UPDATE study SET label = ? WHERE id_study = ?;";
const updateValues_study = ['NouveauNomEtude', 1];
//delete d'un study
const sql_delete_study = "DELETE FROM study WHERE id_study = ?;";
const deleteValues_study = [1];
/*
**************************
 Table chat
**************************
*/
//selection de toute les chat 
const sql_read_chat = "SELECT * FROM chat;";
// TODO : selection du chat en fonction du study
// insertion d'un message dans le chat 
const sql_insert_chat = "INSERT INTO chat (label, id_study) VALUES (?, ?);";
const insertValues_chat = ['Nom du chat', 1];
//update d'un chat
const sql_up_chat = "UPDATE chat SET label = ? WHERE id_chat = ?;";
const updateValues_chat = ['NouveauNomChat', 1];
//delete d'un chat
const sql_delete_chat = "DELETE FROM chat WHERE id_chat = ?;";
const deleteValues_chat = [1];

/*
**************************
  Table mdj_choix
**************************
*/
//
const sql_read_mdj_choix = "SELECT * FROM mdj_choix;";
//
const sql_insert_mdj_choix = "INSERT INTO mdj_choix (nb_jours, id_util) VALUES (?, ?);";
const insertValues_mdj_choix = [7, 1];
//
const sql_up_mdj_choix = "UPDATE mdj_choix SET nb_jours = ? WHERE id_mdj_choix = ?;";
const updateValues_mdj_choix = [30, 1];
//
const sql_delete_mdj_choix = "DELETE FROM mdj_choix WHERE id_mdj_choix = ?;";
const deleteValues_mdj_choix = [1];
/*
**************************
  Table note quizz
**************************
*/
//selection du tout 
const sql_read_note_quizz = "SELECT * FROM note_quizz;";
// TODO : selection des note pour utilisateur chosii
// isnertion des notes
const sql_insert_note_quizz = "INSERT INTO note_quizz (id_util, id_quizz) VALUES (?, ?);";
const insertValues_note_quizz = [1, 1];
// update des notes
const sql_up_note_quizz = "UPDATE note_quizz SET id_util = ? WHERE id_note_quizz = ?;";
const updateValues_note_quizz = [2, 1];
// delete des notes 
const sql_delete_note_quizz = "DELETE FROM note_quizz WHERE id_note_quizz = ?;";
const deleteValues_note_quizz = [1];

