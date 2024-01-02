
// Defining the buttons as variables
    const week1Button = document.getElementById("week1-button");
    const week2Button = document.getElementById("week2-button");
    const week3Button = document.getElementById("week3-button");
    const week4Button = document.getElementById("week4-button");
    const week5Button = document.getElementById("week5-button");
    const week6Button = document.getElementById("week6-button");
    const week7Button = document.getElementById("week7-button");
    const week8Button = document.getElementById("week8-button");
    
    //Defining the sections as variables
    const week1Section = document.getElementById("week-1");
    const week2Section = document.getElementById("week-2");
    const week3Section = document.getElementById("week-3");
    const week4Section = document.getElementById("week-4");
    const week5Section = document.getElementById("week-5");
    const week6Section = document.getElementById("week-6");
    const week7Section = document.getElementById("week-7");
    const week8Section = document.getElementById("week-8");
    
    const infoContainer = document.querySelector('.tournament-container');
    
    week1Button.addEventListener("click", () => {
        week8Section.classList.remove("active");
        week7Section.classList.remove("active");
        week6Section.classList.remove("active");
        week5Section.classList.remove("active");
        week4Section.classList.remove("active");
        week3Section.classList.remove("active");
        week2Section.classList.remove("active");
        week1Section.classList.add("active");
                                 });
    
    week2Button.addEventListener("click", () => {
        week8Section.classList.remove("active");
        week7Section.classList.remove("active");
        week6Section.classList.remove("active");
        week5Section.classList.remove("active");
        week4Section.classList.remove("active");
        week3Section.classList.remove("active");
        week1Section.classList.remove("active");
        week2Section.classList.add("active");
                                 })
    
    week3Button.addEventListener("click", () => {
        week8Section.classList.remove("active");
        week7Section.classList.remove("active");
        week6Section.classList.remove("active");
        week5Section.classList.remove("active");
        week4Section.classList.remove("active");
        week2Section.classList.remove("active");
        week1Section.classList.remove("active");
        week3Section.classList.add("active");
                                 });
    
    week4Button.addEventListener("click", () => {
        week8Section.classList.remove("active");
        week7Section.classList.remove("active");
        week6Section.classList.remove("active");
        week5Section.classList.remove("active");
        week3Section.classList.remove("active");
        week2Section.classList.remove("active");
        week1Section.classList.remove("active");
        week4Section.classList.add("active");
                                 });
    
    week5Button.addEventListener("click", () => {
        week8Section.classList.remove("active");
        week7Section.classList.remove("active");
        week6Section.classList.remove("active");
        week4Section.classList.remove("active");
        week3Section.classList.remove("active");
        week2Section.classList.remove("active");
        week1Section.classList.remove("active");
        week5Section.classList.add("active");
                                 });
    week6Button.addEventListener("click", () => {
        week8Section.classList.remove("active");
        week7Section.classList.remove("active");
        week5Section.classList.remove("active");
        week4Section.classList.remove("active");
        week3Section.classList.remove("active");
        week2Section.classList.remove("active");
        week1Section.classList.remove("active");
        week6Section.classList.add("active");
                                 });
    week7Button.addEventListener("click", () => {
        week8Section.classList.remove("active");
        week6Section.classList.remove("active");
        week5Section.classList.remove("active");
        week4Section.classList.remove("active");
        week3Section.classList.remove("active");
        week2Section.classList.remove("active");
        week1Section.classList.remove("active");
        week7Section.classList.add("active");
                                 });
    week8Button.addEventListener("click", () => {
        week7Section.classList.remove("active");
        week6Section.classList.remove("active");
        week5Section.classList.remove("active");
        week4Section.classList.remove("active");
        week3Section.classList.remove("active");
        week2Section.classList.remove("active");
        week1Section.classList.remove("active");
        week8Section.classList.add("active");
                                 });