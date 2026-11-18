/* Ch.1. All state is derived from the paused composition timeline.
   The typed prompt uses the registry primitive's text-at-time approach. */
(() => {
  for (const [id,text] of [['keys-1','qwertyuiop'],['keys-2','asdfghjkl']]) {
    for (const letter of text) {
      const key=document.createElement('span');key.className='key';key.textContent=letter;
      document.getElementById(id).appendChild(key);
    }
  }
  const bars=[];
  for(let i=0;i<35;i++){
    const bar=document.createElement('i');bar.className='wave-bar';
    document.getElementById('waveform').appendChild(bar);bars.push(bar);
  }
  const tl=gsap.timeline({paused:true});
  const hide='#voice-row,#assistant-block,#reading,#understanding,#match-card,#cooler-row,#adjusted,#confirm-row,#task-card,#temp-chip,#brew-body,#done-body,#done-check,#saved,#typing-text,#send-glyph,#waveform,.mic-halo,.listening-ring,.step-check,.node-pulse,.steam,.aroma';
  tl.set(hide,{opacity:0},0);
  tl.set('#keyboard',{y:220},0);
  tl.set('#voice-row',{y:360},0);
  tl.set('.drop',{rotation:-40},0);
  tl.from('.greeting',{y:12,opacity:0,duration:.6,ease:'power3.out'},.1);
  tl.from('.quick-card',{y:15,opacity:0,duration:.6,ease:'power2.out'},.4);
  tl.from('.home-info',{y:10,opacity:0,duration:.55,ease:'sine.out'},.7);
  tl.from('#composer',{y:9,opacity:0,duration:.45,ease:'power2.out'},.8);
  tl.to('#microphone',{scale:1.045,duration:.4,yoyo:true,repeat:1,ease:'sine.inOut'},1.25);
  tl.to('#microphone',{scale:.9,duration:.18,ease:'power2.out'},2.2);
  tl.to('.mic-halo',{opacity:.65,duration:.15},2.22);
  tl.to('#microphone',{scale:1,duration:.16,ease:'back.out(1.1)'},2.5);
  tl.to('#placeholder',{opacity:0,duration:.15},2.5);
  tl.to('#waveform',{opacity:1,duration:.2},2.5);
  tl.to('#home .home-info',{opacity:0,duration:.24},2.5);
  tl.to('#voice-row',{opacity:1,duration:.2},2.5);
  tl.set('#voice-avatar',{opacity:0},0);
  document.querySelectorAll('.listening-ring').forEach((ring,i)=>{
    const at=2.5+i*.7;
    tl.fromTo(ring,{scale:1,opacity:.35},{scale:38,opacity:0,duration:1.8,ease:'power1.out',immediateRender:false},at);
  });
  const transcript='Make me something bright and fruity — but not sour.';
  const typeText='a bit cooler';
  const state={t:0};
  const voice=document.getElementById('voice-text');
  const typed=document.getElementById('typed-value');
  const hi=document.getElementById('hi');
  const status=document.getElementById('status-text');
  // One timeline driver makes direct seeks and reverse seeks self-contained.
  tl.to(state,{t:26,duration:26,ease:'none',onUpdate:()=>{
    const t=state.t;
    hi.textContent='Hi, Alex'.slice(0,Math.min(8,Math.max(0,Math.floor((t-.1)*18))));
    const n=t<5.3?Math.min(transcript.length,Math.max(0,Math.floor((t-2.65)*90))):transcript.length;
    voice.textContent=transcript.slice(0,n);
    typed.textContent=typeText.slice(0,Math.max(0,Math.min(typeText.length,Math.floor((t-10.83)*15))));
    status.textContent=t>=20.6?'Done':t>=20?'Resetting':t>=16.6?'Brewing':'Ready';
    document.getElementById('task-card').dataset.state=t>=20.6?'done':t>=20?'resetting':t>=16.6?'brewing':'cup-confirm';
    if(t>=2.5&&t<=5.55){
      const phase=(t-2.5)*Math.PI*4;
      bars.forEach((bar,i)=>{
        const a=.25+.36*Math.abs(Math.sin(i*.34+phase))+.18*Math.abs(Math.sin(i*.6-phase*.7))+.1*Math.abs(Math.sin(i*.91+phase*.23));
        bar.style.transform='scaleY('+a.toFixed(4)+')';
      });
    }
    document.getElementById('caret').style.opacity=(t>=10.5&&t<11.9&&Math.floor((t-10.5)*4)%2===0)?'1':'0';
  }},0);
  tl.to('#home',{x:393,duration:.6,ease:'power3.inOut'},5.3);
  tl.set('#home',{opacity:0},5.9);
  tl.to('#voice-row',{y:0,duration:.6,ease:'power3.inOut'},5.3);
  tl.to('#voice-bubble',{backgroundColor:'#171715',color:'#ffffff',borderColor:'#171715',boxShadow:'0px 0px 0px rgba(0,0,0,0)',duration:.4,ease:'power2.out'},5.4);
  tl.to('#voice-avatar',{opacity:1,duration:.25},5.55);
  tl.to('#waveform,.mic-halo',{opacity:0,duration:.25},5.3);
  tl.to('#placeholder',{opacity:1,duration:.25},5.55);
  tl.fromTo('#assistant-block',{x:-28,opacity:0},{x:0,opacity:1,duration:.45,ease:'power3.out',immediateRender:false},5.9);
  tl.to('#reading',{opacity:1,duration:.2},5.9);
  document.querySelectorAll('.drop').forEach((drop,i)=>{
    tl.fromTo(drop,{y:-14,scale:.7,opacity:0},{y:0,scale:1,opacity:1,duration:.35,ease:'back.out(1.4)',immediateRender:false},5.9+i*.35);
  });
  tl.to('#reading',{opacity:0,duration:.18},7.1);
  tl.fromTo('#understanding',{y:10,opacity:0},{y:0,opacity:1,duration:.35,ease:'power3.out',immediateRender:false},7.1);
  document.querySelectorAll('.taste-tag').forEach((tag,i)=>{
    tl.from(tag,{scale:.92,opacity:0,duration:.25,ease:'back.out(1.5)',immediateRender:false},7.38+i*.12);
    tl.fromTo(tag.querySelector('.aroma'),{y:0,opacity:.6},{y:-14,opacity:0,duration:.6,ease:'sine.out',immediateRender:false},7.55+i*.15);
  });
  tl.fromTo('#match-card',{y:12,opacity:0},{y:0,opacity:1,duration:.45,ease:'power3.out',immediateRender:false},9);
  tl.to('#keyboard',{y:0,duration:.25,ease:'power2.out'},10.5);
  tl.to('#composer',{y:-180,duration:.25,ease:'power2.out'},10.5);
  tl.to('#chat-flow',{y:-196,duration:.4,ease:'power3.out'},10.5);
  tl.to('.chat-view',{clipPath:'inset(0px 0px 198px 0px)',duration:.25},10.5);
  tl.to('#placeholder',{opacity:0,duration:.12},10.5);
  tl.to('#typing-text,#send-glyph',{opacity:1,duration:.15},10.7);
  tl.to('#mic-icon',{opacity:0,duration:.15},10.7);
  const keys=[...document.querySelectorAll('.key')];
  [...typeText].forEach((letter,i)=>{
    const key=keys.find(k=>k.textContent===(letter===' '?'space':letter));
    if(key){tl.to(key,{backgroundColor:'#adb3bd',duration:.025},10.83+i/15);tl.to(key,{backgroundColor:'#ffffff',duration:.025},10.86+i/15);}
  });
  tl.to('#microphone',{scale:.9,duration:.08},11.7);
  tl.to('#microphone',{scale:1,duration:.14,ease:'back.out(1.1)'},11.78);
  tl.fromTo('#cooler-row',{y:9,opacity:0},{y:0,opacity:1,duration:.2,ease:'power3.out',immediateRender:false},11.8);
  tl.to('#keyboard',{y:220,duration:.2,ease:'power2.in'},11.8);
  tl.to('#composer',{y:0,duration:.2,ease:'power2.in'},11.8);
  tl.to('.chat-view',{clipPath:'inset(0px 0px 0px 0px)',duration:.2},11.8);
  tl.to('#typing-text,#send-glyph',{opacity:0,duration:.12},11.8);
  tl.to('#mic-icon,#placeholder',{opacity:1,duration:.12},11.9);
  tl.to('#chat-flow',{y:-210,duration:.3,ease:'power3.out'},12);
  tl.fromTo('#adjusted',{y:9,opacity:0},{y:0,opacity:1,duration:.35,ease:'power3.out',immediateRender:false},12);
  tl.fromTo('#temp-chip',{x:8,opacity:0},{x:0,opacity:1,duration:.3,ease:'power3.out',immediateRender:false},12.15);
  tl.to('#temp-chip',{scale:1.08,duration:.15,yoyo:true,repeat:1,ease:'sine.inOut'},12.55);
  tl.to('#chat-flow',{y:-235,duration:.3,ease:'power3.out'},13.5);
  tl.fromTo('#confirm-row',{y:6,opacity:0},{y:0,opacity:1,duration:.3,ease:'power3.out',immediateRender:false},13.5);
  tl.to('#confirm',{scale:.96,duration:.1,ease:'power2.out'},14.2);
  tl.to('#confirm',{scale:1,backgroundColor:'#171715',color:'#ffffff',duration:.18,ease:'power2.out'},14.3);
  tl.to('#chat-flow',{y:-535,duration:.55,ease:'power3.inOut'},14.8);
  tl.to('#adjusted',{opacity:0,duration:.2},14.8);
  tl.fromTo('#task-card',{y:12,opacity:0},{y:0,opacity:1,duration:.45,ease:'power3.out',immediateRender:false},14.8);
  tl.to('#cup-cta',{scale:1.012,duration:.35,yoyo:true,repeat:1,ease:'sine.inOut'},15.4);
  tl.to('#cup-cta',{scale:.96,duration:.1},16.2);
  tl.to('#cup-cta',{scale:1,duration:.18,ease:'power2.out'},16.3);
  tl.to('#cup-body',{opacity:0,duration:.2},16.6);
  tl.fromTo('#brew-body',{y:6,opacity:0},{y:0,opacity:1,duration:.2,ease:'power2.out',immediateRender:false},16.6);
  const stages=[{id:1,start:16.6,end:17.5},{id:2,start:17.5,end:19.4},{id:3,start:19.4,end:20}];
  for(const s of stages){
    tl.to('#node-'+s.id,{backgroundColor:'#ff7e2e',borderColor:'#ff7e2e',color:'#171715',duration:.18},s.start);
    tl.to('#name-'+s.id,{color:'#171715',duration:.18},s.start);
    tl.fromTo('#node-'+s.id+' .node-pulse',{opacity:.6,scale:1},{opacity:0,scale:1.24,duration:.55,ease:'sine.out',immediateRender:false},s.start+.18);
    tl.to('#node-'+s.id,{backgroundColor:'#171715',borderColor:'#171715',duration:.18},s.end);
    tl.to('#node-'+s.id+' .step-number',{opacity:0,duration:.18},s.end);
    tl.to('#node-'+s.id+' .step-check',{opacity:1,duration:.18},s.end);
  }
  tl.fromTo('.liquid-flow',{x:-92},{x:315,duration:1,repeat:3,ease:'none',immediateRender:false},16.6);
  tl.to('#brew-body',{opacity:.65,duration:.2},20);
  tl.to('#brew-body',{opacity:0,duration:.2},20.6);
  tl.to('#task-status',{backgroundColor:'#e9f2ec',borderColor:'#a5c9b6',color:'#2e7a59',duration:.2},20.6);
  tl.to('#status-dot',{backgroundColor:'#2f7d5b',duration:.2},20.6);
  tl.fromTo('#done-check',{scale:.7,opacity:0},{scale:1,opacity:1,duration:.24,ease:'back.out(1.4)',immediateRender:false},20.6);
  tl.fromTo('#done-body',{y:12,opacity:0},{y:0,opacity:1,duration:.4,ease:'power3.out',immediateRender:false},20.6);
  tl.to('#just-right',{scale:.96,duration:.1},22);
  tl.to('#just-right',{scale:1,backgroundColor:'#2f7d5b',borderColor:'#2f7d5b',duration:.18,ease:'power2.out'},22.1);
  tl.to('#saved',{opacity:1,duration:.25},22.15);
  document.querySelectorAll('.steam').forEach((steam,i)=>tl.fromTo(steam,{y:8,opacity:0},{y:-14,opacity:0,keyframes:[{opacity:.25,duration:.18},{opacity:0,duration:.62}],duration:.8,ease:'sine.out',immediateRender:false},24+i*.14));
  tl.seek(0);
  window.__timelines=window.__timelines||{};
  window.__timelines.main=tl;
})();
