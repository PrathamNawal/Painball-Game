var Yt=(i,t="")=>`<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false" ${t}>${i}</svg>`,Ee='fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"',St={pause:Yt('<rect x="6" y="5" width="4" height="14" rx="1.2" fill="currentColor"/><rect x="14" y="5" width="4" height="14" rx="1.2" fill="currentColor"/>'),play:Yt('<path d="M7 4.5v15l13-7.5z" fill="currentColor"/>'),hint:Yt(`<path d="M9 21h6M10 17.5h4M12 3a6 6 0 0 0-3.6 10.8V16h7.2v-2.2A6 6 0 0 0 12 3z" ${Ee}/>`),recal:Yt(`<circle cx="12" cy="12" r="6.5" ${Ee}/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" ${Ee}/>`),sliders:Yt(`<path d="M4 7h9M17 7h3M4 17h3M11 17h9" ${Ee}/><circle cx="15" cy="7" r="2" ${Ee}/><circle cx="9" cy="17" r="2" ${Ee}/>`),coin:Yt('<circle cx="12" cy="12" r="9" fill="#ffc933"/><circle cx="12" cy="12" r="6" fill="none" stroke="#b9780a" stroke-width="1.6"/><path d="M12 8.2v7.6M9.8 10.2h3.4a1.2 1.2 0 0 1 0 2.4h-2.4a1.2 1.2 0 0 0 0 2.4h3.4" fill="none" stroke="#b9780a" stroke-width="1.3" stroke-linecap="round"/>'),star:Yt('<path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.6 1.5 6.9-6.1-3.5-6.1 3.5 1.5-6.9-5.2-4.6 6.9-.7z" fill="currentColor"/>'),flame:Yt('<path d="M12 2c1 3.5-2 4.8-2 8a2.3 2.3 0 0 0 4.6 0c0-1-.5-1.8-.8-2.4C16.7 9 18 11 18 13.5a6 6 0 0 1-12 0C6 9 10.5 7.5 12 2z" fill="#ff9d3d"/>'),levels:Yt('<rect x="4" y="4" width="7" height="7" rx="1.5" fill="currentColor"/><rect x="13" y="4" width="7" height="7" rx="1.5" fill="currentColor"/><rect x="4" y="13" width="7" height="7" rx="1.5" fill="currentColor"/><rect x="13" y="13" width="7" height="7" rx="1.5" fill="currentColor"/>'),share:Yt(`<path d="M12 15V3M8 7l4-4 4 4M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7" ${Ee}/>`),video:Yt(`<rect x="3" y="5" width="18" height="14" rx="3" ${Ee}/><path d="M10 9.2v5.6l4.6-2.8z" fill="currentColor"/>`),home:Yt(`<path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z" ${Ee}/>`),restart:Yt(`<path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v5h-5" ${Ee}/>`),skip:Yt(`<path d="M5 5l9 7-9 7zM17 5v14" ${Ee}/>`),close:Yt(`<path d="M6 6l12 12M18 6L6 18" ${Ee}/>`),bolt:Yt('<path d="M13 2L4 14h6l-1 8 9-12h-6z" fill="currentColor"/>'),reload:Yt(`<path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v5h-5" ${Ee}/>`),cart:Yt(`<circle cx="9" cy="20" r="1.6" fill="currentColor"/><circle cx="18" cy="20" r="1.6" fill="currentColor"/><path d="M3 4h2.5l2.2 11h11l2-8H6.5" ${Ee}/>`),check:Yt(`<path d="M5 12.5l4.5 4.5L19 7.5" ${Ee}/>`),lock:Yt(`<rect x="5" y="11" width="14" height="9" rx="2" ${Ee}/><path d="M8 11V8a4 4 0 0 1 8 0v3" ${Ee}/>`),ff:Yt('<path d="M4 5l8 7-8 7zM12 5l8 7-8 7z" fill="currentColor"/>'),skull:Yt(`<path d="M12 3a8 8 0 0 0-5 14v3h10v-3a8 8 0 0 0-5-14z" ${Ee}/><circle cx="9.3" cy="11.5" r="1.4" fill="currentColor"/><circle cx="14.7" cy="11.5" r="1.4" fill="currentColor"/>`),swapL:Yt('<path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>'),swapR:Yt('<path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>'),trophy:Yt('<path d="M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M12 14v3M8 20h8l-1-3H9z" fill="#ffc933" stroke="#8a5a00" stroke-width="1.3" stroke-linejoin="round"/>'),mask:Yt('<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 1.5v5M12 17.5v5M1.5 12h5M17.5 12h5" stroke="currentColor" stroke-width="2"/>'),hand:Yt('<path d="M8 12V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v8c0 4-2.5 6.5-6 6.5S6 18 5 15l-1-3a1.5 1.5 0 0 1 3-.8L8 13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>'),boom:Yt('<path d="M12 2l2 5 5-2-2 5 5 2-5 2 2 5-5-2-2 5-2-5-5 2 2-5-5-2 5-2-2-5 5 2z" fill="currentColor"/>'),bolt2:Yt('<path d="M13 2L4 14h6l-1 8 9-12h-6z" fill="currentColor"/>'),swords:Yt('<path d="M5 19L18 6M14 4h5v5M19 19L6 6M10 4H5v5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>'),gun:Yt('<path d="M3 9h13l2 2h3v3h-6l-1 4H8l1-4H3z" fill="currentColor"/>'),shirt:Yt('<path d="M8 4l-5 3 2 4 2-1v10h10V10l2 1 2-4-5-3a4 4 0 0 1-8 0z" fill="currentColor"/>'),target:Yt('<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>'),install:Yt(`<path d="M12 3v12M7 11l5 5 5-5M5 20h14" ${Ee}/>`)};var yh=["Neon","Sunset","Rusty","Frosty","Turbo","Electric","Velvet","Cosmic","Lazy","Crimson","Mellow","Atomic","Lucky","Wild","Chrome","Jelly"],vh=["Alley","Yard","Warehouse","Canyon","Garden","Depot","Arcade","Plaza","Quarry","Dockside","Rooftop","Maze","Fields","Foundry","Harbor","Orchard"];function _h(i){let t=0;for(let e of String(i))t=t*31+e.charCodeAt(0)>>>0;return`${yh[t%yh.length]} ${vh[(t>>>5)%vh.length]}`}var bh=i=>Math.min(1,Math.max(0,i)),Zu=i=>bh(.12+.66*(1-Math.exp(-i/22))),Ju=i=>bh(.45+.25*(1-Math.exp(-i/10))),Ku=i=>i<=3?1:i<=9?2:i<=19?3:4,yo=i=>i<.3?"Rookie":i<.5?"Regular":i<.7?"Veteran":i<.85?"Elite":"Legend",br=[["rusher","anchor","flanker","sniper"],["anchor","rusher","sniper","flanker"],["flanker","rusher","anchor","sniper"],["sniper","flanker","rusher","anchor"]];function Mr(i){i=Math.max(1,i|0);let t=Ku(i),e=i%5===0;return{kind:"journey",n:i,seed:`lvl:${i}`,level:i,sizes:[t,t],skill:[Ju(i),Math.min(1,Zu(i)+(e?.08:0))],roles:[br[i%4],br[(i+1)%4]],name:_h(`lvl:${i}`),boss:e,label:`Level ${i}`,winRounds:2}}function Mh(i){return{kind:"daily",n:0,seed:`daily:${i}`,level:12,sizes:[3,3],skill:[.55,.62],roles:[br[1],br[2]],name:_h(`daily:${i}`),boss:!1,label:"Daily Arena",winRounds:2,key:i}}function Sh({won:i,lostRounds:t,eliminated:e}){return i?t>0?1:e?2:3:0}function wh({won:i,roundsWon:t,kills:e,stars:n,firstStars:s,daily:r}){let a=t*3+e+(i?10:0);return s&&n===3&&(a+=25),r&&i&&(a+=15),a}var ei=[{id:"classic",name:"Classic",cost:0,you:"#2f8bff",foe:"#ff8a1f"},{id:"neon",name:"Neon",cost:40,you:"#ff3df2",foe:"#c6ff1a"},{id:"sunset",name:"Sunset",cost:60,you:"#ff5e7e",foe:"#19d9c5"},{id:"toxic",name:"Toxic",cost:60,you:"#7dff3a",foe:"#a24dff"},{id:"candy",name:"Candy",cost:90,you:"#ff9ad5",foe:"#2ee6ff"},{id:"gold",name:"Gold Rush",cost:120,you:"#ffd23a",foe:"#3a6dff"}],Sr=i=>ei.find(t=>t.id===i)||ei[0],Gs=(i=new Date)=>`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`;function ju(i){let[t,e,n]=i.split("-").map(Number);return Gs(new Date(t,e-1,n-1,12))}function Th(i,t){return i.last===t?{first:!1,streak:i.streak}:(i.streak=i.last===ju(t)?i.streak+1:1,i.bestStreak=Math.max(i.bestStreak,i.streak),i.last=t,i.done=[...i.done.filter(e=>e!==t),t].slice(-60),{first:!0,streak:i.streak})}var re=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Eh=(i,t=3)=>Array.from({length:t},(e,n)=>`<span class="star ${n<i?"on":""}" style="--i:${n}">${St.star}</span>`).join(""),Ah=(i,t="")=>`<div class="coinpill" ${t?`id="${t}"`:""} role="img" aria-label="${re(i)} coins">${St.coin}<b>${re(i)}</b></div>`,Rh=(i,t,e)=>Array.from({length:t},(n,s)=>`<i class="${e} ${s<i?"on":""}"></i>`).join(""),Bi=class{constructor(t,e){this.root=t,this.actions=e,this.layers={},this.hud=null,t.addEventListener("click",n=>{var r,a,o,l;let s=n.target.closest("[data-act]");!s||s.disabled||((a=(r=this.actions).sfx)==null||a.call(r,"click"),(l=(o=this.actions)[s.dataset.act])==null||l.call(o,s.dataset))}),t.addEventListener("input",n=>{var r,a;let s=n.target.closest("[data-set]");s&&((a=(r=this.actions).setSetting)==null||a.call(r,s.dataset.set,s.type==="checkbox"?s.checked:s.value))}),t.addEventListener("change",n=>{var r,a;let s=n.target.closest("[data-seg]");s&&((a=(r=this.actions).setSetting)==null||a.call(r,s.dataset.seg,s.value))})}_layer(t,e,n=""){this._drop(t);let s=document.createElement("div");return s.className=`layer L-${t} ${n}`,s.innerHTML=e,this.root.appendChild(s),this.layers[t]=s,s}_drop(t){let e=this.layers[t];e&&(e.remove(),delete this.layers[t])}has(t){return!!this.layers[t]}hideAll(){for(let t of Object.keys(this.layers))this._drop(t);this.hud=null}hide(t){this._drop(t)}_focus(t,e=".primary"){var n;(n=t.querySelector(e)||t.querySelector("button"))==null||n.focus({preventScroll:!0})}setPalette(t){this.root.style.setProperty("--you",t.you),this.root.style.setProperty("--foe",t.foe)}setTouch(t){this.root.classList.toggle("touch",!!t)}showMenu({level:t,coins:e,daily:n,canInstall:s,stats:r}){this.hideAll();let a=n.done?`Done today \xB7 ${n.streak}-day streak`:n.streak?`${n.streak}-day streak \u2014 keep it alive`:"A fresh arena every day",o=this._layer("menu",`
      <section class="screen menu" data-ui>
        <div class="menu-top">${Ah(e,"menu-coins")}</div>
        <div class="brand"><h1>PAINBALL</h1><p>Splat the bots. Own the arena.</p></div>
        <div class="stack">
          <button class="btn primary big" data-act="play"><span class="ico">${St.play}</span><span>Play<small>Campaign \xB7 Level ${re(t)}</small></span></button>
          <button class="btn gold big" data-act="daily"><span class="ico">${St.flame}</span><span>Daily Arena<small>${re(a)}</small></span></button>
          <div class="row">
            <button class="btn ghost" data-act="levels">${St.levels}<span>Levels</span></button>
            <button class="btn ghost" data-act="shop">${St.cart}<span>Paint</span></button>
            <button class="btn ghost" data-act="settings">${St.sliders}<span>Settings</span></button>
          </div>
          ${s?`<button class="btn ghost" data-act="install">${St.install}<span>Install app</span></button>`:""}
        </div>
        <p class="tip">${r.matches?`${re(r.wins)} wins \xB7 ${re(r.elims)} splats`:"Move, aim, splat. One hit and you\u2019re out."}</p>
      </section>`);this._focus(o)}showHud({label:t,winRounds:e}){var s,r;this._drop("menu"),this._drop("result"),this._layer("hud",`
      <div class="hud">
        <div class="hud-top">
          <button class="iconbtn" data-act="pause" aria-label="Pause">${St.pause}</button>
          <div class="score" aria-label="Score">
            <div class="side you" id="h-you" role="img" aria-label="Your rounds won">${Rh(0,e,"pip")}</div>
            <div class="hud-center"><div class="hud-label">${re(t)}</div><div class="hud-time" id="h-time" aria-live="off">0:00</div></div>
            <div class="side foe" id="h-foe" role="img" aria-label="Enemy rounds won">${Rh(0,e,"pip")}</div>
          </div>
          <button class="iconbtn" id="h-ff" data-act="ff" aria-label="Fast forward" hidden>${St.ff}</button>
        </div>
        <div class="alive" id="h-alive" role="img" aria-label="Players alive"></div>
        <div class="hud-bottom">
          <div class="ammo" id="h-ammo" role="img" aria-label="Ammo"><i></i><b>28</b></div>
          <div class="acts">
            <button class="act" id="h-reload" data-act="reloadBtn" aria-label="Reload">${St.reload}</button>
            <button class="act big" id="h-dash" data-act="dashBtn" aria-label="Dash"><span class="cd"></span>${St.bolt}<em>DASH</em></button>
          </div>
        </div>
      </div>
      <div class="stick move" id="st-move" hidden><i></i></div><div class="stick aim" id="st-aim" hidden><i></i></div>`);let n=a=>document.getElementById(a);this.hud={time:n("h-time"),you:n("h-you"),foe:n("h-foe"),alive:n("h-alive"),ammoBar:n("h-ammo"),ammoTxt:(s=n("h-ammo"))==null?void 0:s.querySelector("b"),ammoFill:(r=n("h-ammo"))==null?void 0:r.querySelector("i"),dash:n("h-dash"),reload:n("h-reload"),ff:n("h-ff"),move:n("st-move"),aim:n("st-aim"),c:{}},this.hud.dashCd=this.hud.dash.querySelector(".cd")}updateHud(t){let e=this.hud;if(!e)return;let n=e.c,s=`${Math.floor(t.time/60)}:${String(Math.floor(t.time%60)).padStart(2,"0")}`;n.t!==s&&(e.time.textContent=s,n.t=s);let r=`${t.youScore}-${t.foeScore}`;n.sc!==r&&(e.you.querySelectorAll("i").forEach((h,d)=>h.classList.toggle("on",d<t.youScore)),e.foe.querySelectorAll("i").forEach((h,d)=>h.classList.toggle("on",d<t.foeScore)),e.you.setAttribute("aria-label",`You have won ${t.youScore} rounds`),e.foe.setAttribute("aria-label",`Enemy has won ${t.foeScore} rounds`),n.sc=r);let a=`${t.youAlive}/${t.youTotal}-${t.foeAlive}/${t.foeTotal}`;n.al!==a&&(e.alive.innerHTML=`<span class="tm you">${Array.from({length:t.youTotal},(h,d)=>`<i class="${d<t.youAlive?"on":""}"></i>`).join("")}</span><span class="tm foe">${Array.from({length:t.foeTotal},(h,d)=>`<i class="${d<t.foeAlive?"on":""}"></i>`).join("")}</span>`,e.alive.setAttribute("aria-label",`Your team ${t.youAlive} of ${t.youTotal} alive. Enemy ${t.foeAlive} of ${t.foeTotal}`),n.al=a);let o=t.reloading?"r":t.ammo;n.am!==o&&(e.ammoTxt.textContent=t.reloading?"\u2026":t.ammo,e.ammoBar.classList.toggle("low",!t.reloading&&t.ammo<=6),e.ammoBar.classList.toggle("rel",t.reloading),e.ammoBar.setAttribute("aria-label",t.reloading?"Reloading":`${t.ammo} paintballs`),n.am=o);let l=Math.round(t.ammoFrac*100);n.fr!==l&&(e.ammoFill.style.width=l+"%",n.fr=l);let c=Math.round(t.dashFrac*20);n.dc!==c&&(e.dashCd.style.transform=`scaleY(${1-c/20})`,e.dash.classList.toggle("ready",c>=20),n.dc=c),n.dead!==t.dead&&(e.ff.hidden=!t.dead,n.dead=t.dead)}updateStick(t,e){var s;let n=(s=this.hud)==null?void 0:s[t];if(n){if(!e){n.hidden=!0;return}n.hidden=!1,n.style.transform=`translate(${e.ox}px, ${e.oy}px)`,n.firstElementChild.style.transform=`translate(${e.x*44}px, ${e.y*44}px)`}}showBanner(t,e="",n=""){this._layer("banner",`<div class="banner ${n}" role="status"><div class="b-big">${re(t)}</div>${e?`<div class="b-sub">${re(e)}</div>`:""}</div>`)}hideBanner(){this._drop("banner")}showCoach(t){this._layer("coach",`<div class="coach" role="status">${re(t)}</div>`)}hideCoach(){this._drop("coach")}showIntro({label:t,name:e,vs:n,foe:s,boss:r}){this._drop("menu"),this._layer("intro",`<div class="intro" role="status"><div class="i-lab">${re(t)}${r?' <span class="tag">BOSS</span>':""}</div><div class="i-name">${re(e)}</div><div class="i-vs"><b class="you">YOU</b><span>${re(n)}</span><b class="foe">${re(s)}</b></div></div>`)}showPause(){let t=this._layer("pause",`
      <div class="modal" data-ui role="dialog" aria-modal="true" aria-labelledby="pz"><div class="card">
        <h2 id="pz">Paused</h2>
        <button class="btn primary" data-act="resume">${St.play}<span>Resume</span></button>
        <div class="grid2">
          <button class="btn ghost" data-act="restart">${St.restart}<span>Restart match</span></button>
          <button class="btn ghost" data-act="settings">${St.sliders}<span>Settings</span></button>
          <button class="btn ghost" data-act="quit">${St.home}<span>Quit to menu</span></button>
        </div>
        <p class="muted fine">Duel: hold to aim \xB7 drag \xB7 release to fire \xB7 A/D or \u25C0 \u25B6 swap cover. Arena: WASD/left thumb move, mouse/right thumb aim, Shift/double-tap dash.</p>
      </div></div>`);this._focus(t)}hidePause(){this._drop("pause")}showResult({won:t,title:e,sub:n,stars:s,score:r,facts:a,coins:o,nextLabel:l,art:c,daily:h,canShare:d}){this._drop("hud"),this._drop("banner");let f=this._layer("result",`
      <div class="modal win" data-ui role="dialog" aria-modal="true" aria-labelledby="rz"><div class="card scroll">
        <h2 id="rz" class="${t?"w":"l"}">${re(e)}</h2>
        <p class="muted center">${re(n)}</p>
        <div class="bigscore"><b class="you">${re(r[0])}</b><span>\u2013</span><b class="foe">${re(r[1])}</b></div>
        ${t?`<div class="stars" role="img" aria-label="${s} of 3 stars">${Eh(s)}</div>`:""}
        <div class="art" id="art-slot" aria-hidden="true"></div>
        <dl class="facts">${a.map(([u,g])=>`<div><dt>${re(u)}</dt><dd>${re(g)}</dd></div>`).join("")}<div><dt>Coins</dt><dd>${St.coin}+${re(o)}</dd></div></dl>
        <button class="btn primary" data-act="${t?"next":"retry"}">${St.play}<span>${re(l)}</span></button>
        <div class="grid2">
          ${t?`<button class="btn ghost" data-act="retry">${St.restart}<span>Replay</span></button>`:`<button class="btn ghost" data-act="menu">${St.home}<span>Menu</span></button>`}
          ${d?`<button class="btn ghost" data-act="share">${St.share}<span>Share art</span></button>`:""}
          ${t?`<button class="btn ghost" data-act="menu">${St.home}<span>Menu</span></button>`:""}
        </div>
      </div></div>`);c&&(c.classList.add("art-cv"),f.querySelector("#art-slot").appendChild(c)),this._focus(f)}showSettings({settings:t,version:e,persistent:n,canVibrate:s}){let r=(l,c,h)=>`<div class="seg" role="radiogroup">${c.map(([d,f])=>`<label><input type="radio" name="${l}" value="${d}" data-seg="${l}" ${String(h)===String(d)?"checked":""}><span>${f}</span></label>`).join("")}</div>`,a=(l,c,h,d)=>`<label class="row-set"><span>${c}<small>${h}</small></span><input class="switch" type="checkbox" role="switch" data-set="${l}" ${d?"checked":""}></label>`,o=this._layer("settings",`
      <div class="modal front" data-ui role="dialog" aria-modal="true" aria-labelledby="sz"><div class="card scroll">
        <div class="card-head"><h2 id="sz">Settings</h2><button class="iconbtn" data-act="closeSettings" aria-label="Close settings">${St.close}</button></div>
        ${a("sound","Sound","Synth effects, no downloads",t.sound)}
        ${s?a("haptics","Haptics","Vibrate on hits (Android)",t.haptics):""}
        <div class="row-set col"><span>Aim assist<small>Gently pulls your aim toward enemies you can see</small></span>${r("assist",[[0,"Off"],[1,"Low"],[2,"Med"],[3,"High"]],t.assist)}</div>
        <label class="row-set col"><span>Aim sensitivity<small>How far the crosshair moves per drag</small></span><input type="range" min="0.5" max="1.8" step="0.1" value="${t.sens}" data-set="sens" aria-label="Aim sensitivity"></label>
        <div class="row-set col"><span>Graphics<small>Low saves battery on older phones</small></span>${r("quality",[["high","High"],["low","Low"]],t.quality)}</div>
        ${a("lefty","Left-handed","Swap move and aim sides",t.lefty)}
        ${a("reduceMotion","Reduce motion","No screen shake or confetti",t.reduceMotion)}
        <button class="btn danger" data-act="resetProgress">Reset all progress</button>
        <p class="muted fine">Painball v${re(e)} \xB7 no ads, no tracking \xB7 ${n?"progress saved on this device":"storage blocked: progress will not persist"}</p>
      </div></div>`);this._focus(o,"input, button")}hideSettings(){this._drop("settings")}showLevels({unlocked:t,stars:e,page:n,current:s}){let a=n*12+1,o=Array.from({length:12},(h,d)=>{let f=a+d,u=f<=t,g=e[f]||0;return`<button class="lv ${f===s?"cur":""} ${u?"":"locked"}" ${u?`data-act="playLevel" data-n="${f}"`:"disabled"} aria-label="Level ${f}${u?"":" locked"}${f%5===0?", boss":""}${g?`, ${g} stars`:""}"><b>${u?f:St.lock}</b>${f%5===0?'<small class="boss">BOSS</small>':""}<span class="mini">${Eh(g)}</span></button>`}).join(""),l=Math.max(1,Math.ceil((t+12)/12)),c=this._layer("levels",`
      <div class="modal front" data-ui role="dialog" aria-modal="true" aria-labelledby="lz"><div class="card scroll">
        <div class="card-head"><h2 id="lz">Campaign</h2><button class="iconbtn" data-act="closeLevels" aria-label="Close levels">${St.close}</button></div>
        <div class="lvgrid">${o}</div>
        <div class="pager"><button class="btn ghost" data-act="levelsPage" data-page="${Math.max(0,n-1)}" ${n===0?"disabled":""} aria-label="Previous page">\u2039</button><span>${a}\u2013${a+12-1}</span><button class="btn ghost" data-act="levelsPage" data-page="${Math.min(l-1,n+1)}" ${n>=l-1?"disabled":""} aria-label="Next page">\u203A</button></div>
      </div></div>`);this._focus(c,".lv.cur, .lv:not(.locked)")}hideLevels(){this._drop("levels")}showShop({coins:t,owned:e,equipped:n}){let s=ei.map(a=>{let o=e.includes(a.id),l=n===a.id;return`<div class="pal ${l?"eq":""}"><div class="sw"><i style="background:${a.you}"></i><i style="background:${a.foe}"></i></div><div class="pn"><b>${re(a.name)}</b><small>You vs bots</small></div>
        ${l?'<span class="tag">EQUIPPED</span>':o?`<button class="btn small" data-act="equip" data-id="${a.id}">Equip</button>`:`<button class="btn small" data-act="buy" data-id="${a.id}" >${St.coin}<span>${a.cost}</span></button>`}</div>`}).join(""),r=this._layer("shop",`
      <div class="modal front" data-ui role="dialog" aria-modal="true" aria-labelledby="pz2"><div class="card scroll">
        <div class="card-head"><h2 id="pz2">Paint colours</h2>${Ah(t)}</div>
        <p class="muted">Cosmetic only \u2014 every palette is colour-blind safe and enemies always have dashed rings.</p>
        <div class="pals">${s}</div>
        <button class="btn ghost" data-act="closeShop">${St.close}<span>Close</span></button>
      </div></div>`);this._focus(r,".btn")}hideShop(){this._drop("shop")}toast(t,e=1800){let n=document.createElement("div");n.className="toast",n.setAttribute("role","status"),n.textContent=t,this.root.appendChild(n),setTimeout(()=>n.classList.add("out"),e),setTimeout(()=>n.remove(),e+450)}confirm({title:t,body:e,ok:n,cancel:s,danger:r}){return new Promise(a=>{let o=this._layer("confirm",`
        <div class="modal front" data-ui role="alertdialog" aria-modal="true" aria-labelledby="cz"><div class="card small">
          <h2 id="cz">${re(t)}</h2><p class="muted">${re(e)}</p>
          <div class="grid2"><button class="btn ghost" data-c="0">${re(s)}</button><button class="btn ${r?"danger":"primary"}" data-c="1">${re(n)}</button></div>
        </div></div>`);o.addEventListener("click",l=>{let c=l.target.closest("[data-c]");c&&(l.stopPropagation(),this._drop("confirm"),a(c.dataset.c==="1"))}),this._focus(o,'[data-c="0"]')})}};var wr="painball.save",vo="painball.save.bak";function bo(){return{version:1,coins:20,level:1,stars:{},daily:{last:null,streak:0,bestStreak:0,done:[]},palettes:["classic"],outfits:["rookie"],duel:{stage:1,best:0,trophies:0,wins:0,losses:0,tricks:{head:0,hand:0,barrel:0,quick:0}},settings:{sound:!0,haptics:!0,assist:2,quality:"high",palette:"classic",lefty:!1,reduceMotion:!1,outfit:"rookie",sens:1},flags:{tutorialSeen:!1,duelTutorial:!1},stats:{matches:0,wins:0,rounds:0,roundsWon:0,elims:0,shots:0,hits:0,shares:0,dashes:0,playSec:0}}}var pn=(i,t,e,n)=>Number.isFinite(i)?Math.min(e,Math.max(t,Math.floor(i))):n,Qu=(i,t,e,n)=>Number.isFinite(i)?Math.min(e,Math.max(t,i)):n,Vi=(i,t)=>typeof i=="boolean"?i:t,tf=(i,t,e)=>t.includes(i)?i:e,Ch=i=>typeof i=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(i);function ef(i){if(!i||typeof i!="object"||Array.isArray(i))return null;let t={...i},e=Number.isInteger(t.version)?t.version:0;return e<1&&(t={version:1,coins:t.coins,level:t.level,settings:{sound:t.sound}},e=1),e>1?null:(t.version=1,t)}function nf(i){let t=bo(),e=i.settings||{},n=i.flags||{},s=i.stats||{},r=i.daily||{},a=i.duel||{},o={},l={};for(let[d,f]of Object.entries(i.stars&&typeof i.stars=="object"?i.stars:{}))/^\d+$/.test(d)&&f>=1&&f<=3&&(l[d]=Math.floor(f));let c=["classic","neon","sunset","toxic","candy","gold"],h=Array.from(new Set(["classic",...Array.isArray(i.palettes)?i.palettes.filter(d=>c.includes(d)):[]]));return{version:1,coins:pn(i.coins,0,1e7,t.coins),level:pn(i.level,1,1e6,t.level),stars:l,daily:{last:Ch(r.last)?r.last:null,streak:pn(r.streak,0,1e5,0),bestStreak:pn(r.bestStreak,0,1e5,0),done:Array.isArray(r.done)?r.done.filter(Ch).slice(-60):[]},palettes:h,outfits:Array.from(new Set(["rookie",...Array.isArray(i.outfits)?i.outfits.filter(d=>["ranger","ninja","bolt","blaze","royal"].includes(d)):[]])),duel:{stage:pn(a.stage,1,1e6,1),best:pn(a.best,0,1e6,0),trophies:pn(a.trophies,0,1e7,0),wins:pn(a.wins,0,1e9,0),losses:pn(a.losses,0,1e9,0),tricks:Object.fromEntries(["head","hand","barrel","quick"].map(d=>{var f;return[d,pn(((f=o.tricks)==null?void 0:f[d])??(a.tricks||{})[d],0,1e9,0)]}))},settings:{sound:Vi(e.sound,!0),haptics:Vi(e.haptics,!0),assist:pn(e.assist,0,3,2),quality:tf(e.quality,["high","low"],"high"),palette:h.includes(e.palette)?e.palette:"classic",lefty:Vi(e.lefty,!1),reduceMotion:Vi(e.reduceMotion,!1),outfit:["rookie","ranger","ninja","bolt","blaze","royal"].includes(e.outfit)?e.outfit:"rookie",sens:Qu(e.sens,.5,1.8,1)},flags:{tutorialSeen:Vi(n.tutorialSeen,!1),duelTutorial:Vi(n.duelTutorial,!1)},stats:Object.fromEntries(Object.keys(t.stats).map(d=>[d,pn(s[d],0,1e12,0)]))}}var Tr=class{constructor(){this.m=new Map}getItem(t){return this.m.has(t)?this.m.get(t):null}setItem(t,e){this.m.set(t,String(e))}removeItem(t){this.m.delete(t)}};function _o(i){if(i==null)return null;try{let t=ef(JSON.parse(i));return t?nf(t):null}catch{return null}}var Er=class{constructor(t){if(this.persistent=!0,this.storage=t,!t)this.storage=new Tr,this.persistent=!1;else try{t.setItem("painball.probe","1"),t.removeItem("painball.probe")}catch{this.storage=new Tr,this.persistent=!1}this.state=this.load()}load(){let t=null,e="default";try{t=_o(this.storage.getItem(wr)),t&&(e="main")}catch{}if(!t)try{t=_o(this.storage.getItem(vo)),t&&(e="backup")}catch{}return this.loadedFrom=e,t||bo()}save(){try{let t=this.storage.getItem(wr);return t!=null&&_o(t)&&this.storage.setItem(vo,t),this.storage.setItem(wr,JSON.stringify(this.state)),!0}catch{return this.persistent=!1,!1}}reset(){this.state=bo();try{this.storage.removeItem(wr),this.storage.removeItem(vo)}catch{}return this.state}};function sf(i){let t=1779033703^i.length;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),3432918353),t=t<<13|t>>>19;return t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),(t^t>>>16)>>>0}function rf(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}var Ae=class{constructor(t){this.seed=typeof t=="string"?sf(t):t>>>0,this._next=rf(this.seed)}next(){return this._next()}int(t){return Math.floor(this._next()*t)}range(t,e){return t+this.int(e-t+1)}chance(t){return this._next()<t}pick(t){return t[this.int(t.length)]}shuffle(t){for(let e=t.length-1;e>0;e--){let n=this.int(e+1),s=t[e];t[e]=t[n],t[n]=s}return t}};var $e=(i,t,e)=>i<t?t:i>e?e:i;function af(i,t,e,n,s){let r=e-i,a=n-t,o=0,l=1;for(let c=0;c<2;c++){let h=c?t:i,d=c?a:r,f=c?s.y:s.x,u=f+(c?s.h:s.w);if(Math.abs(d)<1e-9){if(h<f||h>u)return-1;continue}let g=(f-h)/d,x=(u-h)/d;if(g>x){let m=g;g=x,x=m}if(g>o&&(o=g),x<l&&(l=x),o>l)return-1}return o}function of(i,t,e,n,s){let r=e-i,a=n-t,o=i-s.x,l=t-s.y,c=r*r+a*a,h=2*(o*r+l*a),d=o*o+l*l-s.r*s.r;if(d<=0)return 0;if(c<1e-12)return-1;let f=h*h-4*c*d;if(f<0)return-1;let u=(-h-Math.sqrt(f))/(2*c);return u>=0&&u<=1?u:-1}var Mo=(i,t,e,n,s)=>s.kind==="circ"?of(i,t,e,n,s):af(i,t,e,n,s);function Hi(i,t,e,n,s){for(let r=0;r<i.length;r++)if(Mo(t,e,n,s,i[r])>=0)return!1;return!0}function Gi(i,t,e){if(e.kind==="circ")return Math.hypot(i-e.x,t-e.y)-e.r;let n=$e(i,e.x,e.x+e.w),s=$e(t,e.y,e.y+e.h),r=Math.hypot(i-n,t-s);return r>0?r:-Math.min(i-e.x,e.x+e.w-i,t-e.y,e.y+e.h-t)}function Ph(i,t){if(t.kind==="circ"){let f=i.x-t.x,u=i.y-t.y,g=Math.hypot(f,u),x=i.r+t.r;if(g>=x)return!1;let m=g>1e-6?f/g:1,p=g>1e-6?u/g:0;return i.x=t.x+m*x,i.y=t.y+p*x,!0}let e=$e(i.x,t.x,t.x+t.w),n=$e(i.y,t.y,t.y+t.h),s=i.x-e,r=i.y-n,a=Math.hypot(s,r);if(a>=i.r)return!1;if(a>1e-6)return i.x=e+s/a*i.r,i.y=n+r/a*i.r,!0;let o=i.x-t.x,l=t.x+t.w-i.x,c=i.y-t.y,h=t.y+t.h-i.y,d=Math.min(o,l,c,h);return d===o?i.x=t.x-i.r:d===l?i.x=t.x+t.w+i.r:d===c?i.y=t.y-i.r:i.y=t.y+t.h+i.r,!0}var vi=(i,t)=>{let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};var Ve=16,lf=560,cf=880,Wi=Ve*2+8,$i=120,Ws=14,hf=i=>Math.min(9,4+Math.floor(i/5));function So(i,t,e){if(i.kind==="circ"?i:null)return Gi(i.x,i.y,t)-i.r<e;if(t.kind==="circ")return Gi(t.x,t.y,i)-t.r<e;let s=Math.max(i.x-(t.x+t.w),t.x-(i.x+i.w),0),r=Math.max(i.y-(t.y+t.h),t.y-(i.y+i.h),0);return Math.hypot(s,r)<e}var df=(i,t,e)=>i.kind==="circ"?{kind:"circ",x:t-i.x,y:e-i.y,r:i.r}:{kind:"rect",x:t-i.x-i.w,y:e-i.y-i.h,w:i.w,h:i.h},uf=(i,t,e,n)=>i.kind==="circ"?i.x-i.r>=n&&i.x+i.r<=t-n&&i.y-i.r>=$i&&i.y+i.r<=e-$i:i.x>=n&&i.x+i.w<=t-n&&i.y>=$i&&i.y+i.h<=e-$i;function ff(i,t,e){let n=new Ae(`painball:arena:${i}`),s=lf,r=cf,a=hf(t),o=[];n.chance(.65)&&o.push(n.chance(.5)?{kind:"circ",x:s/2,y:r/2,r:n.range(28,44)}:{kind:"rect",x:s/2-40,y:r/2-22,w:80,h:44});let l=0,c=0;for(;c<a&&l++<600;){let u,g=n.next();if(g<.3)u={kind:"circ",x:n.range(70,s-70),y:n.range($i+30,r/2-20),r:n.range(22,38)};else{let m=g<.55,p=m?n.range(110,190):n.range(46,96),y=m?n.range(22,30):n.range(36,70),[S,b]=n.chance(m?.35:.5)?[y,p]:[p,y];u={kind:"rect",x:n.range(Wi,s-Wi-S),y:n.range($i+20,r/2-b/2),w:S,h:b}}if(!uf(u,s,r,Wi))continue;let x=df(u,s,r);o.some(m=>So(u,m,Wi))||o.some(m=>So(x,m,Wi))||So(u,x,Wi)||(o.push(u,x),c++)}let h=(u,g)=>Array.from({length:g},(x,m)=>{let p=s*(m+1)/(g+1);return u===0?{x:p,y:r-46}:{x:s-p,y:46}}),d=[h(0,e[0]),h(1,e[1])],f=null;for(let u=0;u<200&&!f;u++){let g={x:n.range(80,s-80),y:n.range(r/2-190,r/2-40)};o.every(x=>Gi(g.x,g.y,x)>Ve+20)&&(f=[g,{x:s-g.x,y:r-g.y}])}return{W:s,H:r,bunkers:o,spawns:d,pickups:f||[]}}function pf(i){let t=i.H,e=n=>({x:t-n.y,y:n.x});return{W:i.H,H:i.W,bunkers:i.bunkers.map(n=>n.kind==="circ"?{kind:"circ",...e(n),r:n.r}:{kind:"rect",x:t-n.y-n.h,y:n.x,w:n.h,h:n.w}),spawns:i.spawns.map(n=>n.map(e)),pickups:i.pickups.map(e)}}function wo({seed:i,level:t=1,landscape:e=!1,teamSizes:n=[1,1]}){let s=ff(i,t,n);e&&(s=pf(s));let r={seed:i,level:t,landscape:e,w:s.W,h:s.H,bunkers:s.bunkers,spawns:s.spawns,pickups:s.pickups};return r.nav=mf(r),r.spots=gf(r),r}function mf(i){let t=Math.ceil(i.w/Ws),e=Math.ceil(i.h/Ws),n=new Uint8Array(t*e),s=Ve+2;for(let r=0;r<e;r++)for(let a=0;a<t;a++){let o=(a+.5)*Ws,l=(r+.5)*Ws,c=o<Ve||l<Ve||o>i.w-Ve||l>i.h-Ve;for(let h=0;!c&&h<i.bunkers.length;h++)Gi(o,l,i.bunkers[h])<s&&(c=!0);n[r*t+a]=c?1:0}return{cols:t,rows:e,cell:Ws,blocked:n}}var $s=(i,t,e)=>({i:$e(Math.floor(t/i.cell),0,i.cols-1),j:$e(Math.floor(e/i.cell),0,i.rows-1)});function gf(i){let t=[],e=Ve+6,n=i.nav,s=(r,a)=>{if(r<Ve||a<Ve||r>i.w-Ve||a>i.h-Ve)return;let o=$s(n,r,a);n.blocked[o.j*n.cols+o.i]||i.bunkers.some(l=>Gi(r,a,l)<Ve+1)||t.push({x:r,y:a})};for(let r of i.bunkers)if(r.kind==="circ")for(let a=0;a<8;a++){let o=a*Math.PI/4;s(r.x+Math.cos(o)*(r.r+e),r.y+Math.sin(o)*(r.r+e))}else{let a=[r.x-e,r.x+r.w/2,r.x+r.w+e],o=[r.y-e,r.y+r.h/2,r.y+r.h+e];for(let l of a)for(let c of o)l===a[1]&&c===o[1]||s(l,c)}return t}function xf(i,t){let e={react:.55-.4*i,sigma:(14-10*i)*Math.PI/180,burst:Math.round(2+3*i),pause:.7-.45*i,rate:3+2.5*i,dodge:.1+.6*i,lead:.3+.7*i,turn:5+8*i,speed:.9+.15*i,hide:1.5-.7*i};return t==="sniper"&&(e.sigma*=.7,e.rate*=.8,e.pause+=.2),t==="rusher"&&(e.speed+=.04,e.hide*=.6),t==="anchor"&&(e.hide*=1.3),e}function Ar(i,t,e){return{skill:i,role:t,p:xf(i,t),seen:{},mem:null,goal:null,path:[],pi:0,decideT:e.next()*.3,phase:"hide",phaseT:.3+e.next()*.8,spot:null,burstLeft:0,pauseT:0,strafe:e.chance(.5)?1:-1,strafeT:0,dodgeT:0,dodgeDir:1,lastX:0,lastY:0,stuckT:0,aimErr:0,aimErrT:0,target:null,wantReload:!1}}var yf=i=>(i.next()+i.next()+i.next()-1.5)*2,_n=(i,t)=>Math.hypot(i.x-t.x,i.y-t.y);function vf(i,t,e,n,s){let{cols:r,rows:a,blocked:o,cell:l}=i,c=$s(i,t,e),h=$s(i,n,s),d=(M,v)=>M>=0&&v>=0&&M<r&&v<a&&!o[v*r+M],f=c.j*r+c.i,u=h.j*r+h.i;if(o[u]){let M=-1,v=1e9;for(let A=1;A<6&&M<0;A++)for(let k=-A;k<=A;k++)for(let F=-A;F<=A;F++){let B=h.i+F,q=h.j+k;if(d(B,q)){let H=F*F+k*k;H<v&&(v=H,M=q*r+B)}}if(M<0)return[];u=M}if(o[f]){let M=-1,v=1e9;for(let A=1;A<4&&M<0;A++)for(let k=-A;k<=A;k++)for(let F=-A;F<=A;F++){let B=c.i+F,q=c.j+k;if(d(B,q)){let H=F*F+k*k;H<v&&(v=H,M=q*r+B)}}if(M<0)return[];f=M}let g=r*a,x=new Float32Array(g).fill(1e9),m=new Int32Array(g).fill(-1),p=new Uint8Array(g),y=[],S=(M,v)=>{y.push([M,v]);let A=y.length-1;for(;A>0;){let k=A-1>>1;if(y[k][0]<=y[A][0])break;[y[k],y[A]]=[y[A],y[k]],A=k}},b=()=>{let M=y[0],v=y.pop();if(y.length){y[0]=v;let A=0;for(;;){let k=2*A+1,F=k+1,B=A;if(k<y.length&&y[k][0]<y[B][0]&&(B=k),F<y.length&&y[F][0]<y[B][0]&&(B=F),B===A)break;[y[B],y[A]]=[y[A],y[B]],A=B}}return M},I=u%r,E=u/r|0,R=(M,v)=>Math.hypot(M-I,v-E);for(x[f]=0,S(R(f%r,f/r|0),f);y.length;){let[,M]=b();if(p[M])continue;if(p[M]=1,M===u)break;let v=M%r,A=M/r|0;for(let k=-1;k<=1;k++)for(let F=-1;F<=1;F++){if(!F&&!k)continue;let B=v+F,q=A+k;if(!d(B,q)||F&&k&&(!d(v+F,A)||!d(v,A+k)))continue;let H=q*r+B,K=x[M]+(F&&k?1.414:1);K<x[H]&&(x[H]=K,m[H]=M,S(K+R(B,q),H))}}if(m[u]<0&&u!==f)return[];let P=[];for(let M=u;M!==-1&&M!==f;M=m[M])P.push({x:(M%r+.5)*l,y:((M/r|0)+.5)*l});return P.reverse()}function _f(i,t,e,n,s){let r=Math.hypot(n-t,s-e),a=Math.ceil(r/6);for(let o=1;o<=a;o++){let l=$s(i,t+(n-t)*o/a,e+(s-e)*o/a);if(i.blocked[l.j*i.cols+l.i])return!1}return!0}function To(i,t,e,n,s){let r=i.arena,a=t,o=r.spots,l=$e((i.t-18)/25,0,1),c=l>.5&&(e.role==="anchor"||e.role==="sniper")?"rusher":e.role,h=r.spawns[t.team][0],d={x:n.x,y:n.y},f=_n(a,n),u=null,g=-1e9;for(let x=0;x<o.length;x++){let m=o[x],p=_n(a,m),y=_n(m,n);if(p<10)continue;let S=!1;for(let E of i.ents)if(E!==t&&E.alive&&E.team===t.team&&E.brain&&E.brain.spot===m){S=!0;break}if(S)continue;let b=!Hi(r.bunkers,m.x,m.y,n.x,n.y),I=-p*.35+(b?90:0)+i.rng.next()*30;s?I=(b?-400:0)-_n(m,s)*2:c==="rusher"?I+=(f-y)*.9-(y<150?200:0):c==="anchor"?I+=-_n(m,h)*.6+(y<520&&y>160?40:0):c==="flanker"?I+=(f-y)*.5+Math.abs(m.x-n.x)*.25+Math.abs(m.y-n.y)*.05:c==="sniper"&&(I+=(y>300&&y<560?120:-Math.abs(y-430)*.4)-_n(m,h)*.15),I>g&&(g=I,u=m)}return u}function Xi(i,t,e,n,s){e.goal={x:n,y:s},e.path=vf(i.arena.nav,t.x,t.y,n,s),e.pi=0}function bf(i,t,e){let n=i.arena,s=null,r=1e9;for(let l of i.ents){if(!l.alive||l.team===t.team)continue;let c=_n(t,l);c<760&&Hi(n.bunkers,t.x,t.y,l.x,l.y)?(e.seen[l.id]==null&&(e.seen[l.id]=i.t),c<r&&(r=c,s=l),e.mem={x:l.x,y:l.y,t:i.t,vx:l.vx,vy:l.vy}):e.seen[l.id]=null}let a=null,o=1e9;for(let l of i.balls){if(l.team===t.team)continue;let c=t.x-l.x,h=t.y-l.y,d=Math.hypot(l.vx,l.vy),f=(c*l.vx+h*l.vy)/d;if(f<0||f>240)continue;Math.abs(c*l.vy-h*l.vx)/d<34&&f<o&&(o=f,a=l)}return a&&!e.mem&&(e.mem={x:a.ox,y:a.oy,t:i.t,vx:0,vy:0}),{vis:s,threat:a}}function Rr(i,t,e){let n=t.brain,s=n.p,r=i.arena,a={mx:0,my:0,aim:null,fire:!1,dash:!1,reload:!1},{vis:o,threat:l}=bf(i,t,n);n.decideT-=e,n.phaseT-=e,n.strafeT-=e,n.dodgeT-=e,n.pauseT-=e,n.aimErrT-=e;let c=n.mem&&i.t-n.mem.t<7,h=o||(c?n.mem:(()=>{let m=r.spawns[1-t.team];return m[Math.min(t.slot,m.length-1)]||{x:r.w/2,y:r.h/2}})()),d=null;if(o&&n.seen[o.id]!=null&&i.t-n.seen[o.id]>=s.react&&(d=o),n.target=d,l&&n.dodgeT<=0&&i.rng.chance(s.dodge*.05*60*e*6)&&(n.dodgeT=.35+i.rng.next()*.25,n.dodgeDir=i.rng.chance(.5)?1:-1,n.skill>.45&&t.dashCd<=0&&i.rng.chance(.35)&&(a.dash=!0)),d){let m=_n(t,d),p=m/520*s.lead,y=d.x+d.vx*p,S=d.y+d.vy*p;n.aimErrT<=0&&(n.aimErr=yf(i.rng)*s.sigma*(.55+m/650+Math.min(1,Math.hypot(d.vx,d.vy)/180)*.6),n.aimErrT=.18);let b=Math.atan2(S-t.y,y-t.x)+n.aimErr,I=vi(t.aim,b),E=s.turn*e;a.aim=t.aim+$e(I,-E,E);let R=Math.abs(vi(a.aim,b))<.1;n.burstLeft<=0&&n.pauseT<=0&&(n.burstLeft=s.burst+(i.rng.next()<.5?1:0)),n.burstLeft>0&&R&&t.ammo>0&&t.reloadT<=0&&(a.fire=!0,t.cdT<=0&&(n.burstLeft--,n.burstLeft<=0&&(n.pauseT=s.pause*(.7+i.rng.next()*.6))))}else c&&(a.aim=t.aim+$e(vi(t.aim,Math.atan2(n.mem.y-t.y,n.mem.x-t.x)),-s.turn*e*.6,s.turn*e*.6));t.ammo<=5&&!d&&(a.reload=!0),t.ammo<=3&&t.reloadT<=0&&(a.reload=!0);let f=t.ammo<=4||t.reloadT>0;if(n.decideT<=0){n.decideT=.3+i.rng.next()*.15;let m=_n(t,h);if(n.phase==="hide"&&(f||n.phaseT<=0||!n.spot)){if(!f){if(n.role==="rusher"||!n.spot||i.rng.chance(.35)||!c){let p=To(i,t,n,h,null);n.spot=p||n.spot,p&&Xi(i,t,n,p.x,p.y),n.phaseT=s.hide*(.6+i.rng.next()*.8)*(1-.7*$e((i.t-18)/25,0,1))}else if(n.spot){let p=To(i,t,n,h,n.spot);p&&_n(p,n.spot)<90?(Xi(i,t,n,p.x,p.y),n.phase="peek",n.phaseT=.9+i.rng.next()*1):(n.phaseT=.5,n.spot=null)}}}else n.phase==="peek"&&(n.phaseT<=0||f||l)&&(n.phase="hide",n.phaseT=s.hide*(.6+i.rng.next()*.8),n.spot&&Xi(i,t,n,n.spot.x,n.spot.y));if(f&&o){let p=To(i,t,n,h,null);p&&(n.spot=p,Xi(i,t,n,p.x,p.y))}if(n.role==="rusher"&&o&&m<170&&!f&&Xi(i,t,n,o.x,o.y),n.stuckT=Math.hypot(t.x-n.lastX,t.y-n.lastY)<3&&n.goal?n.stuckT+.35:0,n.lastX=t.x,n.lastY=t.y,n.stuckT>1.1){n.stuckT=0,n.spot=null;let p=i.arena.spots[i.rng.int(i.arena.spots.length)];p&&Xi(i,t,n,p.x,p.y)}}let u=0,g=0,x=r.nav;if(n.goal&&n.path.length){for(;n.pi<n.path.length-1&&Math.hypot(n.path[n.pi].x-t.x,n.path[n.pi].y-t.y)<12;)n.pi++;for(let I=Math.min(n.path.length-1,n.pi+6);I>n.pi;I--)if(_f(x,t.x,t.y,n.path[I].x,n.path[I].y)){n.pi=I;break}let m=n.path[n.pi],p=m.x-t.x,y=m.y-t.y,S=Math.hypot(p,y);!(n.pi>=n.path.length-1&&_n(t,n.goal)<10)&&S>2&&(u=p/S,g=y/S)}if(d&&!(n.phase==="peek"&&u===0&&g===0&&!1)){let m=Math.cos(t.aim),p=Math.sin(t.aim);n.strafeT<=0&&(n.strafe=i.rng.chance(.5)?1:-1,n.strafeT=.5+i.rng.next()*.7);let y=u===0&&g===0?.55:.35;u+=-p*n.strafe*y*(.4+n.skill),g+=m*n.strafe*y*(.4+n.skill)}if(n.dodgeT>0&&l){let m=Math.hypot(l.vx,l.vy);u=-l.vy/m*n.dodgeDir,g=l.vx/m*n.dodgeDir}return a.mx=u,a.my=g,a}var Ut={DT:1/60,R:Ve,HIT_R:Ve*.85,SPEED:150,DASH_SPEED:380,DASH_T:.22,DASH_CD:2.2,BALL_SPEED:520,BALL_R:4,RANGE:640,MAG:28,RELOAD:1.5,RATE:7,SPREAD:.02,ROUND_TIME:75,END_DELAY:1.4,PICKUP_AT:8,PICKUP_R:20,RAPID_T:6,RAPID_MULT:1.7,SPLASH_BALLS:3,SPLASH_R:34},Eo={mx:0,my:0,aim:null,fire:!1,dash:!1,reload:!1};function Cr(i){let{arena:t}=i,e=new Ae(`painball:world:${i.seed}`),n=Array.isArray(i.skill)?i.skill:[i.skill,i.skill],s=[];for(let r=0;r<2;r++)for(let a=0;a<i.sizes[r];a++){let o=t.spawns[r][a],l=t.spawns[1-r][Math.min(a,t.spawns[1-r].length-1)]||{x:t.w/2,y:t.h/2},c=i.human&&r===0&&a===0,h=i.roles&&i.roles[r]&&i.roles[r][a]||Mf[(a+r*2)%4];s.push({id:s.length,team:r,slot:a,human:c,x:o.x,y:o.y,vx:0,vy:0,r:Ut.R,aim:Math.atan2(l.y-o.y,l.x-o.x),ammo:Ut.MAG,reloadT:0,cdT:0,dashT:0,dashCd:0,dashDx:0,dashDy:0,alive:!0,shield:!1,rapidT:0,splashN:0,kills:0,shots:0,hits:0,role:h,hurtT:0,moving:0,brain:c?null:Ar(r===0&&a===0&&i.humanSkill!=null?i.humanSkill:n[r],h,e)})}return{arena:t,t:0,ents:s,balls:[],pickups:[],events:[],rng:e,over:null,overT:0,ballId:0,pickupsSpawned:!1,pickupKind:["shield","rapid","splash"][e.int(3)],cfg:i}}var Mf=["rusher","anchor","flanker","sniper"],qi=(i,t)=>i.ents.filter(e=>e.alive&&e.team===t),Xe=(i,t)=>i.events.push(t);function Sf(i,t,e,n){let s=i.arena;t.hurtT=Math.max(0,t.hurtT-n),t.cdT=Math.max(0,t.cdT-n),t.dashCd=Math.max(0,t.dashCd-n),t.rapidT=Math.max(0,t.rapidT-n),e.aim!=null&&(t.aim=e.aim),t.reloadT>0?(t.reloadT-=n,t.reloadT<=0&&(t.reloadT=0,t.ammo=Ut.MAG,Xe(i,{type:"reloaded",id:t.id}))):(e.reload&&t.ammo<Ut.MAG||t.ammo===0)&&(t.reloadT=Ut.RELOAD,Xe(i,{type:"reload",id:t.id,x:t.x,y:t.y}));let r=e.mx,a=e.my,o=Math.hypot(r,a);if(o>1&&(r/=o,a/=o),e.dash&&t.dashCd<=0&&t.dashT<=0){let d=r,f=a;Math.hypot(d,f)<.2&&(d=Math.cos(t.aim),f=Math.sin(t.aim));let u=Math.hypot(d,f)||1;t.dashDx=d/u,t.dashDy=f/u,t.dashT=Ut.DASH_T,t.dashCd=Ut.DASH_CD,Xe(i,{type:"dash",id:t.id,x:t.x,y:t.y,dx:t.dashDx,dy:t.dashDy})}let l=(t.brain?t.brain.p.speed:1)*Ut.SPEED,c=r*l,h=a*l;if(t.dashT>0)t.dashT-=n,c=t.dashDx*Ut.DASH_SPEED,h=t.dashDy*Ut.DASH_SPEED,t.vx=c,t.vy=h;else{let d=Math.min(1,14*n);t.vx+=(c-t.vx)*d,t.vy+=(h-t.vy)*d}t.x+=t.vx*n,t.y+=t.vy*n,t.moving=Math.hypot(t.vx,t.vy);for(let d=0;d<2;d++){for(let f of s.bunkers)Ph(t,f);t.x=$e(t.x,t.r,s.w-t.r),t.y=$e(t.y,t.r,s.h-t.r)}if(e.fire&&t.cdT<=0&&t.ammo>0&&t.reloadT<=0){let d=(t.brain?t.brain.p.rate:Ut.RATE)*(t.rapidT>0?Ut.RAPID_MULT:1);t.cdT=1/d,t.ammo--,t.shots++;let f=t.aim+(i.rng.next()-.5)*2*Ut.SPREAD,u=Math.cos(f),g=Math.sin(f),x=t.r+3,m=t.splashN>0;m&&t.splashN--,i.balls.push({id:i.ballId++,team:t.team,owner:t.id,x:t.x+u*x,y:t.y+g*x,ox:t.x,oy:t.y,vx:u*Ut.BALL_SPEED,vy:g*Ut.BALL_SPEED,dist:0,splash:m}),Xe(i,{type:"shot",id:t.id,team:t.team,x:t.x,y:t.y,a:f,splash:m})}}function wf(i,t){let e=i.arena;for(let n=i.balls.length-1;n>=0;n--){let s=i.balls[n],r=s.x+s.vx*t,a=s.y+s.vy*t,o=null,l=2;for(let u of i.ents){if(!u.alive||u.team===s.team)continue;let g=s.x-u.x,x=s.y-u.y,m=r-s.x,p=a-s.y,y=m*m+p*p,S=Ut.HIT_R+Ut.BALL_R,b=g*g+x*x-S*S,I=-1;if(b<=0)I=0;else if(y>1e-9){let E=2*(g*m+x*p),R=E*E-4*y*b;if(R>=0){let P=(-E-Math.sqrt(R))/(2*y);P>=0&&P<=1&&(I=P)}}I>=0&&I<l&&(l=I,o={kind:"body",e:u})}for(let u of e.bunkers){let g=Mo(s.x,s.y,r,a,u);g>=0&&g<l&&(l=g,o={kind:"bunker"})}if(r<0||a<0||r>e.w||a>e.h){let u=2;r<0&&(u=Math.min(u,s.x/(s.x-r))),r>e.w&&(u=Math.min(u,(e.w-s.x)/(r-s.x))),a<0&&(u=Math.min(u,s.y/(s.y-a))),a>e.h&&(u=Math.min(u,(e.h-s.y)/(a-s.y))),u<l&&(l=u,o={kind:"wall"})}let c=Math.hypot(s.vx,s.vy)*t;if(!o&&s.dist+c>=Ut.RANGE&&(l=(Ut.RANGE-s.dist)/c,o={kind:"floor"}),!o){s.x=r,s.y=a,s.dist+=c;continue}let h=s.x+(r-s.x)*l,d=s.y+(a-s.y)*l;i.balls.splice(n,1);let f=i.ents[s.owner];if(o.kind==="body"){let u=o.e;if(u.shield){u.shield=!1,Xe(i,{type:"shieldpop",id:u.id,x:h,y:d}),Xe(i,{type:"splat",x:h,y:d,team:s.team,surf:"floor",size:1.1});continue}u.alive=!1,u.deadAt=i.t,u.hurtT=1,u.vx=s.vx*.15,u.vy=s.vy*.15,f.kills++,f.hits++,Xe(i,{type:"hit",victim:u.id,shooter:s.owner,x:u.x,y:u.y,team:s.team,vteam:u.team,a:Math.atan2(s.vy,s.vx)}),Xe(i,{type:"splat",x:u.x,y:u.y,team:s.team,surf:"floor",size:2.2})}else{let u=s.splash?1.9:1;if(Xe(i,{type:"splat",x:h,y:d,team:s.team,surf:o.kind==="bunker"?"bunker":"floor",size:u,a:Math.atan2(s.vy,s.vx)}),s.splash){for(let g of i.ents)if(g.alive&&g.team!==s.team&&Math.hypot(g.x-h,g.y-d)<Ut.SPLASH_R+Ut.HIT_R){if(g.shield){g.shield=!1;continue}g.alive=!1,g.deadAt=i.t,f.kills++,f.hits++,Xe(i,{type:"hit",victim:g.id,shooter:s.owner,x:g.x,y:g.y,team:s.team,vteam:g.team,a:0}),Xe(i,{type:"splat",x:g.x,y:g.y,team:s.team,surf:"floor",size:2.2})}}}}}function Tf(i){let t=i.arena;if(!i.pickupsSpawned&&i.t>=Ut.PICKUP_AT&&t.pickups.length){i.pickupsSpawned=!0;for(let e of t.pickups)i.pickups.push({x:e.x,y:e.y,kind:i.pickupKind,born:i.t});Xe(i,{type:"pickupspawn"})}for(let e=i.pickups.length-1;e>=0;e--){let n=i.pickups[e];for(let s of i.ents)if(!(!s.alive||Math.hypot(s.x-n.x,s.y-n.y)>Ut.PICKUP_R+s.r*.5)){n.kind==="shield"?s.shield=!0:n.kind==="rapid"?s.rapidT=Ut.RAPID_T:s.splashN=Ut.SPLASH_BALLS,Xe(i,{type:"pickup",id:s.id,kind:n.kind,x:n.x,y:n.y}),i.pickups.splice(e,1);break}}}function Ao(i,t,e=Eo){i.t+=t;let n=!i.over;for(let s of i.ents){if(!s.alive){s.x+=s.vx*t,s.y+=s.vy*t,s.vx*=.9,s.vy*=.9;continue}let r=s.human?e:n&&s.brain?Rr(i,s,t):Eo;Sf(i,s,n||s.human?r:Eo,t)}for(let s=0;s<i.ents.length;s++)for(let r=s+1;r<i.ents.length;r++){let a=i.ents[s],o=i.ents[r];if(!a.alive||!o.alive)continue;let l=o.x-a.x,c=o.y-a.y,h=Math.hypot(l,c),d=a.r+o.r;if(h>0&&h<d){let f=(d-h)/2/h;a.x-=l*f,a.y-=c*f,o.x+=l*f,o.y+=c*f}}if(wf(i,t),Tf(i),i.over)i.overT+=t;else{let s=qi(i,0).length,r=qi(i,1).length;s===0||r===0?(i.over={winner:s===0&&r===0?-1:s===0?1:0,at:i.t,reason:"elimination"},Xe(i,{type:"roundover",winner:i.over.winner})):i.t>=Ut.ROUND_TIME&&(i.over={winner:s===r?-1:s>r?0:1,at:i.t,reason:"timeout"},Xe(i,{type:"roundover",winner:i.over.winner}))}}var Ro=i=>!!i.over&&i.overT>=Ut.END_DELAY;var Pr=class{constructor(){this.ctx=null,this.enabled=!0,this.master=null,this.rollGain=null,this.rollFilter=null}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;try{this.ctx=new t}catch{return}this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.7:0,this.master.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}setEnabled(t){this.enabled=!!t,this.master&&this.master.gain.setTargetAtTime(t?.7:0,this.ctx.currentTime,.02)}_buildRoll(){let t=this.ctx,e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),s=n.getChannelData(0),r=0;for(let o=0;o<e;o++)r=(r+.04*(Math.random()*2-1))/1.04,s[o]=r*8;let a=t.createBufferSource();a.buffer=n,a.loop=!0,this.rollFilter=t.createBiquadFilter(),this.rollFilter.type="lowpass",this.rollFilter.frequency.value=300,this.rollGain=t.createGain(),this.rollGain.gain.value=0,a.connect(this.rollFilter).connect(this.rollGain).connect(this.master),a.start()}setRolling(t){if(!this.ctx||!this.rollGain)return;let e=Math.min(1,t/6),n=this.ctx.currentTime;this.rollGain.gain.setTargetAtTime(Math.pow(e,1.3)*.5,n,.05),this.rollFilter.frequency.setTargetAtTime(160+e*900,n,.05)}_tone(t,e,{type:n="sine",vol:s=.2,slideTo:r=null,delay:a=0}={}){if(!this.ctx||!this.enabled)return;let o=this.ctx,l=o.currentTime+a,c=o.createOscillator(),h=o.createGain();c.type=n,c.frequency.setValueAtTime(t,l),r&&c.frequency.exponentialRampToValueAtTime(r,l+e),h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(s,l+.01),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h).connect(this.master),c.start(l),c.stop(l+e+.02)}_noise(t,{vol:e=.2,freq:n=1500,delay:s=0}={}){if(!this.ctx||!this.enabled)return;let r=this.ctx,a=r.currentTime+s,o=Math.floor(r.sampleRate*t),l=r.createBuffer(1,o,r.sampleRate),c=l.getChannelData(0);for(let u=0;u<o;u++)c[u]=(Math.random()*2-1)*(1-u/o);let h=r.createBufferSource();h.buffer=l;let d=r.createBiquadFilter();d.type="bandpass",d.frequency.value=n;let f=r.createGain();f.gain.value=e,h.connect(d).connect(f).connect(this.master),h.start(a)}_pan(t){return Math.max(-1,Math.min(1,t))}shot(t=0,e=1,n=!1){!this.ctx||!this.enabled||(this._tone(n?420:300,.07,{type:"square",vol:.07*e,slideTo:90}),this._noise(.09,{vol:(n?.12:.07)*e,freq:n?2600:1800}))}splat(t=1){this._noise(.12,{vol:.1*t,freq:700}),this._tone(150,.1,{type:"sine",vol:.09*t,slideTo:60})}elim(t=!1){this._tone(t?220:520,.28,{type:"triangle",vol:.2,slideTo:t?70:880}),this._noise(.2,{vol:.15,freq:900})}reload(){this._tone(900,.04,{type:"square",vol:.05}),this._tone(600,.06,{type:"square",vol:.05,delay:.09})}reloaded(){this._tone(700,.05,{type:"square",vol:.07}),this._tone(1100,.08,{type:"square",vol:.06,delay:.06})}dash(){this._noise(.18,{vol:.1,freq:1200}),this._tone(300,.15,{type:"sine",vol:.06,slideTo:700})}pickup(){[660,880,1320].forEach((t,e)=>this._tone(t,.12,{type:"triangle",vol:.11,delay:e*.05}))}shield(){this._tone(900,.2,{type:"sine",vol:.12,slideTo:300})}go(){this._tone(880,.25,{type:"triangle",vol:.18})}tick(){this._tone(440,.08,{type:"triangle",vol:.1})}win(){[523,659,784,1047,1319].forEach((t,e)=>this._tone(t,.3,{type:"triangle",vol:.16,delay:e*.09}))}lose(){[392,330,262,196].forEach((t,e)=>this._tone(t,.34,{type:"sawtooth",vol:.09,delay:e*.13}))}star(t=0){this._tone(660*Math.pow(1.25,t),.18,{type:"triangle",vol:.14})}coin(){this._tone(988,.07,{type:"square",vol:.06}),this._tone(1319,.14,{type:"square",vol:.06,delay:.06})}click(){this._tone(520,.05,{type:"triangle",vol:.08})}error(){this._tone(140,.18,{type:"sawtooth",vol:.08})}};var Ih=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Lh=!0;function Dh(i){Lh=!!i}function on(i){if(Lh)try{navigator.vibrate&&navigator.vibrate(i)}catch{}}var Ir=class{constructor({warmup:t=30,window:e=90,maxAvgMs:n=30}={}){this.warmup=t,this.window=e,this.maxAvgMs=n,this.n=0,this.sum=0,this.done=!1}push(t){return this.done||(this.n++,this.n<=this.warmup)||t>.25?null:(this.sum+=t*1e3,this.n-this.warmup>=this.window?(this.done=!0,this.sum/this.window>this.maxAvgMs?"downgrade":null):null)}};var ae=Math.PI*2,Uh=(i,t)=>{let e=document.createElement("canvas");return e.width=Math.max(2,Math.ceil(i)),e.height=Math.max(2,Math.ceil(t)),e},Pn=(i,t)=>{let e=parseInt(i.slice(1),16);return`rgba(${e>>16},${e>>8&255},${e&255},${t})`},Lr=(i,t)=>{let e=parseInt(i.slice(1),16),n=s=>Math.max(0,Math.min(255,Math.round(s*t)));return`rgb(${n(e>>16)},${n(e>>8&255)},${n(e&255)})`};function Dr(i,t,e=0){if(i.beginPath(),t.kind==="circ")i.arc(t.x,t.y,t.r+e,0,ae);else{let n=Math.min(9,t.w/2,t.h/2)+e;i.roundRect?i.roundRect(t.x-e,t.y-e,t.w+e*2,t.h+e*2,n):i.rect(t.x-e,t.y-e,t.w+e*2,t.h+e*2)}}var Ur=class{constructor(t){this.cv=t,this.ctx=t.getContext("2d"),this.parts=[],this.shakeT=0,this.time=0,this.splatLog=[],this.low=!1,this.reduce=!1,this.arena=null,this.k=1,this.ox=0,this.oy=0,this.dpr=1,this.pal={you:"#2f8bff",foe:"#ff8a1f"},this.padTop=64,this.padBottom=8,this.padSide=8,this.flash=0}resize(){let t=Math.min(devicePixelRatio||1,this.low?1.25:2);this.dpr=t,this.cv.width=Math.max(2,Math.round(this.cv.clientWidth*t)),this.cv.height=Math.max(2,Math.round(this.cv.clientHeight*t)),this._fit(),this.arena&&this._buildLayers(!0)}_fit(){let t=this.cv.clientWidth,e=this.cv.clientHeight;if(!this.arena){this.k=1;return}let n=t-this.padSide*2,s=e-this.padTop-this.padBottom;this.k=Math.max(.2,Math.min(n/this.arena.w,s/this.arena.h)),this.ox=(t-this.arena.w*this.k)/2,this.oy=this.padTop+(s-this.arena.h*this.k)/2}toWorld(t,e){let n=this.cv.getBoundingClientRect();return{x:(t-n.left-this.ox)/this.k,y:(e-n.top-this.oy)/this.k}}setArena(t,e,n=!1){this.arena=t,this.pal=e,this.parts.length=0,n||(this.splatLog=[]),this._fit(),this._buildLayers(n)}setPalette(t){this.pal=t,this.arena&&this._buildLayers(!0)}clearPaint(){this.splatLog=[],this.arena&&this._buildLayers(!1)}_buildLayers(t){let e=this.arena,n=Math.min(this.k*this.dpr,2.4);if(this.S=n,this.floor=Uh(e.w*n,e.h*n),this._drawFloor(),this._drawBunkers(),t){let s=this.splatLog;this.splatLog=[];for(let r of s)this._stamp(r,!1)}}_drawFloor(){let t=this.arena,e=this.floor.getContext("2d"),n=this.S;e.setTransform(n,0,0,n,0,0);let s=e.createLinearGradient(0,0,t.w,t.h);s.addColorStop(0,"#18213c"),s.addColorStop(1,"#111832"),e.fillStyle=s,e.fillRect(0,0,t.w,t.h),e.strokeStyle="rgba(160,180,255,.055)",e.lineWidth=1,e.beginPath();for(let l=40;l<t.w;l+=40)e.moveTo(l,0),e.lineTo(l,t.h);for(let l=40;l<t.h;l+=40)e.moveTo(0,l),e.lineTo(t.w,l);e.stroke();let r=t.landscape?"x":"y",a=108,o=(l,c)=>{if(e.fillStyle=Pn(c,.1),r==="y"?e.fillRect(0,l===0?t.h-a:0,t.w,a):e.fillRect(l===0?0:t.w-a,0,a,t.h),e.setLineDash([10,8]),e.strokeStyle=Pn(c,.45),e.lineWidth=2,e.beginPath(),r==="y"){let h=l===0?t.h-a:a;e.moveTo(0,h),e.lineTo(t.w,h)}else{let h=l===0?a:t.w-a;e.moveTo(h,0),e.lineTo(h,t.h)}e.stroke(),e.setLineDash([])};o(0,this.pal.you),o(1,this.pal.foe),e.strokeStyle="rgba(255,255,255,.07)",e.lineWidth=3,e.beginPath(),r==="y"?(e.moveTo(0,t.h/2),e.lineTo(t.w,t.h/2)):(e.moveTo(t.w/2,0),e.lineTo(t.w/2,t.h)),e.stroke(),e.beginPath(),e.arc(t.w/2,t.h/2,60,0,ae),e.stroke(),e.lineWidth=6,e.strokeStyle="#33406b",e.strokeRect(1,1,t.w-2,t.h-2),e.lineWidth=1.5,e.strokeStyle="rgba(190,205,255,.35)",e.strokeRect(5,5,t.w-10,t.h-10)}_drawBunkers(){let t=this.arena,e=this.floor.getContext("2d"),n=this.S;e.setTransform(n,0,0,n,0,0);for(let s of t.bunkers)e.save(),e.translate(5,8),Dr(e,s),e.fillStyle="rgba(0,0,0,.38)",this.low||(e.shadowColor="rgba(0,0,0,.5)",e.shadowBlur=8),e.fill(),e.restore();for(let s of t.bunkers){Dr(e,s);let r=s.kind==="circ"?s.x-s.r:s.x,a=s.kind==="circ"?s.y-s.r:s.y,o=s.kind==="circ"?s.x+s.r:s.x+s.w,l=s.kind==="circ"?s.y+s.r:s.y+s.h,c=e.createLinearGradient(r,a,o,l);c.addColorStop(0,"#f6f8ff"),c.addColorStop(1,"#b6c2e0"),e.fillStyle=c,e.fill(),e.lineWidth=2,e.strokeStyle="#8795bb",e.stroke(),e.save(),Dr(e,s,-5),e.lineWidth=2,e.strokeStyle="rgba(120,135,180,.45)",e.stroke(),e.restore(),e.save(),Dr(e,s,-9),e.fillStyle="rgba(255,255,255,.35)",e.fill(),e.restore()}}_stamp(t,e=!0){e&&(this.splatLog.push(t),this.splatLog.length>5e3&&this.splatLog.shift());let n=t.surf==="bunker",s=this.floor.getContext("2d"),r=this.S,a=this.arena;s.setTransform(r,0,0,r,0,0),s.save(),s.beginPath(),n||s.rect(0,0,a.w,a.h);for(let u of a.bunkers)u.kind==="circ"?(s.moveTo(u.x+u.r,u.y),s.arc(u.x,u.y,u.r,0,ae)):s.rect(u.x,u.y,u.w,u.h);s.clip(n?"nonzero":"evenodd");let o=new Ae(t.seed),l=9+o.int(4),c=9*t.size,h=t.color,d=[];for(let u=0;u<l;u++){let g=u/l*ae,x=c*(.7+o.next()*.8)*(u%2?.8:1.15);d.push([t.x+Math.cos(g)*x,t.y+Math.sin(g)*x])}s.fillStyle=h,s.globalAlpha=.93,s.beginPath();for(let u=0;u<l;u++){let g=d[u],x=d[(u+1)%l],m=(g[0]+x[0])/2,p=(g[1]+x[1])/2;u===0?s.moveTo(m,p):s.quadraticCurveTo(g[0],g[1],m,p)}{let u=d[0],g=d[1];s.quadraticCurveTo(u[0],u[1],(u[0]+g[0])/2,(u[1]+g[1])/2)}s.fill(),s.fillStyle=Lr(h,.82),s.globalAlpha=.5,s.beginPath(),s.arc(t.x+c*.1,t.y+c*.12,c*.45,0,ae),s.fill(),s.fillStyle="#fff",s.globalAlpha=.22,s.beginPath(),s.ellipse(t.x-c*.25,t.y-c*.3,c*.28,c*.16,-.6,0,ae),s.fill(),s.globalAlpha=.9,s.fillStyle=h;let f=Math.round((5+o.int(5))*Math.min(1.6,t.size))*(this.low?.6:1);for(let u=0;u<f;u++){let g=t.a!=null&&o.chance(.6)?t.a+(o.next()-.5)*1.2:o.next()*ae,x=c*(1.1+o.next()*2.2),m=(1+o.next()*2.6)*Math.sqrt(t.size);s.beginPath(),s.arc(t.x+Math.cos(g)*x,t.y+Math.sin(g)*x,m,0,ae),s.fill()}s.globalAlpha=1,s.restore()}splat(t,e,n,s,r=1,a=null){this._stamp({x:t,y:e,color:n===0?this.pal.you:this.pal.foe,surf:s,size:r,a,seed:(Math.imul(t*7.3+e*3.1|0,2654435761)^this.splatLog.length)>>>0})}consume(t,e,n={}){var r;let s=this.low?.5:1;for(let a of e){let o=a.team===0?this.pal.you:this.pal.foe;switch(a.type){case"shot":{let l=t.ents[a.id],c=Math.cos(a.a),h=Math.sin(a.a);this._puff(l.x+c*22,l.y+h*22,o,3*s),l.human&&(this.shakeT=Math.min(1,this.shakeT+.05));break}case"splat":this.splat(a.x,a.y,a.team,a.surf,a.size,a.a),a.surf!=="floor"&&this._sparks(a.x,a.y,o,4*s,120);break;case"hit":{this._burst(a.x,a.y,o,Math.round(16*s),a.a),this.shakeT=Math.min(1,this.shakeT+(t.ents[a.victim].human?.9:.5)),t.ents[a.victim].human&&(this.flash=1);break}case"dash":this._dust(a.x,a.y,-a.dx,-a.dy,6*s);break;case"pickup":this._ring(a.x,a.y,"#fff",40),this._sparks(a.x,a.y,"#ffe36e",10*s,160);break;case"shieldpop":this._ring(a.x,a.y,"#6df0ff",46),this._sparks(a.x,a.y,"#6df0ff",8*s,180),this.shakeT=Math.min(1,this.shakeT+.25);break;case"reload":break;default:break}(r=n.onEvent)==null||r.call(n,a)}}_puff(t,e,n,s){for(let r=0;r<s;r++)this.parts.push({k:"puff",x:t,y:e,vx:(Math.random()-.5)*50,vy:(Math.random()-.5)*50,life:.35,max:.35,size:3+Math.random()*3,col:n})}_sparks(t,e,n,s,r){for(let a=0;a<s;a++){let o=Math.random()*ae,l=r*(.4+Math.random());this.parts.push({k:"spark",x:t,y:e,vx:Math.cos(o)*l,vy:Math.sin(o)*l,life:.4,max:.4,size:2,col:n})}}_ring(t,e,n,s){this.parts.push({k:"ring",x:t,y:e,life:.45,max:.45,size:s,col:n})}_dust(t,e,n,s,r){for(let a=0;a<r;a++)this.parts.push({k:"puff",x:t,y:e,vx:n*60+(Math.random()-.5)*60,vy:s*60+(Math.random()-.5)*60,life:.4,max:.4,size:4+Math.random()*4,col:"#c9d4ff"})}_burst(t,e,n,s,r){this._ring(t,e,n,54);for(let a=0;a<s;a++){let o=r!=null&&Math.random()<.65?r+(Math.random()-.5)*1.1:Math.random()*ae,l=90+Math.random()*260;this.parts.push({k:"drop",x:t,y:e,vx:Math.cos(o)*l,vy:Math.sin(o)*l,life:.35+Math.random()*.3,max:.6,size:2+Math.random()*3.5,col:n,stamp:!0})}}confetti(t=70){if(!(this.reduce||!this.arena))for(let e=0;e<t*(this.low?.5:1);e++)this.parts.push({k:"conf",x:Math.random()*this.arena.w,y:-10-Math.random()*120,vx:(Math.random()-.5)*80,vy:120+Math.random()*180,life:2.4,max:2.4,size:4+Math.random()*4,rot:Math.random()*ae,col:[this.pal.you,this.pal.foe,"#ffd23a","#fff","#5dffb0"][e%5]})}draw(t,e,n){var d;let s=this.ctx,r=this.arena;if(this.time+=e,s.setTransform(1,0,0,1,0,0),s.clearRect(0,0,this.cv.width,this.cv.height),!r||!t)return;let a=this.dpr,o=this.k;this.shakeT=Math.max(0,this.shakeT-e*2.6),this.flash=Math.max(0,this.flash-e*2.2);let l=this.reduce?0:this.shakeT*this.shakeT*9,c=(Math.random()-.5)*2*l,h=(Math.random()-.5)*2*l;s.setTransform(o*a,0,0,o*a,(this.ox+c)*a,(this.oy+h)*a),s.drawImage(this.floor,0,0,r.w,r.h),this._pickups(s,t),this._deadBodies(s,t),this._balls(s,t);for(let f of t.ents)f.alive&&this._ent(s,f,n);this._parts(s,e),n.aimLine&&((d=n.you)!=null&&d.alive)&&this._aimLine(s,n.you,n.aimLine),this.flash>0&&(s.setTransform(1,0,0,1,0,0),s.fillStyle=Pn(this.pal.foe,this.flash*.35),s.fillRect(0,0,this.cv.width,this.cv.height))}_aimLine(t,e,n){t.save(),t.strokeStyle="rgba(255,255,255,.35)",t.lineWidth=2,t.setLineDash([2,9]),t.lineCap="round",t.beginPath(),t.moveTo(e.x+Math.cos(e.aim)*26,e.y+Math.sin(e.aim)*26),t.lineTo(e.x+Math.cos(e.aim)*(n?150:90),e.y+Math.sin(e.aim)*(n?150:90)),t.stroke(),t.restore()}_pickups(t,e){for(let n of e.pickups){let s=Math.sin(this.time*4+n.x)*2,r=n.kind==="shield"?"#6df0ff":n.kind==="rapid"?"#ffb02e":"#ff5de8",a=t.createRadialGradient(n.x,n.y,2,n.x,n.y,34);if(a.addColorStop(0,Pn(r,.5)),a.addColorStop(1,Pn(r,0)),t.fillStyle=a,t.beginPath(),t.arc(n.x,n.y,34,0,ae),t.fill(),t.save(),t.translate(n.x,n.y+s),t.fillStyle="#0f1630",t.strokeStyle=r,t.lineWidth=3,t.beginPath(),t.arc(0,0,15,0,ae),t.fill(),t.stroke(),t.fillStyle=r,t.strokeStyle=r,t.lineWidth=2.4,t.lineJoin="round",n.kind==="shield")t.beginPath(),t.moveTo(0,-8),t.lineTo(7,-5),t.lineTo(6,3),t.lineTo(0,9),t.lineTo(-6,3),t.lineTo(-7,-5),t.closePath(),t.stroke();else if(n.kind==="rapid")t.beginPath(),t.moveTo(2,-9),t.lineTo(-5,1),t.lineTo(0,1),t.lineTo(-2,9),t.lineTo(5,-2),t.lineTo(0,-2),t.closePath(),t.fill();else for(let o=0;o<8;o++){let l=o/8*ae;t.beginPath(),t.moveTo(Math.cos(l)*3,Math.sin(l)*3),t.lineTo(Math.cos(l)*9,Math.sin(l)*9),t.stroke()}t.restore()}}_deadBodies(t,e){for(let n of e.ents){if(n.alive)continue;let s=e.t-n.deadAt,r=Math.max(0,1-s/3.5);if(r<=0)continue;let a=n.team===0?this.pal.you:this.pal.foe;t.save(),t.globalAlpha=r,t.translate(n.x,n.y),t.fillStyle=Lr(a,.55),t.beginPath(),t.arc(0,0,n.r*(1-Math.min(.3,s*.3)),0,ae),t.fill(),t.strokeStyle="#fff",t.lineWidth=2.5,t.lineCap="round",t.beginPath(),t.moveTo(-6,-6),t.lineTo(6,6),t.moveTo(6,-6),t.lineTo(-6,6),t.stroke(),s<1.6&&(t.font="700 12px system-ui, sans-serif",t.textAlign="center",t.fillStyle="#fff",t.fillText("OUT",0,-n.r-6-s*8)),t.restore()}}_balls(t,e){for(let n of e.balls){let s=n.team===0?this.pal.you:this.pal.foe,r=Math.hypot(n.vx,n.vy),a=n.x-n.vx/r*16,o=n.y-n.vy/r*16;t.strokeStyle=Pn(s,.45),t.lineWidth=4,t.lineCap="round",t.beginPath(),t.moveTo(a,o),t.lineTo(n.x,n.y),t.stroke(),t.fillStyle=s,t.beginPath(),t.arc(n.x,n.y,n.splash?6:Ut.BALL_R,0,ae),t.fill(),t.fillStyle="rgba(255,255,255,.7)",t.beginPath(),t.arc(n.x-1,n.y-1.2,1.4,0,ae),t.fill()}}_ent(t,e,n){let s=e.team===0?this.pal.you:this.pal.foe,r=e.human;t.save(),t.translate(e.x,e.y),t.fillStyle="rgba(0,0,0,.35)",t.beginPath(),t.ellipse(3,6,e.r,e.r*.8,0,0,ae),t.fill(),e.dashT>0&&(t.globalAlpha=.35,t.fillStyle=s,t.beginPath(),t.arc(-e.dashDx*14,-e.dashDy*14,e.r*.9,0,ae),t.fill(),t.globalAlpha=1),t.lineWidth=3,t.strokeStyle=Pn(s,.95),e.team===1&&t.setLineDash([5,4]),t.beginPath(),t.arc(0,0,e.r+5,0,ae),t.stroke(),t.setLineDash([]),e.rapidT>0&&(t.strokeStyle="#ffb02e",t.lineWidth=2,t.beginPath(),t.arc(0,0,e.r+9+Math.sin(this.time*20),0,ae),t.stroke()),t.rotate(e.aim),t.fillStyle="#20263d",t.fillRect(e.r*.2,-3.5,e.r+8,7),t.fillStyle=s,t.fillRect(e.r+4,-4.5,6,9),t.rotate(-e.aim);let a=t.createRadialGradient(-5,-6,2,0,0,e.r);if(a.addColorStop(0,Lr(s,1.35)),a.addColorStop(1,Lr(s,.78)),t.fillStyle=a,t.beginPath(),t.arc(0,0,e.r,0,ae),t.fill(),t.lineWidth=2.5,t.strokeStyle=e.hurtT>0?"#fff":"rgba(255,255,255,.85)",t.stroke(),t.rotate(e.aim),t.fillStyle="rgba(10,15,35,.85)",t.fillRect(2,-6.5,10,13),t.fillStyle="rgba(255,255,255,.9)",t.fillRect(5,-4.5,5,9),t.rotate(-e.aim),e.shield&&(t.strokeStyle="rgba(109,240,255,.9)",t.fillStyle="rgba(109,240,255,.16)",t.lineWidth=2.5,t.beginPath(),t.arc(0,0,e.r+8+Math.sin(this.time*6),0,ae),t.fill(),t.stroke()),r){let o=e.reloadT>0?1-e.reloadT/Ut.RELOAD:e.ammo/Ut.MAG;if(t.lineCap="round",t.lineWidth=3.5,t.strokeStyle="rgba(255,255,255,.18)",t.beginPath(),t.arc(0,0,e.r+12,0,ae),t.stroke(),t.strokeStyle=e.reloadT>0?"#ffd23a":e.ammo<=6?"#ff6b6b":"#ffffff",t.beginPath(),t.arc(0,0,e.r+12,-Math.PI/2,-Math.PI/2+ae*Math.max(.001,o)),t.stroke(),n.showYou){t.fillStyle="#fff",t.beginPath();let l=-e.r-30-Math.sin(this.time*5)*3;t.moveTo(0,l+10),t.lineTo(-7,l),t.lineTo(7,l),t.closePath(),t.fill(),t.font="800 11px system-ui, sans-serif",t.textAlign="center",t.fillText("YOU",0,l-4)}}t.restore()}_parts(t,e){let n=[];for(let s of this.parts){if(s.life-=e,s.life<=0){s.stamp&&this.arena&&this._stamp({x:s.x,y:s.y,color:s.col,surf:"floor",size:.22+s.size*.06,a:null,seed:s.x*1e3+s.y|0});continue}let r=1-s.life/s.max;if(s.k==="ring"){t.strokeStyle=Pn(s.col.length===7?s.col:"#ffffff",1-r),t.lineWidth=3*(1-r)+1,t.beginPath(),t.arc(s.x,s.y,s.size*r,0,ae),t.stroke(),n.push(s);continue}s.x+=s.vx*e,s.y+=s.vy*e,s.k==="drop"?(s.vx*=.94,s.vy*=.94,t.fillStyle=s.col,t.beginPath(),t.arc(s.x,s.y,s.size*(1-r*.4),0,ae),t.fill()):s.k==="puff"?(t.fillStyle=Pn(s.col.length===7?s.col:"#c9d4ff",.5*(1-r)),t.beginPath(),t.arc(s.x,s.y,s.size*(1+r),0,ae),t.fill()):s.k==="spark"?(t.fillStyle=Pn(s.col,1-r),t.fillRect(s.x-1,s.y-1,2.5,2.5)):s.k==="conf"&&(s.rot+=e*6,t.save(),t.translate(s.x,s.y),t.rotate(s.rot),t.fillStyle=s.col,t.fillRect(-s.size/2,-s.size/4,s.size,s.size/2),t.restore()),n.push(s)}this.parts=n.length>700?n.slice(-700):n}exportArt(t,e){let n=this.arena,s=1.5,r=n.w*s,a=n.h*s,o=28*s,l=70*s,c=Uh(r+o*2,a+o*2+l),h=c.getContext("2d");return h.fillStyle="#0b1020",h.fillRect(0,0,c.width,c.height),h.translate(o,o+l),h.drawImage(this.floor,0,0,r,a),h.setTransform(1,0,0,1,0,0),h.fillStyle="#fff",h.font=`900 ${34*s}px system-ui, sans-serif`,h.fillText(t,o,o+38*s),h.fillStyle="#9aa6c7",h.font=`600 ${16*s}px system-ui, sans-serif`,h.fillText(e,o,o+62*s),h.textAlign="right",h.fillStyle=this.pal.you,h.font=`900 ${20*s}px system-ui, sans-serif`,h.fillText("PAINBALL",c.width-o,o+38*s),c}};function Nr(i,t,e,n,s=!1){if(!i||n<=0)return e;let r=(s?.55:.26)*(.6+n*.6),a=null,o=1e9;for(let f of i.ents){if(!f.alive||f.team===t.team)continue;let u=Math.hypot(f.x-t.x,f.y-t.y);if(u>620)continue;let g=Math.atan2(f.y-t.y,f.x-t.x),x=vi(e,g);if(Math.abs(x)>r||!Hi(i.arena.bunkers,t.x,t.y,f.x,f.y))continue;let m=Math.abs(x)*300+u;m<o&&(o=m,a={df:x,e:f,d:u})}if(!a)return e;let l=a.d/520,c=a.e.x+a.e.vx*l*.8,h=a.e.y+a.e.vy*l*.8,d=Math.atan2(h-t.y,c-t.x);return e+vi(e,d)*Math.min(1,n)}var Co=10,kr=56,Ef=.32,Fr=class{constructor(t,{toWorld:e,getWorld:n,onPause:s,onStick:r}){this.el=t,this.toWorld=e,this.getWorld=n,this.onPause=s,this.onStick=r,this.keys=new Set,this.mouse={x:0,y:0,down:!1,has:!1},this.move={id:null,ox:0,oy:0,x:0,y:0},this.aimS={id:null,ox:0,oy:0,x:0,y:0,down:0,moved:!1},this.tapFire=0,this.dashQ=!1,this.reloadQ=!1,this.lastTap=0,this.lastDir={x:0,y:-1},this.assist=2,this.lefty=!1,this.touchSeen=!1,this.enabled=!1,this.lastAim=null,t.addEventListener("pointerdown",a=>this._down(a)),t.addEventListener("pointermove",a=>this._move(a));for(let a of["pointerup","pointercancel"])t.addEventListener(a,o=>this._up(o));t.addEventListener("contextmenu",a=>a.preventDefault()),addEventListener("keydown",a=>this._key(a,!0)),addEventListener("keyup",a=>this._key(a,!1)),addEventListener("blur",()=>{this.keys.clear(),this.mouse.down=!1})}reset(){var t,e;this.keys.clear(),this.move.id=this.aimS.id=null,this.move.x=this.move.y=this.aimS.x=this.aimS.y=0,this.mouse.down=!1,this.tapFire=0,this.dashQ=this.reloadQ=!1,(t=this.onStick)==null||t.call(this,"move",null),(e=this.onStick)==null||e.call(this,"aim",null)}requestDash(){this.dashQ=!0}requestReload(){this.reloadQ=!0}_side(t){let e=t>innerWidth/2;return this.lefty?!e:e}_down(t){var e,n,s,r;if(this.enabled){if(t.pointerType==="mouse"){t.button===0&&(this.mouse.down=!0,this.mouse.x=t.clientX,this.mouse.y=t.clientY,this.mouse.has=!0);return}this.touchSeen=!0;try{(n=(e=this.el).setPointerCapture)==null||n.call(e,t.pointerId)}catch{}if(this._side(t.clientX)){if(this.aimS.id!=null)return;Object.assign(this.aimS,{id:t.pointerId,ox:t.clientX,oy:t.clientY,x:0,y:0,down:performance.now(),moved:!1}),(s=this.onStick)==null||s.call(this,"aim",{ox:t.clientX,oy:t.clientY,x:0,y:0})}else{if(this.move.id!=null)return;let a=performance.now();a-this.lastTap<280?(this.dashQ=!0,this.lastTap=0):this.lastTap=a,Object.assign(this.move,{id:t.pointerId,ox:t.clientX,oy:t.clientY,x:0,y:0}),(r=this.onStick)==null||r.call(this,"move",{ox:t.clientX,oy:t.clientY,x:0,y:0})}}}_move(t){var a;if(t.pointerType==="mouse"){this.mouse.x=t.clientX,this.mouse.y=t.clientY,this.mouse.has=!0;return}let e=t.pointerId===this.move.id?this.move:t.pointerId===this.aimS.id?this.aimS:null;if(!e)return;let n=t.clientX-e.ox,s=t.clientY-e.oy,r=Math.hypot(n,s);if(r>Co){let o=Math.min(1,(r-Co)/(kr-Co));e.x=n/r*o,e.y=s/r*o,e===this.aimS&&(this.aimS.moved=!0)}else e.x=0,e.y=0;r>kr*1.6&&(e.ox+=n/r*(r-kr*1.6),e.oy+=s/r*(r-kr*1.6)),(a=this.onStick)==null||a.call(this,e===this.move?"move":"aim",{ox:e.ox,oy:e.oy,x:e.x,y:e.y})}_up(t){var e,n;if(t.pointerType==="mouse"){t.button===0&&(this.mouse.down=!1);return}t.pointerId===this.move.id&&(this.move.id=null,this.move.x=this.move.y=0,(e=this.onStick)==null||e.call(this,"move",null)),t.pointerId===this.aimS.id&&(!this.aimS.moved&&performance.now()-this.aimS.down<260&&(this.tapFire=.12),this.aimS.id=null,this.aimS.x=this.aimS.y=0,(n=this.onStick)==null||n.call(this,"aim",null))}_key(t,e){var s,r;let n=t.key.length===1?t.key.toLowerCase():t.key;if(e&&(n==="Escape"||n==="p")){(s=this.onPause)==null||s.call(this);return}this.enabled&&(["w","a","s","d","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," ","Shift","r"].includes(n)&&((r=t.preventDefault)==null||r.call(t)),e?(this.keys.has(n)||(n==="Shift"&&(this.dashQ=!0),n==="r"&&(this.reloadQ=!0)),this.keys.add(n)):this.keys.delete(n))}sample(t){var l;let e=(l=this.getWorld())==null?void 0:l.ents.find(c=>c.human),n={mx:0,my:0,aim:null,fire:!1,dash:!1,reload:!1};if(!e||!e.alive)return this.dashQ=this.reloadQ=!1,this.tapFire=0,n;let s=this.keys;n.mx=(s.has("d")||s.has("ArrowRight")?1:0)-(s.has("a")||s.has("ArrowLeft")?1:0)+this.move.x,n.my=(s.has("s")||s.has("ArrowDown")?1:0)-(s.has("w")||s.has("ArrowUp")?1:0)+this.move.y;let r=Math.hypot(n.mx,n.my);r>1&&(n.mx/=r,n.my/=r),r>.2&&(this.lastDir={x:n.mx/Math.max(r,1),y:n.my/Math.max(r,1)});let a=this.getWorld(),o=[0,.35,.6,.85][this.assist]??.6;if(this.aimS.id!=null&&Math.hypot(this.aimS.x,this.aimS.y)>.05){let c=Math.atan2(this.aimS.y,this.aimS.x);n.aim=Nr(a,e,c,o),n.fire=Math.hypot(this.aimS.x,this.aimS.y)>Ef}else if(this.tapFire>0)this.tapFire-=t,n.aim=Nr(a,e,this.lastAim??e.aim,Math.max(o,.6),!0),n.fire=!0;else if(!this.touchSeen||this.mouse.has){if(this.mouse.has){let c=this.toWorld(this.mouse.x,this.mouse.y);n.aim=Nr(a,e,Math.atan2(c.y-e.y,c.x-e.x),o*.5)}n.fire=this.mouse.down||s.has(" ")}return n.aim!=null&&(this.lastAim=n.aim),this.dashQ&&(n.dash=!0,this.dashQ=!1),this.reloadQ&&(n.reload=!0,this.reloadQ=!1),n}};var Nh=["#f1c9a5","#d9a078","#a56a46","#7a4a2e","#ffdcbc"];function kh(i,{color:t="#3a7bff",skin:e=0,hat:n="cap",hair:s="#2b1d14",mood:r="happy"}={}){let a=i.getContext("2d"),o=i.width,l=i.height;a.clearRect(0,0,o,l);let c=a.createLinearGradient(0,0,0,l);c.addColorStop(0,"#3b3f5c"),c.addColorStop(1,"#1d2036"),a.fillStyle=c,a.fillRect(0,0,o,l),a.fillStyle=t,a.beginPath(),a.ellipse(o/2,l*1.02,o*.42,l*.3,0,0,Math.PI*2),a.fill(),a.fillStyle=Nh[e%Nh.length],a.beginPath(),a.ellipse(o/2,l*.5,o*.27,l*.31,0,0,Math.PI*2),a.fill(),a.fillStyle=s,a.beginPath(),a.ellipse(o/2,l*.32,o*.28,l*.17,0,Math.PI,0),a.fill(),a.fillStyle="#12162a",a.fillRect(o*.2,l*.42,o*.6,l*.16),a.fillStyle=t,a.globalAlpha=.8,a.fillRect(o*.23,l*.455,o*.54,l*.07),a.globalAlpha=1,a.strokeStyle="#12162a",a.lineWidth=Math.max(2,o*.03),a.lineCap="round",a.beginPath(),r==="happy"?a.arc(o/2,l*.6,o*.09,.15*Math.PI,.85*Math.PI):a.arc(o/2,l*.7,o*.09,1.15*Math.PI,1.85*Math.PI),a.stroke(),a.fillStyle=t,n==="helmet"?(a.beginPath(),a.ellipse(o/2,l*.34,o*.31,l*.2,0,Math.PI,0),a.fill()):n==="band"?(a.fillStyle="#ff3d71",a.fillRect(o*.2,l*.3,o*.6,l*.07)):n==="crown"?(a.fillStyle="#ffd23f",a.beginPath(),a.moveTo(o*.28,l*.3),a.lineTo(o*.34,l*.12),a.lineTo(o*.42,l*.26),a.lineTo(o*.5,l*.08),a.lineTo(o*.58,l*.26),a.lineTo(o*.66,l*.12),a.lineTo(o*.72,l*.3),a.fill()):(a.beginPath(),a.ellipse(o/2,l*.3,o*.3,l*.17,0,Math.PI,0),a.fill(),a.fillRect(o*.5,l*.27,o*.34,l*.05)),a.strokeStyle="rgba(255,255,255,.25)",a.lineWidth=2,a.strokeRect(1,1,o-2,l-2)}var bn=[{id:"desert",name:"Sunset Desert",sky:["#3b2a8c","#d3558f","#ffb27a"],sun:"#ffd39a",sunDir:[-.5,.18,-1],fog:"#e58a8c",ground:"#e0806f",ground2:"#c9655f",hemi:["#ffc9d6","#7a3b63"],bunkers:["#ff5d8f","#ffd23f","#4fe0d0"],props:"palms",tint:[1.04,.98,1.06],grid:"rgba(255,230,210,.18)"},{id:"beach",name:"Candy Beach",sky:["#38b6ff","#8fe3ff","#ffe8f3"],sun:"#fff4d0",sunDir:[.4,.5,-1],fog:"#bdeeff",ground:"#ffd9a8",ground2:"#ffc690",hemi:["#e6f9ff","#d99a7a"],bunkers:["#ff6fb5","#38d9ff","#ffe14d"],props:"candy",tint:[1,1.04,1.08],grid:"rgba(255,255,255,.35)"},{id:"frost",name:"Frost Park",sky:["#2b4a9a","#7fb2ee","#e8f4ff"],sun:"#e8f3ff",sunDir:[.3,.35,-1],fog:"#cfe4f7",ground:"#eaf3fb",ground2:"#d4e5f4",hemi:["#ffffff","#8fa8c8"],bunkers:["#ff7a45","#3fd1ff","#7a5cff"],props:"pines",tint:[.98,1.02,1.1],grid:"rgba(110,150,200,.25)"},{id:"neon",name:"Neon Night",sky:["#07031a","#2a0b57","#7a1fa2"],sun:"#b56bff",sunDir:[0,.2,-1],fog:"#2a0b57",ground:"#150a33",ground2:"#0d0622",hemi:["#7b61ff","#1a0840"],bunkers:["#00f5d4","#ff2fb8","#fff94a"],props:"crystals",tint:[1.1,.95,1.2],grid:"rgba(120,255,240,.35)",glow:!0},{id:"jungle",name:"Jungle Ruins",sky:["#0f6b4f","#59c98a","#e3ffb5"],sun:"#fff1b0",sunDir:[-.3,.45,-1],fog:"#a6e0a0",ground:"#6ec168",ground2:"#4ea658",hemi:["#e8ffd8","#3b6a3a"],bunkers:["#ff9f1c","#ff4d6d","#2ec4b6"],props:"ferns",tint:[.98,1.06,.98],grid:"rgba(255,255,255,.28)"}],Bh=i=>bn.find(t=>t.id===i)||bn[0],Xs=i=>Math.floor((Math.max(1,i)-1)/5)%bn.length,Yi=[{id:"rookie",name:"Rookie",cost:0,color:"#3a7bff",hat:"cap"},{id:"ranger",name:"Ranger",cost:60,color:"#2ec47a",hat:"helmet"},{id:"ninja",name:"Shadow",cost:90,color:"#2b2f4a",hat:"band"},{id:"bolt",name:"Bolt",cost:120,color:"#ffcf33",hat:"helmet"},{id:"blaze",name:"Blaze",cost:150,color:"#ff4d4d",hat:"cap"},{id:"royal",name:"Royal",cost:220,color:"#b043ff",hat:"crown"}],qs=i=>Yi.find(t=>t.id===i)||Yi[0],Fh=[{color:"#ff7a1a",hat:"cap"},{color:"#e63946",hat:"helmet"},{color:"#2a9d8f",hat:"band"},{color:"#8338ec",hat:"helmet"},{color:"#f4a261",hat:"cap"}],Po=i=>Fh[(i-1)%Fh.length],Oh=["Dusty","Splatter","Mango","Pixel","Rusty","Turbo","Cinder","Pogo","Nova","Tango","Echo","Biscuit","Gizmo","Hex","Marble","Zephyr","Ricochet","Blitz"],zh=["Rookie","Sneak","Ace","Phantom","Hawk","Captain","Ghost","Baron"],Vh=i=>`${zh[Math.floor((i-1)/3)%zh.length]} ${Oh[i*7%Oh.length]}`;var Kt=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Zi=i=>`<canvas class="av" width="96" height="96" data-av='${Kt(JSON.stringify(i))}' role="img" aria-label="${Kt(i.label||"Avatar")}"></canvas>`,Hh=(i,t)=>Array.from({length:t},(e,n)=>`<i class="pod ${n<i?"on":""}"></i>`).join(""),Gh=(i,t,e)=>Array.from({length:t},(n,s)=>`<i class="${e} ${s<i?"on":""}"></i>`).join(""),Af=(i,t="")=>`<div class="pill3" ${t?`id="${t}"`:""} role="img" aria-label="${Kt(i)} coins">${St.coin}<b>${Kt(i)}</b></div>`,_i={head:{icon:"mask",label:"MASK SHOT",coins:10},hand:{icon:"hand",label:"HANDSHOT",coins:5},barrel:{icon:"boom",label:"BARREL SHOT",coins:15},torso:{icon:"target",label:"SPLAT!",coins:0},quick:{icon:"bolt2",label:"QUICK DRAW",coins:5},untouchable:{icon:"trophy",label:"UNTOUCHABLE",coins:10}};Object.assign(Bi.prototype,{_avatars(i){i.querySelectorAll("canvas[data-av]").forEach(t=>{try{kh(t,JSON.parse(t.dataset.av))}catch{}})},showMenu(i){this.hideAll();let t=i.tab||"battle",e=[["battle","Battle",St.target],["arena","Arena",St.swords],["gear","Gear",St.gun],["skins","Skins",St.shirt]],n="";if(t==="battle"){let a=i.areas[i.areaIdx];n=`<div class="area">
        <span class="area-tag">AREA ${i.areaIdx+1}</span>
        <div class="area-card"><button class="arrow" data-act="areaPrev" aria-label="Previous area" ${i.areaIdx===0?"disabled":""}>${St.swapL}</button>
          <div class="area-name">${Kt(a.name)}</div><button class="arrow" data-act="areaNext" aria-label="Next area" ${i.areaIdx>=i.areas.length-1?"disabled":""}>${St.swapR}</button></div>
        <div class="area-sub">${a.locked?`${St.lock}<span>Reach stage ${a.unlockStage} to unlock</span>`:`<span>Stage ${i.playStage} \xB7 ${Kt(i.foe)}${i.boss?' <em class="boss">BOSS</em>':""}</span>`}</div>
        <button class="start3" data-act="playDuel" ${a.locked?"disabled":""}><span>START</span></button>
        <div class="area-dots" aria-hidden="true">${i.areas.map((o,l)=>`<i class="${l===i.areaIdx?"on":""} ${o.locked?"lk":""}"></i>`).join("")}</div>
      </div>`}else t==="arena"?n=`<div class="panel3"><h2>Team Arena</h2><p class="muted">Top-down team paintball with bot allies. Dodge, flank, splat.</p>
        <button class="btn3 lime" data-act="play"><span>${St.play}<b>Campaign</b><small>Level ${Kt(i.arena.level)}</small></span></button>
        <button class="btn3 gold" data-act="daily"><span>${St.flame}<b>Daily Arena</b><small>${Kt(i.arena.dailySub)}</small></span></button>
        <button class="btn3" data-act="levels"><span>${St.levels}<b>Levels</b></span></button></div>`:t==="gear"?n=`<div class="panel3"><h2>Marker paint</h2><p class="muted">Your paint colour. Cosmetic only \u2014 colour-blind safe, enemies always use the contrast colour.</p><div class="cards3">${ei.map(a=>{let o=i.owned.includes(a.id),l=i.palette===a.id;return`<div class="card3 ${l?"eq":""}"><div class="sw"><i style="background:${a.you}"></i><i style="background:${a.foe}"></i></div><b>${Kt(a.name)}</b>${l?'<span class="tag">EQUIPPED</span>':o?`<button class="btn3 sm" data-act="equip" data-id="${a.id}"><span>Equip</span></button>`:`<button class="btn3 sm gold" data-act="buy" data-id="${a.id}"><span>${St.coin}${a.cost}</span></button>`}</div>`}).join("")}</div></div>`:n=`<div class="panel3"><h2>Outfits</h2><p class="muted">Pure style. Wear it into every duel.</p><div class="cards3">${Yi.map(a=>{let o=i.outfits.includes(a.id),l=i.outfit===a.id;return`<div class="card3 ${l?"eq":""}">${Zi({color:a.color,hat:a.hat,skin:1,label:a.name})}<b>${Kt(a.name)}</b>${l?'<span class="tag">WEARING</span>':o?`<button class="btn3 sm" data-act="wear" data-id="${a.id}"><span>Wear</span></button>`:`<button class="btn3 sm gold" data-act="buyOutfit" data-id="${a.id}"><span>${St.coin}${a.cost}</span></button>`}</div>`}).join("")}</div></div>`;let s=i.me,r=this._layer("menu",`
      <section class="m3 tab-${t}" data-ui>
        <div class="m3-top"><div class="pill3" role="img" aria-label="${Kt(i.trophies)} trophies">${St.trophy}<b>${Kt(i.trophies)}</b></div>${Af(i.coins,"menu-coins")}<button class="sq" data-act="settings" aria-label="Settings">${St.sliders}</button></div>
        <div class="m3-prof">${Zi({...s,label:"Your avatar"})}<div class="who"><b>PLAYER</b><span>Best stage ${Kt(i.best)} \xB7 ${Kt(i.wins)} wins</span><div class="bar3" role="img" aria-label="Progress to next area ${i.areaProgress} of 5"><i style="width:${i.areaProgress*20}%"></i></div></div></div>
        <div class="m3-body">${n}</div>
        <nav class="m3-tabs" aria-label="Menu">${e.map(([a,o,l])=>`<button class="tab3 ${a===t?"on":""}" data-act="tab" data-tab="${a}" aria-label="${o}" aria-pressed="${a===t}">${l}<span>${o}</span></button>`).join("")}</nav>
      </section>`);this._avatars(r),this._focus(r,".start3, .btn3, .tab3.on")},showDuelIntro({label:i,area:t,foe:e,you:n,boss:s}){let r=this._layer("dintro",`<div class="dintro" role="status"><div class="di-lab">${Kt(i)}${s?' <em class="boss">BOSS</em>':""}</div><div class="di-area">${Kt(t)}</div>
      <div class="di-vs"><div class="di-side you">${Zi({...n,label:"You"})}<b>YOU</b></div><span class="vs">VS</span><div class="di-side foe">${Zi({...e,label:e.name})}<b>${Kt(e.name)}</b></div></div></div>`);this._avatars(r)},showDuelHud({you:i,foe:t,winRounds:e,label:n,posts:s}){this._layer("dhud",`
      <div class="dhud">
        <div class="dh-top">
          <button class="sq" data-act="pause" aria-label="Pause">${St.pause}</button>
          <div class="dh-side you">${Zi({...i,label:"You"})}<div class="dh-info"><div class="dh-name">YOU</div><div class="dh-pips" id="dh-you" role="img" aria-label="Your rounds won">${Gh(0,e,"rp")}</div><div class="dh-pods" id="dh-pods-you" role="img" aria-label="Your ammo">${Hh(3,3)}</div></div></div>
          <div class="dh-mid"><div class="dh-lab">${Kt(n)}</div></div>
          <div class="dh-side foe"><div class="dh-info r"><div class="dh-name">${Kt(t.name)}</div><div class="dh-pips" id="dh-foe" role="img" aria-label="Enemy rounds won">${Gh(0,e,"rp")}</div><div class="dh-pods" id="dh-pods-foe" role="img" aria-label="Enemy ammo">${Hh(3,3)}</div></div>${Zi({...t,label:t.name})}</div>
        </div>
        <div class="dh-banner" id="dh-banner" role="status" aria-live="polite" hidden></div>
        <div class="dh-hint" id="dh-hint">HOLD TO AIM \xB7 RELEASE TO FIRE</div>
        ${s>1?`<button class="swap l" id="dh-swapL" data-act="swapL" aria-label="Move to left cover">${St.swapL}</button><button class="swap r" id="dh-swapR" data-act="swapR" aria-label="Move to right cover">${St.swapR}</button>`:""}
      </div>
      <div class="scope" id="dh-scope" aria-hidden="true"></div>
      <div class="xhair" id="dh-xh" aria-hidden="true"><i></i><b></b></div>`);let r=a=>document.getElementById(a);this._avatars(this.layers.dhud),this.dh={you:r("dh-you"),foe:r("dh-foe"),podsYou:r("dh-pods-you"),podsFoe:r("dh-pods-foe"),banner:r("dh-banner"),hint:r("dh-hint"),scope:r("dh-scope"),xh:r("dh-xh"),swapL:r("dh-swapL"),swapR:r("dh-swapR"),c:{}},this.layers.dhud.appendChild(this.dh.scope),this.layers.dhud.appendChild(this.dh.xh)},updateDuelHud(i){let t=this.dh;if(!t)return;let e=t.c,n=`${i.youScore}-${i.foeScore}`;e.sc!==n&&(t.you.querySelectorAll("i").forEach((o,l)=>o.classList.toggle("on",l<i.youScore)),t.foe.querySelectorAll("i").forEach((o,l)=>o.classList.toggle("on",l<i.foeScore)),t.you.setAttribute("aria-label",`You have won ${i.youScore} duels`),t.foe.setAttribute("aria-label",`Enemy has won ${i.foeScore} duels`),e.sc=n);let s=`${i.ammoYou}${i.reloadYou?"r":""}`;e.ay!==s&&(t.podsYou.querySelectorAll("i").forEach((o,l)=>o.classList.toggle("on",l<i.ammoYou)),t.podsYou.classList.toggle("rel",!!i.reloadYou),t.podsYou.setAttribute("aria-label",i.reloadYou?"Reloading":`${i.ammoYou} paintballs`),e.ay=s);let r=`${i.ammoFoe}${i.reloadFoe?"r":""}`;e.af!==r&&(t.podsFoe.querySelectorAll("i").forEach((o,l)=>o.classList.toggle("on",l<i.ammoFoe)),t.podsFoe.classList.toggle("rel",!!i.reloadFoe),e.af=r),e.b!==i.banner&&(t.banner.hidden=!i.banner,t.banner.textContent=i.banner||"",t.banner.dataset.kind=i.bannerKind||"",e.b=i.banner);let a=Math.round(i.e*20);if(e.e!==a&&(t.scope.style.opacity=i.scope?i.e:0,t.xh.style.opacity=i.e>.5?1:0,e.e=a),e.bl!==i.blocked&&(t.xh.classList.toggle("blocked",!!i.blocked),e.bl=i.blocked),e.hint!==i.hint&&(t.hint.style.opacity=i.hint?1:0,t.hint.textContent=i.hint||"",e.hint=i.hint),t.swapL){let o=i.swapL?1:0,l=i.swapR?1:0;e.sw!==`${o}${l}`&&(t.swapL.disabled=!o,t.swapR.disabled=!l,e.sw=`${o}${l}`)}},showCallouts(i){let t=this._layer("callout",`<div class="callouts" role="status">${i.map((e,n)=>`<div class="co" style="--i:${n}"><div class="dia"><span>${St[e.icon]||""}</span></div><b>${Kt(e.label)}</b>${e.plus?`<em>+${Kt(e.plus)}</em>`:""}</div>`).join("")}</div>`);clearTimeout(this._coT),this._coT=setTimeout(()=>{this.layers.callout===t&&this._drop("callout")},2200)},hideCallouts(){clearTimeout(this._coT),this._drop("callout")},showBigBanner(i,t,e=""){this._layer("banner",`<div class="banner ${e}" role="status"><div class="b-big">${Kt(i)}</div>${t?`<div class="b-sub">${Kt(t)}</div>`:""}</div>`)},hitSplat(i){let t=document.createElement("div");t.className="hitsplat",t.style.setProperty("--c",i),t.setAttribute("aria-hidden","true"),this.root.appendChild(t),setTimeout(()=>t.remove(),1500)},showDuelResult({won:i,title:t,sub:e,score:n,tricks:s,coins:r,trophies:a,trophyDelta:o,nextLabel:l}){this._drop("dhud"),this._drop("banner"),this._drop("callout");let c=this._layer("result",`
      <div class="modal win" data-ui role="dialog" aria-modal="true" aria-labelledby="rz"><div class="card scroll dres">
        <h2 id="rz" class="${i?"w":"l"}">${Kt(t)}</h2><p class="muted center">${Kt(e)}</p>
        <div class="bigscore"><b class="you">${Kt(n[0])}</b><span>\u2013</span><b class="foe">${Kt(n[1])}</b></div>
        <div class="tricks">${s.length?s.map(h=>`<div class="co static"><div class="dia"><span>${St[h.icon]||""}</span></div><b>${Kt(h.label)}</b>${h.plus?`<em>+${Kt(h.plus)}</em>`:""}</div>`).join(""):'<p class="muted center">No trick shots this time \u2014 try a MASK SHOT!</p>'}</div>
        <dl class="facts"><div><dt>Trophies</dt><dd>${St.trophy}${Kt(a)} <small class="${o>=0?"up":"dn"}">${o>=0?"+":""}${Kt(o)}</small></dd></div><div><dt>Coins</dt><dd>${St.coin}+${Kt(r)}</dd></div></dl>
        <button class="btn3 lime" data-act="${i?"dnext":"dretry"}"><span>${St.play}<b>${Kt(l)}</b></span></button>
        <div class="grid2"><button class="btn3" data-act="${i?"dretry":"menu"}"><span>${i?St.restart:St.home}<b>${i?"Replay":"Menu"}</b></span></button><button class="btn3" data-act="dshare"><span>${St.share}<b>Share</b></span></button>${i?`<button class="btn3" data-act="menu"><span>${St.home}<b>Menu</b></span></button>`:""}</div>
      </div></div>`);this._focus(c,".btn3")}});var ht={DT:1/60,POST_Z:9,BUNKER_Z:1.3,BUNKER_W:3.2,BUNKER_H:1,BUNKER_D:1,BUNKER_HP:14,BALL_SPEED:70,G:6,MAG:3,RELOAD:1.1,PEEK:.22,DROP:.18,SWAP:.28,MIN_FIRE_E:.65,FIRE_CD:.28,R_HEAD:.25,R_HAND:.2,R_TORSO:.38,SPREAD:.0096,BARREL_R:.35,BARREL_H:.9,BLAST:3,DISARM:2.2,ROUND_TIME:40,END_DELAY:1.6,QUICK:.6,BACKSTOP:15,HAND_DX:.32},Io=i=>i===0?ht.POST_Z:-ht.POST_Z,Zs=i=>i===0?-1:1,Lo=Math.hypot,Br=i=>i<=2?[0]:i<=6?[-4,4]:[-6,0,6],qh=i=>Math.min(.95,Math.max(0,.02+.8*(1-Math.exp(-Math.max(1,i)/28))));function Vr(i){let t=new Ae(`duel:${i.seed}`),e=i.posts||Br(i.stage||1),n={cfg:i,t:0,rng:t,xs:e,balls:[],events:[],over:null,overT:0,bunkers:[],barrels:[],ballId:0,tricks:[],hitsTaken:[0,0],f:[]};for(let s=0;s<2;s++){e.forEach((o,l)=>n.bunkers.push({side:s,post:l,x:s===0?o:-o,z:Io(s)+Zs(s)*ht.BUNKER_Z,w:ht.BUNKER_W,d:ht.BUNKER_D,hp:ht.BUNKER_HP,max:ht.BUNKER_HP,wob:0}));let r=e.length===1?2.6:e[e.length-1]+2.6;i.barrels!==!1&&n.barrels.push({side:s,x:s===0?r:-r,z:Io(s)+Zs(s)*.2,alive:!0});let a=Math.floor(e.length/2);n.f.push({side:s,post:a,x:s===0?e[a]:-e[a],z:Io(s),e:0,want:!1,hold:0,ammo:ht.MAG,reloadT:0,cdT:0,disarmT:0,alive:!0,shield:!!(i.boss&&s===1),swapT:0,swapFrom:0,swapTo:0,riseAt:-9,shots:0,aimYaw:0,aimPitch:0,laser:null,vx:0,ai:s===1&&!i.noAI?{skill:i.skill??.3,hideT:1+t.next()*1.5,phase:"hide",phaseT:0,burst:0,burstT:0,err:{x:0,y:0},errT:0,reactT:0,target:null}:null})}return n}var Hr=i=>ht.BUNKER_H*(.4+.6*(i.hp/i.max));function Wh(i,t,e,n,s){let r=0,a=s;for(let o of["x","y","z"]){if(Math.abs(t[o])<1e-9){if(i[o]<e[o]||i[o]>n[o])return-1;continue}let l=(e[o]-i[o])/t[o],c=(n[o]-i[o])/t[o];if(l>c&&([l,c]=[c,l]),l>r&&(r=l),c<a&&(a=c),r>a)return-1}return r}function Rf(i,t,e,n,s){let r=i.x-e.x,a=i.y-e.y,o=i.z-e.z,l=t.x*t.x+t.y*t.y+t.z*t.z,c=2*(r*t.x+a*t.y+o*t.z),h=r*r+a*a+o*o-n*n;if(h<=0)return 0;let d=c*c-4*l*h;if(d<0)return-1;let f=(-c-Math.sqrt(d))/(2*l);return f>=0&&f<=s?f:-1}var Cf=i=>({min:{x:i.x-i.w/2,y:0,z:i.z-i.d/2},max:{x:i.x+i.w/2,y:Hr(i),z:i.z+i.d/2}}),Pf=i=>({min:{x:i.x-ht.BARREL_R,y:0,z:i.z-ht.BARREL_R},max:{x:i.x+ht.BARREL_R,y:ht.BARREL_H,z:i.z+ht.BARREL_R}}),Gr=i=>({head:.78+.82*i,hand:.7+1*i,torso:.5+.5*i});function Ji(i){let t=Gr(i.e);return[{type:"head",x:i.x,y:t.head,z:i.z,r:ht.R_HEAD},{type:"hand",x:i.x+ht.HAND_DX,y:t.hand,z:i.z+Zs(i.side)*.25,r:ht.R_HAND},{type:"torso",x:i.x,y:t.torso+.12,z:i.z,r:ht.R_TORSO},{type:"torso",x:i.x,y:t.torso-.18,z:i.z,r:ht.R_TORSO}]}var ni=i=>({x:i.x+ht.HAND_DX,y:Gr(i.e).hand,z:i.z+Zs(i.side)*.6});function bi(i,t,e,n,s=80){let r={t:s,kind:"none"},a=(o,l)=>{o>=0&&o<r.t&&(r={t:o,...l})};for(let o of i.bunkers){let l=Cf(o);a(Wh(t,e,l.min,l.max,r.t),{kind:"bunker",b:o})}for(let o of i.barrels)if(o.alive){let l=Pf(o);a(Wh(t,e,l.min,l.max,r.t),{kind:"barrel",b:o})}for(let o of i.f)if(o.alive&&o.side!==n)for(let l of Ji(o))a(Rf(t,e,l,l.r,r.t),{kind:"zone",f:o,zone:l.type});if(e.y<0&&a(-t.y/e.y,{kind:"ground"}),e.z!==0){let o=e.z>0?ht.BACKSTOP:-ht.BACKSTOP;a((o-t.z)/e.z,{kind:"back"})}return r}function Wr(i,t=i.aimYaw,e=i.aimPitch){let n=i.e,s={x:i.x-.95*(1-n),y:1.8+.4*n,z:i.z+3.8-2.6*n},r=e-.1*(1-n),a=Math.cos(t),o=Math.sin(t),l=Math.cos(r),c=Math.sin(r);return{pos:s,dir:{x:o*l,y:c,z:-a*l},fov:62-38*n}}function Uo(i,t=i.f[0]){let e=Wr(t),n=bi(i,e.pos,e.dir,0),s=n.kind==="none"?40:n.t;return{x:e.pos.x+e.dir.x*s,y:e.pos.y+e.dir.y*s,z:e.pos.z+e.dir.z*s,hit:n}}function $r(i,t){let e=Wr({...i,e:1},0,0),n=t.x-e.pos.x,s=t.y-e.pos.y,r=t.z-e.pos.z;return{yaw:Math.atan2(n,-r),pitch:Math.atan2(s,Math.hypot(n,r))}}function Yh(i,t,e,n){let s=i.f[0],r=i.f[1];if(n<=0||!r.alive)return{yaw:t,pitch:e};let a=ni({...s,e:1}),o=null,l=1e9;for(let h of Ji(r)){let d=bi(i,a,{x:h.x-a.x,y:h.y-a.y,z:h.z-a.z},0,1);if(d.kind!=="zone"||d.f!==r)continue;let f=$r(s,h),u=Math.hypot(f.yaw-t,f.pitch-e),g=h.type==="head"?.7:h.type==="hand"?.85:1;u*g<l&&(l=u*g,o={a:f,d:u})}if(!o||o.d>.12+.12*n)return{yaw:t,pitch:e};let c=Math.min(1,n*.5);return{yaw:t+(o.a.yaw-t)*c,pitch:e+(o.a.pitch-e)*c}}function Do(i,t,e,n=0){let s=ni(t),r=i.rng,a=()=>(r.next()+r.next()+r.next()-1.5)*2,o=e.x-s.x,l=e.y-s.y,c=e.z-s.z,h=Lo(o,l,c)||1;e={x:e.x+a()*n*h,y:e.y+a()*n*h*.7,z:e.z},o=e.x-s.x,l=e.y-s.y,c=e.z-s.z;let d=Lo(o,l,c)||1,f=d/ht.BALL_SPEED;i.balls.push({id:i.ballId++,side:t.side,x:s.x,y:s.y,z:s.z,vx:o/f,vy:l/f+.5*ht.G*f,vz:c/f,born:i.t,quick:i.t-t.riseAt<=ht.QUICK}),t.ammo--,t.shots++,t.cdT=ht.FIRE_CD,i.events.push({type:"shot",side:t.side,x:s.x,y:s.y,z:s.z}),t.ammo===0&&(t.reloadT=ht.RELOAD,i.events.push({type:"reload",side:t.side}))}var Or=i=>i.alive&&i.cdT<=0&&i.ammo>0&&i.reloadT<=0&&i.disarmT<=0&&i.e>=ht.MIN_FIRE_E&&i.swapT<=0;function Ys(i,t,e,n,s,r,a,o,l,c=1){i.events.push({type:"splat",side:t,x:e,y:n,z:s,nx:r,ny:a,nz:o,surf:l,size:c})}function $h(i,t,e,n,s){t.alive&&(t.alive=!1,t.deadAt=i.t,i.hitsTaken[t.side]++,i.events.push({type:"elim",victim:t.side,by:e,zone:n,quick:s}),e===0&&!i.over&&i.tricks.push({zone:n,quick:s}))}function If(i,t){for(let e=i.balls.length-1;e>=0;e--){let n=i.balls[e],s={x:n.x,y:n.y,z:n.z};n.vy-=ht.G*t;let r={x:n.vx*t,y:n.vy*t,z:n.vz*t},a=bi(i,s,r,n.side,1);if(a.kind==="none"){n.x+=r.x,n.y+=r.y,n.z+=r.z;continue}let o=s.x+r.x*a.t,l=s.y+r.y*a.t,c=s.z+r.z*a.t;if(i.balls.splice(e,1),a.kind==="zone"){let h=a.f;Ys(i,n.side,o,l,c,0,0,-Zs(h.side),"body",1.1),h.shield&&a.zone!=="head"?(h.shield=!1,i.events.push({type:"shieldpop",side:h.side,x:o,y:l,z:c})):a.zone==="hand"?(h.disarmT=ht.DISARM,h.want=!1,i.events.push({type:"disarm",victim:h.side,by:n.side,x:o,y:l,z:c}),n.side===0&&i.tricks.push({zone:"hand",quick:!1})):h.shield&&a.zone==="head"?(h.shield=!1,i.events.push({type:"shieldpop",side:h.side,x:o,y:l,z:c})):$h(i,h,n.side,a.zone,n.quick)}else if(a.kind==="bunker"){let h=a.b;h.hp=Math.max(0,h.hp-1),h.wob=1;let d=s.z>h.z?1:-1;Ys(i,n.side,o,l,h.z+d*(h.d/2+.01),0,0,d,"bunker",1),i.events.push({type:"bunkerhit",side:h.side,post:h.post,hp:h.hp})}else if(a.kind==="barrel"){let h=a.b;h.alive=!1,i.events.push({type:"barrel",x:h.x,z:h.z,by:n.side}),Ys(i,n.side,h.x,.02,h.z,0,1,0,"ground",3);for(let d of i.f)d.alive&&Lo(d.x-h.x,d.z-h.z)<ht.BLAST&&(d.shield?(d.shield=!1,i.events.push({type:"shieldpop",side:d.side,x:d.x,y:1,z:d.z})):$h(i,d,n.side,"barrel",!1))}else a.kind==="ground"?Ys(i,n.side,o,.02,c,0,1,0,"ground",1):Ys(i,n.side,o,l,c>0?ht.BACKSTOP-.02:-ht.BACKSTOP+.02,0,0,c>0?-1:1,"back",1.4)}}function Xh(i,t,e,n){if(t.cdT=Math.max(0,t.cdT-e),t.disarmT=Math.max(0,t.disarmT-e),t.reloadT>0&&(t.reloadT-=e,t.reloadT<=0&&(t.reloadT=0,t.ammo=ht.MAG,i.events.push({type:"reloaded",side:t.side}))),t.swapT>0){t.swapT-=e;let r=1-Math.max(0,t.swapT)/ht.SWAP,a=t.side===0?1:-1;t.x=(t.swapFrom+(t.swapTo-t.swapFrom)*r)*a,t.e+=(.55-t.e)*Math.min(1,e*14),t.want=!1;return}if(n.swap&&!t.want&&t.e<.2){let r=t.post+n.swap;if(r>=0&&r<i.xs.length){let a=t.side===0?1:-1;t.swapFrom=t.x*a,t.swapTo=i.xs[r],t.post=r,t.swapT=ht.SWAP,i.events.push({type:"swap",side:t.side});return}}t.want=n.hold&&t.alive&&t.disarmT<=0;let s=t.e;t.e=t.want?Math.min(1,t.e+e/ht.PEEK):Math.max(0,t.e-e/ht.DROP),s<.35&&t.e>=.35&&(t.riseAt=i.t,t.hold=0,i.events.push({type:"rise",side:t.side})),t.e>.9?t.hold+=e:t.want||(t.hold=0),t.aimYaw=n.yaw??t.aimYaw,t.aimPitch=n.pitch??t.aimPitch}function Zh(i,t,e={}){i.t+=t,e={...e};let n=!i.over,s=i.f[0],r=i.f[1],a=s.x,o=()=>{let l=Uo(i,s),c=Math.max(0,.4-s.hold);Do(i,s,l,ht.SPREAD*(1+2*c/.4))};if(n&&s.alive&&((e.release||e.fire)&&Or(s)?o():(e.release||e.fire)&&s.cdT>0&&s.ammo>0&&s.reloadT<=0&&s.disarmT<=0&&s.swapT<=0?s.queue={rel:!!e.release,t:.4}:s.queue&&(s.queue.t-=t,Or(s)?(o(),s.queue=null):s.queue.t<=0&&(s.queue=null)),s.queue&&s.queue.rel&&!e.hold&&(e={...e,hold:!0})),Xh(i,s,t,n&&s.alive?e:{}),s.vx=(s.x-a)/t,r.ai){let l=r.x;Xh(i,r,t,n&&r.alive?Uf(i,r,t):{}),r.vx=(r.x-l)/t}for(let l of i.bunkers)l.wob=Math.max(0,l.wob-t*3);If(i,t),i.over?i.overT+=t:!s.alive||!r.alive?(i.over={winner:!s.alive&&!r.alive?-1:s.alive?0:1,at:i.t},i.events.push({type:"over",winner:i.over.winner})):i.t>=ht.ROUND_TIME&&(i.over={winner:-1,at:i.t,timeout:!0},i.events.push({type:"over",winner:-1}))}var Jh=i=>!!i.over&&i.overT>=ht.END_DELAY,zr=i=>(i.next()+i.next()+i.next()-1.5)*2;function Lf(i){return{hideMin:1-.6*i,hideMax:2.2-1.2*i,tele:Math.max(.25,.95-.7*i),sigma:(3.6-3.1*i)*Math.PI/180,react:.35-.2*i,lead:.3+.6*i,burstMax:i<.25?1:i<.6?2:3}}var Df=i=>1-.65*Math.min(1,Math.max(0,(i.t-10)/18));function Uf(i,t,e){let n=t.ai,s=Lf(n.skill),r=i.f[0],a=i.rng,o={hold:!1,swap:0};n.phaseT+=e,n.errT-=e,n.reactT=Math.max(0,n.reactT-e),n.errT<=0&&(n.err={x:zr(a)*s.sigma,y:zr(a)*s.sigma*.6},n.errT=.2),t.e>.4&&r.alive&&r.e>.4&&n.phase!=="fire"&&n.reactT<=0&&a.next()<n.skill*.02&&(n.phase="hide",n.phaseT=0,n.hideT=.6+a.next());let l=ni(t),c=()=>{for(let h of["head","hand","torso"]){let d=Ji(r).find(m=>m.type===h),f=r.vx*(Math.hypot(d.x-l.x,d.z-l.z)/ht.BALL_SPEED)*s.lead,u={x:d.x+f,y:d.y,z:d.z},g={x:u.x-l.x,y:u.y-l.y,z:u.z-l.z},x=bi(i,l,g,t.side,1);if(x.kind==="zone"&&x.f===r)return{...u,zone:h}}return null};switch(n.phase){case"hide":if(t.disarmT>0){n.phaseT=0;break}if(n.phaseT>=n.hideT&&t.ammo>0&&t.reloadT<=0){if(i.xs.length>1&&a.next()<.35){let h=t.post+(a.next()<.5?-1:1);if(h>=0&&h<i.xs.length){o.swap=(t.side===0?1:-1)*0+(h-t.post),n.phaseT=n.hideT-.2;break}}n.phase="tele",n.phaseT=0,n.burst=1+a.int(s.burstMax),n.reactT=s.react}break;case"tele":{o.hold=!0;let h=c()||n.target;n.target=h,t.laser=h?{x:h.x+n.err.x*8,y:h.y+n.err.y*8,z:h.z}:{x:t.x,y:1.1,z:-t.z*.2},n.phaseT>=s.tele&&t.e>=.95&&(n.phase="fire",n.phaseT=0,n.burstT=0);break}case"fire":{o.hold=!0,n.burstT-=e;let h=c();h&&(n.target=h);let d=h||n.target,f=d?{x:d.x,y:d.y,z:d.z}:{x:r.x,y:1,z:r.z-1.3};if(t.laser={x:f.x+n.err.x*8,y:f.y+n.err.y*8,z:f.z},n.burstT<=0&&Or(t)&&n.burst>0){let u=!h&&r.e<.2;if(!h&&!u){n.burst=0;break}let g=i.bunkers.find(m=>m.side===0&&m.post===r.post),x=h?{x:h.x+n.err.x*Math.hypot(h.x-l.x,h.z-l.z),y:h.y+n.err.y*Math.hypot(h.y-l.y,h.z-l.z),z:h.z}:{x:g.x,y:Hr(g)*.6,z:g.z};Do(i,t,x,0),n.burst--,n.burstT=ht.FIRE_CD}(n.burst<=0&&n.burstT<=.05||t.ammo===0)&&(n.phase="hide",n.phaseT=0,n.hideT=(s.hideMin+a.next()*(s.hideMax-s.hideMin))*Df(i),t.laser=null),n.phaseT>2.2&&(n.phase="hide",n.phaseT=0,n.hideT=s.hideMin,t.laser=null);break}default:break}if(n.phase==="hide"&&(t.laser=null),n.skill>.6&&n.phase==="fire"&&i.barrels.some(h=>h.side===0&&h.alive&&Math.hypot(h.x-r.x,h.z-r.z)<ht.BLAST-.3)&&Or(t)&&a.next()<.1){let h=i.barrels.find(d=>d.side===0&&d.alive);Do(i,t,{x:h.x,y:.4,z:h.z},s.sigma*.5)}return o}function Kh(i,t="p"){return{skill:i,rng:new Ae(`scripted:${t}`),phase:"wait",t:0,react:.55-.4*i,sigma:(7-5.5*i)*Math.PI/180,seen:0}}function jh(i,t,e){let n=i.f[0],s=i.f[1],r={hold:!1,release:!1,swap:0,yaw:n.aimYaw,pitch:n.aimPitch};t.t+=e;let a=()=>{for(let c of["head","hand","torso"]){let h=Ji(s).find(u=>u.type===c),d=ni({...n,e:1});if(bi(i,d,{x:h.x-d.x,y:h.y-d.y,z:h.z-d.z},0,1).kind==="zone")return h}return null},o=c=>{let h=$r(n,c);r.yaw=h.yaw+zr(t.rng)*t.sigma*.5,r.pitch=h.pitch+zr(t.rng)*t.sigma*.4},l=s.alive&&s.e>.35?a():null;switch(l?t.seen+=e:t.seen=0,t.phase){case"wait":if(n.reloadT>0||n.ammo===0)break;t.seen>t.react&&(t.phase="rise",t.t=0);break;case"rise":r.hold=!0,l&&o(l),n.e>=.95&&t.t>.25+.15*(1-t.skill)&&(t.phase="shoot",t.t=0),t.t>1.2&&(t.phase="wait");break;case"shoot":r.hold=!0,l&&o(l),r.release=!0,t.phase="cool",t.t=0;break;case"cool":t.t>.5&&(t.phase="wait");break;default:break}return r}var Nf=0,Qh=1,kf=2;var ru=1,Ff=2,Gn=3,pi=0,Re=1,Tn=2,di=0,gs=1,Di=2,td=3,ed=4,Of=5,Ci=100,zf=101,Bf=102,Vf=103,Hf=104,Gf=200,Wf=201,$f=202,Xf=203,gl=204,xl=205,qf=206,Yf=207,Zf=208,Jf=209,Kf=210,jf=211,Qf=212,tp=213,ep=214,yl=0,vl=1,_l=2,_s=3,bl=4,Ml=5,Sl=6,wl=7,au=0,np=1,ip=2,ui=0,sp=1,rp=2,ap=3,op=4,lp=5,cp=6,hp=7;var ou=300,bs=301,Ms=302,Tl=303,El=304,eo=306,lr=1e3,Ii=1001,Al=1002,je=1003,dp=1004;var Xr=1005;var hn=1006,No=1007;var Li=1008;var Yn=1009,lu=1010,cu=1011,cr=1012,Hc=1013,Ui=1014,$n=1015,fr=1016,Gc=1017,Wc=1018,Ss=1020,hu=35902,du=1021,uu=1022,Ke=1023,fu=1024,pu=1025,xs=1026,ws=1027,mu=1028,$c=1029,gu=1030,Xc=1031;var qc=1033,_a=33776,ba=33777,Ma=33778,Sa=33779,Rl=35840,Cl=35841,Pl=35842,Il=35843,Ll=36196,Dl=37492,Ul=37496,Nl=37808,kl=37809,Fl=37810,Ol=37811,zl=37812,Bl=37813,Vl=37814,Hl=37815,Gl=37816,Wl=37817,$l=37818,Xl=37819,ql=37820,Yl=37821,wa=36492,Zl=36494,Jl=36495,xu=36283,Kl=36284,jl=36285,Ql=36286;var Ta=2300,tc=2301,ko=2302,nd=2400,id=2401,sd=2402;var up=3200,fp=3201;var yu=0,pp=1,ci="",Ze="srgb",Ls="srgb-linear",no="linear",oe="srgb";var Ki=7680;var rd=519,mp=512,gp=513,xp=514,vu=515,yp=516,vp=517,_p=518,bp=519,ec=35044,pr=35048;var ad="300 es",Xn=2e3,Ea=2001,mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fo=Math.PI/180,nc=180/Math.PI;function fi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function ke(i,t,e){return Math.max(t,Math.min(e,i))}function Mp(i,t){return(i%t+t)%t}function Oo(i,t,e){return(1-e)*i+e*t}function Ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],S=s[4],b=s[7],I=s[2],E=s[5],R=s[8];return r[0]=a*x+o*y+l*I,r[3]=a*m+o*S+l*E,r[6]=a*p+o*b+l*R,r[1]=c*x+h*y+d*I,r[4]=c*m+h*S+d*E,r[7]=c*p+h*b+d*R,r[2]=f*x+u*y+g*I,r[5]=f*m+u*S+g*E,r[8]=f*p+u*b+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,u=c*r-a*l,g=e*d+n*f+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=u*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(zo.makeScale(t,e)),this}rotate(t){return this.premultiply(zo.makeRotation(-t)),this}translate(t,e){return this.premultiply(zo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},zo=new Ot;function _u(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sp(){let i=Aa("canvas");return i.style.display="block",i}var od={};function ir(i){i in od||(od[i]=!0,console.warn(i))}function wp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Tp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ep(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var jt={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?no:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ld=[.64,.33,.3,.6,.15,.06],cd=[.2126,.7152,.0722],hd=[.3127,.329],dd=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ud=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[Ls]:{primaries:ld,whitePoint:hd,transfer:no,toXYZ:dd,fromXYZ:ud,luminanceCoefficients:cd,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:ld,whitePoint:hd,transfer:oe,toXYZ:dd,fromXYZ:ud,luminanceCoefficients:cd,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}});var ji,ic=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=Aa("canvas")),ji.width=t.width,ji.height=t.height;let n=ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Aa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ap=0,Ra=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Bo(s[a].image)):r.push(Bo(s[a]))}else r=Bo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ic.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rp=0,sn=class i extends mi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ii,s=Ii,r=hn,a=Li,o=Ke,l=Yn,c=i.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=fi(),this.name="",this.source=new Ra(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ou)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lr:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case Al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lr:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case Al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=ou;sn.DEFAULT_ANISOTROPY=1;var Me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,b=(u+1)/2,I=(p+1)/2,E=(h+f)/4,R=(d+x)/4,P=(g+m)/4;return S>b&&S>I?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=R/n):b>I?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=P/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sc=class extends mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ra(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends sc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ca=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var rc=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var An=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],u=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=u,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==f||c!==u||h!==g){let m=1-o,p=l*f+c*u+h*g+d*x,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let I=Math.sqrt(S),E=Math.atan2(I,p*y);m=Math.sin(m*E)/I,o=Math.sin(o*E)/I}let b=o*y;if(l=l*m+f*b,c=c*m+u*b,h=h*m+g*b,d=d*m+x*b,m===1-o){let I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],f=r[a+1],u=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*u-c*f,t[e+1]=l*g+h*f+c*d-o*u,t[e+2]=c*g+h*u+o*f-l*d,t[e+3]=h*g-o*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),f=l(n/2),u=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vo.copy(this).projectOnVector(t),this.sub(Vo)}reflect(t){return this.sub(Vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vo=new C,fd=new An,Ni=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Yr.subVectors(this.max,Js),Qi.subVectors(t.a,Js),ts.subVectors(t.b,Js),es.subVectors(t.c,Js),ii.subVectors(ts,Qi),si.subVectors(es,ts),Mi.subVectors(Qi,es);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Mi.z,Mi.y,ii.z,0,-ii.x,si.z,0,-si.x,Mi.z,0,-Mi.x,-ii.y,ii.x,0,-si.y,si.x,0,-Mi.y,Mi.x,0];return!Ho(e,Qi,ts,es,Yr)||(e=[1,0,0,0,1,0,0,0,1],!Ho(e,Qi,ts,es,Yr))?!1:(Zr.crossVectors(ii,si),e=[Zr.x,Zr.y,Zr.z],Ho(e,Qi,ts,es,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},On=[new C,new C,new C,new C,new C,new C,new C,new C],Mn=new C,qr=new Ni,Qi=new C,ts=new C,es=new C,ii=new C,si=new C,Mi=new C,Js=new C,Yr=new C,Zr=new C,Si=new C;function Ho(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Si.fromArray(i,r);let o=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Cp=new Ni,Ks=new C,Go=new C,Ts=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Cp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);let e=Ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Go.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(Go)),this.expandByPoint(Ks.copy(t.center).sub(Go))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},zn=new C,Wo=new C,Jr=new C,ri=new C,$o=new C,Kr=new C,Xo=new C,Pa=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wo.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Wo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Jr),o=ri.dot(this.direction),l=-ri.dot(Jr),c=ri.lengthSq(),h=Math.abs(1-a*a),d,f,u,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let x=1/h;d*=x,f*=x,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Wo).addScaledVector(Jr,f),u}intersectSphere(t,e){zn.subVectors(t.center,this.origin);let n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,r){$o.subVectors(e,t),Kr.subVectors(n,t),Xo.crossVectors($o,Kr);let a=this.direction.dot(Xo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,t);let l=o*this.direction.dot(Kr.crossVectors(ri,Kr));if(l<0)return null;let c=o*this.direction.dot($o.cross(ri));if(c<0||l+c>a)return null;let h=-o*ri.dot(Xo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class i{constructor(t,e,n,s,r,a,o,l,c,h,d,f,u,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,f,u,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,d,f,u,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),a=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,u=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=g+u*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,g=c*h,x=c*d;e[0]=f+x*o,e[4]=g*o-u,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,g=c*h,x=c*d;e[0]=f-x*o,e[4]=-a*d,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,u=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=g*c-u,e[8]=f*c+x,e[1]=l*d,e[5]=x*c+f,e[9]=u*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,u=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-f*d,e[8]=g*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*d+g,e[10]=f-x*d}else if(t.order==="XZY"){let f=a*l,u=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+x,e[5]=a*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=o*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pp,t,Ip)}lookAt(t,e,n){let s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ai.crossVectors(n,ln),ai.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ai.crossVectors(n,ln)),ai.normalize(),jr.crossVectors(ln,ai),s[0]=ai.x,s[4]=jr.x,s[8]=ln.x,s[1]=ai.y,s[5]=jr.y,s[9]=ln.y,s[2]=ai.z,s[6]=jr.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],S=n[7],b=n[11],I=n[15],E=s[0],R=s[4],P=s[8],M=s[12],v=s[1],A=s[5],k=s[9],F=s[13],B=s[2],q=s[6],H=s[10],K=s[14],W=s[3],it=s[7],dt=s[11],Tt=s[15];return r[0]=a*E+o*v+l*B+c*W,r[4]=a*R+o*A+l*q+c*it,r[8]=a*P+o*k+l*H+c*dt,r[12]=a*M+o*F+l*K+c*Tt,r[1]=h*E+d*v+f*B+u*W,r[5]=h*R+d*A+f*q+u*it,r[9]=h*P+d*k+f*H+u*dt,r[13]=h*M+d*F+f*K+u*Tt,r[2]=g*E+x*v+m*B+p*W,r[6]=g*R+x*A+m*q+p*it,r[10]=g*P+x*k+m*H+p*dt,r[14]=g*M+x*F+m*K+p*Tt,r[3]=y*E+S*v+b*B+I*W,r[7]=y*R+S*A+b*q+I*it,r[11]=y*P+S*k+b*H+I*dt,r[15]=y*M+S*F+b*K+I*Tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*u-n*l*u)+x*(+e*l*u-e*c*f+r*a*f-s*a*u+s*c*h-r*l*h)+m*(+e*c*d-e*o*u-r*a*d+n*a*u+r*o*h-n*c*h)+p*(-s*o*h-e*l*d+e*o*f+s*a*d-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=d*m*c-x*f*c+x*l*u-o*m*u-d*l*p+o*f*p,S=g*f*c-h*m*c-g*l*u+a*m*u+h*l*p-a*f*p,b=h*x*c-g*d*c+g*o*u-a*x*u-h*o*p+a*d*p,I=g*d*l-h*x*l-g*o*f+a*x*f+h*o*m-a*d*m,E=e*y+n*S+s*b+r*I;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return t[0]=y*R,t[1]=(x*f*r-d*m*r-x*s*u+n*m*u+d*s*p-n*f*p)*R,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*R,t[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*u-n*l*u)*R,t[4]=S*R,t[5]=(h*m*r-g*f*r+g*s*u-e*m*u-h*s*p+e*f*p)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*R,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*u+e*l*u)*R,t[8]=b*R,t[9]=(g*d*r-h*x*r-g*n*u+e*x*u+h*n*p-e*d*p)*R,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*u-e*o*u)*R,t[12]=I*R,t[13]=(h*x*s-g*d*s+g*n*f-e*x*f-h*n*m+e*d*m)*R,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*R,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*f+e*o*f)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,u=r*h,g=r*d,x=a*h,m=a*d,p=o*d,y=l*c,S=l*h,b=l*d,I=n.x,E=n.y,R=n.z;return s[0]=(1-(x+p))*I,s[1]=(u+b)*I,s[2]=(g-S)*I,s[3]=0,s[4]=(u-b)*E,s[5]=(1-(f+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+S)*R,s[9]=(m-y)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ns.set(s[0],s[1],s[2]).length(),a=ns.set(s[4],s[5],s[6]).length(),o=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Sn.copy(this);let c=1/r,h=1/a,d=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,e.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Xn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),u,g;if(o===Xn)u=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ea)u=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Xn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(a-r),f=(e+t)*c,u=(n+s)*h,g,x;if(o===Xn)g=(a+r)*d,x=-2*d;else if(o===Ea)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ns=new C,Sn=new ve,Pp=new C(0,0,0),Ip=new C(1,1,1),ai=new C,jr=new C,ln=new C,pd=new ve,md=new An,Zn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return md.setFromEuler(this),this.setFromQuaternion(md,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Ia=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lp=0,gd=new C,is=new An,Bn=new ve,Qr=new C,js=new C,Dp=new C,Up=new An,xd=new C(1,0,0),yd=new C(0,1,0),vd=new C(0,0,1),_d={type:"added"},Np={type:"removed"},ss={type:"childadded",child:null},qo={type:"childremoved",child:null},Fe=class i extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new Zn,n=new An,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Ot}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(xd,t)}rotateY(t){return this.rotateOnAxis(yd,t)}rotateZ(t){return this.rotateOnAxis(vd,t)}translateOnAxis(t,e){return gd.copy(t).applyQuaternion(this.quaternion),this.position.add(gd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xd,t)}translateY(t){return this.translateOnAxis(yd,t)}translateZ(t){return this.translateOnAxis(vd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(js,Qr,this.up):Bn.lookAt(Qr,js,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Bn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_d),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Np),qo.child=t,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_d),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,Dp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,Up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Fe.DEFAULT_UP=new C(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new C,Vn=new C,Yo=new C,Hn=new C,rs=new C,as=new C,bd=new C,Zo=new C,Jo=new C,Ko=new C,jo=new Me,Qo=new Me,tl=new Me,hi=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),Vn.subVectors(n,e),Yo.subVectors(t,e);let a=wn.dot(wn),o=wn.dot(Vn),l=wn.dot(Yo),c=Vn.dot(Vn),h=Vn.dot(Yo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return jo.setScalar(0),Qo.setScalar(0),tl.setScalar(0),jo.fromBufferAttribute(t,e),Qo.fromBufferAttribute(t,n),tl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(jo,r.x),a.addScaledVector(Qo,r.y),a.addScaledVector(tl,r.z),a}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),Vn.subVectors(t,e),wn.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),wn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;rs.subVectors(s,n),as.subVectors(r,n),Zo.subVectors(t,n);let l=rs.dot(Zo),c=as.dot(Zo);if(l<=0&&c<=0)return e.copy(n);Jo.subVectors(t,s);let h=rs.dot(Jo),d=as.dot(Jo);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(rs,a);Ko.subVectors(t,r);let u=rs.dot(Ko),g=as.dot(Ko);if(g>=0&&u<=g)return e.copy(r);let x=u*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(as,o);let m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return bd.subVectors(r,s),o=(d-h)/(d-h+(u-g)),e.copy(s).addScaledVector(bd,o);let p=1/(m+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function el(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Mp(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=el(a,r,t+1/3),this.g=el(a,r,t),this.b=el(a,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){let n=bu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return jt.fromWorkingColorSpace(Ge.copy(this),t),Math.round(ke(Ge.r*255,0,255))*65536+Math.round(ke(Ge.g*255,0,255))*256+Math.round(ke(Ge.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Ze){jt.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(ta);let n=Oo(oi.h,ta.h,e),s=Oo(oi.s,ta.s,e),r=Oo(oi.l,ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new wt;wt.NAMES=bu;var kp=0,Jn=class extends mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=fi(),this.name="",this.blending=gs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=xl,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gl&&(n.blendSrc=this.blendSrc),this.blendDst!==xl&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ce=class extends Jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new C,ea=new ct,dn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ec,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ea.fromBufferAttribute(this,e),ea.applyMatrix3(t),this.setXY(e,ea.x,ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ec&&(t.usage=this.usage),t}};var La=class extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Da=class extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Fp=0,mn=new ve,nl=new Fe,os=new C,cn=new Ni,Qs=new Ni,Le=new C,Qe=class i extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_u(t)?Da:La)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return nl.lookAt(t),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(cn.min,Qs.min),cn.expandByPoint(Le),Le.addVectors(cn.max,Qs.max),cn.expandByPoint(Le)):(cn.expandByPoint(Qs.min),cn.expandByPoint(Qs.max))}cn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Le.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(t,c),Le.add(os)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new C,l[P]=new C;let c=new C,h=new C,d=new C,f=new ct,u=new ct,g=new ct,x=new C,m=new C;function p(P,M,v){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,v),f.fromBufferAttribute(r,P),u.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),h.sub(c),d.sub(c),u.sub(f),g.sub(f);let A=1/(u.x*g.y-g.x*u.y);isFinite(A)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(A),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(A),o[P].add(x),o[M].add(x),o[v].add(x),l[P].add(m),l[M].add(m),l[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,M=y.length;P<M;++P){let v=y[P],A=v.start,k=v.count;for(let F=A,B=A+k;F<B;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let S=new C,b=new C,I=new C,E=new C;function R(P){I.fromBufferAttribute(s,P),E.copy(I);let M=o[P];S.copy(M),S.sub(I.multiplyScalar(I.dot(M))).normalize(),b.crossVectors(E,M);let A=b.dot(l[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,A)}for(let P=0,M=y.length;P<M;++P){let v=y[P],A=v.start,k=v.count;for(let F=A,B=A+k;F<B;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let f=0,u=t.count;f<u;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),u=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?u=l[x]*o.data.stride+o.offset:u=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[u++]}return new dn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Md=new ve,wi=new Pa,na=new Ts,Sd=new C,ia=new C,sa=new C,ra=new C,il=new C,aa=new C,wd=new C,oa=new C,At=class extends Fe{constructor(t=new Qe,e=new Ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(il.fromBufferAttribute(d,t),a?aa.addScaledVector(il,h):aa.addScaledVector(il.sub(e),h))}e.add(aa)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(na.containsPoint(wi.origin)===!1&&(wi.intersectSphere(na,Sd)===null||wi.origin.distanceToSquared(Sd)>(t.far-t.near)**2))&&(Md.copy(r).invert(),wi.copy(t.ray).applyMatrix4(Md),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,u.start),S=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let b=y,I=S;b<I;b+=3){let E=o.getX(b),R=o.getX(b+1),P=o.getX(b+2);s=la(this,p,t,n,c,h,d,E,R,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),S=o.getX(m+1),b=o.getX(m+2);s=la(this,a,t,n,c,h,d,y,S,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,u.start),S=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let b=y,I=S;b<I;b+=3){let E=b,R=b+1,P=b+2;s=la(this,p,t,n,c,h,d,E,R,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){let y=m,S=m+1,b=m+2;s=la(this,a,t,n,c,h,d,y,S,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Op(i,t,e,n,s,r,a,o){let l;if(t.side===Re?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===pi,o),l===null)return null;oa.copy(o),oa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(oa);return c<e.near||c>e.far?null:{distance:c,point:oa.clone(),object:i}}function la(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ia),i.getVertexPosition(l,sa),i.getVertexPosition(c,ra);let h=Op(i,t,e,n,ia,sa,ra,wd);if(h){let d=new C;hi.getBarycoord(wd,ia,sa,ra,d),s&&(h.uv=hi.getInterpolatedAttribute(s,o,l,c,d,new ct)),r&&(h.uv1=hi.getInterpolatedAttribute(r,o,l,c,d,new ct)),a&&(h.normal=hi.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new C,materialIndex:0};hi.getNormal(ia,sa,ra,f.normal),h.face=f,h.barycoord=d}return h}var tn=class i extends Qe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,u=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(d,2));function g(x,m,p,y,S,b,I,E,R,P,M){let v=b/R,A=I/P,k=b/2,F=I/2,B=E/2,q=R+1,H=P+1,K=0,W=0,it=new C;for(let dt=0;dt<H;dt++){let Tt=dt*A-F;for(let Ht=0;Ht<q;Ht++){let ce=Ht*v-k;it[x]=ce*y,it[m]=Tt*S,it[p]=B,c.push(it.x,it.y,it.z),it[x]=0,it[m]=0,it[p]=E>0?1:-1,h.push(it.x,it.y,it.z),d.push(Ht/R),d.push(1-dt/P),K+=1}}for(let dt=0;dt<P;dt++)for(let Tt=0;Tt<R;Tt++){let Ht=f+Tt+q*dt,ce=f+Tt+q*(dt+1),X=f+(Tt+1)+q*(dt+1),tt=f+(Tt+1)+q*dt;l.push(Ht,ce,tt),l.push(ce,X,tt),W+=6}o.addGroup(u,W,M),u+=W,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Es(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){let t={};for(let e=0;e<i.length;e++){let n=Es(i[e]);for(let s in n)t[s]=n[s]}return t}function zp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var Bp={clone:Es,merge:Ye},Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends Jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ua=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},li=new C,Td=new ct,Ed=new ct,Je=class extends Ua{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=nc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nc*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,Td,Ed),e.subVectors(Ed,Td)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ls=-90,cs=1,ac=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(ls,cs,t,e);s.layers=this.layers,this.add(s);let r=new Je(ls,cs,t,e);r.layers=this.layers,this.add(r);let a=new Je(ls,cs,t,e);a.layers=this.layers,this.add(a);let o=new Je(ls,cs,t,e);o.layers=this.layers,this.add(o);let l=new Je(ls,cs,t,e);l.layers=this.layers,this.add(l);let c=new Je(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Na=class extends sn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},oc=class extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Na(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new tn(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:di});r.uniforms.tEquirect.value=e;let a=new At(s,r),o=e.minFilter;return e.minFilter===Li&&(e.minFilter=hn),new ac(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},sl=new C,Gp=new C,Wp=new Ot,Wn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=sl.subVectors(n,e).cross(Gp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(sl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wp.getNormalMatrix(t),s=this.coplanarPoint(sl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new Ts,ca=new C,hr=class{constructor(t=new Wn,e=new Wn,n=new Wn,s=new Wn,r=new Wn,a=new Wn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],u=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],S=s[14],b=s[15];if(n[0].setComponents(l-r,f-c,m-u,b-p).normalize(),n[1].setComponents(l+r,f+c,m+u,b+p).normalize(),n[2].setComponents(l+a,f+h,m+g,b+y).normalize(),n[3].setComponents(l-a,f-h,m-g,b-y).normalize(),n[4].setComponents(l-o,f-d,m-x,b-S).normalize(),e===Xn)n[5].setComponents(l+o,f+d,m+x,b+S).normalize();else if(e===Ea)n[5].setComponents(o,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ca.x=s.normal.x>0?t.max.x:t.min.x,ca.y=s.normal.y>0?t.max.y:t.min.y,ca.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ca)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Su(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $p(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){let g=d[f],x=d[u];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){let x=d[u];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var rn=class i extends Qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=e/l,u=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-a;for(let S=0;S<c;S++){let b=S*d-r;g.push(b,-y,0),x.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let S=y+c*p,b=y+c*(p+1),I=y+1+c*(p+1),E=y+1+c*p;u.push(S,b,E),u.push(b,I,E)}this.setIndex(u),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,am=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Om=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$m=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,l0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,b0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,P0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,I0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,D0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Q0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ug=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:Xp,alphahash_pars_fragment:qp,alphamap_fragment:Yp,alphamap_pars_fragment:Zp,alphatest_fragment:Jp,alphatest_pars_fragment:Kp,aomap_fragment:jp,aomap_pars_fragment:Qp,batching_pars_vertex:tm,batching_vertex:em,begin_vertex:nm,beginnormal_vertex:im,bsdfs:sm,iridescence_fragment:rm,bumpmap_pars_fragment:am,clipping_planes_fragment:om,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:cm,clipping_planes_vertex:hm,color_fragment:dm,color_pars_fragment:um,color_pars_vertex:fm,color_vertex:pm,common:mm,cube_uv_reflection_fragment:gm,defaultnormal_vertex:xm,displacementmap_pars_vertex:ym,displacementmap_vertex:vm,emissivemap_fragment:_m,emissivemap_pars_fragment:bm,colorspace_fragment:Mm,colorspace_pars_fragment:Sm,envmap_fragment:wm,envmap_common_pars_fragment:Tm,envmap_pars_fragment:Em,envmap_pars_vertex:Am,envmap_physical_pars_fragment:Om,envmap_vertex:Rm,fog_vertex:Cm,fog_pars_vertex:Pm,fog_fragment:Im,fog_pars_fragment:Lm,gradientmap_pars_fragment:Dm,lightmap_pars_fragment:Um,lights_lambert_fragment:Nm,lights_lambert_pars_fragment:km,lights_pars_begin:Fm,lights_toon_fragment:zm,lights_toon_pars_fragment:Bm,lights_phong_fragment:Vm,lights_phong_pars_fragment:Hm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Wm,lights_fragment_begin:$m,lights_fragment_maps:Xm,lights_fragment_end:qm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:Zm,logdepthbuf_pars_vertex:Jm,logdepthbuf_vertex:Km,map_fragment:jm,map_pars_fragment:Qm,map_particle_fragment:t0,map_particle_pars_fragment:e0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphinstance_vertex:s0,morphcolor_vertex:r0,morphnormal_vertex:a0,morphtarget_pars_vertex:o0,morphtarget_vertex:l0,normal_fragment_begin:c0,normal_fragment_maps:h0,normal_pars_fragment:d0,normal_pars_vertex:u0,normal_vertex:f0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:x0,iridescence_pars_fragment:y0,opaque_fragment:v0,packing:_0,premultiplied_alpha_fragment:b0,project_vertex:M0,dithering_fragment:S0,dithering_pars_fragment:w0,roughnessmap_fragment:T0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:R0,shadowmap_vertex:C0,shadowmask_pars_fragment:P0,skinbase_vertex:I0,skinning_pars_vertex:L0,skinning_vertex:D0,skinnormal_vertex:U0,specularmap_fragment:N0,specularmap_pars_fragment:k0,tonemapping_fragment:F0,tonemapping_pars_fragment:O0,transmission_fragment:z0,transmission_pars_fragment:B0,uv_pars_fragment:V0,uv_pars_vertex:H0,uv_vertex:G0,worldpos_vertex:W0,background_vert:$0,background_frag:X0,backgroundCube_vert:q0,backgroundCube_frag:Y0,cube_vert:Z0,cube_frag:J0,depth_vert:K0,depth_frag:j0,distanceRGBA_vert:Q0,distanceRGBA_frag:tg,equirect_vert:eg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:sg,meshbasic_vert:rg,meshbasic_frag:ag,meshlambert_vert:og,meshlambert_frag:lg,meshmatcap_vert:cg,meshmatcap_frag:hg,meshnormal_vert:dg,meshnormal_frag:ug,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:xg,meshtoon_frag:yg,points_vert:vg,points_frag:_g,shadow_vert:bg,shadow_frag:Mg,sprite_vert:Sg,sprite_frag:wg},et={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},In={basic:{uniforms:Ye([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ye([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new wt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ye([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ye([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ye([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new wt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ye([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ye([et.points,et.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ye([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ye([et.common,et.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ye([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ye([et.sprite,et.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ye([et.common,et.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ye([et.lights,et.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};In.physical={uniforms:Ye([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var ha={r:0,b:0,g:0},Ei=new Zn,Tg=new ve;function Eg(i,t,e,n,s,r,a){let o=new wt(0),l=r===!0?0:1,c,h,d=null,f=0,u=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function x(y){let S=!1,b=g(y);b===null?p(o,l):b&&b.isColor&&(p(b,1),S=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){let b=g(S);b&&(b.isCubeTexture||b.mapping===eo)?(h===void 0&&(h=new At(new tn(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Es(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ei.copy(S.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(Ei)),h.material.toneMapped=jt.getTransfer(b.colorSpace)!==oe,(d!==b||f!==b.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=b,f=b.version,u=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new At(new rn(2,2),new We({name:"BackgroundMaterial",uniforms:Es(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=jt.getTransfer(b.colorSpace)!==oe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(ha,Mu(i)),n.buffers.color.setClear(ha.r,ha.g,ha.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:x,addToRenderList:m}}function Ag(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(v,A,k,F,B){let q=!1,H=d(F,k,A);r!==H&&(r=H,c(r.object)),q=u(v,F,k,B),q&&g(v,F,k,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,b(v,A,k,F),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,A,k){let F=k.wireframe===!0,B=n[v.id];B===void 0&&(B={},n[v.id]=B);let q=B[A.id];q===void 0&&(q={},B[A.id]=q);let H=q[F];return H===void 0&&(H=f(l()),q[F]=H),H}function f(v){let A=[],k=[],F=[];for(let B=0;B<e;B++)A[B]=0,k[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:k,attributeDivisors:F,object:v,attributes:{},index:null}}function u(v,A,k,F){let B=r.attributes,q=A.attributes,H=0,K=k.getAttributes();for(let W in K)if(K[W].location>=0){let dt=B[W],Tt=q[W];if(Tt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Tt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Tt=v.instanceColor)),dt===void 0||dt.attribute!==Tt||Tt&&dt.data!==Tt.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(v,A,k,F){let B={},q=A.attributes,H=0,K=k.getAttributes();for(let W in K)if(K[W].location>=0){let dt=q[W];dt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor));let Tt={};Tt.attribute=dt,dt&&dt.data&&(Tt.data=dt.data),B[W]=Tt,H++}r.attributes=B,r.attributesNum=H,r.index=F}function x(){let v=r.newAttributes;for(let A=0,k=v.length;A<k;A++)v[A]=0}function m(v){p(v,0)}function p(v,A){let k=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;k[v]=1,F[v]===0&&(i.enableVertexAttribArray(v),F[v]=1),B[v]!==A&&(i.vertexAttribDivisor(v,A),B[v]=A)}function y(){let v=r.newAttributes,A=r.enabledAttributes;for(let k=0,F=A.length;k<F;k++)A[k]!==v[k]&&(i.disableVertexAttribArray(k),A[k]=0)}function S(v,A,k,F,B,q,H){H===!0?i.vertexAttribIPointer(v,A,k,B,q):i.vertexAttribPointer(v,A,k,F,B,q)}function b(v,A,k,F){x();let B=F.attributes,q=k.getAttributes(),H=A.defaultAttributeValues;for(let K in q){let W=q[K];if(W.location>=0){let it=B[K];if(it===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),it!==void 0){let dt=it.normalized,Tt=it.itemSize,Ht=t.get(it);if(Ht===void 0)continue;let ce=Ht.buffer,X=Ht.type,tt=Ht.bytesPerElement,_t=X===i.INT||X===i.UNSIGNED_INT||it.gpuType===Hc;if(it.isInterleavedBufferAttribute){let st=it.data,It=st.stride,Nt=it.offset;if(st.isInstancedInterleavedBuffer){for(let Gt=0;Gt<W.locationSize;Gt++)p(W.location+Gt,st.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Gt=0;Gt<W.locationSize;Gt++)m(W.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let Gt=0;Gt<W.locationSize;Gt++)S(W.location+Gt,Tt/W.locationSize,X,dt,It*tt,(Nt+Tt/W.locationSize*Gt)*tt,_t)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<W.locationSize;st++)p(W.location+st,it.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<W.locationSize;st++)m(W.location+st);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let st=0;st<W.locationSize;st++)S(W.location+st,Tt/W.locationSize,X,dt,Tt*tt,Tt/W.locationSize*st*tt,_t)}}else if(H!==void 0){let dt=H[K];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(W.location,dt);break;case 3:i.vertexAttrib3fv(W.location,dt);break;case 4:i.vertexAttrib4fv(W.location,dt);break;default:i.vertexAttrib1fv(W.location,dt)}}}}y()}function I(){P();for(let v in n){let A=n[v];for(let k in A){let F=A[k];for(let B in F)h(F[B].object),delete F[B];delete A[k]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;let A=n[v.id];for(let k in A){let F=A[k];for(let B in F)h(F[B].object),delete F[B];delete A[k]}delete n[v.id]}function R(v){for(let A in n){let k=n[A];if(k[v.id]===void 0)continue;let F=k[v.id];for(let B in F)h(F[B].object),delete F[B];delete k[v.id]}}function P(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Rg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];e.update(u,n,1)}function l(c,h,d,f){if(d===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Cg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ke&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let P=R===fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Yn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==$n&&!P)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:I,maxSamples:E}}function Pg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Wn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,S=y*4,b=p.clippingState||null;l.value=b,b=h(g,f,S,u);for(let I=0;I!==S;++I)b[I]=e[I];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=u+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,b=u;S!==x;++S,b+=4)a.copy(d[S]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Ig(i){let t=new WeakMap;function e(a,o){return o===Tl?a.mapping=bs:o===El&&(a.mapping=Ms),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Tl||o===El)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new oc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var As=class extends Ua{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ms=4,Ad=[.125,.215,.35,.446,.526,.582],Pi=20,rl=new As,Rd=new wt,al=null,ol=0,ll=0,cl=!1,Ri=(1+Math.sqrt(5))/2,hs=1/Ri,Cd=[new C(-Ri,hs,0),new C(Ri,hs,0),new C(-hs,0,Ri),new C(hs,0,Ri),new C(0,Ri,-hs),new C(0,Ri,hs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],ka=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){al=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(al,ol,ll),this._renderer.xr.enabled=cl,t.scissorTest=!1,da(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),al=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:fr,format:Ke,colorSpace:Ls,depthBuffer:!1},s=Pd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lg(r)),this._blurMaterial=Dg(r,t,e)}return s}_compileMaterial(t){let e=new At(this._lodPlanes[0],t);this._renderer.compile(e,rl)}_sceneToCubeUV(t,e,n,s){let o=new Je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Rd),h.toneMapping=ui,h.autoClear=!1;let u=new Ce({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new At(new tn,u),x=!1,m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,x=!0):(u.color.copy(Rd),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let S=this._cubeSize;da(s,y*S,p>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===bs||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Id());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new At(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;da(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,rl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Cd[(s-r-1)%Cd.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new At(this._lodPlanes[s],c),f=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Pi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Pi;m>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);let p=[],y=0;for(let R=0;R<Pi;++R){let P=R/x,M=Math.exp(-P*P/2);p.push(M),R===0?y+=M:R<m&&(y+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;let b=this._sizeLods[s],I=3*b*(s>S-ms?s-S+ms:0),E=4*(this._cubeSize-b);da(e,I,E,3*b,2*b),l.setRenderTarget(e),l.render(d,rl)}};function Lg(i){let t=[],e=[],n=[],s=i,r=i-ms+1+Ad.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ms?l=Ad[a-i+ms-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*u),S=new Float32Array(m*g*u),b=new Float32Array(p*g*u);for(let E=0;E<u;E++){let R=E%3*2/3-1,P=E>2?0:-1,M=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];y.set(M,x*g*E),S.set(f,m*g*E);let v=[E,E,E,E,E,E];b.set(v,p*g*E)}let I=new Qe;I.setAttribute("position",new dn(y,x)),I.setAttribute("uv",new dn(S,m)),I.setAttribute("faceIndex",new dn(b,p)),t.push(I),s>ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pd(i,t,e){let n=new En(i,t,e);return n.texture.mapping=eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function da(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dg(i,t,e){let n=new Float32Array(Pi),s=new C(0,1,0);return new We({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Id(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Ld(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Yc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ug(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Tl||l===El,h=l===bs||l===Ms;if(c||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new ka(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let u=o.image;return c&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new ka(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ng(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ir("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kg(i,t,e,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];let u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let u=d.morphAttributes;for(let g in u){let x=u[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(d){let f=[],u=d.index,g=d.attributes.position,x=0;if(u!==null){let y=u.array;x=u.version;for(let S=0,b=y.length;S<b;S+=3){let I=y[S+0],E=y[S+1],R=y[S+2];f.push(I,E,E,R,R,I)}}else if(g!==void 0){let y=g.array;x=g.version;for(let S=0,b=y.length/3-1;S<b;S+=3){let I=S+0,E=S+1,R=S+2;f.push(I,E,E,R,R,I)}}else return;let m=new(_u(f)?Da:La)(f,1);m.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let f=r.get(d);if(f){let u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Fg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,f*a,g),e.update(u,n,g))}function h(f,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,n,1)}function d(f,u,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,u[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=u[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Og(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zg(i,t,e){let n=new WeakMap,s=new Me;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;u===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let b=o.attributes.position.count*S,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let E=new Float32Array(b*I*4*d),R=new Ca(E,b,I,d);R.type=$n,R.needsUpdate=!0;let P=S*4;for(let v=0;v<d;v++){let A=m[v],k=p[v],F=y[v],B=b*I*4*v;for(let q=0;q<A.count;q++){let H=q*P;u===!0&&(s.fromBufferAttribute(A,q),E[B+H+0]=s.x,E[B+H+1]=s.y,E[B+H+2]=s.z,E[B+H+3]=0),g===!0&&(s.fromBufferAttribute(k,q),E[B+H+4]=s.x,E[B+H+5]=s.y,E[B+H+6]=s.z,E[B+H+7]=0),x===!0&&(s.fromBufferAttribute(F,q),E[B+H+8]=s.x,E[B+H+9]=s.y,E[B+H+10]=s.z,E[B+H+11]=F.itemSize===4?s.w:1)}}f={count:d,texture:R,size:new ct(b,I)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let g=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Bg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Fa=class extends sn{constructor(t,e,n,s,r,a,o,l,c,h=xs){if(h!==xs&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xs&&(n=Ui),n===void 0&&h===ws&&(n=Ss),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:je,this.minFilter=l!==void 0?l:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},wu=new sn,Dd=new Fa(1,1),Tu=new Ca,Eu=new rc,Au=new Na,Ud=[],Nd=[],kd=new Float32Array(16),Fd=new Float32Array(9),Od=new Float32Array(4);function Ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ud[s];if(r===void 0&&(r=new Float32Array(s),Ud[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function io(i,t){let e=Nd[t];e===void 0&&(e=new Int32Array(t),Nd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function $g(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Od.set(n),i.uniformMatrix2fv(this.addr,!1,Od),Ie(e,n)}}function Xg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Fd.set(n),i.uniformMatrix3fv(this.addr,!1,Fd),Ie(e,n)}}function qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;kd.set(n),i.uniformMatrix4fv(this.addr,!1,kd),Ie(e,n)}}function Yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dd.compareFunction=vu,r=Dd):r=wu,e.setTexture2D(t||r,s)}function ix(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Eu,s)}function sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Au,s)}function rx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Tu,s)}function ax(i){switch(i){case 5126:return Vg;case 35664:return Hg;case 35665:return Gg;case 35666:return Wg;case 35674:return $g;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return Kg;case 5125:return jg;case 36294:return Qg;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}function ox(i,t){i.uniform1fv(this.addr,t)}function lx(i,t){let e=Ds(t,this.size,2);i.uniform2fv(this.addr,e)}function cx(i,t){let e=Ds(t,this.size,3);i.uniform3fv(this.addr,e)}function hx(i,t){let e=Ds(t,this.size,4);i.uniform4fv(this.addr,e)}function dx(i,t){let e=Ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ux(i,t){let e=Ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fx(i,t){let e=Ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function px(i,t){i.uniform1iv(this.addr,t)}function mx(i,t){i.uniform2iv(this.addr,t)}function gx(i,t){i.uniform3iv(this.addr,t)}function xx(i,t){i.uniform4iv(this.addr,t)}function yx(i,t){i.uniform1uiv(this.addr,t)}function vx(i,t){i.uniform2uiv(this.addr,t)}function _x(i,t){i.uniform3uiv(this.addr,t)}function bx(i,t){i.uniform4uiv(this.addr,t)}function Mx(i,t,e){let n=this.cache,s=t.length,r=io(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||wu,r[a])}function Sx(i,t,e){let n=this.cache,s=t.length,r=io(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Eu,r[a])}function wx(i,t,e){let n=this.cache,s=t.length,r=io(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Au,r[a])}function Tx(i,t,e){let n=this.cache,s=t.length,r=io(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Tu,r[a])}function Ex(i){switch(i){case 5126:return ox;case 35664:return lx;case 35665:return cx;case 35666:return hx;case 35674:return dx;case 35675:return ux;case 35676:return fx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return xx;case 5125:return yx;case 36294:return vx;case 36295:return _x;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Tx}}var lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ax(e.type)}},cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ex(e.type)}},hc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},hl=/(\w+)(\])?(\[|\.)?/g;function zd(i,t){i.seq.push(t),i.map[t.id]=t}function Ax(i,t,e){let n=i.name,s=n.length;for(hl.lastIndex=0;;){let r=hl.exec(n),a=hl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){zd(e,c===void 0?new lc(o,i,t):new cc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new hc(o),zd(e,d)),e=d}}}var vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ax(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Bd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Rx=37297,Cx=0;function Px(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Vd=new Ot;function Ix(i){jt._getMatrix(Vd,jt.workingColorSpace,i);let t=`mat3( ${Vd.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case no:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Px(i.getShaderSource(t),a)}else return s}function Lx(i,t){let e=Ix(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Dx(i,t){let e;switch(t){case sp:e="Linear";break;case rp:e="Reinhard";break;case ap:e="Cineon";break;case op:e="ACESFilmic";break;case cp:e="AgX";break;case hp:e="Neutral";break;case lp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ua=new C;function Ux(){jt.getLuminanceCoefficients(ua);let i=ua.x.toFixed(4),t=ua.y.toFixed(4),e=ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function kx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function sr(i){return i!==""}function Gd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function dc(i){return i.replace(Ox,Bx)}var zx=new Map;function Bx(i,t){let e=Bt[t];if(e===void 0){let n=zx.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return dc(e)}var Vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $d(i){return i.replace(Vx,Hx)}function Hx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ru?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ff?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ms:t="ENVMAP_TYPE_CUBE";break;case eo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $x(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ms:t="ENVMAP_MODE_REFRACTION";break}return t}function Xx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case au:t="ENVMAP_BLENDING_MULTIPLY";break;case np:t="ENVMAP_BLENDING_MIX";break;case ip:t="ENVMAP_BLENDING_ADD";break}return t}function qx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Yx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Gx(e),c=Wx(e),h=$x(e),d=Xx(e),f=qx(e),u=Nx(e),g=kx(r),x=s.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[Xd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[Xd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?Bt.tonemapping_pars_fragment:"",e.toneMapping!==ui?Dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Lx("linearToOutputTexel",e.outputColorSpace),Ux(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),a=dc(a),a=Gd(a,e),a=Wd(a,e),o=dc(o),o=Gd(o,e),o=Wd(o,e),a=$d(a),o=$d(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ad?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ad?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=y+m+a,b=y+p+o,I=Bd(s,s.VERTEX_SHADER,S),E=Bd(s,s.FRAGMENT_SHADER,b);s.attachShader(x,I),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(A){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(I).trim(),B=s.getShaderInfoLog(E).trim(),q=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,E);else{let K=Hd(s,I,"vertex"),W=Hd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+K+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||B==="")&&(H=!1);H&&(A.diagnostics={runnable:q,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(I),s.deleteShader(E),P=new vs(s,x),M=Fx(s,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,Rx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=E,this}var Zx=0,uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new fc(t),e.set(t,n)),n}},fc=class{constructor(t){this.id=Zx++,this.code=t,this.usedTimes=0}};function Jx(i,t,e,n,s,r,a){let o=new Ia,l=new uc,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,u=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,A,k,F){let B=k.fog,q=F.geometry,H=M.isMeshStandardMaterial?k.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),W=K&&K.mapping===eo?K.image.height:null,it=g[M.type];M.precision!==null&&(u=s.getMaxPrecision(M.precision),u!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));let dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Tt=dt!==void 0?dt.length:0,Ht=0;q.morphAttributes.position!==void 0&&(Ht=1),q.morphAttributes.normal!==void 0&&(Ht=2),q.morphAttributes.color!==void 0&&(Ht=3);let ce,X,tt,_t;if(it){let se=In[it];ce=se.vertexShader,X=se.fragmentShader}else ce=M.vertexShader,X=M.fragmentShader,l.update(M),tt=l.getVertexShaderID(M),_t=l.getFragmentShaderID(M);let st=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),Nt=F.isInstancedMesh===!0,Gt=F.isBatchedMesh===!0,_e=!!M.map,Zt=!!M.matcap,Se=!!K,N=!!M.aoMap,un=!!M.lightMap,$t=!!M.bumpMap,Xt=!!M.normalMap,Ct=!!M.displacementMap,pe=!!M.emissiveMap,Rt=!!M.metalnessMap,T=!!M.roughnessMap,_=M.anisotropy>0,O=M.clearcoat>0,Y=M.dispersion>0,J=M.iridescence>0,$=M.sheen>0,bt=M.transmission>0,rt=_&&!!M.anisotropyMap,ut=O&&!!M.clearcoatMap,Jt=O&&!!M.clearcoatNormalMap,j=O&&!!M.clearcoatRoughnessMap,pt=J&&!!M.iridescenceMap,Pt=J&&!!M.iridescenceThicknessMap,Lt=$&&!!M.sheenColorMap,mt=$&&!!M.sheenRoughnessMap,qt=!!M.specularMap,zt=!!M.specularColorMap,de=!!M.specularIntensityMap,L=bt&&!!M.transmissionMap,nt=bt&&!!M.thicknessMap,G=!!M.gradientMap,Z=!!M.alphaMap,lt=M.alphaTest>0,at=!!M.alphaHash,kt=!!M.extensions,be=ui;M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(be=i.toneMapping);let Be={shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:ce,fragmentShader:X,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:Gt,batchingColor:Gt&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ls,alphaToCoverage:!!M.alphaToCoverage,map:_e,matcap:Zt,envMap:Se,envMapMode:Se&&K.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:un,bumpMap:$t,normalMap:Xt,displacementMap:f&&Ct,emissiveMap:pe,normalMapObjectSpace:Xt&&M.normalMapType===pp,normalMapTangentSpace:Xt&&M.normalMapType===yu,metalnessMap:Rt,roughnessMap:T,anisotropy:_,anisotropyMap:rt,clearcoat:O,clearcoatMap:ut,clearcoatNormalMap:Jt,clearcoatRoughnessMap:j,dispersion:Y,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:Pt,sheen:$,sheenColorMap:Lt,sheenRoughnessMap:mt,specularMap:qt,specularColorMap:zt,specularIntensityMap:de,transmission:bt,transmissionMap:L,thicknessMap:nt,gradientMap:G,opaque:M.transparent===!1&&M.blending===gs&&M.alphaToCoverage===!1,alphaMap:Z,alphaTest:lt,alphaHash:at,combine:M.combine,mapUv:_e&&x(M.map.channel),aoMapUv:N&&x(M.aoMap.channel),lightMapUv:un&&x(M.lightMap.channel),bumpMapUv:$t&&x(M.bumpMap.channel),normalMapUv:Xt&&x(M.normalMap.channel),displacementMapUv:Ct&&x(M.displacementMap.channel),emissiveMapUv:pe&&x(M.emissiveMap.channel),metalnessMapUv:Rt&&x(M.metalnessMap.channel),roughnessMapUv:T&&x(M.roughnessMap.channel),anisotropyMapUv:rt&&x(M.anisotropyMap.channel),clearcoatMapUv:ut&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&x(M.sheenRoughnessMap.channel),specularMapUv:qt&&x(M.specularMap.channel),specularColorMapUv:zt&&x(M.specularColorMap.channel),specularIntensityMapUv:de&&x(M.specularIntensityMap.channel),transmissionMapUv:L&&x(M.transmissionMap.channel),thicknessMapUv:nt&&x(M.thicknessMap.channel),alphaMapUv:Z&&x(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Xt||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(_e||Z),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:It,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Ht,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:_e&&M.map.isVideoTexture===!0&&jt.getTransfer(M.map.colorSpace)===oe,decodeVideoTextureEmissive:pe&&M.emissiveMap.isVideoTexture===!0&&jt.getTransfer(M.emissiveMap.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Tn,flipSided:M.side===Re,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:kt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&M.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let A in M.defines)v.push(A),v.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(y(v,M),S(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function y(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function S(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){let v=g[M.type],A;if(v){let k=In[v];A=Bp.clone(k.uniforms)}else A=M.uniforms;return A}function I(M,v){let A;for(let k=0,F=h.length;k<F;k++){let B=h[k];if(B.cacheKey===v){A=B,++A.usedTimes;break}}return A===void 0&&(A=new Yx(i,v,M,r),h.push(A)),A}function E(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function R(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:I,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:P}}function Kx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function jx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function qd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,u,g,x,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function o(d,f,u,g,x,m){let p=a(d,f,u,g,x,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):e.push(p)}function l(d,f,u,g,x,m){let p=a(d,f,u,g,x,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,f){e.length>1&&e.sort(d||jx),n.length>1&&n.sort(f||qd),s.length>1&&s.sort(f||qd)}function h(){for(let d=t,f=i.length;d<f;d++){let u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Qx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Yd,i.set(n,[a])):s>=r.length?(a=new Yd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ty(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new wt};break;case"SpotLight":e={position:new C,direction:new C,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function ey(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ny=0;function iy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function sy(i){let t=new ty,e=ey(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new ve,a=new ve;function o(c){let h=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let u=0,g=0,x=0,m=0,p=0,y=0,S=0,b=0,I=0,E=0,R=0;c.sort(iy);for(let M=0,v=c.length;M<v;M++){let A=c[M],k=A.color,F=A.intensity,B=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=k.r*F,d+=k.g*F,f+=k.b*F;else if(A.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(A.sh.coefficients[H],F);R++}else if(A.isDirectionalLight){let H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let K=A.shadow,W=e.get(A);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[u]=W,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=A.shadow.matrix,y++}n.directional[u]=H,u++}else if(A.isSpotLight){let H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(k).multiplyScalar(F),H.distance=B,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,n.spot[x]=H;let K=A.shadow;if(A.map&&(n.spotLightMap[I]=A.map,I++,K.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[x]=K.matrix,A.castShadow){let W=e.get(A);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=q,b++}x++}else if(A.isRectAreaLight){let H=t.get(A);H.color.copy(k).multiplyScalar(F),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=H,m++}else if(A.isPointLight){let H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){let K=A.shadow,W=e.get(A);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=A.shadow.matrix,S++}n.point[g]=H,g++}else if(A.isHemisphereLight){let H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(F),H.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==u||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==S||P.numSpotShadows!==b||P.numSpotMaps!==I||P.numLightProbes!==R)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+I-E,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.directionalLength=u,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=S,P.numSpotShadows=b,P.numSpotMaps=I,P.numLightProbes=R,n.version=ny++)}function l(c,h){let d=0,f=0,u=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let S=c[p];if(S.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(S.isSpotLight){let b=n.spot[u];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(S.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let b=n.hemi[x];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Zd(i){let t=new sy(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ry(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Zd(i),t.set(s,[o])):r>=a.length?(o=new Zd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var pc=class extends Jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mc=class extends Jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ly(i,t,e){let n=new hr,s=new ct,r=new ct,a=new Me,o=new pc({depthPacking:fp}),l=new mc,c={},h=e.maxTextureSize,d={[pi]:Re,[Re]:pi,[Tn]:Tn},f=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:ay,fragmentShader:oy}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let g=new Qe;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new At(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let p=this.type;this.render=function(E,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),k=i.state;k.setBlending(di),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let F=p!==Gn&&this.type===Gn,B=p===Gn&&this.type!==Gn;for(let q=0,H=E.length;q<H;q++){let K=E[q],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let it=W.getFrameExtents();if(s.multiply(it),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,W.mapSize.y=r.y)),W.map===null||F===!0||B===!0){let Tt=this.type!==Gn?{minFilter:je,magFilter:je}:{};W.map!==null&&W.map.dispose(),W.map=new En(s.x,s.y,Tt),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let dt=W.getViewportCount();for(let Tt=0;Tt<dt;Tt++){let Ht=W.getViewport(Tt);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),k.viewport(a),W.updateMatrices(K,Tt),n=W.getFrustum(),b(R,P,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Gn&&y(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,v,A)};function y(E,R){let P=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new En(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,P,f,x,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,P,u,x,null)}function S(E,R,P,M){let v=null,A=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)v=A;else if(v=P.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let k=v.uuid,F=R.uuid,B=c[k];B===void 0&&(B={},c[k]=B);let q=B[F];q===void 0&&(q=v.clone(),B[F]=q,R.addEventListener("dispose",I)),v=q}if(v.visible=R.visible,v.wireframe=R.wireframe,M===Gn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:d[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let k=i.properties.get(v);k.light=P}return v}function b(E,R,P,M,v){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Gn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let F=t.update(E),B=E.material;if(Array.isArray(B)){let q=F.groups;for(let H=0,K=q.length;H<K;H++){let W=q[H],it=B[W.materialIndex];if(it&&it.visible){let dt=S(E,it,M,v);E.onBeforeShadow(i,E,R,P,F,dt,W),i.renderBufferDirect(P,null,F,dt,E,W),E.onAfterShadow(i,E,R,P,F,dt,W)}}}else if(B.visible){let q=S(E,B,M,v);E.onBeforeShadow(i,E,R,P,F,q,null),i.renderBufferDirect(P,null,F,q,E,null),E.onAfterShadow(i,E,R,P,F,q,null)}}let k=E.children;for(let F=0,B=k.length;F<B;F++)b(k[F],R,P,M,v)}function I(E){E.target.removeEventListener("dispose",I);for(let P in c){let M=c[P],v=E.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var cy={[yl]:vl,[_l]:Sl,[bl]:wl,[_s]:Ml,[vl]:yl,[Sl]:_l,[wl]:bl,[Ml]:_s};function hy(i,t){function e(){let L=!1,nt=new Me,G=null,Z=new Me(0,0,0,0);return{setMask:function(lt){G!==lt&&!L&&(i.colorMask(lt,lt,lt,lt),G=lt)},setLocked:function(lt){L=lt},setClear:function(lt,at,kt,be,Be){Be===!0&&(lt*=be,at*=be,kt*=be),nt.set(lt,at,kt,be),Z.equals(nt)===!1&&(i.clearColor(lt,at,kt,be),Z.copy(nt))},reset:function(){L=!1,G=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,nt=!1,G=null,Z=null,lt=null;return{setReversed:function(at){if(nt!==at){let kt=t.get("EXT_clip_control");nt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);let be=lt;lt=null,this.setClear(be)}nt=at},getReversed:function(){return nt},setTest:function(at){at?st(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(at){G!==at&&!L&&(i.depthMask(at),G=at)},setFunc:function(at){if(nt&&(at=cy[at]),Z!==at){switch(at){case yl:i.depthFunc(i.NEVER);break;case vl:i.depthFunc(i.ALWAYS);break;case _l:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case bl:i.depthFunc(i.EQUAL);break;case Ml:i.depthFunc(i.GEQUAL);break;case Sl:i.depthFunc(i.GREATER);break;case wl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=at}},setLocked:function(at){L=at},setClear:function(at){lt!==at&&(nt&&(at=1-at),i.clearDepth(at),lt=at)},reset:function(){L=!1,G=null,Z=null,lt=null,nt=!1}}}function s(){let L=!1,nt=null,G=null,Z=null,lt=null,at=null,kt=null,be=null,Be=null;return{setTest:function(se){L||(se?st(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(se){nt!==se&&!L&&(i.stencilMask(se),nt=se)},setFunc:function(se,yn,kn){(G!==se||Z!==yn||lt!==kn)&&(i.stencilFunc(se,yn,kn),G=se,Z=yn,lt=kn)},setOp:function(se,yn,kn){(at!==se||kt!==yn||be!==kn)&&(i.stencilOp(se,yn,kn),at=se,kt=yn,be=kn)},setLocked:function(se){L=se},setClear:function(se){Be!==se&&(i.clearStencil(se),Be=se)},reset:function(){L=!1,nt=null,G=null,Z=null,lt=null,at=null,kt=null,be=null,Be=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,u=[],g=null,x=!1,m=null,p=null,y=null,S=null,b=null,I=null,E=null,R=new wt(0,0,0),P=0,M=!1,v=null,A=null,k=null,F=null,B=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,K=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=K>=2);let it=null,dt={},Tt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),ce=new Me().fromArray(Tt),X=new Me().fromArray(Ht);function tt(L,nt,G,Z){let lt=new Uint8Array(4),at=i.createTexture();i.bindTexture(L,at),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<G;kt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(nt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return at}let _t={};_t[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(_s),$t(!1),Xt(Qh),st(i.CULL_FACE),N(di);function st(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function It(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Nt(L,nt){return d[L]!==nt?(i.bindFramebuffer(L,nt),d[L]=nt,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=nt),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Gt(L,nt){let G=u,Z=!1;if(L){G=f.get(nt),G===void 0&&(G=[],f.set(nt,G));let lt=L.textures;if(G.length!==lt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let at=0,kt=lt.length;at<kt;at++)G[at]=i.COLOR_ATTACHMENT0+at;G.length=lt.length,Z=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Z=!0);Z&&i.drawBuffers(G)}function _e(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let Zt={[Ci]:i.FUNC_ADD,[zf]:i.FUNC_SUBTRACT,[Bf]:i.FUNC_REVERSE_SUBTRACT};Zt[Vf]=i.MIN,Zt[Hf]=i.MAX;let Se={[Gf]:i.ZERO,[Wf]:i.ONE,[$f]:i.SRC_COLOR,[gl]:i.SRC_ALPHA,[Kf]:i.SRC_ALPHA_SATURATE,[Zf]:i.DST_COLOR,[qf]:i.DST_ALPHA,[Xf]:i.ONE_MINUS_SRC_COLOR,[xl]:i.ONE_MINUS_SRC_ALPHA,[Jf]:i.ONE_MINUS_DST_COLOR,[Yf]:i.ONE_MINUS_DST_ALPHA,[jf]:i.CONSTANT_COLOR,[Qf]:i.ONE_MINUS_CONSTANT_COLOR,[tp]:i.CONSTANT_ALPHA,[ep]:i.ONE_MINUS_CONSTANT_ALPHA};function N(L,nt,G,Z,lt,at,kt,be,Be,se){if(L===di){x===!0&&(It(i.BLEND),x=!1);return}if(x===!1&&(st(i.BLEND),x=!0),L!==Of){if(L!==m||se!==M){if((p!==Ci||b!==Ci)&&(i.blendEquation(i.FUNC_ADD),p=Ci,b=Ci),se)switch(L){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Di:i.blendFunc(i.ONE,i.ONE);break;case td:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ed:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Di:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case td:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ed:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,S=null,I=null,E=null,R.set(0,0,0),P=0,m=L,M=se}return}lt=lt||nt,at=at||G,kt=kt||Z,(nt!==p||lt!==b)&&(i.blendEquationSeparate(Zt[nt],Zt[lt]),p=nt,b=lt),(G!==y||Z!==S||at!==I||kt!==E)&&(i.blendFuncSeparate(Se[G],Se[Z],Se[at],Se[kt]),y=G,S=Z,I=at,E=kt),(be.equals(R)===!1||Be!==P)&&(i.blendColor(be.r,be.g,be.b,Be),R.copy(be),P=Be),m=L,M=!1}function un(L,nt){L.side===Tn?It(i.CULL_FACE):st(i.CULL_FACE);let G=L.side===Re;nt&&(G=!G),$t(G),L.blending===gs&&L.transparent===!1?N(di):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let Z=L.stencilWrite;o.setTest(Z),Z&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),pe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(L){v!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),v=L)}function Xt(L){L!==Nf?(st(i.CULL_FACE),L!==A&&(L===Qh?i.cullFace(i.BACK):L===kf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),A=L}function Ct(L){L!==k&&(H&&i.lineWidth(L),k=L)}function pe(L,nt,G){L?(st(i.POLYGON_OFFSET_FILL),(F!==nt||B!==G)&&(i.polygonOffset(nt,G),F=nt,B=G)):It(i.POLYGON_OFFSET_FILL)}function Rt(L){L?st(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+q-1),it!==L&&(i.activeTexture(L),it=L)}function _(L,nt,G){G===void 0&&(it===null?G=i.TEXTURE0+q-1:G=it);let Z=dt[G];Z===void 0&&(Z={type:void 0,texture:void 0},dt[G]=Z),(Z.type!==L||Z.texture!==nt)&&(it!==G&&(i.activeTexture(G),it=G),i.bindTexture(L,nt||_t[L]),Z.type=L,Z.texture=nt)}function O(){let L=dt[it];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){ce.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function mt(L){X.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function qt(L,nt){let G=c.get(nt);G===void 0&&(G=new WeakMap,c.set(nt,G));let Z=G.get(L);Z===void 0&&(Z=i.getUniformBlockIndex(nt,L.name),G.set(L,Z))}function zt(L,nt){let Z=c.get(nt).get(L);l.get(nt)!==Z&&(i.uniformBlockBinding(nt,Z,L.__bindingPointIndex),l.set(nt,Z))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,dt={},d={},f=new WeakMap,u=[],g=null,x=!1,m=null,p=null,y=null,S=null,b=null,I=null,E=null,R=new wt(0,0,0),P=0,M=!1,v=null,A=null,k=null,F=null,B=null,ce.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:It,bindFramebuffer:Nt,drawBuffers:Gt,useProgram:_e,setBlending:N,setMaterial:un,setFlipSided:$t,setCullFace:Xt,setLineWidth:Ct,setPolygonOffset:pe,setScissorTest:Rt,activeTexture:T,bindTexture:_,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:pt,texImage3D:Pt,updateUBOMapping:qt,uniformBlockBinding:zt,texStorage2D:Jt,texStorage3D:j,texSubImage2D:$,texSubImage3D:bt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ut,scissor:Lt,viewport:mt,reset:de}}function Jd(i,t,e,n){let s=dy(n);switch(e){case du:return i*t;case fu:return i*t;case pu:return i*t*2;case mu:return i*t/s.components*s.byteLength;case $c:return i*t/s.components*s.byteLength;case gu:return i*t*2/s.components*s.byteLength;case Xc:return i*t*2/s.components*s.byteLength;case uu:return i*t*3/s.components*s.byteLength;case Ke:return i*t*4/s.components*s.byteLength;case qc:return i*t*4/s.components*s.byteLength;case _a:case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ma:case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cl:case Il:return Math.max(i,16)*Math.max(t,8)/4;case Rl:case Pl:return Math.max(i,8)*Math.max(t,8)/2;case Ll:case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case zl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wa:case Zl:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xu:case Kl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case jl:case Ql:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dy(i){switch(i){case Yn:case lu:return{byteLength:1,components:1};case cr:case cu:case fr:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case Ui:case Hc:case $n:return{byteLength:4,components:1};case hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function uy(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,d,f=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return u?new OffscreenCanvas(T,_):Aa("canvas")}function x(T,_,O){let Y=1,J=Rt(T);if((J.width>O||J.height>O)&&(Y=O/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let $=Math.floor(Y*J.width),bt=Math.floor(Y*J.height);d===void 0&&(d=g($,bt));let rt=_?g($,bt):d;return rt.width=$,rt.height=bt,rt.getContext("2d").drawImage(T,0,0,$,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+bt+")."),rt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,_,O,Y,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=_;if(_===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),_===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),_===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),_===i.RGBA){let bt=J?no:jt.getTransfer(Y);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=bt===oe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function b(T,_){let O;return T?_===null||_===Ui||_===Ss?O=i.DEPTH24_STENCIL8:_===$n?O=i.DEPTH32F_STENCIL8:_===cr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ui||_===Ss?O=i.DEPTH_COMPONENT24:_===$n?O=i.DEPTH_COMPONENT32F:_===cr&&(O=i.DEPTH_COMPONENT16),O}function I(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==je&&T.minFilter!==hn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function E(T){let _=T.target;_.removeEventListener("dispose",E),P(_),_.isVideoTexture&&h.delete(_)}function R(T){let _=T.target;_.removeEventListener("dispose",R),v(_)}function P(T){let _=n.get(T);if(_.__webglInit===void 0)return;let O=T.source,Y=f.get(O);if(Y){let J=Y[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(T),Object.keys(Y).length===0&&f.delete(O)}n.remove(T)}function M(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let O=T.source,Y=f.get(O);delete Y[_.__cacheKey],a.memory.textures--}function v(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let J=0;J<_.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=T.textures;for(let Y=0,J=O.length;Y<J;Y++){let $=n.get(O[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(T)}let A=0;function k(){A=0}function F(){let T=A;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),A+=1,T}function B(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function q(T,_){let O=n.get(T);if(T.isVideoTexture&&Ct(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){let Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,T,_);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function H(T,_){let O=n.get(T);if(T.version>0&&O.__version!==T.version){X(O,T,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function K(T,_){let O=n.get(T);if(T.version>0&&O.__version!==T.version){X(O,T,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function W(T,_){let O=n.get(T);if(T.version>0&&O.__version!==T.version){tt(O,T,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let it={[lr]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[Al]:i.MIRRORED_REPEAT},dt={[je]:i.NEAREST,[dp]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[No]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},Tt={[mp]:i.NEVER,[bp]:i.ALWAYS,[gp]:i.LESS,[vu]:i.LEQUAL,[xp]:i.EQUAL,[_p]:i.GEQUAL,[yp]:i.GREATER,[vp]:i.NOTEQUAL};function Ht(T,_){if(_.type===$n&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===hn||_.magFilter===No||_.magFilter===Xr||_.magFilter===Li||_.minFilter===hn||_.minFilter===No||_.minFilter===Xr||_.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,it[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,it[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,it[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,dt[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,dt[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Tt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===je||_.minFilter!==Xr&&_.minFilter!==Li||_.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ce(T,_){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",E));let Y=_.source,J=f.get(Y);J===void 0&&(J={},f.set(Y,J));let $=B(_);if($!==T.__cacheKey){J[$]===void 0&&(J[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[$].usedTimes++;let bt=J[T.__cacheKey];bt!==void 0&&(J[T.__cacheKey].usedTimes--,bt.usedTimes===0&&M(_)),T.__cacheKey=$,T.__webglTexture=J[$].texture}return O}function X(T,_,O){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);let J=ce(T,_),$=_.source;e.bindTexture(Y,T.__webglTexture,i.TEXTURE0+O);let bt=n.get($);if($.version!==bt.__version||J===!0){e.activeTexture(i.TEXTURE0+O);let rt=jt.getPrimaries(jt.workingColorSpace),ut=_.colorSpace===ci?null:jt.getPrimaries(_.colorSpace),Jt=_.colorSpace===ci||rt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let j=x(_.image,!1,s.maxTextureSize);j=pe(_,j);let pt=r.convert(_.format,_.colorSpace),Pt=r.convert(_.type),Lt=S(_.internalFormat,pt,Pt,_.colorSpace,_.isVideoTexture);Ht(Y,_);let mt,qt=_.mipmaps,zt=_.isVideoTexture!==!0,de=bt.__version===void 0||J===!0,L=$.dataReady,nt=I(_,j);if(_.isDepthTexture)Lt=b(_.format===ws,_.type),de&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Lt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,Lt,j.width,j.height,0,pt,Pt,null));else if(_.isDataTexture)if(qt.length>0){zt&&de&&e.texStorage2D(i.TEXTURE_2D,nt,Lt,qt[0].width,qt[0].height);for(let G=0,Z=qt.length;G<Z;G++)mt=qt[G],zt?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,Pt,mt.data):e.texImage2D(i.TEXTURE_2D,G,Lt,mt.width,mt.height,0,pt,Pt,mt.data);_.generateMipmaps=!1}else zt?(de&&e.texStorage2D(i.TEXTURE_2D,nt,Lt,j.width,j.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,pt,Pt,j.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,j.width,j.height,0,pt,Pt,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){zt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Lt,qt[0].width,qt[0].height,j.depth);for(let G=0,Z=qt.length;G<Z;G++)if(mt=qt[G],_.format!==Ke)if(pt!==null)if(zt){if(L)if(_.layerUpdates.size>0){let lt=Jd(mt.width,mt.height,_.format,_.type);for(let at of _.layerUpdates){let kt=mt.data.subarray(at*lt/mt.data.BYTES_PER_ELEMENT,(at+1)*lt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,at,mt.width,mt.height,1,pt,kt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,j.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Lt,mt.width,mt.height,j.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,j.depth,pt,Pt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Lt,mt.width,mt.height,j.depth,0,pt,Pt,mt.data)}else{zt&&de&&e.texStorage2D(i.TEXTURE_2D,nt,Lt,qt[0].width,qt[0].height);for(let G=0,Z=qt.length;G<Z;G++)mt=qt[G],_.format!==Ke?pt!==null?zt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Lt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,Pt,mt.data):e.texImage2D(i.TEXTURE_2D,G,Lt,mt.width,mt.height,0,pt,Pt,mt.data)}else if(_.isDataArrayTexture)if(zt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Lt,j.width,j.height,j.depth),L)if(_.layerUpdates.size>0){let G=Jd(j.width,j.height,_.format,_.type);for(let Z of _.layerUpdates){let lt=j.data.subarray(Z*G/j.data.BYTES_PER_ELEMENT,(Z+1)*G/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,j.width,j.height,1,pt,Pt,lt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pt,Pt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,j.width,j.height,j.depth,0,pt,Pt,j.data);else if(_.isData3DTexture)zt?(de&&e.texStorage3D(i.TEXTURE_3D,nt,Lt,j.width,j.height,j.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pt,Pt,j.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,j.width,j.height,j.depth,0,pt,Pt,j.data);else if(_.isFramebufferTexture){if(de)if(zt)e.texStorage2D(i.TEXTURE_2D,nt,Lt,j.width,j.height);else{let G=j.width,Z=j.height;for(let lt=0;lt<nt;lt++)e.texImage2D(i.TEXTURE_2D,lt,Lt,G,Z,0,pt,Pt,null),G>>=1,Z>>=1}}else if(qt.length>0){if(zt&&de){let G=Rt(qt[0]);e.texStorage2D(i.TEXTURE_2D,nt,Lt,G.width,G.height)}for(let G=0,Z=qt.length;G<Z;G++)mt=qt[G],zt?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,pt,Pt,mt):e.texImage2D(i.TEXTURE_2D,G,Lt,pt,Pt,mt);_.generateMipmaps=!1}else if(zt){if(de){let G=Rt(j);e.texStorage2D(i.TEXTURE_2D,nt,Lt,G.width,G.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Pt,j)}else e.texImage2D(i.TEXTURE_2D,0,Lt,pt,Pt,j);m(_)&&p(Y),bt.__version=$.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function tt(T,_,O){if(_.image.length!==6)return;let Y=ce(T,_),J=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let $=n.get(J);if(J.version!==$.__version||Y===!0){e.activeTexture(i.TEXTURE0+O);let bt=jt.getPrimaries(jt.workingColorSpace),rt=_.colorSpace===ci?null:jt.getPrimaries(_.colorSpace),ut=_.colorSpace===ci||bt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Jt=_.isCompressedTexture||_.image[0].isCompressedTexture,j=_.image[0]&&_.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Jt&&!j?pt[Z]=x(_.image[Z],!0,s.maxCubemapSize):pt[Z]=j?_.image[Z].image:_.image[Z],pt[Z]=pe(_,pt[Z]);let Pt=pt[0],Lt=r.convert(_.format,_.colorSpace),mt=r.convert(_.type),qt=S(_.internalFormat,Lt,mt,_.colorSpace),zt=_.isVideoTexture!==!0,de=$.__version===void 0||Y===!0,L=J.dataReady,nt=I(_,Pt);Ht(i.TEXTURE_CUBE_MAP,_);let G;if(Jt){zt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,qt,Pt.width,Pt.height);for(let Z=0;Z<6;Z++){G=pt[Z].mipmaps;for(let lt=0;lt<G.length;lt++){let at=G[lt];_.format!==Ke?Lt!==null?zt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,at.width,at.height,Lt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,qt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,at.width,at.height,Lt,mt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,qt,at.width,at.height,0,Lt,mt,at.data)}}}else{if(G=_.mipmaps,zt&&de){G.length>0&&nt++;let Z=Rt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,qt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(j){zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,Lt,mt,pt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qt,pt[Z].width,pt[Z].height,0,Lt,mt,pt[Z].data);for(let lt=0;lt<G.length;lt++){let kt=G[lt].image[Z].image;zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,kt.width,kt.height,Lt,mt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,qt,kt.width,kt.height,0,Lt,mt,kt.data)}}else{zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Lt,mt,pt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qt,Lt,mt,pt[Z]);for(let lt=0;lt<G.length;lt++){let at=G[lt];zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Lt,mt,at.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,qt,Lt,mt,at.image[Z])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),$.__version=J.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function _t(T,_,O,Y,J,$){let bt=r.convert(O.format,O.colorSpace),rt=r.convert(O.type),ut=S(O.internalFormat,bt,rt,O.colorSpace),Jt=n.get(_),j=n.get(O);if(j.__renderTarget=_,!Jt.__hasExternalTextures){let pt=Math.max(1,_.width>>$),Pt=Math.max(1,_.height>>$);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,$,ut,pt,Pt,_.depth,0,bt,rt,null):e.texImage2D(J,$,ut,pt,Pt,0,bt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Xt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,j.__webglTexture,0,$t(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,j.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(T,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let Y=_.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,$=b(_.stencilBuffer,J),bt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=$t(_);Xt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,$,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,$,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,T)}else{let Y=_.textures;for(let J=0;J<Y.length;J++){let $=Y[J],bt=r.convert($.format,$.colorSpace),rt=r.convert($.type),ut=S($.internalFormat,bt,rt,$.colorSpace),Jt=$t(_);O&&Xt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,ut,_.width,_.height):Xt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,ut,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ut,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);let J=Y.__webglTexture,$=$t(_);if(_.depthTexture.format===xs)Xt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(_.depthTexture.format===ws)Xt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Nt(T){let _=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let Y=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=Y}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");It(_.__webglFramebuffer,T)}else if(O){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),st(_.__webglDepthbuffer[Y],T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),st(_.__webglDepthbuffer,T,!1);else{let Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(T,_,O){let Y=n.get(T);_!==void 0&&_t(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Nt(T)}function _e(T){let _=T.texture,O=n.get(T),Y=n.get(_);T.addEventListener("dispose",R);let J=T.textures,$=T.isWebGLCubeRenderTarget===!0,bt=J.length>1;if(bt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),$){O.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[rt]=[];for(let ut=0;ut<_.mipmaps.length;ut++)O.__webglFramebuffer[rt][ut]=i.createFramebuffer()}else O.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let rt=0;rt<_.mipmaps.length;rt++)O.__webglFramebuffer[rt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(bt)for(let rt=0,ut=J.length;rt<ut;rt++){let Jt=n.get(J[rt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Xt(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){let ut=J[rt];O.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[rt]);let Jt=r.convert(ut.format,ut.colorSpace),j=r.convert(ut.type),pt=S(ut.internalFormat,Jt,j,ut.colorSpace,T.isXRRenderTarget===!0),Pt=$t(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,pt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,O.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),st(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,_);for(let rt=0;rt<6;rt++)if(_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)_t(O.__webglFramebuffer[rt][ut],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut);else _t(O.__webglFramebuffer[rt],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let rt=0,ut=J.length;rt<ut;rt++){let Jt=J[rt],j=n.get(Jt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),Ht(i.TEXTURE_2D,Jt),_t(O.__webglFramebuffer,T,Jt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),m(Jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(rt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Ht(rt,_),_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)_t(O.__webglFramebuffer[ut],T,_,i.COLOR_ATTACHMENT0,rt,ut);else _t(O.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,rt,0);m(_)&&p(rt),e.unbindTexture()}T.depthBuffer&&Nt(T)}function Zt(T){let _=T.textures;for(let O=0,Y=_.length;O<Y;O++){let J=_[O];if(m(J)){let $=y(T),bt=n.get(J).__webglTexture;e.bindTexture($,bt),p($),e.unbindTexture()}}}let Se=[],N=[];function un(T){if(T.samples>0){if(Xt(T)===!1){let _=T.textures,O=T.width,Y=T.height,J=i.COLOR_BUFFER_BIT,$=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(T),rt=_.length>1;if(rt)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[ut]);let Jt=n.get(_[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,J,i.NEAREST),l===!0&&(Se.length=0,N.length=0,Se.push(i.COLOR_ATTACHMENT0+ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Se.push($),N.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,bt.__webglColorRenderbuffer[ut]);let Jt=n.get(_[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function $t(T){return Math.min(s.maxSamples,T.samples)}function Xt(T){let _=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ct(T){let _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function pe(T,_){let O=T.colorSpace,Y=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ls&&O!==ci&&(jt.getTransfer(O)===oe?(Y!==Ke||J!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function Rt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=Gt,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Xt}function fy(i,t){function e(n,s=ci){let r,a=jt.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===Gc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lu)return i.BYTE;if(n===cu)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===Hc)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===fr)return i.HALF_FLOAT;if(n===du)return i.ALPHA;if(n===uu)return i.RGB;if(n===Ke)return i.RGBA;if(n===fu)return i.LUMINANCE;if(n===pu)return i.LUMINANCE_ALPHA;if(n===xs)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===mu)return i.RED;if(n===$c)return i.RED_INTEGER;if(n===gu)return i.RG;if(n===Xc)return i.RG_INTEGER;if(n===qc)return i.RGBA_INTEGER;if(n===_a||n===ba||n===Ma||n===Sa)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rl||n===Cl||n===Pl||n===Il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ll||n===Dl||n===Ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ll||n===Dl)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ul)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nl||n===kl||n===Fl||n===Ol||n===zl||n===Bl||n===Vl||n===Hl||n===Gl||n===Wl||n===$l||n===Xl||n===ql||n===Yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$l)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wa||n===Zl||n===Jl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wa)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xu||n===Kl||n===jl||n===Ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var gc=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},De=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},py={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(py)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},my=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:my,fragmentShader:gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yc=class extends mi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null,x=new xc,m=e.getContextAttributes(),p=null,y=null,S=[],b=[],I=new ct,E=null,R=new Je;R.viewport=new Me;let P=new Je;P.viewport=new Me;let M=[R,P],v=new gc,A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=S[X];return tt===void 0&&(tt=new rr,S[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=S[X];return tt===void 0&&(tt=new rr,S[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=S[X];return tt===void 0&&(tt=new rr,S[X]=tt),tt.getHandSpace()};function F(X){let tt=b.indexOf(X.inputSource);if(tt===-1)return;let _t=S[tt];_t!==void 0&&(_t.update(X.inputSource,X.frame,c||a),_t.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",q);for(let X=0;X<S.length;X++){let tt=b[X];tt!==null&&(b[X]=null,S[X].disconnect(tt))}A=null,k=null,x.reset(),t.setRenderTarget(p),u=null,f=null,d=null,s=null,y=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",B),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new En(u.framebufferWidth,u.framebufferHeight,{format:Ke,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,_t=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?ws:xs,_t=m.stencil?Ss:Ui);let It={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(It),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new En(f.textureWidth,f.textureHeight,{format:Ke,type:Yn,depthTexture:new Fa(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(X){for(let tt=0;tt<X.removed.length;tt++){let _t=X.removed[tt],st=b.indexOf(_t);st>=0&&(b[st]=null,S[st].disconnect(_t))}for(let tt=0;tt<X.added.length;tt++){let _t=X.added[tt],st=b.indexOf(_t);if(st===-1){for(let Nt=0;Nt<S.length;Nt++)if(Nt>=b.length){b.push(_t),st=Nt;break}else if(b[Nt]===null){b[Nt]=_t,st=Nt;break}if(st===-1)break}let It=S[st];It&&It.connect(_t)}}let H=new C,K=new C;function W(X,tt,_t){H.setFromMatrixPosition(tt.matrixWorld),K.setFromMatrixPosition(_t.matrixWorld);let st=H.distanceTo(K),It=tt.projectionMatrix.elements,Nt=_t.projectionMatrix.elements,Gt=It[14]/(It[10]-1),_e=It[14]/(It[10]+1),Zt=(It[9]+1)/It[5],Se=(It[9]-1)/It[5],N=(It[8]-1)/It[0],un=(Nt[8]+1)/Nt[0],$t=Gt*N,Xt=Gt*un,Ct=st/(-N+un),pe=Ct*-N;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(pe),X.translateZ(Ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),It[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let Rt=Gt+Ct,T=_e+Ct,_=$t-pe,O=Xt+(st-pe),Y=Zt*_e/T*Rt,J=Se*_e/T*Rt;X.projectionMatrix.makePerspective(_,O,Y,J,Rt,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function it(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,_t=X.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(_t=x.depthFar)),v.near=P.near=R.near=tt,v.far=P.far=R.far=_t,(A!==v.near||k!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,k=v.far),R.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,v.layers.mask=R.layers.mask|P.layers.mask;let st=X.parent,It=v.cameras;it(v,st);for(let Nt=0;Nt<It.length;Nt++)it(It[Nt],st);It.length===2?W(v,R,P):v.projectionMatrix.copy(R.projectionMatrix),dt(X,v,st)};function dt(X,tt,_t){_t===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(_t.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=nc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let Tt=null;function Ht(X,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){let _t=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let st=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,st=!0);for(let Nt=0;Nt<_t.length;Nt++){let Gt=_t[Nt],_e=null;if(u!==null)_e=u.getViewport(Gt);else{let Se=d.getViewSubImage(f,Gt);_e=Se.viewport,Nt===0&&(t.setRenderTargetTextures(y,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),t.setRenderTarget(y))}let Zt=M[Nt];Zt===void 0&&(Zt=new Je,Zt.layers.enable(Nt),Zt.viewport=new Me,M[Nt]=Zt),Zt.matrix.fromArray(Gt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Gt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(_e.x,_e.y,_e.width,_e.height),Nt===0&&(v.matrix.copy(Zt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),st===!0&&v.cameras.push(Zt)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){let Nt=d.getDepthInformation(_t[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,s.renderState)}}for(let _t=0;_t<S.length;_t++){let st=b[_t],It=S[_t];st!==null&&It!==void 0&&It.update(st,tt,c||a)}Tt&&Tt(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let ce=new Su;ce.setAnimationLoop(Ht),this.setAnimationLoop=function(X){Tt=X},this.dispose=function(){}}},Ai=new Zn,xy=new ve;function yy(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Re&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Re&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),S=y.envMap,b=y.envMapRotation;S&&(m.envMap.value=S,Ai.copy(b),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(xy.makeRotationFromEuler(Ai)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Re&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vy(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let b=S.program;n.uniformBlockBinding(y,b)}function c(y,S){let b=s[y.id];b===void 0&&(g(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",m));let I=S.program;n.updateUBOMapping(y,I);let E=t.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){let S=d();y.__bindingPointIndex=S;let b=i.createBuffer(),I=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,I,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let S=s[y.id],b=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,R=b.length;E<R;E++){let P=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,v=P.length;M<v;M++){let A=P[M];if(u(A,E,M,I)===!0){let k=A.__offset,F=Array.isArray(A.value)?A.value:[A.value],B=0;for(let q=0;q<F.length;q++){let H=F[q],K=x(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,k+B,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,S,b,I){let E=y.value,R=S+"_"+b;if(I[R]===void 0)return typeof E=="number"||typeof E=="boolean"?I[R]=E:I[R]=E.clone(),!0;{let P=I[R];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return I[R]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(y){let S=y.uniforms,b=0,I=16;for(let R=0,P=S.length;R<P;R++){let M=Array.isArray(S[R])?S[R]:[S[R]];for(let v=0,A=M.length;v<A;v++){let k=M[v],F=Array.isArray(k.value)?k.value:[k.value];for(let B=0,q=F.length;B<q;B++){let H=F[B],K=x(H),W=b%I,it=W%K.boundary,dt=W+it;b+=it,dt!==0&&I-dt<K.storage&&(b+=I-dt),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=K.storage}}}let E=b%I;return E>0&&(b+=I-E),y.__size=b,y.__cache={},this}function x(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){let S=y.target;S.removeEventListener("dispose",m);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Oa=class{constructor(t={}){let{canvas:e=Sp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=ui,this.toneMappingExposure=1;let b=this,I=!1,E=0,R=0,P=null,M=-1,v=null,A=new Me,k=new Me,F=null,B=new wt(0),q=0,H=e.width,K=e.height,W=1,it=null,dt=null,Tt=new Me(0,0,H,K),Ht=new Me(0,0,H,K),ce=!1,X=new hr,tt=!1,_t=!1,st=new ve,It=new ve,Nt=new C,Gt=new Me,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function Se(){return P===null?W:1}let N=n;function un(w,D){return e.getContext(w,D)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",at,!1),N===null){let D="webgl2";if(N=un(D,w),N===null)throw un(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let $t,Xt,Ct,pe,Rt,T,_,O,Y,J,$,bt,rt,ut,Jt,j,pt,Pt,Lt,mt,qt,zt,de,L;function nt(){$t=new Ng(N),$t.init(),zt=new fy(N,$t),Xt=new Cg(N,$t,t,zt),Ct=new hy(N,$t),Xt.reverseDepthBuffer&&f&&Ct.buffers.depth.setReversed(!0),pe=new Og(N),Rt=new Kx,T=new uy(N,$t,Ct,Rt,Xt,zt,pe),_=new Ig(b),O=new Ug(b),Y=new $p(N),de=new Ag(N,Y),J=new kg(N,Y,pe,de),$=new Bg(N,J,Y,pe),Lt=new zg(N,Xt,T),j=new Pg(Rt),bt=new Jx(b,_,O,$t,Xt,de,j),rt=new yy(b,Rt),ut=new Qx,Jt=new ry($t),Pt=new Eg(b,_,O,Ct,$,u,l),pt=new ly(b,$,Xt),L=new vy(N,pe,Xt,Ct),mt=new Rg(N,$t,pe),qt=new Fg(N,$t,pe),pe.programs=bt.programs,b.capabilities=Xt,b.extensions=$t,b.properties=Rt,b.renderLists=ut,b.shadowMap=pt,b.state=Ct,b.info=pe}nt();let G=new yc(b,N);this.xr=G,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=$t.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=$t.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(H,K,!1))},this.getSize=function(w){return w.set(H,K)},this.setSize=function(w,D,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,K=D,e.width=Math.floor(w*W),e.height=Math.floor(D*W),z===!0&&(e.style.width=w+"px",e.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(H*W,K*W).floor()},this.setDrawingBufferSize=function(w,D,z){H=w,K=D,W=z,e.width=Math.floor(w*z),e.height=Math.floor(D*z),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(Tt)},this.setViewport=function(w,D,z,V){w.isVector4?Tt.set(w.x,w.y,w.z,w.w):Tt.set(w,D,z,V),Ct.viewport(A.copy(Tt).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(Ht)},this.setScissor=function(w,D,z,V){w.isVector4?Ht.set(w.x,w.y,w.z,w.w):Ht.set(w,D,z,V),Ct.scissor(k.copy(Ht).multiplyScalar(W).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(w){Ct.setScissorTest(ce=w)},this.setOpaqueSort=function(w){it=w},this.setTransparentSort=function(w){dt=w},this.getClearColor=function(w){return w.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(w=!0,D=!0,z=!0){let V=0;if(w){let U=!1;if(P!==null){let Q=P.texture.format;U=Q===qc||Q===Xc||Q===$c}if(U){let Q=P.texture.type,ot=Q===Yn||Q===Ui||Q===cr||Q===Ss||Q===Gc||Q===Wc,xt=Pt.getClearColor(),yt=Pt.getClearAlpha(),Dt=xt.r,Ft=xt.g,vt=xt.b;ot?(g[0]=Dt,g[1]=Ft,g[2]=vt,g[3]=yt,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=Dt,x[1]=Ft,x[2]=vt,x[3]=yt,N.clearBufferiv(N.COLOR,0,x))}else V|=N.COLOR_BUFFER_BIT}D&&(V|=N.DEPTH_BUFFER_BIT),z&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),Jt.dispose(),Rt.dispose(),_.dispose(),O.dispose(),$.dispose(),de.dispose(),L.dispose(),bt.dispose(),G.dispose(),G.removeEventListener("sessionstart",hh),G.removeEventListener("sessionend",dh),yi.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let w=pe.autoReset,D=pt.enabled,z=pt.autoUpdate,V=pt.needsUpdate,U=pt.type;nt(),pe.autoReset=w,pt.enabled=D,pt.autoUpdate=z,pt.needsUpdate=V,pt.type=U}function at(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function kt(w){let D=w.target;D.removeEventListener("dispose",kt),be(D)}function be(w){Be(w),Rt.remove(w)}function Be(w){let D=Rt.get(w).programs;D!==void 0&&(D.forEach(function(z){bt.releaseProgram(z)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,z,V,U,Q){D===null&&(D=_e);let ot=U.isMesh&&U.matrixWorld.determinant()<0,xt=Xu(w,D,z,V,U);Ct.setMaterial(V,ot);let yt=z.index,Dt=1;if(V.wireframe===!0){if(yt=J.getWireframeAttribute(z),yt===void 0)return;Dt=2}let Ft=z.drawRange,vt=z.attributes.position,te=Ft.start*Dt,ue=(Ft.start+Ft.count)*Dt;Q!==null&&(te=Math.max(te,Q.start*Dt),ue=Math.min(ue,(Q.start+Q.count)*Dt)),yt!==null?(te=Math.max(te,0),ue=Math.min(ue,yt.count)):vt!=null&&(te=Math.max(te,0),ue=Math.min(ue,vt.count));let me=ue-te;if(me<0||me===1/0)return;de.setup(U,V,xt,z,yt);let nn,ne=mt;if(yt!==null&&(nn=Y.get(yt),ne=qt,ne.setIndex(nn)),U.isMesh)V.wireframe===!0?(Ct.setLineWidth(V.wireframeLinewidth*Se()),ne.setMode(N.LINES)):ne.setMode(N.TRIANGLES);else if(U.isLine){let Mt=V.linewidth;Mt===void 0&&(Mt=1),Ct.setLineWidth(Mt*Se()),U.isLineSegments?ne.setMode(N.LINES):U.isLineLoop?ne.setMode(N.LINE_LOOP):ne.setMode(N.LINE_STRIP)}else U.isPoints?ne.setMode(N.POINTS):U.isSprite&&ne.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ne.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))ne.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Mt=U._multiDrawStarts,Fn=U._multiDrawCounts,ie=U._multiDrawCount,vn=yt?Y.get(yt).bytesPerElement:1,zi=Rt.get(V).currentProgram.getUniforms();for(let an=0;an<ie;an++)zi.setValue(N,"_gl_DrawID",an),ne.render(Mt[an]/vn,Fn[an])}else if(U.isInstancedMesh)ne.renderInstances(te,me,U.count);else if(z.isInstancedBufferGeometry){let Mt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Fn=Math.min(z.instanceCount,Mt);ne.renderInstances(te,me,Fn)}else ne.render(te,me)};function se(w,D,z){w.transparent===!0&&w.side===Tn&&w.forceSinglePass===!1?(w.side=Re,w.needsUpdate=!0,_r(w,D,z),w.side=pi,w.needsUpdate=!0,_r(w,D,z),w.side=Tn):_r(w,D,z)}this.compile=function(w,D,z=null){z===null&&(z=w),p=Jt.get(z),p.init(D),S.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==z&&w.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let V=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let Q=U.material;if(Q)if(Array.isArray(Q))for(let ot=0;ot<Q.length;ot++){let xt=Q[ot];se(xt,z,U),V.add(xt)}else se(Q,z,U),V.add(Q)}),S.pop(),p=null,V},this.compileAsync=function(w,D,z=null){let V=this.compile(w,D,z);return new Promise(U=>{function Q(){if(V.forEach(function(ot){Rt.get(ot).currentProgram.isReady()&&V.delete(ot)}),V.size===0){U(w);return}setTimeout(Q,10)}$t.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let yn=null;function kn(w){yn&&yn(w)}function hh(){yi.stop()}function dh(){yi.start()}let yi=new Su;yi.setAnimationLoop(kn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(w){yn=w,G.setAnimationLoop(w),w===null?yi.stop():yi.start()},G.addEventListener("sessionstart",hh),G.addEventListener("sessionend",dh),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,D,P),p=Jt.get(w,S.length),p.init(D),S.push(p),It.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(It),_t=this.localClippingEnabled,tt=j.init(this.clippingPlanes,_t),m=ut.get(w,y.length),m.init(),y.push(m),G.enabled===!0&&G.isPresenting===!0){let Q=b.xr.getDepthSensingMesh();Q!==null&&xo(Q,D,-1/0,b.sortObjects)}xo(w,D,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(it,dt),Zt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Zt&&Pt.addToRenderList(m,w),this.info.render.frame++,tt===!0&&j.beginShadows();let z=p.state.shadowsArray;pt.render(z,w,D),tt===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,U=m.transmissive;if(p.setupLights(),D.isArrayCamera){let Q=D.cameras;if(U.length>0)for(let ot=0,xt=Q.length;ot<xt;ot++){let yt=Q[ot];fh(V,U,w,yt)}Zt&&Pt.render(w);for(let ot=0,xt=Q.length;ot<xt;ot++){let yt=Q[ot];uh(m,w,yt,yt.viewport)}}else U.length>0&&fh(V,U,w,D),Zt&&Pt.render(w),uh(m,w,D);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(b,w,D),de.resetDefaultState(),M=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],tt===!0&&j.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function xo(w,D,z,V){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){V&&Gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(It);let ot=$.update(w),xt=w.material;xt.visible&&m.push(w,ot,xt,z,Gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){let ot=$.update(w),xt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Gt.copy(w.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Gt.copy(ot.boundingSphere.center)),Gt.applyMatrix4(w.matrixWorld).applyMatrix4(It)),Array.isArray(xt)){let yt=ot.groups;for(let Dt=0,Ft=yt.length;Dt<Ft;Dt++){let vt=yt[Dt],te=xt[vt.materialIndex];te&&te.visible&&m.push(w,ot,te,z,Gt.z,vt)}}else xt.visible&&m.push(w,ot,xt,z,Gt.z,null)}}let Q=w.children;for(let ot=0,xt=Q.length;ot<xt;ot++)xo(Q[ot],D,z,V)}function uh(w,D,z,V){let U=w.opaque,Q=w.transmissive,ot=w.transparent;p.setupLightsView(z),tt===!0&&j.setGlobalState(b.clippingPlanes,z),V&&Ct.viewport(A.copy(V)),U.length>0&&vr(U,D,z),Q.length>0&&vr(Q,D,z),ot.length>0&&vr(ot,D,z),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function fh(w,D,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new En(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?fr:Yn,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let Q=p.state.transmissionRenderTarget[V.id],ot=V.viewport||A;Q.setSize(ot.z,ot.w);let xt=b.getRenderTarget();b.setRenderTarget(Q),b.getClearColor(B),q=b.getClearAlpha(),q<1&&b.setClearColor(16777215,.5),b.clear(),Zt&&Pt.render(z);let yt=b.toneMapping;b.toneMapping=ui;let Dt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),tt===!0&&j.setGlobalState(b.clippingPlanes,V),vr(w,z,V),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let vt=0,te=D.length;vt<te;vt++){let ue=D[vt],me=ue.object,nn=ue.geometry,ne=ue.material,Mt=ue.group;if(ne.side===Tn&&me.layers.test(V.layers)){let Fn=ne.side;ne.side=Re,ne.needsUpdate=!0,ph(me,z,V,nn,ne,Mt),ne.side=Fn,ne.needsUpdate=!0,Ft=!0}}Ft===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q))}b.setRenderTarget(xt),b.setClearColor(B,q),Dt!==void 0&&(V.viewport=Dt),b.toneMapping=yt}function vr(w,D,z){let V=D.isScene===!0?D.overrideMaterial:null;for(let U=0,Q=w.length;U<Q;U++){let ot=w[U],xt=ot.object,yt=ot.geometry,Dt=V===null?ot.material:V,Ft=ot.group;xt.layers.test(z.layers)&&ph(xt,D,z,yt,Dt,Ft)}}function ph(w,D,z,V,U,Q){w.onBeforeRender(b,D,z,V,U,Q),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(b,D,z,V,w,Q),U.transparent===!0&&U.side===Tn&&U.forceSinglePass===!1?(U.side=Re,U.needsUpdate=!0,b.renderBufferDirect(z,D,V,U,w,Q),U.side=pi,U.needsUpdate=!0,b.renderBufferDirect(z,D,V,U,w,Q),U.side=Tn):b.renderBufferDirect(z,D,V,U,w,Q),w.onAfterRender(b,D,z,V,U,Q)}function _r(w,D,z){D.isScene!==!0&&(D=_e);let V=Rt.get(w),U=p.state.lights,Q=p.state.shadowsArray,ot=U.state.version,xt=bt.getParameters(w,U.state,Q,D,z),yt=bt.getProgramCacheKey(xt),Dt=V.programs;V.environment=w.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(w.isMeshStandardMaterial?O:_).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Dt===void 0&&(w.addEventListener("dispose",kt),Dt=new Map,V.programs=Dt);let Ft=Dt.get(yt);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===ot)return gh(w,xt),Ft}else xt.uniforms=bt.getUniforms(w),w.onBeforeCompile(xt,b),Ft=bt.acquireProgram(xt,yt),Dt.set(yt,Ft),V.uniforms=xt.uniforms;let vt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(vt.clippingPlanes=j.uniform),gh(w,xt),V.needsLights=Yu(w),V.lightsStateVersion=ot,V.needsLights&&(vt.ambientLightColor.value=U.state.ambient,vt.lightProbe.value=U.state.probe,vt.directionalLights.value=U.state.directional,vt.directionalLightShadows.value=U.state.directionalShadow,vt.spotLights.value=U.state.spot,vt.spotLightShadows.value=U.state.spotShadow,vt.rectAreaLights.value=U.state.rectArea,vt.ltc_1.value=U.state.rectAreaLTC1,vt.ltc_2.value=U.state.rectAreaLTC2,vt.pointLights.value=U.state.point,vt.pointLightShadows.value=U.state.pointShadow,vt.hemisphereLights.value=U.state.hemi,vt.directionalShadowMap.value=U.state.directionalShadowMap,vt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,vt.spotShadowMap.value=U.state.spotShadowMap,vt.spotLightMatrix.value=U.state.spotLightMatrix,vt.spotLightMap.value=U.state.spotLightMap,vt.pointShadowMap.value=U.state.pointShadowMap,vt.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function mh(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=vs.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function gh(w,D){let z=Rt.get(w);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function Xu(w,D,z,V,U){D.isScene!==!0&&(D=_e),T.resetTextureUnits();let Q=D.fog,ot=V.isMeshStandardMaterial?D.environment:null,xt=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ls,yt=(V.isMeshStandardMaterial?O:_).get(V.envMap||ot),Dt=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ft=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),vt=!!z.morphAttributes.position,te=!!z.morphAttributes.normal,ue=!!z.morphAttributes.color,me=ui;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(me=b.toneMapping);let nn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ne=nn!==void 0?nn.length:0,Mt=Rt.get(V),Fn=p.state.lights;if(tt===!0&&(_t===!0||w!==v)){let fn=w===v&&V.id===M;j.setState(V,w,fn)}let ie=!1;V.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Fn.state.version||Mt.outputColorSpace!==xt||U.isBatchedMesh&&Mt.batching===!1||!U.isBatchedMesh&&Mt.batching===!0||U.isBatchedMesh&&Mt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Mt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Mt.instancing===!1||!U.isInstancedMesh&&Mt.instancing===!0||U.isSkinnedMesh&&Mt.skinning===!1||!U.isSkinnedMesh&&Mt.skinning===!0||U.isInstancedMesh&&Mt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Mt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Mt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Mt.instancingMorph===!1&&U.morphTexture!==null||Mt.envMap!==yt||V.fog===!0&&Mt.fog!==Q||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==j.numPlanes||Mt.numIntersection!==j.numIntersection)||Mt.vertexAlphas!==Dt||Mt.vertexTangents!==Ft||Mt.morphTargets!==vt||Mt.morphNormals!==te||Mt.morphColors!==ue||Mt.toneMapping!==me||Mt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Mt.__version=V.version);let vn=Mt.currentProgram;ie===!0&&(vn=_r(V,D,U));let zi=!1,an=!1,Vs=!1,ge=vn.getUniforms(),Cn=Mt.uniforms;if(Ct.useProgram(vn.program)&&(zi=!0,an=!0,Vs=!0),V.id!==M&&(M=V.id,an=!0),zi||v!==w){Ct.buffers.depth.getReversed()?(st.copy(w.projectionMatrix),Tp(st),Ep(st),ge.setValue(N,"projectionMatrix",st)):ge.setValue(N,"projectionMatrix",w.projectionMatrix),ge.setValue(N,"viewMatrix",w.matrixWorldInverse);let Qn=ge.map.cameraPosition;Qn!==void 0&&Qn.setValue(N,Nt.setFromMatrixPosition(w.matrixWorld)),Xt.logarithmicDepthBuffer&&ge.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ge.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,an=!0,Vs=!0)}if(U.isSkinnedMesh){ge.setOptional(N,U,"bindMatrix"),ge.setOptional(N,U,"bindMatrixInverse");let fn=U.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),ge.setValue(N,"boneTexture",fn.boneTexture,T))}U.isBatchedMesh&&(ge.setOptional(N,U,"batchingTexture"),ge.setValue(N,"batchingTexture",U._matricesTexture,T),ge.setOptional(N,U,"batchingIdTexture"),ge.setValue(N,"batchingIdTexture",U._indirectTexture,T),ge.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ge.setValue(N,"batchingColorTexture",U._colorsTexture,T));let Hs=z.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0)&&Lt.update(U,z,vn),(an||Mt.receiveShadow!==U.receiveShadow)&&(Mt.receiveShadow=U.receiveShadow,ge.setValue(N,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Cn.envMap.value=yt,Cn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(Cn.envMapIntensity.value=D.environmentIntensity),an&&(ge.setValue(N,"toneMappingExposure",b.toneMappingExposure),Mt.needsLights&&qu(Cn,Vs),Q&&V.fog===!0&&rt.refreshFogUniforms(Cn,Q),rt.refreshMaterialUniforms(Cn,V,W,K,p.state.transmissionRenderTarget[w.id]),vs.upload(N,mh(Mt),Cn,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(vs.upload(N,mh(Mt),Cn,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ge.setValue(N,"center",U.center),ge.setValue(N,"modelViewMatrix",U.modelViewMatrix),ge.setValue(N,"normalMatrix",U.normalMatrix),ge.setValue(N,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let fn=V.uniformsGroups;for(let Qn=0,ti=fn.length;Qn<ti;Qn++){let xh=fn[Qn];L.update(xh,vn),L.bind(xh,vn)}}return vn}function qu(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function Yu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,D,z){Rt.get(w.texture).__webglTexture=D,Rt.get(w.depthTexture).__webglTexture=z;let V=Rt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){let z=Rt.get(w);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,z=0){P=w,E=D,R=z;let V=!0,U=null,Q=!1,ot=!1;if(w){let yt=Rt.get(w);if(yt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(yt.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(yt.__hasExternalTextures)T.rebindTextures(w,Rt.get(w.texture).__webglTexture,Rt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let vt=w.depthTexture;if(yt.__boundDepthTexture!==vt){if(vt!==null&&Rt.has(vt)&&(w.width!==vt.image.width||w.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}let Dt=w.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ot=!0);let Ft=Rt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[D])?U=Ft[D][z]:U=Ft[D],Q=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?U=Rt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?U=Ft[z]:U=Ft,A.copy(w.viewport),k.copy(w.scissor),F=w.scissorTest}else A.copy(Tt).multiplyScalar(W).floor(),k.copy(Ht).multiplyScalar(W).floor(),F=ce;if(Ct.bindFramebuffer(N.FRAMEBUFFER,U)&&V&&Ct.drawBuffers(w,U),Ct.viewport(A),Ct.scissor(k),Ct.setScissorTest(F),Q){let yt=Rt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,yt.__webglTexture,z)}else if(ot){let yt=Rt.get(w.texture),Dt=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.__webglTexture,z||0,Dt)}M=-1},this.readRenderTargetPixels=function(w,D,z,V,U,Q,ot){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ot!==void 0&&(xt=xt[ot]),xt){Ct.bindFramebuffer(N.FRAMEBUFFER,xt);try{let yt=w.texture,Dt=yt.format,Ft=yt.type;if(!Xt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-V&&z>=0&&z<=w.height-U&&N.readPixels(D,z,V,U,zt.convert(Dt),zt.convert(Ft),Q)}finally{let yt=P!==null?Rt.get(P).__webglFramebuffer:null;Ct.bindFramebuffer(N.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(w,D,z,V,U,Q,ot){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ot!==void 0&&(xt=xt[ot]),xt){let yt=w.texture,Dt=yt.format,Ft=yt.type;if(!Xt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-V&&z>=0&&z<=w.height-U){Ct.bindFramebuffer(N.FRAMEBUFFER,xt);let vt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,vt),N.bufferData(N.PIXEL_PACK_BUFFER,Q.byteLength,N.STREAM_READ),N.readPixels(D,z,V,U,zt.convert(Dt),zt.convert(Ft),0);let te=P!==null?Rt.get(P).__webglFramebuffer:null;Ct.bindFramebuffer(N.FRAMEBUFFER,te);let ue=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await wp(N,ue,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,vt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Q),N.deleteBuffer(vt),N.deleteSync(ue),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,D=null,z=0){w.isTexture!==!0&&(ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);let V=Math.pow(2,-z),U=Math.floor(w.image.width*V),Q=Math.floor(w.image.height*V),ot=D!==null?D.x:0,xt=D!==null?D.y:0;T.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,ot,xt,U,Q),Ct.unbindTexture()},this.copyTextureToTexture=function(w,D,z=null,V=null,U=0){w.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],D=arguments[2],U=arguments[3]||0,z=null);let Q,ot,xt,yt,Dt,Ft,vt,te,ue,me=w.isCompressedTexture?w.mipmaps[U]:w.image;z!==null?(Q=z.max.x-z.min.x,ot=z.max.y-z.min.y,xt=z.isBox3?z.max.z-z.min.z:1,yt=z.min.x,Dt=z.min.y,Ft=z.isBox3?z.min.z:0):(Q=me.width,ot=me.height,xt=me.depth||1,yt=0,Dt=0,Ft=0),V!==null?(vt=V.x,te=V.y,ue=V.z):(vt=0,te=0,ue=0);let nn=zt.convert(D.format),ne=zt.convert(D.type),Mt;D.isData3DTexture?(T.setTexture3D(D,0),Mt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),Mt=N.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),Mt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let Fn=N.getParameter(N.UNPACK_ROW_LENGTH),ie=N.getParameter(N.UNPACK_IMAGE_HEIGHT),vn=N.getParameter(N.UNPACK_SKIP_PIXELS),zi=N.getParameter(N.UNPACK_SKIP_ROWS),an=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,me.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,me.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,yt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Dt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ft);let Vs=w.isDataArrayTexture||w.isData3DTexture,ge=D.isDataArrayTexture||D.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Cn=Rt.get(w),Hs=Rt.get(D),fn=Rt.get(Cn.__renderTarget),Qn=Rt.get(Hs.__renderTarget);Ct.bindFramebuffer(N.READ_FRAMEBUFFER,fn.__webglFramebuffer),Ct.bindFramebuffer(N.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ti=0;ti<xt;ti++)Vs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rt.get(w).__webglTexture,U,Ft+ti),w.isDepthTexture?(ge&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rt.get(D).__webglTexture,U,ue+ti),N.blitFramebuffer(yt,Dt,Q,ot,vt,te,Q,ot,N.DEPTH_BUFFER_BIT,N.NEAREST)):ge?N.copyTexSubImage3D(Mt,U,vt,te,ue+ti,yt,Dt,Q,ot):N.copyTexSubImage2D(Mt,U,vt,te,ue+ti,yt,Dt,Q,ot);Ct.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ge?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Mt,U,vt,te,ue,Q,ot,xt,nn,ne,me.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Mt,U,vt,te,ue,Q,ot,xt,nn,me.data):N.texSubImage3D(Mt,U,vt,te,ue,Q,ot,xt,nn,ne,me):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,vt,te,Q,ot,nn,ne,me.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,vt,te,me.width,me.height,nn,me.data):N.texSubImage2D(N.TEXTURE_2D,U,vt,te,Q,ot,nn,ne,me);N.pixelStorei(N.UNPACK_ROW_LENGTH,Fn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ie),N.pixelStorei(N.UNPACK_SKIP_PIXELS,vn),N.pixelStorei(N.UNPACK_SKIP_ROWS,zi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,an),U===0&&D.generateMipmaps&&N.generateMipmap(Mt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(w,D,z=null,V=null,U=0){return w.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,w=arguments[2],D=arguments[3],U=arguments[4]||0),ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,D,z,V,U)},this.initRenderTarget=function(w){Rt.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Ct.unbindTexture()},this.resetState=function(){E=0,R=0,P=null,Ct.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var za=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rs=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},vc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ec,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qe=new C,Ba=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cs=class extends Jn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ds,tr=new C,us=new C,fs=new C,ps=new ct,er=new ct,Ru=new ve,fa=new C,nr=new C,pa=new C,Kd=new ct,dl=new ct,jd=new ct,dr=class extends Fe{constructor(t=new Cs){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new Qe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vc(e,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new Ba(n,3,0,!1)),ds.setAttribute("uv",new Ba(n,2,3,!1))}this.geometry=ds,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),Ru.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-fs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ma(fa.set(-.5,-.5,0),fs,a,us,s,r),ma(nr.set(.5,-.5,0),fs,a,us,s,r),ma(pa.set(.5,.5,0),fs,a,us,s,r),Kd.set(0,0),dl.set(1,0),jd.set(1,1);let o=t.ray.intersectTriangle(fa,nr,pa,!1,tr);if(o===null&&(ma(nr.set(-.5,.5,0),fs,a,us,s,r),dl.set(0,1),o=t.ray.intersectTriangle(fa,pa,nr,!1,tr),o===null))return;let l=t.ray.origin.distanceTo(tr);l<t.near||l>t.far||e.push({distance:l,point:tr.clone(),uv:hi.getInterpolation(tr,fa,nr,pa,Kd,dl,jd,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ma(i,t,e,n,s,r){ps.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(er.x=r*ps.x-s*ps.y,er.y=s*ps.x+r*ps.y):er.copy(ps),i.copy(t),i.x+=er.x,i.y+=er.y,i.applyMatrix4(Ru)}var Va=class extends sn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=je,h=je,d,f){super(null,a,o,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _c=class extends Jn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qd=new ve,bc=new Pa,ga=new Ts,xa=new C,Ha=class extends Fe{constructor(t=new Qe,e=new _c){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,t.ray.intersectsSphere(ga)===!1)return;Qd.copy(s).invert(),bc.copy(t.ray).applyMatrix4(Qd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let g=f,x=u;g<x;g++){let m=c.getX(g);xa.fromBufferAttribute(d,m),tu(xa,m,l,s,t,e,this)}}else{let f=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let g=f,x=u;g<x;g++)xa.fromBufferAttribute(d,g),tu(xa,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function tu(i,t,e,n,s,r,a){let o=bc.distanceSqToPoint(i);if(o<e){let l=new C;bc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ps=class extends sn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,u=(a-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ct:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],a=[],o=new C,l=new ve;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ke(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,g))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(ke(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ur=class extends gn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Mc=class extends ur{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Zc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,u*=h,s(a,o,f,u)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ya=new C,ul=new Zc,fl=new Zc,pl=new Zc,Sc=class extends gn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ya.subVectors(s[0],s[1]).add(s[0]),c=ya);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ya.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ya),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ul.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,x,m),fl.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,x,m),pl.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ul.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),fl.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),pl.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(ul.calc(l),fl.calc(l),pl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function eu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function _y(i,t){let e=1-i;return e*e*t}function by(i,t){return 2*(1-i)*i*t}function My(i,t){return i*i*t}function ar(i,t,e,n){return _y(i,t)+by(i,e)+My(i,n)}function Sy(i,t){let e=1-i;return e*e*e*t}function wy(i,t){let e=1-i;return 3*e*e*i*t}function Ty(i,t){return 3*(1-i)*i*i*t}function Ey(i,t){return i*i*i*t}function or(i,t,e,n,s){return Sy(i,t)+wy(i,e)+Ty(i,n)+Ey(i,s)}var Ga=class extends gn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(t,s.x,r.x,a.x,o.x),or(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wc=class extends gn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(t,s.x,r.x,a.x,o.x),or(t,s.y,r.y,a.y,o.y),or(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wa=class extends gn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tc=class extends gn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends gn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ar(t,s.x,r.x,a.x),ar(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ec=class extends gn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ar(t,s.x,r.x,a.x),ar(t,s.y,r.y,a.y),ar(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xa=class extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(eu(o,l.x,c.x,h.x,d.x),eu(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},nu=Object.freeze({__proto__:null,ArcCurve:Mc,CatmullRomCurve3:Sc,CubicBezierCurve:Ga,CubicBezierCurve3:wc,EllipseCurve:ur,LineCurve:Wa,LineCurve3:Tc,QuadraticBezierCurve:$a,QuadraticBezierCurve3:Ec,SplineCurve:Xa}),Ac=class extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new nu[s.type]().fromJSON(s))}return this}},Rc=class extends Ac{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Wa(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new $a(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ga(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Xa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new ur(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Cc=class i extends Qe{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ke(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new C,f=new ct,u=new C,g=new C,x=new C,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,u.x=p*1,u.y=-m,u.z=p*0,x.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),l.push(u.x,u.y,u.z),x.copy(g)}for(let y=0;y<=e;y++){let S=n+y*h*s,b=Math.sin(S),I=Math.cos(S);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*b,d.y=t[E].y,d.z=t[E].x*I,a.push(d.x,d.y,d.z),f.x=y/e,f.y=E/(t.length-1),o.push(f.x,f.y);let R=l[3*E+0]*b,P=l[3*E+1],M=l[3*E+0]*I;c.push(R,P,M)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){let b=S+y*t.length,I=b,E=b+t.length,R=b+t.length+1,P=b+1;r.push(I,E,P),r.push(R,P,E)}this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("uv",new fe(o,2)),this.setAttribute("normal",new fe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Dn=class i extends Cc{constructor(t=1,e=1,n=4,s=8){let r=new Rc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var Ue=class i extends Qe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],u=[],g=0,x=[],m=n/2,p=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(u,2));function y(){let b=new C,I=new C,E=0,R=(e-t)/n;for(let P=0;P<=r;P++){let M=[],v=P/r,A=v*(e-t)+t;for(let k=0;k<=s;k++){let F=k/s,B=F*l+o,q=Math.sin(B),H=Math.cos(B);I.x=A*q,I.y=-v*n+m,I.z=A*H,d.push(I.x,I.y,I.z),b.set(q,R,H).normalize(),f.push(b.x,b.y,b.z),u.push(F,1-v),M.push(g++)}x.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){let v=x[M][P],A=x[M+1][P],k=x[M+1][P+1],F=x[M][P+1];(t>0||M!==0)&&(h.push(v,A,F),E+=3),(e>0||M!==r-1)&&(h.push(A,k,F),E+=3)}c.addGroup(p,E,0),p+=E}function S(b){let I=g,E=new ct,R=new C,P=0,M=b===!0?t:e,v=b===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*v,0),f.push(0,v,0),u.push(.5,.5),g++;let A=g;for(let k=0;k<=s;k++){let B=k/s*l+o,q=Math.cos(B),H=Math.sin(B);R.x=M*H,R.y=m*v,R.z=M*q,d.push(R.x,R.y,R.z),f.push(0,v,0),E.x=q*.5+.5,E.y=H*.5*v+.5,u.push(E.x,E.y),g++}for(let k=0;k<s;k++){let F=I+k,B=A+k;b===!0?h.push(B,B+1,F):h.push(B+1,B,F),P+=3}c.addGroup(p,P,b===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Kn=class i extends Ue{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qa=class i extends Qe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let S=new C,b=new C,I=new C;for(let E=0;E<e.length;E+=3)u(e[E+0],S),u(e[E+1],b),u(e[E+2],I),l(S,b,I,y)}function l(y,S,b,I){let E=I+1,R=[];for(let P=0;P<=E;P++){R[P]=[];let M=y.clone().lerp(b,P/E),v=S.clone().lerp(b,P/E),A=E-P;for(let k=0;k<=A;k++)k===0&&P===E?R[P][k]=M:R[P][k]=M.clone().lerp(v,k/A)}for(let P=0;P<E;P++)for(let M=0;M<2*(E-P)-1;M++){let v=Math.floor(M/2);M%2===0?(f(R[P][v+1]),f(R[P+1][v]),f(R[P][v])):(f(R[P][v+1]),f(R[P+1][v+1]),f(R[P+1][v]))}}function c(y){let S=new C;for(let b=0;b<r.length;b+=3)S.x=r[b+0],S.y=r[b+1],S.z=r[b+2],S.normalize().multiplyScalar(y),r[b+0]=S.x,r[b+1]=S.y,r[b+2]=S.z}function h(){let y=new C;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let b=m(y)/2/Math.PI+.5,I=p(y)/Math.PI+.5;a.push(b,1-I)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){let S=a[y+0],b=a[y+2],I=a[y+4],E=Math.max(S,b,I),R=Math.min(S,b,I);E>.9&&R<.1&&(S<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),I<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function u(y,S){let b=y*3;S.x=t[b+0],S.y=t[b+1],S.z=t[b+2]}function g(){let y=new C,S=new C,b=new C,I=new C,E=new ct,R=new ct,P=new ct;for(let M=0,v=0;M<r.length;M+=9,v+=6){y.set(r[M+0],r[M+1],r[M+2]),S.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),E.set(a[v+0],a[v+1]),R.set(a[v+2],a[v+3]),P.set(a[v+4],a[v+5]),I.copy(y).add(S).add(b).divideScalar(3);let A=m(I);x(E,v+0,y,A),x(R,v+2,S,A),x(P,v+4,b,A)}}function x(y,S,b,I){I<0&&y.x===1&&(a[S]=y.x-1),b.x===0&&b.z===0&&(a[S]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Ya=class i extends qa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Za=class i extends qa{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var en=class i extends Qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new C,f=new C,u=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],S=p/n,b=0;p===0&&a===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let I=0;I<=e;I++){let E=I/e;d.x=-t*Math.cos(s+E*r)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(s+E*r)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(E+b,1-S),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let S=h[p][y+1],b=h[p][y],I=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&u.push(S,b,E),(p!==n-1||l<Math.PI)&&u.push(b,I,E)}this.setIndex(u),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ja=class extends Jn{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new wt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function va(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ay(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Is=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pc=class extends Is{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nd,endingEnd:nd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case id:r=t,o=2*e-n;break;case sd:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case id:a=t,l=2*n-e;break;case sd:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,S=(-1-u)*m+(1.5+u)*x+.5*g,b=u*m-u*x;for(let I=0;I!==o;++I)r[I]=p*a[h+I]+y*a[c+I]+S*a[l+I]+b*a[d+I];return r}},Ic=class extends Is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},Lc=class extends Is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=va(e,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:va(t.times,Array),values:va(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ta:e=this.InterpolantFactoryMethodDiscrete;break;case tc:e=this.InterpolantFactoryMethodLinear;break;case ko:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return tc;case this.InterpolantFactoryMethodSmooth:return ko}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Ay(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ko,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,f=d-n,u=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[f+g]||x!==e[u+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=tc;var ki=class extends Rn{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Ta;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Dc=class extends Rn{};Dc.prototype.ValueTypeName="color";var Uc=class extends Rn{};Uc.prototype.ValueTypeName="number";var Nc=class extends Is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)An.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ka=class extends Rn{InterpolantFactoryMethodLinear(t){return new Nc(this.times,this.values,this.getValueSize(),t)}};Ka.prototype.ValueTypeName="quaternion";Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Ta;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends Rn{};kc.prototype.ValueTypeName="vector";var Fc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],g=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null}}},Ry=new Fc,Oc=class{constructor(t){this.manager=t!==void 0?t:Ry,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Oc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ja=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Qa=class extends ja{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ml=new ve,iu=new C,su=new C,zc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(iu),su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(su),e.updateMatrixWorld(),ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Bc=class extends zc{constructor(){super(new As(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},to=class extends ja{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Bc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Jc="\\[\\]\\.:\\/",Cy=new RegExp("["+Jc+"]","g"),Kc="[^"+Jc+"]",Py="[^"+Jc.replace("\\.","")+"]",Iy=/((?:WC+[\/:])*)/.source.replace("WC",Kc),Ly=/(WCOD+)?/.source.replace("WCOD",Py),Dy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),Uy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),Ny=new RegExp("^"+Iy+Ly+Dy+Uy+"$"),ky=["material","materials","bones","map"],Vc=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cy,"")}static parseTrackName(t){let e=Ny.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ky.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=Vc;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var mr=new C;function xn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;mr.copy(t),mr[n]=0,mr.normalize();let c=.5*a/(a+o),h=1-mr.angleTo(i)/l;return Math.sign(mr[e])===1?h*c:o/(a+o)+c+c*(1-h)}var so=class extends tn{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new C,l=new C,c=new C(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,u=h.length/6,g=new C,x=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/u)){case 0:g.set(1,0,0),f[p+0]=xn(g,l,"z","y",r,n),f[p+1]=1-xn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),f[p+0]=1-xn(g,l,"z","y",r,n),f[p+1]=1-xn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),f[p+0]=1-xn(g,l,"x","z",r,t),f[p+1]=xn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),f[p+0]=1-xn(g,l,"x","z",r,t),f[p+1]=1-xn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),f[p+0]=1-xn(g,l,"x","y",r,t),f[p+1]=1-xn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),f[p+0]=xn(g,l,"x","y",r,t),f[p+1]=1-xn(g,l,"y","x",r,e);break}}};var Oi=null;function Fy(){return Oi||(Oi=new Va(new Uint8Array([70,70,90,255,150,150,170,255,255,255,255,255]),3,1,Ke),Oi.minFilter=Oi.magFilter=je,Oi.userData.shared=!0,Oi.needsUpdate=!0),Oi}var Wt=(i,t={})=>new Ja({color:new wt(i),gradientMap:Fy(),...t}),Pu=new Ce({color:1182756,side:Re});Pu.userData.shared=!0;function ze(i,t=1.08){let e=new At(i.geometry,Pu);return e.scale.setScalar(t),e.userData.outline=!0,i.add(e),i}var Oe=(i,t,e=1.08)=>ze(new At(i,t),e),Cu=["#f1c9a5","#d9a078","#a56a46","#7a4a2e","#ffdcbc"];function Iu({color:i="#3a7bff",hat:t="cap",skin:e=0,paint:n="#2f8bff"}={}){let s=new De,r=new De;s.add(r);let a=Wt(i),o=Wt("#2b2f4a"),l=Wt(Cu[e%Cu.length]),c=Oe(new Dn(.27,.3,4,10),a,1.07);r.add(c);let h=Oe(new Dn(.22,.22,4,8),o,1.07);r.add(h);let d=new De;r.add(d);let f=Oe(new en(.2,14,12),l,1.08);d.add(f);let u=Oe(new tn(.34,.15,.12),Wt("#10162a",{transparent:!0,opacity:.92}),1.04);u.position.set(0,.02,.15),d.add(u);let g=new At(new tn(.3,.08,.02),new Ce({color:new wt(n)}));g.position.set(0,.03,.215),d.add(g),(()=>{if(t==="helmet"){let v=Oe(new en(.235,14,10,0,Math.PI*2,0,Math.PI*.55),Wt(i),1.06);v.position.y=.02,d.add(v)}else if(t==="band"){let v=Oe(new Ue(.215,.215,.07,14),Wt("#ff3d71"),1.06);v.position.y=.1,d.add(v);let A=Oe(new tn(.06,.05,.3),Wt("#ff3d71"));A.position.set(.1,.1,-.2),d.add(A)}else if(t==="crown"){for(let A=0;A<5;A++){let k=Oe(new Kn(.05,.14,5),Wt("#ffd23f"),1.1),F=A/5*Math.PI*2;k.position.set(Math.cos(F)*.15,.27,Math.sin(F)*.15),d.add(k)}let v=Oe(new Ue(.17,.17,.06,14),Wt("#ffd23f"),1.06);v.position.y=.2,d.add(v)}else{let v=Oe(new en(.22,14,10,0,Math.PI*2,0,Math.PI*.5),Wt(i),1.06);v.position.y=.04,d.add(v);let A=Oe(new tn(.3,.03,.22),Wt(i),1.1);A.position.set(0,.07,.24),d.add(A)}})();let m=new De;r.add(m);let p=Oe(new Dn(.075,.28,3,8),a,1.1);p.rotation.z=Math.PI/2,p.position.set(.19,0,.1),m.add(p);let y=Oe(new en(.1,10,8),Wt("#ffe3c4"),1.1);y.position.set(ht.HAND_DX,0,.2),m.add(y);let S=new De;S.position.set(ht.HAND_DX,.02,.25),m.add(S);let b=Oe(new tn(.12,.16,.38),Wt("#3b3f5c"),1.07);S.add(b);let I=Oe(new Ue(.03,.03,.42,8),Wt("#c9ccd8"),1.12);I.rotation.x=Math.PI/2,I.position.z=.36,S.add(I);let E=Oe(new en(.1,10,8),Wt(n,{emissive:new wt(n),emissiveIntensity:.25}),1.08);E.position.set(0,.17,-.02),S.add(E);let R=Oe(new Dn(.07,.26,3,8),a,1.1);R.rotation.z=-Math.PI/2,R.position.set(-.2,-.04,.12),m.add(R);let P=new At(new en(.75,18,14),new Ce({color:7205119,transparent:!0,opacity:.22,depthWrite:!1}));P.visible=!1,s.add(P);let M=new At(new Ue(.5,.5,.01,18),new Ce({color:0,transparent:!0,opacity:.28,depthWrite:!1}));return M.position.y=.01,s.add(M),{group:s,rig:r,head:d,arm:m,gun:S,torso:c,hips:h,shield:P,hand:y,parts:{skull:f,visor:u,lens:g}}}function Lu(i,t,e,n){let s=Gr(t.e),r=Math.sin(e*2+t.side)*.012;i.head.position.set(0,s.head,0),i.torso.position.set(0,s.torso+.02,0),i.hips.position.set(0,s.torso-.38+(1-t.e)*.04,0),i.arm.position.set(0,s.hand-.02,0),i.head.rotation.y=(n.yaw||0)*.5,i.head.rotation.x=-(n.pitch||0)*.5,i.arm.rotation.y=(n.yaw||0)*.7,i.arm.rotation.x=-(n.pitch||0)*.6-n.recoil*.35,i.gun.position.z=.25-n.recoil*.12,i.rig.position.y=r,i.rig.rotation.x=(1-t.e)*.18,i.shield.visible=!!t.shield&&t.alive,i.shield.position.set(0,s.torso+.2,0),i.shield.scale.setScalar(1+Math.sin(e*6)*.03),i.gun.visible=t.disarmT<=0||!t.alive}var Us=Math.PI*2,jc=new Map;function Oy(i){if(jc.has(i))return jc.get(i);let t=[];for(let e=0;e<5;e++){let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=new Ae(`splat:${i}:${e}`),a=10+r.int(4),o=64,l=64,c=22,h=[];for(let u=0;u<a;u++){let g=u/a*Us,x=c*(.7+r.next()*.8)*(u%2?.8:1.15);h.push([o+Math.cos(g)*x,l+Math.sin(g)*x])}s.fillStyle=i,s.beginPath();for(let u=0;u<a;u++){let g=h[u],x=h[(u+1)%a],m=(g[0]+x[0])/2,p=(g[1]+x[1])/2;u===0?s.moveTo(m,p):s.quadraticCurveTo(g[0],g[1],m,p)}{let u=h[0],g=h[1];s.quadraticCurveTo(u[0],u[1],(u[0]+g[0])/2,(u[1]+g[1])/2)}s.fill(),s.fillStyle="rgba(0,0,0,.18)",s.beginPath(),s.arc(o+3,l+4,c*.5,0,Us),s.fill(),s.fillStyle="rgba(255,255,255,.35)",s.beginPath(),s.ellipse(o-7,l-9,7,4,-.6,0,Us),s.fill(),s.fillStyle=i;let d=7+r.int(6);for(let u=0;u<d;u++){let g=r.next()*Us,x=c*(1.2+r.next()*1.9),m=1.5+r.next()*3.4;s.beginPath(),s.arc(o+Math.cos(g)*x,l+Math.sin(g)*x,m,0,Us),s.fill()}let f=new Ps(n);f.anisotropy=2,f.userData.shared=!0,t.push(f)}return jc.set(i,t),t}var zy=new rn(1,1),Qc=new Map,By=(i,t)=>{let e=i+t;if(!Qc.has(e)){let n=new Ce({map:Oy(i)[t],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});n.userData.shared=!0,Qc.set(e,n)}return Qc.get(e)},ro=class{constructor(t,e=240){this.scene=t,this.max=e,this.list=[],this.rng=new Ae("decals")}clear(){for(let t of this.list)t.removeFromParent();this.list.length=0}add(t,e,n,s,r,a,o,l,c=1){let h=new At(zy,By(l,this.rng.int(5))),d=(.9+this.rng.next()*.6)*c;h.scale.set(d,d,1);let f=new C(r,a,o).normalize(),u=new An().setFromUnitVectors(new C(0,0,1),f);h.quaternion.copy(u),h.rotateZ(this.rng.next()*Us),t.updateWorldMatrix(!0,!1);let g=t.worldToLocal(new C(e+f.x*.015,n+f.y*.015,s+f.z*.015));if(h.position.copy(g),t!==this.scene){let x=new C;t.getWorldScale(x),h.scale.set(h.scale.x/x.x,h.scale.y/x.y,1),h.quaternion.premultiply(t.getWorldQuaternion(new An).invert())}t.add(h),this.list.push(h),this.list.length>this.max&&this.list.shift().removeFromParent()}},Vy=`attribute float size; attribute float alpha; attribute vec3 col; varying float vA; varying vec3 vC;
void main(){ vA = alpha; vC = col; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * 300.0 / -mv.z; gl_Position = projectionMatrix * mv; }`,Hy=`varying float vA; varying vec3 vC; uniform float soft;
void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d); if (r > 0.5) discard; float a = vA * (soft > 0.5 ? smoothstep(0.5, 0.0, r) : 1.0); gl_FragColor = vec4(vC, a); 
#include <colorspace_fragment>

}`,Ns=class{constructor(t,e=500,{soft:n=0,additive:s=!1}={}){this.max=e,this.p=[],this.soft=n;let r=new Qe;this.pos=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.col=new Float32Array(e*3),r.setAttribute("position",new fe(this.pos,3).setUsage(pr)),r.setAttribute("size",new fe(this.size,1).setUsage(pr)),r.setAttribute("alpha",new fe(this.alpha,1).setUsage(pr)),r.setAttribute("col",new fe(this.col,3).setUsage(pr)),r.setDrawRange(0,0),this.mat=new We({vertexShader:Vy,fragmentShader:Hy,transparent:!0,depthWrite:!1,uniforms:{soft:{value:n}},...s?{blending:Di}:{}}),this.pts=new Ha(r,this.mat),this.pts.frustumCulled=!1,t.add(this.pts),this.g=r}add(t,e,n,s,r,a,o,l,c,h=9){this.p.length>=this.max&&this.p.shift();let d=parseInt(o.slice(1),16);this.p.push({x:t,y:e,z:n,vx:s,vy:r,vz:a,r:(d>>16)/255,g:(d>>8&255)/255,b:(d&255)/255,size:l,life:c,max:c,grav:h})}update(t){let e=[];for(let n of this.p)n.life-=t,n.life>0&&e.push(n);this.p=e;for(let n=0;n<e.length;n++){let s=e[n];s.vy-=s.grav*t,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<.02&&s.grav>0&&(s.y=.02,s.vy=0,s.vx*=.8,s.vz*=.8),this.pos[n*3]=s.x,this.pos[n*3+1]=s.y,this.pos[n*3+2]=s.z,this.size[n]=s.size*(this.soft?1+(1-s.life/s.max):1),this.alpha[n]=Math.min(1,s.life/s.max*1.6),this.col[n*3]=s.r,this.col[n*3+1]=s.g,this.col[n*3+2]=s.b}for(let n of["position","size","alpha","col"])this.g.attributes[n].needsUpdate=!0;this.g.setDrawRange(0,e.length)}clear(){this.p.length=0,this.g.setDrawRange(0,0)}};var ao=class{constructor(t){this.r=t,this.enabled=!0,this.rt=new En(4,4,{minFilter:hn,magFilter:hn,format:Ke,samples:4}),this.mat=new We({uniforms:{t:{value:this.rt.texture},ab:{value:0},vig:{value:.25},sat:{value:1.12},tint:{value:new C(1,1,1)},flash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D t; uniform float ab, vig, sat, flash; uniform vec3 tint; varying vec2 vUv;
        void main(){ vec2 c = vUv - 0.5; float d = dot(c, c); vec2 o = c * (ab * 0.02 + d * 0.006);
          vec3 col = vec3(texture2D(t, vUv + o).r, texture2D(t, vUv).g, texture2D(t, vUv - o).b);
          float l = dot(col, vec3(0.299, 0.587, 0.114)); col = mix(vec3(l), col, sat) * tint;
          col *= 1.0 - vig * smoothstep(0.15, 0.85, d * 2.4); col = mix(col, vec3(1.0), flash);
          gl_FragColor = vec4(col, 1.0); 
#include <colorspace_fragment>

        }`,depthTest:!1,depthWrite:!1}),this.quad=new At(new rn(2,2),this.mat),this.quad.frustumCulled=!1,this.scene=new Rs,this.scene.add(this.quad),this.cam=new As(-1,1,1,-1,0,1)}setSize(t,e,n){this.rt.setSize(Math.max(2,Math.floor(t*n)),Math.max(2,Math.floor(e*n)))}render(t,e){if(!this.enabled){this.r.setRenderTarget(null),this.r.render(t,e);return}this.r.setRenderTarget(this.rt),this.r.render(t,e),this.r.setRenderTarget(null),this.r.render(this.scene,this.cam)}};var th=Math.PI*2,Du=i=>i.traverse(t=>{var n,s;t.geometry&&!t.geometry.userData.shared&&((s=(n=t.geometry).dispose)==null||s.call(n));let e=t.material;e&&(Array.isArray(e)?e:[e]).forEach(r=>{var a,o,l,c,h;(a=r.userData)!=null&&a.shared||(r.map&&!((o=r.map.userData)!=null&&o.shared)&&((c=(l=r.map).dispose)==null||c.call(l)),(h=r.dispose)==null||h.call(r))})}),ks=(i,t,e)=>{let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new Ps(n);return s.colorSpace=Ze,s},oo=class{constructor(t){this.cv=t,this.low=!1,this.renderer=new Oa({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ze,this.scene=new Rs,this.camera=new Je(62,1,.1,220),this.post=new ao(this.renderer),this.env=new De,this.dyn=new De,this.scene.add(this.env,this.dyn),this.decals=new ro(this.scene,220),this.drops=new Ns(this.scene,420),this.dust=new Ns(this.scene,160,{soft:1}),this.spark=new Ns(this.scene,160,{additive:!0}),this.reduce=!1,this.time=0,this.shake=0,this.cam={mode:"showcase",t:0,orbit:0,kill:null},this.pal={you:"#2f8bff",foe:"#ff8a1f"},this.camPos=new C(0,3,14),this.camLook=new C(0,1,0),this.fovNow=62,this.recoil=[0,0],this.ab=0,this.flash=0,this.balls=[],this.fighters=[],this.theme=null}setQuality(t){this.low=!!t,this.post.enabled=!t,this.resize()}resize(){let t=this.cv.clientWidth||2,e=this.cv.clientHeight||2,n=Math.min(devicePixelRatio||1,this.low?1:1.75);this.dpr=n,this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.post.setSize(t,e,n),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.portrait=e>t}loadTheme(t){var x;if(((x=this.theme)==null?void 0:x.id)===t)return;let e=this.theme=Bh(t),n=new Ae(`env:${t}`);this.env.children.slice().forEach(m=>{m.removeFromParent(),Du(m)}),this.scene.fog=new za(new wt(e.fog),38,105),this.scene.background=new wt(e.fog);let s=this.env,r=new At(new en(120,24,16),new We({side:Re,depthWrite:!1,fog:!1,uniforms:{a:{value:new wt(e.sky[0])},b:{value:new wt(e.sky[1])},c:{value:new wt(e.sky[2])},sd:{value:new C(...e.sunDir).normalize()},sc:{value:new wt(e.sun)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 a,b,c,sc,sd; varying vec3 vP; void main(){ float h = clamp(vP.y * 1.6 + 0.12, 0.0, 1.0); vec3 col = mix(c, b, smoothstep(0.0, 0.38, h)); col = mix(col, a, smoothstep(0.32, 1.0, h));
        float s = max(dot(normalize(vP), normalize(sd)), 0.0); col += sc * (pow(s, 600.0) * 2.0 + pow(s, 12.0) * 0.16); gl_FragColor = vec4(col, 1.0); 
#include <colorspace_fragment>
 }`}));r.renderOrder=-10,s.add(r);let a=ks(128,64,(m,p,y)=>{let S=m.createRadialGradient(p/2,y/2,2,p/2,y/2,p/2);S.addColorStop(0,"rgba(255,255,255,.9)"),S.addColorStop(1,"rgba(255,255,255,0)"),m.fillStyle=S,m.fillRect(0,0,p,y)});for(let m=0;m<9;m++){let p=new dr(new Cs({map:a,color:new wt(e.sky[1]).lerp(new wt("#ffffff"),.55),transparent:!0,opacity:.55,depthWrite:!1,fog:!1}));p.position.set(n.range(-90,90),n.range(22,55),-n.range(60,100)),p.scale.set(n.range(30,60),n.range(8,16),1),s.add(p)}s.add(new Qa(new wt(e.hemi[0]),new wt(e.hemi[1]),e.glow?1.2:1.35));let o=new to(new wt(e.sun),e.glow?1.4:2.6);o.position.set(...e.sunDir).multiplyScalar(-30).setY(14),o.position.x=-e.sunDir[0]*30,s.add(o);let l=ks(1024,1280,(m,p,y)=>{m.fillStyle=e.ground,m.fillRect(0,0,p,y);for(let S=0;S<2600;S++){m.fillStyle=`rgba(${n.next()<.5?"255,255,255":"0,0,0"},${.03+n.next()*.05})`;let b=2+n.next()*7;m.beginPath(),m.arc(n.next()*p,n.next()*y,b,0,th),m.fill()}m.strokeStyle=e.grid,m.lineWidth=8,m.strokeRect(40,40,p-80,y-80),m.lineWidth=6,m.beginPath(),m.moveTo(40,y/2),m.lineTo(p-40,y/2),m.stroke(),m.setLineDash([26,22]),[y*.2,y*.8].forEach(S=>{m.beginPath(),m.moveTo(40,S),m.lineTo(p-40,S),m.stroke()}),m.setLineDash([]),m.beginPath(),m.arc(p/2,y/2,120,0,th),m.stroke()}),c=new At(new rn(24,30),Wt("#ffffff",{map:l}));c.rotation.x=-Math.PI/2,s.add(c);let h=new At(new rn(240,240),Wt(e.ground2));h.rotation.x=-Math.PI/2,h.position.y=-.02,s.add(h);let d=ks(256,64,(m,p,y)=>{m.strokeStyle="rgba(255,255,255,.55)",m.lineWidth=2;for(let S=0;S<=p;S+=16)m.beginPath(),m.moveTo(S,0),m.lineTo(S,y),m.stroke();for(let S=0;S<=y;S+=16)m.beginPath(),m.moveTo(0,S),m.lineTo(p,S),m.stroke()});d.wrapS=d.wrapT=lr;let f=new Ce({map:d,transparent:!0,opacity:.55,side:Tn,depthWrite:!1}),u=m=>{let p=f.clone();p.map=d.clone(),p.map.repeat.set(10,1),p.map.needsUpdate=!0;let y=new At(new rn(30,3.4),p);y.rotation.y=Math.PI/2,y.position.set(m,1.7,0),s.add(y)};u(-11.5),u(11.5),[-ht.BACKSTOP-.3,ht.BACKSTOP+.3].forEach(m=>{let p=f.clone();p.map=d.clone(),p.map.repeat.set(8,1),p.map.needsUpdate=!0;let y=new At(new rn(23,3.6),p);y.position.set(0,1.8,m),s.add(y)});let g=Wt("#ffffff");for(let m of[-11.5,11.5])for(let p=-15;p<=15;p+=5){let y=ze(new At(new Ue(.07,.07,3.6,8),g),1.3);y.position.set(m,1.8,p),s.add(y)}this._props(e,n,s),this.needsEnvDecal=!0}_props(t,e,n){let s=()=>{for(let o=0;o<40;o++){let l=e.range(-60,60),c=e.range(-60,40);if(Math.abs(l)>14||Math.abs(c)>17)return{x:l,z:c}}return{x:20,z:-30}},r=o=>{let l=ze(new At(new en(1,12,8),Wt(o%2?t.ground2:t.ground)),1.02),c=e.range(10,24);l.scale.set(c*1.6,c*.45,c),l.position.set(e.range(-70,70),-c*.12,-e.range(45,80)),n.add(l)};for(let o=0;o<8;o++)r(o);let a=this.low?22:40;for(let o=0;o<a;o++){let{x:l,z:c}=s(),h=new De,d=e.range(.8,1.6);switch(h.position.set(l,0,c),t.props){case"palms":{if(e.chance(.65)){let f=ze(new At(new Ue(.18,.28,5*d,7),Wt("#8a5a3c")),1.12);f.position.y=2.5*d,f.rotation.z=e.range(-.18,.18),h.add(f);for(let u=0;u<6;u++){let g=ze(new At(new Kn(.5,3.2,4),Wt("#2fbf71")),1.08);g.scale.set(1,1,.25),g.position.set(Math.cos(u*1.05)*1.3,5*d-.2,Math.sin(u*1.05)*1.3),g.rotation.set(0,-u*1.05,1.2),g.rotation.order="YXZ",h.add(g)}}else{let f=ze(new At(new Dn(.35,1.6*d,4,8),Wt("#3fae6a")),1.1);f.position.y=1.1*d,h.add(f);let u=ze(new At(new Dn(.18,.7,4,6),Wt("#3fae6a")),1.12);u.position.set(.55,1.2*d,0),u.rotation.z=-.5,h.add(u)}break}case"candy":{let f=["#ff6fb5","#38d9ff","#ffe14d","#9b6bff"];if(e.chance(.5)){let u=ze(new At(new Ue(.1,.1,3*d,6),Wt("#ffffff")),1.2);u.position.y=1.5*d,h.add(u);let g=ze(new At(new en(.9*d,12,10),Wt(e.pick(f))),1.06);g.position.y=3.2*d,h.add(g)}else{let u=ze(new At(new Kn(1.6*d,.8,8),Wt(e.pick(f))),1.06);u.position.y=2.6*d,h.add(u);let g=ze(new At(new Ue(.06,.06,2.6*d,6),Wt("#ffffff")),1.2);g.position.y=1.3*d,h.add(g)}break}case"pines":{for(let u=0;u<3;u++){let g=ze(new At(new Kn(1.6*d-u*.38,1.7*d,8),Wt(u===2?"#f4fbff":"#2f8f6a")),1.05);g.position.y=(1+u*1)*d,h.add(g)}let f=new At(new Ue(.2,.25,.7,6),Wt("#6b4a35"));f.position.y=.3,h.add(f);break}case"crystals":{let f=["#00f5d4","#ff2fb8","#7b61ff"];for(let u=0;u<3;u++){let g=e.pick(f),x=new At(new Za(.6*d,0),new Ce({color:new wt(g)}));x.scale.y=2.4,x.position.set(e.range(-.8,.8),1.2*d,e.range(-.8,.8)),x.rotation.y=e.next()*3,h.add(x);let m=new At(x.geometry,new Ce({color:656416,side:Re}));m.scale.setScalar(1.12),x.add(m)}break}default:{for(let f=0;f<5;f++){let u=ze(new At(new Kn(.4,2.6*d,4),Wt(f%2?"#2f9e44":"#3fbf5a")),1.08);u.scale.z=.3,u.position.y=1.2,u.rotation.set(.8,f*1.25,0),u.rotation.order="YXZ",h.add(u)}if(e.chance(.5)){let f=ze(new At(new Ya(1.1*d,0),Wt("#8aa39a")),1.04);f.position.set(1.8,.5,0),h.add(f)}}}n.add(h)}}startDuel(t,e){this.dyn.children.slice().forEach(o=>{o.removeFromParent(),Du(o)}),this.decals.clear(),this.drops.clear(),this.dust.clear(),this.spark.clear(),this.balls=[],this.state=t,this.pal=e.pal,this.fighters=[],this.bunkerMeshes=[],this.barrelMeshes=[];let s=this.theme,r=new Ae(`bk:${t.cfg.seed}`),a=ks(128,128,(o,l,c)=>{o.fillStyle="#ffffff",o.fillRect(0,0,l,c),o.fillStyle="rgba(0,0,0,.10)";for(let h=-c;h<l;h+=32)o.beginPath(),o.moveTo(h,c),o.lineTo(h+16,c),o.lineTo(h+16+c,0),o.lineTo(h+c,0),o.fill()});for(let o of t.bunkers){let l=s.bunkers[(o.post+o.side)%s.bunkers.length],c=new De,h=ze(new At(new so(o.w,1,o.d,4,.22),Wt(l,{map:a})),1.025);c.add(h);let d=new At(new Ue(.07,.07,.12,8),Wt("#ffffff"));d.position.set(o.w/2-.4,.5,o.d/2+.02),d.rotation.x=Math.PI/2,h.add(d),c.position.set(o.x,0,o.z),this.dyn.add(c),this.bunkerMeshes.push({b:o,g:c,m:h,base:0})}for(let o of t.barrels){let l=new De,c=ze(new At(new Ue(ht.BARREL_R,ht.BARREL_R,ht.BARREL_H,14),Wt("#ff5d8f")),1.06);c.position.y=ht.BARREL_H/2,l.add(c);for(let f of[.2,.7]){let u=new At(new Ue(ht.BARREL_R+.01,ht.BARREL_R+.01,.08,14),Wt("#ffe14d"));u.position.y=f,l.add(u)}let h=new At(new Ue(ht.BARREL_R*.9,ht.BARREL_R*.9,.02,14),Wt("#2b2f4a"));h.position.y=ht.BARREL_H+.01,l.add(h);let d=new At(new rn(.3,.3),new Ce({map:ks(64,64,f=>{f.fillStyle="#ffe14d",f.fillRect(0,0,64,64),f.fillStyle="#1a1030",f.font="900 46px sans-serif",f.textAlign="center",f.fillText("!",32,50)})}));d.position.set(0,.45,ht.BARREL_R+.012),l.add(d),l.position.set(o.x,0,o.z),l.rotation.y=o.side===0?Math.PI:0,this.dyn.add(l),this.barrelMeshes.push({br:o,g:l})}for(let o of t.f){let l=o.side===0?e.you:e.foe,c=Iu({color:l.color,hat:l.hat,skin:o.side===0?1:2,paint:o.side===0?this.pal.you:this.pal.foe});c.group.position.set(o.x,0,o.z),c.group.rotation.y=o.side===0?Math.PI:0,this.dyn.add(c.group),this.fighters.push({c,f:o,blobs:[],deadScale:0})}this.laser=new At(new tn(.02,.02,1),new Ce({color:16722474,transparent:!0,opacity:.8,blending:Di,depthWrite:!1})),this.laser.visible=!1,this.dyn.add(this.laser),this.laserDot=new dr(new Cs({map:ks(32,32,o=>{let l=o.createRadialGradient(16,16,1,16,16,15);l.addColorStop(0,"rgba(255,60,60,1)"),l.addColorStop(1,"rgba(255,60,60,0)"),o.fillStyle=l,o.fillRect(0,0,32,32)}),transparent:!0,blending:Di,depthWrite:!1})),this.laserDot.visible=!1,this.dyn.add(this.laserDot),this.recoil=[0,0],this.cam.mode="duel",this.cam.kill=null,this.shake=0,this.ab=0}consume(t){let e=this.low?.5:1;if(!this.state)return;let s=a=>a===0?this.pal.you:this.pal.foe,r=(a,o,l,c,h,d)=>{for(let f=0;f<h*e;f++){let u=Math.random()*th,g=(Math.random()-.3)*1.2,x=d*(.4+Math.random());this.drops.add(a,o,l,Math.cos(u)*x,2+Math.random()*d*.6,Math.sin(u)*x+g,c,.1+Math.random()*.12,.9+Math.random()*.6,12)}};for(let a of t)switch(a.type){case"shot":this.recoil[a.side]=1;for(let o=0;o<4*e;o++)this.dust.add(a.x,a.y,a.z,(Math.random()-.5)*1.2,Math.random()*.8,(Math.random()-.5)*1.2+(a.side===0?-1.5:1.5),"#ffffff",.18,.4,0);this.spark.add(a.x,a.y,a.z+(a.side===0?-.3:.3),0,0,0,s(a.side),.5,.08,0),a.side===0&&(this.shake=Math.min(1,this.shake+.18));break;case"splat":{let o=s(a.side);if(a.surf==="bunker"){let l=this.bunkerMeshes.filter(c=>Math.abs(c.b.x-a.x)<2.2&&Math.abs(c.b.z-a.z)<1.4).sort((c,h)=>Math.abs(c.b.x-a.x)-Math.abs(h.b.x-a.x))[0];l&&this.decals.add(l.m,a.x,a.y,a.z,a.nx,a.ny,a.nz,o,.8*a.size),r(a.x,a.y,a.z,o,8,3.5)}else if(a.surf==="body"){let l=this.fighters.find(c=>Math.abs(c.f.x-a.x)<1.2&&Math.abs(c.f.z-a.z)<1.2);if(l){let c=new At(new en(.11,8,6),new Ce({color:new wt(o)}));c.scale.z=.35,l.c.rig.add(c),c.position.copy(l.c.rig.worldToLocal(new C(a.x,a.y,a.z))),l.blobs.push(c)}r(a.x,a.y,a.z,o,14,4.5)}else this.decals.add(this.scene,a.x,a.y,a.z,a.nx,a.ny,a.nz,o,.9*a.size),a.surf==="ground"&&r(a.x,a.y+.05,a.z,o,5,2.5);break}case"bunkerhit":{let o=this.bunkerMeshes.find(l=>l.b.side===a.side&&l.b.post===a.post);o&&(o.pop=1),a.hp===0&&(this.shake=Math.min(1,this.shake+.35));break}case"elim":{this.ab=1,this.flash=.5,this.shake=1;let o=this.fighters[a.victim];r(o.f.x,1,o.f.z,s(1-a.victim),30,6),this.cam.pendingKill=a;break}case"disarm":this.ab=Math.max(this.ab,.6),this.shake=Math.min(1,this.shake+.4);for(let o=0;o<10*e;o++)this.spark.add(a.x,a.y,a.z,(Math.random()-.5)*4,Math.random()*3,(Math.random()-.5)*4,"#ffe14d",.25,.5,6);break;case"barrel":{this.ab=1,this.flash=.7,this.shake=1;let o=this.barrelMeshes.find(c=>c.br.x===a.x&&c.br.z===a.z);o&&(o.g.visible=!1);let l=s(a.by);r(a.x,.6,a.z,l,60,8);for(let c=0;c<14*e;c++)this.dust.add(a.x,.4,a.z,(Math.random()-.5)*6,1+Math.random()*3,(Math.random()-.5)*6,"#ffffff",.8,.9,0);break}case"shieldpop":for(let o=0;o<14*e;o++)this.spark.add(a.x,a.y,a.z,(Math.random()-.5)*6,Math.random()*4,(Math.random()-.5)*6,"#6df0ff",.3,.6,3);this.shake=Math.min(1,this.shake+.3);break;case"swap":{let o=this.fighters[a.side];for(let l=0;l<6*e;l++)this.dust.add(o.f.x,.1,o.f.z,(Math.random()-.5)*2,.5,(Math.random()-.5)*2,"#ffffff",.4,.5,0);break}default:break}}confetti(t=60){if(this.reduce)return;this.low&&t>40&&(t=40);let e=[this.pal.you,this.pal.foe,"#ffd23f","#ffffff","#5dffb0"];for(let n=0;n<t;n++)this.spark.add((Math.random()-.5)*12,6+Math.random()*3,(Math.random()-.5)*10,(Math.random()-.5)*3,-1-Math.random()*2,(Math.random()-.5)*3,e[n%5],.35,2.6,2)}update(t,e,n={}){this.time+=t;let s=this.time;this.shake=Math.max(0,this.shake-t*2.2),this.ab=Math.max(0,this.ab-t*1.6),this.flash=Math.max(0,this.flash-t*3),this.recoil[0]=Math.max(0,this.recoil[0]-t*7),this.recoil[1]=Math.max(0,this.recoil[1]-t*7),e&&this._sync(t,e,n),this._camera(t,e,n),this.drops.update(t),this.dust.update(t),this.spark.update(t);let r=this.post.mat.uniforms;r.ab.value=this.ab,r.flash.value=this.flash*.4;let a=e?e.f[0].e:0,o=this.theme;r.vig.value=.22+(n.scope?a*.5:0),r.sat.value=1.1+this.ab*.2,o&&r.tint.value.set(o.tint[0],o.tint[1],o.tint[2])}_sync(t,e,n){for(let o of this.fighters){let l=o.f,c=o.c,h=c.group,d=l.alive?0:e.t-l.deadAt;h.position.x+=(l.x-h.position.x)*Math.min(1,t*30),h.position.z=l.z;let f={yaw:l.side===0?-l.aimYaw:0,pitch:l.aimPitch,recoil:this.recoil[l.side]};if(l.side===1&&l.laser&&(f.yaw=Math.atan2(l.laser.x-l.x,l.laser.z-l.z)*-0+0),Lu(c,l,this.time,f),h.visible=!(l.side===0&&l.alive&&l.e>.5&&this.cam.mode==="duel"),l.alive)h.rotation.x=0,h.position.y=0;else{let u=Math.min(1,d*2.2),g=1-(1-u)*(1-u);h.rotation.x=g*1.45,h.position.y=Math.sin(Math.min(1,d*3)*Math.PI)*.25,c.shield.visible=!1}}for(let o of this.bunkerMeshes){let l=Hr(o.b),c=1+(1-o.b.hp/o.b.max)*.12;o.pop=Math.max(0,(o.pop||0)-t*4);let h=Math.sin(this.time*1.6+o.b.x)*.012,d=Math.sin(o.pop*Math.PI)*.06;o.m.scale.set(c*(1+d),l*(1-d*1.4+h),c*(1+d)),o.m.position.y=l*(1-d*1.4+h)/2}let s=e.balls.length;for(;this.balls.length<s;){let o=new At(new en(1,8,6),new Ce({color:16777215}));o.userData.shared=!1,this.dyn.add(o),this.balls.push(o)}this.balls.forEach((o,l)=>{let c=e.balls[l];o.visible=!!c,c&&(o.position.set(c.x,c.y,c.z),o.material.color.set(c.side===0?this.pal.you:this.pal.foe),o.scale.set(.11,.11,.55),o.lookAt(c.x+c.vx,c.y+c.vy,c.z+c.vz),!this.low&&Math.random()<.7&&this.spark.add(c.x,c.y,c.z,0,0,0,c.side===0?this.pal.you:this.pal.foe,.2,.18,0))});let r=e.f[1],a=!!r.laser&&r.alive&&!e.over&&r.e>.2;if(this.laser.visible=this.laserDot.visible=a,a){let o=ni(r),l=r.laser,c=l.x-o.x,h=l.y-o.y,d=l.z-o.z,f=Math.hypot(c,h,d);this.laser.position.set(o.x+c/2,o.y+h/2,o.z+d/2),this.laser.scale.set(1,1,f),this.laser.lookAt(l.x,l.y,l.z),this.laserDot.position.set(l.x,l.y,l.z),this.laserDot.scale.setScalar(.7+Math.sin(this.time*30)*.15)}}_camera(t,e,n){let s=this.camera,r=this.cam,a,o,l;if(r.mode==="duel"&&e){let h=e.f[0],d=Wr(h),f=1-Math.exp(-t*(h.e>.3?20:9));a=new C(d.pos.x,d.pos.y,d.pos.z),o=new C(d.pos.x+d.dir.x*12,d.pos.y+d.dir.y*12,d.pos.z+d.dir.z*12),l=d.fov,this.portrait&&(l=l*1.18),this.camPos.lerp(a,f),this.camLook.lerp(o,f),this.fovNow+=(l-this.fovNow)*f,r.pendingKill&&n.killcam!==!1&&(r.mode="kill",r.t=0,r.kill=r.pendingKill,r.pendingKill=null,r.orbit=Math.random()<.5?1:-1)}else if(r.mode==="kill"&&e){r.t+=t;let h=e.f[r.kill.victim],d=.5+r.t*.35*r.orbit,f=new C(h.x,1,h.z),u=h.side===0?-1:1;a=new C(h.x+Math.sin(d)*3.4,1.5+Math.sin(r.t)*.1,h.z+u*Math.cos(d)*4.6),o=f,l=40,this.camPos.lerp(a,1-Math.exp(-t*6)),this.camLook.lerp(o,1-Math.exp(-t*8)),this.fovNow+=(l-this.fovNow)*.2}else{r.t+=t;let h=Math.sin(r.t*.18)*.5+.35,d=this.portrait?22:18;a=new C(Math.sin(h)*d*.6,(this.portrait?6.2:4.6)+Math.sin(r.t*.3)*.3,Math.cos(h)*d),o=new C(0,this.portrait?-2.6:.6,0),l=this.portrait?58:46,this.camPos.lerp(a,1-Math.exp(-t*3)),this.camLook.lerp(o,1-Math.exp(-t*3)),this.fovNow+=(l-this.fovNow)*.1}let c=this.reduce?0:this.shake*this.shake*.12;s.position.set(this.camPos.x+(Math.random()-.5)*c,this.camPos.y+(Math.random()-.5)*c,this.camPos.z),s.fov=this.fovNow,s.updateProjectionMatrix(),s.lookAt(this.camLook)}render(){this.post.render(this.scene,this.camera)}};var lo=class{constructor(t,{onPause:e}){this.el=t,this.onPause=e,this.enabled=!1,this.assist=2,this.sens=1,this.getState=()=>null,this.hold=!1,this.releaseQ=!1,this.fireQ=!1,this.swapQ=0,this.yaw=0,this.pitch=0,this.id=null,this.lx=0,this.ly=0,this.touchSeen=!1,this.wasHold=!1,t.addEventListener("pointerdown",n=>this._down(n)),t.addEventListener("pointermove",n=>this._move(n)),t.addEventListener("pointerup",n=>this._up(n,!0)),t.addEventListener("pointercancel",n=>this._up(n,!1)),t.addEventListener("contextmenu",n=>n.preventDefault()),addEventListener("keydown",n=>this._key(n,!0)),addEventListener("keyup",n=>this._key(n,!1)),addEventListener("blur",()=>this.reset())}reset(){this.hold=!1,this.releaseQ=this.fireQ=!1,this.swapQ=0,this.id=null,this.wasHold=!1}requestSwap(t){this.swapQ=t}_down(t){var e,n;if(this.enabled){if(t.pointerType!=="mouse")this.touchSeen=!0;else if(t.button!==0)return;if(this.id!=null){this.fireQ=!0;return}this.id=t.pointerId,this.hold=!0,this.lx=t.clientX,this.ly=t.clientY;try{(n=(e=this.el).setPointerCapture)==null||n.call(e,t.pointerId)}catch{}}}_move(t){if(!this.enabled||t.pointerId!==this.id)return;let e=t.pointerType==="mouse"&&t.movementX!=null?t.movementX:t.clientX-this.lx,n=t.pointerType==="mouse"&&t.movementY!=null?t.movementY:t.clientY-this.ly;this.lx=t.clientX,this.ly=t.clientY;let s=(t.pointerType==="mouse"?.0026:.0042)*this.sens;this.yaw=Math.max(-.66,Math.min(.66,this.yaw+e*s)),this.pitch=Math.max(-.28,Math.min(.34,this.pitch-n*s))}_up(t,e){t.pointerId===this.id&&(this.id=null,this.hold&&(this.hold=!1,e&&this.enabled&&(this.releaseQ=!0)))}_key(t,e){var s,r;let n=t.key.length===1?t.key.toLowerCase():t.key;if(e&&(n==="Escape"||n==="p")){(s=this.onPause)==null||s.call(this);return}!this.enabled||!e||(n==="a"||n==="ArrowLeft"?this.swapQ=-1:n==="d"||n==="ArrowRight"?this.swapQ=1:n===" "&&(this.fireQ=!0,(r=t.preventDefault)==null||r.call(t)))}sample(){let t=this.getState(),e={hold:this.hold,release:!1,fire:!1,swap:0,yaw:this.yaw,pitch:this.pitch};if(this.hold&&!this.wasHold&&t&&this.assist>0){let n=Ji(t.f[1]).find(a=>a.type==="head"),s=$r(t.f[0],n),r=.35+.15*this.assist;this.yaw=s.yaw*r,this.pitch=s.pitch*r}if(this.wasHold=this.hold,this.hold&&t&&this.assist>0){let n=Yh(t,this.yaw,this.pitch,[0,.35,.6,.9][this.assist]);this.yaw=n.yaw,this.pitch=n.pitch}return e.yaw=this.yaw,e.pitch=this.pitch,this.releaseQ&&(e.release=!0,this.releaseQ=!1,e.hold=!0),this.fireQ&&(e.fire=!0,this.fireQ=!1),this.swapQ&&(e.swap=this.swapQ,this.swapQ=0),e}};var gr=i=>({stage:i,seed:`stage${i}`,skill:qh(i),boss:i%5===0,posts:Br(i),theme:bn[Xs(i)].id,name:Vh(i),foe:Po(i),winRounds:2,label:`Stage ${i}`}),co=class{constructor({canvas:t,ui:e,S:n,save:s,audio:r,params:a,onMenu:o}){this.cv=t,this.ui=e,this.S=n,this.save=s,this.audio=r,this.params=a,this.onMenu=o,this.stage=null,this.mode="menu",this.M=null,this.s=null,this.acc=0,this.slowT=0,this.tab="battle",this.areaIdx=Xs(n.duel.stage),this.t=0,this.countT=0,this.endT=0,this.trickSeen=0,this.hintT=0,this.SPEED=a.has("debug")?Math.min(12,Math.max(1,Number(a.get("speed"))||1)):1,this.AUTO=a.has("auto"),this.coach=0,this.input=new lo(t,{onPause:()=>this.togglePause()}),this.input.getState=()=>this.s}get active(){return!!this.stage}palette(){return Sr(this.S.settings.palette)}look(t){let e=qs(this.S.settings.outfit),n=this.palette();return{pal:{you:n.you,foe:n.foe},you:{color:e.color,hat:e.hat},foe:t.foe}}ensureStage(){if(!this.stage)try{this.stage=new oo(this.cv)}catch(t){throw this.stage=null,t}return this.applySettings(),this.stage.resize(),this.stage}applySettings(){let t=this.S;this.input.assist=t.settings.assist,this.input.sens=t.settings.sens,this.stage&&(this.stage.setQuality((this.params.get("q")||t.settings.quality)==="low"),this.stage.reduce=t.settings.reduceMotion||typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches)}areaInfo(){let t=this.S.duel.stage;return bn.map((e,n)=>{let s=t;for(;s>=1&&Xs(s)!==n;)s--;return{name:e.name,locked:s<1,unlockStage:n*5+1,stage:Math.max(1,s)}})}renderMenu(){let t=this.S,e=this.areaInfo(),n=e[this.areaIdx],s=qs(t.settings.outfit),r=n.stage,a=gr(r);this.ui.showMenu({tab:this.tab,trophies:t.duel.trophies,coins:t.coins,best:t.duel.best,wins:t.duel.wins,me:{color:s.color,hat:s.hat,skin:1},areas:e,areaIdx:this.areaIdx,playStage:r,foe:a.name,boss:a.boss,areaProgress:(t.duel.stage-1)%5,owned:t.palettes,palette:t.settings.palette,outfits:t.outfits,outfit:t.settings.outfit,arena:{level:t.level,dailySub:t.daily.last===Gs()?`Done today \xB7 ${t.daily.streak}-day streak`:t.daily.streak?`${t.daily.streak}-day streak \u2014 keep it alive`:"A fresh arena every day"}})}enterMenu(t=this.tab){this.tab=t,this.mode="menu",this.M=null,this.input.enabled=!1,this.input.reset(),this.areaIdx=Math.min(this.areaIdx,bn.length-1),this.areaInfo()[this.areaIdx].locked&&(this.areaIdx=Xs(this.S.duel.stage)),this.ui.hideAll(),this.showcase(),this.renderMenu()}showcase(){let t=this.ensureStage(),e=this.areaInfo()[this.areaIdx],n=gr(e.stage);t.loadTheme(bn[this.areaIdx].id),this.s=Vr({seed:`show${this.areaIdx}`,stage:Math.max(3,n.stage),noAI:!0,posts:Br(Math.max(3,n.stage))}),t.startDuel(this.s,this.look(n)),t.cam.mode="showcase",t.cam.t=0,this.s.f[0].e=.15,this.s.f[1].e=.15}setArea(t){this.areaIdx=Math.max(0,Math.min(bn.length-1,this.areaIdx+t)),this.showcase(),this.renderMenu()}setTab(t){this.tab=t,this.renderMenu()}refreshLook(){this.mode==="menu"&&this.stage&&(this.showcase(),this.renderMenu())}startMatch(t){this.audio.unlock();let e=this.ensureStage();this.M={cfg:t,scores:[0,0],round:0,attempt:0,out:!1,tricks:[],shots:0,startT:performance.now()},e.loadTheme(t.theme),this.ui.hideAll(),this.mode="intro",this.s=null,this.S.stats.matches++,this.save.save();let n=qs(this.S.settings.outfit);this.ui.showDuelIntro({label:t.label,area:bn.find(s=>s.id===t.theme).name,you:{color:n.color,hat:n.hat,skin:1},foe:{...t.foe,name:t.name,skin:2},boss:t.boss}),this.s=Vr({seed:t.seed+":intro",stage:t.stage,noAI:!0,posts:t.posts,skill:t.skill}),e.startDuel(this.s,this.look(t)),e.cam.mode="showcase",clearTimeout(this._t),this._t=setTimeout(()=>{var s;this.mode==="intro"&&((s=this.M)==null?void 0:s.cfg)===t&&this.startRound()},this.params.has("fast")?100:2100)}startRound(){let t=this.M,e=t.cfg,n=this.stage;t.round++,t.attempt++,this.s=Vr({seed:`${e.seed}:r${t.round}:a${t.attempt}`,stage:e.stage,skill:e.skill,boss:e.boss,posts:e.posts}),this.AUTO&&(this.scripted=Kh(.8,e.seed)),n.startDuel(this.s,this.look(e)),n.cam.mode="duel",this.input.reset(),this.input.yaw=this.input.pitch=0,this.input.enabled=!1,this.trickSeen=0,this.slowT=0,this.acc=0,this.endT=0,this.hintT=0,this.ui.hideAll();let s=qs(this.S.settings.outfit);this.ui.showDuelHud({you:{color:s.color,hat:s.hat,skin:1},foe:{...e.foe,name:e.name,skin:2},winRounds:e.winRounds,label:`${e.label} \xB7 Duel ${t.round}`,posts:e.posts.length}),this.mode="countdown",this.countT=this.params.has("fast")?.2:1.5,this.lastCount=3,this.ui.showBigBanner("READY",e.boss?"Boss shield: break it first":"","count"),this.audio.tick(),this.pushHud()}beginPlay(){this.mode="playing",this.input.enabled=!0,this.ui.hideBanner(),this.audio.go(),this.ui.showBigBanner("DUEL!","","go"),clearTimeout(this._b),this._b=setTimeout(()=>this.ui.hideBanner(),550)}togglePause(){this.mode==="paused"?this.resume():this.pause()}pause(){["playing","countdown","roundend"].includes(this.mode)&&(this.prev=this.mode,this.mode="paused",this.input.reset(),this.input.enabled=!1,this.ui.showPause())}resume(){this.mode==="paused"&&(this.ui.hidePause(),this.mode=this.prev,this.mode==="playing"&&(this.input.enabled=!0))}restart(){this.ui.hidePause(),this.startMatch(this.M.cfg)}onEvent(t){let e=this.audio,n=this.s;switch(t.type){case"shot":e.shot(0,t.side===0?1:.7,t.side===0),t.side===0&&(this.M.shots++,this.S.stats.shots++,on(12));break;case"splat":e.splat(.7);break;case"bunkerhit":e.splat(.4);break;case"reload":t.side===0&&e.reload();break;case"reloaded":t.side===0&&e.reloaded();break;case"swap":e.dash();break;case"shieldpop":e.shield(),on(20);break;case"disarm":e.pickup(),t.victim===0&&(this.ui.hitSplat(this.palette().foe),on([40,30,40]));break;case"barrel":e.elim(!1),on([30,20,60]);break;case"elim":{let s=t.victim===0;e.elim(s),this.slowT=1.15,s?(this.M.out=!0,this.ui.hitSplat(this.palette().foe),on([60,30,90]),this.S.stats.hits+=0):(on(30),this.S.stats.elims++,this.S.stats.hits++);break}case"over":this.onRoundOver(t.winner);break;default:break}}callouts(){let t=this.s;if(t.tricks.length<=this.trickSeen)return;let e=t.tricks.slice(this.trickSeen);this.trickSeen=t.tricks.length;let n=[];for(let s of e){let r=_i[s.zone];if(r&&(n.push({icon:r.icon,label:r.label,plus:r.coins||""}),this.M.tricks.push(s.zone),s.quick)){let a=_i.quick;n.push({icon:a.icon,label:a.label,plus:a.coins}),this.M.tricks.push("quick")}}n.length&&(this.ui.showCallouts(n),this.audio.star(1))}onRoundOver(t){this.mode="roundend",this.input.enabled=!1,this.input.reset(),this.endT=0;let e=this.M;t===0?(e.scores[0]++,this.audio.win(),this.ui.showBigBanner("DUEL WON",`${e.scores[0]} \u2013 ${e.scores[1]}`,"won low"),this.stage.confetti(36)):t===1?(e.scores[1]++,e.out=!0,this.audio.lose(),this.ui.showBigBanner("DUEL LOST",`${e.scores[0]} \u2013 ${e.scores[1]}`,"lost low")):(e.round--,this.ui.showBigBanner("DRAW","Nobody blinked \u2014 rematch","draw low")),this.S.stats.rounds++}finishMatch(){let t=this.M,e=t.cfg,n=this.S,s=t.scores[0]>=e.winRounds,r=[],a=s?20:4;for(let c of t.tricks){let h=_i[c];h&&c!=="torso"&&(a+=h.coins,r.push({icon:h.icon,label:h.label,plus:h.coins||""}),n.duel.tricks[c]=(n.duel.tricks[c]||0)+1)}s&&!t.out&&(a+=_i.untouchable.coins,r.push({icon:"trophy",label:_i.untouchable.label,plus:_i.untouchable.coins}));let o=n.duel.trophies;n.duel.trophies=Math.max(0,o+(s?30:-15));let l=n.duel.trophies-o;s?(n.duel.wins++,n.stats.wins++,e.stage>=n.duel.stage&&(n.duel.stage=e.stage+1),n.duel.best=Math.max(n.duel.best,e.stage)):n.duel.losses++,n.coins+=a,n.flags.tutorialSeen=!0,n.flags.duelTutorial=!0,n.stats.playSec+=Math.round((performance.now()-t.startT)/1e3),this.save.save(),this.mode="result",this.audio[s?"win":"lose"](),s&&this.stage.confetti(90),this.stage.cam.mode="result",this.stage.cam.t=0,this.ui.showDuelResult({won:s,title:s?t.out?"VICTORY!":"FLAWLESS!":"DEFEAT",sub:s?`${e.name} is out of the game`:"Peek smarter \u2014 watch the laser sight",score:t.scores,tricks:r,coins:a,trophies:n.duel.trophies,trophyDelta:l,nextLabel:s?`Stage ${e.stage+1}`:"Rematch"})}nextStage(){this.startMatch(gr(this.M.cfg.stage+1))}retry(){this.startMatch(this.M.cfg)}pushHud(){let t=this.s,e=this.ui;if(!t||!e.dh)return;let n=t.f[0],s=t.f[1],r=this.M,a="",o="";t.over||(s.disarmT>0&&s.alive?(a="ENEMY DISARMED!",o="good"):n.disarmT>0?(a="YOU'RE DISARMED!",o="bad"):s.laser&&s.e>.3?(a="ENEMY IS SHOOTING",o="bad"):s.reloadT>0&&s.e<.2?(a="ENEMY IS RELOADING",o="good"):n.reloadT>0&&n.e<.2&&(a="RELOADING\u2026",o="info"));let l=!1;if(this.input.hold&&n.e>=ht.MIN_FIRE_E&&n.alive){let h=Uo(t,n),d=ni(n),f=bi(t,d,{x:h.x-d.x,y:h.y-d.y,z:h.z-d.z},0,1);l=f.kind==="bunker"&&f.b.side===0}let c=r.cfg.posts.length>1&&n.alive&&!this.input.hold&&!t.over;n.shots>0&&(this.coach=99),e.updateDuelHud({youScore:r.scores[0],foeScore:r.scores[1],ammoYou:n.ammo,reloadYou:n.reloadT>0,ammoFoe:s.ammo,reloadFoe:s.reloadT>0,banner:a,bannerKind:o,e:n.e,scope:!0,blocked:l,swapL:c&&n.post>0&&n.swapT<=0,swapR:c&&n.post<r.cfg.posts.length-1&&n.swapT<=0,hint:!this.S.flags.duelTutorial&&this.mode==="playing"&&this.coach<2&&this.hintT<9?this.input.touchSeen?"HOLD TO AIM \xB7 RELEASE TO FIRE":"HOLD MOUSE \xB7 DRAG TO AIM \xB7 RELEASE TO FIRE":""})}frame(t){let e=this.stage;if(!e)return;if(this.t+=t,this.mode==="menu"||this.mode==="intro"||this.mode==="result"){this.s&&this.mode==="menu"&&(this.s.f[0].e=.14+.07*Math.sin(this.t*1.1),this.s.f[1].e=.14+.07*Math.sin(this.t*1.3+1),this.s.t+=t),e.update(t,this.s,{}),e.render();return}if(this.mode==="countdown"){this.countT-=t;let o=Math.ceil(this.countT/.5);o!==this.lastCount&&o>0&&o<=2&&!this.params.has("fast")&&(this.lastCount=o,this.audio.tick()),this.countT<=0&&this.beginPlay(),e.update(t,this.s,{}),e.render();return}if(this.mode==="paused"){e.render();return}let n=this.s,s=1;this.slowT>0&&(this.slowT-=t,s=.28),this.acc+=t*s*this.SPEED;let r=0,a=8*Math.ceil(this.SPEED);for(;this.acc>=ht.DT&&r++<a;){let o=this.mode==="playing"?this.AUTO?jh(n,this.scripted,ht.DT):this.input.sample():{};Zh(n,ht.DT,o);for(let l of n.events)this.onEvent(l);e.consume(n.events),n.events.length=0,this.callouts(),this.acc-=ht.DT}if(r>=a&&(this.acc=0),this.mode==="playing"&&(this.hintT+=t),this.mode==="roundend"&&(this.endT+=t,Jh(n)&&this.endT>(this.params.has("fast")?.4:2.2))){this.ui.hideBanner(),this.ui.hideCallouts();let o=this.M;o.scores[0]>=o.cfg.winRounds||o.scores[1]>=o.cfg.winRounds?this.finishMatch():this.startRound();return}e.update(t*(s<1?.5:1),n,{scope:!0}),this.pushHud(),e.render()}debugKill(t,e="head"){let n=this.s,s=n==null?void 0:n.f[t];return!s||!s.alive||n.over?!1:(s.alive=!1,s.deadAt=n.t,n.hitsTaken[t]++,n.events.push({type:"elim",victim:t,by:1-t,zone:e,quick:!1}),t===1&&n.tricks.push({zone:e,quick:!1}),!0)}snapshot(){return new Promise(t=>{this.stage.render(),this.cv.toBlob(t,"image/png")})}};var Gy="0.1.0",Nn=new URLSearchParams(location.search),Fu=Nn.has("debug"),Ou=Nn.has("auto"),Uu=Fu?Math.min(12,Math.max(1,Number(Nn.get("speed"))||1)):1,Ne=new Er((()=>{try{return localStorage}catch{return null}})()),gt=Ne.state,ah=document.getElementById("c"),xe=new Pr,he=new Ur(ah),Et,Te,Qt,Un="duel",zu=document.getElementById("c3");function oh(i){Un=i,ah.hidden=i!=="arena",zu.hidden=i!=="duel"}var Bu=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,lh=()=>Sr(gt.settings.palette),po=()=>{xe.setEnabled(gt.settings.sound),Dh(gt.settings.haptics),he.low=(Nn.get("q")||gt.settings.quality)==="low",he.reduce=gt.settings.reduceMotion||Ih(),Te&&(Te.assist=gt.settings.assist,Te.lefty=gt.settings.lefty),document.documentElement.classList.toggle("reduce",he.reduce)},ee="menu",ft=null,Vt=null,Vu=1,mo=0,Bs=!1,gi=0,ho=0,eh=0,go=0,Os=0,uo=0,zs=null,xi=null,Hu=()=>innerWidth>innerHeight*1.1,Wy=i=>`${i.sizes[0]} vs ${i.sizes[1]}`,jn=()=>Vt==null?void 0:Vt.ents.find(i=>i.human);function ch(i){he.padTop=i?Math.max(58,50+(parseInt(getComputedStyle(document.documentElement).getPropertyValue("--safe-t"))||0)):0,he.padBottom=i?innerWidth<=innerHeight*1.1?10:8:0,he.padSide=i?8:0,he._fit(),he.arena&&he._buildLayers(!0)}function $y(){let i=new Ae(`attract:${Date.now()>>12}`),t=Hu(),e=`attract:${i.int(9999)}`,n=wo({seed:e,level:8,landscape:t,teamSizes:[3,3]});ch(!1),he.setArena(n,lh(),!1),xi={w:Cr({arena:n,sizes:[3,3],human:!1,skill:[.62,.62],seed:e}),rounds:0},Vt=xi.w}function Xy(i){gi+=i;let t=0;for(;gi>=Ut.DT&&t++<6;)Ao(Vt,Ut.DT),gi-=Ut.DT;if(t>=6&&(gi=0),he.consume(Vt,Vt.events),Vt.events.length=0,Ro(Vt)||Vt.t>40){if(xi.rounds++,xi.rounds>=3){$y();return}Vt=xi.w=Cr({arena:Vt.arena,sizes:[3,3],human:!1,skill:[.62,.62],seed:`attract:r${xi.rounds}:${Date.now()}`})}}function Fs(i){xe.unlock(),xi=null,oh("arena"),he.resize(),ft={cfg:i,scores:[0,0],round:0,attempt:0,lost:0,out:!1,elims:0,shots:0,hits:0,startT:performance.now()};let t=Hu();ft.arena=wo({seed:i.seed,level:i.level,landscape:t,teamSizes:i.sizes}),Et.hideAll(),ch(!0),he.setArena(ft.arena,lh(),!1),ee="intro",Vt=null,Et.showIntro({label:i.label,name:i.name,vs:Wy(i),foe:yo(i.skill[1]).toUpperCase(),boss:i.boss}),gt.stats.matches++,Ne.save(),setTimeout(()=>{ee==="intro"&&(ft==null?void 0:ft.cfg)===i&&Gu()},Nn.has("fast")?100:1700)}function Gu(){let i=ft.cfg;if(ft.round++,ft.attempt++,Vt=Cr({arena:ft.arena,sizes:i.sizes,human:!0,skill:i.skill,roles:i.roles,seed:`${i.seed}:r${ft.round}:a${ft.attempt}`}),Ou){let t=jn();t.brain=Ar(.97,"rusher",Vt.rng)}Bs=!1,Vu=1,mo=0,gi=0,go=0,Et.hideAll(),Et.showHud({label:`${i.label} \xB7 R${ft.round}`,winRounds:i.winRounds}),Te.reset(),Te.enabled=!1,ee="countdown",ho=Nn.has("fast")?.3:2.4,eh=4,he.parts.length=0,Wu()}function qy(){ee="playing",Te.enabled=!0,Et.hideBanner(),xe.go(),Et.showBanner("SPLAT!","","go"),setTimeout(()=>Et.hideBanner(),600),Os=0,uo=0}function Wu(){let i=jn();!Vt||!i||!Et.hud||Et.updateHud({time:Math.max(0,Ut.ROUND_TIME-Vt.t),youScore:ft.scores[0],foeScore:ft.scores[1],youAlive:qi(Vt,0).length,youTotal:ft.cfg.sizes[0],foeAlive:qi(Vt,1).length,foeTotal:ft.cfg.sizes[1],ammo:i.ammo,ammoFrac:i.reloadT>0?1-i.reloadT/Ut.RELOAD:i.ammo/Ut.MAG,reloading:i.reloadT>0,dashFrac:1-i.dashCd/Ut.DASH_CD,dead:!i.alive})}function Yy(i){let t=jn();if(!t)return;let e=(n,s)=>Math.max(.15,1-Math.hypot(n-t.x,s-t.y)/800);switch(i.type){case"shot":{i.id===t.id&&(ft.shots++,gt.stats.shots++),xe.shot(0,e(i.x,i.y),i.id===t.id);break}case"splat":xe.splat(e(i.x,i.y)*(i.size>1.5?1.2:.7));break;case"hit":{let n=i.victim===t.id;i.shooter===t.id&&(ft.elims++,ft.hits++,gt.stats.elims++,gt.stats.hits++,on(25)),n?(ft.out=!0,on([60,30,90]),xe.elim(!0)):xe.elim(!1);break}case"dash":i.id===t.id&&(gt.stats.dashes++,on(8),xe.dash());break;case"reload":i.id===t.id&&xe.reload();break;case"reloaded":i.id===t.id&&xe.reloaded();break;case"pickup":xe.pickup(),i.id===t.id&&(Et.toast(i.kind==="shield"?"Shield! Absorbs one hit":i.kind==="rapid"?"Rapid fire!":"Splash balls!",1400),on(15));break;case"pickupspawn":Et.toast("Power-ups spawned mid-field",1500);break;case"shieldpop":xe.shield(),on(20);break;case"roundover":Zy(i.winner);break;default:break}}function Zy(i){ee="roundend",Te.enabled=!1,Te.reset(),go=0,Bs=!1;let t=jn();i===0?(ft.scores[0]++,gt.stats.roundsWon++,xe.win(),Et.showBanner("ROUND WON",`${ft.scores[0]} \u2013 ${ft.scores[1]}`,"won"),Vt.over.reason==="elimination"&&(ft.scores[0]>=ft.cfg.winRounds||t.alive)&&(mo=.9,he.confetti(40))):i===1?(ft.scores[1]++,ft.lost++,xe.lose(),Et.showBanner("ROUND LOST",`${ft.scores[0]} \u2013 ${ft.scores[1]}`,"lost")):(Et.showBanner("DRAW","Time ran out \u2014 replaying round","draw"),ft.round--),gt.stats.rounds++}function Jy(){let i=ft.cfg,t=ft.scores[0]>=i.winRounds,e=Sh({won:t,lostRounds:ft.lost,eliminated:ft.out}),n=!1,s=[];i.kind==="journey"&&(e>(gt.stars[i.n]||0)&&(n=e===3&&(gt.stars[i.n]||0)<3,gt.stars[i.n]=e),t&&i.n>=gt.level&&(gt.level=i.n+1));let r=null;i.kind==="daily"&&t&&(r=Th(gt.daily,i.key));let a=!!(r!=null&&r.first),o=wh({won:t,roundsWon:ft.scores[0],kills:ft.elims,stars:e,firstStars:n,daily:a});gt.coins+=o,t&&gt.stats.wins++,gt.flags.tutorialSeen=!0,gt.stats.playSec+=Math.round((performance.now()-ft.startT)/1e3),Ne.save();let l=ft.shots?Math.round(ft.hits/ft.shots*100):0,c=[["Splats",ft.elims],["Accuracy",`${l}%`],["Rounds",`${ft.scores[0]}\u2013${ft.scores[1]}`]];r&&c.push(["Streak",`${r.streak} day${r.streak===1?"":"s"}`]),n&&s.push("Perfect clear bonus!"),zs=he.exportArt(`${i.label} \xB7 ${i.name}`,`${t?"Won":"Lost"} ${ft.scores[0]}\u2013${ft.scores[1]} vs ${yo(i.skill[1])} bots \xB7 ${he.splatLog.length} splats`);let h=document.createElement("canvas");h.width=360,h.height=Math.round(360*zs.height/zs.width),h.getContext("2d").drawImage(zs,0,0,h.width,h.height),ee="result",xe[t?"win":"lose"](),t&&he.confetti(90),Et.showResult({won:t,title:t?e===3?"FLAWLESS!":"VICTORY!":"DEFEAT",sub:s[0]||(t?`${i.name} is yours`:"Shake it off \u2014 regroup and splat back"),stars:e,score:ft.scores,facts:c,coins:o,art:h,nextLabel:t?i.kind==="daily"?"Done":`Level ${i.n+1}`:"Try again",canShare:!0})}var nh=performance.now(),Nu=new Ir;function ih(i){var e;let t=Math.min(.05,Math.max(.001,(i-nh)/1e3));if(nh=i,Un==="duel"){if(Qt.active){try{Qt.frame(t)}catch(n){console.warn("duel frame",n)}Qt.mode==="playing"&&gt.settings.quality!=="low"&&!Nn.has("q")&&Nu.push(t)==="downgrade"&&(gt.settings.quality="low",po(),Ne.save(),Et.toast("Switched to Low graphics for smoother play",2400))}requestAnimationFrame(ih);return}if(ee==="playing"&&gt.settings.quality!=="low"&&!Nn.has("q")&&Nu.push(t)==="downgrade"&&(gt.settings.quality="low",po(),he.resize(),Ne.save(),Et.toast("Switched to Low graphics for smoother play",2400)),ee==="menu"&&Vt)Xy(t);else if(Vt&&(ee==="playing"||ee==="roundend")){let n=Vu;mo>0&&(mo-=t,n=.28),Bs&&!jn().alive&&(n=3.2),gi+=t*n*Uu;let s=0,r=8*Math.ceil(Uu);for(;gi>=Ut.DT&&s++<r;){let a=ee==="playing"?Ou?Rr(Vt,jn(),Ut.DT):Te.sample(Ut.DT):void 0;Ao(Vt,Ut.DT,a);for(let o of Vt.events)Yy(o);he.consume(Vt,Vt.events),Vt.events.length=0}s>=r&&(gi=0),ee==="roundend"?(go+=t,Ro(Vt)&&go>(Nn.has("fast")?.3:1.7)&&(Et.hideBanner(),ft.scores[0]>=ft.cfg.winRounds||ft.scores[1]>=ft.cfg.winRounds?Jy():Gu())):Ky(t),Wu()}else if(Vt&&ee==="countdown"){ho-=t;let n=Math.ceil(ho/.8);n!==eh&&n>0&&n<=3&&(eh=n,Et.showBanner(String(n),n===3?`${ft.cfg.label} \xB7 Round ${ft.round}`:"","count"),xe.tick()),ho<=0&&qy()}he.draw(Vt,t,{you:jn(),showYou:ee==="countdown"||ee==="playing"&&Vt.t<4,aimLine:ee==="playing"&&!((e=ft==null?void 0:ft.cfg)!=null&&e.noAim)&&(Te.touchSeen&&Te.aimS.id!=null?2:0)}),requestAnimationFrame(ih)}function Ky(i){if(gt.flags.tutorialSeen||ee!=="playing")return;Os+=i;let t=Bu?["Left thumb: move  \xB7  Double-tap: dash","Right thumb: aim \u2014 hold to fire, tap for a quick shot","Duck behind bunkers to reload. One hit and you\u2019re out!"]:["WASD to move  \xB7  Shift to dash","Mouse to aim \u2014 click or Space to fire","Duck behind bunkers to reload (R). One hit and you\u2019re out!"],e=Os<3.5?0:Os<7?1:Os<11?2:3;e!==uo&&(uo=e,e<3?Et.showCoach(t[e]):Et.hideCoach()),uo===0&&Os<.05&&Et.showCoach(t[0])}var yr={sfx:i=>{var t;return(t=xe[i])==null?void 0:t.call(xe)},play:()=>Fs(Mr(gt.level)),daily:()=>Fs(Mh(Gs())),levels:()=>{sh=Math.floor((gt.level-1)/12),ku()},closeLevels:()=>Et.hideLevels(),levelsPage:i=>{sh=Number(i.page),ku()},playLevel:i=>{Et.hideLevels(),Fs(Mr(Number(i.n)))},shop:()=>jy(),closeShop:()=>Et.hideShop(),buy:i=>{let t=ei.find(e=>e.id===i.id);if(!(!t||gt.palettes.includes(t.id))){if(gt.coins<t.cost){xe.error(),Et.toast(`Need ${t.cost-gt.coins} more coins \u2014 win matches to earn them`);return}gt.coins-=t.cost,gt.palettes.push(t.id),gt.settings.palette=t.id,Ne.save(),xe.coin(),rh(),Qt.refreshLook(),Et.toast(`${t.name} unlocked!`)}},equip:i=>{gt.palettes.includes(i.id)&&(gt.settings.palette=i.id,Ne.save(),rh(),Qt.refreshLook())},settings:()=>Qy(),closeSettings:()=>Et.hideSettings(),setSetting:(i,t)=>{var e;i==="assist"&&(t=Number(t)),i==="sens"&&(t=Number(t)),gt.settings[i]=t,po(),Qt.applySettings(),(i==="quality"||i==="reduceMotion")&&(he.resize(),(e=Qt.stage)==null||e.resize()),Ne.save()},resetProgress:async()=>{await Et.confirm({title:"Reset all progress?",body:"This erases campaign, coins and colours on this device.",ok:"Reset",cancel:"Cancel",danger:!0})&&(Ne.reset(),location.reload())},pause:()=>{if(Un==="duel")return Qt.pause();(ee==="playing"||ee==="countdown"||ee==="roundend")&&(ft.prevMode=ee,ee="paused",Te.reset(),Te.enabled=!1,Et.showPause())},resume:()=>{if(Un==="duel")return Qt.resume();ee==="paused"&&(Et.hidePause(),ee=ft.prevMode,ee==="playing"&&(Te.enabled=!0),nh=performance.now())},restart:()=>{if(Un==="duel")return Qt.restart();Et.hidePause(),Fs(ft.cfg)},quit:()=>{Et.hidePause(),xr()},tab:i=>Qt.setTab(i.tab),areaPrev:()=>Qt.setArea(-1),areaNext:()=>Qt.setArea(1),playDuel:()=>{if(Qt.noGL){Et.toast("3D needs WebGL on this device \u2014 try Arena mode");return}xe.unlock();let i=Qt.areaInfo()[Qt.areaIdx];i.locked||(oh("duel"),Qt.startMatch(gr(i.stage)))},dnext:()=>Qt.nextStage(),dretry:()=>Qt.retry(),dshare:async()=>{let i=await Qt.snapshot();if(!i){Et.toast("Could not capture image");return}await tv(i,"painball-duel.png","My Painball duel","Splatted the bot in Painball!")},swapL:()=>Qt.input.requestSwap(-1),swapR:()=>Qt.input.requestSwap(1),wear:i=>{gt.outfits.includes(i.id)&&(gt.settings.outfit=i.id,Ne.save(),Qt.refreshLook())},buyOutfit:i=>{let t=Yi.find(e=>e.id===i.id);if(!(!t||gt.outfits.includes(t.id))){if(gt.coins<t.cost){xe.error(),Et.toast(`Need ${t.cost-gt.coins} more coins \u2014 win duels to earn them`);return}gt.coins-=t.cost,gt.outfits.push(t.id),gt.settings.outfit=t.id,Ne.save(),xe.coin(),Qt.refreshLook(),Et.toast(`${t.name} unlocked!`)}},retry:()=>{Un==="arena"?Fs(ft.cfg):Qt.retry()},next:()=>{let i=ft.cfg;i.kind==="journey"?Fs(Mr(i.n+1)):xr()},menu:()=>xr(),ff:()=>{Bs=!Bs,Et.toast(Bs?"Fast-forward \xD73":"Normal speed",900)},dashBtn:()=>Te.requestDash(),reloadBtn:()=>Te.requestReload(),share:()=>ev(),install:async()=>{fo&&(fo.prompt(),fo=null,Et.toast("Thanks for installing!"))}},sh=0,fo=null,ku=()=>Et.showLevels({unlocked:gt.level,stars:gt.stars,page:sh,current:gt.level}),jy=()=>Et.showShop({coins:gt.coins,owned:gt.palettes,equipped:gt.settings.palette}),Qy=()=>Et.showSettings({settings:gt.settings,version:Gy,persistent:Ne.persistent,canVibrate:typeof navigator.vibrate=="function"});function rh(){let i=lh();Et.setPalette(i),he.setPalette(i)}async function tv(i,t,e,n){var a;let s=new File([i],t,{type:"image/png"});gt.stats.shares++,Ne.save();try{if((a=navigator.canShare)!=null&&a.call(navigator,{files:[s]})){await navigator.share({files:[s],title:e,text:n});return}}catch(o){if(o&&o.name==="AbortError")return}let r=document.createElement("a");r.href=URL.createObjectURL(i),r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(r.href),4e3),Et.toast("Image saved")}async function ev(){var n;if(!zs)return;let i=await new Promise(s=>zs.toBlob(s,"image/png"));if(!i){Et.toast("Could not create image");return}let t=new File([i],"painball-arena.png",{type:"image/png"});gt.stats.shares++,Ne.save();try{if((n=navigator.canShare)!=null&&n.call(navigator,{files:[t]})){await navigator.share({files:[t],title:"My Painball arena",text:"I painted this arena in Painball!"});return}}catch(s){if(s&&s.name==="AbortError")return}let e=document.createElement("a");e.href=URL.createObjectURL(i),e.download="painball-arena.png",document.body.appendChild(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(e.href),4e3),Et.toast("Arena saved as an image")}function xr(){Et.hideAll(),ee="menu",ft=null,Vt=null,xi=null,Te.reset(),Te.enabled=!1,Ne.save(),oh("duel");try{Qt.enterMenu()}catch(i){console.warn("3D unavailable",i),Qt.noGL=!0,Qt.tab="arena",Qt.renderMenu()}}Et=new Bi(document.getElementById("ui"),yr);Te=new Fr(document.getElementById("c"),{toWorld:(i,t)=>he.toWorld(i,t),getWorld:()=>Vt,onPause:()=>{Un==="arena"&&(ee==="paused"?yr.resume():yr.pause())},onStick:(i,t)=>{Et.updateStick(i==="move"?"move":"aim",t),t&&Et.setTouch(!0)}});Bu&&Et.setTouch(!0);Qt=new co({canvas:zu,ui:Et,S:gt,save:Ne,audio:xe,params:Nn});po();rh();var $u=()=>{var i;he.resize(),(i=Qt.stage)==null||i.resize(),ft&&ee!=="menu"&&Un==="arena"&&ch(!0)};addEventListener("resize",$u);addEventListener("orientationchange",()=>setTimeout($u,150));ah.hidden||he.resize();document.addEventListener("visibilitychange",()=>{document.hidden&&yr.pause()});addEventListener("pagehide",()=>Ne.save());addEventListener("beforeinstallprompt",i=>{i.preventDefault(),fo=i,ee==="menu"&&xr()});xr();requestAnimationFrame(ih);Fu&&(window.__game={duel:Qt,get active(){return Un},get mode(){return Un==="duel"?Qt.mode:ee},get M(){return ft},get W(){return Vt},S:gt,save:Ne,actions:yr,ui:Et,rend:he,input:Te,alive:qi,YOU:jn,killEnemies(){for(let i of Vt.ents)i.team===1&&i.alive&&(i.alive=!1,i.deadAt=Vt.t)},killYou(){let i=jn();i.alive=!1,i.deadAt=Vt.t}});"serviceWorker"in navigator&&(location.protocol==="https:"||location.hostname==="localhost")&&addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
