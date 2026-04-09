// ==================== DATOS DE ESTABLECIMIENTOS ====================
const ESTAB_OFF = [
  "ABARROTES/MISCELÁNEAS","AUTOLATA/SERVICAR","AUTOSERVICIO/SUPERMERCADO",
  "CARNICERÍA CON VENTA DE ABARROTES, GOLOSINAS Y/O REFRESCOS",
  "CREMERÍA/SALCHICHONERÍA","DEPÓSITO DE CERVEZAS","DEPÓSITO DE REFRESCOS",
  "DULCERÍA","ESTANQUILLO","FARMACIA/DROGUERÍA","FRUTERÍA / VERDULERÍA",
  "HOGAR/VIVIENDA CON VENTA DE ABARROTES, GOLOSINAS Y/O REFRESCOS",
  "KIOSCO","LICORERÍA/VINATERÍA","MINISUPER/CONVENIENCIA",
  "PALETERÍA/HELADERÍA","PANADERÍA","PAÑALERA/DEPÓSITO DE PAÑALES",
  "PAPELERÍA","PERFUMERÍA","TIENDA DE MAYORISTA","TLAPALERÍA"
];

const ESTAB_ON = [
  "RESTAURANTE/FONDA","RESTAURANTE BAR","RESTAURANTE DE SERVICIO RÁPIDO",
  "CAFETERÍA","BAR/CANTINA/TABERNA","BILLAR/BOLICHE",
  "ANTRO O CENTRO NOCTURNO","PALAPA","PUESTO FIJO"
];

const ESTAB_OTROS = [
  {name:"Accesorios/Telefonía/Celulares",   si:"Excluirlo", no:"Excluirlo"},
  {name:"Artesanías/Regionales/Decoración", si:"Excluirlo", no:"Excluirlo"},
  {name:"Belleza/Cosméticos/Estética",      si:"Excluirlo", no:"Excluirlo"},
  {name:"Cerrajería",                       si:"Excluirlo", no:"Excluirlo"},
  {name:"Ciber/Internet (Con papelería)",   si:"Realizar el Censo", no:"Solo Puntear"},
  {name:"Ciber/Internet (Sin papelería)",   si:"Excluirlo", no:"Excluirlo"},
  {name:"Entretenimiento (Maquinitas/Videojuegos)", si:"Excluirlo", no:"Excluirlo"},
  {name:"Estética/Barbería/Peluquería",     si:"Excluirlo", no:"Excluirlo"},
  {name:"Expendio (varios)",                si:"Realizar el Censo", no:"Solo Puntear"},
  {name:"Florería",                         si:"Excluirlo", no:"Excluirlo"},
  {name:"Jarcería/Limpieza/Plásticos",      si:"Excluirlo", no:"Excluirlo"},
  {name:"Juguetería/Importaciones",         si:"Excluirlo", no:"Excluirlo"},
  {name:"Lavandería/Lava matica",           si:"Excluirlo", no:"Excluirlo"},
  {name:"Lotería/Pronósticos",              si:"Excluirlo", no:"Excluirlo"},
  {name:"Materias Primas",                  si:"Excluirlo", no:"Excluirlo"},
  {name:"Mercería y Regalos",               si:"Realizar el Censo", no:"Solo Puntear"},
  {name:"Micheladas (puesto fijo/alimentos preparados)", si:"Realizar el Censo", no:"Realizar el Censo"},
  {name:"Molino/Nixtamal",                  si:"Excluirlo", no:"Excluirlo"},
  {name:"Naturista/Herbolaria/Botánica",    si:"Excluirlo", no:"Excluirlo"},
  {name:"Pescadería/Mariscos",              si:"Excluirlo", no:"Excluirlo"},
  {name:"Pollería",                         si:"Realizar el Censo", no:"Solo Puntear"},
  {name:"Puesto ambulante",                 si:"Excluirlo", no:"Excluirlo"},
  {name:"Purificadora/Agua/Hielo",          si:"Excluirlo", no:"Excluirlo"},
  {name:"Refaccionaria/Autopartes/Motos",   si:"Realizar el Censo", no:"Solo Puntear"},
  {name:"Regalos/Bisutería/Mercería",       si:"Realizar el Censo", no:"Solo Puntear"},
  {name:"Revistería/Periódicos",            si:"Realizar el Censo", no:"Solo Puntear"},
  {name:"Ropa/Boutique/Uniformes",          si:"Realizar el Censo", no:"Solo Puntear"},
  {name:"Sanitarios/Baños públicos",        si:"Excluirlo", no:"Excluirlo"},
  {name:"Semillas/Cereales/Chiles",         si:"Realizar el Censo", no:"Solo Puntear"},
  {name:"Taller/Vulcanizadora",             si:"Excluirlo", no:"Excluirlo"},
  {name:"Tortillería",                      si:"Realizar el Censo", no:"Solo Puntear"},
  {name:"Veterinaria/Mascotas/Forrajes",    si:"Excluirlo", no:"Excluirlo"},
  {name:"Zapatería/Calzado/Huarachería",    si:"Realizar el Censo", no:"Solo Puntear"},
];

// ==================== ZONAS Y BLOQUES ====================
const PALETTE = [
  {color:"#4f8ef7",light:"#1a2d4f"},{color:"#f75f8e",light:"#4f1a2d"},
  {color:"#43e097",light:"#0f3d28"},{color:"#f7c34f",light:"#3d300f"},
  {color:"#c77dff",light:"#2d1a4f"},{color:"#ff9a3c",light:"#4f2a0f"},
  {color:"#00d4d4",light:"#0f3333"},{color:"#ff6b6b",light:"#4f1a1a"},
];

