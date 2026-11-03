// Elevamed — rastreamento (GTM-TBNN8FQJ)
// Regra LGPD: o dataLayer recebe só o PASSO do funil. Nunca respostas do quiz,
// nome, e-mail, telefone ou qualquer dado de saúde.
window.dataLayer=window.dataLayer||[];
function evento(nome,params){window.dataLayer.push(Object.assign({event:nome},params||{}));}

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
