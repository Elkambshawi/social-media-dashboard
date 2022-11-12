let modeBtn = document.querySelector(".slider");
const root_theme = document.querySelector(':root');

console.log(root_theme);

modeBtn.onclick = function () {
    this.classList.toggle("light");
    if (this.classList.contains("light") === true) {
        root_theme.style.setProperty('--background-color', 'hsl(0, 0%, 100%)'); 
        root_theme.style.setProperty('--background-pattern', 'hsl(225, 100%, 98%)'); 
        root_theme.style.setProperty('--card-bg-color', 'hsl(227, 47%, 96%)'); 
        root_theme.style.setProperty('--text-color', 'hsl(228, 12%, 44%)'); 
        root_theme.style.setProperty('--white-text', ' hsl(230, 17%, 14%)'); 
    } else {
        root_theme.style.setProperty('--background-color', 'hsl(230, 17%, 14%)'); 
        root_theme.style.setProperty('--background-pattern', 'hsl(232, 19%, 15%)'); 
        root_theme.style.setProperty('--card-bg-color', 'hsl(228, 28%, 20%)'); 
        root_theme.style.setProperty('--text-color', 'hsl(228, 34%, 66%)'); 
        root_theme.style.setProperty('--white-text', ' hsl(0, 0%, 100%)');
    }
}

