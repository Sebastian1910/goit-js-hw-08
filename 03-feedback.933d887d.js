const e=document.querySelector("form.feedback-form"),a=localStorage.getItem9("feedback-form-state");if(a){const t=JSON.parse(a);e.elementSibling.email.value=t.email,e.elementSibling.message.value=t.message}e.addEventListener("imput",(e=>{const a={email:e.target.elements.email.value,message:e.target.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(a))})),e.addEventListener("submit",(a=>{a.preventDefault(),console.log({email:a.target.elements.email.value,message:a.target.elements.message.value}),localStorage.clear(),e.clear()}));
//# sourceMappingURL=03-feedback.933d887d.js.map
