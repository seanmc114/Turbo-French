
(function(){
  const $ = (s)=>document.querySelector(s);
  const $$ = (s)=>Array.from(document.querySelectorAll(s));
  const norm = (s)=>(s||'').toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
      .replace(/[’']/g,"'").replace(/[^a-z0-9' -]/g,' ')
      .replace(/\s+/g,' ').trim();

  const LEVELS = 10;
  const TARGET = [null, null, 125,115,105,95,85,75,65,55,45];
  const NUM_QUESTIONS = 10;
  const PENALTY_PER_MISS = 30;

  const PRONOUNS = ["je","tu","il/elle","nous","vous","ils/elles"];

  const FR = {
    "etre": { infinitive:"être", present:["suis","es","est","sommes","êtes","sont"], pp:"été", futureStem:"ser", aux:"avoir" },
    "avoir": { infinitive:"avoir", present:["ai","as","a","avons","avez","ont"], pp:"eu", futureStem:"aur", aux:"avoir" },
    "aller": { infinitive:"aller", present:["vais","vas","va","allons","allez","vont"], pp:"allé", futureStem:"ir", aux:"etre" },
    "faire": { infinitive:"faire", present:["fais","fais","fait","faisons","faites","font"], pp:"fait", futureStem:"fer", aux:"avoir" },
    "parler": { infinitive:"parler", present:["parle","parles","parle","parlons","parlez","parlent"], pp:"parlé", futureStem:"parler", aux:"avoir" },
    "finir": { infinitive:"finir", present:["finis","finis","finit","finissons","finissez","finissent"], pp:"fini", futureStem:"finir", aux:"avoir" },
    "vendre": { infinitive:"vendre", present:["vends","vends","vend","vendons","vendez","vendent"], pp:"vendu", futureStem:"vendr", aux:"avoir" },
    "prendre": { infinitive:"prendre", present:["prends","prends","prend","prenons","prenez","prennent"], pp:"pris", futureStem:"prendr", aux:"avoir" },
    "venir": { infinitive:"venir", present:["viens","viens","vient","venons","venez","viennent"], pp:"venu", futureStem:"viendr", aux:"etre" },
    "pouvoir": { infinitive:"pouvoir", present:["peux","peux","peut","pouvons","pouvez","peuvent"], pp:"pu", futureStem:"pourr", aux:"avoir" },
    "vouloir": { infinitive:"vouloir", present:["veux","veux","veut","voulons","voulez","veulent"], pp:"voulu", futureStem:"voudr", aux:"avoir" },
    "devoir": { infinitive:"devoir", present:["dois","dois","doit","devons","devez","doivent"], pp:"dû", futureStem:"devr", aux:"avoir" },
    "voir": { infinitive:"voir", present:["vois","vois","voit","voyons","voyez","voient"], pp:"vu", futureStem:"verr", aux:"avoir" },
    "savoir": { infinitive:"savoir", present:["sais","sais","sait","savons","savez","savent"], pp:"su", futureStem:"saur", aux:"avoir" },
    "mettre": { infinitive:"mettre", present:["mets","mets","met","mettons","mettez","mettent"], pp:"mis", futureStem:"mettr", aux:"avoir" },
    "sortir": { infinitive:"sortir", present:["sors","sors","sort","sortons","sortez","sortent"], pp:"sorti", futureStem:"sortir", aux:"etre" },
    "partir": { infinitive:"partir", present:["pars","pars","part","partons","partez","partent"], pp:"parti", futureStem:"partir", aux:"etre" },
    "dire": { infinitive:"dire", present:["dis","dis","dit","disons","dites","disent"], pp:"dit", futureStem:"dir", aux:"avoir" },
    "ecrire": { infinitive:"écrire", present:["écris","écris","écrit","écrivons","écrivez","écrivent"], pp:"écrit", futureStem:"écrir", aux:"avoir" },
    "lire": { infinitive:"lire", present:["lis","lis","lit","lisons","lisez","lisent"], pp:"lu", futureStem:"lir", aux:"avoir" }
  };

  function pIndex(pron){
    switch(norm(pron)){
      case 'je': return 0;
      case 'tu': return 1;
      case 'il elle': case 'il': case 'elle': case 'on': return 2;
      case 'nous': return 3;
      case 'vous': return 4;
      default: return 5;
    }
  }

  const PRESENT_LEVELS = [
    ["etre","avoir"],
    ["aller","faire"],
    ["parler","finir"],
    ["vendre","prendre"],
    ["venir","pouvoir"],
    ["vouloir","devoir"],
    ["voir","savoir"],
    ["mettre","sortir"],
    ["partir","dire"],
    ["ecrire","lire"]
  ];
  const FUTURE_LEVELS = PRESENT_LEVELS.slice();
  const PAST_LEVELS = PRESENT_LEVELS.slice();

  let currentTense = 'Present';
  let currentLevel = 1;
  let t0 = 0, ticker = null, currentQs = [];

  function LSKEY(tense, level){ return `turbo_fr_${tense}_L${level}_best`; }
  const getBest = (tense,lvl)=>{ const v=localStorage.getItem(LSKEY(tense,lvl)); return v?parseInt(v,10):null; };
  const isUnlocked = (tense,lvl)=>{ if(lvl===1) return true; const prev=getBest(tense,lvl-1); return prev!=null && prev<=TARGET[lvl]; };

  function renderTenseButtons(){
    $$('#tense-buttons .tense-button').forEach(b=> b.classList.toggle('active', b.dataset.tense===currentTense));
  }
  function renderLevels(){
    const list = $('#level-list'); list.innerHTML='';
    for(let lvl=1; lvl<=LEVELS; lvl++){
      const unlocked = isUnlocked(currentTense, lvl);
      const best = getBest(currentTense, lvl);
      const b = document.createElement('button');
      b.className = 'level-button' + (unlocked?'':' locked');
      b.type='button';
      b.innerHTML = unlocked ? (`Level ${lvl}` + (best!=null?` — Best: ${best}s`:'')) : '🔒';
      b.disabled = !unlocked;
      b.dataset.level = String(lvl);
      list.appendChild(b);
    }
  }
  function levelVerbs(tense, lvl){
    const L = tense==='Present'?PRESENT_LEVELS:(tense==='Future'?FUTURE_LEVELS:PAST_LEVELS);
    return L[Math.max(1, Math.min(LEVELS, lvl))-1] || [];
  }
  function expectedFor(pron, verbKey, tense){
    const v = FR[verbKey]; const idx = pIndex(pron);
    if (tense==='Present'){
      return v.present[idx];
    } else if (tense==='Future'){
      const endings = ["ai","as","a","ons","ez","ont"];
      return v.futureStem + endings[idx];
    } else {
      const A = FR[v.aux];
      return A.present[idx] + ' ' + v.pp;
    }
  }
  function buildPrompt(pron, verbKey, tense){
    const v = FR[verbKey]; return `${pron} · ${v.infinitive} — ${tense}`;
  }

  function shuffle(a){ for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
  function buildQuestions(level, tense){
    const verbs = levelVerbs(tense, level);
    const pool=[]; verbs.forEach(vk=> PRONOUNS.forEach(pr=> pool.push({pron:pr, vk, tense})));
    const chosen = shuffle(pool).slice(0, NUM_QUESTIONS);
    return chosen.map((q,i)=>{
      const exp = expectedFor(q.pron, q.vk, q.tense);
      const subj = q.pron.replace('il/elle','il').split('/')[0];
      const acc = new Set([ norm(exp), norm(`${subj} ${exp}`) ]);
      if (subj==='je' && /^[aeiouh]/.test(exp)){ acc.add(norm(`j' ${exp}`)); acc.add(norm(`j'${exp}`)); }
      if (q.pron==='il/elle'){ acc.add(norm(`elle ${exp}`)); }
      return { n:i+1, prompt: buildPrompt(q.pron, q.vk, q.tense), exp, acc: Array.from(acc) };
    });
  }
  function renderQuestions(items){
    const wrap = $('#questions'); wrap.innerHTML='';
    items.forEach(q=>{
      const row=document.createElement('div'); row.className='question';
      row.innerHTML = `<div class="prompt"><strong>${q.n}.</strong> ${q.prompt}</div>
        <input type="text" class="answer" data-index="${q.n-1}" placeholder="Type answer here">`;
      wrap.appendChild(row);
    });
  }

  function startTimer(){ t0=Date.now(); ticker=setInterval(()=>{$('#timer').textContent='Time: '+Math.floor((Date.now()-t0)/1000)+'s';},250); }
  function stopTimer(){ clearInterval(ticker); ticker=null; return Math.floor((Date.now()-t0)/1000); }

  function startGame(level){
    currentLevel = level;
    currentQs = buildQuestions(currentLevel, currentTense);
    $('#results').innerHTML='';
    $('#game').style.display='block';
    renderQuestions(currentQs);
    startTimer();
    window.scrollTo({top:0, behavior:'smooth'});
  }

  function grade(){
    const ins = $$('#questions .answer'); let correct=0, misses=0, details=[];
    ins.forEach((inp,i)=>{
      const u = norm(inp.value);
      const ok = (currentQs[i].acc||[]).includes(u);
      inp.classList.remove('ok','bad'); inp.classList.add(ok?'ok':'bad');
      if (ok) correct++; else misses++;
      details.push({n:i+1, prompt:currentQs[i].prompt, given: inp.value||'—', exp: currentQs[i].exp, ok});
    });
    return {correct, misses, total: ins.length, details};
  }

  function copyButtonStyles(src, dst){
    const cs = getComputedStyle(src);
    ['backgroundColor','color','border','borderColor','borderStyle','borderWidth','borderRadius','padding','fontSize','fontFamily','fontWeight','textTransform','boxShadow','letterSpacing']
      .forEach(p=> dst.style[p] = cs[p]);
  }

  function showResults(raw, res){
    const pen = res.misses * PENALTY_PER_MISS;
    const fin = raw + pen;
    const key = LSKEY(currentTense, currentLevel);
    const prev = localStorage.getItem(key);
    if (!prev || fin < parseInt(prev,10)) localStorage.setItem(key, String(fin));

    let html = `<div class="score">You got ${res.correct}/${res.total} correct. Time ${raw}s + penalties ${pen}s = <strong>${fin}s</strong>.</div>`;
    if (currentLevel<LEVELS){
      const req = TARGET[currentLevel+1];
      html += fin<=req ? `<div class="score">🎉 Level ${currentLevel+1} unlocked (target ${req}s met)!</div>`
                       : `<div class="score">Target for Level ${currentLevel+1} is ${req}s — reduce by ${fin-req}s to unlock.</div>`;
    }
    html += '<div class="feedback">';
    res.details.forEach(d=>{
      html += `<div class="${d.ok?'correct':'incorrect'}"><strong>${d.n}.</strong> ${d.prompt} → <code>${d.given}</code> ${d.ok?' ✓':` ✗ &nbsp; <em>Answer:</em> ${d.exp}`}</div>`;
    });
    html += '</div><p id="actions"></p>';
    const out = $('#results'); out.innerHTML = html;

    const submit = $('#submit'), actions = $('#actions');
    const again = document.createElement('button'); again.type='button'; again.textContent='TRY AGAIN'; copyButtonStyles(submit, again); actions.appendChild(again);
    const back = document.createElement('button'); back.type='button'; back.style.marginLeft='8px'; back.textContent='BACK TO LEVELS'; copyButtonStyles(submit, back); actions.appendChild(back);
    again.onclick = ()=>{ out.innerHTML=''; startGame(currentLevel); };
    back.onclick  = ()=>{ $('#game').style.display='none'; renderLevels(); window.scrollTo({top:0, behavior:'smooth'}); };
  }

  $('#tense-buttons').addEventListener('click', (e)=>{
    const b = e.target.closest('.tense-button'); if (!b) return;
    currentTense = b.dataset.tense || 'Present';
    renderTenseButtons(); renderLevels(); $('#game').style.display='none';
  });

  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('.level-button');
    if (!btn || btn.disabled || btn.classList.contains('locked')) return;
    const lvl = parseInt(btn.dataset.level,10)||1; startGame(lvl);
  });

  $('#submit').addEventListener('click', (e)=>{
    e.preventDefault();
    const raw = stopTimer();
    const res = grade();
    showResults(raw, res);
  });

  function init(){ renderTenseButtons(); renderLevels(); }
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