let ZONES = [
  { id:0, name:"Zona A · Xalapa Norte", shortName:"ZA", color:"#4f8ef7", colorLight:"#1a2d4f", day:"Día 1 — Mañana", tip:"Bloques muy juntos, estaciona una vez y camina",
    blocks:[
      {id:"L3008700012245061",short:"A-01",lat:19.56484783,lng:-96.89104988,loc:"Xalapa-Enríquez",type:"Urbano",order:1},
      {id:"L3008700012245056",short:"A-02",lat:19.56460674,lng:-96.89013842,loc:"Xalapa-Enríquez",type:"Urbano",order:2},
      {id:"L3008700012245054",short:"A-03",lat:19.564192,  lng:-96.89000958,loc:"Xalapa-Enríquez",type:"Urbano",order:3},
      {id:"L3008700012245059",short:"A-04",lat:19.56344895,lng:-96.89261529,loc:"Xalapa-Enríquez",type:"Urbano",order:4},
      {id:"L3008700012245057",short:"A-05",lat:19.56387826,lng:-96.89153112,loc:"Xalapa-Enríquez",type:"Urbano",order:5},
      {id:"L3008700012245055",short:"A-06",lat:19.56360944,lng:-96.89127182,loc:"Xalapa-Enríquez",type:"Urbano",order:6},
      {id:"L3008700012245043",short:"A-07",lat:19.56303898,lng:-96.8907337, loc:"Xalapa-Enríquez",type:"Urbano",order:7},
      {id:"L3008700012245039",short:"A-08",lat:19.56352798,lng:-96.88963493,loc:"Xalapa-Enríquez",type:"Urbano",order:8},
      {id:"L3008700012245052",short:"A-09",lat:19.56307999,lng:-96.89181987,loc:"Xalapa-Enríquez",type:"Urbano",order:9},
      {id:"L3008700012245051",short:"A-10",lat:19.56292175,lng:-96.8921663, loc:"Xalapa-Enríquez",type:"Urbano",order:10},
      {id:"L3008700012245050",short:"A-11",lat:19.56270673,lng:-96.89250458,loc:"Xalapa-Enríquez",type:"Urbano",order:11},
      {id:"L3008700012245034",short:"A-12",lat:19.56251226,lng:-96.89020493,loc:"Xalapa-Enríquez",type:"Urbano",order:12},
      {id:"L3008700012245042",short:"A-13",lat:19.56234414,lng:-96.89184935,loc:"Xalapa-Enríquez",type:"Urbano",order:13},
    ]
  },
  { id:1, name:"Zona B · Xalapa Sur", shortName:"ZB", color:"#f75f8e", colorLight:"#4f1a2d", day:"Día 1 — Tarde", tip:"~800m al sur de Zona A, mismo día",
    blocks:[
      {id:"L3008700012245046",short:"B-01",lat:19.55999671,lng:-96.88801856,loc:"Xalapa-Enríquez",type:"Urbano",order:1},
      {id:"L3008700012245047",short:"B-02",lat:19.55963957,lng:-96.88814722,loc:"Xalapa-Enríquez",type:"Urbano",order:2},
      {id:"L3008700012245040",short:"B-03",lat:19.56032602,lng:-96.88893734,loc:"Xalapa-Enríquez",type:"Urbano",order:3},
      {id:"L3008700012245048",short:"B-04",lat:19.55930277,lng:-96.8884295, loc:"Xalapa-Enríquez",type:"Urbano",order:4},
      {id:"L3008700012245041",short:"B-05",lat:19.55925662,lng:-96.88909391,loc:"Xalapa-Enríquez",type:"Urbano",order:5},
      {id:"L3008700012245037",short:"B-06",lat:19.55926358,lng:-96.8894833, loc:"Xalapa-Enríquez",type:"Urbano",order:6},
      {id:"L3008700012245049",short:"B-07",lat:19.55895387,lng:-96.88864911,loc:"Xalapa-Enríquez",type:"Urbano",order:7},
    ]
  },
  { id:2, name:"Zona C · Xalapa Poniente", shortName:"ZC", color:"#43e097", colorLight:"#0f3d28", day:"Día 2", tip:"~5 km al poniente, requiere mover el carro",
    blocks:[
      {id:"L3008701370000000",short:"C-01",lat:19.54380232,lng:-96.87937696,loc:"La Troja",        type:"Rural", order:1},
      {id:"L3008700012033017",short:"C-02",lat:19.5561355, lng:-96.94958468,loc:"Xalapa-Enríquez", type:"Urbano",order:2},
      {id:"L3008700012033014",short:"C-03",lat:19.55411949,lng:-96.94761582,loc:"Xalapa-Enríquez", type:"Urbano",order:3},
      {id:"L3008700012033019",short:"C-04",lat:19.55326714,lng:-96.94776307,loc:"Xalapa-Enríquez", type:"Urbano",order:4},
    ]
  },
  { id:3, name:"Zona D · Fuera de Xalapa", shortName:"ZD", color:"#f7c34f", colorLight:"#3d300f", day:"Día 3", tip:"Rurales y distantes, planear con tiempo extra",
    blocks:[
      {id:"L3016600120000000",short:"D-01",lat:19.61371909,lng:-96.80810779,loc:"Vicente Guerrero (Tepetlán)", type:"Rural",order:1},
      {id:"L3002500190000000",short:"D-02",lat:19.35376365,lng:-97.03478032,loc:"El Diez (Ayahualulco)",       type:"Rural",order:2},
    ]
  }
];

// ==================== VARIABLES GLOBALES ====================
const STORAGE_KEY = 'rutas_campo_v1';
let doneSet = new Set();
let currentView = 'all';
let parsedRows = [];
let map, markerMap = {};
let gpsWatchId = null, gpsMarker = null, gpsCircle = null, gpsActive = false;
let lastLat = null, lastLng = null;
let mapRotation = 0, rotationLocked = false, compassMarker = null, compassStarted = false;
let decType = null;
let activeCat = 'all';

// ==================== FUNCIONES AUXILIARES ====================
function flashSave() {
  const el = document.getElementById('save-indicator');
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 1800);
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ done: [...doneSet], zones: ZONES }));
    flashSave();
  } catch(e) {}
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const d = JSON.parse(raw);
    if (d.done) doneSet = new Set(d.done);
    if (d.zones && d.zones.length) ZONES = d.zones;
  } catch(e) {}
}

function resetProgress() {
  if (!confirm('¿Borrar el progreso de visitas? Los bloques permanecen.')) return;
  doneSet.clear();
  saveProgress();
  rebuildMarkers();
  renderAll();
}

function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function centroid(zone) {
  const lat = zone.blocks.reduce((s,b) => s + b.lat, 0) / zone.blocks.length;
  const lng = zone.blocks.reduce((s,b) => s + b.lng, 0) / zone.blocks.length;
  return { lat, lng };
}

function bestZone(lat, lng) {
  let best = null, minDist = Infinity;
  ZONES.forEach(zone => {
    if (!zone.blocks.length) return;
    const c = centroid(zone);
    const d = haversine(lat, lng, c.lat, c.lng);
    if (d < minDist) { minDist = d; best = zone; }
  });
  return minDist <= 3 ? best : null;
}

function nextShort(zone) {
  const prefix = zone.shortName.replace('Z', '');
  const nums = zone.blocks.map(b => parseInt(b.short.split('-')[1]) || 0);
  const next = nums.length ? Math.max(...nums) + 1 : 1;
  return `${prefix}-${String(next).padStart(2,'0')}`;
}

