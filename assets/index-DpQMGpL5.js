function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-eoBP1xD9.js","assets/index-Bu5FSgUW.js","assets/index-BJkbRHA9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Bu5FSgUW.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-eoBP1xD9.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
