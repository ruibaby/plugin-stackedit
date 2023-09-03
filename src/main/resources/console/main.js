this.PluginStackEdit=function(c,t){"use strict";const i={class:"h-full border-none"},d=["src"],l=t.defineComponent({__name:"StackEdit",props:{raw:{type:String,required:!1,default:""},content:{type:String,required:!1,default:""}},emits:["update:raw","update:content","update"],setup(p,{emit:a}){const u=p,f="https://stackedit.io/app",r=t.ref(),o=t.computed(()=>{const e={origin:`${window.location.protocol}//${window.location.host}`,fileName:"",contentText:u.raw,silent:!1},n=document.createElement("a");n.href=f;const w=Object.keys(e).map(s=>`${s}=${encodeURIComponent(e[s]||"")}`).join("&");return n.hash=`#${w}`,n}),m=t.computed(()=>`${o.value.protocol}//${o.value.host}`);function h(e){var n;if(e.origin===m.value&&e.source===((n=r.value)==null?void 0:n.contentWindow))switch(e.data.type){case"fileChange":a("update:raw",e.data.payload.content.text),a("update:content",e.data.payload.content.html),a("update",e.data.payload.content.text);break}}return window.addEventListener("message",h),(e,n)=>(t.openBlock(),t.createElementBlock("div",i,[t.createElementVNode("iframe",{ref_key:"iframeRef",ref:r,class:"h-full w-full border-none",src:t.unref(o).href},null,8,d)]))}});return c.definePlugin({extensionPoints:{"editor:create":()=>[{name:"stackedit",displayName:"StackEdit",component:t.markRaw(l),rawType:"markdown",logo:"/plugins/PluginStackEdit/assets/logo.svg"}]}})}(HaloConsoleShared,Vue);
