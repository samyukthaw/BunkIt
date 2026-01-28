function calculate() {
    const conducted = parseInt(document.getElementById("conducted").value);
    const attended = parseInt(document.getElementById("attended").value);
    const required = parseInt(document.getElementById("required").value);
    const left = parseInt(document.getElementById("left").value);

    const result = document.getElementById("result");

    if (
        isNaN(conducted) ||
        isNaN(attended) ||
        isNaN(required) ||
        isNaN(left)
    ) {
        result.innerText = "Please fill in all fields.";
        return;
    }

    let message = "";

    // Check if you can bunk TODAY
    const percentIfBunkToday = (attended / (conducted + 1)) * 100;
    const canBunkToday = percentIfBunkToday >= required;

    if (canBunkToday) {
        message += "You CAN bunk today.\n";
    } else {
        message += "You CANNOT bunk :(\n";
    }

    // Calculate total bunks possible
    let tempConducted = conducted;
    let tempAttended = attended;
    let bunkCount = 0;

    for (let i = 0; i < left; i++) {
        tempConducted++;
        const percent = (tempAttended / tempConducted) * 100;

        if (percent >= required) {
            bunkCount++;
        } else {
            break;
        }
    }

    if (bunkCount > 0) {
        if (canBunkToday) {
            message += `You can bunk ${bunkCount - 1} more class(es) after today.`;
        } else {
            message += `You can bunk ${bunkCount} class(es) in total (but not today).`;
        }
    } 
    // else {
    //     message += "You cannot bunk any more classes :(";
    // }

    result.innerText = message;
}
