// Elevamed — interações leves de interface (index, tratamentos, indique)
(function(){
 var d=document,h=d.documentElement;h.classList.add('js');
 // Sombra no header ao rolar
 var t=false;function rol(){h.classList.toggle('rolou',scrollY>8);t=false}
 addEventListener('scroll',function(){if(!t){t=true;requestAnimationFrame(rol)}},{passive:true});rol();
 if(!('IntersectionObserver' in window))return;
 // Entrada suave: só elementos abaixo da dobra (evita CLS/LCP)
 var alvos=d.querySelectorAll('main section h2, .grade3>*, #como [style*="border: 1px solid"], #ciencia [style*="border-radius: 10px"], details');
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
 alvos.forEach(function(el){if(el.getBoundingClientRect().top>innerHeight){el.classList.add('rv');io.observe(el)}});
 // CTA fixo no mobile: aparece depois do hero e some perto do CTA final/rodapé
 var bar=d.querySelector('.cta-fixo'),hero=d.querySelector('main section'),fim=d.querySelector('#avaliacao, footer');
 if(bar&&hero){d.body.classList.add('tem-cta');var passou=false,perto=false;
  function up(){bar.classList.toggle('on',passou&&!perto);bar.inert=!(passou&&!perto)}
  new IntersectionObserver(function(e){passou=!e[0].isIntersecting;up()}).observe(hero);
  if(fim)new IntersectionObserver(function(e){perto=e[0].isIntersecting;up()}).observe(fim);}
})();
