function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D0turA-P.js","assets/index-Cnky2KSS.js","assets/index-BBaOsRs6.css","assets/index-CcOKjyHo.js","assets/index-CPyXABkV.js","assets/index-DAgQ_O1S.js","assets/index-CNhNj3bF.js","assets/index-BGFa8q5S.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Cnky2KSS.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D0turA-P.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CcOKjyHo.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CPyXABkV.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DAgQ_O1S.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CNhNj3bF.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BGFa8q5S.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
