

let TRAINING_ITEMS = [
    {id:1,  type:"MEM1", stimulus:"sounds/balut.wav"},
    {id:2,  type:"MEM1", stimulus:"sounds/berden.wav"},
    {id:3,  type:"MEM1", stimulus:"sounds/bruikel.wav"},
    {id:4,  type:"MEM1", stimulus:"sounds/drebak.wav"},
    {id:5,  type:"MEM1", stimulus:"sounds/droepes.wav"},
    {id:6,  type:"MEM1", stimulus:"sounds/flebor.wav"},
    {id:7,  type:"MEM1", stimulus:"sounds/stoesem.wav"},
    {id:8,  type:"MEM1", stimulus:"sounds/vloefte.wav"},
    {id:9,  type:"MEM1", stimulus:"sounds/brimpel.wav"},
    {id:10, type:"MEM1", stimulus:"sounds/ganif.wav"},
    {id:11, type:"MEM1", stimulus:"sounds/gavom.wav"},
    {id:12, type:"MEM1", stimulus:"sounds/gobel.wav"},
    {id:13, type:"MEM1", stimulus:"sounds/kaalon.wav"},
    {id:14, type:"MEM1", stimulus:"sounds/lapin.wav"},
    {id:15, type:"MEM1", stimulus:"sounds/leucel.wav"},
    {id:16, type:"MEM1", stimulus:"sounds/leudin.wav"},
    {id:17, type:"MEM1", stimulus:"sounds/loming.wav"},
    {id:18, type:"MEM1", stimulus:"sounds/madin.wav"},
    {id:19, type:"MEM1", stimulus:"sounds/panoel.wav"},
    {id:20, type:"MEM1", stimulus:"sounds/suvie.wav"},
    {id:21, type:"MEM1", stimulus:"sounds/derga.wav"},
    {id:22, type:"MEM1", stimulus:"sounds/darkis.wav"},
    {id:23, type:"MEM1", stimulus:"sounds/kelbis.wav"},
    {id:24, type:"MEM1", stimulus:"sounds/lerbien.wav"},
    {id:25, type:"MEM1", stimulus:"sounds/liltus.wav"},
    {id:26, type:"MEM1", stimulus:"sounds/peldig.wav"},
    {id:27, type:"MEM1", stimulus:"sounds/penger.wav"},
    {id:28, type:"MEM1", stimulus:"sounds/roeftaag.wav"},
    {id:29, type:"MEM1", stimulus:"sounds/tielder.wav"},
    {id:30, type:"MEM1", stimulus:"sounds/verpin.wav"},
];

let TEST_ITEMS = [
    {id:1,  type:"MEM1", stimulus:"sounds/bruikel.wav"},
    {id:2,  type:"MEM1", stimulus:"sounds/drebak.wav"},
    {id:3,  type:"MEM1", stimulus:"sounds/droepes.wav"},
    {id:4,  type:"MEM1", stimulus:"sounds/flebor.wav"},
    {id:5,  type:"MEM1", stimulus:"sounds/stoesem.wav"},
    {id:6,  type:"MEM1", stimulus:"sounds/ganif.wav"},
    {id:7,  type:"MEM1", stimulus:"sounds/kaalon.wav"},
    {id:8,  type:"MEM1", stimulus:"sounds/leucel.wav"},
    {id:9,  type:"MEM1", stimulus:"sounds/loming.wav"},
    {id:10, type:"MEM1", stimulus:"sounds/panoel.wav"},
    {id:11, type:"MEM1", stimulus:"sounds/darkis.wav"},
    {id:12, type:"MEM1", stimulus:"sounds/peldig.wav"},
    {id:13, type:"MEM1", stimulus:"sounds/roeftaag.wav"},
    {id:14, type:"MEM1", stimulus:"sounds/tielder.wav"},
    {id:15, type:"MEM1", stimulus:"sounds/verpin.wav"},
    {id:16, type:"MEM2", stimulus:"sounds/blestig.wav"},
    {id:17, type:"MEM2", stimulus:"sounds/drottig.wav"},
    {id:18, type:"MEM2", stimulus:"sounds/pleming.wav"},
    {id:19, type:"MEM2", stimulus:"sounds/striepel.wav"},
    {id:20, type:"MEM2", stimulus:"sounds/spalder.wav"},
    {id:21, type:"MEM2", stimulus:"sounds/funor.wav"},
    {id:22, type:"MEM2", stimulus:"sounds/gonig.wav"},
    {id:23, type:"MEM2", stimulus:"sounds/keesep.wav"},
    {id:24, type:"MEM2", stimulus:"sounds/koetim.wav"},
    {id:25, type:"MEM2", stimulus:"sounds/lobat.wav"},
    {id:26, type:"MEM2", stimulus:"sounds/puigel.wav"},
    {id:27, type:"MEM2", stimulus:"sounds/rielon.wav"},
    {id:28, type:"MEM2", stimulus:"sounds/roegen.wav"},
    {id:29, type:"MEM2", stimulus:"sounds/polbin.wav"},
    {id:30, type:"MEM2", stimulus:"sounds/valtos.wav"},
];

/**
 * returns the path of the sound stimuli
 */
function getAudioStimuli() {
    let res = []
    TRAINING_ITEMS.concat(TEST_ITEMS).forEach(stim => res.push(stim.stimulus));
    return res;
}

/**
 * returns whether or not the experiment uses audio.
 */
function experimentUsesAudio() {
    return getAudioStimuli().length > 0;
}

/**
 * Generates and returns the list of practice stimuli
 *
 * @return {Array<string>}
 */
function getTrainingItems() {
    return TRAINING_ITEMS; 
}

/**
 * Generates and returns the list of test stimuli
 *
 * @return {Array<string>}
 */
function getTestItems() {
    return TEST_ITEMS;
}

