// Elevamed — movimento leve: parallax, tilt 3D e progresso de rolagem.
// Regras: só transform; um único rAF; só anima o que está na tela; sem libs.
// Desliga com prefers-reduced-motion; em aparelho fraco / economia de dados mantém só a barra e o escalonamento.
(function(){
 'use strict';
 var w=window,d=document,h=d.documentElement;
 var mq=w.matchMedia?w.matchMedia('(prefers-reduced-motion: reduce)'):null;
 if(mq&&mq.matches)return;
 var cx=navigator.connection||{};
 var fraco=!!(cx.saveData||(navigator.deviceMemory&&navigator.deviceMemory<=2)||(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=2));
 var fino=!!(w.matchMedia&&w.matchMedia('(hover:hover) and (pointer:fine)').matches);
 function $(s){return d.querySelector(s)}
 function $$(s){return d.querySelectorAll(s)}
 function cl(v,a,b){return v<a?a:v>b?b:v}

 // Escalonamento dos cards (funciona junto do .rv do ui.js)
 [].forEach.call($$('.grade3, #como [style*="grid-template-columns"], #ciencia [style*="grid-template-columns"]'),function(g){
  [].forEach.call(g.children,function(c,i){c.style.setProperty('--i',Math.min(i,3))});
 });

 h.classList.add('mv');
 var L=[],T=[],raf=0,ativo=true;

 // Barra de progresso
 var bar=d.createElement('div');bar.className='mv-prog';bar.setAttribute('aria-hidden','true');d.body.appendChild(bar);

 function ir(){if(!raf&&ativo)raf=requestAnimationFrame(frame)}

 if(!fraco&&'IntersectionObserver' in w){
  var io=new IntersectionObserver(function(es){
   es.forEach(function(e){
    var a=e.target._mv||[];
    a.forEach(function(it){it.v=e.isIntersecting;it.el.classList.toggle('mv-on',e.isIntersecting)});
   });ir();
  },{rootMargin:'120px 0px'});
  var vistos=[];
  var obs=function(ref,it){(ref._mv=ref._mv||[]).push(it);if(vistos.indexOf(ref)<0){vistos.push(ref);io.observe(ref)}};

  // Parallax vertical: s>0 = mais lento que a rolagem (fundo); s<0 = mais rápido (frente)
  var par=function(el,ref,s,sc,mf){
   if(!el||!ref)return;
   var it={el:el,ref:ref,s:s,sc:sc||1,m:mf,v:false};L.push(it);obs(ref,it);
  };
  var mEsc=function(sc){return function(r){return r.height*(sc-1)/2-1}};
  var mPx=function(n){return function(){return n}};

  // Camadas de grafismo nas seções de fundo sólido
  [['#topo','mv-bg--e'],['#planos','mv-bg--c'],['#avaliacao','mv-bg--e']].forEach(function(p){
   var s=$(p[0]);if(!s)return;
   s.classList.add('mv-sec');
   var b=d.createElement('div');b.className='mv-bg '+p[1];b.setAttribute('aria-hidden','true');
   s.insertBefore(b,s.firstChild);
   par(b,s,.12,1,function(r){return r.height*.2-1});
  });

  // Hero: foto ao fundo, chip e painel à frente, card com tilt
  var vis=$('.visual');
  if(vis){
   var ref=vis.parentNode;
   par($('.visual>.foto img'),ref,.07,1.16,mEsc(1.16));
   par($('.visual .chip--topo'),ref,-.05,1,mPx(14));
   par($('.visual .painel'),ref,-.03,1,mPx(10));
   var t={el:vis,ref:ref,rx:0,ry:0,prx:0,pry:0,hov:false,v:false};T.push(t);obs(ref,t);
   if(fino){
    vis.addEventListener('pointermove',function(e){
     if(e.pointerType!=='mouse')return;
     var b=vis.getBoundingClientRect(),nx=(e.clientX-b.left)/b.width*2-1,ny=(e.clientY-b.top)/b.height*2-1;
     t.hov=true;t.prx=-ny*4;t.pry=nx*5;
     vis.style.setProperty('--mx',((nx+1)*50).toFixed(1)+'%');vis.style.setProperty('--my',((ny+1)*50).toFixed(1)+'%');
     vis.classList.add('hov');ir();
    });
    vis.addEventListener('pointerleave',function(){t.hov=false;vis.classList.remove('hov');ir()});
   }
  }
  // Foto do kit e banners de página interna
  var kit=$('.ph-kit');if(kit)par(kit.querySelector('.foto-in'),kit,.07,1.14,mEsc(1.14));
  [].forEach.call($$('.banner'),function(b){par(b.querySelector('img'),b,.07,1.14,mEsc(1.14))});
 }

 function frame(){
  raf=0;
  var vh=w.innerHeight,k=w.innerWidth<700?.6:1,again=false,i,it,r,c;
  var max=h.scrollHeight-vh;
  bar.style.transform='scaleX('+(max>0?cl(w.scrollY/max,0,1):0).toFixed(4)+')';
  // leitura primeiro, escrita depois (sem layout thrashing)
  for(i=0;i<L.length;i++){it=L[i];if(it.v)it.r=it.ref.getBoundingClientRect()}
  for(i=0;i<T.length;i++){it=T[i];if(it.v)it.r=it.ref.getBoundingClientRect()}
  for(i=0;i<L.length;i++){
   it=L[i];if(!it.v)continue;
   r=it.r;c=r.top+r.height/2-vh/2;
   var m=it.m(r),y=cl(-c*it.s*k,-m,m);
   it.el.style.transform='translate3d(0,'+y.toFixed(1)+'px,0)'+(it.sc!==1?' scale('+it.sc+')':'');
  }
  for(i=0;i<T.length;i++){
   it=T[i];if(!it.v)continue;
   r=it.r;c=r.top+r.height/2-vh/2;
   var lim=fino?3.5:2.5,trx=it.hov?it.prx:cl(-c/vh*5,-lim,lim),try_=it.hov?it.pry:0;
   it.rx+=(trx-it.rx)*.14;it.ry+=(try_-it.ry)*.14;
   if(Math.abs(trx-it.rx)>.02||Math.abs(try_-it.ry)>.02)again=true;
   it.el.style.transform='perspective(1000px) rotateX('+it.rx.toFixed(2)+'deg) rotateY('+it.ry.toFixed(2)+'deg)';
  }
  if(again)ir();
 }

 addEventListener('scroll',ir,{passive:true});
 addEventListener('resize',ir);
 ir();

 // Se o usuário ativar "reduzir movimento" com a página aberta, volta tudo ao estático
 if(mq&&mq.addEventListener)mq.addEventListener('change',function(e){
  if(!e.matches)return;
  ativo=false;h.classList.remove('mv');
  L.concat(T).forEach(function(it){it.el.style.transform=''});
  bar.style.display='none';
 });
})();
