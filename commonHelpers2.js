import"./assets/modulepreload-polyfill-3cfb730f.js";const o="feedback-form-state",e=document.querySelector(".feedback-form"),r=e.elements.email,n=e.elements.message,m=JSON.parse(localStorage.getItem(o))??{};r.value=m.email??"";n.value=m.message??"";e.addEventListener("submit",c);function c(s){s.preventDefault();const t=r.value.trim(),a=n.value.trim();if(t===""||a===""){alert("Заповніть поля");return}const l={email:t,message:a};localStorage.setItem(o,JSON.stringify(l)),e.reset(),console.log(l),localStorage.clear()}e.addEventListener("input",()=>{const s=r.value.trim(),t=n.value.trim(),a={email:s,message:t};localStorage.setItem(o,JSON.stringify(a))});
//# sourceMappingURL=commonHelpers2.js.map
