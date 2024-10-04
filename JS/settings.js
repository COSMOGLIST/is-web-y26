document.getElementById('Settings').addEventListener('click', function () {
    const element = document.getElementById("Settings_block");
    const style = window.getComputedStyle(element);
    if (style.getPropertyValue("display") === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
});