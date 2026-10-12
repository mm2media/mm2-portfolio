(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const L=[...document.querySelectorAll('.layer')];let tx=0,ty=0,last=0;
const set=(x,y)=>{tx=x;ty=y;last=performance.now()};
const apply=()=>L.forEach(l=>{const d=+l.dataset.d;l.style.transform=`translate3d(${tx*d*24}px,${ty*d*18}px,0) rotateY(${tx*d*3}deg) rotateX(${-ty*d*3}deg)`});
addEventListener('pointermove',e=>{if(e.pointerType==='mouse'){set(e.clientX/innerWidth*2-1,e.clientY/innerHeight*2-1)}},{passive:true});
addEventListener('deviceorientation',e=>{if(e.gamma!=null)set(Math.max(-1,Math.min(1,e.gamma/30)),Math.max(-1,Math.min(1,(e.beta-45)/30)))},{passive:true});
const loop=t=>{if(t-last>2500){tx=Math.sin(t/4200)*.5;ty=Math.cos(t/5300)*.35}apply();requestAnimationFrame(loop)};requestAnimationFrame(loop)})();
