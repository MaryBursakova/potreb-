(() => {
  const b=document.querySelector('[data-menu]'), n=document.querySelector('[data-nav]');
  if(b&&n){b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));n.classList.toggle('is-open',!o)});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('is-open')))}
  const f=document.querySelector('[data-form]'), s=document.querySelector('[data-status]');
  if(f){f.addEventListener('submit',e=>{e.preventDefault();if(!f.checkValidity()){f.reportValidity();return}
  const d=Object.fromEntries(new FormData(f).entries());const sub=encodeURIComponent(`Исследование Lanny — ${d.company||d.name}`);const body=encodeURIComponent(`Имя: ${d.name}\nКомпания: ${d.company||'—'}\nE-mail: ${d.email}\nТелефон: ${d.phone}\nФормат: ${d.type}\n\nЗадача:\n${d.message||'—'}`);if(s)s.textContent='Открываем письмо с заполненной заявкой';location.href=`mailto:rnd@lanny.group?subject=${sub}&body=${body}`})}
})();