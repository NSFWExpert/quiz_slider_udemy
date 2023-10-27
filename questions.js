//Creating an array with at least 10 Objects for the questions, which are later pulled randomly

// Demenz-Quiz
var questions = [
    {   // Question 1
        "question": "Worin kann man Demenzen unterscheiden?", // all values from question and options are strings (of course)
        "option1" : "In lineare und non-binäre Demenzen.",
        "option2" : "In vaskuläre und neuro-degenerative Demenzen.",
        "option3" : "In fluide und träge Demenzen.",
        "option4" : "Gar nicht. Sie sind alle gleich.",
        "answer": 2 // The Answer is just the Number of the correct option
    },
    {// Question 2
        "question": "Welche Aussage zählt nicht zur Demenzprävention?",
        "option1" : "Autofahren",
        "option2" : "Bewegung",
        "option3" : "Soziale Kontakte",
        "option4" : "Geistige Aktivität",
        "answer": 1
    },
    {// Question 3
        "question": "Was zählt nicht zur Demenz Diagnose?",
        "option1" : "Hörtest",
        "option2" : "Liquorprobe",
        "option3" : "Mini Mental Status Test",
        "option4" : "Bildgebende Verfahren",
        "answer": 1
    },
    {// Question 4
        "question": "Was zählt zur Kategorie sekundäre Demenzen?",
        "option1" : "Alzheimer-Demenz",
        "option2" : "Levy-Körper-Demenz",
        "option3" : "Fronto-Temporale Demenz",
        "option4" : "Pseudodemenz",
        "answer": 4
    },
    {// Question 5
        "question": "Wo findet man Informationsmaterial zum Thema Demenz?",
        "option1" : "Bei seinem Hausarzt.",
        "option2" : "Bei der Deutschen Alzheimer Gesellschaft.",
        "option3" : "Bei der Gesellschaft für Menschen mit Demenz in Deutschland.",
        "option4" : "Bei der Post.",
        "answer": 3
    },{// Question 6
        "question": "Welche Möglichkeiten sollten pflegende Angehörige für sich nutzen?",
        "option1" : "Es gibt nichts, was man machen kann.",
        "option2" : "Austausch in Selbsthilfegruppen.",
        "option3" : "Erholungsurlaub bei der Pflegekasse beantragen.",
        "option4" : "Zusatzleistungen beim Hausarzt verschreiben lassen.",
        "answer": 2
    },
    {// Question 7
        "question": "Wie können Pflegende Angehörige im Alltag entlastet werden?",
        "option1" : "Durch sogenannte zusätzliche Betreuungsangebote.",
        "option2" : "Durch Hilfe von der Apotheke.",
        "option3" : "Durch Hilfe vom Hausarzt.",
        "option4" : "Durch Hilfe vom Krankenhaus.",
        "answer": 1
    },
    {// Question 8
        "question": "Wo können pflegende Angehörige eine Beratung finden?",
        "option1" : "Im Telefonbuch.",
        "option2" : "In Social Media.",
        "option3" : "Bei der Pflegeberatung der Pflegekasse.",
        "option4" : "Bei der zentralen Beratungsvermittlung des Bundes.",
        "answer": 3
    },
    {// Question 9
        "question": "Wie kann man mit dem Herausfordernden Verhalten bei Demenz umgehen?",
        "option1" : "Durch regelämßiges Erinnern.",
        "option2" : "Durch Drohung.",
        "option3" : "Durch Validation.",
        "option4" : "Durch Emotionalisierung.",
        "answer": 3
    },
    {// Question 10
        "question": "Was kann die Ursache von herausforderndem Verhalten sein?",
        "option1" : "Unerfüllte Bedürfnisse.",
        "option2" : "Finanzielle Sorgen.",
        "option3" : "Alkohol.",
        "option4" : "Kaffee-Konsum.",
        "answer": 1
    },
];


/* -----------------------------------------------------------------------------------------------------------------
Structure without content is here, just copy, then edit, delete comments or comment unused parts
// Default structure:
var questions = [
{   // Question 1
    "question": "value", // all values from question and options are strings (of course)
    "option1" : "value",
    "option2" : "value",
    "option3" : "value",
    "option4" : "value",
    "answer": "value" // The Answer is just the Number of the correct option
},
{// Question 2
    "question": "value",
    "option1" : "value",
    "option2" : "value",
    "option3" : "value",
    "option4" : "value",
    "answer": "value"
},
{// Question 3
    "question": "value",
    "option1" : "value",
    "option2" : "value",
    "option3" : "value",
    "option4" : "value",
    "answer": "value"
},
{// Question 4
    "question": "value",
    "option1" : "value",
    "option2" : "value",
    "option3" : "value",
    "option4" : "value",
    "answer": "value"
},
{// Question 5
    "question": "value",
    "option1" : "value",
    "option2" : "value",
    "option3" : "value",
    "option4" : "value",
    "answer": "value"
},{// Question 6
    "question": "value",
    "option1" : "value",
    "option2" : "value",
    "option3" : "value",
    "option4" : "value",
    "answer": "value"
},
{// Question 7
    "question": "value",
    "option1" : "value",
    "option2" : "value",
    "option3" : "value",
    "option4" : "value",
    "answer": "value"
},
{// Question 8
    "question": "value",
    "option1" : "value",
    "option2" : "value",
    "option3" : "value",
    "option4" : "value",
    "answer": "value"
},
{// Question 9
    "question": "value",
    "option1" : "value",
    "option2" : "value",
    "option3" : "value",
    "option4" : "value",
    "answer": "value"
},
{// Question 10
    "question": "value",
    "option1" : "value",
    "option2" : "value",
    "option3" : "value",
    "option4" : "value",
    "answer": "value"
},
];

*/