function nextLetter() {
  const used = ZONES.map(z => z.shortName.replace('Z',''));
  for (let l of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") if (!used.includes(l)) return l;
  return 'X';
}

function nextDay() {
  return Math.max(...ZONES.map(z => parseInt(z.day.match(/\d+/)?.[0] || '0'))) + 1;
}

function parsePaste(text) {
  const lines = text.trim().split('\n').filter(l => l.trim());
  const existingIds = new Set(ZONES.flatMap(z => z.blocks.map(b => b.id)));
  const results = [];
  for (const line of lines) {
    const parts = line.split(/\t|,/).map(p => p.trim());
    if (parts.length < 3) { results.push({ok:false, raw:line, msg:'Faltan columnas'}); continue; }
    const idCol = parts.findIndex(p => /^L3\d+/.test(p));
    const latCol = parts.findIndex(p => { let n = parseFloat(p); return n > 18 && n < 22; });
    const lngCol = parts.findIndex(p => { let n = parseFloat(p); return n < -90 && n > -100; });
    if (idCol < 0) { results.push({ok:false, raw:line, msg:'Sin ID L3...'}); continue; }
    if (latCol < 0 || lngCol < 0) { results.push({ok:false, raw:line, msg:'Lat/Lng no encontrados'}); continue; }
    const id = parts[idCol], lat = parseFloat(parts[latCol]), lng = parseFloat(parts[lngCol]);
    if (existingIds.has(id)) { results.push({ok:false, raw:line, msg:`ID ${id.slice(-6)} ya existe`}); continue; }
    const used = new Set([idCol, latCol, lngCol]);
    let loc = 'Sin nombre', type = 'Urbano';
    for (let i = 0; i < parts.length; i++) {
      if (used.has(i)) continue;
      const p = parts[i];
      if (!p || /^\d+\.?\d*$/.test(p)) continue;
      if (/^(rural|urbano)$/i.test(p)) { type = p.charAt(0).toUpperCase() + p.slice(1).toLowerCase(); continue; }
      if (/^(estado|municipio|localidad|tipo|bloque|latitud|longitud|veracruz)$/i.test(p)) continue;
      if (loc === 'Sin nombre') loc = p;
    }
    const zone = bestZone(lat, lng);
    existingIds.add(id);
    results.push({ok:true, id, lat, lng, loc, type, suggestedZone: zone, isNew: !zone});
  }
  return results;
}

function showResult(msg, type) {
  const el = document.getElementById('add-result');
  if (el) { el.textContent = msg; el.className = `add-result ${type}`; setTimeout(() => el.className = 'add-result', 4000); }
}

// ==================== MAPA Y MARCADORES ====================
function makeIcon(color, label, isDone) {
  const bg = isDone ? '#3a4a3a' : color;
  const tc = isDone ? '#6a7a6a' : '#0f1117';
  const txt = isDone ? '✓' : label;
  return L.divIcon({
    className: '',
    html: `<div style="background:${bg};color:${tc};width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:700;font-size:${isDone?'13px':'9px'};border:2px solid ${isDone?'#4a5a4a':'rgba(255,255,255,0.3)'};box-shadow:0 2px 8px rgba(0,0,0,0.3);cursor:pointer;${isDone?'opacity:.55':''};">${txt}</div>`,
    iconSize: [28,28],
    iconAnchor: [14,14]
  });
}

function makePopup(zone, block) {
  const isDone = doneSet.has(block.id);
  return `<div style="font-family:'DM Sans',sans-serif;min-width:175px"><div style="font-family:'Syne',sans-serif;font-weight:700;font-size:13px;color:${isDone?'#6a7a6a':zone.color}">${block.short} ${isDone?'<span style="color:#43e097">✓</span>':''}</div><div style="font-size:11px;color:#666;margin:2px 0">${block.loc}</div><div style="font-size:11px"><b>Tipo:</b> ${block.type}</div><div style="font-size:10px;color:#999;margin-top:3px;word-break:break-all">${block.id}</div><div style="margin-top:7px">${isDone?`<button onclick="window.toggleDone('${block.id}')" style="width:100%;padding:4px;border-radius:6px;border:1px solid #4a5a4a;background:#1a2a1a;color:#43e097;cursor:pointer;font-size:11px;font-weight:700">↩ Desmarcar</button>`:`<button onclick="window.toggleDone('${block.id}')" style="width:100%;padding:4px;border-radius:6px;border:none;background:#43e097;color:#0f1117;cursor:pointer;font-size:11px;font-weight:700">✓ Marcar visitado</button>`}</div></div>`;
}

function addMarker(zone, block) {
  const isDone = doneSet.has(block.id);
  const m = L.marker([block.lat, block.lng], { icon: makeIcon(zone.color, block.short, isDone) }).addTo(map).bindPopup(makePopup(zone, block));
  markerMap[block.id] = m;
}

function updateMarker(zone, block) {
  if (markerMap[block.id]) { map.removeLayer(markerMap[block.id]); delete markerMap[block.id]; }
  addMarker(zone, block);
}

function removeMarker(id) {
  if (markerMap[id]) { map.removeLayer(markerMap[id]); delete markerMap[id]; }
}

function rebuildMarkers() {
  Object.keys(markerMap).forEach(id => { map.removeLayer(markerMap[id]); delete markerMap[id]; });
  ZONES.forEach(z => z.blocks.forEach(b => addMarker(z, b)));
}

function focusZone(zoneId) {
  const z = ZONES.find(z => z.id === zoneId);
  if (!z || !z.blocks.length) return;
  map.fitBounds(L.latLngBounds(z.blocks.map(b => [b.lat, b.lng])).pad(0.15));
}

function toggleDone(blockId) {
  if (doneSet.has(blockId)) doneSet.delete(blockId);
  else doneSet.add(blockId);
  const zone = ZONES.find(z => z.blocks.some(b => b.id === blockId));
  const block = zone?.blocks.find(b => b.id === blockId);
  if (zone && block) updateMarker(zone, block);
  saveProgress();
  renderAll();
}
window.toggleDone = toggleDone;

function markZoneDone(zoneId) {
  const zone = ZONES.find(z => z.id === zoneId);
  if (!zone) return;
  const allDone = zone.blocks.every(b => doneSet.has(b.id));
  zone.blocks.forEach(b => {
    if (allDone) doneSet.delete(b.id);
    else doneSet.add(b.id);
    updateMarker(zone, b);
  });
  saveProgress();
  renderAll();
}

function setView(v) {
  currentView = v;
  document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`.view-btn[data-view="${v}"]`);
  if (activeBtn) activeBtn.classList.add('active');
  renderSidebar();
  ZONES.forEach(zone => zone.blocks.forEach(b => {
    const m = markerMap[b.id];
    if (!m) return;
    const isDone = doneSet.has(b.id);
    if (v === 'all') m.setOpacity(1);
    else if (v === 'pending') m.setOpacity(isDone ? 0 : 1);
    else m.setOpacity(isDone ? 1 : 0);
  }));
}

