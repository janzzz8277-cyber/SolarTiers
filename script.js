const GAMEMODES = [
  {key:'vanilla', label:'Vanilla'},
  {key:'sword', label:'Sword'},
  {key:'axe', label:'Axe'},
  {key:'uhc', label:'UHC'},
  {key:'pot', label:'Pot'},
  {key:'nethpot', label:'NethPot'},
  {key:'smp', label:'SMP'},
  {key:'mace', label:'Mace'},
];

const TIER_ORDER = ['HT1','LT1','HT2','LT2','HT3','LT3','HT4','LT4','HT5','LT5'];
const TIER_POINTS = {HT1:60, LT1:45, HT2:30, LT2:20, HT3:10, LT3:6, HT4:4, LT4:3, HT5:2, LT5:1};
const TIER_COLOR = {1:'var(--t1)', 2:'var(--t2)', 3:'var(--t3)', 4:'var(--t4)', 5:'var(--t5)'};

const STORAGE_KEY = 'players-data';

function tierNum(t){ return t ? parseInt(t.slice(2)) : null; }

// Small monochrome icons (currentColor), one per gamemode — purely decorative
// pictograms, not reproductions of any game asset.
const MODE_ICONS = {
  vanilla: '<img src="images/vanilla.png" class="gm-icon" alt="Vanilla">',
  sword: '<img src="images/sword.png" class="gm-icon" alt="Sword">',
  axe: '<img src="images/axe.png" class="gm-icon" alt="Axe">',
  uhc: '<img src="images/uhc.png" class="gm-icon" alt="UHC">',
  pot: '<img src="images/pot.png" class="gm-icon" alt="Pot">',
  nethpot: '<img src="images/nethpot.png" class="gm-icon" alt="NethPot">',
  smp: '<img src="images/smp.png" class="gm-icon" alt="SMP">',
  mace: '<img src="images/mace.png" class="gm-icon" alt="Mace">'
};

const DEFAULT_PLAYERS = [
  {name:'Kradusss', region:'EU', skinUsername:'Kradusss', tiers:{vanilla:null, sword:'LT3', axe:'LT3', uhc:null, pot:'LT3', nethpot:'HT4', smp:'HT4', mace:'LT3'}},
  {name:'T_h_r_i_f_t_y', region:'EU', skinUsername:'T_h_r_i_f_t_y', tiers:{vanilla:null, sword:'LT4', axe:null, uhc:null, pot:null, nethpot:'LT4', smp:null, mace:'LT3'}},
  {name:'hrucurd', region:'EU', skinUsername:'hrucurd', tiers:{vanilla:null, sword:'HT5', axe:'LT4', uhc:null, pot:'HT5', nethpot:'HT5', smp:null, mace:'LT3'}},
  {name:'Luke2093', region:'EU', skinUsername:'Luke2093', tiers:{vanilla:null, sword:'HT5', axe:null, uhc:null, pot:null, nethpot:null, smp:null, mace:null}},
  {name:'zeranstorm1', region:'EU', skinUsername:'zeranstorm1', tiers:{vanilla:null, sword:null, axe:null, uhc:null, pot:null, nethpot:'LT4', smp:null, mace:null}},
  {name:'0d1xx', region:'EU', skinUsername:'0d1xx', tiers:{vanilla:null, sword:'LT5', axe:null, uhc:null, pot:null, nethpot:null, smp:null, mace:'LT4'}},
  {name:'ev11dence', region:'EU', skinUsername:'ev11dence', tiers:{vanilla:null, sword:null, axe:null, uhc:null, pot:null, nethpot:'HT4', smp:null, mace:null}},
  {name:'HOLYYY17', region:'EU', skinUsername:'HOLYYY17', tiers:{vanilla:null, sword:'LT5', axe:null, uhc:null, pot:null, nethpot:null, smp:null, mace:null}},
  {name:'_XARBE', region:'EU', skinUsername:'_XARBE', tiers:{vanilla:null, sword:'LT3', axe:'HT4', uhc:null, pot:'HT4', nethpot:'LT4', smp:null, mace:null}},
  {name:'Martosuli', region:'EU', skinUsername:'Martosuli', tiers:{vanilla:null, sword:'HT5', axe:null, uhc:null, pot:null, nethpot:null, smp:null, mace:null}},
  {name:'ceckhla', region:'EU', skinUsername:'ceckhla', tiers:{vanilla:null, sword:null, axe:null, uhc:null, pot:null, nethpot:'HT5', smp:null, mace:null}},
  {name:'LukaMamaci', region:'EU', skinUsername:'LukaMamaci', tiers:{vanilla:null, sword:'LT5', axe:null, uhc:null, pot:'LT5', nethpot:null, smp:null, mace:'HT4'}},
  {name:'DangerMarIow', region:'EU', skinUsername:'DangerMarIow', tiers:{vanilla:null, sword:'HT4', axe:null, uhc:null, pot:null, nethpot:'LT4', smp:null, mace:null}},
  {name:'tato_17', region:'EU', skinUsername:'tato_17', tiers:{vanilla:null, sword:'LT5', axe:null, uhc:null, pot:null, nethpot:null, smp:null, mace:'LT4'}},
  {name:'hhurtfull', region:'EU', skinUsername:'hhurtfull', tiers:{vanilla:null, sword:'LT3', axe:'LT3', uhc:'LT3', pot:'LT3', nethpot:'HT3', smp:'HT3', mace:'LT3'}},
  {name:'Giorgavarbiwo127', region:'EU', skinUsername:'Giorgavarbiwo127', tiers:{vanilla:null, sword:null, axe:null, uhc:null, pot:null, nethpot:null, smp:null, mace:'LT4'}},
];


