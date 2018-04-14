module.exports = function(TrueFalse) {

    if(typeof TrueFalse !== "boolean") {
        return console.error("Value was not a Boolean.")
    };

    if(TrueFalse === "false") {
       "No";
    };
    
    if(TrueFalse === "true") {
       "Yes";
    };
}