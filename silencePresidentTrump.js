function silenceTrump(str) {
    return str.replace(/[aeiou]/gi, '');
}

console.log(silenceTrump('This website is for losers LOL!'));