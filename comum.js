// Elevamed — funções compartilhadas entre as páginas
const TIPOS=[
 {n:'Entradas',d:'Recuo nas laterais da testa',ok:true},
 {n:'Entradas e coroa',d:'Recuo na testa e falha no topo da cabeça',ok:true},
 {n:'Calvície moderada',d:'Testa e topo bem mais ralos',ok:true},
 {n:'Calvície avançada',d:'Cabelo só nas laterais e na nuca',ok:true},
 {n:'Queda irregular',d:'Falhas em pontos espalhados',ok:false},
 {n:'Queda total',d:'Perda de todo o cabelo',ok:false}
];
function avatar(k){
 const P='#E3D5C1',H='#213632';
 const furos=[
  '<circle cx="19" cy="11" r="8" fill="'+P+'"/><circle cx="45" cy="11" r="8" fill="'+P+'"/>',
  '<circle cx="19" cy="11" r="8" fill="'+P+'"/><circle cx="45" cy="11" r="8" fill="'+P+'"/><circle cx="32" cy="40" r="6" fill="'+P+'"/>',
  '<ellipse cx="32" cy="10" rx="17" ry="11" fill="'+P+'"/><circle cx="32" cy="38" r="10" fill="'+P+'"/>',
  '<ellipse cx="32" cy="27" rx="17" ry="24" fill="'+P+'"/>',
  '<circle cx="22" cy="24" r="4.5" fill="'+P+'"/><circle cx="41" cy="18" r="3.5" fill="'+P+'"/><circle cx="39" cy="42" r="5" fill="'+P+'"/><circle cx="23" cy="47" r="3" fill="'+P+'"/>',
  '<rect width="64" height="64" fill="'+P+'"/>'
 ][k];
 return '<svg width="56" height="56" viewBox="0 0 64 64" aria-hidden="true"><defs><clipPath id="cab'+k+'"><ellipse cx="32" cy="34" rx="21" ry="25"/></clipPath></defs>'+
  '<ellipse cx="10" cy="36" rx="3.5" ry="6" fill="'+P+'"/><ellipse cx="54" cy="36" rx="3.5" ry="6" fill="'+P+'"/>'+
  '<g clip-path="url(#cab'+k+')"><rect width="64" height="64" fill="'+H+'"/>'+furos+'</g>'+
  '<ellipse cx="32" cy="34" rx="21" ry="25" fill="none" stroke="'+H+'" stroke-width="1.5"/></svg>';
}
// [INTEGRAÇÃO] Validação interna: o lead fica salvo só neste navegador.
// Para produção, enviar o objeto para o CRM / ferramenta de e-mail aqui.
function salvarLead(dados){
 try{const l=JSON.parse(localStorage.getItem('ev-leads')||'[]');l.push(Object.assign({quando:new Date().toISOString()},dados));localStorage.setItem('ev-leads',JSON.stringify(l));}catch(e){}
 console.log('[Elevamed] lead', dados);
}
