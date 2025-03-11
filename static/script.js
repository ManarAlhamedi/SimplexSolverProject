function generateFields() {
    const numVars = document.getElementById("numVars").value;
    const numConstraints = document.getElementById("numConstraints").value;
    const fieldsDiv = document.getElementById("fields");
    fieldsDiv.innerHTML = ""; // Clear previous inputs

    if (numVars <= 0 || numConstraints <= 0) {
        alert("Please enter valid numbers.");
        return;
    }

    // Objective Function Inputs
    let objHTML = "<h3>Objective Function:</h3><p>Z = ";
    for (let i = 0; i < numVars; i++) {
        objHTML += `<input type="number" name="c${i}" required> x${i + 1} `;
        if (i < numVars - 1) objHTML += "+ ";
    }
    objHTML += "</p>";
    fieldsDiv.innerHTML += objHTML;

    // Constraint Inputs
    let constraintsHTML = "<h3>Constraints:</h3>";
    for (let i = 0; i < numConstraints; i++) {
        constraintsHTML += `<p>`;
        for (let j = 0; j < numVars; j++) {
            constraintsHTML += `<input type="number" name="a${i}_${j}" required> x${j + 1} `;
            if (j < numVars - 1) constraintsHTML += "+ ";
        }
        constraintsHTML += ` ≤ <input type="number" name="b${i}" required></p>`;
    }
    fieldsDiv.innerHTML += constraintsHTML;
}
