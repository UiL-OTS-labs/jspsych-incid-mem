# jspsych-incidental-memory

## Generic documentation

Please read the [generic documentation](https://github.com/UiL-OTS-labs/jspsych-uil-template-docs)
for some context and scope.

## Task Description

This task is comprised in two parts, the training and the test phase. In the
training task the participant has to categorize the (non-) words in three
categories. In the latter part, the participant has to indicate whether or
not the word was presented in the first part or not.

## Getting started

People _affiliated with ILS labs_ can use the information
[from our lab webiste](https://ils-labs.wp.hum.uu.nl/experiments/overview/)
and expand the "Online experiments using jsPsych" section for details. Please
follow [this how-to](https://ils-labs.wp.hum.uu.nl/how-to/online-experimenting/).

### Make your experiment ready for use with the data server

#### Update access key

The file `globals.js` contains a variable:

```javascript
const ACCESS_KEY = '00000000-0000-0000-0000-000000000000';
```

Before uploading your experiment to the ILS data server, you will need to
change this to the access key that you obtained when your experiment was
approved. For elaborate info see `globals.js`.

## Output

The data of _all_ (sub) _trial phases_ are logged in the data, but the output
data can be filtered after data collection in many ways.
Please read the
[general primer on jsPsych's data](https://github.com/UiL-OTS-labs/jspsych-output)
if you are new to jsPsych data output.

Good luck, happy experimenting!
