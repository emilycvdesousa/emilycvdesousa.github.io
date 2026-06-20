function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BidUpMpl.js","assets/index-C2pjNICe.js","assets/index-BJkbRHA9.css","assets/index-CqgB4BUG.js","assets/index-CFoAszxY.js","assets/index-BqnAt61i.js","assets/index-BynYBfDS.js","assets/index-qpsW263_.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C2pjNICe.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BidUpMpl.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CqgB4BUG.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CFoAszxY.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BqnAt61i.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BynYBfDS.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-qpsW263_.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
