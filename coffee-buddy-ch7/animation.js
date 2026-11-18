/* Ch.7: one continuous, seek-safe conversation, one shared glass. */
(async () => {
  for (const [id, letters] of [['keys-1','qwertyuiop'], ['keys-2','asdfghjkl']]) {
    for (const letter of letters) {
      const key = document.createElement('span');
      key.className = 'key'; key.textContent = letter;
      document.getElementById(id).appendChild(key);
    }
  }
  await document.fonts.ready;
  const $ = id => document.getElementById(id);
  const rect = $('app').getBoundingClientRect(), ratio = rect.width / 393;
  const box = el => {
    const b = el.getBoundingClientRect();
    return {x:(b.left-rect.left)/ratio, y:(b.top-rect.top)/ratio, w:b.width/ratio, h:b.height/ratio};
  };
  // Measure only during setup. Flying words begin on their original glyphs.
  for (const [source,token] of [['ingredient-tonic','tonic-word'],['ingredient-orange','orange-word']]) {
    const b = box($(source)); $(token).style.left=b.x+'px'; $(token).style.top=b.y+'px';
  }
  const tonic=box($('tonic-word')), orange=box($('orange-word'));
  const make=box($('make-it')), cup=box($('cup-cta')), save=box($('just-right'));
  for(const [id,x,y] of [
    ['tap-make',make.x+make.w/2,make.y+make.h/2-66],
    ['tap-cup',cup.x+cup.w/2,cup.y+cup.h/2-306],
    ['tap-save',save.x+save.w/2,458],
  ]) {$(id).style.left=x-19+'px';$(id).style.top=y-19+'px';}

  const tl=gsap.timeline({paused:true,defaults:{ease:'power2.out'}});
  gsap.set('#user-row,#inventing,#creation,#recipe,#make-row,#task-card,#brew-body,#done-body,#saved,#closing,#typing-text,#send-glyph,#dimmer,#cup-motion,#tonic-word,#orange-word,#pour-jet,#condensation-sheen,.tap-mark,.step-check,#spark,.drop',{opacity:0});
  gsap.set('#keyboard',{y:220});
  gsap.set('.drop',{rotation:-40});
  gsap.set('#tonic-fill,#espresso-fill',{scaleY:0,transformOrigin:'50% 100%'});
  gsap.set('#orange-motion',{opacity:0,y:-130,rotation:-28,svgOrigin:'223 95'});
  gsap.set('#condensation,#bubbles',{opacity:0});
  gsap.set('#cup-motion',{x:0,y:0,scale:1,transformOrigin:'0 0'});
  gsap.set('#pour-jet',{scaleY:0});
  const prompt="It's a hot afternoon. I have tonic water and an orange — surprise me.";
  const created='Created for you: Espresso Tonic No.3';
  const profile='Your bright profile, cut with citrus. Served at 5°C.';
  const closing='No.3 is yours. Ask for it by name — or invent the next one.';
  const state={t:0};
  const typeAt=(text,t,start,duration)=>text.slice(0,Math.floor(text.length*Math.max(0,Math.min(1,(t-start)/duration))+.001));
  const update=()=>{
    const t=state.t;
    $('typed-value').textContent=typeAt(prompt,t,1.35,2.35);
    $('created-line').textContent=typeAt(created,t,6.2,.68);
    $('profile-line').textContent=typeAt(profile,t,6.95,.96);
    $('closing-line').textContent=typeAt(closing,t,21,1.4);
    $('caret').style.opacity=t>=1.2&&t<3.8&&Math.floor(t*4)%2===0?'1':'0';
    $('composer').classList.toggle('typing',t>=1.2&&t<3.8);
    $('status-text').textContent=t>=19.4?'Done':t>=18.7?'Resetting':t>=15.4?'Brewing':'Ready';
    $('task-card').dataset.state=t>=19.4?'done':t>=18.7?'resetting':t>=15.4?'brewing':'cup-confirm';
  };
  tl.to(state,{t:24,duration:24,ease:'none',onUpdate:update},0);
  tl.addLabel('context',0).addLabel('invent',4.4).addLabel('create',6.2).addLabel('ingredients',9.2)
    .addLabel('confirm',13.8).addLabel('espresso',15.4).addLabel('save',19.4).addLabel('hold',22.4);
  // Home Ready → natural-language input.
  tl.fromTo('.greeting',{opacity:0,y:10},{opacity:1,y:0,duration:.5,immediateRender:false},.05);
  tl.to('#keyboard',{y:0,duration:.3},1.2);
  tl.to('#composer',{y:-177,duration:.3},1.2);
  tl.to('#placeholder,#mic-icon',{opacity:0,duration:.12},1.2);
  tl.to('#typing-text,#send-glyph',{opacity:1,duration:.15},1.3);
  tl.to('.quick-card,.home-info',{opacity:0,duration:.1},1.1);
  const keys=[...document.querySelectorAll('.key')];
  [...prompt].forEach((letter,i)=>{
    const key=keys.find(k=>k.textContent===(letter===' '?'space':letter.toLowerCase()));
    if(key){const at=1.35+i*2.35/prompt.length;
      tl.to(key,{backgroundColor:'#adb3bd',duration:.012},at);
      tl.to(key,{backgroundColor:'#ffffff',duration:.01},at+.014);}
  });
  tl.to('#microphone',{scale:.9,duration:.08},3.8);
  tl.to('#microphone',{scale:1,duration:.15},3.88);
  tl.to('#home',{x:393,opacity:0,duration:.12,ease:'power3.inOut'},3.8);
  tl.fromTo('#user-row',{y:100,opacity:0},{y:0,opacity:1,duration:.42,ease:'power3.out',immediateRender:false},3.95);
  tl.to('#keyboard',{y:220,duration:.3,ease:'power2.in'},3.8);
  tl.to('#composer',{y:0,duration:.3},3.8);
  tl.to('#typing-text,#send-glyph',{opacity:0,duration:.12},3.8);
  tl.to('#placeholder,#mic-icon',{opacity:1,duration:.2},3.9);
  // Three drops and a finite invention spark.
  tl.to('#inventing',{opacity:1,duration:.2},4.4);
  document.querySelectorAll('.drop').forEach((drop,i)=>{
    tl.fromTo(drop,{y:-14,scale:.65,opacity:0},{y:0,scale:1,opacity:1,duration:.3,ease:'back.out(1.3)',immediateRender:false},4.4+i*.35);
  });
  tl.to('#spark',{opacity:1,duration:.05},5.65);
  document.querySelectorAll('#spark i').forEach((ray,i)=>{
    const angle=i*Math.PI*2/5;
    tl.fromTo(ray,{x:0,y:0,scaleY:.4,rotation:i*72,opacity:1},{x:Math.sin(angle)*15,y:-Math.cos(angle)*15,
      scaleY:1,opacity:0,duration:.4,immediateRender:false},5.65);
  });
  tl.to('#inventing',{opacity:0,duration:.16},6.1);
  tl.fromTo('#creation',{y:7,opacity:0},{y:0,opacity:1,duration:.3,immediateRender:false},6.2);
  tl.fromTo('#recipe',{y:12,opacity:0},{y:0,opacity:1,duration:.36,immediateRender:false},8);
  // Ingredient words become the layered cup, then dock into the exact slot.
  tl.to('#dimmer',{opacity:1,duration:.22},9.2);
  tl.to('#tonic-word,#orange-word',{opacity:1,duration:.05},9.2);
  tl.to('#ingredient-tonic,#ingredient-orange',{opacity:0,duration:.05},9.2);
  tl.to('#user-row,#creation',{opacity:0,duration:.16},9.25);
  tl.to('#chat-flow',{y:-226,duration:.48,ease:'power3.inOut'},9.25);
  tl.fromTo('#cup-motion',{y:14,opacity:0},{y:0,opacity:1,duration:.32,immediateRender:false},9.3);
  tl.to('#tonic-word',{x:158-tonic.x,y:386-tonic.y,scale:.85,duration:.48,ease:'power2.inOut'},9.2);
  tl.to('#tonic-word',{y:424-tonic.y,scale:.55,opacity:0,duration:.18,ease:'power2.in'},9.68);
  tl.to('#orange-word',{x:255-orange.x,y:317-orange.y,duration:.55,ease:'power2.inOut'},9.2);
  tl.to('#pour-jet',{opacity:.65,scaleY:1,duration:.15},9.7);
  tl.to('#tonic-fill',{scaleY:1,duration:.65,ease:'power1.inOut'},9.7);
  tl.to('#bubbles',{opacity:.8,duration:.35},9.85);
  tl.to('#pour-jet',{backgroundColor:'#704032',duration:.15},10.3);
  tl.to('#espresso-fill',{scaleY:1,duration:.62,ease:'power1.inOut'},10.3);
  tl.to('#pour-jet',{scaleY:0,opacity:0,duration:.16},10.82);
  tl.to('#orange-word',{x:244-orange.x,y:385-orange.y,scale:.65,opacity:0,duration:.24,ease:'power2.in'},10.95);
  tl.to('#orange-motion',{opacity:1,y:0,rotation:0,duration:.45,ease:'power2.inOut'},11.04);
  tl.to('#cup-wobble',{rotation:-.8,transformOrigin:'50% 92%',duration:.12},11.28);
  tl.to('#cup-wobble',{rotation:0,duration:.22,ease:'sine.inOut'},11.4);
  tl.to('#condensation',{opacity:.6,duration:.18},11.55);
  tl.to('#slot-outline',{opacity:0,duration:.2},11.72);
  tl.to('#cup-motion',{x:188.5,y:-160.4,scale:88/240,duration:.55,ease:'power3.inOut'},11.72);
  tl.to('#dimmer',{opacity:0,duration:.2},12.4);
  tl.to('#creation',{opacity:1,duration:.2},12.4);
  tl.to('#ingredient-tonic,#ingredient-orange',{opacity:1,duration:.15},12.4);
  tl.to('#chat-flow',{y:-66,duration:.36,ease:'power3.inOut'},12.4);
  tl.to('#cup-motion',{y:-.4,duration:.36,ease:'power3.inOut'},12.4);
  tl.fromTo('#make-row',{y:7,opacity:0},{y:0,opacity:1,duration:.28,immediateRender:false},12.75);
  // Registry shimmer-sweep: one subtle pass, no ambient looping.
  tl.fromTo('.shimmer-sweep-target',{'--shimmer-pos':'-20%'},{'--shimmer-pos':'120%',duration:.65,ease:'power2.inOut',immediateRender:false},12.5);
  const tap=(button,mark,at)=>{
    tl.to(button,{scale:.96,duration:.08},at);tl.to(button,{scale:1,duration:.14},at+.08);
    tl.fromTo(mark,{opacity:.65,scale:.65},{opacity:0,scale:1.35,duration:.36,immediateRender:false},at);
  };
  tap('#make-it','#tap-make',13.2);
  tl.to('#make-it',{backgroundColor:'#171715',color:'#fcfbf9',duration:.18},13.28);
  tl.to('#make-row,#creation',{opacity:0,duration:.16},13.8);
  tl.to('#chat-flow',{y:-226,duration:.36,ease:'power3.inOut'},13.8);
  tl.to('#cup-motion',{y:-160.4,duration:.36,ease:'power3.inOut'},13.8);
  tl.to('#recipe',{height:194,duration:.3},13.8);
  tl.fromTo('#task-card',{y:-66,opacity:0},{y:-80,opacity:1,duration:.34,immediateRender:false},13.8);
  tap('#cup-cta','#tap-cup',14.8);
  // One task card: espresso execution, not automatic cocktail assembly.
  tl.to('#cup-body',{opacity:0,duration:.15},15.4);
  tl.fromTo('#brew-body',{y:4,opacity:0},{y:0,opacity:1,duration:.18,immediateRender:false},15.4);
  for(const stage of [{id:1,start:15.4,end:16.3},{id:2,start:16.3,end:18.1},{id:3,start:18.1,end:18.7}]){
    tl.to('#node-'+stage.id,{backgroundColor:'#ff7e2e',borderColor:'#ff7e2e',color:'#171715',duration:.12},stage.start);
    tl.to('#name-'+stage.id,{color:'#171715',duration:.12},stage.start);
    tl.to('#node-'+stage.id,{backgroundColor:'#171715',borderColor:'#171715',duration:.12},stage.end);
    tl.to('#node-'+stage.id+' .step-number',{opacity:0,duration:.06},stage.end);
    tl.to('#node-'+stage.id+' .step-check',{opacity:1,duration:.06},stage.end+.06);
  }
  tl.fromTo('.liquid-flow',{x:-92},{x:315,duration:.96,repeat:3,ease:'none',immediateRender:false},15.4);
  tl.to('#brew-body',{opacity:.55,duration:.18},18.7);
  tl.to('#brew-body',{opacity:0,duration:.16},19.4);
  tl.to('#task-status',{backgroundColor:'#e9f2ec',borderColor:'#a5c9b6',color:'#2e7a59',duration:.2},19.4);
  tl.to('#status-dot',{backgroundColor:'#2f7d5b',duration:.2},19.4);
  // Final stack fits above the fixed composer; preserve the same glass.
  tl.to('#recipe',{height:176,duration:.3},19.4);
  tl.to('.chips',{y:7,duration:.3},19.4);
  tl.to('#icon-slot',{y:-15,duration:.3},19.4);
  tl.to('#cup-motion',{y:-175.4,duration:.3},19.4);
  tl.to('#task-card',{height:192,y:-98,duration:.3},19.4);
  tl.set('#closing',{y:-26},0);
  tl.fromTo('#done-body',{y:5,opacity:0},{y:0,opacity:1,duration:.28,immediateRender:false},19.5);
  tap('#just-right','#tap-save',20.4);
  tl.to('#just-right',{backgroundColor:'#2f7d5b',borderColor:'#2f7d5b',duration:.16},20.48);
  tl.to('#saved',{opacity:1,duration:.22},20.55);
  tl.to('#closing',{opacity:1,duration:.2},21);
  document.querySelectorAll('#bubbles circle').forEach((bubble,i)=>{
    const cycle=1.65+i*.08, at=9.8+i*.1;
    tl.fromTo(bubble,{y:12,opacity:0},{y:-15,opacity:.8,duration:cycle,repeat:Math.max(0,Math.floor((24-at)/cycle)-1),ease:'sine.inOut',immediateRender:false},at);
  });
  tl.fromTo('#condensation-sheen',{x:-12,opacity:0},{x:18,opacity:.35,duration:.4,immediateRender:false},22.4);
  tl.to('#condensation-sheen',{x:30,opacity:0,duration:.3},22.8);
  tl.seek(0);update();
  window.__timelines=window.__timelines||{};
  window.__timelines.main=tl;
})();
