const toggleMenu = document.querySelector('#toggle-menu')
const navbarMenu = document.getElementById('navbar-menu')

const toggleStyle = (el, style, value) => {
    if(el.style[style] !== value)  {
        el.style[style] = value;
    } else {
        el.style[style] = '';
    }
}

toggleMenu.addEventListener('click', () => {
    toggleStyle(navbarMenu, "display", "block")
})