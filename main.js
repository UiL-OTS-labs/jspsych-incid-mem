/*
 * This file creates and starts the jsPsych timeline.
 */

let jsPsych = initJsPsych(
    {
    }
);

let g_prolific_vars = undefined;

let preload_audio = {
    type : jsPsychPreload,
    message : PRELOAD_MSG,
    audio : [... getAudioStimuli(), AUDIO_TEST_STIMULUS]
};

let maybe_preload_audio = {
    timeline : [preload_audio],
    conditional_function : experimentUsesAudio
};

let request_fullscreen = {
    type : jsPsychFullscreen,
    fullscreen_mode : true,
    message : FULLSCREEN_PROMPT,
    button_label : FULLSCREEN_BUTTON_LABEL,
};

let instruction_training = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
        let text = PRE_TRAINING_INSTRUCTION;
        return "<div class='instruction' >" +
               "<p>" + text + "</p></div>";
    },
    choices: [START_BUTTON_TEXT],
    response_ends_trial: true,
    on_finish : function(data) {
        if (typeof data.rt === "number") {
            data.rt = Math.round(data.rt);
        }
    }
};

let instruction_test = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        return "<div class='instruction' >" +
            '<p>' + PRE_TEST_INSTRUCTION + '</p></div>';
    },
    choices: [START_BUTTON_TEXT],
    response_ends_trial: true,
    data: { useful_data_flag: false },
    on_finish : function(data) {
        if (typeof data.rt === "number") {
            data.rt = Math.round(data.rt);
        }
    }
};

let end_screen = {
    type: jsPsychHtmlButtonResponse,
    stimulus: DEBRIEF_MESSAGE,
    choices: [],
    trial_duration: DEBRIEF_MESSAGE_DURATION,
    on_finish : function(data) {
        if (typeof data.rt === "number") {
            data.rt = Math.round(data.rt);
        }
        uil.browser.redirect(REDIRECTION_URL, g_prolific_vars);
    },
    on_load : function() {
        uil.saveData(ACCESS_KEY);
    }
};

let training_procedure = {

    n : 1,

    timeline : [
        {
            type : jsPsychIlsAudioButtonResponse,
            stimulus : jsPsych.timelineVariable('stimulus'),
            choices : TRAINING_CHOICES,
            prompt : function () {
                return TRAINING_PROMPT + "<h2>" + training_procedure.n
                    + "/" + getTrainingItems().length + "</h2><br>";
            },
            button_html : '<button class="jspsych-btn minbutton">%choice%</button>',
            trial_duration : 3000,
            post_trial_gap : ITI_DURATION,
            clear_html_on_exit:false,
            response_allowed_while_playing : false,
            on_finish : (data) => {
                data.id = jsPsych.timelineVariable('id');
                data.type = jsPsych.timelineVariable('type');
                data.phase = "training";
                data.chosen = TRAINING_CHOICES[data.response];
                training_procedure.n += 1;
            },
        },
    ],

    timeline_variables : getTrainingItems(),
    randomize_order : true,
};

let test_procedure = {

    n : 1,

    timeline : [
        {
            type : jsPsychIlsAudioButtonResponse,
            stimulus : jsPsych.timelineVariable('stimulus'),
            choices : TEST_CHOICES,
            prompt : function () {
                return TEST_PROMPT + "<h2>" + test_procedure.n
                    + "/" + getTestItems().length + "</h2><br>";
            },
            button_html : '<button class="jspsych-btn minbutton">%choice%</button>',
            trial_duration : 3000,
            post_trial_gap : ITI_DURATION,
            clear_html_on_exit:false,
            response_allowed_while_playing : false,
            on_finish : (data) => {
                data.id = jsPsych.timelineVariable('id');
                data.type = jsPsych.timelineVariable('type');
                data.phase = "test";
                data.chosen = TEST_CHOICES[data.response];
                if (data.chosen === YES_RESPONSE && data.type === MEM1 ||
                    data.chosen === NO_RESPONSE && data.type === MEM2)
                    data.correct = true;
                else 
                    data.correct = false;
                test_procedure.n += 1;
            },
        },
    ],

    timeline_variables : getTestItems(),
    randomize_order : true
};

function initExperiment() {

    // Data added to the output of all trials.
    g_prolific_vars = {
        PROLIFIC_PID : jsPsych.data.getURLVariable('PROLIFIC_PID'),
        STUDY_ID : jsPsych.data.getURLVariable('STUDY_ID'),
        SESSION_ID : jsPsych.data.getURLVariable('SESSION_ID'),  
    };
    jsPsych.data.addProperties(g_prolific_vars);


    let timeline = [];

    // request the experiment to fullscreen
    timeline.push(request_fullscreen);
    
    // start recording focus from here
    timeline.push({
        type : IlsFocusPlugin
    });

    // task instruction (with button)
    timeline.push(instruction_training);
    
    timeline.push(training_procedure);

    timeline.push(instruction_test);

    timeline.push(test_procedure);
    
    timeline.push({
        type : IlsFocusPlugin
    });

    timeline.push(end_screen);

    // Start jsPsych when running on a Desktop or Laptop style pc.
    uil.browser.rejectMobileOrTablet();
    jsPsych.run(timeline);
}


function main() {

    // Make sure you've updated your key in globals.js
    uil.setAccessKey(ACCESS_KEY);
    uil.stopIfExperimentClosed();

    initExperiment();
}


