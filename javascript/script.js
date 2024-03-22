const togglers = document.querySelectorAll('.card__toggler');

togglers.forEach( (toggler) => {
    toggler.addEventListener('click', () => {
        console.log('klik');
        toggler.parentElement.classList.toggle('open');
    })
})