// ==================== RENDERIZADO DE INTERFAZ ====================
function updateStats() {
  const total = ZONES.reduce((a,z) => a + z.blocks.length, 0);
  const done = doneSet.size;
  const pend = total - done;
  const pct = total ? Math.round(done / total * 100) : 0;
  document.getElementById('st-bloques').textContent = total;
  document.getElementById('st-done').textContent = done;
  document.getElementById('st-pend').textContent = pend;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-pct').textContent = pct + '%';
}

function renderLegend() {
  const leg = document.getElementById('legend');
  leg.innerHTML = `<div class="legend-title">Zonas — clic para centrar</div>`;
  ZONES.forEach(z => {
    const total = z.blocks.length;
    const done = z.blocks.filter(b => doneSet.has(b.id)).length;
    const pct = total ? Math.round(done/total*100) : 0;
    const item = document.createElement('div');
    item.innerHTML = `<div class="legend-item" onclick="focusZone(${z.id})"><div class="legend-dot" style="background:${z.color}"></div><span>${z.name}</span><span class="day-badge" style="background:${z.colorLight};color:${z.color}">${z.day.split('—')[0].trim()}</span></div><div class="legend-progress"><div class="legend-progress-fill" style="width:${pct}%;background:${z.color}"></div></div><div class="legend-progress-label">${done}/${total} visitados</div>`;
    leg.appendChild(item);
  });
}

function buildSidebarDOM(container) {
  container.innerHTML = '';
  // Panel de agregar bloques
  const addPanel = document.createElement('div'); addPanel.className = 'add-panel';
  addPanel.innerHTML = `
    <div class="add-panel-header" id="add-toggle">
      <span>➕</span><span class="add-panel-title">Agregar nuevos bloques</span>
      <span class="add-arrow">▼</span>
    </div>
    <div class="add-panel-body" id="add-body">
      <div><div class="input-label">Pega desde Excel o escribe</div>
      <textarea class="paste-area" id="paste-area" placeholder="Bloque\tLatitud\tLongitud\tLocalidad\tTipo"></textarea></div>
      <div class="format-hint"><b>Acepta:</b> pegar directo desde Excel, tabulador o coma</div>
      <div class="parse-preview" id="parse-preview"></div>
      <div class="btn-row">
        <button class="btn btn-secondary" id="btn-parse">🔍 Previsualizar</button>
        <button class="btn btn-primary" id="btn-add">✅ Agregar</button>
      </div>
      <div class="add-result" id="add-result"></div>
      <div class="btn-row" style="margin-top:4px">
        <button class="btn btn-danger" id="reset-progress-btn">🔄 Reiniciar progreso</button>
      </div>
    </div>`;
  container.appendChild(addPanel);
  const toggleHeader = addPanel.querySelector('#add-toggle');
  const addBody = addPanel.querySelector('#add-body');
  const arrow = addPanel.querySelector('.add-arrow');
  toggleHeader.onclick = () => {
    const isOpen = addBody.classList.toggle('open');
    arrow.classList.toggle('open', isOpen);
    toggleHeader.classList.toggle('open', isOpen);
  };
  document.getElementById('btn-parse').onclick = previewPaste;
  document.getElementById('btn-add').onclick = addParsedBlocks;
  document.getElementById('reset-progress-btn').onclick = resetProgress;

  // Tarjetas de zonas
  ZONES.forEach(zone => {
    const total = zone.blocks.length;
    const done = zone.blocks.filter(b => doneSet.has(b.id)).length;
    const allDone = done === total && total > 0;
    let visibleBlocks = zone.blocks.filter(b => {
      const isDone = doneSet.has(b.id);
      if (currentView === 'pending') return !isDone;
      if (currentView === 'done') return isDone;
      return true;
    });
    if (currentView !== 'all' && visibleBlocks.length === 0) return;
    const card = document.createElement('div'); card.className = `zone-card${allDone ? ' all-done' : ''}`; card.style.borderColor = zone.color + '44';
    const header = document.createElement('div'); header.className = 'zone-header';
    header.innerHTML = `<div class="zone-dot" style="background:${allDone ? '#43e097' : zone.color}"></div><span class="zone-title" style="color:${allDone ? '#43e097' : zone.color}">${zone.name}</span>${allDone ? `<span class="zone-done-badge">✓ Completa</span>` : `<span class="zone-badge" style="background:${zone.colorLight};color:${zone.color}">${done}/${total}</span>`}`;
    header.onclick = () => { focusZone(zone.id); closePanel(); };
    const markAllBtn = document.createElement('button');
    markAllBtn.style.cssText = `font-size:0.6rem;padding:4px 10px;border-radius:5px;cursor:pointer;border:1px solid;margin-left:4px;font-family:Syne,sans-serif;font-weight:700;border-color:${allDone ? '#43e09755' : zone.color+'55'};background:${allDone ? '#0f3d28' : zone.colorLight};color:${allDone ? '#43e097' : zone.color};`;
    markAllBtn.textContent = allDone ? '↩ Desmarcar' : '✓ Zona';
    markAllBtn.onclick = e => { e.stopPropagation(); markZoneDone(zone.id); };
    header.appendChild(markAllBtn);
    const body = document.createElement('div'); body.className = 'zone-body';
    const hint = document.createElement('div'); hint.className = 'order-hint'; hint.textContent = '↳ ' + zone.tip; body.appendChild(hint);
    visibleBlocks.forEach(b => {
      const isDone = doneSet.has(b.id);
      const row = document.createElement('div'); row.className = `block-row${isDone ? ' done' : ''}`; row.style.color = isDone ? '#6a7a6a' : zone.color;
      row.innerHTML = `<div class="step-num" style="background:${isDone ? '#1a2a1a' : zone.colorLight};color:${isDone ? '#43e097' : zone.color}">${isDone ? '✓' : b.order}</div><div class="block-info"><div class="block-loc">${b.loc}</div><div class="block-type">${b.type} · ${b.id.slice(-6)}</div></div><div class="block-short">${b.short}</div><div class="block-actions"><button class="action-btn ${isDone ? 'btn-undone' : 'btn-done'}" data-id="${b.id}">${isDone ? '↩' : '✓'}</button><button class="action-btn btn-del" data-del="${b.id}" data-zone="${zone.id}">✕</button></div>`;
      row.querySelector(`[data-id="${b.id}"]`).onclick = e => { e.stopPropagation(); toggleDone(b.id); };
      row.querySelector(`[data-del="${b.id}"]`).onclick = e => { e.stopPropagation(); deleteBlock(b.id, zone.id); };
      row.onclick = () => { map.setView([b.lat, b.lng], 17); markerMap[b.id]?.openPopup(); document.querySelectorAll('.block-row').forEach(r => r.classList.remove('active')); row.classList.add('active'); closePanel(); };
      body.appendChild(row);
    });
    card.appendChild(header); card.appendChild(body); container.appendChild(card);
  });
  // Plan sugerido
  const planByDay = {};
  ZONES.forEach(z => { const k = z.day.match(/Día\s*\d+/)?.[0] || z.day; if (!planByDay[k]) planByDay[k] = []; planByDay[k].push(z); });
  const plan = document.createElement('div'); plan.className = 'route-plan';
  let html = `<div class="route-plan-title">📅 Plan sugerido</div>`;
  Object.entries(planByDay).forEach(([day, zones], i) => {
    const pal = PALETTE[i % PALETTE.length];
    const info = zones.map(z => `${z.shortName} (${z.blocks.filter(b => doneSet.has(b.id)).length}/${z.blocks.length})`).join(' + ');
    html += `<div class="route-step"><div class="route-step-num" style="background:${pal.light};color:${pal.color}">${i+1}</div><div><b style="color:${pal.color}">${day}</b> — ${info}</div></div>`;
  });
  plan.innerHTML = html; container.appendChild(plan);
}

