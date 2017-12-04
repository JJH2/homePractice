'use strict';

const sentences = [
    { subject: 'js', verb: 'is', object: 'great' },
    { subject: 'Elephants2', verb: 'are', object: 'large' },
];

function say({ subject, verb, object }) {
    console.log(`${subject} ${verb} ${object}`);
}

for (let s of sentences) {
    say(s);
}