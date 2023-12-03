// Показать NavBar
const showNavbar = (toggleId, navId, bodyId, headerId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId)
        header = document.getElementById(headerId)

  if (toggle && nav && bodypd && header) {
    toggle.addEventListener('click' , () => {
      nav.classList.toggle('show');
      toggle.classList.toggle('bx-x');
      bodypd.classList.toggle('body-pd');
      header.classList.toggle('body-pd');
    });
  };
};

showNavbar('header-toggle', 'navbar', 'body-pd', 'header');

const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
  if (linkColor) {
    linkColor.forEach(item => {
      item.classList.remove('active')
      this.classList.add('active')
    })
  }
}

linkColor.forEach(item => {
  item.addEventListener('click', colorLink)
})
