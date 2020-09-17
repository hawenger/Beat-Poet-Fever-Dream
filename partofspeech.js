const { response } = require('express');
const rpos = require('random-part-of-speech');
const verbs = [];
const adverbs = [];
const nouns = [];
const adjectives = [];

function makeNoun() {
    rpos.getNouns().then(response => { console.log(response) });
}

function makeAdjective() {
    rpos.getAdjectives().then(response => { console.log(response) });
}

function makeAdverb() {
    rpos.getAdverbs().then(response => { console.log(response) });
}

function makeVerb() {
    rpos.getVerbs().then(response => { console.log(response) });
}

makeNoun();
makeAdjective();
makeAdverb();
makeVerb();