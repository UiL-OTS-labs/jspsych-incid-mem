/*
 * This file creates and starts the jsPsych timeline.
 * The sub parts/trials that represent the basic building blocks of the lexical
 * decision are in the file ld_trials.js.
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

let instruction_screen_practice = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
        let text = PRE_PRACTICE_INSTRUCTION;
        return "<div class='instruction' >" +
               "<p>" + text + "</p></div>";
    },
    choices: ["Ga verder"],
    response_ends_trial: true,
    on_finish : function(data) {
        if (typeof data.rt === "number") {
            data.rt = Math.round(data.rt);
        }
    }
};

let pre_test_screen = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        return "<div class='instruction' >" +
            '<p>' + PRE_TEST_INSTRUCTION + '</p></div>';
    },
    choices: ["Ga verder"],
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


function initExperiment() {

    // Data added to the output of all trials.
    let subject_id = jsPsych.randomization.randomID(8);
    jsPsych.data.addProperties({
        subject: subject_id,
    });


    let timeline = [];

    // task instruction (with button)
    timeline.push(instruction_screen_practice);
    
    // test/set audio level (sountest.js)
    timeline.push(maybe_test_audio);
    
    timeline.push(practice);

    timeline.push(pre_test_screen);

    timeline.push(digit_test);

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


