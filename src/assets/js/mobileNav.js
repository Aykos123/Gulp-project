const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar')
const page = document.getElementById('page')
const body = document.body;

burger.addEventListener('click', event => {
    if( body.classList.contains('show-sidebar') ) {
        closeSidebaar();
    } else {
        showSidebar();

    }
});


function showSidebar() {
    let mask = document.createElement('div')
    mask.classList.add('page__mask');
    mask.addEventListener('closed', closeSidebaar)
    page.appendChild(mask);
}

function closeSidebaar() {
    console.log('closed')
}