//
const hamburge_menu_icon = document.getElementById('hamburge_menu_icon');
hamburge_menu_icon.addEventListener('click', function () {
    const hamburge_menu = document.getElementById('hamburge_menu');
    hamburge_menu.style.transform = 'unset';
    hamburge_menu_icon.style.display = 'none';
    hamburge_menu_close.style.display = 'block';
});

const hamburge_menu_close = document.getElementById(
    'hamburge_menu_close'
);
hamburge_menu_close.addEventListener('click', function () {
    const hamburge_menu = document.getElementById('hamburge_menu');
    hamburge_menu.style.transform = 'translate(-100%, 0px)';
    hamburge_menu_icon.style.display = 'block';
    hamburge_menu_close.style.display = 'none';
});