function renderSidebar() { buildSidebarDOM(document.getElementById('sidebar')); }
function renderPanelContent() {
  const panel = document.getElementById('panel-content');
  panel.innerHTML = '';
  ZONES.forEach(zone => {
    const total = zone.blocks.length;
    const done = zone.blocks.filter(b => doneSet.has(b.id)).length;
    const allDone = done === total && total > 0;
    let visibleBlocks = zone.blocks.filter(b => {
      const isDone = doneSet.has(b.id);
      if (currentView === 'pending') return !isDone;
      if (currentView === 'done') return isDone;
      return true;
    });
    if (currentView !== 'all' && visibleBlocks.length === 0) return;
    const card = document.createElement('div'); card.className = `zone-card${allDone ? ' all-done' : ''}`; card.style.borderColor = zone.color + '44';
    const header = document.createElement('div'); header.className = 'zone-header';
    header.innerHTML = `<div class="zone-dot" style="background:${allDone ? '#43e097' : zone.color}"></div><span class="zone-title" style="color:${allDone ? '#43e097' : zone.color}">${zone.name}</span>${allDone ? `<span class="zone-done-badge">✓ Completa</span>` : `<span class="zone-badge" style="background:${zone.colorLight};color:${zone.color}">${done}/${total}</span>`}`;
    header.onclick = () => { focusZone(zone.id); closePanel(); };
    const markAllBtn = document.createElement('button');
    markAllBtn.style.cssText = `font-size:0.6rem;padding:4px 10px;border-radius:5px;cursor:pointer;border:1px solid;margin-left:4px;font-family:Syne,sans-serif;font-weight:700;border-color:${allDone ? '#43e09755' : zone.color+'55'};background:${allDone ? '#0f3d28' : zone.colorLight};color:${allDone ? '#43e097' : zone.color};`;
    markAllBtn.textContent = allDone ? '↩ Desmarcar' : '✓ Zona';
    markAllBtn.onclick = e => { e.stopPropagation(); markZoneDone(zone.id); };
    header.appendChild(markAllBtn);
    const body = document.createElement('div'); body.className = 'zone-body';
    const hint = document.createElement('div'); hint.className = 'order-hint'; hint.textContent = '↳ ' + zone.tip; body.appendChild(hint);
    visibleBlocks.forEach(b => {
      const isDone = doneSet.has(b.id);
      const row = document.createElement('div'); row.className = `block-row${isDone ? ' done' : ''}`; row.style.color = isDone ? '#6a7a6a' : zone.color;
      row.innerHTML = `<div class="step-num" style="background:${isDone ? '#1a2a1a' : zone.colorLight};color:${isDone ? '#43e097' : zone.color}">${isDone ? '✓' : b.order}</div><div class="block-info"><div class="block-loc">${b.loc}</div><div class="block-type">${b.type} · ${b.id.slice(-6)}</div></div><div class="block-short">${b.short}</div><div class="block-actions"><button class="action-btn ${isDone ? 'btn-undone' : 'btn-done'}" data-id="${b.id}">${isDone ? '↩' : '✓'}</button><button class="action-btn btn-del" data-del="${b.id}" data-zone="${zone.id}">✕</button></div>`;
      row.querySelector(`[data-id="${b.id}"]`).onclick = e => { e.stopPropagation(); toggleDone(b.id); };
      row.querySelector(`[data-del="${b.id}"]`).onclick = e => { e.stopPropagation(); deleteBlock(b.id, zone.id); };
      row.onclick = () => { map.setView([b.lat, b.lng], 17); markerMap[b.id]?.openPopup(); closePanel(); };
      body.appendChild(row);
    });
    card.appendChild(header); card.appendChild(body); panel.appendChild(card);
  });
}

function deleteBlock(blockId, zoneId) {
  const zone = ZONES.find(z => z.id === zoneId);
  if (!zone) return;
  zone.blocks = zone.blocks.filter(b => b.id !== blockId);
  zone.blocks.forEach((b, i) => b.order = i + 1);
  doneSet.delete(blockId);
  removeMarker(blockId);
  if (zone.blocks.length === 0) ZONES = ZONES.filter(z => z.id !== zoneId);
  saveProgress();
  renderAll();
}

function renderAll() {
  updateStats();
  renderLegend();
  renderSidebar();
  if (document.getElementById('side-panel').classList.contains('open')) renderPanelContent();
  const total = ZONES.reduce((a,z) => a + z.blocks.length, 0);
  const done = doneSet.size;
  const panelBtn = document.getElementById('open-panel-btn');
  if (panelBtn) panelBtn.innerHTML = `📋 ${done}/${total} bloques`;
}

// ==================== AGREGAR BLOQUES ====================
function previewPaste() {
  const text = document.getElementById('paste-area').value;
  parsedRows = parsePaste(text);
  const previewDiv = document.getElementById('parse-preview');
  previewDiv.innerHTML = ''; previewDiv.classList.add('show');
  if (!parsedRows.length) { previewDiv.innerHTML = `<div class="preview-row err"><span>⚠️</span><span style="flex:1">Sin datos válidos</span></div>`; return; }
  parsedRows.forEach(r => {
    const row = document.createElement('div'); row.className = `preview-row ${r.ok ? 'ok' : 'err'}`;
    if (r.ok) {
      const zoneName = r.suggestedZone ? r.suggestedZone.name.split('·')[0].trim() : '🆕 Nueva zona';
      const zoneColor = r.suggestedZone?.color || '#c77dff';
      row.innerHTML = `<span>✅</span><span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r.id.slice(-8)} · ${r.loc}</span><span class="preview-zone" style="color:${zoneColor}">${zoneName}</span>`;
    } else {
      row.innerHTML = `<span>❌</span><span style="flex:1;color:var(--muted)">${r.msg}</span>`;
    }
    previewDiv.appendChild(row);
  });
}

