/* ============================================================
   dashboard.js — Lógica do painel principal do profissional
   Oficina Aprender+

   ✅ REAL:    GET /Profissional/{id}  — dados do profissional logado
   ⚠️  SIMULADO: métricas, alunos e sessões (endpoints ainda não existem)
   ============================================================ */

document.addEventListener('DOMContentLoaded', async () => {

  initTheme();

  /* ── Dados simulados ────────────────────────────────────
     Substituir pelas chamadas reais quando os endpoints
     de alunos e sessões forem implementados no back-end.
     ──────────────────────────────────────────────────────── */
  const DADOS_SIMULADOS = {
    metricas: {
      totalAlunos:      6,
      tarefasPendentes: 8,
      metaConcluida:    11,
      metaTotal:        15,
      proximasSessoes:  4,
    },
    alunos: [
      { nome: 'João Pedro Santos', condicao: 'Dislexia',         progresso: 65 },
      { nome: 'Maria Eduarda Lima', condicao: 'TDAH',            progresso: 82 },
      { nome: 'Lucas Oliveira',     condicao: 'Atraso na Fala',  progresso: 45 },
      { nome: 'Gabriel Costa',      condicao: 'TEA',             progresso: 91 },
    ],
    sessoes: [
      { dia: '6',  mes: 'ABR.', nome: 'João Pedro Santos',  quando: 'Amanhã',   tipo: 'Leitura'      },
      { dia: '7',  mes: 'ABR.', nome: 'Maria Eduarda Lima', quando: 'Em 2 dias', tipo: 'Atenção'      },
      { dia: '7',  mes: 'ABR.', nome: 'Gabriel Costa',      quando: 'Em 2 dias', tipo: 'Socialização' },
      { dia: '8',  mes: 'ABR.', nome: 'Lucas Oliveira',     quando: 'Em 3 dias', tipo: 'Linguagem'    },
    ],
  };

  /* ── Busca dados reais do profissional logado ────────── */
  const usuario = getUsuario();

  async function carregarProfissional() {
    if (!usuario?.id) return null;
    try {
      return await apiFetch(`/Profissional/${usuario.id}`);
    } catch {
      return null; // falha silenciosa: usa dados da sessão
    }
  }

  const profissional = await carregarProfissional();
  const nomeExibido  = profissional?.nome || usuario?.email?.split('@')[0] || 'Profissional';
  const iniciais     = nomeExibido.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase();

  /* ── Preenche nome e iniciais ────────────────────────── */
  document.getElementById('prof-nome').textContent    = nomeExibido;
  document.getElementById('prof-iniciais').textContent = iniciais;
  document.getElementById('saudacao-nome').textContent = nomeExibido.split(' ')[0];

  /* ── Saudação por horário ────────────────────────────── */
  const hora = new Date().getHours();
  const saudacao = hora < 12 ? 'Bom dia' : hora < 18 ? 'Boa tarde' : 'Boa noite';
  document.getElementById('saudacao').textContent = saudacao + ',';

  /* ── Métricas ────────────────────────────────────────── */
  const m = DADOS_SIMULADOS.metricas;
  animarContador('metric-alunos',  m.totalAlunos);
  animarContador('metric-tarefas', m.tarefasPendentes);
  animarContador('metric-sessoes', m.proximasSessoes);
  document.getElementById('metric-meta').textContent = `${m.metaConcluida}/${m.metaTotal}`;

  // Barra de progresso da meta
  const pct = Math.round((m.metaConcluida / m.metaTotal) * 100);
  document.getElementById('meta-pct').textContent   = pct + '%';
  document.getElementById('meta-desc').textContent  = `${m.metaConcluida} de ${m.metaTotal} atividades concluídas`;
  setTimeout(() => {
    document.getElementById('progress-fill').style.width = pct + '%';
  }, 300);

  /* ── Lista de alunos recentes ────────────────────────── */
  const listaAlunos = document.getElementById('lista-alunos');
  listaAlunos.innerHTML = '';
  DADOS_SIMULADOS.alunos.forEach(aluno => {
    const inicAl = aluno.nome.split(' ').map(p => p[0]).join('').slice(0, 2);
    listaAlunos.insertAdjacentHTML('beforeend', `
      <div class="aluno-item">
        <div class="aluno-avatar">${inicAl}</div>
        <div class="aluno-info">
          <div class="aluno-nome">${aluno.nome}</div>
          <div class="aluno-cond">${aluno.condicao}</div>
        </div>
        <div class="aluno-progress">
          <div class="mini-bar">
            <div class="mini-fill" style="width:${aluno.progresso}%"></div>
          </div>
          <span class="mini-pct">${aluno.progresso}%</span>
        </div>
      </div>
    `);
  });

  /* ── Lista de próximas sessões ───────────────────────── */
  const listaSessoes = document.getElementById('lista-sessoes');
  listaSessoes.innerHTML = '';
  DADOS_SIMULADOS.sessoes.forEach(s => {
    listaSessoes.insertAdjacentHTML('beforeend', `
      <div class="sessao-item">
        <div class="sessao-data">
          <div class="sessao-dia">${s.dia}</div>
          <div class="sessao-mes">${s.mes}</div>
        </div>
        <div class="sessao-info">
          <div class="sessao-nome">${s.nome}</div>
          <div class="sessao-quando">${s.quando}</div>
        </div>
        <span class="sessao-tag">${s.tipo}</span>
      </div>
    `);
  });

  /* ── Animação de contador ────────────────────────────── */
  function animarContador(id, alvo) {
    const el = document.getElementById(id);
    let atual = 0;
    const passo = Math.ceil(alvo / 20);
    const timer = setInterval(() => {
      atual = Math.min(atual + passo, alvo);
      el.textContent = atual;
      if (atual >= alvo) clearInterval(timer);
    }, 40);
  }

  /* ── Logout ──────────────────────────────────────────── */
  document.getElementById('btn-logout').addEventListener('click', logout);

});
