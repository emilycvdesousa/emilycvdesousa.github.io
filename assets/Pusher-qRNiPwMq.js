import{Push as a}from"./index-CNjLf8TL.js";import{H as p,a9 as c}from"./index-DZgMcKEA.js";import{E as d}from"./ExternalInteractorBase-CIi3zRdK.js";const h="push",l=0;class O extends d{constructor(e){super(e),this.handleClickMode=n=>{if(n!==h)return;const t=this.container,o=t.actualOptions,r=o.interactivity.modes.push;if(!r)return;const i=p(r.quantity);if(i<=l)return;const s=c([void 0,...r.groups]),u=s!==void 0?t.actualOptions.particles.groups[s]:void 0;t.particles.push(i,t.interactivity.mouse,u,s)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(e,...n){e.push||(e.push=new a);for(const t of n)e.push.load(t==null?void 0:t.push)}reset(){}}export{O as Pusher};