function addParsedBlocks() {
  if (!parsedRows.length) { previewPaste(); return; }
  const good = parsedRows.filter(r => r.ok);
  if (!good.length) { showResult('No hay bloques válidos', 'error'); return; }
  good.forEach(r => {
    let zone = r.suggestedZone;
    if (!zone) {
      const letter = nextLetter();
      const dayNum = nextDay();
      const pal = PALETTE[ZONES.length % PALETTE.length];
      zone = {
        id: ZONES.length,
        name: `Zona ${letter} · ${r.loc}`,
        shortName: `Z${letter}`,
        color: pal.color,
        colorLight: pal.light,
        day: `Día ${dayNum}`,
        tip: 'Zona nueva',
        blocks: []
      };
      ZONES.push(zone);
    }
    const block = {
      id: r.id,
      short: nextShort(zone),
      lat: r.lat,
      lng: r.lng,
      loc: r.loc,
      type: r.type,
      order: zone.blocks.length + 1
    };
    zone.blocks.push(block);
    addMarker(zone, block);
  });
  parsedRows = [];
  document.getElementById('paste-area').value = '';
  document.getElementById('parse-preview').classList.remove('show');
  showResult(`✅ ${good.length} bloque(s) agregado(s)`, 'success');
  saveProgress();
  renderAll();
}

// ==================== GPS Y BRÚJULA ====================
function setGPSBtn(state, icon, text) {
  const mobBtn = document.getElementById('gps-btn-mob');
  if (mobBtn) {
    mobBtn.className = `toolbar-btn gps-main ${state}`;
    mobBtn.innerHTML = `<span>${icon}</span>`;
  }
  const deskBtn = document.getElementById('gps-btn-desk');
  if (deskBtn) {
    deskBtn.className = `gps-btn ${state}`;
    deskBtn.innerHTML = `<span>${icon}</span><span>${text}</span>`;
  }
  const infoBar = document.getElementById('toolbar-gps-info');
  if (infoBar) infoBar.classList.toggle('show', state !== 'idle');
}

function showGPSError(msg) {
  document.getElementById('gps-panel').classList.add('show');
  const errDiv = document.getElementById('gps-error');
  errDiv.textContent = msg;
  errDiv.style.display = 'block';
}

function findNearestBlock(lat, lng) {
  let nearest = null, minDist = Infinity;
  ZONES.forEach(zone => {
    zone.blocks.forEach(b => {
      const d = haversine(lat, lng, b.lat, b.lng);
      if (d < minDist) { minDist = d; nearest = { block: b, zone, dist: d }; }
    });
  });
  if (!nearest) return;
  const panel = document.getElementById('gps-nearest');
  if (panel) {
    panel.style.display = 'block';
    const distM = Math.round(nearest.dist * 1000);
    const distText = distM < 1000 ? `${distM}m` : `${nearest.dist.toFixed(1)}km`;
    document.getElementById('gps-near-name').innerHTML = `<span style="color:${nearest.zone.color}">${nearest.block.short}</span> — ${nearest.block.loc}`;
    document.getElementById('gps-near-dist').textContent = `A ${distText} · ${nearest.block.type}`;
    panel.style.borderColor = nearest.zone.color + '55';
  }
  const tn = document.getElementById('toolbar-nearest');
  if (tn) {
    const distM = Math.round(nearest.dist * 1000);
    const distText = distM < 1000 ? `${distM}m` : `${nearest.dist.toFixed(1)}km`;
    tn.innerHTML = `🎯 <span style="color:${nearest.zone.color};font-weight:700">${nearest.block.short}</span> a ${distText}`;
    tn.style.display = 'inline';
  }
}

function onGPSSuccess(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  const acc = Math.round(pos.coords.accuracy);
  const isFirstFix = lastLat === null;
  lastLat = lat; lastLng = lng;
  setGPSBtn('tracking', '🔵', 'GPS activo');
  document.getElementById('gps-lat').textContent = lat.toFixed(6);
  document.getElementById('gps-lng').textContent = lng.toFixed(6);
  document.getElementById('gps-acc').innerHTML = `Precisión: <b>±${acc} metros</b>${acc > 50 ? ' · señal débil' : acc < 15 ? ' · señal excelente ✓' : ''}`;
  if (gpsMarker) map.removeLayer(gpsMarker);
  if (gpsCircle) map.removeLayer(gpsCircle);
  if (compassMarker) { map.removeLayer(compassMarker); compassMarker = null; }
  gpsMarker = L.marker([lat, lng], {
    icon: L.divIcon({
      className: '',
      html: `<div style="width:18px;height:18px;border-radius:50%;background:#4f8ef7;border:3px solid white;box-shadow:0 0 0 4px rgba(79,142,247,0.3),0 2px 10px rgba(0,0,0,0.4);"></div>`,
      iconSize: [18,18], iconAnchor: [9,9]
    }), zIndexOffset: 1000
  }).addTo(map).bindPopup(`<div style="font-family:'DM Sans',sans-serif;min-width:150px"><b style="font-family:'Syne',sans-serif;color:#4f8ef7">📍 Estás aquí</b><br><span style="font-size:11px;color:#666">${lat.toFixed(6)}, ${lng.toFixed(6)}</span><br><span style="font-size:10px;color:#999">Precisión: ±${acc}m</span></div>`);
  if (acc < 300) {
    gpsCircle = L.circle([lat, lng], { radius: acc, color: '#4f8ef7', fillColor: '#4f8ef7', fillOpacity: 0.07, weight: 1, opacity: 0.3 }).addTo(map);
  }
  if (isFirstFix && acc < 500) map.setView([lat, lng], 17);
  startCompass();
  findNearestBlock(lat, lng);
}

function onGPSError(err) {
  let msg = 'Error al obtener ubicación.';
  if (err.code === 1) msg = '⛔ Permiso de ubicación denegado.';
  else if (err.code === 2) msg = '📡 No se pudo obtener señal GPS.';
  else if (err.code === 3) msg = '⏱️ Tiempo de espera agotado.';
  showGPSError(msg);
  setGPSBtn('idle', '📍', 'Activar GPS');
  gpsActive = false;
}

