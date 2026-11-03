// Elevamed — rastreamento (GTM-TBNN8FQJ)
// Regra LGPD: o dataLayer recebe só o PASSO do funil. Nunca respostas do quiz,
// nome, e-mail, telefone ou qualquer dado de saúde.
window.dataLayer=window.dataLayer||[];
function gtag(){window.dataLayer.push(arguments);}
// Google Analytics 4 direto pela tag do Google (não depende da galeria do GTM)
(function(){var s=document.createElement('script');s.async=true;
 s.src='https://www.googletagmanager.com/gtag/js?id=G-5PTR0W5XXQ';document.head.appendChild(s);})();
gtag('js',new Date());
gtag('config','G-5PTR0W5XXQ');
// Envia o passo do funil para o GTM (dataLayer) e para o GA4.
function evento(nome,params){
 window.dataLayer.push(Object.assign({event:nome},params||{}));
 gtag('event',nome,params||{});
}

// Guarda a origem do clique (UTM + IDs de clique) para devolver a venda ao Google via CRM.
(function(){
 var CHAVES=['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','gbraid','wbraid','fbclid'];
 try{
  var q=new URLSearchParams(location.search),achou={};
  CHAVES.forEach(function(k){var v=q.get(k);if(v)achou[k]=v;});
  if(Object.keys(achou).length){
   achou.landing=location.pathname;achou.quando=new Date().toISOString();
   localStorage.setItem('ev-origem',JSON.stringify(achou));
  }
 }catch(e){}
})();
function origemDoClique(){try{return JSON.parse(localStorage.getItem('ev-origem')||'{}');}catch(e){return {};}}
