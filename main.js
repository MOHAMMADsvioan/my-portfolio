const toggle = document.querySelector(".toggle");

const toggleCircle = document.querySelector(".toggle-circle");

toggle.addEventListener("click", function(){

    toggleCircle.classList.toggle("toggle-circle-translated");

});




const filterButton = document.querySelector(".filter-button");

const filterDrop = document.querySelector(".filter-dropdown");


function bigImg() {
    filterDrop.classList.add("menu-scaled");

}

function normalImg() {
      filterDrop.classList.remove("menu-scaled");

}







// dark / light mode toggle



const toggleChange = document.querySelector(".toggle");

toggleChange.addEventListener("click", function(){
   
    const toggle = document.querySelector(".toggle");

    const dark = document.querySelector(".dark");

    const light = document.querySelector(".light");
    
    if (toggle === dark){

        const clrDmCards = "--clr-dm-cards";
        const clrDmBg = "--clr-dm-bg";
        const clrDmText = "--clr-dm-text";

        document.documentElement.style.setProperty(clrDmBg, "hsl(0, 0%, 97%)");

        document.documentElement.style.setProperty(
          clrDmCards,
          "hsl(0, 0%, 100%)"
        );

        document.documentElement.style.setProperty(
          clrDmText,
          "hsl(200, 15%, 8%)"
        );

        toggle.classList.add("light");
        toggle.classList.remove("dark");

        console.log("theme changed to light mode");

    }

    if (toggle === light){

        const clrDmCards = "--clr-dm-cards";
        const clrDmBg = "--clr-dm-bg";
        const clrDmText = "--clr-dm-text";


        document.documentElement.style.setProperty(
          clrDmBg,
          "hsl(207, 26%, 17%)"
        );

        document.documentElement.style.setProperty(
          clrDmCards,
          "hsl(209, 23%, 22%)"
        );

        document.documentElement.style.setProperty(
          clrDmText,
          "hsl(0, 0%, 100%)"
        );


        toggle.classList.add("dark");
        toggle.classList.remove("light");

        console.log("theme changed to dark mode");

    }

    else{
        console.log("something went wrong");
    }
});