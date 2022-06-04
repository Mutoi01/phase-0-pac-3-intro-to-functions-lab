function shout (string){
  return string.toUpperCase();
}

function whisper(string) {
  return string;
};

function logShout(hello) {
  console.log(hello.toUpperCase);
};

function logShout(hello) {
    console.log(hello.toUpperCase());
}
function logWhisper(HELLO){
    console.log(HELLO.toLowerCase());
};

function sayHiToHeadphonedRoommate(string) {
    switch (string){
        case string.toLowerCase():
            return "I can't hear you!";
            break;
       case string.toUpperCase():
           return "YES INDEED!";
           break;
       case (string = "Let's have dinner together!"):
           return "I would love to!";
           break;
           default:
               break;
    }
}