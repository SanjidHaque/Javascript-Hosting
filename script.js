document.write(
  '<button style="display: none;" data-modal-target="#modal">Open Dialog</button>' + 
    '<div data-modal-target class="modal" id="modal">' +
     '<div class="modal-header">' +
       '<div class="title">Newsletter</div>' +
       '<button data-close-button class="close-button">&times;</button>' +
    '  </div>' +
       '<div class="modal-body">' +
         'Subscribe now' +
       '</div>' +
       '</div> ' +
     '<div id="overlay"></div>'
   )

 var style = document.createElement('style');
 style.innerHTML= '*, *::after, *::before { box-sizing: border-box; }' +
                   '.modal { text-align: center; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0);' +
                   ' transition: 200ms ease-in-out; color: #ffffff;' +
                   ' border: 1px solid black; border-radius: 4px; z-index: 10; background-color: rgb(172, 31, 73); width: 500px; max-width: 80%; } ' +
                   '.modal.active { transform: translate(-50%, -50%) scale(1); }' +
                   '.modal-header { padding: 10px 15px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid black; }' +
                   '.modal-header .title { font-size: 1.25rem; font-weight: bold; }' +
                   '.modal-header .close-button { cursor: pointer; border: none; outline: none; background: none; font-size: 1.25rem; font-weight: bold; }' + 
                   '.modal-body { padding: 10px 15px; }' +
                   '#overlay { position: fixed; opacity: 0; transition: 200ms ease-in-out; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; }'+
                   '#overlay.active { opacity: 1;pointer-events: all; }'
  
 document.head.appendChild(style);


//window.addEventListener('load', (event) => {

   const openModalButtons = document.querySelectorAll('[data-modal-target]')[0];
   const closeModalButtons = document.querySelectorAll('[data-close-button]')
   const overlay = document.getElementById('overlay')

   function openModal(modal) {
      if (modal == null) return
      modal.classList.add('active')
      overlay.classList.add('active')
    }

   const modal = document.querySelector(openModalButtons.dataset.modalTarget)
   setTimeout("openModal(modal)", 3000)

  // const openModalButtons = document.querySelectorAll('[data-modal-target]')
  // const closeModalButtons = document.querySelectorAll('[data-close-button]')
  // const overlay = document.getElementById('overlay')


  

  // openModalButtons.forEach(button => {
  //   button.addEventListener('click', () => {
  //     const modal = document.querySelector(button.dataset.modalTarget)
  //     openModal(modal)
  //   })
  // })

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })

  
  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }

 


//});

