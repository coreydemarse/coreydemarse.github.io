import{f as L,g as l,h as P,i as R,o as m,c as p,F as C,e as v,a as e,w as _,v as y,b as h}from"./app.45637294.js";function w(){return w=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i[r]=a[r])}return i},w.apply(this,arguments)}var E=function(){var t=!1,a=[],r=function(){if(!t){t=!0;for(var n=0,d=a.length;n<d;n++)a[n]()}},o=function(n){if(!t){a.push(n);return}n()},u={resolved:function(){return t},resolve:r,promise:{then:o}};return u},S=Object.prototype.hasOwnProperty;function B(){var i=E();return{notify:function(){i.resolve()},wait:function(){return i.promise},render:function(a,r,o){this.wait().then(function(){o(window.grecaptcha.render(a,r))})},reset:function(a){typeof a!="undefined"&&(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.reset(a)}))},execute:function(a){typeof a!="undefined"&&(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.execute(a)}))},checkRecaptchaLoad:function(){S.call(window,"grecaptcha")&&S.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!i.resolved())throw new Error("ReCAPTCHA has not been loaded")}}}var f=B();typeof window!="undefined"&&(window.vueRecaptchaApiLoaded=f.notify);L({name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!0},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},emits:["render","verify","expired","error"],setup:function(t,a){var r=a.slots,o=a.emit,u=l(null),c=l(null),n=function(g){o("verify",g)},d=function(){o("expired")},k=function(){o("error")};return P(function(){if(f.checkRecaptchaLoad(),t.loadRecaptchaScript&&!document.getElementById(t.recaptchaScriptId)){var s=document.createElement("script");s.id=t.recaptchaScriptId,s.src="https://"+t.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+t.language,s.async=!0,s.defer=!0,document.head.appendChild(s)}var g=w({},t,{callback:n,"expired-callback":d,"error-callback":k}),b=u.value,V=r.default?b.children[0]:b;f.render(V,g,function(x){c.value=x,o("render",x)})}),{root:u,widgetId:c,reset:function(){f.reset(c.value)},execute:function(){f.execute(c.value)}}},render:function(){var t=this.$slots.default,a;return typeof t=="function"?a=t():a=t,R("div",{ref:"root"},a)}});const M=e("h1",{id:"contact-me",tabindex:"-1"},[h("Contact Me "),e("a",{class:"header-anchor",href:"#contact-me","aria-hidden":"true"},"#")],-1),I=e("h2",{id:"send-me-a-message",tabindex:"-1"},[h("Send me a Message "),e("a",{class:"header-anchor",href:"#send-me-a-message","aria-hidden":"true"},"#")],-1),A=e("h3",{id:"sending-me-a-message-costs-3-paid-via-litecoin-micropayment",tabindex:"-1"},[h("Sending me a message costs $3 paid via Litecoin micropayment "),e("a",{class:"header-anchor",href:"#sending-me-a-message-costs-3-paid-via-litecoin-micropayment","aria-hidden":"true"},"#")],-1),O=e("p",null,[h("Please complete the invoice in the next step in your Litecoin wallet to send me a message."),e("br"),e("br"),h(" I hope you don't mind the fee! It helps filter spam, demonstrates blockchain micropayments and buys me coffee (woohoo)!"),e("br"),e("br"),h(" You are also guaranteed at least one reply from me. It's worth it!")],-1),j={class:"container"},N=e("div",{class:"aside"},null,-1),T={class:"content"},q={class:"content-container"},H={class:"main"},$={key:0},U=e("br",null,null,-1),D=e("br",null,null,-1),F={class:"VPBox"},Y=e("label",{for:"name"},"Name",-1),z=e("label",{for:"email"},"Email",-1),G=e("label",{for:"message"},"Message",-1),J=e("br",null,null,-1),K=e("a",{class:"VPButton medium brand"},"Send Message",-1),Q={key:1},W=e("div",{class:"loading-wrapper"},[e("div",{class:"VPBox"},[e("h4",null,"Sending your message..."),e("br"),e("div",{id:"loading"})])],-1),X=[W],Z={key:2},ee=e("div",{class:"loading-wrapper"},[e("div",{class:"VPBox"},[e("h4",null,"Your message has been sent!"),e("br"),e("div",{id:"success"},"\u2714\uFE0F")])],-1),te=[ee],re='{"title":"Contact Me","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"Send me a Message","slug":"send-me-a-message"},{"level":3,"title":"Sending me a message costs $3 paid via Litecoin micropayment","slug":"sending-me-a-message-costs-3-paid-via-litecoin-micropayment"}],"relativePath":"contact.md"}',ae={name:"contact.md"},oe=Object.assign(ae,{setup(i){const t=l(!1),a=l(!1),r=l(""),o=l(""),u=l("");return l(),(c,n)=>(m(),p("div",null,[M,I,!t.value&&!a.value&&c.ifmicro?(m(),p(C,{key:0},[A,O],64)):v("",!0),e("div",j,[N,e("div",T,[e("div",q,[e("div",H,[!t.value&&!a.value?(m(),p("div",$,[U,D,e("div",F,[Y,_(e("input",{class:"input",type:"text",id:"name",name:"name",placeholder:"Name",required:"","onUpdate:modelValue":n[0]||(n[0]=d=>r.value=d)},null,512),[[y,r.value]]),z,_(e("input",{class:"input",type:"email",id:"email",name:"email",placeholder:"Email",required:"","onUpdate:modelValue":n[1]||(n[1]=d=>o.value=d)},null,512),[[y,o.value]]),G,_(e("textarea",{class:"input",style:{"min-height":"200px"},"onUpdate:modelValue":n[2]||(n[2]=d=>u.value=d),id:"message",name:"message",placeholder:"Message",required:""},`
                        `,512),[[y,u.value]])]),J,K])):v("",!0),t.value?(m(),p("div",Q,X)):v("",!0),a.value?(m(),p("div",Z,te)):v("",!0)])])])])]))}});export{re as __pageData,oe as default};
