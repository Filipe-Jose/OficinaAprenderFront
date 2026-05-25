/* DATA */
const students = [
  { id:'1', name:'João Pedro Santos',   age:8,  avatar:'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=200&h=200&fit=crop', status:'active',  progress:65, lastSession:'2026-04-04', diagnosis:'Dislexia',              activitiesCompleted:13, totalActivities:20, tags:['Leitura','Escrita','Prioridade Alta'], nextSession:'2026-04-07' },
  { id:'2', name:'Maria Eduarda Lima',  age:10, avatar:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop', status:'active',  progress:82, lastSession:'2026-04-05', diagnosis:'TDAH',                 activitiesCompleted:16, totalActivities:20, tags:['Atenção','Organização'],            nextSession:'2026-04-08' },
  { id:'3', name:'Lucas Oliveira',      age:7,  avatar:'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=200&h=200&fit=crop', status:'active',  progress:45, lastSession:'2026-04-03', diagnosis:'Atraso na Fala',         activitiesCompleted:9,  totalActivities:20, tags:['Linguagem','Expressão Oral'],       nextSession:'2026-04-09' },
  { id:'4', name:'Beatriz Ferreira',    age:9,  avatar:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop', status:'paused',  progress:38, lastSession:'2026-03-28', diagnosis:'Discalculia',            activitiesCompleted:7,  totalActivities:20, tags:['Matemática','Raciocínio Lógico'],  nextSession:null        },
  { id:'5', name:'Gabriel Costa',       age:11, avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop', status:'active',  progress:91, lastSession:'2026-04-05', diagnosis:'TEA',                  activitiesCompleted:18, totalActivities:20, tags:['Socialização','Rotina'],            nextSession:'2026-04-08' },
  { id:'6', name:'Sofia Almeida',       age:6,  avatar:'https://images.unsplash.com/photo-1554679665-f5537f187268?w=200&h=200&fit=crop', status:'active',  progress:23, lastSession:'2026-04-04', diagnosis:'Desenvolvimento Típico',  activitiesCompleted:4,  totalActivities:20, tags:['Iniciante','Avaliação Inicial'],    nextSession:'2026-04-10' },
];

const activities = [
  { id:'a1', title:'Reconhecimento de Letras',  description:'Identificar e nomear letras do alfabeto com suporte visual', type:'reading',  difficulty:'easy',   status:'completed',   order:1, estimatedTime:15, completedDate:'2026-03-28' },
  { id:'a2', title:'Formação de Sílabas',        description:'Combinar consoantes e vogais para formar sílabas simples',  type:'reading',  difficulty:'easy',   status:'completed',   order:2, estimatedTime:20, completedDate:'2026-03-30' },
  { id:'a3', title:'Palavras de 2 Sílabas',      description:'Ler e escrever palavras simples de duas sílabas',           type:'reading',  difficulty:'medium', status:'in-progress', order:3, estimatedTime:25, completedDate:null },
  { id:'a4', title:'Compreensão de Texto Curto', description:'Ler frases curtas e responder perguntas simples',           type:'reading',  difficulty:'medium', status:'available',   order:4, estimatedTime:30, completedDate:null },
  { id:'a5', title:'Escrita Guiada',             description:'Copiar palavras e frases com apoio de linhas e modelos',    type:'writing',  difficulty:'easy',   status:'locked',      order:5, estimatedTime:20, completedDate:null },
];

const notes = [
  { id:'n1', studentId:'1', authorId:'prof-1', authorName:'Dra. Ana Silva',   authorRole:'Psicopedagoga',  authorAvatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', content:'João apresentou ótima evolução na identificação de letras. Recomendo avançar para sílabas compostas na próxima sessão.', date:'2026-04-04T14:30:00', type:'observation', tags:['Progresso','Leitura'] },
  { id:'n2', studentId:'1', authorId:'prof-2', authorName:'Dr. Carlos Mendes',authorRole:'Psicólogo',       authorAvatar:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop', content:'Avaliação neuropsicológica indica melhora significativa na memória de trabalho. Continuar com exercícios de atenção sustentada.', date:'2026-04-03T10:15:00', type:'evaluation', tags:['Avaliação','Cognição'] },
  { id:'n3', studentId:'1', authorId:'prof-3', authorName:'Mariana Costa',    authorRole:'Fonoaudióloga',  authorAvatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', content:'Família relata que João está mais confiante para ler em voz alta em casa. Importante reforçar o incentivo positivo.', date:'2026-04-02T16:45:00', type:'communication', tags:['Família','Motivação'] },
];

// Dados dos objetivos
const goals = {
  '1': [
    { id:'g101', title:'Melhorar leitura silábica',         desc:'Trabalhar a identificação e leitura de sílabas simples e compostas com precisão.',          status:'em-andamento', progress:60, deadline:'2026-08-30', sessions:[
      { date:'2026-04-05', activities:'Jogos de sílabas e leitura de cartões ilustrados.',             obs:'Boa evolução — reconhece padrões CV e CVC sem hesitação.',              strategies:'Método fônico, cartões com imagens',         next:'Trabalhar encontros vocálicos e dígrafos.' },
      { date:'2026-04-12', activities:'Leitura de texto curto em dupla com a psicopedagoga.',          obs:'Leu com menos pausas. Demonstrou maior confiança.',                     strategies:'Leitura compartilhada e eco-leitura',        next:'Textos com palavras paroxítonas mais longas.' },
    ]},
    { id:'g102', title:'Desenvolvimento da escrita espontânea', desc:'Estimular a produção textual autônoma com coesão e coerência.',                             status:'pendente',     progress:10, deadline:'2026-10-15', sessions:[] },
    { id:'g103', title:'Concentração e autorregulação',      desc:'Técnicas de atenção focada para aumentar o tempo de engajamento nas atividades.',            status:'em-andamento', progress:40, deadline:'2026-09-01', sessions:[
      { date:'2026-04-08', activities:'Respiração guiada + puzzle temático.',                          obs:'Conseguiu manter foco por 15 min sem interrupção.',                     strategies:'Mindfulness infantil, pausas programadas',   next:'Ampliar janela de foco para 20 min.' },
    ]},
  ],
  '2': [
    { id:'g201', title:'Gestão do tempo nas tarefas',       desc:'Desenvolver estratégias para planejar e cumprir atividades dentro do tempo estipulado.',     status:'em-andamento', progress:55, deadline:'2026-07-31', sessions:[] },
    { id:'g202', title:'Organização do caderno escolar',    desc:'Manter registros ordenados e legíveis nas disciplinas.',                                       status:'concluida',    progress:100,deadline:'2026-04-30', sessions:[
      { date:'2026-04-20', activities:'Revisão de organização e planejamento semanal.',                obs:'Excelente desempenho! Meta concluída com sucesso.',                     strategies:'Uso de agenda, cores por disciplina',         next:'Iniciar próxima meta: gestão de tempo.' },
    ]},
  ],
  '3': [
    { id:'g301', title:'Expressão oral em situações cotidianas', desc:'Estimular a fala em contextos comunicativos do dia a dia.',                                status:'em-andamento', progress:35, deadline:'2026-09-30', sessions:[] },
  ],
  '4': [
    { id:'g401', title:'Operações matemáticas básicas',     desc:'Dominar adição, subtração, multiplicação e divisão com números naturais.',                    status:'em-andamento', progress:30, deadline:'2026-10-01', sessions:[] },
  ],
  '5': [
    { id:'g501', title:'Interação com pares em atividades grupais', desc:'Desenvolver habilidades de comunicação e cooperação em pequenos grupos.',              status:'em-andamento', progress:70, deadline:'2026-08-01', sessions:[
      { date:'2026-04-10', activities:'Jogo cooperativo em dupla com aluno de outra turma.',           obs:'Iniciou contato visual e esperou a vez com mais frequência.',           strategies:'Modelagem, reforço positivo imediato',        next:'Ampliar para grupo de 3 alunos.' },
    ]},
    { id:'g502', title:'Rotina de transição entre atividades', desc:'Tornar as mudanças de atividade mais previsíveis e menos ansiogênicas.',                   status:'concluida',    progress:100,deadline:'2026-03-31', sessions:[] },
  ],
  '6': [
    { id:'g601', title:'Avaliação inicial de linguagem',    desc:'Mapeamento das habilidades linguísticas e comunicativas em fase inicial.',                   status:'pendente',     progress:0,  deadline:'2026-05-30', sessions:[] },
  ],
};

const dashboardStats = { totalStudents:6, activeStudents:5, pendingTasks:8, weeklyGoal:15, weeklyProgress:11, upcomingSessions:4 };

/* ROUTER STATE */
let currentRoute = 'dashboard';
let currentStudentId = null;
let currentGoalId    = null;
let activeProfileTab = 'overview';
let studentFilter    = 'all';
let studentSearch    = '';

const navItems = [
  { id:'dashboard',    label:'Dashboard',   href:'dashboard'    },
  { id:'students',     label:'Alunos',      href:'students'     },
  { id:'activities',   label:'Atividades',  href:'activities'   },
  { id:'communication',label:'Comunicação', href:'communication'},
  { id:'reports',      label:'Relatórios',  href:'reports'      },
  { id:'achievements', label:'Conquistas',  href:'achievements' },
];

function navigate(route, studentId = null, tab = 'overview', goalId = null) {
  currentRoute = route;
  currentStudentId = studentId;
  if (tab) activeProfileTab = tab;
  currentGoalId = goalId;   // guarda o id da meta se for passado
  renderSidebar();
  renderMain();
  document.querySelector('.main-area').scrollTo(0, 0);
}

/* Barra lateral */
const icons = {
  dashboard:     `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  students:      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
  activities:    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="22" y1="12" x2="19" y2="12"/><line x1="5" y1="12" x2="2" y2="12"/><line x1="12" y1="5" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="19"/></svg>`,
  communication: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
  reports:       `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  achievements:  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
};

function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  nav.innerHTML = navItems.map(item => {
    const isActive = currentRoute === item.id || (currentRoute === 'student-profile' && item.id === 'students') || (currentRoute === 'activity-trail' && item.id === 'students');
    return `<button class="nav-item ${isActive ? 'active' : ''}" onclick="navigate('${item.id}')">${icons[item.id] || ''}<span>${item.label}</span></button>`;
  }).join('');
}

/* Cabeçalho */
function headerHTML(title, showSearch = true, action = null) {
  const actionBtn = action ? `<button class="btn btn-primary btn-sm" onclick="${action.fn}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>${action.label}</button>` : '';
  const searchEl = showSearch ? `<div class="search-box"><svg class="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input type="text" placeholder="Buscar alunos, atividades..." /></div>` : '';
  return `<div class="page-header"><h1 class="page-title">${title}</h1><div class="header-right">${searchEl}${actionBtn}<button class="bell-btn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg><span class="bell-dot"></span></button></div></div>`;
}

/*Renderizador principal */
function renderMain() {
  const area = document.getElementById('main-area');
  const routes = {
    'dashboard':     renderDashboard,
    'students':      renderStudents,
    'student-profile': () => renderStudentProfile(currentStudentId),
    'activity-trail':  () => renderActivityTrail(currentStudentId),
    'activities':    () => renderPlaceholder('Atividades','activities','Gerencie seu banco de atividades e exercícios pedagógicos',['Biblioteca completa de atividades por área','Filtros por tipo, dificuldade e tempo','Atividades favoritas e personalizadas','Histórico de uso e efetividade']),
    'communication': renderCommunication,
    'reports':       () => renderPlaceholder('Relatórios','reports','Gere relatórios detalhados sobre o progresso dos alunos',['Relatórios individuais e em grupo','Gráficos de evolução temporal','Exportação em PDF e Excel','Relatórios personalizados por período']),
    'achievements':  () => renderPlaceholder('Conquistas','achievements','Sistema de gamificação e recompensas para engajamento',['Badges e troféus personalizados','Sistema de pontos e níveis','Histórico de conquistas por aluno','Metas e desafios semanais']),
    'goal-detail': () => renderGoalDetail(currentStudentId, currentGoalId),
  };
  area.innerHTML = (routes[currentRoute] || renderDashboard)();
}

/* DASHBOARD */
function renderDashboard() {
  const s = dashboardStats;
  const weekPct = Math.round((s.weeklyProgress / s.weeklyGoal) * 100);
  const recent = students.filter(s => s.status === 'active').slice(0, 4);
  const upcoming = students.filter(s => s.nextSession).sort((a,b) => new Date(a.nextSession) - new Date(b.nextSession)).slice(0, 5);
  const today = new Date('2026-04-06');

  return headerHTML('Dashboard') + `<div class="page-body">
    <div class="grid-4" style="margin-bottom:24px;">
      ${statCard('Total de Alunos', s.totalStudents, `${s.activeStudents} ativos`, 'green', 'bg-blue', icons.students)}
      ${statCard('Tarefas Pendentes', s.pendingTasks, 'Requer atenção', 'orange', 'bg-orange', '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>')}
      ${statCard('Meta da Semana', `${s.weeklyProgress}/${s.weeklyGoal}`, `${weekPct}% concluído`, 'green', 'bg-green', icons.achievements)}
      ${statCard('Próximas Sessões', s.upcomingSessions, 'Esta semana', 'blue', 'bg-purple', '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>')}
    </div>
    <div class="card" style="padding:24px; margin-bottom:24px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><div><div class="section-title">Meta da Semana</div><div style="font-size:13px;color:var(--muted);">${s.weeklyProgress} de ${s.weeklyGoal} atividades concluídas</div></div><span class="badge badge-active">${weekPct}%</span></div>
      <div class="progress-track" style="height:12px;"><div class="progress-fill fill-gradient" style="width:${weekPct}%"></div></div>
    </div>
    <div class="grid-2">
      <div class="card" style="padding:24px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;"><div class="section-title">Alunos Recentes</div><button class="btn btn-ghost btn-sm" onclick="navigate('students')">Ver todos →</button></div>
        ${recent.map(s => `<div class="student-row" onclick="navigate('student-profile','${s.id}')"><img src="${s.avatar}" class="avatar" style="width:48px;height:48px;" onerror="this.style.display='none'" /><div style="flex:1;min-width:0;"><div style="font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${s.name}</div><div style="font-size:12px;color:var(--muted);">${s.diagnosis||''}</div></div><div style="text-align:right;"><div style="display:flex;align-items:center;gap:6px;"><div class="progress-track" style="width:64px;height:6px;"><div class="progress-fill fill-blue" style="width:${s.progress}%"></div></div><span style="font-size:12px;color:var(--muted);">${s.progress}%</span></div></div></div>`).join('')}
      </div>
      <div class="card" style="padding:24px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;"><div class="section-title">Próximas Sessões</div><button class="btn btn-ghost btn-sm">Ver agenda →</button></div>
        ${upcoming.map(s => {
          const d = new Date(s.nextSession);
          const diff = Math.ceil((d.getTime() - today.getTime()) / 86400000);
          const when = diff === 0 ? 'Hoje' : diff === 1 ? 'Amanhã' : `Em ${diff} dias`;
          return `<div class="session-row"><div class="session-day"><div class="session-day-num">${d.getDate()}</div><div class="session-day-month">${d.toLocaleDateString('pt-BR',{month:'short'})}</div></div><div style="flex:1;min-width:0;"><div style="font-weight:500;">${s.name}</div><div style="font-size:12px;color:var(--muted);">${when}</div></div><span class="badge badge-obs badge-sm">${s.tags[0]}</span></div>`;
        }).join('')}
      </div>
    </div>
    <div class="card" style="padding:24px;margin-top:24px;">
      <div class="section-title" style="margin-bottom:16px;">Ações Rápidas</div>
      <div class="grid-3">
        <div class="quick-action" onclick="navigate('students')"><div class="stat-icon bg-blue" style="padding:12px;border-radius:var(--radius);">${icons.students}</div><div><div style="font-weight:500;">Novo Aluno</div><div style="font-size:12px;color:var(--muted);">Cadastrar paciente</div></div></div>
        <div class="quick-action" onclick="navigate('activities')"><div class="stat-icon bg-green" style="padding:12px;border-radius:var(--radius);">${icons.activities}</div><div><div style="font-weight:500;">Nova Atividade</div><div style="font-size:12px;color:var(--muted);">Criar exercício</div></div></div>
        <div class="quick-action" onclick="navigate('communication')"><div class="stat-icon bg-purple" style="padding:12px;border-radius:var(--radius);">${icons.communication}</div><div><div style="font-weight:500;">Registrar Nota</div><div style="font-size:12px;color:var(--muted);">Adicionar observação</div></div></div>
      </div>
    </div>
  </div>`;
}

function statCard(label, value, sub, subColor, iconBg, iconSvg) {
  return `<div class="card stat-card"><div class="stat-row"><div><div class="stat-label">${label}</div><div class="stat-value">${value}</div><div class="stat-sub text-${subColor}">${sub}</div></div><div class="stat-icon ${iconBg}">${iconSvg}</div></div></div>`;
}

/* Lista de Estudantes */
function renderStudents() {
  let list = students;
  if (studentFilter !== 'all') list = list.filter(s => s.status === studentFilter);
  if (studentSearch) list = list.filter(s => s.name.toLowerCase().includes(studentSearch.toLowerCase()));

  const countAll    = students.length;
  const countActive = students.filter(s => s.status==='active').length;
  const countPaused = students.filter(s => s.status==='paused').length;

  return headerHTML('Alunos', false, {label:'Novo Aluno', fn:"toast('Em breve: cadastro de aluno!')"}) + `<div class="page-body">
    <div class="filter-row">
      <div class="filter-input"><input type="text" placeholder="Buscar por nome..." value="${studentSearch}" oninput="studentSearch=this.value; renderMain()" /></div>
      <button class="btn ${studentFilter==='all'?'btn-primary':'btn-outline'} btn-sm" onclick="studentFilter='all';renderMain()">Todos (${countAll})</button>
      <button class="btn ${studentFilter==='active'?'btn-primary':'btn-outline'} btn-sm" onclick="studentFilter='active';renderMain()">Ativos (${countActive})</button>
      <button class="btn ${studentFilter==='paused'?'btn-primary':'btn-outline'} btn-sm" onclick="studentFilter='paused';renderMain()">Pausados (${countPaused})</button>
    </div>
    <div class="students-grid">
      ${list.map(s => studentCard(s)).join('')}
    </div>
    ${list.length===0?'<div class="empty-state" style="padding:48px;">Nenhum aluno encontrado.</div>':''}
  </div>`;
}

function studentCard(s) {
  const statusBadge = s.status === 'active' ? '<span class="badge badge-active">Ativo</span>' : '<span class="badge badge-paused">Pausado</span>';
  return `<div class="card student-card">
    <div class="student-card-top">
      <div class="student-info">
        <img src="${s.avatar}" style="width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--gray-100);" onerror="this.style.display='none'" />
        <div><div class="student-name">${s.name}</div><div class="student-age">${s.age} anos</div></div>
      </div>
      <div class="dropdown" id="dd-${s.id}">
        <button class="btn btn-ghost" style="padding:6px;width:30px;height:30px;" onclick="toggleDD('dd-${s.id}')"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><circle cx="12" cy="5" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="19" r="1" fill="currentColor"/></svg></button>
        <div class="dropdown-menu" id="dd-menu-${s.id}">
          <button class="dropdown-item" onclick="navigate('student-profile','${s.id}');closeDD('dd-${s.id}')">Ver Perfil</button>
          <button class="dropdown-item" onclick="toast('Em breve: edição de aluno!');closeDD('dd-${s.id}')">Editar</button>
          <button class="dropdown-item" onclick="navigate('communication');closeDD('dd-${s.id}')">Enviar Mensagem</button>
          <button class="dropdown-item danger" onclick="toast('Atendimento pausado!');closeDD('dd-${s.id}')">Pausar Atendimento</button>
        </div>
      </div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">${statusBadge}<span style="font-size:12px;color:var(--muted);">Última: ${fmtDate(s.lastSession)}</span></div>
    ${s.diagnosis ? `<div class="diagnosis-pill">${s.diagnosis}</div>` : ''}
    <div style="margin:10px 0;">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span style="font-size:13px;">Progresso Geral</span><span style="font-size:13px;font-weight:600;">${s.progress}%</span></div>
      <div class="progress-track"><div class="progress-fill fill-gradient" style="width:${s.progress}%"></div></div>
      <div style="font-size:12px;color:var(--muted);margin-top:4px;">${s.activitiesCompleted} de ${s.totalActivities} atividades</div>
    </div>
    <div class="tags-row">${s.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    <div class="actions-row">
      <button class="btn btn-outline btn-sm" style="flex:1;" onclick="navigate('student-profile','${s.id}')">Ver Perfil</button>
      ${s.nextSession ? `<button class="btn btn-primary btn-sm" style="flex:1;" onclick="toast('Sessão agendada!')"><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2' style='width:13px;height:13px;'><rect x='3' y='4' width='18' height='18' rx='2' ry='2'/><line x1='16' y1='2' x2='16' y2='6'/><line x1='8' y1='2' x2='8' y2='6'/><line x1='3' y1='10' x2='21' y2='10'/></svg>Próxima Sessão</button>` : ''}
    </div>
  </div>`;
}

/* ════════════════════════════════════
   STUDENT PROFILE
════════════════════════════════════ */
function renderStudentProfile(id) {
  const s = students.find(s => s.id === id);
  if (!s) return '<div class="empty-state">Aluno não encontrado.</div>';
  const statusBadge = s.status === 'active' ? '<span class="badge badge-active" style="font-size:12px;">Ativo</span>' : '<span class="badge badge-paused" style="font-size:12px;">Pausado</span>';

  const tabContent = {
    'overview':      renderOverviewTab(s),
    'goals':         renderGoalsTab(s),
    'trail':         renderTrailTabEmbed(s),
    'communication': renderCommTab(s),
  };

  return `
    <div class="profile-header">
      <button class="btn btn-ghost btn-sm" onclick="navigate('students')" style="margin-bottom:16px;">← Voltar para Alunos</button>
      <div class="profile-top">
        <img src="${s.avatar}" class="profile-avatar" onerror="this.style.display='none'" />
        <div style="flex:1;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
            <div class="profile-name">${s.name}</div>
            ${statusBadge}
          </div>
          <div class="profile-meta">${s.age} anos • ${s.diagnosis || 'Sem diagnóstico'} • Última sessão: ${fmtDate(s.lastSession)}</div>
          <div class="tags-row">${s.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        </div>
        <div class="profile-actions">
          <button class="btn btn-outline btn-sm" onclick="navigate('activity-trail','${s.id}')">Ver Trilha Completa</button>
          <button class="btn btn-primary btn-sm" onclick="toast('Sessão agendada!')">Agendar Sessão</button>
        </div>
      </div>
    </div>
    <div class="tabs">
      ${[{id:'overview',label:'Visão Geral'},{id:'goals',label:'Metas'},{id:'trail',label:'Trilha de Atividades'},{id:'communication',label:'Comunicação'}].map(t=>`<button class="tab-btn ${activeProfileTab===t.id?'active':''}" onclick="activeProfileTab='${t.id}';renderMain()">${t.label}</button>`).join('')}
    </div>
    <div class="tab-content active">${tabContent[activeProfileTab] || ''}</div>
  `;
}

function renderOverviewTab(s) {
  const goalList = (goals[s.id] || []);
  const active = goalList.filter(g=>g.status==='em-andamento').length;
  const done   = goalList.filter(g=>g.status==='concluida').length;
  return `
    <div class="grid-2" style="margin-bottom:24px;">
      <div class="card" style="padding:24px;">
        <div class="section-title" style="margin-bottom:16px;">Progresso Geral</div>
        <div style="font-size:40px;font-weight:700;color:var(--primary);margin-bottom:4px;">${s.progress}%</div>
        <div style="font-size:13px;color:var(--muted);margin-bottom:12px;">${s.activitiesCompleted} de ${s.totalActivities} atividades</div>
        <div class="progress-track" style="height:10px;"><div class="progress-fill fill-gradient" style="width:${s.progress}%"></div></div>
      </div>
      <div class="card" style="padding:24px;">
        <div class="section-title" style="margin-bottom:16px;">Resumo de Metas</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;text-align:center;">
          <div><div style="font-size:24px;font-weight:700;color:var(--blue-600);">${active}</div><div style="font-size:12px;color:var(--muted);">Em andamento</div></div>
          <div><div style="font-size:24px;font-weight:700;color:var(--orange-600);">${goalList.filter(g=>g.status==='pendente').length}</div><div style="font-size:12px;color:var(--muted);">Pendentes</div></div>
          <div><div style="font-size:24px;font-weight:700;color:var(--green-600);">${done}</div><div style="font-size:12px;color:var(--muted);">Concluídas</div></div>
        </div>
        <hr class="divider" />
        <button class="btn btn-outline btn-sm" style="width:100%;" onclick="activeProfileTab='goals';renderMain()">Gerenciar Metas →</button>
      </div>
    </div>
    <div class="card" style="padding:24px;">
      <div class="section-title" style="margin-bottom:16px;">Próxima Sessão</div>
      ${s.nextSession ? `<div style="display:flex;align-items:center;gap:16px;"><div style="padding:16px 20px;background:var(--blue-50);border-radius:var(--radius);text-align:center;"><div style="font-size:28px;font-weight:700;color:var(--primary);">${new Date(s.nextSession).getDate()}</div><div style="font-size:12px;color:var(--blue-700);text-transform:uppercase;">${new Date(s.nextSession).toLocaleDateString('pt-BR',{month:'short'})}</div></div><div><div style="font-weight:500;margin-bottom:4px;">${s.name}</div><div style="font-size:13px;color:var(--muted);">Sessão agendada</div></div></div>` : '<p style="font-size:13px;color:var(--muted);">Nenhuma sessão agendada.</p>'}
    </div>`;
}

/* ════════════════════════════════════
   GOALS TAB ← MAIN NEW FEATURE
════════════════════════════════════ */
function renderGoalsTab(s) {
  const gl = goals[s.id] || [];
  const active  = gl.filter(g=>g.status==='em-andamento').length;
  const pending = gl.filter(g=>g.status==='pendente').length;
  const done    = gl.filter(g=>g.status==='concluida').length;

  return `
    <div class="goals-header">
      <div style="font-size:18px;font-weight:700;">Trilha de Metas — ${s.name}</div>
      <button class="btn btn-primary btn-sm" onclick="openNewGoal('${s.id}')"><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2' style='width:14px;height:14px;'><line x1='12' y1='5' x2='12' y2='19'/><line x1='5' y1='12' x2='19' y2='12'/></svg> Nova Meta</button>
    </div>
    <div class="summary-strip">
      <div class="card summary-box"><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--muted);margin-bottom:6px;">Em andamento</div><div class="summary-num" style="color:var(--blue-600);">${active}</div></div>
      <div class="card summary-box"><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--muted);margin-bottom:6px;">Pendentes</div><div class="summary-num" style="color:var(--orange-600);">${pending}</div></div>
      <div class="card summary-box"><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--muted);margin-bottom:6px;">Concluídas</div><div class="summary-num" style="color:var(--green-600);">${done}</div></div>
    </div>
    ${gl.length === 0 ? '<div class="card empty-state" style="padding:40px;">Nenhuma meta cadastrada ainda. Crie a primeira!</div>' : gl.map(g => goalCardHTML(s.id, g)).join('')}
  `;
}

function renderGoalDetail(studentId, goalId) {
  const s = students.find(st => st.id === studentId);
  const goal = (goals[studentId] || []).find(g => g.id === goalId);
  if (!s || !goal) return '<div class="empty-state">Meta não encontrada.</div>';

  // Gerar HTML das sessões
  const sessionsHtml = goal.sessions.map((sess, i) => {
    // Materiais da sessão
    const materialsList = (sess.materials || []).length === 0
      ? '<p style="font-size:12px;color:var(--muted);">Nenhum material anexado.</p>'
      : `<ul style="list-style:none;padding:0;">${sess.materials.map(m =>
          `<li style="margin-bottom:6px;font-size:13px;">
            <a href="${m.url}" target="_blank" style="font-weight:500;">${m.name}</a>
            ${m.description ? `<span style="color:var(--muted);"> – ${m.description}</span>` : ''}
          </li>`
        ).join('')}</ul>`;

    return `
      <div class="card" style="margin-bottom:20px;padding:24px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <h3 style="margin:0;">📅 Sessão ${i+1} – ${fmtDate(sess.date)}</h3>
          <div>
            <button class="btn btn-outline btn-sm" onclick="openAddMaterial('${studentId}','${goalId}',${i})">📎 Adicionar Material</button>
          </div>
        </div>
        <div class="session-fields" style="margin-top:12px;">
          <div><span class="field-label">Atividades realizadas</span><p class="field-text">${sess.activities || '—'}</p></div>
          <div><span class="field-label">Observações</span><p class="field-text">${sess.obs || '—'}</p></div>
          <div><span class="field-label">Estratégias utilizadas</span><p class="field-text">${sess.strategies || '—'}</p></div>
          <div><span class="field-label">Próximos passos</span><p class="field-text">${sess.next || '—'}</p></div>
          <div style="margin-top:12px;">
            <span class="field-label">📁 Materiais utilizados</span>
            <div style="margin-top:8px;">${materialsList}</div>
          </div>
        </div>
      </div>`;
  }).join('');

  return headerHTML(`${goal.title} – ${s.name}`, false) + `
    <div class="page-body">
      <button class="btn btn-ghost btn-sm" onclick="navigate('student-profile','${studentId}','goals')" style="margin-bottom:20px;">← Voltar para Metas</button>
      <div class="card" style="padding:24px;margin-bottom:24px;">
        <div style="display:flex;align-items:center;gap:12px;">
          <span class="badge badge-${goal.status}" style="font-size:13px;">${goal.status === 'em-andamento' ? 'Em andamento' : goal.status === 'pendente' ? 'Pendente' : 'Concluída'}</span>
          <span style="font-size:13px;color:var(--muted);">Progresso: ${goal.progress}%</span>
          <span style="font-size:13px;color:var(--muted);">Prazo: ${fmtDate(goal.deadline)}</span>
        </div>
        <p style="margin-top:12px;font-size:14px;color:var(--gray-700);">${goal.desc}</p>
      </div>
      <h2 style="margin-bottom:20px;">🧩 Sessões de acompanhamento (${goal.sessions.length})</h2>
      ${goal.sessions.length === 0
        ? '<div class="empty-state" style="padding:40px;">Nenhuma sessão registrada nesta meta.</div>'
        : sessionsHtml}
    </div>`;
}

function goalCardHTML(studentId, g) {
  const statusLabels = { 'em-andamento':'Em andamento', 'pendente':'Pendente', 'concluida':'Concluída' };
  const sessCount = g.sessions.length;
  const sessHTML = sessCount === 0
    ? '<div class="empty-state">Nenhuma sessão registrada para esta meta ainda.</div>'
    : g.sessions.map((s,i) => `
        <div class="session-note">
          <div class="session-note-head">
            <span class="session-date-label">📅 Sessão ${i+1} — ${fmtDate(s.date)}</span>
            <button class="btn btn-danger btn-xs" onclick="deleteSession('${studentId}','${g.id}',${i})">✕ Remover</button>
          </div>
          <div class="session-fields">
            ${s.activities ? `<div><span class="field-label">Atividades</span><p class="field-text">${s.activities}</p></div>` : ''}
            ${s.obs        ? `<div><span class="field-label">Observações</span><p class="field-text">${s.obs}</p></div>` : ''}
            ${s.strategies ? `<div><span class="field-label">Estratégias utilizadas</span><p class="field-text">${s.strategies}</p></div>` : ''}
            ${s.next       ? `<div><span class="field-label">Próximos passos</span><p class="field-text">${s.next}</p></div>` : ''}
          </div>
        </div>`).join('');

  return `
    <div class="card goal-card" id="gc-${g.id}">
      <div class="goal-card-head" onclick="toggleGoal('${g.id}')">
        <div class="goal-card-info">
          <div class="goal-card-top">
            <span class="goal-card-title">${g.title}</span>
            <span class="badge badge-${g.status}">${statusLabels[g.status]}</span>
          </div>
          <p class="goal-card-desc">${g.desc}</p>
          <div class="goal-card-footer">
            <div class="progress-track" style="flex:1;height:6px;"><div class="progress-fill fill-blue" style="width:${g.progress}%"></div></div>
            <span style="font-size:12px;font-weight:600;color:var(--gray-700);">${g.progress}%</span>
            <span style="font-size:12px;color:var(--muted);">📆 ${fmtDate(g.deadline)}</span>
          </div>
        </div>
        <div class="goal-card-actions">
          <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); navigate('goal-detail','${studentId}','','${g.id}')">🔍 Detalhes</button>
          <button class="btn btn-outline btn-sm" onclick="openEditGoal(event,'${studentId}','${g.id}')">✏️ Editar</button>
          <span class="chevron" id="chev-${g.id}">▾</span>
        </div>
      </div>
      <div class="goal-card-body" id="gb-${g.id}">
        <div class="sessions-header">
          <span class="sessions-label">📋 Conteúdo das Sessões (${sessCount})</span>
          <button class="btn btn-outline btn-sm" onclick="openAddSession('${studentId}','${g.id}')">+ Registrar Sessão</button>
        </div>
        ${sessHTML}
      </div>
    </div>`;
}

/* Render Trail */
function renderTrailTabEmbed(s) {
  return `<div style="padding-bottom:24px;">
    <div class="trail-header-card" style="border-radius:var(--radius-lg);box-shadow:none;">
      <div class="trail-header-inner">
        <div><div class="trail-title">Jornada de Aprendizado</div><div class="trail-sub">Continue progredindo na trilha!</div></div>
        <div style="text-align:right;"><div class="trail-pct">${s.progress}%</div><div class="trail-pct-label">Concluído</div></div>
      </div>
      <div class="trail-bar-track"><div class="trail-bar-fill" style="width:${s.progress}%"></div></div>
      <div class="trail-bar-info"><span>${s.activitiesCompleted} atividades concluídas</span><span>${s.totalActivities - s.activitiesCompleted} restantes</span></div>
    </div>
    <div class="trail-path">
      <div class="trail-line"></div>
      ${activities.map((a,i) => trailItem(a, i)).join('')}
    </div>
    <button class="btn btn-primary" style="margin-top:24px;" onclick="navigate('activity-trail','${s.id}')">Ver Trilha Completa</button>
  </div>`;
}

function trailItem(a, i) {
  const isRight = i % 2 !== 0;
  const nodeClass = a.status === 'completed' ? 'completed' : a.status === 'in-progress' ? 'in-progress' : a.status === 'available' ? 'available' : 'locked';
  const typeColors = { reading:'badge-reading', writing:'badge-writing', math:'badge-math', cognition:'badge-cognition', motor:'badge-motor', social:'badge-social' };
  const typeLabels = { reading:'Leitura', writing:'Escrita', math:'Matemática', cognition:'Cognição', motor:'Motor', social:'Social' };
  const diffLabels = { easy:'Fácil', medium:'Médio', hard:'Difícil' };
  const nodeIcon = a.status === 'completed'
    ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`
    : a.status === 'in-progress'
    ? `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>`
    : a.status === 'available'
    ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`;

  const starHTML = a.status === 'completed' ? `<div class="trail-star"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>` : '';

  const actionBtn = a.status !== 'locked' ? `<button class="btn ${a.status==='completed'?'btn-outline':'btn-primary'} btn-sm" onclick="toast('${a.status==='completed'?'Revisando':'Iniciando'} atividade!')">${a.status==='completed'?'Revisar':a.status==='in-progress'?'Continuar':'Iniciar'}</button>` : '';

  return `<div class="trail-item ${isRight?'right':''}" style="margin-bottom:40px;">
    <div class="trail-item-card">
      <div class="activity-card card ${a.status==='locked'?'locked':''}">
        <div class="activity-type-badges"><span class="badge ${typeColors[a.type]}">${typeLabels[a.type]}</span><span class="badge badge-obs">${diffLabels[a.difficulty]}</span></div>
        <div style="font-size:16px;font-weight:600;margin-bottom:6px;">${a.title}</div>
        <p style="font-size:13px;color:var(--muted);margin-bottom:16px;">${a.description}</p>
        <div style="display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid var(--border);">
          <span style="font-size:13px;color:var(--muted);">⏱ ${a.estimatedTime} min ${a.completedDate?`· ✓ ${fmtDate(a.completedDate)}`:''}</span>
          ${actionBtn}
        </div>
      </div>
    </div>
    <div class="trail-node ${nodeClass}" style="position:relative;">${nodeIcon}${starHTML}</div>
    <div class="trail-spacer"></div>
  </div>`;
}

/* Atividade principal da Render Trail */
function renderActivityTrail(id) {
  const s = students.find(s => s.id === id);
  if (!s) return '<div class="empty-state">Aluno não encontrado.</div>';
  return headerHTML(`Trilha de ${s.name}`, false, {label:'Nova Atividade', fn:"toast('Criando nova atividade!')"}) + `<div class="page-body">
    <button class="btn btn-ghost btn-sm" onclick="navigate('student-profile','${s.id}','trail')" style="margin-bottom:20px;">← Voltar ao Perfil</button>
    <div class="trail-header-card" style="margin-bottom:40px;">
      <div class="trail-header-inner">
        <div><div class="trail-title">Jornada de Aprendizado</div><div class="trail-sub">Continue progredindo na trilha, ${s.name}!</div></div>
        <div style="text-align:right;"><div class="trail-pct">${s.progress}%</div><div class="trail-pct-label">Concluído</div></div>
      </div>
      <div class="trail-bar-track"><div class="trail-bar-fill" style="width:${s.progress}%"></div></div>
      <div class="trail-bar-info"><span>${s.activitiesCompleted} concluídas</span><span>${s.totalActivities - s.activitiesCompleted} restantes</span></div>
    </div>
    <div class="trail-path">
      <div class="trail-line"></div>
      ${activities.map((a,i) => trailItem(a,i)).join('')}
    </div>
    <div class="card" style="padding:24px;margin-top:40px;">
      <div class="section-title" style="margin-bottom:16px;">🏆 Conquistas Desbloqueadas</div>
      <div class="grid-4">
        ${[{n:'Primeira Atividade',unlocked:true},{n:'5 Atividades',unlocked:true},{n:'10 Atividades',unlocked:true},{n:'Trilha Completa',unlocked:false}].map(a=>`<div style="padding:16px;border-radius:var(--radius);text-align:center;background:${a.unlocked?'linear-gradient(135deg,var(--blue-600),var(--blue-700))':'var(--gray-100)'};color:${a.unlocked?'#fff':'var(--muted)'};">
          <div style="font-size:28px;margin-bottom:6px;">${a.unlocked?'🏅':'🔒'}</div>
          <p style="font-size:12px;font-weight:500;">${a.n}</p>
        </div>`).join('')}
      </div>
    </div>
  </div>`;
}

/* Comunicação */
function renderCommunication() {
  const noteTypeLabel = { observation:'Observação', evaluation:'Avaliação', communication:'Comunicação' };
  const activeStudents = students.filter(s => s.status === 'active');
  return headerHTML('Comunicação Interna', false) + `<div class="page-body">
    <div class="comm-grid">
      <div class="card" style="padding:24px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:16px;"><div class="section-title">Alunos</div></div>
        <input class="form-control" style="margin-bottom:12px;" type="text" placeholder="Buscar aluno..." />
        ${activeStudents.map(s=>`<button onclick="navigate('student-profile','${s.id}','communication')" style="display:flex;align-items:center;gap:10px;width:100%;padding:10px 12px;border:none;background:transparent;border-radius:var(--radius);cursor:pointer;transition:background 0.1s;text-align:left;margin-bottom:2px;" onmouseover="this.style.background='var(--gray-50)'" onmouseout="this.style.background='transparent'"><img src="${s.avatar}" style="width:40px;height:40px;border-radius:50%;object-fit:cover;" onerror="this.style.display='none'" /><div style="flex:1;"><div style="font-size:13px;font-weight:500;">${s.name}</div><div style="font-size:12px;color:var(--muted);">${notes.filter(n=>n.studentId===s.id).length} observações</div></div></button>`).join('')}
      </div>
      <div>
        <div class="card" style="padding:24px;margin-bottom:16px;">
          <div class="section-title" style="margin-bottom:16px;">Nova Observação</div>
          <textarea class="form-control" placeholder="Escreva sua observação, avaliação ou comunicação..." style="margin-bottom:12px;"></textarea>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div style="display:flex;gap:8px;"><button class="btn btn-outline btn-sm">📎 Anexar</button><button class="btn btn-outline btn-sm">🏷 Tags</button></div>
            <button class="btn btn-primary btn-sm" onclick="toast('Observação enviada!')">📤 Enviar</button>
          </div>
        </div>
        ${notes.map(n => {
          const stu = students.find(s => s.studentId === n.studentId || s.id === n.studentId);
          const badgeMap = { observation:'badge-active', evaluation:'badge-andamento', communication:'badge-pendente' };
          return `<div class="card note-card" style="margin-bottom:12px;">
            <div class="note-author">
              <img src="${n.authorAvatar}" style="width:48px;height:48px;border-radius:50%;object-fit:cover;" onerror="this.style.display='none'" />
              <div style="flex:1;">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px;"><span style="font-weight:600;font-size:14px;">${n.authorName}</span><span style="color:var(--muted);">•</span><span style="font-size:13px;color:var(--muted);">${n.authorRole}</span></div>
                <div class="note-meta">${new Date(n.date).toLocaleDateString('pt-BR',{day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'})}</div>
              </div>
              <span class="badge badge-obs badge-sm">${noteTypeLabel[n.type]}</span>
            </div>
            ${stu ? `<div style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;background:var(--gray-50);border-radius:var(--radius-sm);font-size:12px;font-weight:500;margin-bottom:10px;"><img src="${stu.avatar}" style="width:20px;height:20px;border-radius:50%;object-fit:cover;" onerror="this.style.display='none'" />${stu.name}</div>` : ''}
            <p class="note-content">${n.content}</p>
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;">${(n.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
            <div class="note-footer">
              <button class="btn btn-ghost btn-sm">💬 Comentar</button>
              <button class="btn btn-ghost btn-sm">📌 Fixar</button>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>
  </div>`;
}
/* Renderizador de CommTab */
function renderCommTab(s) {
  const studentNotes = notes.filter(n => n.studentId === s.id);
  return `<div>
    <div class="section-title" style="margin-bottom:16px;">Observações sobre ${s.name}</div>
    <div class="card" style="padding:24px;margin-bottom:16px;">
      <div class="section-title" style="margin-bottom:12px;font-size:14px;">Nova Observação</div>
      <textarea class="form-control" placeholder="Escreva sua observação..." style="margin-bottom:12px;"></textarea>
      <button class="btn btn-primary btn-sm" onclick="toast('Observação salva!')">Salvar</button>
    </div>
    ${studentNotes.length === 0 ? '<div class="empty-state">Nenhuma observação registrada.</div>' : studentNotes.map(n=>`<div class="card note-card" style="margin-bottom:12px;"><div class="note-author"><img src="${n.authorAvatar}" style="width:40px;height:40px;border-radius:50%;object-fit:cover;" onerror="this.style.display='none'" /><div><div style="font-weight:600;font-size:13px;">${n.authorName}</div><div style="font-size:12px;color:var(--muted);">${new Date(n.date).toLocaleDateString('pt-BR')}</div></div></div><p class="note-content">${n.content}</p></div>`).join('')}
  </div>`;
}

/* Place Holder */
function renderPlaceholder(title, icon, desc, features) {
  return headerHTML(title, false) + `<div class="placeholder-wrap"><div class="card placeholder-card"><div class="placeholder-icon">${icons[icon]||''}</div><h2 style="font-size:22px;font-weight:600;margin-bottom:12px;">${title}</h2><p style="color:var(--muted);margin-bottom:24px;">${desc}</p><ul class="feature-list">${features.map(f=>`<li><div class="dot"></div>${f}</li>`).join('')}</ul><div style="display:flex;gap:12px;justify-content:center;"><button class="btn btn-primary" onclick="navigate('dashboard')">Voltar ao Dashboard</button><button class="btn btn-outline" onclick="navigate('students')">Ver Alunos</button></div></div></div>`;
}

/* Lógica modal */
let modalStudentId = null;

function openNewGoal(studentId) {
  modalStudentId = studentId;
  currentGoalId = null;
  document.getElementById('modal-goal-ttl').textContent = 'Nova Meta';
  document.getElementById('g-save-btn').textContent = 'Criar Meta';
  document.getElementById('g-title').value = '';
  document.getElementById('g-desc').value  = '';
  document.getElementById('g-deadline').value = '';
  document.getElementById(  'g-status').value   = 'pendente';
  document.getElementById('g-progress').value = 0;
  document.getElementById('g-prog-val').textContent = '0%';
  openModal('modal-goal');
}

function openEditGoal(event, studentId, goalId) {
  event.stopPropagation();
  modalStudentId = studentId;
  currentGoalId = goalId;
  const g = (goals[studentId]||[]).find(g=>g.id===goalId);
  if (!g) return;
  document.getElementById('modal-goal-ttl').textContent = 'Editar Meta';
  document.getElementById('g-save-btn').textContent = 'Salvar Alterações';
  document.getElementById('g-title').value    = g.title;
  document.getElementById('g-desc').value     = g.desc;
  document.getElementById('g-deadline').value = g.deadline;
  document.getElementById('g-status').value   = g.status;
  document.getElementById('g-progress').value = g.progress;
  document.getElementById('g-prog-val').textContent = g.progress + '%';
  openModal('modal-goal');
}

function saveGoal(e) {
  e.preventDefault();
  const title    = document.getElementById('g-title').value.trim();
  const desc     = document.getElementById('g-desc').value.trim();
  const deadline = document.getElementById('g-deadline').value;
  const status   = document.getElementById('g-status').value;
  const progress = parseInt(document.getElementById('g-progress').value);
  if (!goals[modalStudentId]) goals[modalStudentId] = [];
  if (currentGoalId) {
    const g = goals[modalStudentId].find(g=>g.id===currentGoalId);
    if (g) Object.assign(g, {title,desc,deadline,status,progress});
    toast('Meta atualizada!');
  } else {
    goals[modalStudentId].push({ id:'g'+Date.now(), title, desc, deadline, status, progress, sessions:[] });
    toast('Nova meta criada!');
  }
  closeModal('modal-goal');
  renderMain();
}

/* Sessão da Lógica Modal */
let sessionGoalId    = null;
let sessionStudentId = null;

function openAddSession(studentId, goalId) {
  sessionStudentId = studentId;
  sessionGoalId    = goalId;
  document.getElementById('s-date').value       = new Date().toISOString().split('T')[0];
  document.getElementById('s-activities').value = '';
  document.getElementById('s-obs').value        = '';
  document.getElementById('s-strategies').value = '';
  document.getElementById('s-next').value       = '';
  openModal('modal-session');
}

function saveSession(e) {
  e.preventDefault();
  const g = (goals[sessionStudentId]||[]).find(g=>g.id===sessionGoalId);
  if (!g) return;
  g.sessions.push({
    date:       document.getElementById('s-date').value,
    activities: document.getElementById('s-activities').value.trim(),
    obs:        document.getElementById('s-obs').value.trim(),
    strategies: document.getElementById('s-strategies').value.trim(),
    next:       document.getElementById('s-next').value.trim(),
  });
  closeModal('modal-session');
  renderMain();
  requestAnimationFrame(() => {
    const body = document.getElementById('gb-' + sessionGoalId);
    const chev = document.getElementById('chev-' + sessionGoalId);
    if (body) { body.classList.add('open'); chev && chev.classList.add('open'); }
  });
  toast('Sessão registrada!');
}

function deleteSession(studentId, goalId, idx) {
  if (!confirm('Remover este registro de sessão?')) return;
  const g = (goals[studentId]||[]).find(g=>g.id===goalId);
  if (g) g.sessions.splice(idx,1);
  renderMain();
  requestAnimationFrame(() => {
    const body = document.getElementById('gb-' + goalId);
    const chev = document.getElementById('chev-' + goalId);
    if (body) { body.classList.add('open'); chev && chev.classList.add('open'); }
  });
  toast('Sessão removida.');
}

function renderGoalDetail(studentId, goalId) {
  const s = students.find(st => st.id === studentId);
  const goal = (goals[studentId] || []).find(g => g.id === goalId);
  if (!s || !goal) return '<div class="empty-state">Meta não encontrada.</div>';

  // Gera HTML de cada sessão
  const sessionsHtml = goal.sessions.map((sess, i) => {
    const materialsList = (sess.materials || []).length === 0
      ? '<p style="font-size:12px;color:var(--muted);">Nenhum material anexado.</p>'
      : `<ul style="list-style:none;padding:0;">${sess.materials.map(m =>
          `<li style="margin-bottom:6px;font-size:13px;">
            <a href="${m.url}" target="_blank" style="font-weight:500;">${m.name}</a>
            ${m.description ? `<span style="color:var(--muted);"> – ${m.description}</span>` : ''}
          </li>`
        ).join('')}</ul>`;

    return `
      <div class="card" style="margin-bottom:20px;padding:24px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <h3 style="margin:0;">📅 Sessão ${i+1} – ${fmtDate(sess.date)}</h3>
          <button class="btn btn-outline btn-sm" onclick="openAddMaterial('${studentId}','${goalId}',${i})">📎 Adicionar Material</button>
        </div>
        <div class="session-fields" style="margin-top:12px;">
          <div><span class="field-label">Atividades realizadas</span><p class="field-text">${sess.activities || '—'}</p></div>
          <div><span class="field-label">Observações</span><p class="field-text">${sess.obs || '—'}</p></div>
          <div><span class="field-label">Estratégias utilizadas</span><p class="field-text">${sess.strategies || '—'}</p></div>
          <div><span class="field-label">Próximos passos</span><p class="field-text">${sess.next || '—'}</p></div>
          <div style="margin-top:12px;">
            <span class="field-label">📁 Materiais utilizados</span>
            <div style="margin-top:8px;">${materialsList}</div>
          </div>
        </div>
      </div>`;
  }).join('');

  return headerHTML(`${goal.title} – ${s.name}`, false) + `
    <div class="page-body">
      <button class="btn btn-ghost btn-sm" onclick="navigate('student-profile','${studentId}','goals')" style="margin-bottom:20px;">← Voltar para Metas</button>
      <div class="card" style="padding:24px;margin-bottom:24px;">
        <div style="display:flex;align-items:center;gap:12px;">
          <span class="badge badge-${goal.status}" style="font-size:13px;">${goal.status === 'em-andamento' ? 'Em andamento' : goal.status === 'pendente' ? 'Pendente' : 'Concluída'}</span>
          <span style="font-size:13px;color:var(--muted);">Progresso: ${goal.progress}%</span>
          <span style="font-size:13px;color:var(--muted);">Prazo: ${fmtDate(goal.deadline)}</span>
        </div>
        <p style="margin-top:12px;font-size:14px;color:var(--gray-700);">${goal.desc}</p>
      </div>
      <h2 style="margin-bottom:20px;">🧩 Sessões de acompanhamento (${goal.sessions.length})</h2>
      ${goal.sessions.length === 0
        ? '<div class="empty-state" style="padding:40px;">Nenhuma sessão registrada nesta meta.</div>'
        : sessionsHtml}
    </div>`;
}

function renderGoalDetail(studentId, goalId) {
  const s = students.find(st => st.id === studentId);
  const goal = (goals[studentId] || []).find(g => g.id === goalId);
  if (!s || !goal) return '<div class="empty-state">Meta não encontrada.</div>';

  // Gera HTML de cada sessão
  const sessionsHtml = goal.sessions.map((sess, i) => {
    const materialsList = (sess.materials || []).length === 0
      ? '<p style="font-size:12px;color:var(--muted);">Nenhum material anexado.</p>'
      : `<ul style="list-style:none;padding:0;">${sess.materials.map(m =>
          `<li style="margin-bottom:6px;font-size:13px;">
            <a href="${m.url}" target="_blank" style="font-weight:500;">${m.name}</a>
            ${m.description ? `<span style="color:var(--muted);"> – ${m.description}</span>` : ''}
          </li>`
        ).join('')}</ul>`;

    return `
      <div class="card" style="margin-bottom:20px;padding:24px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <h3 style="margin:0;">📅 Sessão ${i+1} – ${fmtDate(sess.date)}</h3>
          <button class="btn btn-outline btn-sm" onclick="openAddMaterial('${studentId}','${goalId}',${i})">📎 Adicionar Material</button>
        </div>
        <div class="session-fields" style="margin-top:12px;">
          <div><span class="field-label">Atividades realizadas</span><p class="field-text">${sess.activities || '—'}</p></div>
          <div><span class="field-label">Observações</span><p class="field-text">${sess.obs || '—'}</p></div>
          <div><span class="field-label">Estratégias utilizadas</span><p class="field-text">${sess.strategies || '—'}</p></div>
          <div><span class="field-label">Próximos passos</span><p class="field-text">${sess.next || '—'}</p></div>
          <div style="margin-top:12px;">
            <span class="field-label">📁 Materiais utilizados</span>
            <div style="margin-top:8px;">${materialsList}</div>
          </div>
        </div>
      </div>`;
  }).join('');

  return headerHTML(`${goal.title} – ${s.name}`, false) + `
    <div class="page-body">
      <button class="btn btn-ghost btn-sm" onclick="navigate('student-profile','${studentId}','goals')" style="margin-bottom:20px;">← Voltar para Metas</button>
      <div class="card" style="padding:24px;margin-bottom:24px;">
        <div style="display:flex;align-items:center;gap:12px;">
          <span class="badge badge-${goal.status}" style="font-size:13px;">${goal.status === 'em-andamento' ? 'Em andamento' : goal.status === 'pendente' ? 'Pendente' : 'Concluída'}</span>
          <span style="font-size:13px;color:var(--muted);">Progresso: ${goal.progress}%</span>
          <span style="font-size:13px;color:var(--muted);">Prazo: ${fmtDate(goal.deadline)}</span>
        </div>
        <p style="margin-top:12px;font-size:14px;color:var(--gray-700);">${goal.desc}</p>
      </div>
      <h2 style="margin-bottom:20px;">🧩 Sessões de acompanhamento (${goal.sessions.length})</h2>
      ${goal.sessions.length === 0
        ? '<div class="empty-state" style="padding:40px;">Nenhuma sessão registrada nesta meta.</div>'
        : sessionsHtml}
    </div>`;
}

function openAddMaterial(studentId, goalId, sessionIndex) {
  document.getElementById('mat-student-id').value = studentId;
  document.getElementById('mat-goal-id').value = goalId;
  document.getElementById('mat-session-index').value = sessionIndex;
  document.getElementById('mat-name').value = '';
  document.getElementById('mat-url').value = '';
  document.getElementById('mat-desc').value = '';
  openModal('modal-material');
}

function saveMaterial(e) {
  e.preventDefault();
  const studentId = document.getElementById('mat-student-id').value;
  const goalId = document.getElementById('mat-goal-id').value;
  const idx = parseInt(document.getElementById('mat-session-index').value);
  const goal = (goals[studentId] || []).find(g => g.id === goalId);
  if (!goal || !goal.sessions[idx]) return;

  if (!goal.sessions[idx].materials) {
    goal.sessions[idx].materials = [];
  }
  goal.sessions[idx].materials.push({
    name: document.getElementById('mat-name').value.trim(),
    url: document.getElementById('mat-url').value.trim(),
    description: document.getElementById('mat-desc').value.trim()
  });
  closeModal('modal-material');
  renderMain();
  toast('Material adicionado!');
}

/* UI HELPERS */
function toggleGoal(id) {
  document.getElementById('gb-'+id)?.classList.toggle('open');
  document.getElementById('chev-'+id)?.classList.toggle('open');
}
function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
function toggleDD(id) {
  document.querySelectorAll('.dropdown-menu').forEach(m => { if(m.id !== 'dd-menu-'+id.replace('dd-','')) m.classList.remove('open'); });
  document.getElementById('dd-menu-'+id.replace('dd-',''))?.classList.toggle('open');
}
function closeDD(id) { document.getElementById('dd-menu-'+id.replace('dd-',''))?.classList.remove('open'); }
document.addEventListener('click', e => { if (!e.target.closest('.dropdown')) document.querySelectorAll('.dropdown-menu').forEach(m=>m.classList.remove('open')); });
document.querySelectorAll('.modal-overlay').forEach(el => el.addEventListener('click', e => { if(e.target===el) el.classList.remove('open'); }));

let toastT;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => el.classList.remove('show'), 2600);
}

function fmtDate(str) {
  if (!str) return '—';
  const [y,m,d] = str.split('-');
  return `${d}/${m}/${y}`;
}

function openAddMaterial(studentId, goalId, sessionIndex) {
  document.getElementById('mat-student-id').value = studentId;
  document.getElementById('mat-goal-id').value = goalId;
  document.getElementById('mat-session-index').value = sessionIndex;
  document.getElementById('mat-name').value = '';
  document.getElementById('mat-url').value = '';
  document.getElementById('mat-desc').value = '';
  openModal('modal-material');
}

function saveMaterial(e) {
  e.preventDefault();
  const studentId = document.getElementById('mat-student-id').value;
  const goalId = document.getElementById('mat-goal-id').value;
  const idx = parseInt(document.getElementById('mat-session-index').value);
  const goal = (goals[studentId] || []).find(g => g.id === goalId);
  if (!goal || !goal.sessions[idx]) return;

  if (!goal.sessions[idx].materials) {
    goal.sessions[idx].materials = [];
  }
  goal.sessions[idx].materials.push({
    name: document.getElementById('mat-name').value.trim(),
    url: document.getElementById('mat-url').value.trim(),
    description: document.getElementById('mat-desc').value.trim()
  });
  closeModal('modal-material');
  renderMain();
  toast('Material adicionado!');
}
/* ════════════════════════════════════
   INIT
════════════════════════════════════ */
renderSidebar();
renderMain();