function startGPS() {
  if (!navigator.geolocation) { showGPSError('Geolocalización no soportada.'); return; }
  gpsActive = true;
  setGPSBtn('searching', '⏳', 'Buscando GPS...');
  document.getElementById('gps-panel').classList.add('show');
  document.getElementById('gps-error').style.display = 'none';
  gpsWatchId = navigator.geolocation.watchPosition(onGPSSuccess, onGPSError, { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 });
}

function stopGPS() {
  if (gpsWatchId) { navigator.geolocation.clearWatch(gpsWatchId); gpsWatchId = null; }
  if (gpsMarker) { map.removeLayer(gpsMarker); gpsMarker = null; }
  if (gpsCircle) { map.removeLayer(gpsCircle); gpsCircle = null; }
  gpsActive = false;
  setGPSBtn('idle', '📍', 'Activar GPS');
  document.getElementById('gps-panel').classList.remove('show');
}

function toggleGPS() {
  if (gpsActive) stopGPS();
  else startGPS();
}

function rotateMap(deg) {
  mapRotation = deg % 360;
  const pane = map.getContainer();
  pane.style.transform = `rotate(${mapRotation}deg)`;
  pane.style.transformOrigin = 'center center';
  document.querySelectorAll('.leaflet-control-container').forEach(c => {
    c.style.transform = `rotate(${-mapRotation}deg)`;
    c.style.transformOrigin = 'center center';
  });
  document.getElementById('rotation-display').textContent = Math.round(mapRotation) + '°';
  const rotMob = document.getElementById('rotate-lock-mob');
  if (rotMob) rotMob.innerHTML = `🔒 ${Math.round(mapRotation)}°`;
}

function resetRotation() {
  rotationLocked = false;
  rotateMap(0);
  document.getElementById('rotate-lock-desk').style.background = '';
  document.getElementById('rotate-lock-mob').style.background = '';
}

function toggleRotationLock() {
  rotationLocked = !rotationLocked;
  const deskBtn = document.getElementById('rotate-lock-desk');
  const mobBtn = document.getElementById('rotate-lock-mob');
  const style = rotationLocked ? 'var(--blue-l)' : '';
  if (deskBtn) deskBtn.style.background = style;
  if (mobBtn) mobBtn.style.background = style;
}

function centerOnMe() {
  if (lastLat !== null) map.setView([lastLat, lastLng], map.getZoom() < 16 ? 17 : map.getZoom());
  else startGPS();
}

function startCompass() {
  if (compassStarted) return;
  compassStarted = true;
  if (!window.DeviceOrientationEvent) return;
  const handler = (e) => {
    if (rotationLocked) return;
    let heading = null;
    if (typeof e.webkitCompassHeading === 'number') heading = e.webkitCompassHeading;
    else if (e.absolute && e.alpha !== null) heading = (360 - e.alpha) % 360;
    if (heading === null) return;
    rotateMap(heading);
    if (lastLat !== null) {
      if (compassMarker) map.removeLayer(compassMarker);
      compassMarker = L.marker([lastLat, lastLng], {
        icon: L.divIcon({
          className: '',
          html: `<div style="width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:18px solid #4f8ef7;filter:drop-shadow(0 1px 3px rgba(0,0,0,0.5));transform:translateY(-4px);"></div>`,
          iconSize: [12,18], iconAnchor: [6,18]
        }), zIndexOffset: 1001, interactive: false
      }).addTo(map);
    }
  };
  window.addEventListener('deviceorientationabsolute', handler, true);
  window.addEventListener('deviceorientation', handler, true);
}

// ==================== PANEL LATERAL ====================
function openPanel() {
  document.getElementById('side-panel').classList.add('open');
  document.getElementById('panel-backdrop').classList.add('open');
  renderPanelContent();
}
function closePanel() {
  document.getElementById('side-panel').classList.remove('open');
  document.getElementById('panel-backdrop').classList.remove('open');
}

// ==================== NAVEGACIÓN ====================
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.mobile-nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  const activeTab = document.querySelector(`.nav-tab[data-page="${page}"]`);
  if (activeTab) activeTab.classList.add('active');
  const activeMobile = document.querySelector(`.mobile-nav-btn[data-page="${page}"]`);
  if (activeMobile) activeMobile.classList.add('active');
  if (page !== 'rutas' && gpsActive) stopGPS();
  if (page === 'rutas') setTimeout(() => map.invalidateSize(), 50);
  closePanel();
}

// ==================== ESTABLECIMIENTOS ====================
function buildEstabGrids() {
  const gridOff = document.getElementById('grid-off');
  ESTAB_OFF.forEach(name => {
    const card = document.createElement('div'); card.className = 'estab-card'; card.dataset.cat = 'off'; card.dataset.name = name.toLowerCase();
    card.innerHTML = `<div class="estab-name">${name}</div><div class="estab-row"><span class="estab-row-label">Vende NIQ:</span><span class="estab-pill pill-censo">✅ Censo</span></div><div class="estab-row"><span class="estab-row-label">No vende NIQ:</span><span class="estab-pill pill-puntear">📍 Solo Puntear</span></div>`;
    card.onclick = () => showEstabDetail(name);
    gridOff.appendChild(card);
  });
  const gridOn = document.getElementById('grid-on');
  ESTAB_ON.forEach(name => {
    const card = document.createElement('div'); card.className = 'estab-card'; card.dataset.cat = 'on'; card.dataset.name = name.toLowerCase();
    card.innerHTML = `<div class="estab-name">${name}</div><div class="estab-row"><span class="estab-row-label">Vende NIQ:</span><span class="estab-pill pill-censo">✅ Censo</span></div><div class="estab-row"><span class="estab-row-label">No vende NIQ:</span><span class="estab-pill pill-censo">✅ Censo</span></div><div style="font-size:0.6rem;color:var(--green);margin-top:4px">⚡ Siempre censo</div>`;
    card.onclick = () => showEstabDetail(name);
    gridOn.appendChild(card);
  });
  const gridOtros = document.getElementById('grid-otros');
  ESTAB_OTROS.forEach(e => {
    const card = document.createElement('div'); card.className = 'estab-card'; card.dataset.cat = 'otros'; card.dataset.name = e.name.toLowerCase(); card.dataset.si = e.si; card.dataset.no = e.no;
    const siClass = e.si.includes('Censo') ? 'pill-censo' : (e.si.includes('Puntear') ? 'pill-puntear' : 'pill-excluir');
    const noClass = e.no.includes('Censo') ? 'pill-censo' : (e.no.includes('Puntear') ? 'pill-puntear' : 'pill-excluir');
    const extra = (e.si === e.no && e.si.includes('Censo')) ? `<div style="font-size:0.6rem;color:var(--green);margin-top:4px">⚡ Siempre censo</div>` : (e.si === e.no && e.si.includes('Excluir')) ? `<div style="font-size:0.6rem;color:var(--pink);margin-top:4px">⛔ Siempre excluir</div>` : '';
    card.innerHTML = `<div class="estab-name">${e.name}</div><div class="estab-row"><span class="estab-row-label">Vende NIQ:</span><span class="estab-pill ${siClass}">${e.si}</span></div><div class="estab-row"><span class="estab-row-label">No vende NIQ:</span><span class="estab-pill ${noClass}">${e.no}</span></div>${extra}`;
    card.onclick = () => showEstabDetail(e.name);
    gridOtros.appendChild(card);
  });
}

