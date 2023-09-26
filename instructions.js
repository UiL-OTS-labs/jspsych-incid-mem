/*
 * In this file the instructions are defined that are used throughout
 * the experiment.
 * Make sure when editing this file, the file is stored with
 * utf8 text encoding.
 */

const FULLSCREEN_PROMPT =
    "<p>Druk op de knop hieronder om naar een volledig scherm te gaan.</p>";

const FULLSCREEN_BUTTON_LABEL = 
    "Ga naar een volledig scherm.";

const PRE_TRAINING_INSTRUCTION =
    "Je gaat zo luisteren naar woorden uit een buitenaardse taal. Elk woord " +
    "behoort tot één van de volgende categorieën: bloemen, dieren, of "       +
    "gereedschap.<br>"                                                        +
    "Jouw taak is om ieder woord in te delen in één van deze categorieën, "   +
    "gebaseerd op hoe het woord klinkt.<br>"                                  +
    "Nadat je het woord gehoord hebt, krijg je steeds 3 seconden de tijd om " +
    "een categorie te kiezen. Gebruik de muis om op de BLOEMEN, DIEREN of "   +
    "GEREEDSCHAP knop op het scherm te klikken.<br>"                          +
    "Zorg ervoor dat je altijd binnen de tijd een categorie gekozen hebt.<br>"+
    "<br>"                                                                    +
    "<i>Druk op START zodra je klaar bent om te beginnen.</i>"                ;

const PRE_TEST_INSTRUCTION =
    "In de vorige fase heb je geluisterd naar woorden uit een vergeten "      +
    "taal.<br>"                                                               +
    "Nu willen we controleren hoeveel woorden je hiervan onthouden hebt. "    +
    "Je krijgt zo verschillende woorden te horen. Enkele woorden heb je in "  +
    "de vorige fase al gehoord, andere woorden zijn nieuw. De woorden "       +
    "behoren tot dezelfde taal.<br>"                                          +
    "Gebruik de muis om op de JA of NEE knop op het scherm te klikken.<br>"   +
    "Als je het woord eerder gehoord hebt, klik JA. Als je het woord nu voor "+
    "het eerst hoort, dan klik je NEE.<cr>"                                   +
    "Maak een beslissing zodra je het antwoord weet.<br>"                     +
    "<br>"                                                                    +
    "<i>Druk op START zodra je klaar bent om te beginnen.</i>"                ;

const DEBRIEF_MESSAGE = `
    <h1>Dit is het einde van het derde deel van het experiment!</h1>
    <br>
    <br>
    <h2>Dank je wel voor jouw deelname!</h2>
    `;

const TRAINING_PROMPT =
      "<h2>Dit woord klinkt als een woord dat behoort tot de categorie …</h2>";

const TEST_PROMPT = "<h2>Heb je dit woord in de vorige fase gehoord?</h2>";

