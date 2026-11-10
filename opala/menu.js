// Cartão "Experimenta o !menu": a pessoa toca, digita !menu e a Opala responde com o desenho do bot
// (bot/dados/src/menus/catalogo.js). Cada menu mostra só os 5 comandos principais e quantos tem no total.
(() => {
  const P = '!';
  const MENU = {
    titulo: 'Menu',
    intro: 'Escolhe uma categoria e manda o comando ♡',
    secoes: [
      ['🎵 Diversão & mídia', [
        ['menudown', 'músicas, vídeos e downloads'],
        ['menufig', 'figurinhas do seu jeito'],
        ['alteradores', 'efeitos em áudio, vídeo e imagem'],
        ['menulogos', 'logos com o seu nome'],
        ['menuedits', 'edições prontas pra fotos'],
        ['menubn', 'jogos e brincadeiras da galera'],
        ['menurpg', 'o RPG do grupo'],
      ]],
      ['🧰 Dia a dia', [
        ['ferramentas', 'utilidades: clima, notas, lembretes...'],
        ['menumemb', 'seu perfil, rankings e conquistas'],
      ]],
      ['🛡️ Cuidar do grupo', [
        ['menuadm', 'comandos dos admins'],
        ['menuvip', 'comandos VIP'],
        ['menudono', 'só pro meu dono'],
      ]],
    ],
  };

  // Resumo de cada menu: título, recadinho, os 5 principais e o total no bot.
  const RESUMOS = {
    menudown: ['🎵', 'Músicas & downloads', 'Manda o nome ou o link que eu busco pra você ♡', 15, [
      ['play <música>', 'toca a música que você pedir'],
      ['playvid <vídeo>', 'manda o vídeo do YouTube'],
      ['spotify <música>', 'busca no Spotify'],
      ['tiktok <link>', 'vídeo do TikTok'],
      ['instagram <link>', 'post ou reels do Instagram'],
    ]],
    menufig: ['✨', 'Figurinhas', 'Manda ou responde uma imagem, vídeo ou figurinha ♡', 16, [
      ['sticker', 'transforma imagem ou vídeo em figurinha'],
      ['sbg', 'figurinha sem o fundo da foto'],
      ['ttp <texto>', 'figurinha de texto'],
      ['brat <texto>', 'figurinha no estilo brat'],
      ['emojimix 😀+😎', 'mistura dois emojis'],
    ]],
    alteradores: ['🎧', 'Efeitos', 'Responde um áudio, vídeo ou imagem com o comando ♡', 42, [
      ['tomp3', 'tira o áudio do vídeo'],
      ['rmbg', 'tira o fundo da imagem'],
      ['upscale', 'melhora a qualidade da imagem'],
      ['vozcrianca', 'voz de criança'],
      ['bass', 'deixa o grave mais forte'],
    ]],
    menulogos: ['🖋️', 'Logos', 'Manda o comando com o seu texto ♡', 40, [
      ['galaxy <texto>', 'logo de galáxia'],
      ['glitch <texto>', 'logo com efeito glitch'],
      ['frozen <texto>', 'logo de gelo'],
      ['dragonfire <texto>', 'logo de fogo de dragão'],
      ['marvel <texto>/<texto>', 'logo da Marvel com dois textos'],
    ]],
    menuedits: ['📸', 'Edições', 'Responde uma foto com o comando ♡', 6, [
      ['jornal', 'sua foto na capa do jornal'],
      ['cinema', 'sua foto no telão'],
      ['camera', 'sua foto numa câmera'],
      ['blackwhite', 'foto em preto e branco'],
      ['desfoque', 'desfoca a foto'],
    ]],
    menubn: ['🎮', 'Brincadeiras', 'Precisa do modo brincadeira ligado no grupo ♡', 200, [
      ['jogodavelha @user', 'jogo da velha'],
      ['uno criar', 'abre uma partida de UNO'],
      ['quiz <categoria>', 'perguntas e respostas'],
      ['wordle', 'adivinhe a palavra'],
      ['casal', 'sorteia o casal do grupo'],
    ]],
    menurpg: ['⚔️', 'RPG', 'Precisa do Modo RPG ligado no grupo ⚔︎', 140, [
      ['perfilrpg', 'sua ficha'],
      ['diario', 'recompensa do dia'],
      ['work', 'trabalha'],
      ['fish', 'pesca'],
      ['pets', 'seus pets'],
    ]],
    ferramentas: ['🧰', 'Ferramentas', 'Utilidades pro dia a dia ♡', 28, [
      ['clima <cidade>', 'previsão do tempo'],
      ['lembrete', 'cria um lembrete'],
      ['tradutor', 'traduz um texto'],
      ['tts <texto>', 'transforma texto em áudio'],
      ['qrcode <texto>', 'cria um QR code'],
    ]],
    menumemb: ['👤', 'Você & a galera', 'Seu cantinho no grupo ♡', 31, [
      ['perfil', 'seu perfil no grupo'],
      ['rankativo', 'quem mais fala no grupo'],
      ['conquistas', 'suas conquistas'],
      ['caixa diaria', 'abre a caixa do dia'],
      ['rep + @user', 'dá reputação boa'],
    ]],
    menuadm: ['🛡️', 'Admins', 'Pra quem cuida do grupo ♡', 110, [
      ['ban @user', 'remove do grupo'],
      ['adv @user', 'dá uma advertência'],
      ['marcar', 'marca todo mundo'],
      ['antilinkgp', 'apaga links de outros grupos'],
      ['bemvindo', 'liga as boas-vindas'],
    ]],
    menuvip: ['👑', 'VIP', 'Os comandos VIP são os que o dono cadastrar ♡', 0, [
      ['menuvip', 'mostra os comandos VIP do bot'],
      ['infovip', 'como funciona o VIP'],
      ['statsvip', 'os números do VIP'],
      ['dono', 'fala com o dono do bot'],
      ['addcmdvip', 'o dono cadastra um comando VIP'],
    ]],
    menudono: ['🤖', 'Dono', 'Os comandos só do meu dono ♡', 131, [
      ['nomebot <nome>', 'meu nome'],
      ['prefixo <símbolo>', 'meu prefixo'],
      ['criador', 'quem desenvolveu o projeto (@ruan_amarl)'],
      ['fotomenu', 'a imagem do menu'],
      ['designmenu', 'muda o visual do menu'],
      ['reiniciar', 'me reinicia'],
    ]],
  };

  // Os mesmos apelidos que o bot aceita.
  const APELIDOS = {
    menu: 'menu', help: 'menu', ajuda: 'menu', comandos: 'menu',
    menudown: 'menudown', menudownload: 'menudown', menudownloads: 'menudown', downmenu: 'menudown', downloadmenu: 'menudown',
    menufig: 'menufig', menusticker: 'menufig', stickermenu: 'menufig',
    alteradores: 'alteradores', menualterador: 'alteradores', menualteradores: 'alteradores',
    menulogos: 'menulogos', menulogo: 'menulogos',
    menuedits: 'menuedits', edits: 'menuedits',
    menubn: 'menubn', menubrincadeira: 'menubn', menubrincadeiras: 'menubn',
    menurpg: 'menurpg', rpg: 'menurpg',
    ferramentas: 'ferramentas', menuferramentas: 'ferramentas', menuferramenta: 'ferramentas',
    menumemb: 'menumemb', menumembros: 'menumemb', menugeral: 'menumemb', membmenu: 'menumemb', membermenu: 'menumemb',
    menuadm: 'menuadm', menuadmin: 'menuadm', menuadmins: 'menuadm', admmenu: 'menuadm',
    menuvip: 'menuvip', vip: 'menuvip', vipmenu: 'menuvip',
    menudono: 'menudono',
    criador: 'criador', dev: 'criador',
  };

  const HEADER = '╭─── ⋆｡˚ 💎 <b>Opala</b> 💎 ˚｡⋆ ───╮\n│ Oi! ♡\n╰──────────────────────╯';
  const FIM = '╰─────── ⋆｡˚ ✧ ───────';
  const esc = t => t.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const cmd = c => APELIDOS[c] ? `<button type="button" class="cmd" data-cmd="${P}${c}">${P}${c}</button>` : `${P}${esc(c)}`;

  function desenharMenu() {
    const l = [HEADER, '', `💎 <b>${MENU.titulo}</b> · ${MENU.intro}`, ''];
    for (const [titulo, itens] of MENU.secoes) {
      l.push(`╭─ ✦ <b>${titulo}</b>`, '│');
      for (const [c, d] of itens) l.push(`│ ♡ ${cmd(c)} — <i>${d}</i>`);
      l.push(FIM, '');
    }
    l.push('✧ Toca num menu ou digita o nome dele ♡');
    return l.join('\n');
  }

  function desenharResumo(chave) {
    const [ic, titulo, intro, total, top] = RESUMOS[chave];
    const l = [HEADER, '', `💎 <b>${titulo}</b> · ${intro}`, '', `╭─ ✦ <b>${ic} Os principais</b>`, '│'];
    for (const [c, d] of top) l.push(`│ ♡ ${P}${esc(c)} — <i>${d}</i>`);
    if (total > top.length) l.push('│', `│ ✧ <i>e mais ${total - top.length} no bot de verdade</i>`);
    l.push(FIM, '', `✧ Manda ${cmd('menu')} pra voltar ♡`);
    return l.join('\n');
  }

  const caixa = document.getElementById('testeMenu');
  const msgs = document.getElementById('tryMsgs');
  const form = document.getElementById('tryForm');
  const input = document.getElementById('tryInput');
  const start = document.getElementById('tryStart');
  const status = document.getElementById('tryStatus');
  const toque = matchMedia('(pointer: coarse)').matches;
  let ocupada = false;

  const hora = () => new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  function bolha(tipo, html) {
    const b = document.createElement('div');
    b.className = 'bub ' + tipo;
    b.innerHTML = html + `<span class="hora">${hora()}</span>`;
    msgs.appendChild(b);
    return b;
  }

  // Mostra o "digitando...", espera um pouquinho e entrega a resposta com o começo dela à vista.
  function responder(html, demora = 700) {
    ocupada = true;
    status.textContent = 'digitando...';
    const d = document.createElement('div');
    d.className = 'bub bot digitando';
    d.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    setTimeout(() => {
      d.remove();
      const b = bolha('bot', html);
      msgs.scrollTop = b.offsetTop - msgs.offsetTop - 8;
      status.textContent = 'online';
      ocupada = false;
    }, demora);
  }

  function enviar(texto) {
    texto = texto.trim();
    if (!texto || ocupada) return;
    bolha('eu', esc(texto));
    const limpo = texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const comPrefixo = limpo.startsWith(P);
    const nome = limpo.replace(/^[!./#]\s*/, '').split(/\s+/)[0];
    const chave = APELIDOS[nome];

    if (nome === 'criador' || nome === 'dev' || nome === 'desenvolvedor') {
      responder(`╭─── ⋆｡˚ 💎 <b>Opala</b> 💎 ˚｡⋆ ───╮\n│\n│ Esse projeto foi desenvolvido pelo\n│ <b>Ruan</b> (<a href="https://www.instagram.com/ruan_amarl" target="_blank" rel="noopener">@ruan_amarl</a>) ♡\n│\n│ 🌐 <a href="https://projectgems.github.io/opala">projectgems.github.io/opala</a>\n│ 💻 <a href="https://github.com/ruan2311/opala" target="_blank" rel="noopener">github.com/ruan2311/opala</a>\n│\n╰──────────────────────╯`, 500);
      return;
    }

    if (chave && comPrefixo) responder(chave === 'menu' ? desenharMenu() : desenharResumo(chave));
    else if (chave) responder(`Quase! Faltou o <b>${P}</b> na frente ♡\nTenta ${cmd(nome)}`, 500);
    else if (comPrefixo) responder(`Esse eu só faço no bot de verdade ✦\nAqui eu te mostro os menus: manda ${cmd('menu')} ♡`, 600);
    else responder(`Oiê! ♡ Eu entendo comandos.\nDigita ${cmd('menu')} que eu te mostro tudo ⋆｡˚`, 600);
  }

  start.addEventListener('click', () => {
    start.remove();
    form.hidden = false;
    caixa.classList.add('pulse');
    input.focus();
    responder(`Oi, tudo bem? ♡\nDigita <b>${P}menu</b> aí embaixo e me manda,\nque eu te mostro tudo que eu sei fazer ⋆｡˚ ✦`, 600);
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const t = input.value;
    input.value = '';
    caixa.classList.remove('pulse');
    enviar(t);
    if (toque) input.blur(); // no celular, fecha o teclado pra pessoa ver a resposta
  });

  // Tocar num comando dentro da resposta envia ele sozinho.
  msgs.addEventListener('click', e => {
    const b = e.target.closest('.cmd');
    if (b) enviar(b.dataset.cmd);
  });
})();
