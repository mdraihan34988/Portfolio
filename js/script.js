window.addEventListener("load",function() {
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(()=>{
    document.querySelector(".preloader").style.display="none";
  },1000)
})

const filterContainer=document.querySelector(".portfolio-filter"),
      filterBtns=filterContainer.children,
      totalFilterBtn=filterBtns.length,
      portfolioItems=document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem=portfolioItems.length;

      for (let i = 0; i < totalFilterBtn; i++) {
        filterBtns[i].addEventListener("click",function(){
          filterContainer.querySelector(".active").classList.remove("active");
          this.classList.add("active");

          const filterValue=this.getAttribute("data-filter");
          for (let k = 0; k < totalPortfolioItem; k++) {
            if(filterValue===portfolioItems[k].getAttribute("data-category")){
              portfolioItems[k].classList.add("show");
              portfolioItems[k].classList.remove("hide");
            }
            else if(filterValue=="all"){
              portfolioItems[k].classList.add("show");
              portfolioItems[k].classList.remove("hide");
            }
            else{
              portfolioItems[k].classList.remove("show");
              portfolioItems[k].classList.add("hide");
            }
          }
        })
      }
// portfolio lightbox
  const lightbox=document.querySelector(".lightbox"),
        lightboxImg=lightbox.querySelector(".lightbox-img"),
        lightboxClose=lightbox.querySelector(".lightbox-close"),
        lightboxText=lightbox.querySelector(".caption-text"),
        lightboxCounter=lightbox.querySelector(".caption-counter");

    let itemIndex=0;

    for (let i = 0; i < totalPortfolioItem; i++) {
      portfolioItems[i].addEventListener("click",function(){
        itemIndex=i;
        changeItem();
        toggleLightbox();
      })
    }

    function nextItem(){
      if(itemIndex==totalPortfolioItem-1){
        itemIndex=0;
      }else{
        itemIndex++;
      }
      changeItem();
    }

    function preItem(){
      if(itemIndex==0){
        itemIndex=totalPortfolioItem-1;
      }else{
        itemIndex--;
      }
      changeItem();
    }

    function toggleLightbox(){
      lightbox.classList.toggle("open");
    }

    function changeItem(){
      imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
      lightboxImg.src=imgSrc;
      lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
      lightboxCounter.innerHTML=(itemIndex+1)+" of "+totalPortfolioItem;
    }

    lightbox.addEventListener("click",function(event){
      if(event.target===lightboxClose || event.target===lightbox){
        toggleLightbox();
      }
    })

    // Aside nav
const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNavList=navList.length,
      allSection=document.querySelectorAll(".section"),
      totalSection=allSection.length;

for (var i = 0; i < totalNavList; i++) {
  const a=navList[i].querySelector("a");

  // for (let i = 0; i < totalSection; i++) {
  //   allSection[i].classList.remove("back-section");
  // }
  removeBackSectionClass();

  a.addEventListener("click",function(){
    for (var j = 0; j < totalNavList; j++) {
      if(navList[j].querySelector("a").classList.contains("active")){
        // allSection[j].classList.add("back-section");
        addBackSectionClass(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerwidth < 1200) {
      asideSectionTogglerBtn();
    }
  })
}
function addBackSectionClass(num){
    allSection[num].classList.add("back-section");
}
function removeBackSectionClass(){
  for (let i = 0; i < totalSection; i++) {
   allSection[i].classList.remove("back-section");
 }
}
function showSection(element){
  //console.log(element);
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target=element.getAttribute("href").split("#")[1];
  document.querySelector("#"+target).classList.add("active");
}

function updateNav(){
  for (var i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target=element.getAttribute("href").split("#")[1];
    if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1]){
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click",function(){
  const sectionIndex=this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSectionClass();
  addBackSectionClass(sectionIndex)
})

    const navTogglerBtn=document.querySelector(".nav-toggler"),
          aside=document.querySelector(".aside");

    navTogglerBtn.addEventListener("click",()=>{
      asideSectionTogglerBtn();
    })

    function asideSectionTogglerBtn(){
      aside.classList.toggle("open");
      navTogglerBtn.classList.toggle("open");
      for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
      }
    }
