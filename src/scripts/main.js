{
    // Added missing comma
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    // Changed const to let for HTMLRepresentation
    let HTMLRepresentation = `<h1>The Mod Squad</h1>`


    // removed const from HTMLRepresentation as it's already assigned
    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
    })
    document.querySelector(".show-info").innerHTML = HTMLRepresentation
}




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
