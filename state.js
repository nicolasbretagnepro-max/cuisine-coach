(function () {
'use strict';

function bootEsc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function bootError(message, detail){
  try{
    var root=document.getElementById('app')||document.body;
    root.innerHTML='<div style="max-width:480px;margin:0 auto;padding:32px 18px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,system-ui,sans-serif;color:#1a1a2e">'+
      '<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:24px;padding:20px;box-shadow:0 8px 24px rgba(0,0,0,.08)">'+
      '<div style="font-size:32px;margin-bottom:10px">⚠️</div>'+
      '<h1 style="font-size:22px;margin:0 0 8px">L’app n’a pas pu démarrer</h1>'+
      '<p style="font-size:15px;line-height:1.5;margin:0 0 12px;color:#555">'+bootEsc(message)+'</p>'+
      (detail?'<pre style="white-space:pre-wrap;background:#f6f3ee;border-radius:14px;padding:12px;font-size:12px;line-height:1.4;overflow:auto">'+bootEsc(detail)+'</pre>':'')+
      '<p style="font-size:13px;line-height:1.5;margin:12px 0 0;color:#777">Remplace les fichiers du dépôt avec le zip complet fourni, puis recharge la page.</p>'+
      '</div></div>';
  }catch(e){}
}
window.addEventListener('error',function(e){bootError('Erreur JavaScript au chargement.',e&&e.message?e.message:'Erreur inconnue');});
window.addEventListener('unhandledrejection',function(e){bootError('Erreur asynchrone au chargement.',e&&e.reason?String(e.reason):'Erreur inconnue');});

if (typeof state === 'undefined') {
  bootError('Le fichier js/state.js n’a pas été chargé correctement.', 'Diagnostic probable : le fichier state.js a été collé sur une seule ligne commençant par deux barres obliques, ce qui commente tout son contenu.');
  return;
}
if (typeof MODULES === 'undefined' || typeof LESSONS === 'undefined' || typeof RECIPES === 'undefined' || typeof TECHNIQUES === 'undefined') {
  bootError('Le fichier content/data.js n’a pas été chargé correctement.', 'Vérifie que content/data.js existe au bon emplacement dans le dépôt GitHub.');
  return;
}

state.load();
applyTheme();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(function(){});




var COVER_GRADIENTS = {'viande':'linear-gradient(135deg,#fff1e7,#b91c1c)','poisson':'linear-gradient(135deg,#e0f7fa,#0284c7)','légume':'linear-gradient(135deg,#ecfdf5,#16a34a)','sauce':'linear-gradient(135deg,#fff7ed,#d97706)','pâtisserie':'linear-gradient(135deg,#fdf2f8,#db2777)','pâtes':'linear-gradient(135deg,#fef3c7,#ca8a04)','œufs':'linear-gradient(135deg,#fff7ed,#f59e0b)','soupe':'linear-gradient(135deg,#f0fdf4,#15803d)','dessert':'linear-gradient(135deg,#fdf2f8,#be185d)'};
var RECIPE_EMOJIS = {'viande':'🥩','poisson':'🐟','légume':'🥦','sauce':'🫙','pâtisserie':'🥐','pâtes':'🍝','œufs':'🥚','soupe':'🍲','dessert':'🍰'};
var FAMILY_LABELS = {'tous':'Tous','viande':'🥩 Viande','poisson':'🐟 Poisson','légume':'🥦 Légumes','sauce':'🫙 Sauces','pâtisserie':'🥐 Pâtisserie','pâtes':'🍝 Pâtes & riz','œufs':'🥚 Œufs','soupe':'🍲 Soupes','dessert':'🍰 Desserts'};

function svgIcon(d){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+d+'</svg>';}
function recipeCoverStyle(r){return 'background:'+(COVER_GRADIENTS[r&&r.family]||'linear-gradient(135deg,#1a1a2e,#2d2d4e)');}
function recipeEmoji(r){return (r&&RECIPE_EMOJIS[r.family])||'🍽';}
function familyLabel(f){return FAMILY_LABELS[f]||f;}
function difficultyBadge(d){var l=['','Facile','Intermédiaire','Avancé','Expert'],c=['','badge-green','badge-yellow','badge-orange','badge-red'];return '<span class="badge '+(c[d]||'badge-neutral')+'">'+(l[d]||'')+'</span>';}
function difficultyDots(d){return [1,2,3,4].map(function(i){return '<span class="diff-dot'+(i<=d?' filled':'')+'"></span>';}).join('');}
function formatDate(s){return s?new Date(s).toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'}):'';}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function showToast(msg){var o=document.querySelector('.toast');if(o)o.remove();var t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(function(){t.remove();},3200);}
function findLesson(id){for(var i=0;i<LESSONS.length;i++)if(LESSONS[i].id===id)return LESSONS[i];return null;}
function findRecipe(id){for(var i=0;i<RECIPES.length;i++)if(RECIPES[i].id===id)return RECIPES[i];return null;}
function isLessonLocked(lesson){var p=lesson.prerequisites||[];return p.some(function(pid){return !state.isLessonDone(pid);});}
function nextAvailableLesson(){for(var i=0;i<LESSONS.length;i++)if(!state.isLessonDone(LESSONS[i].id)&&!isLessonLocked(LESSONS[i]))return LESSONS[i];return null;}
function skillLabel(s){return String(s||'').replace(/-/g,' ').replace(/\b\w/g,function(c){return c.toUpperCase();});}
function recipeSkillChips(r,limit){var skills=(r&&r.skills)||[];if(!skills.length)return '';limit=limit||4;return '<div class="skill-chips">'+skills.slice(0,limit).map(function(s){return '<span class="skill-chip">'+esc(skillLabel(s))+'</span>';}).join('')+(skills.length>limit?'<span class="skill-chip more">+'+(skills.length-limit)+'</span>':'')+'</div>';}
function allRecipeSkills(){var out=[];RECIPES.forEach(function(r){(r.skills||[]).forEach(function(s){if(out.indexOf(s)<0)out.push(s);});});return out.sort();}
function normalizeText(s){s=String(s||'').toLowerCase();return s.normalize?s.normalize('NFD').replace(/[\u0300-\u036f]/g,''):s;}
function recipeSearchBlob(r){return normalizeText([r.title,r.family,(r.skills||[]).join(' '),(r.objectives||[]).join(' '),(r.ingredients||[]).map(function(i){return i.item+' '+(i.note||'');}).join(' ')].join(' '));}
function lessonToReview(){var candidate=null;LESSONS.forEach(function(l){var sc=state.getLessonScore(l.id);if(sc&&sc.pct<100&&(!candidate||sc.pct<candidate.score.pct))candidate={lesson:l,score:sc};});return candidate?candidate.lesson:null;}
function smartRecipePick(){for(var i=0;i<RECIPES.length;i++){var r=RECIPES[i],time=(r.timePrep||0)+(r.timeCook||0);if(!state.isRecipeDone(r.id)&&r.difficulty===1&&time<=25)return r;}for(var j=0;j<RECIPES.length;j++)if(!state.isRecipeDone(RECIPES[j].id))return RECIPES[j];return RECIPES[0]||null;}

function getPracticeRecipes(lesson){
  if(!lesson)return [];
  if(lesson.practiceRecipes&&lesson.practiceRecipes.length){
    return lesson.practiceRecipes.map(function(p){
      var r=findRecipe(p.id);
      if(!r)return null;
      return Object.assign({}, p, {recipe:r});
    }).filter(Boolean);
  }
  return (lesson.linkedRecipes||[]).map(function(id,i){
    var r=findRecipe(id);
    if(!r)return null;
    return {id:id, recipe:r, type:i===0?'direct':'contrast', label:i===0?'Exercice direct':'Exercice complémentaire', reason:'Pour appliquer concrètement cette leçon.', focus:(lesson.objectives||[]).slice(0,3), successCriteria:[]};
  }).filter(Boolean);
}
function relatedRecipeForLesson(lesson){
  if(!lesson)return smartRecipePick();
  var practices=getPracticeRecipes(lesson);
  for(var i=0;i<practices.length;i++){var r=practices[i].recipe;if(r&&!state.isRecipeDone(r.id))return r;}
  if(practices.length)return practices[0].recipe;
  return smartRecipePick();
}
function practiceHref(recipeId, lessonId){return '#recipe/'+recipeId+(lessonId?'/practice-'+lessonId:'');}
function cookingHref(recipeId, lessonId){return '#cooking/'+recipeId+(lessonId?'/practice-'+lessonId:'');}
function modeLessonId(mode){
  if(!mode)return '';
  if(mode.indexOf('practice-')===0)return mode.replace('practice-','');
  if(mode.indexOf('debrief-practice-')===0)return mode.replace('debrief-practice-','');
  return '';
}
function isDebriefMode(mode){return mode==='debrief'||(mode&&mode.indexOf('debrief-practice-')===0);}
function practiceContext(recipeId, mode){
  var lessonId=modeLessonId(mode);
  if(!lessonId)return null;
  var lesson=findLesson(lessonId);
  if(!lesson)return null;
  var practices=getPracticeRecipes(lesson);
  for(var i=0;i<practices.length;i++){if(practices[i].id===recipeId)return {lesson:lesson, practice:practices[i]};}
  return {lesson:lesson, practice:{id:recipeId, recipe:findRecipe(recipeId), label:'Exercice pratique', reason:'Cette recette est utilisée comme mise en application du cours.', focus:(lesson.objectives||[]).slice(0,3), successCriteria:[]}};
}
function pendingPracticeItems(limit){
  var raw=state.getPendingPractices?state.getPendingPractices():(state.get('pendingPractices')||[]);
  var out=[];
  raw.forEach(function(p){
    var lesson=findLesson(p.lessonId), recipe=findRecipe(p.recipeId);
    if(lesson&&recipe)out.push(Object.assign({}, p, {lesson:lesson, recipe:recipe}));
  });
  return typeof limit==='number'?out.slice(0,limit):out;
}
function renderPracticeMiniCard(item){
  return '<div class="practice-mini-card"><a class="practice-mini-main" href="'+practiceHref(item.recipe.id,item.lesson.id)+'"><div class="practice-mini-icon">🎯</div><div class="grow"><div class="practice-mini-title">'+esc(item.recipe.title)+'</div><div class="practice-mini-sub">'+esc(item.lesson.title)+' · '+esc(item.label||'Exercice pratique')+'</div></div><div class="today-arrow">→</div></a><button class="practice-dismiss" type="button" data-remove-practice="'+esc(item.lesson.id)+'::'+esc(item.recipe.id)+'" aria-label="Retirer cette pratique">×</button></div>';
}
function renderPracticeCard(practice, lesson){
  var r=practice.recipe||findRecipe(practice.id);
  if(!r)return '';
  var focus=(practice.focus||[]).slice(0,4);
  var success=(practice.successCriteria||[]).slice(0,3);
  var h='<div class="practice-card">';
  h+='<div class="practice-card-head"><span class="badge badge-orange">'+esc(practice.label||'Exercice pratique')+'</span><span class="badge badge-neutral">'+((r.timePrep||0)+(r.timeCook||0))+' min</span></div>';
  h+='<div class="practice-card-title">'+esc(r.title)+'</div>';
  if(practice.reason)h+='<div class="practice-card-reason">'+esc(practice.reason)+'</div>';
  if(focus.length){h+='<div class="practice-focus"><div class="practice-focus-title">À observer</div><ul>';focus.forEach(function(f){h+='<li>'+esc(f)+'</li>';});h+='</ul></div>';}
  if(success.length){h+='<div class="practice-success"><div class="practice-focus-title">Critères de réussite</div><ul>';success.forEach(function(f){h+='<li>'+esc(f)+'</li>';});h+='</ul></div>';}
  h+='<div class="practice-actions"><a class="btn btn-primary btn-sm" href="'+practiceHref(r.id,lesson.id)+'">Pratiquer maintenant</a><a class="btn btn-secondary btn-sm" href="#learn">Continuer le parcours</a></div>';
  h+='</div>';
  return h;
}
function startOfWeek(d){var x=new Date(d.getFullYear(),d.getMonth(),d.getDate());var day=x.getDay()||7;x.setDate(x.getDate()-day+1);x.setHours(0,0,0,0);return x;}
function dateInThisWeek(dateStr){if(!dateStr)return false;var d=new Date(dateStr+'T12:00:00');if(isNaN(d.getTime()))return false;var start=startOfWeek(new Date()),end=new Date(start);end.setDate(start.getDate()+7);return d>=start&&d<end;}
function formatYMD(d){
  var y=d.getFullYear();
  var m=String(d.getMonth()+1).padStart(2,'0');
  var day=String(d.getDate()).padStart(2,'0');
  return y+'-'+m+'-'+day;
}
function currentWeekKey(){return formatYMD(startOfWeek(new Date()));}
function weeklyLessonProgressCount(){
  var n=0,scoreMap=state.get('lessonScores')||{};
  Object.keys(scoreMap).forEach(function(id){if(dateInThisWeek(scoreMap[id]&&scoreMap[id].date))n++;});
  return n;
}
function buildWeeklyRecipeCandidate(){
  var pending=pendingPracticeItems();
  for(var i=0;i<pending.length;i++){
    if(!state.isRecipeDone(pending[i].recipe.id)){
      return {recipe:pending[i].recipe, lesson:pending[i].lesson, practice:pending[i], source:'pending'};
    }
  }
  var next=nextAvailableLesson();
  if(next){
    var practices=getPracticeRecipes(next);
    for(var j=0;j<practices.length;j++){
      if(practices[j].recipe&&!state.isRecipeDone(practices[j].recipe.id)){
        return {recipe:practices[j].recipe, lesson:next, practice:practices[j], source:'next-lesson'};
      }
    }
  }
  var r=smartRecipePick();
  return r?{recipe:r, lesson:null, practice:null, source:'general'}:null;
}
function ensureWeeklyRecipePlan(){
  var wk=currentWeekKey();
  var existing=state.getWeeklyRecipePlan?state.getWeeklyRecipePlan():(state.get('weeklyRecipe')||null);
  if(existing&&existing.weekKey===wk&&findRecipe(existing.recipeId)){
    var er=findRecipe(existing.recipeId), el=existing.lessonId?findLesson(existing.lessonId):null;
    return Object.assign({}, existing, {recipe:er, lesson:el});
  }
  var cand=buildWeeklyRecipeCandidate();
  if(!cand||!cand.recipe)return null;
  var pr=cand.practice||{};
  var plan={
    weekKey:wk,
    recipeId:cand.recipe.id,
    lessonId:cand.lesson?cand.lesson.id:null,
    source:cand.source,
    label:pr.label||'Recette de la semaine',
    reason:pr.reason||'Une recette prioritaire pour progresser sans multiplier les sessions cuisine.',
    focus:(pr.focus||[]).slice(0,5),
    successCriteria:(pr.successCriteria||[]).slice(0,4),
    dateAssigned:formatYMD(new Date()),
    completed:false
  };
  if(state.setWeeklyRecipePlan)state.setWeeklyRecipePlan(plan);else state.set('weeklyRecipe',plan);
  return Object.assign({}, plan, {recipe:cand.recipe, lesson:cand.lesson});
}
function weeklyRecipeHref(plan){
  if(!plan||!plan.recipe)return '#recipes';
  return plan.lessonId?practiceHref(plan.recipe.id,plan.lessonId):'#recipe/'+plan.recipe.id;
}
function weeklyCookingHref(plan){
  if(!plan||!plan.recipe)return '#recipes';
  return plan.lessonId?cookingHref(plan.recipe.id,plan.lessonId):'#cooking/'+plan.recipe.id;
}
function todayPlan(){
  var next=nextAvailableLesson(),review=lessonToReview(),pending=pendingPracticeItems(3),weekly=ensureWeeklyRecipePlan(),goal=state.get('weeklyGoal')||2,done=weeklyLessonProgressCount();
  return {lesson:next,review:review,weeklyRecipe:weekly,pending:pending,weeklyDone:done,weeklyGoal:goal};
}
function recipeContextLabel(id){
  var map={quick15:'15 min',quick30:'30 min',practice:'Pratiquer une technique',complete:'Repas complet',leftovers:'Restes',easy:'Très facile'};
  return map[id]||'';
}
function recipeMatchesContext(r,context){
  if(!context||context==='tous')return true;
  var total=(r.timePrep||0)+(r.timeCook||0),blob=recipeSearchBlob(r);
  if(context==='quick15')return total<=20;
  if(context==='quick30')return total<=30;
  if(context==='practice')return (r.skills||[]).length>=2||(r.objectives||[]).length>=2;
  if(context==='complete')return r.family!=='sauce'&&r.family!=='dessert'&&total>=20;
  if(context==='leftovers')return blob.indexOf('reste')>=0||blob.indexOf('anti gaspi')>=0||blob.indexOf('improvis')>=0||blob.indexOf('placard')>=0;
  if(context==='easy')return r.difficulty===1&&total<=35;
  return true;
}
function inferRecipeEquipment(recipe){
  if(recipe.equipment&&recipe.equipment.length)return recipe.equipment;
  var hay=normalizeText([recipe.title,recipe.family,(recipe.steps||[]).map(function(s){return s.title+' '+s.action;}).join(' ')].join(' '));
  var out=['Planche','Couteau'];
  if(hay.indexOf('poele')>=0||hay.indexOf('saisir')>=0||hay.indexOf('saut')>=0)out.push('Poêle');
  if(hay.indexOf('casserole')>=0||hay.indexOf('bouillir')>=0||hay.indexOf('soupe')>=0||hay.indexOf('pates')>=0||hay.indexOf('riz')>=0)out.push('Casserole');
  if(hay.indexOf('four')>=0||hay.indexOf('rotir')>=0||hay.indexOf('gratiner')>=0)out.push('Four ou plaque');
  if(hay.indexOf('fouet')>=0||hay.indexOf('emulsion')>=0||hay.indexOf('sauce')>=0)out.push('Fouet ou fourchette');
  if(hay.indexOf('mix')>=0)out.push('Mixeur');
  return out.slice(0,5);
}
function inferSuccessCriteria(recipe){
  if(recipe.successCriteria&&recipe.successCriteria.length)return recipe.successCriteria;
  var out=(recipe.objectives||[]).slice(0,3);
  if(!out.length&&recipe.steps&&recipe.steps.length)out=recipe.steps.slice(-2).map(function(s){return s.title;});
  return out;
}
function inferCriticalPoints(recipe){
  if(recipe.criticalPoints&&recipe.criticalPoints.length)return recipe.criticalPoints;
  var out=[];
  (recipe.steps||[]).forEach(function(s){if(s.mistake&&out.length<3)out.push(s.mistake);});
  return out;
}
function inferFixes(recipe){
  if(recipe.fixes&&recipe.fixes.length)return recipe.fixes;
  var hay=normalizeText([recipe.title,recipe.family,(recipe.skills||[]).join(' '),(recipe.objectives||[]).join(' ')].join(' '));
  var out=[];
  if(hay.indexOf('sauce')>=0||hay.indexOf('reduction')>=0){out.push({problem:'Sauce trop liquide',solution:'Prolonge la réduction à feu moyen et remue pour éviter que le fond accroche.'});out.push({problem:'Sauce trop salée',solution:'Allonge légèrement avec un élément non salé, puis rééquilibre avec gras ou acidité.'});}
  if(hay.indexOf('oeuf')>=0||hay.indexOf('œuf')>=0){out.push({problem:'Texture trop prise',solution:'Sors du feu plus tôt la prochaine fois : les œufs continuent à cuire hors du feu.'});}
  if(hay.indexOf('poisson')>=0){out.push({problem:'Poisson trop sec',solution:'Raccourcis la cuisson et vise une chair encore nacrée au centre.'});}
  if(hay.indexOf('legume')>=0||hay.indexOf('légume')>=0){out.push({problem:'Légumes mous ou détrempés',solution:'Cuis en plus petite quantité et laisse l’humidité s’évaporer avant de chercher la coloration.'});}
  return out.slice(0,3);
}

var ISSUE_OPTIONS = [
  {id:'organisation', label:'Organisation confuse', skills:['organisation']},
  {id:'timing', label:'Mauvais timing', skills:['timing','organisation']},
  {id:'feu-trop-fort', label:'Feu trop fort', skills:['intensite-feu','cuisson-poele']},
  {id:'feu-trop-faible', label:'Feu trop faible', skills:['intensite-feu','cuisson-poele']},
  {id:'poele-detrempee', label:'Poêlée détrempée', skills:['cuisson-poele','evaporation']},
  {id:'trop-cuit', label:'Trop cuit', skills:['signes-cuisson','cuisson-juste']},
  {id:'pas-assez-cuit', label:'Pas assez cuit', skills:['signes-cuisson','cuisson-juste']},
  {id:'trop-fade', label:'Trop fade', skills:['assaisonnement']},
  {id:'trop-sale', label:'Trop salé', skills:['assaisonnement','reduction']},
  {id:'trop-liquide', label:'Trop liquide', skills:['reduction','sauce']},
  {id:'trop-sec', label:'Trop sec', skills:['cuisson-juste','repos']},
  {id:'texture', label:'Texture décevante', skills:['texture','cuisson-juste']},
  {id:'sauce-tranchee', label:'Sauce tranchée', skills:['sauce','emulsion']},
  {id:'manque-materiel', label:'Matériel mal choisi', skills:['materiel']}
];
function issueById(id){for(var i=0;i<ISSUE_OPTIONS.length;i++)if(ISSUE_OPTIONS[i].id===id)return ISSUE_OPTIONS[i];return null;}
function issueLabel(id){var o=issueById(id);return o?o.label:skillLabel(id);}
function lessonSkillIds(lesson){
  if(!lesson)return [];
  var out=[];
  if(lesson.moduleId)out.push(lesson.moduleId);
  (lesson.skills||lesson.skillIds||[]).forEach(function(s){if(out.indexOf(s)<0)out.push(s);});
  return out.slice(0,4);
}
function attemptSkillsForRecipe(recipe,ctx,issues){
  var out=[];
  if(ctx&&ctx.lesson)lessonSkillIds(ctx.lesson).forEach(function(s){if(out.indexOf(s)<0)out.push(s);});
  (recipe.skills||[]).slice(0,4).forEach(function(s){if(out.indexOf(s)<0)out.push(s);});
  (issues||[]).forEach(function(id){var o=issueById(id);(o&&o.skills||[]).forEach(function(s){if(out.indexOf(s)<0)out.push(s);});});
  if(!out.length&&recipe.family)out.push(recipe.family);
  return out.slice(0,6);
}
function masteryLabel(n){return ['Non travaillé','Vu','Compris','Pratiqué','Maîtrisé'][Math.max(0,Math.min(4,n||0))];}
function renderSkillMiniRows(items){
  var h='';
  (items||[]).forEach(function(sp){
    var pct=Math.round(((sp.mastery||0)/4)*100);
    h+='<div class="skill-progress-row"><div class="row-sb"><div><div class="t-h4">'+esc(skillLabel(sp.id))+'</div><div class="t-small t-muted">'+esc(masteryLabel(sp.mastery))+' · '+(sp.attempts||0)+' pratique'+((sp.attempts||0)>1?'s':'')+'</div></div><strong>'+((sp.mastery||0))+'/4</strong></div><div class="progress-bar thin mt-8"><div class="progress-fill" style="width:'+pct+'%"></div></div></div>';
  });
  return h;
}

function computeCookLevel(){
  var stats=state.getStats(),skills=state.getSkillSummary?state.getSkillSummary():[];
  var avg=0;if(skills.length)avg=Math.round(skills.reduce(function(a,b){return a+(b.mastery||0);},0)/skills.length);
  var score=stats.lessonsCount*1 + stats.recipesCount*4 + (stats.attemptsCount||0)*2 + avg*8;
  var levels=[
    {id:1,title:'Je cuisine sans stress',min:0,desc:'Organisation, sécurité et premières recettes.'},
    {id:2,title:'Je contrôle la cuisson',min:35,desc:'Feu, poêle, four et signes de cuisson.'},
    {id:3,title:'Je construis le goût',min:85,desc:'Sel, acidité, sauces et corrections.'},
    {id:4,title:'Je maîtrise les produits',min:150,desc:'Œufs, légumes, viandes, poissons et féculents.'},
    {id:5,title:'Je deviens autonome',min:240,desc:'Improviser, corriger et créer sans recette.'}
  ];
  var cur=levels[0],next=null;
  levels.forEach(function(l,i){if(score>=l.min){cur=l;next=levels[i+1]||null;}});
  var pct=next?Math.min(100,Math.round((score-cur.min)/(next.min-cur.min)*100)):100;
  return {score:score,current:cur,next:next,pct:pct,avgMastery:avg};
}
function buildReviewCards(limit){
  var cards=[],log=state.getReviewLog?state.getReviewLog():{};
  var scores=state.get('lessonScores')||{};
  Object.keys(scores).forEach(function(id){
    var sc=scores[id],lesson=findLesson(id);
    if(lesson&&sc&&sc.pct<100){cards.push({id:'quiz-'+id,title:'Quiz à consolider',sub:lesson.title+' · '+sc.pct+'%',href:'#lesson/'+id+'/review',kind:'quiz'});}
  });
  var last=state.getLastDebrief?state.getLastDebrief():null;
  if(last&&last.issues&&last.issues.length){
    last.issues.slice(0,3).forEach(function(issue){
      var rec=findRecipe(last.recipeId);
      cards.push({id:'issue-'+issue+'-'+last.recipeId,title:'Erreur à corriger',sub:issueLabel(issue)+(rec?' · '+rec.title:''),href:rec?'#recipe/'+rec.id:'#recipes',kind:'issue'});
    });
  }
  var skills=state.getSkillSummary?state.getSkillSummary(4):[];
  skills.forEach(function(sp){
    if((sp.mastery||0)<3)cards.push({id:'skill-'+sp.id,title:'Compétence à renforcer',sub:skillLabel(sp.id)+' · '+masteryLabel(sp.mastery),href:'#learn',kind:'skill'});
  });
  cards=cards.filter(function(c){return !log[c.id]||!dateInThisWeek(log[c.id]);});
  return typeof limit==='number'?cards.slice(0,limit):cards;
}
function renderReviewCards(cards){
  var h='';
  (cards||[]).forEach(function(c){
    h+='<div class="review-card"><a class="review-card-main" href="'+c.href+'"><div class="review-icon">'+(c.kind==='quiz'?'🧠':c.kind==='issue'?'🛠':'📌')+'</div><div class="grow"><div class="review-title">'+esc(c.title)+'</div><div class="review-sub">'+esc(c.sub)+'</div></div><div class="today-arrow">→</div></a><button class="review-done" data-review-done="'+esc(c.id)+'" type="button">Revu</button></div>';
  });
  return h;
}

function stepIngredients(recipe,step){var hay=normalizeText([step.title,step.action,step.why,step.mistake].join(' '));var matches=(recipe.ingredients||[]).filter(function(ing){var words=normalizeText(ing.item).split(/[^a-z0-9œ]+/).filter(function(w){return w.length>2;});return words.some(function(w){return hay.indexOf(w)>=0;});});if(!matches.length)matches=(recipe.ingredients||[]).slice(0,5);return matches;}
function applyTheme(){
  var pref=state.get('theme')||'system';
  var dark=pref==='dark'||(pref==='system'&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.setAttribute('data-theme',dark?'dark':'light');
  var meta=document.querySelector('meta[name="theme-color"]');
  if(meta)meta.setAttribute('content',dark?'#111118':'#faf8f5');
}
if(window.matchMedia){
  try{window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(){if((state.get('theme')||'system')==='system')applyTheme();});}catch(e){}
}


function compressImage(file, callback) {
  if (!file) { callback(null); return; }
  var reader = new FileReader();
  reader.onerror = function() { callback(null); };
  reader.onload = function(ev) {
    var img = new Image();
    img.onerror = function() { callback(null); };
    img.onload = function() {
      var MAX = 650, w = img.width, h = img.height;
      if (w > MAX) { h = Math.round(h * MAX / w); w = MAX; }
      if (h > MAX) { w = Math.round(w * MAX / h); h = MAX; }
      var canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      try {
        callback(canvas.toDataURL('image/jpeg', 0.62));
      } catch (e) {
        callback(null);
      }
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}


function _alertTimerDone() {
  if (navigator.vibrate) navigator.vibrate([400, 150, 400, 150, 800]);
  try {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    var ctx = new AC();
    [0, 0.55, 1.1].forEach(function(delay) {
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'sine'; o.frequency.value = 880;
      g.gain.setValueAtTime(0.25, ctx.currentTime + delay);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.45);
      o.start(ctx.currentTime + delay); o.stop(ctx.currentTime + delay + 0.45);
    });
  } catch(e) {}
}


function _exportProgress() {
  var raw = localStorage.getItem('chef-coach-v1') || '{}';
  var date = new Date().toISOString().slice(0,10);
  var filename = 'chef-coach-' + date + '.json';
  var blob = new Blob([raw], {type:'application/json'});


  if (navigator.canShare) {
    try {
      var f = new File([blob], filename, {type:'application/json'});
      if (navigator.canShare({files:[f]})) {
        navigator.share({title:'Chef Coach — Sauvegarde', files:[f]})
          .then(function(){showToast('✅ Progression exportée !');})
          .catch(function(err){ if(err.name!=='AbortError') _fallbackExport(raw, blob, filename); });
        return;
      }
    } catch(e) {}
  }
  _fallbackExport(raw, blob, filename);
}

function _fallbackExport(raw, blob, filename) {
  try {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    setTimeout(function(){document.body.removeChild(a);URL.revokeObjectURL(url);}, 200);
    showToast('✅ Fichier téléchargé');
  } catch(e) {
    _showExportModal(raw);
  }
}

function _showExportModal(raw) {
  var m = document.createElement('div');
  m.className = 'export-modal-backdrop';
  m.innerHTML = '<div class="export-modal"><div class="t-h4" style="margin-bottom:12px">Copie ce texte</div>' +
    '<div class="t-small t-muted" style="margin-bottom:10px">Colle-le dans un fichier .json pour le conserver.</div>' +
    '<textarea class="export-textarea" readonly>'+esc(raw)+'</textarea>' +
    '<button class="btn btn-primary btn-full mt-12" id="copy-export">📋 Copier dans le presse-papier</button>' +
    '<button class="btn btn-ghost btn-full mt-8" id="close-export">Fermer</button></div>';
  document.body.appendChild(m);
  m.querySelector('#copy-export').addEventListener('click', function(){
    var ta=m.querySelector('.export-textarea'); ta.select();
    try{document.execCommand('copy');showToast('✅ Copié !');}catch(e){}
  });
  m.querySelector('#close-export').addEventListener('click', function(){m.remove();});
  m.addEventListener('click', function(e){if(e.target===m)m.remove();});
}

function _importProgress(file) {
  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var data = JSON.parse(e.target.result);
      if (typeof data !== 'object' || !Array.isArray(data.completedLessons)) {
        showToast('❌ Fichier non reconnu'); return;
      }
      if (confirm('Restaurer cette sauvegarde ?\n\nTa progression actuelle sera remplacée.')) {
        if (!state.importData(data)) {
          showToast('❌ Sauvegarde invalide ou trop volumineuse');
          return;
        }
        state.load();
        location.hash = 'home';
        showToast('✅ Progression restaurée !');
      }
    } catch(ex) { showToast('❌ Erreur de lecture du fichier'); }
  };
  reader.readAsText(file);
}

var _quizState = {lessonId:null,correct:0};
var _isReviewMode = false;




document.getElementById('app').innerHTML =
  '<nav class="bottom-nav"><div class="nav-inner">' +
  navBtn('#home',    svgIcon('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'), 'Accueil') +
  navBtn('#learn',   svgIcon('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'), 'Apprendre') +
  navBtn('#recipes', svgIcon('<path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/>'), 'Cuisiner') +
  navBtn('#me',      svgIcon('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'), 'Moi') +
  '</div></nav>';

window.addEventListener('hashchange', route);

if (!state.get('onboarded')) { showOnboarding(); } else { route(); }

function navBtn(href,icon,label){return '<a href="'+href+'" class="nav-btn"><span>'+icon+'</span><span>'+label+'</span></a>';}

function route() {
  var hash = location.hash.slice(1)||'home';
  var parts = hash.split('/'), view=parts[0], param=parts[1]||'', mode=parts[2]||'';
  if (view!=='cooking'){var cm=document.getElementById('cooking-mode');if(cm)cm.remove();}
  var navParent={home:'home',learn:'learn',lesson:'learn',recipes:'recipes',recipe:'recipes',cooking:'recipes',me:'me'};
  var navMap={home:0,learn:1,recipes:2,me:3};
  var activeNav=navParent[view]||'home';
  document.querySelectorAll('.nav-btn').forEach(function(b,i){b.classList.toggle('active',i===navMap[activeNav]);});
  var old=document.getElementById('current-page');if(old)old.remove();
  if(view==='lesson'&&param){var lo=findLesson(param);if(lo)state.setLastOpened({type:'lesson',id:lo.id,title:lo.title,href:'#lesson/'+lo.id});}
  if(view==='recipe'&&param){var ro=findRecipe(param);if(ro)state.setLastOpened({type:'recipe',id:ro.id,title:ro.title,href:'#recipe/'+ro.id});}
  if (view==='cooking'){startCookingMode(param,mode);return;}
  var page=document.createElement('div');page.className='page';page.id='current-page';
  switch(view){
    case 'home':    page.innerHTML=renderHome();break;
    case 'learn':   page.innerHTML=renderLearn();break;
    case 'lesson':  page.innerHTML=renderLesson(param,mode);break;
    case 'recipes': page.innerHTML=renderRecipes('tous','');break;
    case 'recipe':  page.innerHTML=renderRecipeDetail(param,mode);break;
    case 'me':      page.innerHTML=renderMe();break;
    default:        page.innerHTML=renderHome();
  }
  document.getElementById('app').appendChild(page);
  window.scrollTo(0,0);
  bindHandlers(view,param,mode);
}




var _obData={name:'',level:''};

function showOnboarding(){
  document.body.classList.add('has-onboarding');
  var o=document.createElement('div');o.id='onboarding';o.className='onboarding-overlay';
  o.innerHTML=renderObStep(1);document.body.appendChild(o);bindObHandlers(o,1);
}
function renderObStep(step){
  var dots='<div class="ob-dots">';
  for(var i=1;i<=3;i++)dots+='<div class="ob-dot'+(i===step?' active':'')+'"></div>';
  dots+='</div>';
  var c='';
  if(step===1){
    c='<div class="ob-emoji">👨‍🍳</div><h1 class="ob-title">Chef Coach</h1>'+
      '<p class="ob-sub">Passe de débutant à excellent cuisinier, étape par étape. Des leçons pratiques, des recettes guidées, une vraie progression.</p>'+
      '<button class="btn btn-primary btn-full btn-lg ob-next mt-20">C\'est parti →</button>';
  } else if(step===2){
    c='<h2 class="ob-title">Comment tu t\'appelles ?</h2><p class="ob-sub">Pour personnaliser ton expérience</p>'+
      '<div class="field mt-20"><input type="text" id="ob-name" placeholder="Ton prénom" value="'+esc(_obData.name)+'" autocomplete="given-name" /></div>'+
      '<button class="btn btn-primary btn-full btn-lg ob-next mt-16">Continuer →</button>';
  } else {
    var levels=[{id:'debutant',emoji:'🥚',label:'Débutant',sub:'Je sais faire des pâtes et des œufs'},{id:'intermediaire',emoji:'🍳',label:'Intermédiaire',sub:'Je cuisine régulièrement mais j\'ai des lacunes'},{id:'passionne',emoji:'🔥',label:'Passionné',sub:'Je veux maîtriser les vraies techniques'}];
    var ch=levels.map(function(l){return '<button class="level-choice'+(_obData.level===l.id?' selected':'')+'" data-level="'+l.id+'"><span class="level-emoji">'+l.emoji+'</span><span class="level-info"><strong>'+l.label+'</strong><span>'+esc(l.sub)+'</span></span></button>';}).join('');
    c='<h2 class="ob-title">Ton niveau actuel ?</h2><p class="ob-sub">Pour commencer au bon endroit</p>'+
      '<div class="level-choices mt-20">'+ch+'</div>'+
      '<button class="btn btn-primary btn-full btn-lg ob-finish mt-20"'+(!_obData.level?' disabled':'')+'>Commencer 🚀</button>';
  }
  return '<div class="onboarding-card">'+dots+'<div class="ob-content">'+c+'</div></div>';
}
function bindObHandlers(overlay,step){
  var inp=overlay.querySelector('#ob-name');
  if(inp)setTimeout(function(){inp.focus();},120);
  overlay.querySelectorAll('.level-choice').forEach(function(btn){
    btn.addEventListener('click',function(){
      _obData.level=btn.dataset.level;
      overlay.querySelectorAll('.level-choice').forEach(function(b){b.classList.remove('selected');});
      btn.classList.add('selected');
      var fb=overlay.querySelector('.ob-finish');if(fb)fb.removeAttribute('disabled');
    });
  });
  var nb=overlay.querySelector('.ob-next');
  if(nb){
    nb.addEventListener('click',function(){
      if(step===2){var ni=overlay.querySelector('#ob-name');_obData.name=(ni?ni.value.trim():'')||'Chef';}
      overlay.innerHTML=renderObStep(step+1);bindObHandlers(overlay,step+1);
    });
    if(inp)inp.addEventListener('keydown',function(e){if(e.key==='Enter')nb.click();});
  }
  var fb=overlay.querySelector('.ob-finish');
  if(fb)fb.addEventListener('click',function(){
    if(!_obData.level)return;
    state.set('userName',_obData.name||'Chef');
    state.set('level',_obData.level);
    state.set('onboarded',true);
    state.markActive();
    overlay.classList.add('ob-leaving');
    setTimeout(function(){overlay.remove();document.body.classList.remove('has-onboarding');route();},360);
  });
}




function renderHome(){
  var stats=state.getStats(),name=state.get('userName')||'Chef';
  var nL=null;
  for(var i=0;i<LESSONS.length;i++)if(!state.isLessonDone(LESSONS[i].id)&&!isLessonLocked(LESSONS[i])){nL=LESSONS[i];break;}
  var today=new Date().toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'});
  today=today.charAt(0).toUpperCase()+today.slice(1);

  var plan=todayPlan(),reviewLesson=lessonToReview(),last=state.get('lastOpened');
  var totalLessons=LESSONS.length,lessonPct=totalLessons?Math.round(stats.lessonsCount/totalLessons*100):0;
  var resumeHref=last?last.href:(nL?'#lesson/'+nL.id:'#learn');
  var resumeTitle=last?last.title:(nL?nL.title:'Choisir une leçon');
  var learnHref=nL?'#lesson/'+nL.id:'#learn';
  var weekly=plan.weeklyRecipe;
  var cookHref=weekly?weeklyRecipeHref(weekly):'#recipes';
  var reviewHref=reviewLesson?'#lesson/'+reviewLesson.id+'/review':'#learn';
  var reviewSub=reviewLesson?'Quiz à consolider':'Aucune erreur à revoir';
  var lessonGoal=plan.weeklyGoal||2;
  var lessonPctWeek=lessonGoal?Math.min(100,Math.round(plan.weeklyDone/lessonGoal*100)):0;

  var h='<div class="home-hero">';
  h+='<div class="row-sb"><div>';
  h+='<div class="hero-greeting">'+esc(today)+'</div>';
  h+='<div class="hero-title">Bonjour, '+esc(name)+' 👨‍🍳</div>';
  h+='<div class="hero-sub">Une recette par semaine, des leçons quand tu peux</div>';
  h+='</div><div class="streak-pill">🔥 '+stats.streak+' jour'+(stats.streak>1?'s':'')+'</div></div>';
  h+='<div class="hero-stats"><div class="hero-stat"><div class="hero-stat-val">'+stats.xp+'</div><div class="hero-stat-lbl">XP</div></div>';
  h+='<div class="hero-stat"><div class="hero-stat-val">'+stats.lessonsCount+'</div><div class="hero-stat-lbl">Leçons</div></div>';
  h+='<div class="hero-stat"><div class="hero-stat-val">'+stats.recipesCount+'</div><div class="hero-stat-lbl">Recettes</div></div></div></div>';

  var cookLevel=computeCookLevel();
  h+='<section class="level-panel mt-16"><div class="row-sb"><div><div class="level-kicker">Niveau '+cookLevel.current.id+'/5</div><div class="level-title">'+esc(cookLevel.current.title)+'</div><div class="t-small t-muted mt-4">'+esc(cookLevel.current.desc)+'</div></div><div class="level-score">'+cookLevel.score+'</div></div><div class="progress-bar thin mt-12"><div class="progress-fill" style="width:'+cookLevel.pct+'%"></div></div>'+(cookLevel.next?'<div class="t-small t-muted mt-8">Prochain niveau : '+esc(cookLevel.next.title)+'</div>':'<div class="t-small t-muted mt-8">Niveau maximal atteint.</div>')+'</section>';

  h+='<section class="today-card weekly-card mt-16" aria-label="Plan de la semaine">';
  h+='<div class="today-top"><div><div class="today-kicker">Cette semaine</div><div class="today-title">Ta recette poussée</div></div>';
  h+='<div class="today-goal '+(weekly&&weekly.completed?'done':'')+'"><span>'+(weekly&&weekly.completed?'✓':'1')+'</span><small>recette</small></div></div>';
  h+='<div class="progress-bar thin mt-12"><div class="progress-fill" style="width:'+(weekly&&weekly.completed?100:18)+'%"></div></div>';
  h+='<div class="today-list mt-14">';
  if(weekly&&weekly.recipe){
    h+='<a class="today-item weekly-recipe-item" href="'+weeklyRecipeHref(weekly)+'"><div class="today-icon">👨‍🍳</div><div class="grow"><div class="today-item-title">'+(weekly.completed?'Recette faite cette semaine':'Recette à faire cette semaine')+'</div><div class="today-item-sub">'+esc(weekly.recipe.title)+' · '+((weekly.recipe.timePrep||0)+(weekly.recipe.timeCook||0))+' min</div></div><div class="today-arrow">→</div></a>';
    if(weekly.reason)h+='<div class="weekly-reason">'+esc(weekly.reason)+'</div>';
  } else {
    h+='<a class="today-item" href="#recipes"><div class="today-icon">🍽</div><div class="grow"><div class="today-item-title">Choisir une recette</div><div class="today-item-sub">Aucune recette hebdomadaire disponible pour l’instant</div></div><div class="today-arrow">→</div></a>';
  }
  if(plan.review){
    h+='<a class="today-item today-review" href="#lesson/'+plan.review.id+'/review"><div class="today-icon">🔄</div><div class="grow"><div class="today-item-title">Révision courte</div><div class="today-item-sub">'+esc(plan.review.title)+'</div></div><div class="today-arrow">→</div></a>';
  }
  if(plan.lesson){
    h+='<a class="today-item" href="#lesson/'+plan.lesson.id+'"><div class="today-icon">📚</div><div class="grow"><div class="today-item-title">Leçon libre</div><div class="today-item-sub">'+esc(plan.lesson.title)+' · '+plan.lesson.duration+' min</div></div><div class="today-arrow">→</div></a>';
  }
  h+='</div>';
  h+='<div class="weekly-lessons mt-12"><div class="row-sb"><span>Leçons vues cette semaine</span><strong>'+plan.weeklyDone+'/'+lessonGoal+'</strong></div><div class="progress-bar thin mt-8"><div class="progress-fill" style="width:'+lessonPctWeek+'%"></div></div></div>';
  h+='<div class="today-note">L’app ne pousse qu’une recette principale par semaine. Les leçons restent disponibles à ton rythme et alimentent la liste “À pratiquer”.</div>';
  h+='</section>';

  var reviewCards=buildReviewCards(3);
  if(reviewCards.length){
    h+='<section class="review-panel mt-16"><div class="row-sb"><div><div class="t-h3">Révisions intelligentes</div><div class="t-small t-muted mt-4">Petites actions issues des quiz, bilans et compétences faibles.</div></div><span class="badge badge-blue">'+reviewCards.length+'</span></div><div class="stack-8 mt-12">'+renderReviewCards(reviewCards)+'</div></section>';
  }

  if(plan.pending&&plan.pending.length){
    h+='<section class="pending-panel mt-16"><div class="row-sb"><div><div class="t-h3">À pratiquer</div><div class="t-small t-muted mt-4">Tes derniers cours ont ajouté ces exercices. Ils servent de réserve pour les prochaines semaines.</div></div><span class="badge badge-orange">'+plan.pending.length+'</span></div><div class="stack-8 mt-12">';
    plan.pending.forEach(function(item){h+=renderPracticeMiniCard(item);});
    h+='</div></section>';
  }

  var lastDebrief=state.getLastDebrief?state.getLastDebrief():null;
  if(lastDebrief){
    var dr=findRecipe(lastDebrief.recipeId);
    h+='<section class="coach-panel mt-16"><div class="t-h3">Dernier diagnostic</div><div class="t-small t-muted mt-4">'+(dr?esc(dr.title):'Dernière recette')+' · '+esc(lastDebrief.result==='success'?'réussi':lastDebrief.result==='failed'?'à reprendre':'partiel')+'</div>';
    if(lastDebrief.issues&&lastDebrief.issues.length){h+='<div class="issue-chip-row mt-10">';lastDebrief.issues.slice(0,4).forEach(function(id){h+='<span class="issue-chip">'+esc(issueLabel(id))+'</span>';});h+='</div>';}
    h+='</section>';
  }
  var skills=state.getSkillSummary?state.getSkillSummary(3):[];
  if(skills.length){
    h+='<section class="coach-panel mt-16"><div class="row-sb"><div><div class="t-h3">Compétences à consolider</div><div class="t-small t-muted mt-4">L’app suit ce que tu as vu, compris et pratiqué.</div></div><span class="badge badge-blue">maîtrise</span></div><div class="stack-8 mt-12">'+renderSkillMiniRows(skills)+'</div></section>';
  }

  h+='<div class="mt-16"><div class="t-h3" style="margin-bottom:12px">Accès rapide</div>';
  h+='<div class="action-grid">';
  h+='<a href="'+resumeHref+'" class="action-card action-primary"><div class="action-icon">↩</div><div class="action-title">Reprendre</div><div class="action-sub">'+esc(resumeTitle)+'</div></a>';
  h+='<a href="'+learnHref+'" class="action-card"><div class="action-icon">📚</div><div class="action-title">Faire une leçon</div><div class="action-sub">'+(nL?esc(nL.title)+' · '+nL.duration+' min':stats.lessonsCount+'/'+totalLessons+' leçons')+'</div><div class="progress-bar thin mt-8"><div class="progress-fill" style="width:'+lessonPct+'%"></div></div></a>';
  h+='<a href="'+cookHref+'" class="action-card"><div class="action-icon">👨‍🍳</div><div class="action-title">Recette semaine</div><div class="action-sub">'+(weekly&&weekly.recipe?esc(weekly.recipe.title)+' · '+((weekly.recipe.timePrep||0)+(weekly.recipe.timeCook||0))+' min':'Voir les recettes')+'</div></a>';
  h+='<a href="'+reviewHref+'" class="action-card"><div class="action-icon">🔄</div><div class="action-title">Réviser</div><div class="action-sub">'+esc(reviewSub)+'</div></a>';
  h+='</div></div>';
  return h;
}




function renderLearn(){
  var next=nextAvailableLesson(),stats=state.getStats();
  var total=LESSONS.length,globalPct=total?Math.round(stats.lessonsCount/total*100):0;
  var groups=[
    {title:'Fondations',sub:'Organisation, matériel, couteau et premiers gestes',ids:['organisation','materiel-feu','couteau-decoupes']},
    {title:'Cuissons',sub:'Comprendre la chaleur et choisir la bonne méthode',ids:['bases-cuisson','eau-vapeur-pochage','cuissons-poele','four-rotissage-gratins','mijotes-braisages']},
    {title:'Goût et sauces',sub:'Assaisonner, parfumer, lier et construire les sauces',ids:['assaisonnement-equilibre','herbes-epices-aromates','sauces-froides-emulsions','sauces-chaudes-base','jus-deglacage-sauces-cuisson','fonds-bouillons-fumets','sauces-emulsionnees-chaudes']},
    {title:'Produits',sub:'Œufs, légumes, féculents, viandes, volailles et poissons',ids:['oeufs','legumes','feculents-riz-pates-pommes-terre','viandes-rouges-porc','volailles','poissons-fruits-mer']},
    {title:'Pâtes, pâtisserie et service',sub:'Bases boulangères, desserts, dressage et autonomie',ids:['pates-salees-bases-boulangeres','patisserie-base','patisserie-sensible-meringue-caramel-chocolat','dressage-service','correction-improvisation-creation']}
  ];

  var h='<div class="learn-hero">';
  h+='<div class="t-title">Apprendre</div>';
  h+='<div class="t-body t-muted mt-4">Un parcours complet, organisé par grandes familles de compétences.</div>';
  h+='<div class="learn-progress mt-16"><div class="row-sb"><span>'+stats.lessonsCount+'/'+total+' leçons</span><strong>'+globalPct+'%</strong></div>';
  h+='<div class="progress-bar thin mt-8"><div class="progress-fill" style="width:'+globalPct+'%"></div></div></div>';
  if(next){
    h+='<a href="#lesson/'+next.id+'" class="continue-card mt-16">';
    h+='<div><div class="continue-label">Continuer le parcours</div><div class="continue-title">'+esc(next.title)+'</div>';
    h+='<div class="continue-sub">'+esc(next.subtitle)+' · '+next.duration+' min</div></div><div class="continue-arrow">→</div></a>';
  }
  h+='</div>';

  h+='<div class="learn-groups stack-16">';
  groups.forEach(function(group,gidx){
    var groupModules=group.ids.map(function(id){return MODULES.find(function(m){return m.id===id;});}).filter(Boolean);
    var gTotal=0,gDone=0;
    groupModules.forEach(function(m){var p=state.moduleProgress(m);gDone+=p.done;gTotal+=p.total;});
    var gPct=gTotal?Math.round(gDone/gTotal*100):0;
    h+='<section class="learn-group">';
    h+='<div class="learn-group-head"><div><div class="learn-group-title">'+esc(group.title)+'</div><div class="learn-group-sub">'+esc(group.sub)+'</div></div><div class="learn-group-count">'+gDone+'/'+gTotal+'</div></div>';
    h+='<div class="progress-bar thin mt-8"><div class="progress-fill" style="width:'+gPct+'%"></div></div>';
    h+='<div class="stack-12 mt-12">';
    groupModules.forEach(function(mod){
      var prog=state.moduleProgress(mod),pct=prog.total?Math.round(prog.done/prog.total*100):0;
      var hasNext=!!(next&&mod.lessonIds.indexOf(next.id)>=0);
      var open=(hasNext||(!next&&gidx===0))?' open':'';
      h+='<div class="module-card">';
      h+='<div class="module-header" data-module="'+mod.id+'">';
      h+='<div class="module-emoji" style="background:'+mod.color+'22">'+mod.emoji+'</div>';
      h+='<div class="module-meta"><div class="module-title">'+esc(mod.title)+(prog.done===prog.total?' ✅':'')+'</div>';
      h+='<div class="module-desc">'+esc(mod.description)+'</div>';
      h+='<div class="module-progress-row"><div class="progress-bar grow thin"><div class="progress-fill" style="width:'+pct+'%"></div></div>';
      h+='<span class="module-progress-label">'+prog.done+'/'+prog.total+'</span></div></div>';
      h+='<div class="module-chevron'+(open?' open':'')+'" id="chev-'+mod.id+'">›</div></div>';
      h+='<div class="module-lessons'+open+'" id="lessons-'+mod.id+'">';
      mod.lessonIds.forEach(function(lid){
      var lesson=findLesson(lid);if(!lesson)return;
      var done=state.isLessonDone(lid),score=state.getLessonScore(lid);
      var locked=!done&&isLessonLocked(lesson);

      if(locked){
        var blockId=(lesson.prerequisites||[]).find(function(p){return !state.isLessonDone(p);});
        var blockLesson=findLesson(blockId);
        h+='<div class="lesson-row-wrap">';
        h+='<div class="lesson-row lesson-locked">';
        h+='<div class="lesson-icon locked-icon">🔒</div>';
        h+='<div class="lesson-row-meta"><div class="lesson-row-title" style="color:var(--muted)">'+esc(lesson.title)+'</div>';
        h+='<div class="lesson-row-sub locked-msg">Terminer d\'abord : '+esc(blockLesson?blockLesson.title:'?')+'</div></div></div></div>';
      } else {
        h+='<div class="lesson-row-wrap">';
        h+='<a href="#lesson/'+lid+'" class="lesson-row">';
        h+='<div class="lesson-icon'+(done?' done':'')+'">'+( done?'✅':'📖')+'</div>';
        h+='<div class="lesson-row-meta"><div class="lesson-row-title">'+esc(lesson.title)+'</div>';
        h+='<div class="lesson-row-sub">'+esc(lesson.subtitle)+(score?' · '+score.pct+'%':'')+'</div></div>';
        h+='<div class="lesson-row-dur">'+lesson.duration+' min</div></a>';
        if(done)h+='<a href="#lesson/'+lid+'/review" class="btn-revise" title="Réviser le quiz">🔄 Réviser</a>';
        h+='</div>';
      }
    });
      h+='</div></div>';
    });
    h+='</div></section>';
  });
  h+='</div>';


  h+='<div class="mt-24" style="margin-bottom:8px"><div class="t-h3">📌 Fiches techniques</div>';
  h+='<div class="t-small t-muted mt-4" style="margin-bottom:14px">Référence rapide à consulter en cuisine</div></div>';
  h+='<div class="stack-10">';
  if(typeof TECHNIQUES!=='undefined'&&TECHNIQUES.length){
    TECHNIQUES.forEach(function(tech){
      h+='<details class="tech-card">';
      h+='<summary class="tech-summary">';
      h+='<div class="tech-emoji" style="background:'+tech.color+'22">'+tech.emoji+'</div>';
      h+='<div class="tech-info"><div class="tech-title">'+esc(tech.title)+'</div>';
      h+='<div class="tech-sub">'+esc(tech.subtitle)+'</div></div>';
      h+='<div class="tech-chevron">›</div>';
      h+='</summary>';
      h+='<div class="tech-content">';
      tech.items.forEach(function(item){
        h+='<div class="tech-row"><span class="tech-label">'+esc(item.label)+'</span>';
        h+='<span class="tech-value">'+esc(item.value)+'</span>';
        if(item.note)h+='<span class="tech-note">'+esc(item.note)+'</span>';
        h+='</div>';
      });
      h+='</div></details>';
    });
  }
  h+='</div>';
  return h;
}




function renderLesson(id,mode){
  var lesson=findLesson(id);
  if(!lesson)return '<div class="empty-state"><div class="empty-icon">❓</div><div class="empty-title">Leçon introuvable</div></div>';


  if(mode!=='review'&&isLessonLocked(lesson)){
    var blockId=(lesson.prerequisites||[]).find(function(p){return !state.isLessonDone(p);});
    var bl=findLesson(blockId);
    return '<div class="empty-state"><div class="empty-icon">🔒</div><div class="empty-title">Leçon verrouillée</div>'+
      '<div class="empty-sub mt-8">Termine d\'abord :<br><strong>'+esc(bl?bl.title:blockId)+'</strong></div>'+
      '<a href="#lesson/'+blockId+'" class="btn btn-primary mt-16">Aller à la leçon →</a>'+
      '<a href="#learn" class="btn btn-ghost mt-8">← Retour</a></div>';
  }

  _isReviewMode=(mode==='review');
  _quizState={lessonId:id,correct:0};
  var cCount=lesson.concepts.length,hasGF=!!lesson.goFurther;
  var quizStep=cCount+(hasGF?1:0),total=quizStep+1;
  var startStep=_isReviewMode?quizStep:0;

  var h='<div class="lesson-topbar">';
  h+='<a href="#learn" class="back-btn">←</a>';
  if(_isReviewMode){h+='<div class="badge badge-orange" style="margin:0 8px">🔄 Mode révision</div>';}
  else{h+='<div class="progress-bar grow thin"><div class="progress-fill" id="lesson-pbar" style="width:0%"></div></div>';}
  h+='<div class="step-counter" id="lesson-counter">'+(startStep+1)+'/'+total+'</div></div>';
  h+='<div id="lesson-content" data-lesson="'+id+'" data-step="'+startStep+'" data-total="'+total+'" style="padding:16px">';
  h+=renderLessonStep(lesson,startStep);
  h+='</div>';
  return h;
}

function renderLessonStep(lesson,step){
  var concepts=lesson.concepts,hasGF=!!lesson.goFurther;
  var cCount=concepts.length,gfStep=hasGF?cCount:-1,quizStep=cCount+(hasGF?1:0);

  if(step<cCount){
    var c=concepts[step];
    var h='<div class="concept-card"><div class="concept-num">'+(step+1)+'</div>';
    h+='<div class="concept-title">'+esc(c.title)+'</div>';
    h+='<div class="concept-body">'+(c.body||'')+'</div>';
    if(c.tip)h+='<div class="concept-tip"><span>💡</span><span>'+esc(c.tip)+'</span></div>';
    h+='</div><div class="lesson-nav mt-16">';
    if(step>0)h+='<button class="btn btn-secondary" data-action="prev">← Préc.</button>';
    h+='<button class="btn btn-primary" data-action="next">'+(step+1<cCount||hasGF?'Suivant →':'Au quiz →')+'</button></div>';
    return h;
  }
  if(step===gfStep){
    var gf=lesson.goFurther;
    return '<div class="go-further"><div class="go-further-label">Pour aller plus loin</div><div class="go-further-title">'+esc(gf.title)+'</div><div class="go-further-body">'+(gf.content||'')+'</div></div>'+
      '<div class="lesson-nav mt-16"><button class="btn btn-secondary" data-action="prev">← Préc.</button><button class="btn btn-primary" data-action="next">Au quiz →</button></div>';
  }
  if(step===quizStep){
    if(!_isReviewMode)_quizState={lessonId:lesson.id,correct:0};
    return renderQuizQuestion(lesson,0);
  }
  return renderLessonComplete(lesson,_quizState.correct,lesson.quiz.length);
}

function renderQuizQuestion(lesson,qIndex){
  var qs=lesson.quiz;
  if(qIndex>=qs.length)return renderLessonComplete(lesson,_quizState.correct,qs.length);
  var q=qs[qIndex];
  var h='<div class="quiz-section" data-lesson="'+lesson.id+'" data-qindex="'+qIndex+'" data-answer="'+q.answer+'" data-total="'+qs.length+'">';
  h+='<div class="quiz-label">🧠 Question '+(qIndex+1)+'/'+qs.length+'</div>';
  h+='<div class="quiz-q">'+esc(q.q)+'</div>';
  h+='<div class="quiz-options mt-16">';
  q.options.forEach(function(opt,i){h+='<button class="quiz-opt" data-i="'+i+'">'+esc(opt)+'</button>';});
  h+='</div><div id="quiz-expl" class="quiz-explanation hidden"></div>';
  h+='<div id="quiz-next-wrap" class="hidden mt-12"><button class="btn btn-primary btn-full" id="quiz-next-btn">'+(qIndex+1<qs.length?'Question suivante →':'Voir le résultat 🎉')+'</button></div></div>';
  return h;
}

function renderLessonComplete(lesson,correct,total){
  var pct=total>0?Math.round((correct||0)/total*100):0;
  var emoji=pct>=80?'🏆':pct>=50?'⭐':'📚';
  var wasDone=state.isLessonDone(lesson.id);
  if(_isReviewMode){state.updateLessonScore(lesson.id,correct||0,total||0);}
  else{if(!wasDone)state.completeLesson(lesson.id,correct||0,total||0);}
  if(state.recordLessonProgress)state.recordLessonProgress(lesson.id, lessonSkillIds(lesson), pct);
  var practices=getPracticeRecipes(lesson);
  var added=0;
  if(!_isReviewMode && practices.length){
    added=state.addPendingPractices ? state.addPendingPractices(lesson.id, practices) : 0;
  }
  var xp=_isReviewMode?0:20+((correct||0)*5);
  var next=nextAvailableLesson();

  var h='<div class="lesson-complete"><div class="complete-emoji">'+emoji+'</div>';
  h+='<div class="complete-title">'+(_isReviewMode?'Révision terminée !':'Leçon terminée !')+'</div>';
  if(total>0)h+='<div class="complete-sub">'+(correct||0)+'/'+total+' · '+pct+'%</div>';
  if(!_isReviewMode&&xp>0&&!wasDone)h+='<div class="xp-pill mt-8">+'+xp+' XP</div>';
  if(_isReviewMode&&pct===100)h+='<div class="xp-pill mt-8" style="color:var(--green);background:var(--green-soft);border-color:rgba(22,163,74,.2)">🎉 Parfait +10 XP</div>';
  h+='</div>';

  if(!_isReviewMode&&practices.length){
    h+='<div class="practice-explainer mt-20"><div class="t-h3">Passe à la pratique</div><div class="t-small t-muted mt-4">Ces recettes ne sont pas obligatoires maintenant. Elles sont ajoutées à “À pratiquer” pour que tu puisses enchaîner plusieurs cours, puis cuisiner plus tard.</div>';
    if(added)h+='<div class="practice-added mt-8">✓ '+added+' exercice'+(added>1?'s':'')+' ajouté'+(added>1?'s':'')+' à ta liste de pratique.</div>';
    else h+='<div class="practice-added mt-8">✓ Déjà dans ta liste de pratique.</div>';
    h+='</div><div class="stack-12 mt-12">';
    practices.slice(0,3).forEach(function(pr){h+=renderPracticeCard(pr,lesson);});
    h+='</div>';
  }

  h+='<div class="stack-8 mt-20">';
  if(next)h+='<a href="#lesson/'+next.id+'" class="btn btn-primary btn-full">Continuer le parcours →</a>';
  h+='<a href="#learn" class="btn btn-secondary btn-full">← Retour aux leçons</a>';
  h+='</div>';
  return h;
}




function renderRecipes(filter,search){
  filter=filter||'tous';search=search||'';
  var active=(typeof filter==='object')?filter:{family:filter,search:search,difficulty:'tous',time:'tous',skill:'tous',ingredient:'',context:'tous'};
  active.family=active.family||'tous';active.search=active.search||'';active.difficulty=active.difficulty||'tous';active.time=active.time||'tous';active.skill=active.skill||'tous';active.ingredient=active.ingredient||'';active.context=active.context||'tous';
  var families2=['tous'],skills2=allRecipeSkills();
  RECIPES.forEach(function(r){if(families2.indexOf(r.family)<0)families2.push(r.family);});
  var filtered2=RECIPES.filter(function(r){
    var total=(r.timePrep||0)+(r.timeCook||0),blob=recipeSearchBlob(r);
    if(active.family!=='tous'&&r.family!==active.family)return false;
    if(active.difficulty!=='tous'&&String(r.difficulty)!==active.difficulty)return false;
    if(active.time==='short'&&total>20)return false;
    if(active.time==='medium'&&(total<=20||total>45))return false;
    if(active.time==='long'&&total<=45)return false;
    if(active.skill!=='tous'&&(r.skills||[]).indexOf(active.skill)<0)return false;
    if(active.ingredient&&blob.indexOf(normalizeText(active.ingredient))<0)return false;
    if(!recipeMatchesContext(r,active.context))return false;
    return !active.search||blob.indexOf(normalizeText(active.search))>=0;
  });

  var weekly=ensureWeeklyRecipePlan();
  var nh='<div class="t-title mt-4">Cuisiner</div>';
  if(weekly&&weekly.recipe){
    nh+='<section class="weekly-push-panel mt-12"><div class="row-sb"><div><div class="t-h4">Recette poussée cette semaine</div><div class="t-small t-muted mt-4">Une seule recette principale, choisie selon tes cours et tes pratiques en attente.</div></div><span class="badge '+(weekly.completed?'badge-green':'badge-orange')+'">'+(weekly.completed?'faite':'à faire')+'</span></div>';
    nh+='<a class="weekly-push-card mt-12" href="'+weeklyRecipeHref(weekly)+'"><div class="today-icon">👨‍🍳</div><div class="grow"><div class="today-item-title">'+esc(weekly.recipe.title)+'</div><div class="today-item-sub">'+((weekly.recipe.timePrep||0)+(weekly.recipe.timeCook||0))+' min · '+esc(weekly.label||'Recette de la semaine')+'</div></div><div class="today-arrow">→</div></a>';
    if(weekly.reason)nh+='<div class="weekly-reason mt-10">'+esc(weekly.reason)+'</div>';
    nh+='</section>';
  }
  nh+='<section class="cook-today-panel mt-12">';
  nh+='<div class="row-sb"><div><div class="t-h4">Explorer une autre recette</div><div class="t-small t-muted mt-4">La recette hebdomadaire reste prioritaire. Ces filtres servent si tu veux cuisiner autre chose.</div></div></div>';
  var contexts=[{id:'tous',label:'Tout'},{id:'quick15',label:'15 min'},{id:'quick30',label:'30 min'},{id:'practice',label:'Technique'},{id:'complete',label:'Repas complet'},{id:'leftovers',label:'Restes'},{id:'easy',label:'Très facile'}];
  nh+='<div class="context-row mt-12">';
  contexts.forEach(function(c){nh+='<button class="context-chip'+(active.context===c.id?' active':'')+'" data-context="'+c.id+'" type="button">'+esc(c.label)+'</button>';});
  nh+='</div>';
  if(active.context!=='tous')nh+='<div class="context-help mt-8">Filtre actif : '+esc(recipeContextLabel(active.context))+'. Tu peux le combiner avec les filtres ci-dessous.</div>';
  nh+='</section>';
  var pending=pendingPracticeItems(4);
  if(pending.length){
    nh+='<section class="pending-panel mt-12"><div class="row-sb"><div><div class="t-h4">À pratiquer depuis tes cours</div><div class="t-small t-muted mt-4">Recettes recommandées par les dernières leçons terminées.</div></div><span class="badge badge-orange">'+pending.length+'</span></div><div class="stack-8 mt-12">';
    pending.forEach(function(item){nh+=renderPracticeMiniCard(item);});
    nh+='</div></section>';
  }
  nh+='<div class="search-bar mt-12"><span class="search-icon">🔍</span><input type="search" id="recipe-search" placeholder="Rechercher recette, geste, ingrédient…" value="'+esc(active.search)+'" autocomplete="off" /></div>';
  nh+='<div class="filter-row mt-8">';
  families2.forEach(function(f){nh+='<button class="filter-chip'+(active.family===f?' active':'')+'" data-filter="'+f+'">'+familyLabel(f)+'</button>';});
  nh+='</div><div class="recipe-filter-panel">';
  nh+='<select class="recipe-filter-control" id="recipe-difficulty"><option value="tous">Tous niveaux</option><option value="1"'+(active.difficulty==='1'?' selected':'')+'>Facile</option><option value="2"'+(active.difficulty==='2'?' selected':'')+'>Intermédiaire</option><option value="3"'+(active.difficulty==='3'?' selected':'')+'>Avancé</option></select>';
  nh+='<select class="recipe-filter-control" id="recipe-time"><option value="tous">Tous temps</option><option value="short"'+(active.time==='short'?' selected':'')+'>≤ 20 min</option><option value="medium"'+(active.time==='medium'?' selected':'')+'>20-45 min</option><option value="long"'+(active.time==='long'?' selected':'')+'>45 min +</option></select>';
  nh+='<select class="recipe-filter-control" id="recipe-skill"><option value="tous">Toutes compétences</option>';
  skills2.forEach(function(s){nh+='<option value="'+esc(s)+'"'+(active.skill===s?' selected':'')+'>'+esc(skillLabel(s))+'</option>';});
  nh+='</select>';
  nh+='<input class="recipe-filter-control" id="recipe-ingredient" type="search" placeholder="Ingrédient" value="'+esc(active.ingredient)+'" autocomplete="off" />';
  nh+='</div><div class="recipes-count">'+filtered2.length+' recette'+(filtered2.length>1?'s':'')+' trouvée'+(filtered2.length>1?'s':'')+'</div>';
  nh+='<div class="recipes-grid mt-8">';
  if(filtered2.length){
    filtered2.forEach(function(r){
      var done=state.isRecipeDone(r.id),hasNote=!!state.getRecipeNote(r.id);
      nh+='<div class="recipe-card" role="button" tabindex="0" data-href="recipe/'+r.id+'">';
      nh+='<div class="recipe-cover" style="'+recipeCoverStyle(r)+'"><div class="recipe-cover-emoji">'+recipeEmoji(r)+'</div>';
      nh+='<div class="recipe-cover-badges">'+difficultyBadge(r.difficulty)+(done?'<span class="badge badge-green">✓ Cuisiné</span>':'')+(hasNote?'<span class="badge badge-blue">📝</span>':'')+'</div></div>';
      nh+='<div class="recipe-info"><div class="recipe-title">'+esc(r.title)+'</div>'+recipeSkillChips(r,3);
      nh+='<div class="recipe-meta-row"><span class="recipe-meta-item">⏱ '+((r.timePrep||0)+(r.timeCook||0))+' min</span><span class="recipe-meta-item">👥 '+r.servings+' pers.</span><span class="recipe-meta-item difficulty">'+difficultyDots(r.difficulty)+'</span></div></div></div>';
    });
  } else {
    nh+='<div class="empty-state"><div class="empty-icon">🍽</div><div class="empty-title">Aucune recette trouvée</div><div class="empty-sub">Essaie de retirer un filtre ou de chercher une compétence plus large.</div></div>';
  }
  nh+='</div>';
  return nh;
}




function renderRecipeDetail(id,mode){
  var recipe=findRecipe(id);
  if(!recipe)return '<div class="empty-state"><div class="empty-icon">❓</div><div class="empty-title">Recette introuvable</div></div>';
  var done=state.isRecipeDone(id),existingNote=state.getRecipeNote(id),ctx=practiceContext(id,mode);

  var h='<a href="#recipes" class="btn btn-ghost btn-sm" style="margin-bottom:12px">← Retour</a>';
  h+='<div class="recipe-hero" style="'+recipeCoverStyle(recipe)+'"><div style="font-size:72px;position:relative;z-index:1">'+recipeEmoji(recipe)+'</div><div class="recipe-hero-overlay"></div></div>';
  h+='<div class="mt-16"><div class="t-title">'+esc(recipe.title)+'</div>';
  h+='<div class="recipe-meta-row mt-8">'+difficultyBadge(recipe.difficulty);
  h+='<span class="badge badge-neutral">🍳 '+recipe.timePrep+' min</span>';
  h+='<span class="badge badge-neutral">⏱ '+recipe.timeCook+' min</span>';
  h+='<span class="badge badge-neutral">👥 '+recipe.servings+' pers.</span></div></div>';
  h+=recipeSkillChips(recipe,8);

  if(done)h+='<div class="recipe-done-banner mt-12">✅ <span>Tu as déjà cuisiné cette recette</span></div>';

  if(ctx){
    var focus=(ctx.practice.focus||[]).slice(0,5),success=(ctx.practice.successCriteria||[]).slice(0,3);
    h+='<div class="practice-context-banner mt-12"><div class="practice-context-kicker">Tu pratiques</div><div class="practice-context-title">'+esc(ctx.lesson.title)+'</div>';
    if(ctx.practice.reason)h+='<div class="practice-context-reason">'+esc(ctx.practice.reason)+'</div>';
    if(focus.length){h+='<div class="practice-focus mt-10"><div class="practice-focus-title">Pendant cette recette, concentre-toi sur :</div><ul>';focus.forEach(function(f){h+='<li>'+esc(f)+'</li>';});h+='</ul></div>';}
    if(success.length){h+='<div class="practice-success mt-10"><div class="practice-focus-title">Critères de réussite :</div><ul>';success.forEach(function(f){h+='<li>'+esc(f)+'</li>';});h+='</ul></div>';}
    h+='</div>';
  }

  h+='<div class="card mt-16"><div class="t-h4" style="margin-bottom:10px">Ce que tu vas maîtriser</div><div class="objectives-list">';
  recipe.objectives.forEach(function(o){h+='<div class="objective-item"><div class="objective-dot"></div><span>'+esc(o)+'</span></div>';});
  h+='</div></div>';

  h+='<div class="card mt-12"><div class="t-h4" style="margin-bottom:10px">Ingrédients · '+recipe.servings+' pers.</div><div class="ingredients-list">';
  recipe.ingredients.forEach(function(ing){
    var qty=ing.qty?(ing.qty+(ing.unit?' '+ing.unit:'')):'';
    h+='<div class="ingredient-row"><span class="ingredient-qty">'+esc(qty)+'</span><span class="ingredient-name">'+esc(ing.item)+'</span>'+(ing.note?'<span class="ingredient-note">'+esc(ing.note)+'</span>':'')+'</div>';
  });
  h+='</div></div>';

  var equipment=inferRecipeEquipment(recipe),success=inferSuccessCriteria(recipe),critical=inferCriticalPoints(recipe),fixes=inferFixes(recipe);
  h+='<div class="card mt-12"><div class="t-h4" style="margin-bottom:10px">Avant de commencer</div>';
  h+='<div class="prep-summary-grid">';
  h+='<div class="prep-summary-item"><div class="prep-summary-label">Temps réel</div><div class="prep-summary-value">'+((recipe.timePrep||0)+(recipe.timeCook||0))+' min</div></div>';
  h+='<div class="prep-summary-item"><div class="prep-summary-label">Niveau</div><div class="prep-summary-value">'+(recipe.difficulty===1?'Facile':recipe.difficulty===2?'Intermédiaire':recipe.difficulty===3?'Avancé':'Expert')+'</div></div>';
  h+='</div>';
  h+='<div class="recipe-preflight-list mt-12">';
  h+='<div><strong>À faire :</strong> lis les étapes, sors les ingrédients et prépare le matériel avant de lancer le mode cuisine.</div>';
  if(equipment.length)h+='<div><strong>Matériel :</strong> '+equipment.map(esc).join(' · ')+'</div>';
  if(success.length)h+='<div><strong>Critères de réussite :</strong> '+success.map(esc).join(' · ')+'</div>';
  if(critical.length)h+='<div><strong>Points critiques :</strong> '+critical.slice(0,3).map(esc).join(' · ')+'</div>';
  h+='</div></div>';

  if(fixes.length){
    h+='<div class="card mt-12"><div class="t-h4" style="margin-bottom:10px">Si ça se passe mal</div><div class="fix-list">';
    fixes.forEach(function(f){h+='<div class="fix-item"><div class="fix-problem">'+esc(f.problem)+'</div><div class="fix-solution">'+esc(f.solution)+'</div></div>';});
    h+='</div></div>';
  }

  h+='<div class="card mt-12"><div class="t-h4" style="margin-bottom:10px">Déroulé complet · '+recipe.steps.length+' étapes</div><div class="stack-10">';
  recipe.steps.forEach(function(s,i){
    h+='<div class="recipe-step-detail">';
    h+='<div class="recipe-step-head"><div class="recipe-step-num">'+(i+1)+'</div><div class="grow"><div class="t-h4">'+esc(s.title)+'</div>'+(s.timer?'<div class="t-small t-muted">⏱ '+s.timer+' min</div>':'')+'</div></div>';
    h+='<div class="recipe-step-body"><div><span class="recipe-step-label">Action</span>'+esc(s.action)+'</div>';
    h+='<div><span class="recipe-step-label">Pourquoi</span>'+esc(s.why)+'</div>';
    h+='<div><span class="recipe-step-label">À éviter</span>'+esc(s.mistake)+'</div></div>';
    h+='</div>';
  });
  h+='</div></div>';

  if(recipe.tips&&recipe.tips.length){
    h+='<div class="card mt-12" style="background:var(--yellow-soft);border-color:rgba(217,119,6,0.2)"><div class="t-h4" style="margin-bottom:10px">💡 Tips du chef</div><div class="stack-8">';
    recipe.tips.forEach(function(t){h+='<div class="t-small" style="padding:8px 0;border-bottom:1px solid rgba(217,119,6,0.15)">'+esc(t)+'</div>';});
    h+='</div></div>';
  }

  h+='<div class="stack-8 mt-20"><a href="'+cookingHref(recipe.id,ctx&&ctx.lesson&&ctx.lesson.id)+'" class="btn btn-primary btn-lg btn-full">👨‍🍳 Commencer la recette</a></div>';

  if(isDebriefMode(mode))h+=renderDebriefForm(recipe,ctx);


  h+='<div class="recipe-note-section mt-20" id="note-section">';
  h+='<div class="sec-header"><span class="t-h3">📸 Ma réalisation</span>';
  if(existingNote&&mode!=='note')h+='<button class="btn btn-sm btn-secondary" id="btn-edit-note">Modifier</button>';
  h+='</div>';

  if(existingNote&&mode!=='note'){
    h+='<div class="recipe-note-display card">';
    if(existingNote.photo)h+='<img class="recipe-note-photo" src="'+existingNote.photo+'" alt="Ma réalisation" />';
    if(existingNote.rating){var stars='';for(var s=0;s<existingNote.rating;s++)stars+='⭐';h+='<div class="recipe-note-rating">'+stars+'</div>';}
    if(existingNote.note)h+='<div class="recipe-note-text">'+esc(existingNote.note)+'</div>';
    h+='<div class="recipe-note-date">'+formatDate(existingNote.date)+'</div></div>';
  } else if(!existingNote&&mode!=='note'){
    h+='<div class="recipe-note-empty"><div style="font-size:36px">📷</div>';
    h+='<div class="t-small t-muted mt-8">Après avoir cuisiné, note tes impressions et prends une photo de ton plat !</div>';
    h+='<button class="btn btn-secondary mt-12" id="btn-add-note">Ajouter une note</button></div>';
  }
  if(mode==='note')h+=renderNoteForm(existingNote,id);
  h+='</div>';
  return h;
}

function renderDebriefForm(recipe,ctx){
  var skills=attemptSkillsForRecipe(recipe,ctx,[]);
  var h='<div class="debrief-card card mt-16" id="debrief-form" data-recipe="'+recipe.id+'">';
  h+='<div class="t-h3">Bilan de pratique</div>';
  h+='<div class="t-small t-muted mt-4">Le but n’est pas de juger le plat, mais de transformer la recette en progression.</div>';
  h+='<div class="field mt-16"><label class="field-label">Résultat</label><div class="debrief-choice" id="debrief-result">';
  [{id:'success',label:'Réussi'},{id:'partial',label:'Partiel'},{id:'failed',label:'À reprendre'}].forEach(function(o,i){h+='<button type="button" class="debrief-result-chip'+(i===1?' active':'')+'" data-result="'+o.id+'">'+o.label+'</button>';});
  h+='</div></div>';
  h+='<div class="field mt-16"><label class="field-label">Ce qui a posé problème</label><div class="issue-grid" id="debrief-issues">';
  ISSUE_OPTIONS.forEach(function(o){h+='<button type="button" class="issue-btn" data-issue="'+o.id+'">'+esc(o.label)+'</button>';});
  h+='</div></div>';
  h+='<div class="field mt-16"><label class="field-label">Compétences travaillées</label><div class="skill-chips">';
  skills.forEach(function(s){h+='<span class="skill-chip">'+esc(skillLabel(s))+'</span>';});
  h+='</div></div>';
  h+='<div class="field mt-16"><label class="field-label">Note pour la prochaine fois</label><textarea id="debrief-note" placeholder="Ex. poêle trop chargée, refaire en deux fournées…"></textarea></div>';
  h+='<div class="stack-8 mt-16"><button class="btn btn-primary btn-full" id="debrief-save" type="button">Enregistrer le bilan</button><a class="btn btn-ghost btn-full" href="#recipe/'+recipe.id+'">Passer</a></div>';
  h+='</div>';
  return h;
}

function renderNoteForm(existing,recipeId){
  var cur=existing?(existing.rating||0):0;
  var h='<div class="card mt-12" id="note-form"><div class="t-h4" style="margin-bottom:14px">'+( existing?'Modifier ma note':'Ajouter une note')+'</div><div class="add-form">';
  h+='<div class="field"><label class="field-label">Photo de ton plat</label>';
  if(existing&&existing.photo){
    h+='<img id="note-photo-preview" class="recipe-note-photo" src="'+existing.photo+'" style="margin-bottom:8px" />';
    h+='<button class="btn btn-sm btn-secondary mt-8" id="note-photo-btn" type="button">📸 Changer</button>';
  } else {
    h+='<div class="photo-placeholder" id="note-photo-btn"><div class="photo-icon">📸</div><span>Prendre ou choisir une photo</span></div>';
    h+='<img id="note-photo-preview" class="photo-preview hidden" alt="Aperçu" />';
  }
  h+='<input type="file" id="note-photo-input" accept="image/*" capture="environment" style="display:none" /></div>';
  h+='<div class="field"><label class="field-label">Satisfaction</label><div class="stars-input" id="note-stars">';
  [1,2,3,4,5].forEach(function(i){h+='<button class="star-btn'+(i<=cur?' active':'')+'" data-star="'+i+'" type="button" aria-label="'+i+' sur 5">⭐</button>';});
  h+='</div></div>';
  h+='<div class="field"><label class="field-label">Notes & observations</label>';
  h+='<textarea id="note-text" placeholder="Ce qui a bien marché, ce que tu referais différemment…">'+esc((existing&&existing.note)||'')+'</textarea></div>';
  h+='<div class="stack-8"><button class="btn btn-primary btn-full" id="note-save" data-recipe="'+recipeId+'" type="button">Enregistrer</button>';
  h+='<button class="btn btn-ghost btn-full" id="note-cancel" type="button">Annuler</button></div></div></div>';
  return h;
}




var _cook={step:0,timer:null,timerVal:0,timerRunning:false};

function startCookingMode(id,mode){
  var recipe=findRecipe(id);
  if(!recipe){location.hash='recipes';return;}
  var lessonId=modeLessonId(mode);
  state.setLastOpened({type:'recipe',id:recipe.id,title:recipe.title,href:'#recipe/'+recipe.id+(lessonId?'/practice-'+lessonId:'')});
  _cook.step=0;_stopTimer();_renderCookStep(recipe,lessonId);
}

function _renderCookStep(recipe,lessonId){
  var s=recipe.steps[_cook.step],total=recipe.steps.length,isLast=_cook.step===total-1;
  var pct=Math.round(((_cook.step+1)/total)*100);
  var old=document.getElementById('cooking-mode');if(old)old.remove();
  var div=document.createElement('div');div.id='cooking-mode';div.className='cooking-mode';

  var h='<div class="cooking-topbar"><button class="back-btn" id="cm-close">✕</button>';
  h+='<div class="progress-bar grow thin" style="max-width:180px"><div class="progress-fill" style="width:'+pct+'%"></div></div>';
  h+='<div class="cooking-step-counter">'+(_cook.step+1)+'/'+total+'</div></div>';
  h+='<div class="cooking-body">';
  h+='<div class="cooking-step-num">Étape '+(_cook.step+1)+' — '+esc(recipe.title)+'</div>';
  h+='<div class="cooking-step-title">'+esc(s.title)+'</div>';
  h+='<div class="cooking-step-action">'+esc(s.action)+'</div>';
  var stepIngs=stepIngredients(recipe,s);
  if(stepIngs.length){
    h+='<div class="cooking-ingredients"><div class="cooking-ingredients-label">À sortir maintenant</div>';
    h+='<div class="cooking-ingredient-list">'+stepIngs.map(function(ing){var qty=ing.qty?(ing.qty+(ing.unit?' '+ing.unit:'')):'';return '<span class="cooking-ingredient"><strong>'+esc(qty)+'</strong> '+esc(ing.item)+'</span>';}).join('')+'</div></div>';
  }
  if(s.timer){
    _cook.timerVal=s.timer*60;_cook.timerRunning=false;
    h+='<div class="timer-card"><div><div class="timer-label">Minuteur</div><div class="timer-val" id="timer-display" aria-live="polite">'+_fmtTimer(s.timer*60)+'</div></div>';
    h+='<button class="timer-btn" id="timer-toggle">▶ Démarrer</button></div>';
  }
  h+='<div class="cooking-why mt-16"><div class="cooking-why-label">Pourquoi ?</div>'+esc(s.why)+'</div>';
  h+='<div class="cooking-mistake"><div class="cooking-mistake-label">⚠ Erreur fréquente</div>'+esc(s.mistake)+'</div>';
  h+='</div>';
  h+='<div class="cooking-footer"><button class="btn btn-secondary" id="cm-prev"'+(_cook.step===0?' disabled':'')+'>← Préc.</button>';
  h+='<button class="btn '+(isLast?'btn-green':'btn-primary')+'" id="cm-next">'+(isLast?'✅ Terminer':'Étape suivante →')+'</button></div>';
  div.innerHTML=h;document.getElementById('app').appendChild(div);

  if(s.timer)document.getElementById('timer-toggle').onclick=_toggleTimer;
  document.getElementById('cm-close').onclick=function(){_stopTimer();div.remove();location.hash='recipe/'+recipe.id+(lessonId?'/practice-'+lessonId:'');};
  document.getElementById('cm-prev').onclick=function(){if(_cook.step>0){_stopTimer();_cook.step--;_renderCookStep(recipe,lessonId);}};
  document.getElementById('cm-next').onclick=function(){
    _stopTimer();
    if(_cook.step<total-1){_cook.step++;_renderCookStep(recipe,lessonId);}
    else{
      state.completeRecipe(recipe.id);
      if(lessonId&&state.completePendingPractice)state.completePendingPractice(lessonId,recipe.id);
      div.remove();
      location.hash='recipe/'+recipe.id+'/'+(lessonId?'debrief-practice-'+lessonId:'debrief');
      showToast('🏆 Recette terminée ! Bilan conseillé');
    }
  };
}

function _toggleTimer(){
  var btn=document.getElementById('timer-toggle');if(!btn)return;
  if(_cook.timerVal<=0){btn.textContent='✅ Terminé';btn.disabled=true;return;}
  _cook.timerRunning=!_cook.timerRunning;
  if(_cook.timerRunning){
    btn.textContent='⏸ Pause';
    _cook.timer=setInterval(function(){
      _cook.timerVal=Math.max(0,_cook.timerVal-1);
      var d=document.getElementById('timer-display');if(d)d.textContent=_fmtTimer(_cook.timerVal);
      if(_cook.timerVal<=0){
        _stopTimer();
        var b=document.getElementById('timer-toggle');if(b){b.textContent='✅ Terminé';b.disabled=true;}
        showToast('⏰ Minuteur terminé !');
        _alertTimerDone();
      }
    },1000);
  } else {clearInterval(_cook.timer);_cook.timer=null;btn.textContent='▶ Reprendre';}
}
function _stopTimer(){clearInterval(_cook.timer);_cook.timer=null;_cook.timerRunning=false;}
function _fmtTimer(s){var a=Math.max(0,s||0);return Math.floor(a/60).toString().padStart(2,'0')+':'+(a%60).toString().padStart(2,'0');}




function renderMe(){
  var stats=state.getStats(),name=state.get('userName')||'Chef';
  var level=state.get('level'),levelLabels={debutant:'🥚 Débutant',intermediaire:'🍳 Intermédiaire',passionne:'🔥 Passionné'};
  var tL=LESSONS.length,pct=tL?Math.round(stats.lessonsCount/tL*100):0;

  var h='<div class="card mt-4"><div style="display:flex;align-items:center;gap:16px">';
  h+='<div class="profile-avatar">👨‍🍳</div>';
  h+='<div><div class="t-title">'+esc(name)+'</div>';
  if(level)h+='<div class="t-small t-muted mt-4">'+(levelLabels[level]||'')+'</div>';
  h+='<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">';
  h+='<div class="xp-pill">⚡ '+stats.xp+' XP</div>';
  h+='<div class="streak-pill" style="background:var(--orange-soft);border:1px solid rgba(232,93,4,.2);color:var(--orange-dark)">🔥 '+stats.streak+' j.</div>';
  h+='</div></div></div></div>';

  h+='<div class="stat-grid mt-16">';
  h+='<div class="stat-tile"><div class="stat-val">'+stats.lessonsCount+'</div><div class="stat-lbl">Leçons</div></div>';
  h+='<div class="stat-tile"><div class="stat-val">'+stats.recipesCount+'</div><div class="stat-lbl">Recettes</div></div>';
  h+='<div class="stat-tile"><div class="stat-val">'+stats.notesCount+'</div><div class="stat-lbl">Notes</div></div>';
  h+='<div class="stat-tile"><div class="stat-val">'+pct+'%</div><div class="stat-lbl">Cours</div></div>';
  h+='</div>';


  var cookLevel=computeCookLevel();
  h+='<div class="level-panel mt-16"><div class="row-sb"><div><div class="level-kicker">Niveau culinaire</div><div class="level-title">'+esc(cookLevel.current.title)+'</div><div class="t-small t-muted mt-4">'+esc(cookLevel.current.desc)+'</div></div><div class="level-score">'+cookLevel.current.id+'/5</div></div><div class="progress-bar thin mt-12"><div class="progress-fill" style="width:'+cookLevel.pct+'%"></div></div></div>';

  var skillRows=state.getSkillSummary?state.getSkillSummary(6):[];
  if(skillRows.length){
    h+='<div class="card mt-16"><div class="row-sb"><div><div class="t-h3">Maîtrise des compétences</div><div class="t-small t-muted mt-4">Vu → compris → pratiqué → maîtrisé.</div></div><span class="badge badge-blue">'+skillRows.length+'</span></div><div class="stack-8 mt-12">'+renderSkillMiniRows(skillRows)+'</div></div>';
  }

  h+='<div class="mt-20"><div class="t-h3" style="margin-bottom:12px">Progression</div>';
  MODULES.forEach(function(mod){
    var prog=state.moduleProgress(mod),mpct=prog.total?Math.round(prog.done/prog.total*100):0;
    h+='<div class="card-flat" style="display:flex;align-items:center;gap:12px;margin-bottom:8px">';
    h+='<div style="font-size:24px">'+mod.emoji+'</div>';
    h+='<div style="flex:1"><div class="t-h4">'+esc(mod.title)+'</div>';
    h+='<div class="progress-bar thin mt-8"><div class="progress-fill" style="width:'+mpct+'%"></div></div></div>';
    h+='<div class="t-small t-muted" style="font-weight:700">'+prog.done+'/'+prog.total+'</div></div>';
  });
  h+='</div>';


  h+='<div class="card mt-20">';
  h+='<div class="t-h4">💾 Sauvegarde & restauration</div>';
  h+='<div class="t-small t-muted mt-8">Si Safari réinitialise l\'app, tu peux restaurer toute ta progression depuis une sauvegarde.</div>';
  h+='<div class="stack-8 mt-14">';
  h+='<button class="btn btn-secondary btn-full" id="btn-export">⬇️ Exporter ma progression</button>';
  h+='<button class="btn btn-secondary btn-full" id="btn-import-show">⬆️ Restaurer une sauvegarde</button>';
  h+='<input type="file" id="import-file" accept=".json,.txt" style="display:none" />';
  h+='</div></div>';

  h+='<div class="card mt-16"><div class="t-h4" style="margin-bottom:12px">Paramètres</div>';
  h+='<div class="field"><label class="field-label">Ton prénom</label>';
  h+='<input type="text" id="pref-name" value="'+esc(name)+'" placeholder="Ton prénom" /></div>';
  var theme=state.get('theme')||'system';
  h+='<div class="field mt-12"><label class="field-label">Apparence</label>';
  h+='<div class="theme-choice" id="theme-choice">';
  [{id:'light',label:'Clair'},{id:'dark',label:'Sombre'},{id:'system',label:'Système'}].forEach(function(opt){
    h+='<button class="theme-chip'+(theme===opt.id?' active':'')+'" data-theme="'+opt.id+'" type="button">'+opt.label+'</button>';
  });
  h+='</div></div>';
  h+='<button class="btn btn-secondary btn-full mt-12" id="save-prefs" type="button">Enregistrer</button>';
  h+='<button class="btn btn-ghost btn-full mt-8" id="reset-progress" style="color:var(--red);font-size:13px" type="button">Réinitialiser la progression</button>';
  h+='</div>';
  return h;
}




function bindHandlers(view,param,mode){
  var page=document.getElementById('current-page');
  if(page){
    page.addEventListener('click',function(e){
      var rv=e.target.closest('[data-review-done]');
      if(rv){
        e.preventDefault(); e.stopPropagation();
        if(state.markReviewCardDone){state.markReviewCardDone(rv.dataset.reviewDone);showToast('Révision notée');route();}
        return;
      }
      var rm=e.target.closest('[data-remove-practice]');
      if(rm){
        e.preventDefault(); e.stopPropagation();
        var parts=rm.dataset.removePractice.split('::');
        if(parts.length===2&&state.removePendingPractice){state.removePendingPractice(parts[0],parts[1]);showToast('Exercice retiré');route();}
        return;
      }
      var c=e.target.closest('[data-href]');if(c)location.hash=c.dataset.href;
    });
    page.addEventListener('keydown',function(e){
      var c=e.target.closest('[data-href]');
      if(c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();location.hash=c.dataset.href;}
    });
  }

  if(view==='learn'){
    document.querySelectorAll('.module-header[data-module]').forEach(function(el){
      el.addEventListener('click',function(){
        var id=el.dataset.module,list=document.getElementById('lessons-'+id),chev=document.getElementById('chev-'+id);
        if(list){list.classList.toggle('open');if(chev)chev.classList.toggle('open');}
      });
    });
  }
  if(view==='lesson')_bindLessonHandlers();
  if(view==='recipes'){
    function readRecipeFilters(familyOverride){
      var activeChip=document.querySelector('.filter-chip.active');
      return {
        family: familyOverride || (activeChip&&activeChip.dataset.filter) || 'tous',
        search: (document.getElementById('recipe-search')||{}).value || '',
        difficulty: (document.getElementById('recipe-difficulty')||{}).value || 'tous',
        time: (document.getElementById('recipe-time')||{}).value || 'tous',
        skill: (document.getElementById('recipe-skill')||{}).value || 'tous',
        ingredient: (document.getElementById('recipe-ingredient')||{}).value || '',
        context: ((document.querySelector('.context-chip.active')||{}).dataset||{}).context || 'tous'
      };
    }
    function refreshRecipes(familyOverride,focusId){
      var pg=document.getElementById('current-page');
      if(pg){
        pg.innerHTML=renderRecipes(readRecipeFilters(familyOverride));
        bindHandlers('recipes','','');
        if(focusId){
          var focusEl=document.getElementById(focusId);
          if(focusEl){focusEl.focus();if(focusEl.setSelectionRange){var len=focusEl.value.length;focusEl.setSelectionRange(len,len);}}
        }
      }
    }
    var si=document.getElementById('recipe-search');
    if(si)si.addEventListener('input',function(){refreshRecipes(null,'recipe-search');});
    document.querySelectorAll('.recipe-filter-control').forEach(function(ctrl){
      ctrl.addEventListener(ctrl.tagName==='INPUT'?'input':'change',function(){refreshRecipes(null,ctrl.tagName==='INPUT'?ctrl.id:null);});
    });
    document.querySelectorAll('.filter-chip').forEach(function(chip){
      chip.addEventListener('click',function(){
        refreshRecipes(chip.dataset.filter);
      });
    });
    document.querySelectorAll('.context-chip').forEach(function(chip){
      chip.addEventListener('click',function(){
        document.querySelectorAll('.context-chip').forEach(function(c){c.classList.remove('active');});
        chip.classList.add('active');
        refreshRecipes(null);
      });
    });
  }
  if(view==='recipe'){_bindRecipeNoteHandlers(param,mode);if(isDebriefMode(mode))_bindDebriefHandlers(param,mode);}
  if(view==='me'){
    var sp=document.getElementById('save-prefs');
    if(sp)sp.addEventListener('click',function(){var v=(document.getElementById('pref-name')||{}).value;if(v&&v.trim()){state.set('userName',v.trim());showToast('✅ Sauvegardé');}});
    document.querySelectorAll('.theme-chip[data-theme]').forEach(function(btn){
      btn.addEventListener('click',function(){
        state.set('theme',btn.dataset.theme);
        applyTheme();
        document.querySelectorAll('.theme-chip').forEach(function(b){b.classList.remove('active');});
        btn.classList.add('active');
        showToast('Apparence mise à jour');
      });
    });
    var rp=document.getElementById('reset-progress');
    if(rp)rp.addEventListener('click',function(){if(confirm('Réinitialiser ?')){state.reset();location.hash='home';showToast('🔄 Réinitialisé');}});

    var expBtn=document.getElementById('btn-export');
    if(expBtn)expBtn.addEventListener('click',_exportProgress);
    var impShow=document.getElementById('btn-import-show'),impFile=document.getElementById('import-file');
    if(impShow)impShow.addEventListener('click',function(){if(impFile)impFile.click();});
    if(impFile)impFile.addEventListener('change',function(){if(impFile.files[0])_importProgress(impFile.files[0]);});
  }
}


function _bindLessonHandlers(){
  var content=document.getElementById('lesson-content');if(!content)return;
  content.addEventListener('click',function(e){
    var btn=e.target.closest('[data-action]');
    if(btn){if(btn.dataset.action==='next')_advanceLesson(1);if(btn.dataset.action==='prev')_advanceLesson(-1);return;}
    var opt=e.target.closest('.quiz-opt:not(.disabled)');
    if(opt){_handleQuizAnswer(opt);return;}
    if(e.target.id==='quiz-next-btn')_handleQuizNext();
  });
}
function _handleQuizAnswer(btn){
  var sec=btn.closest('.quiz-section');if(!sec)return;
  var ci=parseInt(sec.dataset.answer),ch=parseInt(btn.dataset.i),lid=sec.dataset.lesson,qi=parseInt(sec.dataset.qindex);
  sec.querySelectorAll('.quiz-opt').forEach(function(b,i){b.classList.add('disabled');if(i===ci)b.classList.add('correct');if(i===ch&&ch!==ci)b.classList.add('wrong');});
  var lesson=findLesson(lid),expl=document.getElementById('quiz-expl');
  if(expl&&lesson){expl.textContent=lesson.quiz[qi].explanation;expl.classList.remove('hidden');}
  if(_quizState.lessonId!==lid)_quizState={lessonId:lid,correct:0};
  if(ch===ci)_quizState.correct++;
  var nxt=document.getElementById('quiz-next-wrap');if(nxt)nxt.classList.remove('hidden');
}
function _handleQuizNext(){
  var sec=document.querySelector('.quiz-section');if(!sec)return;
  var lid=sec.dataset.lesson,qi=parseInt(sec.dataset.qindex)+1,tot=parseInt(sec.dataset.total);
  var lesson=findLesson(lid);if(!lesson)return;
  var content=document.getElementById('lesson-content');if(!content)return;
  if(qi<tot)content.innerHTML=renderQuizQuestion(lesson,qi);
  else content.innerHTML=renderLessonComplete(lesson,_quizState.correct,tot);
  _updateLessonTopbar(parseInt(content.dataset.step),parseInt(content.dataset.total));
}
function _advanceLesson(dir){
  var content=document.getElementById('lesson-content');if(!content)return;
  var lesson=findLesson(content.dataset.lesson);if(!lesson)return;
  var step=parseInt(content.dataset.step)+dir,total=parseInt(content.dataset.total);
  step=Math.max(0,Math.min(step,total-1));
  content.dataset.step=step;content.innerHTML=renderLessonStep(lesson,step);
  _updateLessonTopbar(step,total);
}
function _updateLessonTopbar(step,total){
  var pb=document.getElementById('lesson-pbar'),ctr=document.getElementById('lesson-counter');
  if(pb)pb.style.width=Math.round(step/Math.max(1,total-1)*100)+'%';
  if(ctr)ctr.textContent=(step+1)+'/'+total;
}


function _bindDebriefHandlers(recipeId,mode){
  var form=document.getElementById('debrief-form');if(!form)return;
  var recipe=findRecipe(recipeId),ctx=practiceContext(recipeId,mode);
  var result='partial';
  form.querySelectorAll('.debrief-result-chip').forEach(function(btn){
    btn.addEventListener('click',function(){
      result=btn.dataset.result||'partial';
      form.querySelectorAll('.debrief-result-chip').forEach(function(b){b.classList.remove('active');});
      btn.classList.add('active');
    });
  });
  form.querySelectorAll('.issue-btn').forEach(function(btn){
    btn.addEventListener('click',function(){btn.classList.toggle('active');});
  });
  var save=document.getElementById('debrief-save');
  if(save)save.addEventListener('click',function(){
    var issues=[];form.querySelectorAll('.issue-btn.active').forEach(function(b){issues.push(b.dataset.issue);});
    var skills=attemptSkillsForRecipe(recipe,ctx,issues);
    var note=(document.getElementById('debrief-note')||{}).value||'';
    if(state.addRecipeAttempt)state.addRecipeAttempt(recipeId,{result:result,issues:issues,skills:skills,note:note,lessonId:ctx&&ctx.lesson?ctx.lesson.id:null});
    showToast('✅ Bilan enregistré');
    location.hash='recipe/'+recipeId;
  });
}


var _noteStar=0;
function _bindRecipeNoteHandlers(recipeId,mode){
  var existing=state.getRecipeNote(recipeId);
  var addBtn=document.getElementById('btn-add-note');
  if(addBtn)addBtn.addEventListener('click',function(){_openNoteForm(recipeId,null);});
  var editBtn=document.getElementById('btn-edit-note');
  if(editBtn)editBtn.addEventListener('click',function(){_openNoteForm(recipeId,existing);});

  if(mode==='note'){
    var ns=document.getElementById('note-section');
    if(ns){var e2=ns.querySelector('.recipe-note-empty');if(e2)e2.remove();}
    _bindNoteFormHandlers(recipeId);

    return;
  }

}
function _openNoteForm(recipeId,existing){
  var ns=document.getElementById('note-section');if(!ns)return;
  var e1=ns.querySelector('.recipe-note-empty'),d1=ns.querySelector('.recipe-note-display'),eb=document.getElementById('btn-edit-note');
  if(e1)e1.style.display='none';if(d1)d1.style.display='none';if(eb)eb.style.display='none';
  var of=document.getElementById('note-form');if(of)of.remove();
  ns.insertAdjacentHTML('beforeend',renderNoteForm(existing,recipeId));
  _bindNoteFormHandlers(recipeId);
  setTimeout(function(){var f=document.getElementById('note-form');if(f)f.scrollIntoView({behavior:'smooth',block:'start'});},100);
}
function _bindNoteFormHandlers(recipeId){
  _noteStar=(state.getRecipeNote(recipeId)||{}).rating||0;
  var photoInput=document.getElementById('note-photo-input'),photoBtn=document.getElementById('note-photo-btn');
  if(photoBtn)photoBtn.addEventListener('click',function(){if(photoInput)photoInput.click();});
  if(photoInput){
    photoInput.addEventListener('change',function(){
      var file=photoInput.files[0];if(!file)return;

      compressImage(file,function(compressed){
        if(!compressed){showToast('❌ Photo impossible à compresser');return;}
        var preview=document.getElementById('note-photo-preview');
        if(preview){preview.src=compressed;preview.classList.remove('hidden');preview.style.cssText='width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:16px;margin-bottom:8px;display:block';}
        if(photoBtn)photoBtn.style.display='none';
      });
    });
  }
  var sw=document.getElementById('note-stars');
  if(sw)sw.querySelectorAll('.star-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      _noteStar=parseInt(btn.dataset.star);
      sw.querySelectorAll('.star-btn').forEach(function(b,i){b.classList.toggle('active',i<_noteStar);});
    });
  });
  var saveBtn=document.getElementById('note-save');
  if(saveBtn)saveBtn.addEventListener('click',function(){
    var note=(document.getElementById('note-text')||{}).value||'';
    var preview=document.getElementById('note-photo-preview');
    var photo=(preview&&preview.src&&preview.src.startsWith('data:'))?preview.src:null;
    var ex=state.getRecipeNote(recipeId);
    if(!photo&&ex)photo=ex.photo||null;
    if(state.setRecipeNote(recipeId,{note:note,photo:photo,rating:_noteStar})===false){
      showToast('❌ Sauvegarde impossible. Supprime la photo ou exporte ta progression.');
      return;
    }
    location.hash='recipe/'+recipeId;showToast('✅ Note enregistrée !');
  });
  var cancelBtn=document.getElementById('note-cancel');
  if(cancelBtn)cancelBtn.addEventListener('click',function(){location.hash='recipe/'+recipeId;});
}

})();