let PLAYERS = [];
let activeGamemode = null; // null = overall view
let editingId = null;

function computePoints(tiers){
  return GAMEMODES.reduce((sum, gm) => sum + (TIER_POINTS[tiers[gm.key]] || 0), 0);
}

function rankTitle(points){
  if (points >= 180) return 'Solar Sovereign';
  if (points >= 140) return 'Solar Master';
  if (points >= 100) return 'Solar Ace';
  if (points >= 60) return 'Solar Specialist';
  if (points >= 20) return 'Solar Apprentice';
  return 'Solar Rookie';
}

function skinUrl(p){
  const username = (p.skinUsername && p.skinUsername.trim()) || p.name;
  if (!username) return null;
  return `https://mc-heads.net/avatar/${encodeURIComponent(username)}/100`;
}

function withComputed(list){
  return list.map(p => {
    const points = computePoints(p.tiers);
    return {...p, points, title: rankTitle(points)};
  }).sort((a,b) => b.points - a.points);
}

function makeId(){
  return 'p_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2,8);
}

/* ---------------- Storage ---------------- */
async function loadPlayers(){
  let raw = null;
  try {
    const result = await window.storage.get(STORAGE_KEY, true);
    raw = result ? result.value : null;
  } catch (e) {
    raw = null; // key not found yet
  }
  if (raw){
    try {
      return JSON.parse(raw);
    } catch (e){
      console.error('Corrupt storage, reseeding', e);
    }
  }
  // seed defaults
  const seeded = DEFAULT_PLAYERS.map(p => ({...p, id: makeId()}));
  await persistPlayers(seeded);
  return seeded;
}

async function persistPlayers(list){
  try {
    const result = await window.storage.set(STORAGE_KEY, JSON.stringify(list), true);
    if (!result) console.error('Storage set returned no result');
  } catch (e){
    console.error('Failed to save players', e);
    alert("Couldn't save — please try again.");
  }
}

/* ---------------- Rendering: nav + hero copy ---------------- */
function selectGamemode(key){
  activeGamemode = key || null;
  renderGamemodeNav();
  syncHeaderNav();
  updateHeroCopy();
  renderTableHead();
  renderTable();
  renderPodium();
}

function syncHeaderNav(){
  document.querySelectorAll('#headerNav a[data-gm]').forEach(a => {
    const key = a.dataset.gm || null;
    a.classList.toggle('active', key === activeGamemode);
  });
}

function renderGamemodeNav(){
  const bar = document.getElementById('gamemodeNav');
  const allBtn = `<button class="gm-tab ${activeGamemode === null ? 'active' : ''}" data-gm=""><span class="dot"></span>Overall</button>`;
  const btns = GAMEMODES.map(gm => `
    <button class="gm-tab ${activeGamemode === gm.key ? 'active' : ''}" data-gm="${gm.key}"><span class="dot"></span>${gm.label}</button>
  `).join('');
  bar.innerHTML = allBtn + btns;
}

