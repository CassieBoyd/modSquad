{
    // Added missing comma
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    // Changed const to let for HTMLRepresentation because const can't be reassigned.
    let HTMLRepresentation = `<h1>The Mod Squad</h1>`


    // Removed const from HTMLRepresentation in forEach as it's already assigned.
    // HTMLRepresentation gets updated with each member name as the forEach method
    // loops through the array.
    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
    })
    // Moved querySelector into curly brackets.
    // querySelector is taking the first class that equals .show-info and putting the
    // value of HTMLRepresentation into the innerHTML of the tag with that class.
    // innerHTML refers to the space between the opening and closing tags of the specified
    // element.
    document.querySelector(".show-info").innerHTML = HTMLRepresentation
}



// Original Code
// {
//     const ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }

//     const HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     ModSquad.members.forEach(member => {
//         const HTMLRepresentation += `<div>${member}</div>`
//     })
// }

// document.querySelector(".show-info").innerHTML = HTMLRepresentation
