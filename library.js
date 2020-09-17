const rpos = require('random-part-of-speech');
//rpos.getNouns().then(response => { console.log(response) });
//rpos.getAdjectives(8).then(response => { console.log(response) });

//rpos.getAdverbs(6).then(response => { console.log(response) });

//rpos.getVerbs(4).then(response => { console.log(response) });

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