function wireHeaderNav(){
  document.getElementById('headerNav').addEventListener('click', (e) => {
    const link = e.target.closest('a[data-gm]');
    if (!link) return;
    e.preventDefault();
    selectGamemode(link.dataset.gm);
  });
  document.getElementById('gamemodeNav').addEventListener('click', (e) => {
    const btn = e.target.closest('.gm-tab');
    if (!btn) return;
    selectGamemode(btn.dataset.gm);
  });
}

function updateHeroCopy(){
  const eyebrow = document.getElementById('heroEyebrow');
  const title = document.getElementById('heroTitle');
  const sub = document.getElementById('heroSub');
  if (!activeGamemode){
    eyebrow.textContent = 'Overall · PvP Rankings';
    title.textContent = 'Where the best burn brightest.';
    sub.textContent = 'Live tier rankings across Vanilla, Sword, Axe, UHC, Pot, NethPot and SMP. Brighter badge, better tier.';
  } else {
    const gm = GAMEMODES.find(g => g.key === activeGamemode);
    eyebrow.textContent = gm.label + ' · PvP Rankings';
    title.textContent = gm.label + ' leaderboard.';
    sub.textContent = `Players ranked by their current ${gm.label} tier, from HT1 down to LT5.`;
  }
}

/* ---------------- Podium ---------------- */
function renderPodium(){
  const ranked = activeGamemode
    ? PLAYERS.filter(p => p.tiers[activeGamemode]).sort((a,b) => TIER_ORDER.indexOf(a.tiers[activeGamemode]) - TIER_ORDER.indexOf(b.tiers[activeGamemode]))
    : PLAYERS;
  const podium = document.getElementById('podium');
  const top3 = ranked.slice(0,3);
  if (top3.length === 0){
    podium.innerHTML = '<div class="empty-podium">No ranked players yet — add the first one.</div>';
    return;
  }
  const order = [top3[1], top3[0], top3[2]];
  const classes = ['p2','p1','p3'];
  podium.innerHTML = '';
  order.forEach((p, i) => {
    if (!p) return;
    const url = skinUrl(p);
    const badgeText = activeGamemode ? p.tiers[activeGamemode] : (p.points + ' pts');
    const rankLabel = activeGamemode ? p.title : p.title;
    const div = document.createElement('div');
    div.className = 'planet ' + classes[i];
    div.innerHTML = `
      <div class="orb ${classes[i]}">${url ? `<img src="${url}" alt="${p.name}" onerror="this.parentElement.textContent='${p.name.charAt(0)}';">` : p.name.charAt(0)}</div>
      <div class="pname">${p.name}</div>
      <div class="ppts">${badgeText}</div>
      <div class="prank">${rankLabel}</div>
    `;
    div.onclick = () => openDetailModal(p);
    podium.appendChild(div);
  });
}

/* ---------------- Table head ---------------- */
function renderTableHead(){
  const head = document.getElementById('tableHead');
  if (!activeGamemode){
    head.innerHTML = `
      <tr>
        <th class="center">#</th>
        <th>Player</th>
        <th class="center">Pts</th>
        ${GAMEMODES.map(gm => `<th class="center" data-gm="${gm.key}"><span class="gm-head">${MODE_ICONS[gm.key]}${gm.label}</span></th>`).join('')}
      </tr>`;
  } else {
    const gm = GAMEMODES.find(g => g.key === activeGamemode);
    head.innerHTML = `
      <tr>
        <th class="center">#</th>
        <th>Player</th>
        <th class="center gm-active"><span class="gm-head">${MODE_ICONS[gm.key]}${gm.label} Tier</span></th>
      </tr>`;
  }
}

/* ---------------- Table body ---------------- */
function tierPill(t){
  if (!t) return '<span class="tier-pill empty">—</span>';
  const n = tierNum(t);
  return `<span class="tier-pill" style="background:${TIER_COLOR[n]}">${t}</span>`;
}

