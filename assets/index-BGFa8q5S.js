function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-NoYByBAh.js","assets/index-Cnky2KSS.js","assets/index-BBaOsRs6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-Cnky2KSS.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-NoYByBAh.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