function showEstabDetail(name) {
  const card = Array.from(document.querySelectorAll('.estab-card')).find(c => c.dataset.name === name.toLowerCase());
  if (card) { card.style.borderColor = 'var(--blue)'; card.style.boxShadow = '0 0 0 2px #4f8ef733'; setTimeout(() => { card.style.borderColor = ''; card.style.boxShadow = ''; }, 1500); card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
}

function filterEstab() {
  const q = document.getElementById('search-input').value.toLowerCase().trim();
  document.getElementById('search-clear').classList.toggle('show', q.length > 0);
  let total = 0;
  document.querySelectorAll('.estab-card').forEach(card => {
    const nameMatch = card.dataset.name.includes(q);
    const catMatch = activeCat === 'all' || card.dataset.cat === activeCat || (activeCat === 'censo' && card.dataset.si && card.dataset.si.includes('Censo') && card.dataset.no.includes('Censo')) || (activeCat === 'excluir' && card.dataset.si && card.dataset.si.includes('Excluir') && card.dataset.no.includes('Excluir'));
    const show = nameMatch && catMatch;
    card.classList.toggle('hidden', !show);
    if (show) total++;
  });
  document.getElementById('no-results').classList.toggle('show', total === 0);
}

function filterCat(cat, btn) {
  activeCat = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterEstab();
}

function clearSearch() {
  document.getElementById('search-input').value = '';
  filterEstab();
}

function selectDecType(type) {
  decType = type;
  document.querySelectorAll('#dec-type-opts .decision-opt').forEach(o => o.classList.remove('selected'));
  event.target.classList.add('selected');
  if (type === 'on') {
    document.getElementById('dec-result').className = 'decision-result censo';
    document.getElementById('dec-result').innerHTML = '✅ REALIZAR EL CENSO<br><span style="font-size:0.7rem">Siempre censo, sin importar NIQ.</span>';
    document.getElementById('dec-reset').style.display = 'block';
    document.getElementById('dec-q2').style.display = 'none';
  } else {
    document.getElementById('dec-q2').style.display = 'block';
    document.getElementById('dec-result').className = 'decision-result';
    document.getElementById('dec-result').innerHTML = '';
    document.getElementById('dec-reset').style.display = 'none';
  }
}

function selectDecNIQ(vende) {
  document.querySelectorAll('#dec-q2 .decision-opt').forEach(o => o.classList.remove('selected'));
  event.target.classList.add('selected');
  const res = document.getElementById('dec-result');
  document.getElementById('dec-reset').style.display = 'block';
  if (decType === 'off') {
    if (vende) { res.className = 'decision-result censo'; res.innerHTML = '✅ REALIZAR EL CENSO'; }
    else { res.className = 'decision-result puntear'; res.innerHTML = '📍 SOLO PUNTEAR'; }
  } else if (decType === 'otros') {
    res.className = 'decision-result puntear';
    res.innerHTML = '🔍 CONSULTA LA TABLA<br><span style="font-size:0.7rem">La acción varía según el tipo específico.</span>';
  }
}

function resetDecision() {
  decType = null;
  document.querySelectorAll('.decision-opt').forEach(o => o.classList.remove('selected'));
  document.getElementById('dec-q2').style.display = 'none';
  document.getElementById('dec-result').className = 'decision-result';
  document.getElementById('dec-result').innerHTML = '';
  document.getElementById('dec-reset').style.display = 'none';
}

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', () => {
  map = L.map('map').setView([19.555, -96.91], 12);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { attribution: '© OpenStreetMap © CartoDB', maxZoom: 19 }).addTo(map);
  loadProgress();
  ZONES.forEach(z => z.blocks.forEach(b => addMarker(z, b)));
  buildEstabGrids();
  renderAll();
  // Eventos UI
  document.querySelectorAll('.view-btn').forEach(btn => btn.addEventListener('click', () => setView(btn.dataset.view)));
  document.querySelectorAll('.nav-tab, .mobile-nav-btn').forEach(btn => btn.addEventListener('click', () => showPage(btn.dataset.page)));
  document.getElementById('gps-btn-mob')?.addEventListener('click', toggleGPS);
  document.getElementById('gps-btn-desk')?.addEventListener('click', toggleGPS);
  document.getElementById('center-btn-mob')?.addEventListener('click', centerOnMe);
  document.getElementById('center-btn-desk')?.addEventListener('click', centerOnMe);
  document.getElementById('rotate-lock-mob')?.addEventListener('click', toggleRotationLock);
  document.getElementById('rotate-lock-desk')?.addEventListener('click', toggleRotationLock);
  document.getElementById('reset-north-mob')?.addEventListener('click', resetRotation);
  document.getElementById('reset-north-desk')?.addEventListener('click', resetRotation);
  document.getElementById('open-panel-btn')?.addEventListener('click', openPanel);
  document.getElementById('panel-close')?.addEventListener('click', closePanel);
  document.getElementById('panel-backdrop')?.addEventListener('click', closePanel);
  document.getElementById('search-input')?.addEventListener('input', filterEstab);
  document.getElementById('search-clear')?.addEventListener('click', clearSearch);
  document.querySelectorAll('.cat-btn').forEach(btn => btn.addEventListener('click', () => filterCat(btn.dataset.cat, btn)));
  document.querySelectorAll('#dec-type-opts .decision-opt').forEach(opt => opt.addEventListener('click', () => selectDecType(opt.dataset.type)));
  document.querySelectorAll('#dec-q2 .decision-opt').forEach(opt => opt.addEventListener('click', () => selectDecNIQ(opt.dataset.niq === 'true')));
  document.getElementById('dec-reset')?.addEventListener('click', resetDecision);
  // Offline
  window.addEventListener('offline', () => document.getElementById('nav-offline').classList.add('show'));
  window.addEventListener('online', () => document.getElementById('nav-offline').classList.remove('show'));
  if (!navigator.onLine) document.getElementById('nav-offline').classList.add('show');
  // Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW error:', err)));
  }
});