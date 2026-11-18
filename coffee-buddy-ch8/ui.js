/* Shared approved UI templates; static poses and the animation use the same components. */
(() => {
  const A='assets/';
  const avatar=(role='buddy')=>`<span class="avatar ${role==='buddy'?'buddy-avatar':'user-avatar'}" role="img" aria-label="${role==='buddy'?'Coffee Buddy':'User'}"></span>`;
  const assistant=content=>`<div class="row">${avatar()}${content}</div>`;
  const user=text=>`<div class="row user-row"><div class="bubble">${text}</div>${avatar('user')}</div>`;
  const shell=()=>`<div class="statusbar"><span>9:41</span><img src="${A}figma/ios-status.png" alt=""></div><img class="profile" src="${A}avatars/user-cup.svg" alt="User coffee cup avatar"><div class="home-indicator"></div>`;
  const composer=(voice=false)=>`<div class="composer${voice?' voice':''}"><div class="composer-copy">${voice?'<span>Make me something smooth and chocolatey — with oat milk.<i class="caret"></i></span>':'What would you like? Tell Yeema'}</div><div class="voice-control">${voice?'<div class="waveform"><i></i><i></i><i></i><i></i><i></i></div>':`<div class="microphone"><img src="${A}figma/13c65.svg" alt="Microphone"></div>`}</div></div>`;
  const chat=(content,cls='')=>`<div class="chat-viewport"><div class="flow ${cls}">${content}</div></div>`;
  const greeting=()=>'<h1 class="greeting"><span>Hi, Alex</span><span>What would you like today?</span></h1>';
  const taste=()=>assistant('<div class="content-column"><div class="assistant-card">A smooth, chocolatey oat latte</div><div class="taste-tags"><span>Chocolatey</span><span>Silky</span><span>Oat milk</span></div></div>');
  const match=(name='Velvet Oat Latte',saved=false)=>`<section class="drink-card"><div class="eyebrow">${saved?'FROM YOUR DRINK LIBRARY':'YOUR COFFEE MATCH'}</div><h2>${name}</h2><p>Cocoa-soft espresso folded into steamed oat milk.</p><div class="drink-disc"><img src="${A}drinks/latte.svg" alt="Oat latte illustration"></div><div class="drink-chips"><span>Medium-dark roast</span><span>Cocoa</span><span>Oat milk</span></div></section>`;
  const stackedDrink=(saved=false)=>match(saved?'Midnight Cloud':'Velvet Oat Latte',saved).replace('class="drink-card"','class="drink-card stacked-drink"');
  const taskContainer=(card,fullWidth)=>fullWidth?card.replace('class="task-card ', 'class="task-card full-task '):assistant(card);
  const place=(repeat=false)=>assistant(`<section class="assistant-card place-card">${repeat?'<p class="eyebrow" style="margin:0 0 9px">MIDNIGHT CLOUD</p>':''}<h2>Place your cup under the spout</h2><p>Once it's set, start brewing.</p><div class="cta">Cup is in place</div></section>`);
  const task=(state='Brewing',name='Velvet Oat Latte',mode='brew',fullWidth=false)=>taskContainer(`<section class="task-card ${mode==='brew'?'progress-reference':''}"><div class="task-head"><div class="heading"><h2>${name}</h2><p class="machine">Yeema One</p></div><span class="state ${state==='Done'?'done':''}">${mode==='brew'?'<i class="brewing-dot"></i>':''}<span class="status-copy">${state}</span></span></div>${mode==='brew'?'<div class="task-steps"><i class="step-connector"></i><div class="task-step complete"><span class="node">✓</span><span>Grinding</span></div><div class="task-step active"><span class="node">2</span><span>Extraction</span></div><div class="task-step"><span class="node">3</span><span>Disposing</span></div></div><div class="milk-line"><i></i><span>Steaming milk · venturi</span></div><div class="progress"><i></i></div><div class="stop"><i class="stop-dot"></i><span>Stop</span></div>':`<div class="done-summary"><span class="done-check">✓</span><div><p>${name}</p><small>Ground · Extracted · Reset</small></div></div>${mode==='saved'?'<p class="saved-state">Midnight Cloud · in your library</p><div class="view-library"><span>View library</span><span>→</span></div>':''}`}</section>`,fullWidth);
  const feedback=(selected=false,fullWidth=false)=>taskContainer(`<section class="task-card rating-card"><div class="task-head"><div class="heading"><h2>Velvet Oat Latte</h2><p class="machine">Yeema One</p></div><span class="state done"><i class="rating-done-dot"></i><span>Done</span></span></div><div class="feedback${selected?' rated':''}"><div class="feedback-options"><span>Too sour</span><span>Too bitter</span><span>Too strong</span><span>Too weak</span></div><div class="feedback-actions"><div class="cta">Just right</div><div class="secondary">Later</div></div><p class="feedback-saved">Saved to your creations.</p></div></section>`,fullWidth);
  const naming=()=>'<section class="naming-card"><h3>Love it? Name it and keep it.</h3><div class="name-field"><span>Midnight Cloud<i class="caret"></i></span></div><div class="cta">Save to library</div></section>';
  const back=label=>`<div class="back-nav"><span class="arrow">‹</span><span>${label}</span></div>`;
  const tile=(name,type,tag,newly=false)=>`<article class="library-tile${newly?' new':''}">${newly?'<span class="just-saved">Just saved</span>':''}<h2>${name}</h2><div class="tile-disc"><img src="${A}drinks/${type}.svg" alt="${type}"></div><span class="tile-tag">${tag}</span></article>`;
  const library=()=>`${back('Coffee Buddy')}<section class="library-main"><h1>Your drink library</h1><p class="library-sub">3 drinks · synced with your account</p><div class="library-grid">${tile("Alex's Shot",'espresso','Espresso')}${tile('Morning Americano','americano','Americano')}${tile('Midnight Cloud','latte','Oat milk',true)}<article class="library-tile empty"><span class="plus">+</span><p>Brew something new</p></article></div></section>`;
  const data=[['Dose','18 g'],['Grind level','3'],['Extraction','low-pressure pre-infusion → 9 bar'],['Yield','36 g'],['Stages','2 · pre-infusion + extraction']];
  const detail=()=>`${back('Your drink library')}<section class="detail-main"><div class="detail-hero"><h1>Midnight Cloud</h1><p>Velvet Oat Latte base · Yeema One</p><div class="hero-disc"><img src="${A}drinks/latte.svg" alt="Oat latte"></div></div><div class="data-card"><div class="eyebrow">ESPRESSO BASE</div>${data.map(([label,value])=>`<div class="data-row"><span class="data-label">${label}</span><span class="data-value">${value}</span></div>`).join('')}</div><p class="manual-note">Grind is set manually on the machine.</p><div class="detail-actions"><div class="cta">Re-brew →</div><div class="secondary">Adjust</div></div></section>`;
  const frames=[
    {id:'01',time:'0.0–1.2s',at:1,title:'问候',content:()=>chat(greeting())+composer()},
    {id:'02',time:'1.2–2.8s',at:2.5,title:'语音需求',content:()=>chat(greeting())+composer(true)},
    {id:'03',time:'2.8–4.0s',at:3.4,title:'理解口味',content:()=>chat(user('Make me something smooth and chocolatey — with oat milk.')+assistant('<div class="assistant-card"><div class="drops"><i></i><i></i><i></i></div>Yeema is reading your taste</div>'),'inset-top')+composer()},
    {id:'04',time:'4.0–5.8s',at:5.1,title:'口味结构化',content:()=>chat(user('Make me something smooth and chocolatey — with oat milk.')+taste(),'inset-top')+composer()},
    {id:'05',time:'5.8–8.6s',at:6.9,title:'Ch.7 同款推荐卡',content:()=>chat(taste()+match()+'<div class="confirm-row"><div class="confirm-chip">Brew it →</div>'+avatar('user')+'</div>')+composer()},
    {id:'06',time:'8.6–10.4s',at:9.6,title:'首次放杯确认',content:()=>chat(user('Brew it →')+place(),'inset-top')+composer()},
    {id:'07',time:'10.4–14.4s',at:12.3,title:'制作与奶泡状态',content:()=>chat(stackedDrink()+task('Brewing','Velvet Oat Latte','brew',true),'stack-position')+composer()},
    {id:'08',time:'14.4–15.8s',at:15.0,title:'完成与口味确认',content:()=>chat(stackedDrink()+feedback(false,true),'stack-position')+composer()},
    {id:'09',time:'15.8–17.8s',at:17.1,title:'给饮品命名',content:()=>chat(feedback(true,true)+naming(),'done-position')+composer()},
    {id:'10',time:'17.8–19.8s',at:19.0,title:'保存进私人饮品库',content:()=>chat(task('Done','Velvet Oat Latte','saved')+`<div class="saved-preview"><img src="${A}drinks/latte.svg" alt="Oat latte"><div><p>Midnight Cloud</p><small>Velvet Oat Latte</small></div></div>`,'done-position')+composer()},
    {id:'11',time:'20.6–22.6s',at:21.8,title:'私人饮品库 · 3 杯 + 1 空位',content:library},
    {id:'12',time:'22.6–26.6s',at:25.2,title:'配方详情 · 保留 4 秒',content:detail},
    {id:'13',time:'27.8–29.0s',at:28.3,title:'复现前再次确认放杯',content:()=>chat(user('Re-brew Midnight Cloud →')+place(true),'inset-top')+composer()},
    {id:'14',time:'29.0–33.0s',at:31.0,title:'完整复现同一配方',content:()=>chat(stackedDrink(true)+task('Brewing','Midnight Cloud','brew',true),'stack-position')+composer()},
    {id:'15',time:'33.0–34.4s',at:33.7,title:'复现完成',content:()=>chat(stackedDrink(true)+task('Done','Midnight Cloud','done',true),'stack-position')+composer()}
  ];
  const show=id=>{
    const frame=frames.find(f=>f.id===String(id).padStart(2,'0'))||frames[0];
    document.querySelector('#app').innerHTML=shell()+frame.content();
    document.documentElement.dataset.frame=frame.id;
    document.title=`Ch.8 · ${frame.id} · ${frame.title}`;
    return frame;
  };
  window.CoffeeBuddyCh8={frames,show,ui:{avatar,assistant,user,shell,composer,chat,greeting,taste,match,stackedDrink,place,task,feedback,naming,back,library,detail}};
  if(!document.documentElement.hasAttribute('data-dynamic'))show(new URLSearchParams(location.search).get('frame')||'01');
  document.fonts.ready.then(()=>{document.documentElement.dataset.ready='true';});
})();
