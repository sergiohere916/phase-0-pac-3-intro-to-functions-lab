function shout(string) {
    string = string.toUpperCase();
    return string;
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    string = string.toUpperCase();
    console.log(string);
}
function logWhisper(string) {
    string = string.toLowerCase();
    console.log(string);
}
function sayHiToHeadphonedRoommate(string) {
    // let lowerCaseString = string.toLowerCase();
    // let upperCaseString = string.toUpperCase();
    if (string === `Let\'s have dinner together!`) {
        return `I would love to!`;
    }
    if (string === whisper(string)) {
        return `I can\'t hear you!`;
    } else if (string === shout(string)) {
        return `YES INDEED!`;
    }
}