function rowPlayerHtml(p){
  const url = skinUrl(p);
  const avatar = url
    ? `<img src="${url}" alt="${p.name}" onerror="this.parentElement.textContent='${p.name.charAt(0)}';">`
    : p.name.charAt(0);
  return `
    <span class="row-player">
      <span class="row-avatar">${avatar}</span>
      <span>${p.name}<span class="region-tag">${p.region}</span></span>
    </span>
  `;
}

function renderTable(){
  const search = document.getElementById('search').value.toLowerCase();
  const region = document.getElementById('regionFilter').value;
  const sortBy = document.getElementById('sortBy').value;

  let list = PLAYERS.filter(p =>
    p.name.toLowerCase().includes(search) &&
    (region === 'ALL' || p.region === region)
  );

  const tbody = document.getElementById('tableBody');

  if (activeGamemode){
    list = list.filter(p => p.tiers[activeGamemode]);
    list.sort((a,b) => TIER_ORDER.indexOf(a.tiers[activeGamemode]) - TIER_ORDER.indexOf(b.tiers[activeGamemode]));

    document.getElementById('resultCount').textContent = `${list.length} player${list.length !== 1 ? 's' : ''}`;

    if (list.length === 0){
      tbody.innerHTML = `<tr class="empty-row"><td colspan="3">No players ranked in this gamemode yet.</td></tr>`;
      return;
    }

    tbody.innerHTML = list.map((p, i) => `
      <tr data-id="${p.id}">
        <td class="rank center">${i + 1}</td>
        <td class="player">${rowPlayerHtml(p)}</td>
        <td class="center gm-active">${tierPill(p.tiers[activeGamemode])}</td>
      </tr>
    `).join('');
  } else {
    if (sortBy === 'points-desc') list.sort((a,b) => b.points - a.points);
    if (sortBy === 'points-asc') list.sort((a,b) => a.points - b.points);
    if (sortBy === 'name-asc') list.sort((a,b) => a.name.localeCompare(b.name));

    document.getElementById('resultCount').textContent = `${list.length} player${list.length !== 1 ? 's' : ''}`;

    if (list.length === 0){
      tbody.innerHTML = `<tr class="empty-row"><td colspan="${3 + GAMEMODES.length}">No players match your filters.</td></tr>`;
      return;
    }

    tbody.innerHTML = list.map(p => {
      const overallRank = PLAYERS.findIndex(pl => pl.id === p.id) + 1;
      return `
        <tr data-id="${p.id}">
          <td class="rank center">${overallRank}</td>
          <td class="player">${rowPlayerHtml(p)}</td>
          <td class="pts center">${p.points}</td>
          ${GAMEMODES.map(gm => `<td class="center">${tierPill(p.tiers[gm.key])}</td>`).join('')}
        </tr>
      `;
    }).join('');
  }

  tbody.querySelectorAll('tr[data-id]').forEach(row => {
    row.onclick = () => {
      const p = PLAYERS.find(pl => pl.id === row.dataset.id);
      if (p) openDetailModal(p);
    };
  });
}

/* ---------------- Detail modal ---------------- */
function openDetailModal(p){
  const overallRank = PLAYERS.findIndex(pl => pl.id === p.id) + 1;
  const modalOrb = document.getElementById('modalOrb');
  const url = skinUrl(p);
  if (url){
    modalOrb.innerHTML = `<img src="${url}" alt="${p.name}" onerror="this.parentElement.textContent='${p.name.charAt(0)}';">`;
  } else {
    modalOrb.innerHTML = '';
    modalOrb.textContent = p.name.charAt(0);
  }
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalSub').textContent = p.title;
  document.getElementById('modalPoints').textContent = p.points;
  document.getElementById('modalRankNum').textContent = '#' + overallRank;
  document.getElementById('modalRegion').textContent = p.region;
  document.getElementById('modalBreakdown').innerHTML = GAMEMODES.map(gm => `
    <div class="breakdown-row">
      <span class="gm">${gm.label}</span>
      ${tierPill(p.tiers[gm.key])}
    </div>
  `).join('');
  document.getElementById('overlay').dataset.id = p.id;
  document.getElementById('overlay').classList.add('show');
}

document.getElementById('closeModal').onclick = () => document.getElementById('overlay').classList.remove('show');
document.getElementById('overlay').onclick = (e) => {
  if (e.target.id === 'overlay') document.getElementById('overlay').classList.remove('show');
};

