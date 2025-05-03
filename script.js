function changeText() {
    const description = document.getElementById("description");
    description.textContent = "✨ Text changed dynamically with JavaScript!";
}

function changeStyle() {
    const heading = document.getElementById("main-heading");
    heading.style.color = "#4CAF50";
    heading.style.fontFamily = "Courier New, monospace";
    heading.style.fontSize = "2.5rem";
}

function toggleBox() {
    let existingBox = document.getElementById("magic-box");

    if (existingBox) {
        existingBox.remove();
    } else {
        const box = document.createElement("div");
        box.id = "magic-box";
        box.textContent = "🎁 This box was created with JavaScript!";
        box.style.backgroundColor = "#f0f0f0";
        box.style.padding = "20px";
        box.style.marginTop = "15px";
        box.style.border = "2px dashed #888";
        document.body.appendChild(box);
    }
}
