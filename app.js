const anchorTags = document.querySelectorAll('a')

anchorTags.forEach((e) => {
    if (e.hasAttribute('href'))
        e.addEventListener('click', scroll)
})

function scroll (event) {
    event.preventDefault(event)

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
}

const formSubmit = document.querySelector('#submit')
const forms = document.querySelector('#contact_form')

formSubmit.addEventListener('click', anim)

function anim (el) {
    el.preventDefault()
    forms.classList.remove('checkBtn')
    void forms.offsetWidth
    forms.classList.add('checkBtn')

}
