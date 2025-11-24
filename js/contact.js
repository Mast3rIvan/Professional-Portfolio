document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contact-form');
  if(!form) return;
  const status = document.getElementById('form-status');

  form.addEventListener('submit', function(e){
    // If action is still the placeholder, let browser handle or show message
    const action = form.getAttribute('action') || '';
    if(action.includes('formspree.io')){
      e.preventDefault();
      const data = new FormData(form);
      fetch(action, { method: 'POST', body: data, headers: { 'Accept':'application/json' }})
        .then(r => r.json())
        .then(res => {
          status.textContent = 'Thanks — message sent.';
          form.reset();
        }).catch(err => {
          status.textContent = 'There was a problem sending your message.';
        });
    } else {
      // action not configured; allow default submit (or change to mailto manually)
      status.textContent = 'Please replace the form action with a real endpoint (Formspree or similar).';
    }
  });
});
