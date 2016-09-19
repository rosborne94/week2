function revenge(numTimes) {
    var name = "Inigo Montoya";
    for (var i = 1; i <= numTimes; i++) {
        if (i % 4 == 0 && i != 0) {
            console.log("Stop saying that!");
        }
        else {
            console.log("Hello my name is, " + name + " you killed my father prepare to die.");
        }

    }
}
revenge(50);


