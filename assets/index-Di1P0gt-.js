function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-DBdMERGT.js","assets/index-Cnky2KSS.js","assets/index-BBaOsRs6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Cnky2KSS.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-DBdMERGT.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
