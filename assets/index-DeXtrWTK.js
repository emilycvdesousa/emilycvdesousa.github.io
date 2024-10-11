function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-B8fYwamZ.js","assets/index-DZgMcKEA.js","assets/index-CnNGcdbE.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DZgMcKEA.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-B8fYwamZ.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
