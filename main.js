const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.reveal-words').forEach(el=>{el.innerHTML=el.textContent.split(' ').map(w=>`<span>${w}</span>`).join('')});
if(!reduce&&window.gsap){gsap.registerPlugin(ScrollTrigger);
gsap.to('.l1',{yPercent:15,scale:1.15,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
gsap.to('.l2',{yPercent:-10,scale:1.35,rotateX:12,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
gsap.to('.hero-txt',{y:-160,opacity:0,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'70% top',scrub:true}});
gsap.to('.reveal-words span',{opacity:1,stagger:.1,scrollTrigger:{trigger:'.statement',start:'top 70%',end:'center center',scrub:true}});
const track=document.querySelector('.track');
gsap.to(track,{x:()=>-(track.scrollWidth-innerWidth),ease:'none',scrollTrigger:{trigger:'.pin-gallery',pin:true,scrub:1,end:()=>'+='+track.scrollWidth,invalidateOnRefresh:true}});
const tl=gsap.timeline({scrollTrigger:{trigger:'.depth',pin:true,scrub:1,end:'+=150%'}});
[['.c1',-600],['.c2',-300],['.c3',-900],['.c4',-450]].forEach(([s,z],i)=>tl.fromTo(s,{z,rotateY:i%2?-25:25,opacity:0},{z:200,rotateY:0,opacity:1,ease:'power2.out'},0));
tl.fromTo('.depth-txt',{scale:.6,opacity:0},{scale:1,opacity:1},.3);
gsap.from('.disc li',{y:80,opacity:0,stagger:.08,scrollTrigger:{trigger:'.disc',start:'top 80%',end:'bottom 60%',scrub:true}});
gsap.fromTo('.aerial .zoom',{scale:1.4},{scale:1,ease:'none',scrollTrigger:{trigger:'.aerial',start:'top bottom',end:'bottom top',scrub:true}});
gsap.fromTo('.marq',{x:'10vw'},{x:'-60%',ease:'none',scrollTrigger:{trigger:'.clients',start:'top bottom',end:'bottom top',scrub:true}});
}