document.getElementById('modalDeleteBtn').onclick = async () => {
  const id = document.getElementById('overlay').dataset.id;
  const p = PLAYERS.find(pl => pl.id === id);
  if (!p) return;
  if (!confirm(`Remove ${p.name} from the rankings? This can't be undone.`)) return;
  const updated = PLAYERS.filter(pl => pl.id !== id).map(({points, title, ...rest}) => rest);
  await persistPlayers(updated);
  PLAYERS = withComputed(updated);
  document.getElementById('overlay').classList.remove('show');
  renderAll();
};

document.getElementById('modalEditBtn').onclick = () => {
  const id = document.getElementById('overlay').dataset.id;
  const p = PLAYERS.find(pl => pl.id === id);
  if (!p) return;
  document.getElementById('overlay').classList.remove('show');
  openFormModal(p);
};

/* ---------------- Add / edit form modal ---------------- */
function buildTierGrid(){
  const grid = document.getElementById('tierGrid');
  grid.innerHTML = GAMEMODES.map(gm => `
    <div class="form-group">
      <label for="tier-${gm.key}">${gm.label}</label>
      <select id="tier-${gm.key}" data-gm="${gm.key}">
        <option value="">Unranked</option>
        ${TIER_ORDER.map(t => `<option value="${t}">${t}</option>`).join('')}
      </select>
    </div>
  `).join('');
}

function openFormModal(player){
  editingId = player ? player.id : null;
  document.getElementById('formTitle').textContent = player ? `Edit ${player.name}` : 'Add a player';
  document.getElementById('formError').classList.remove('show');
  document.getElementById('fName').value = player ? player.name : '';
  document.getElementById('fRegion').value = player ? player.region : 'NA';
  document.getElementById('fSkin').value = player ? (player.skinUsername || '') : '';
  GAMEMODES.forEach(gm => {
    const sel = document.getElementById('tier-' + gm.key);
    sel.value = player ? (player.tiers[gm.key] || '') : '';
  });
  document.getElementById('formOverlay').classList.add('show');
}

function closeFormModal(){
  document.getElementById('formOverlay').classList.remove('show');
  editingId = null;
}

document.getElementById('closeFormModal').onclick = closeFormModal;
document.getElementById('cancelFormBtn').onclick = closeFormModal;
document.getElementById('formOverlay').onclick = (e) => {
  if (e.target.id === 'formOverlay') closeFormModal();
};

document.getElementById('saveFormBtn').onclick = async () => {
  const name = document.getElementById('fName').value.trim();
  const errorEl = document.getElementById('formError');
  if (!name){
    errorEl.textContent = 'Give the player a name.';
    errorEl.classList.add('show');
    return;
  }
  const region = document.getElementById('fRegion').value;
  const skinUsername = document.getElementById('fSkin').value.trim();
  const tiers = {};
  GAMEMODES.forEach(gm => {
    const val = document.getElementById('tier-' + gm.key).value;
    tiers[gm.key] = val || null;
  });

  const base = PLAYERS.map(({points, title, ...rest}) => rest);
  if (editingId){
    const idx = base.findIndex(p => p.id === editingId);
    if (idx !== -1) base[idx] = {...base[idx], name, region, skinUsername, tiers};
  } else {
    base.push({id: makeId(), name, region, skinUsername, tiers});
  }

  document.getElementById('saveFormBtn').textContent = 'Saving...';
  await persistPlayers(base);
  document.getElementById('saveFormBtn').textContent = 'Save player';
  PLAYERS = withComputed(base);
  closeFormModal();
  renderAll();
};

/* ---------------- Wire up filters ---------------- */
document.getElementById('search').addEventListener('input', renderTable);
document.getElementById('regionFilter').addEventListener('change', renderTable);
document.getElementById('sortBy').addEventListener('change', renderTable);

function renderAll(){
  renderPodium();
  renderTableHead();
  renderTable();
}

async function init(){
  buildTierGrid();
  renderGamemodeNav();
  wireHeaderNav();
  updateHeroCopy();
  document.getElementById('tableBody').innerHTML = `<tr><td colspan="${3 + GAMEMODES.length}" class="loading-row">Loading players…</td></tr>`;
  const raw = await loadPlayers();
  PLAYERS = withComputed(raw);
  renderAll();
}

init();