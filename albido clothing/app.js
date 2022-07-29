const toggleBtn = document.querySelector('.toggle-btn');
let sidebar = document.querySelector('.sidebar');
toggleBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
    if(sidebar.classList.contains('show-sidebar')){
        toggleBtn.style.transform = "rotate(90deg)";  
    } else{
        toggleBtn.style.transform = "rotate(0deg)";
    }
});

const textbtn = document.querySelectorAll('.reveal-btn');
let sidebarTitle = document.querySelectorAll('.sidebar-title');
// let sidebarSection = document.querySelectorAll('.sidebar-section');

textbtn.forEach(function(btn){
    // sidebarTitle.classList.toggle('show-reveal-btn');
    btn.addEventListener('click', function(event){
        console.log("bing");
        const sidebarSection = event.currentTarget.parentElement.parentElement;
        sidebarSection.classList.toggle('show-hidden');
    });
});

