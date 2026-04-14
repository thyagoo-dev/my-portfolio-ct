import{c as o,r as l,j as e,s as p}from"./index-BJj2YNDi.js";import{B as x}from"./Button-DpeHKbNF.js";import{S as c}from"./send-DeBEfCNO.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=o("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=o("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=o("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=o("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),N="5587981677005";function y(s){const t=encodeURIComponent(`🟡 *Nova mensagem do Portfólio*

*Nome:* ${s.nome}
*Email:* ${s.email}
*Assunto:* ${s.assunto}

*Mensagem:*
${s.mensagem}`);return`https://wa.me/${N}?text=${t}`}function z(){const[s,t]=l.useState({nome:"",email:"",assunto:"",mensagem:""}),[m,i]=l.useState(!1);l.useEffect(()=>{document.title="Contato — Victor Kauê"},[]);const d=[s.nome,s.email,s.assunto,s.mensagem].filter(Boolean).length/4*100,h=a=>{a.preventDefault();const r=y(s);window.open(r,"_blank"),i(!0),t({nome:"",email:"",assunto:"",mensagem:""}),setTimeout(()=>i(!1),4e3)},n=a=>r=>{t(u=>({...u,[a]:r.target.value}))};return e.jsx("main",{className:"page-contato",children:e.jsx("section",{className:"contact-hero content-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("h1",{className:"section-title",style:{justifyContent:"center"},children:[e.jsx(c,{size:28}),"Entre em Contato"]}),e.jsx("p",{className:"section-subtitle text-center",children:"Envie uma mensagem que ela vai direto pro meu WhatsApp."}),e.jsxs("div",{className:"contact-layout",children:[e.jsxs("form",{className:"contact-form",onSubmit:h,children:[e.jsx("div",{className:"form-progress",children:e.jsx("div",{className:"form-progress-bar",style:{width:`${d}%`}})}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{htmlFor:"nome",children:[e.jsx(v,{size:16})," Nome"]}),e.jsx("input",{id:"nome",type:"text",value:s.nome,onChange:n("nome"),required:!0,placeholder:"Seu nome completo"})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{htmlFor:"email",children:[e.jsx(g,{size:16})," Email"]}),e.jsx("input",{id:"email",type:"email",value:s.email,onChange:n("email"),required:!0,placeholder:"seu@email.com"})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{htmlFor:"assunto",children:[e.jsx(j,{size:16})," Assunto"]}),e.jsx("input",{id:"assunto",type:"text",value:s.assunto,onChange:n("assunto"),required:!0,placeholder:"Qual o assunto?"})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{htmlFor:"mensagem",children:[e.jsx(f,{size:16})," Mensagem"]}),e.jsx("textarea",{id:"mensagem",value:s.mensagem,onChange:n("mensagem"),required:!0,rows:5,maxLength:1e3,placeholder:"Descreva seu projeto ou ideia..."}),e.jsxs("span",{className:"char-counter",children:[s.mensagem.length,"/1000"]})]}),e.jsxs(x,{type:"submit",variant:"primary",className:"submit-btn",children:[e.jsx(c,{size:18}),"Enviar via WhatsApp"]}),m&&e.jsx("div",{className:"form-success",children:"✅ Mensagem encaminhada para o WhatsApp!"})]}),e.jsxs("aside",{className:"contact-sidebar",children:[e.jsx("h3",{children:"Outras formas de contato"}),e.jsx("div",{className:"contact-cards",children:p.map(a=>e.jsxs("a",{href:a.url,className:"contact-card",target:"_blank",rel:"noopener noreferrer",children:[e.jsx("i",{className:a.iconType==="bootstrap"?a.icon:`bi bi-${a.icon}`}),e.jsxs("div",{children:[e.jsx("strong",{children:a.name}),e.jsx("span",{children:a.detail})]})]},a.name))})]})]})]})})})}export{z as default};
