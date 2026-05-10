/* ============================================================
   postagem.js — Lógica exclusiva da tela de nova postagem
   Oficina Aprender+

   ⚠️  BACK-END PENDENTE:
   O endpoint POST /publicacoes ainda não foi implementado.
   A função enviarPostagem() já está estruturada para consumi-lo.
   Quando o controller estiver pronto, basta remover o bloco
   "SIMULAÇÃO" e descomentar o bloco "REQUISIÇÃO REAL".
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* Inicializa tema */
  initTheme();

  /* ── Controle de arquivos anexados ──────────────────── */
  let arquivosSelecionados = [];

  const fileInput = document.getElementById('anexos');
  const fileList  = document.getElementById('file-list');
  const fileDrop  = document.getElementById('file-drop');

  fileInput.addEventListener('change', () => {
    adicionarArquivos(fileInput.files);
    fileInput.value = ''; // permite re-selecionar o mesmo arquivo
  });

  // Drag and drop
  fileDrop.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileDrop.classList.add('dragover');
  });
  fileDrop.addEventListener('dragleave', () => fileDrop.classList.remove('dragover'));
  fileDrop.addEventListener('drop', (e) => {
    e.preventDefault();
    fileDrop.classList.remove('dragover');
    adicionarArquivos(e.dataTransfer.files);
  });

  function adicionarArquivos(files) {
    Array.from(files).forEach(file => {
      if (arquivosSelecionados.find(f => f.name === file.name && f.size === file.size)) return;
      arquivosSelecionados.push(file);
    });
    renderizarArquivos();
  }

  function removerArquivo(index) {
    arquivosSelecionados.splice(index, 1);
    renderizarArquivos();
  }

  function renderizarArquivos() {
    fileList.innerHTML = '';
    arquivosSelecionados.forEach((file, i) => {
      const item = document.createElement('div');
      item.className = 'file-item';
      item.innerHTML = `
        <div class="file-name">
          <span>${iconeArquivo(file.type)}</span>
          <span title="${file.name}">${file.name}</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <span class="file-size">${formatarTamanho(file.size)}</span>
          <button class="file-remove" title="Remover" onclick="removerArquivoUI(${i})">✕</button>
        </div>
      `;
      fileList.appendChild(item);
    });
  }

  // Expõe para uso no HTML inline (onclick)
  window.removerArquivoUI = removerArquivo;

  function formatarTamanho(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  function iconeArquivo(type) {
    if (type.startsWith('image/')) return '🖼';
    if (type === 'application/pdf') return '📄';
    if (type.includes('word'))      return '📝';
    if (type.includes('sheet') || type.includes('excel')) return '📊';
    return '📎';
  }

  /* ── Editor de texto rico ───────────────────────────── */
  const editor = document.getElementById('editor');

  window.formatar = function(comando, valor = null) {
    editor.focus();
    document.execCommand(comando, false, valor);
    atualizarBotoesAtivos();
  };

  // Família da fonte
  const fonte = document.getElementById('fonte');
  fonte.addEventListener('change', () => {
    editor.focus();
    document.execCommand('fontName', false, fonte.value);
  });

  // Tamanho da fonte
  const tamanhoFonte = document.getElementById('tamanho-fonte');
  tamanhoFonte.addEventListener('change', () => {
    editor.style.fontSize = `${tamanhoFonte.value}rem`;
  });

  // Atualiza estado visual dos botões (negrito, itálico, sublinhado)
  function atualizarBotoesAtivos() {
    ['bold', 'italic', 'underline'].forEach(cmd => {
      const btn = document.querySelector(`[data-cmd="${cmd}"]`);
      if (btn) btn.classList.toggle('active', document.queryCommandState(cmd));
    });
  }
  editor.addEventListener('keyup', atualizarBotoesAtivos);
  editor.addEventListener('mouseup', atualizarBotoesAtivos);

  /* ── Envio do formulário ────────────────────────────── */
  const form    = document.getElementById('postagem');
  const btnEnviar = document.getElementById('btn-enviar');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideFeedback('feedback');

    // Coleta dos dados
    const titulo       = document.getElementById('titulo').value.trim();
    const tipo         = document.getElementById('tipo_postagem').value;
    const visibilidade = document.querySelector('input[name="visibilidade"]:checked')?.value || null;
    const conteudo     = editor.innerHTML.trim();

    // Validações
    if (!titulo)
      return showFeedback('feedback', 'Informe um título para a postagem.', 'error');
    if (!visibilidade)
      return showFeedback('feedback', 'Selecione a visibilidade da postagem.', 'error');
    if (tipo === 'nenhum')
      return showFeedback('feedback', 'Selecione o tipo de postagem.', 'error');
    if (!conteudo || conteudo === '')
      return showFeedback('feedback', 'Escreva o conteúdo da postagem.', 'error');

    btnEnviar.disabled = true;
    btnEnviar.classList.add('loading');

    await enviarPostagem({ titulo, tipo, visibilidade, conteudo });

    btnEnviar.disabled = false;
    btnEnviar.classList.remove('loading');
  });

  /* ── Função de envio ────────────────────────────────── */
  async function enviarPostagem(dados) {

    /* ──────────────────────────────────────────────────────
       SIMULAÇÃO — remover quando o back-end estiver pronto
       ────────────────────────────────────────────────────── */
    console.log('[SIMULAÇÃO] Dados que seriam enviados:', dados);
    console.log('[SIMULAÇÃO] Arquivos anexados:', arquivosSelecionados);

    await new Promise(r => setTimeout(r, 1000)); // simula latência

    showFeedback(
      'feedback',
      '⚠️ Simulação: postagem validada com sucesso! O endpoint POST /publicacoes ainda não existe no back-end — conecte quando o controller estiver pronto.',
      'success'
    );
    return;

    /* ──────────────────────────────────────────────────────
       REQUISIÇÃO REAL — descomentar quando o back-end pronto
       Espera: POST /publicacoes com multipart/form-data
       Campo "dados" = JSON com titulo, tipo, visibilidade, conteudo
       Campo "anexos" = arquivos (opcional)
       ────────────────────────────────────────────────────── */
    /*
    try {
      const usuario = getUsuario();

      const formData = new FormData();
      formData.append('dados', new Blob([JSON.stringify({
        titulo:       dados.titulo,
        descricao:    dados.conteudo,
        tipo:         dados.tipo,
        visibilidade: dados.visibilidade,
        idProfissional: usuario?.id ?? null,
      })], { type: 'application/json' }));

      arquivosSelecionados.forEach(file => {
        formData.append('anexos', file);
      });

      const res = await fetch(`${API_BASE}/publicacoes`, {
        method: 'POST',
        body: formData,
        // Não definir Content-Type: o browser insere o boundary do multipart automaticamente
      });

      const resposta = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(resposta.message || `Erro ${res.status}`);

      showFeedback('feedback', '✓ Postagem publicada com sucesso!', 'success');

      // Limpa o formulário após sucesso
      setTimeout(() => {
        document.getElementById('postagem').reset();
        editor.innerHTML = '';
        arquivosSelecionados = [];
        renderizarArquivos();
        hideFeedback('feedback');
      }, 2000);

    } catch (err) {
      showFeedback('feedback', '❌ ' + (err.message || 'Erro ao conectar com o servidor.'), 'error');
    }
    */
  }

});
