// responsive menu function
const openNav = document.querySelector(".hamburger");
const closeNav = document.querySelector(".close");
const menu = document.querySelector(".menu");

const leftPosition = menu.getBoundingClientRect().left;
openNav.addEventListener("click", () => {
  if (leftPosition < 0) {
    menu.classList.add("show");
  }
});

closeNav.addEventListener("click", () => {
  if (leftPosition < 0) {
    menu.classList.remove("show",);
  }
});

// auto slide function

var index=0;
show();


function show(){
  let slide= document.getElementsByClassName('slide');
    for(i=0; i < slide.length; i++) {
      slide[i].style.display='none';
    }
    index=index+1;
    if(index>slide.length){
      index=1;
    }
    slide[index-1].style.display='block';
    // $(this).show("slide", { direction: "left" }, 1000);
    setTimeout(show, 3000);
}

