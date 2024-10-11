function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-B8xaJRcG.js","assets/index-DZgMcKEA.js","assets/index-CnNGcdbE.css","assets/index-DeXtrWTK.js","assets/index-7UStEyrB.js","assets/index-Df3PGBsh.js","assets/index-Db_s7-sR.js","assets/index-C6fg3vvZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DZgMcKEA.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-B8xaJRcG.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DeXtrWTK.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-7UStEyrB.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Df3PGBsh.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Db_s7-sR.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-C6fg3vvZ.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
