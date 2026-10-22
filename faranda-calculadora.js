
/* ============================================================
   CALCULADORA DE PINTURA  ->  /calculadora-de-pintura/
   Portada del prototipo "Calculadora de pintura - Faranda".
   IIFE independiente del intro y de las unidades de negocio.
   Monta dentro del <div id="far-calc"> del contenido de la pagina.
   Estilos: Edicion avanzada de CSS, colgados de #far-calc.
   ============================================================ */
(function(){
  /* El gate es el propio div: #far-calc solo existe en la pagina de la calculadora.
     Mas confiable que filtrar por pathname, y permite probar el codigo fuera del sitio. */
  var root = document.getElementById('far-calc');
  if (!root || root.getAttribute('data-ok')) return;
  root.setAttribute('data-ok', '1');

  var WA = '542215257900';
  var SIZES = [20, 10, 4, 1];
  var COLS = ['#065198','#0f9347','#f7bb14','#ed8a21','#df1f2b','#662b7f'];

  /* Rendimiento en m2 por litro y POR MANO. Los de ficha son dato del fabricante;
     cuando la ficha da un rango se toma el extremo BAJO para no quedarse corto. */
  var FICHA = [
    { n:'Alba · Albalatex Design Satinado (interior)', r:12, img:'albalatex-design-satinado',
      nota:'Ficha técnica Alba (jun. 2021): rinde 12 a 14 m²/L por mano. Usamos 12 para no quedarse corto. Recomienda 2 a 3 manos.' },
    { n:'Alba · Albaxpert (interior mate)', r:12, img:'albaxpert',
      nota:'Ficha técnica Alba (ene. 2025): rinde 12 a 14 m²/L por mano. Usamos 12 para no quedarse corto. Recomienda 2 a 3 manos.' },
    { n:'Alba · Albalatex Extra Mate (interior)', r:12, img:'albalatex-extra-mate',
      nota:'Ficha técnica Alba (ago. 2024): rinde 12 a 16 m²/L por mano. Usamos 12 para no quedarse corto. Recomienda 2 a 3 manos.' },
    { n:'Alba · Albacryl Rinde Más (interior mate, concentrado)', r:20, img:'albacryl-rinde-mas',
      nota:'Ficha técnica Alba (ago. 2020): rinde hasta 20 m²/L por mano, es un máximo. Es concentrada: se diluye con 30% de agua (6 L por lata de 20 L). Los litros calculados son de producto sin diluir. Recomienda 2 a 3 manos.' },
    { n:'Alba · Cielos Rasos (antihongo permanente)', r:10, img:'alba-cielos-rasos',
      nota:'Ficha técnica Alba (ene. 2013): rinde 10 a 12 m²/L por mano. Usamos 10 para no quedarse corto. Antihongo permanente. Recomienda 1 o 2 manos.' },
    { n:'Alba · Esmalte Sintético Brillante Doble Acción', r:12, img:'esmalte-sintetico-brillante', latas:[20,4,1,0.5],
      nota:'Ficha técnica Alba (jul. 2023): rinde 12 a 15 m²/L por mano. Usamos 12 para no quedarse corto. Para maderas y metales; recomienda 2 o 3 manos. Viene en latas de 0,5, 1, 4 y 20 L.' },
    { n:'Alba · Albalux 2 en 1 Forja (esmalte convertidor)', r:10, img:'albalux-convertidor', latas:[4,1],
      nota:'Ficha técnica Alba (oct. 2014): rinde 10 m²/L por mano. Esmalte convertidor para metales ferrosos, sin fondo. Manos según aplicación: pincel 2 a 3, rodillo o soplete 3 a 4. Viene en latas de 1 y 4 L.' }
  ];
  var ORIENT = [
    { n:'Látex interior',           r:10 },
    { n:'Látex exterior',           r:8  },
    { n:'Látex para cielorrasos',   r:10 },
    { n:'Esmalte sintético',        r:12 }
  ];

  var modo = 'amb', manos = 2;

  function esc(s){
    return String(s).replace(/[&<>"]/g, function(c){
      return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c];
    });
  }
  function fmt(n, d){
    if (d === undefined) d = 1;
    return n.toLocaleString('es-AR', { minimumFractionDigits:0, maximumFractionDigits:d });
  }
  function q(s){ return root.querySelector(s); }
  function num(s){ var v = parseFloat(q(s).value); return (isFinite(v) && v > 0) ? v : 0; }
  function ent(s){ var v = parseInt(q(s).value, 10); return (isFinite(v) && v > 0) ? v : 0; }

  if (!document.getElementById('fc-bitter')) {
    var lk = document.createElement('link');
    lk.id = 'fc-bitter';
    lk.rel = 'stylesheet';
    lk.href = 'https://fonts.googleapis.com/css2?family=Bitter:wght@500;700&display=swap';
    document.head.appendChild(lk);
  }

  /* ---------- armado del DOM ---------- */
  var opts = '<optgroup label="Según ficha técnica">', i;
  for (i = 0; i < FICHA.length; i++) opts += '<option value="f' + i + '">' + esc(FICHA[i].n) + '</option>';
  opts += '</optgroup><optgroup label="Valores orientativos">';
  for (i = 0; i < ORIENT.length; i++) opts += '<option value="o' + i + '">' + esc(ORIENT[i].n) + '</option>';
  opts += '</optgroup><option value="custom">Otro (cargo el rendimiento)</option>';

  var bars = '';
  for (i = 0; i < COLS.length; i++) bars += '<i style="background-color:' + COLS[i] + '"></i>';

  root.innerHTML =
    '<div class="fc-spectrum" aria-hidden="true">' + bars + '</div>' +
    '<div class="fc-grid">' +
      '<div>' +

        '<div class="fc-fs"><span class="fc-legend">Superficie</span>' +
          '<div class="fc-seg">' +
            '<button type="button" class="fc-on" data-modo="amb">Por ambiente</button>' +
            '<button type="button" data-modo="area">Ya sé los m²</button>' +
          '</div>' +
          '<div id="fc-amb">' +
            '<div class="fc-row">' +
              '<label class="fc-f">Largo (m)<input type="number" id="fc-largo" value="4" min="0" step="0.1" inputmode="decimal"></label>' +
              '<label class="fc-f">Ancho (m)<input type="number" id="fc-ancho" value="3" min="0" step="0.1" inputmode="decimal"></label>' +
              '<label class="fc-f">Alto (m)<input type="number" id="fc-alto" value="2.6" min="0" step="0.1" inputmode="decimal"></label>' +
            '</div>' +
            '<label class="fc-check"><input type="checkbox" id="fc-techo"> Pintar también el techo</label>' +
          '</div>' +
          '<div id="fc-area" style="display:none">' +
            '<div class="fc-row fc-one"><label class="fc-f">Superficie a pintar (m²)' +
            '<input type="number" id="fc-m2" value="40" min="0" step="0.5" inputmode="decimal"></label></div>' +
          '</div>' +
        '</div>' +

        '<div class="fc-fs"><span class="fc-legend">Puertas y ventanas</span>' +
          '<div class="fc-row fc-two">' +
            '<label class="fc-f">Puertas<input type="number" id="fc-puertas" value="1" min="0" step="1" inputmode="numeric"></label>' +
            '<label class="fc-f">Ventanas<input type="number" id="fc-ventanas" value="1" min="0" step="1" inputmode="numeric"></label>' +
          '</div>' +
          '<p class="fc-hint">Descontamos 1,6 m² por puerta y 1,5 m² por ventana.</p>' +
        '</div>' +

        '<div class="fc-fs"><span class="fc-legend">Tipo de pintura</span>' +
          '<div class="fc-row fc-two">' +
            '<label class="fc-f">Producto<select id="fc-tipo">' + opts + '</select></label>' +
            '<label class="fc-f">Rendimiento (m² por litro)<input type="number" id="fc-rend" value="12" min="1" step="0.5" inputmode="decimal"></label>' +
          '</div>' +
          '<p class="fc-hint" id="fc-nota"></p>' +
        '</div>' +

        '<div class="fc-fs"><span class="fc-legend">Manos</span>' +
          '<div class="fc-coats">' +
            '<button type="button" data-c="1">1</button>' +
            '<button type="button" class="fc-on" data-c="2">2</button>' +
            '<button type="button" data-c="3">3</button>' +
          '</div>' +
          '<label class="fc-check"><input type="checkbox" id="fc-margen" checked> Sumar 10 % de margen</label>' +
        '</div>' +

      '</div>' +

      '<aside class="fc-result" aria-live="polite">' +
        '<h3>Vas a necesitar</h3>' +
        '<div class="fc-liters" id="fc-litros">0<small>litros</small></div>' +
        '<p class="fc-sub" id="fc-resumen"></p>' +
        '<div class="fc-cans" id="fc-cans" aria-hidden="true"></div>' +
        '<ul class="fc-buy" id="fc-buy"></ul>' +
        '<div class="fc-detail" id="fc-detalle"></div>' +
        '<a class="fc-wa" id="fc-wa" href="#" target="_blank" rel="noopener">Pedí tu presupuesto por WhatsApp</a>' +
      '</aside>' +
    '</div>' +
    '<p class="fc-note">Los resultados son estimativos. El rendimiento real depende de la marca, el color y el estado de la superficie: paredes nuevas, porosas o muy oscuras pueden pedir sellador o una mano más. Para una recomendación a medida, consultanos o acercate a cualquier sucursal.</p>';

  /* ---------- logica ---------- */
  function elegido(){
    var v = q('#fc-tipo').value;
    if (v === 'custom') return { custom:true };
    if (v.charAt(0) === 'f') return FICHA[+v.slice(1)];
    return ORIENT[+v.slice(1)];
  }
  /* Fotos reales de producto, servidas junto a este script. */
  var FOTOS = (function(){
    var sc = document.currentScript;
    return (sc && sc.src) ? sc.src.replace(/[^/]*$/, '') + 'latas/'
                          : 'https://cdn.jsdelivr.net/gh/pintureriasfaranda/tiendanube@main/latas/';
  })();
  var HF = { 20:118, 10:92, 4:68, 1:44, 0.5:32 };  /* alto de la foto */
  function ponerEnvase(cont, slug, s){
    var im = document.createElement('img');
    im.alt = '';
    /* el tema trae height:auto !important sobre las imagenes; hay que ganarle */
    im.style.setProperty('height', (HF[s] || 40) + 'px', 'important');
    im.style.setProperty('width', 'auto', 'important');
    im.style.display = 'block';
    /* si la foto no carga, se saca la lata: nunca un cuadrito roto */
    im.onerror = function(){ if (cont.parentNode) cont.parentNode.removeChild(cont); };
    im.src = FOTOS + slug + '.png';
    cont.appendChild(im);
    var cap = document.createElement('span');
    cap.textContent = fmt(s) + ' L';
    cont.appendChild(cap);
  }
  function latas(){
    var o = elegido();
    var L = (o && o.latas) ? o.latas.slice() : SIZES.slice();
    L.sort(function(a,b){ return b - a; });
    return L;
  }

  /* Mejor combinacion: primero el menor total que cubra, despues la menor cantidad de latas. */
  function mejor(need){
    if (need <= 0) return null;
    var S = latas(), cuenta = new Array(S.length), best = null, k;
    for (k = 0; k < S.length; k++) cuenta[k] = 0;
    (function go(i, tot, cnt){
      if (tot >= need - 1e-9){
        if (!best || tot < best.tot - 1e-9 || (Math.abs(tot - best.tot) < 1e-9 && cnt < best.cnt)){
          best = { tot:tot, cnt:cnt, parts: S.map(function(s,j){ return [s, cuenta[j]]; }) };
        }
        return;
      }
      if (i >= S.length) return;
      var s = S[i], max = Math.ceil((need - tot) / s - 1e-9), n;
      if (i > 0) max = Math.min(max, Math.ceil(S[i-1] / s));
      for (n = max; n >= 0; n--){ cuenta[i] = n; go(i+1, tot + n*s, cnt + n); }
      cuenta[i] = 0;
    })(0, 0, 0);
    return best;
  }

  function calc(){
    var paredes = 0, techo = 0, L, A, H;
    if (modo === 'amb'){
      L = num('#fc-largo'); A = num('#fc-ancho'); H = num('#fc-alto');
      paredes = 2 * (L + A) * H;
      if (q('#fc-techo').checked) techo = L * A;
    } else {
      paredes = num('#fc-m2');
    }
    var abert = ent('#fc-puertas') * 1.6 + ent('#fc-ventanas') * 1.5;
    var area = Math.max(0, paredes - abert + techo);
    var rend = num('#fc-rend');

    if (!rend){
      q('#fc-litros').innerHTML = '–<small>litros</small>';
      q('#fc-resumen').innerHTML = '<span class="fc-err">Cargá un rendimiento mayor a 0.</span>';
      q('#fc-cans').innerHTML = ''; q('#fc-buy').innerHTML = ''; q('#fc-detalle').innerHTML = '';
      return;
    }

    var litros = area * manos / rend;
    var margen = q('#fc-margen').checked ? litros * 0.1 : 0;
    litros += margen;

    q('#fc-litros').innerHTML = fmt(litros) + '<small>litros</small>';
    q('#fc-resumen').textContent = area > 0
      ? 'Para ' + fmt(area) + ' m² a ' + manos + (manos === 1 ? ' mano.' : ' manos.')
      : 'Cargá las medidas para calcular.';

    var combo = mejor(litros);
    var cans = q('#fc-cans'), buy = q('#fc-buy');
    cans.innerHTML = ''; buy.innerHTML = '';
    cans.style.display = 'none';   /* se vuelve a mostrar solo si hay latas */
    var lineas = [];

    if (combo){
      var sel = elegido();
      var foto = sel && sel.img;
      var p, s, n, j, li, c;
      for (p = 0; p < combo.parts.length; p++){
        s = combo.parts[p][0]; n = combo.parts[p][1];
        if (!n) continue;
        lineas.push('• ' + n + (n === 1 ? ' lata de ' : ' latas de ') + fmt(s) + ' L');
        li = document.createElement('li');
        li.innerHTML = '<span>' + n + (n === 1 ? ' lata de ' : ' latas de ') + fmt(s) +
                       ' L</span><strong>' + fmt(s * n) + ' L</strong>';
        buy.appendChild(li);
        for (j = 0; foto && j < n && cans.children.length < 12; j++){
          c = document.createElement('div');
          c.className = 'fc-can';
          ponerEnvase(c, foto, s);
          cans.appendChild(c);
        }
      }
      if (cans.children.length) cans.style.display = '';
      var tot = document.createElement('li');
      tot.innerHTML = '<span>Total a comprar</span><strong>' + fmt(combo.tot) + ' L</strong>';
      buy.appendChild(tot);

      q('#fc-detalle').innerHTML =
        '<div><span>Paredes</span><span>' + fmt(paredes) + ' m²</span></div>' +
        (techo  ? '<div><span>Techo</span><span>' + fmt(techo) + ' m²</span></div>' : '') +
        (abert  ? '<div><span>Aberturas</span><span>−' + fmt(abert) + ' m²</span></div>' : '') +
        (margen ? '<div><span>Margen incluido</span><span>' + fmt(margen) + ' L</span></div>' : '') +
        '<div><span>Te sobra aprox.</span><span>' + fmt(combo.tot - litros) + ' L</span></div>';
    } else {
      q('#fc-detalle').innerHTML = '';
    }

    var prod = q('#fc-tipo').options[q('#fc-tipo').selectedIndex].text;
    var txt = 'Hola! Use la calculadora de la web.\n\n' +
      'Producto: ' + prod + ' (' + fmt(rend) + ' m2/L por mano)\n' +
      'Superficie: ' + fmt(area) + ' m2 a ' + manos + (manos === 1 ? ' mano' : ' manos') + '\n' +
      'Necesito: ' + fmt(litros) + ' litros\n' +
      (lineas.length ? '\nMe conviene comprar:\n' + lineas.join('\n') : '');
    q('#fc-wa').href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(txt);
  }

  function syncTipo(foco){
    var o = elegido();
    if (!o.custom) q('#fc-rend').value = o.r;
    else if (foco) q('#fc-rend').focus();
    q('#fc-nota').textContent = o.nota || (o.custom
      ? 'Cargá el rendimiento por mano que indica la etiqueta del producto.'
      : 'Valor orientativo por mano. Revisá la etiqueta del producto que elijas.');
  }

  /* ---------- eventos ---------- */
  var segs = root.querySelectorAll('.fc-seg button');
  for (i = 0; i < segs.length; i++){
    segs[i].addEventListener('click', function(){
      modo = this.getAttribute('data-modo');
      for (var k = 0; k < segs.length; k++) segs[k].className = (segs[k] === this) ? 'fc-on' : '';
      q('#fc-amb').style.display  = (modo === 'amb')  ? '' : 'none';
      q('#fc-area').style.display = (modo === 'area') ? '' : 'none';
      calc();
    });
  }
  var cts = root.querySelectorAll('.fc-coats button');
  for (i = 0; i < cts.length; i++){
    cts[i].addEventListener('click', function(){
      manos = +this.getAttribute('data-c');
      for (var k = 0; k < cts.length; k++) cts[k].className = (cts[k] === this) ? 'fc-on' : '';
      calc();
    });
  }
  q('#fc-tipo').addEventListener('change', function(){ syncTipo(true); calc(); });
  q('#fc-rend').addEventListener('input', function(){ q('#fc-tipo').value = 'custom'; syncTipo(false); });
  var ins = root.querySelectorAll('input');
  for (i = 0; i < ins.length; i++) ins[i].addEventListener('input', calc);

  syncTipo(false);
  calc();
})();
