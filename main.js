/*
 * This file creates and starts the jsPsych timeline.
 */

let jsPsych = initJsPsych(
    {
        exclusions: {
            min_width: MIN_WIDTH,
            min_height: MIN_HEIGHT
        }
    }
);

let preload_audio = {
    type : jsPsychPreload,
    message : PRELOAD_MSG,
    audio : [... getAudioStimuli(), AUDIO_TEST_STIMULUS]
};

let maybe_preload_audio = {
    timeline : [preload_audio],
    conditional_function : experimentUsesAudio
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
    },
    on_load : function() {
        uil.saveData(ACCESS_KEY);
    }
};

let training_procedure = {

    timeline : [
        {
            type : jsPsychAudioButtonResponse,
            stimulus : jsPsych.timelineVariable('stimulus'),
            choices : TRAINING_CHOICES,
            prompt : TRAINING_PROMPT,
            trial_duration : 3000,
            post_trial_gap : ITI_DURATION,
            on_finish : (data) => {
                data.id = jsPsych.timelineVariable('id');
                data.type = jsPsych.timelineVariable('type');
                data.phase = "training";
                data.chosen = TRAINING_CHOICES[data.response];
            },
        },
    ],

    timeline_variables : getTrainingItems(),
    randomize_order : true,
};

let test_procedure = {

    timeline : [
        {
            type : jsPsychAudioButtonResponse,
            stimulus : jsPsych.timelineVariable('stimulus'),
            choices : TEST_CHOICES,
            prompt : TEST_PROMPT,
            post_trial_gap : ITI_DURATION,
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
            },
        },
    ],

    timeline_variables : getTestItems(),
    randomize_order : true
};

function initExperiment() {

    // Data added to the output of all trials.
    let subject_id = jsPsych.randomization.randomID(8);
    jsPsych.data.addProperties({
        subject: subject_id,
    });


    let timeline = [];

    // task instruction (with button)
    timeline.push(instruction_training);
    
    timeline.push(training_procedure);

    timeline.push(instruction_test);

    timeline.push(test_procedure);

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


