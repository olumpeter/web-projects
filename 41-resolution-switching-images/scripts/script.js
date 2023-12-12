function showUrl() {
    const img = document.getElementById("img");
    const p = document.createElement("p");
    const fileName = img.currentSrc?.substring(
        img.currentSrc.lastIndexOf("/"),
    );
    p.textContent = `Loaded: ${fileName}`;
    document.body.appendChild(p);
}