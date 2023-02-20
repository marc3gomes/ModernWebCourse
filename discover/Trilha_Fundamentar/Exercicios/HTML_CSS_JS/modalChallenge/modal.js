const buttonModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

buttonModal.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const escKey = event.key === 'Escape'

    if(escKey) {
        modalWrapper.classList.add('invisible')
    }
})