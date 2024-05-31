// mubile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
})

address = document.getElementById('address')
address.addEventListener('click', () => {
    window.location.href = "https://www.google.com/maps/place/460+W+Roger+Rd+%23105,+Tucson,+AZ+85705/@32.2796792,-110.982193,17z/data=!3m1!4b1!4m6!3m5!1s0x86d673e93841d4eb:0x2028d0e15611809d!8m2!3d32.2796792!4d-110.9796181!16s%2Fg%2F11qz9k54d3?entry=ttu";
})

// tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'));
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if (box.getAttribute('id') === target) {
                box.classList.remove('is-hidden');
            }else{
                box.classList.add('is-hidden');
            }
        })
    })
})

const tikTokClick = document.getElementById('tikTokClick');
tikTokClick.addEventListener('click' , () => {
    window.location.href = "https://www.tiktok.com/@f21autoglass";
})

