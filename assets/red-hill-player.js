(() => {
  const script = document.currentScript;
  const base = new URL(script.dataset.audioBase || 'audio/', script.src);
  const tracks = [
    {id:540662,title:'Sentimental Acoustic Cinematic Folk – Loop',artist:'Sonican',source:'https://pixabay.com/music/folk-sentimental-acoustic-cinematic-folk-loop-540662/'},
    {id:246502,title:'Atmospheric Acoustic Cinematic – Emotional Journey',artist:'Sonican',source:'https://pixabay.com/music/acoustic-group-atmospheric-acoustic-cinematic-emotional-journey-246502/'},
    {id:362273,title:'Nature Travel – Acoustic Music',artist:'Sonican',source:'https://pixabay.com/music/acoustic-group-nature-travel-acoustic-music-362273/'},
    {id:139936,title:'Nature Wakes Up',artist:'folk_acoustic',source:'https://pixabay.com/music/acoustic-group-nature-wakes-up-139936/'}
  ];
  const box = document.createElement('aside'); box.className='rh-music'; box.setAttribute('aria-label','Optional background music');
  box.innerHTML=`<div class="music-handle"><button type="button" class="music-toggle" aria-expanded="false" aria-controls="music-controls">♫ <span>Music</span></button><button type="button" class="music-mute" aria-label="Mute music" aria-pressed="false">Mute</button></div>
    <div id="music-controls" hidden><div class="music-panel-header"><span>Now playing</span><button type="button" class="music-minimize" aria-label="Minimize music controls">Minimize</button></div><p class="music-title"></p><p class="music-artist"></p><div class="music-buttons"><button type="button" class="music-prev" aria-label="Previous track">‹</button><button type="button" class="music-play">Play</button><button type="button" class="music-next" aria-label="Next track">›</button></div><label class="music-volume">Volume <input type="range" min="0" max="100" value="75" step="5" aria-label="Music volume" /></label><p class="music-state" role="status" aria-live="polite">Starting music…</p><a class="music-credit" target="_blank" rel="noopener">Track credit · Pixabay</a></div>`;
  document.body.append(box);
  const audio = document.createElement('audio');audio.preload='auto';audio.volume=.75;audio.setAttribute('aria-label','Red Hill background music');box.append(audio);
  const panel=box.querySelector('#music-controls'),toggle=box.querySelector('.music-toggle'),play=box.querySelector('.music-play'),mute=box.querySelector('.music-mute'),volume=box.querySelector('input'),status=box.querySelector('.music-state');
  let index=0, loaded=null, wanted=false, generation=0, timer=null, hover=false, keyboardMode=false;
  const mobile=matchMedia('(max-width:760px)');
  const describe=()=>{const t=tracks[index];box.dataset.trackId=t.id;box.querySelector('.music-title').textContent=t.title;box.querySelector('.music-artist').textContent=t.artist+' · '+(index+1)+' / '+tracks.length;box.querySelector('.music-credit').href=t.source;};
  const sync=()=>{play.textContent=wanted?'Pause':'Play';play.setAttribute('aria-label',wanted?'Pause music':'Play music');mute.textContent=audio.muted?'Unmute':'Mute';mute.setAttribute('aria-label',audio.muted?'Unmute music':'Mute music');mute.setAttribute('aria-pressed',String(audio.muted));};
  const expand=()=>{panel.hidden=false;toggle.setAttribute('aria-expanded','true');};
  const collapse=(force=false)=>{if(!force&&(keyboardMode||!mobile.matches)&&box.contains(document.activeElement))return;if(panel.contains(document.activeElement))toggle.focus({preventScroll:true});panel.hidden=true;toggle.setAttribute('aria-expanded','false');clearTimeout(timer);};
  const schedule=()=>{clearTimeout(timer);timer=setTimeout(()=>{if(!hover&&!((keyboardMode||!mobile.matches)&&box.contains(document.activeElement)))collapse();else schedule();},mobile.matches?5000:15000);};
  const fail=()=>{wanted=false;generation++;audio.pause();loaded=null;status.textContent='This track could not load. Try Play again or choose Next.';sync();};
  const start=async()=>{wanted=true;const token=++generation;sync();status.textContent='Loading…';
    if(loaded!==index){audio.src=new URL(tracks[index].id+'.mp3',base).href;loaded=index;audio.load();}
    try{await audio.play();if(token!==generation){if(!wanted)audio.pause();return;}status.textContent='Playing';toggle.querySelector('span').textContent='Music';sync();}catch(error){if(token!==generation)return;if(error.name==='NotAllowedError'){wanted=false;status.textContent='Tap Play to start music.';toggle.querySelector('span').textContent='Play music';expand();sync();schedule();}else fail();}
  };
  const select=(offset)=>{const resume=wanted;generation++;audio.pause();index=(index+offset+tracks.length)%tracks.length;loaded=null;describe();wanted=false;status.textContent='Press Play to listen';sync();if(resume)start();};
  play.onclick=()=>{if(wanted){wanted=false;generation++;audio.pause();status.textContent='Paused';sync();}else start();schedule();};
  box.querySelector('.music-next').onclick=()=>{select(1);schedule();};box.querySelector('.music-prev').onclick=()=>{select(-1);schedule();};
  mute.onclick=()=>{audio.muted=!audio.muted;sync();schedule();};
  volume.oninput=()=>{audio.volume=Number(volume.value)/100;if(audio.volume>0)audio.muted=false;sync();schedule();};
  audio.addEventListener('ended',()=>select(1));audio.addEventListener('error',fail);
  let toggleWasOpen=false;
  toggle.onpointerdown=()=>{toggleWasOpen=!panel.hidden;};
  toggle.onclick=e=>{const close=e.detail>0?toggleWasOpen:!panel.hidden;if(close)collapse(true);else expand();schedule();};
  box.querySelector('.music-minimize').onclick=()=>collapse(true);
  document.addEventListener('keydown',e=>{if(e.key==='Tab')keyboardMode=true;});
  document.addEventListener('pointerdown',()=>{keyboardMode=false;},true);
  box.addEventListener('pointerdown',schedule);
  box.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){hover=true;expand();clearTimeout(timer);}});
  box.addEventListener('pointerleave',()=>{hover=false;schedule();});
  box.addEventListener('focusin',()=>{expand();schedule();});box.addEventListener('focusout',schedule);
  box.addEventListener('keydown',e=>{if(e.key==='Escape')collapse(true);});
  new ResizeObserver(()=>document.documentElement.style.setProperty('--music-rail',Math.ceil(box.getBoundingClientRect().bottom+8)+'px')).observe(box);
  describe();sync();schedule();start();
})();
