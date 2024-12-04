function mostrarTexto(texto) {
  document.getElementById('barra-texto').textContent = texto;
}

// Função para mudar o conteúdo dentro da mesma div container
function mudarTela(opcao) {
  // Cria o conteúdo específico baseado na opção clicada
  const conteudo = {
    chamada: `
      <h2>Chamada de Presença</h2>
      <p>Selecione os alunos presentes na aula de hoje.</p>
      <form>
        <label for="aluno1">Jadson Rodrigues:</label>
        <input type="checkbox" id="aluno1"><br>
        <label for="aluno2">Andre Felipe:</label>
        <input type="checkbox" id="aluno2"><br>
        <label for="aluno3">Caio santos:</label>
        <input type="checkbox" id="aluno3"><br>
        <label for="aluno4">Karine De Souza:</label>
        <input type="checkbox" id="aluno4"><br>
        <label for="aluno4">Thiago Pinto:</label>
        <input type="checkbox" id="aluno5"><br>
        <label for="aluno4">Victor Hugo:</label>
        <input type="checkbox" id="aluno6"><br>
          <label for="aluno4">Pedro Pedrosa:</label>
        <input type="checkbox" id="aluno7"><br>
         <label for="aluno4">Derik Loren:</label>
        <input type="checkbox" id="aluno7"><br>
        <button type="submit">Salvar Chamada</button>
      </form>`,
    
    nota: `
      <h2>Inserir Nota</h2>
      <form>
        <label for="nome-aluno">Nome do Aluno:</label>
        <input type="text" id="nome-aluno" placeholder="Nome do aluno"><br>
        <label for="nota">Nota do aluno:</label>
        <input type="text" id="nota" placeholder="Digite a nota"><br>
        <button type="submit">Salvar Nota</button>
      </form>`,
    
    conteudo: `
      <h2>Adicionar Conteúdo</h2>
      <form>
        <label for="titulo-conteudo">Título do Conteúdo:</label>
        <input type="text" id="titulo-conteudo" placeholder="Título do conteúdo"><br>
        <label for="descricao-conteudo">Descrição:</label>
        <textarea id="descricao-conteudo" placeholder="Descrição do conteúdo"></textarea><br>
        <button type="submit">Adicionar Conteúdo</button>
      </form>`,
    
    calendario: `
      <h2>Calendário Acadêmico</h2>
      <p>Aqui você pode visualizar os eventos e datas importantes do semestre.</p>
      <button type="button">Ver Calendário</button>`,
    
    alunos: `
      <h2>Lista de Alunos</h2>
      <ul>
        <li>Jadson Rodrigues</li>
        <li>Andre Felipe</li>
        <li>Caio Santos</li>
        <li>Karine De Souza</li>
        <li>Victor Hugo</li>
        <li>Pedro Pedrossa</li>
        <li>Derik Loren</li>
      </ul>`,
    
    registrar: `
      <h2>Registrar Aula</h2>
      <form>
        <label for="titulo-aula">Título da Aula:</label>
        <input type="text" id="titulo-aula" placeholder="Título da aula"><br>
        <label for="descricao-aula">Descrição:</label>
        <textarea id="descricao-aula" placeholder="Descrição da aula"></textarea><br>
        <button type="submit">Registrar Aula</button>
      </form>`
  };

  // Substitui o conteúdo da div.container pela opção selecionada e inclui o botão de voltar
  const container = document.getElementById('container');
  container.innerHTML = `
    <div class="conteudo-especifico">
      ${conteudo[opcao]}
      <button onclick="voltar()">Voltar</button>
    </div>
  `;
}

// Função para voltar ao conteúdo original
function voltar() {
  // Restaura a div container com o conteúdo original (quadradinhos de opções)
  const container = document.getElementById('container');
  container.innerHTML = `
    <div class="quadradinhos">
      <div class="quadrado" id="chamada" onmouseover="mostrarTexto('Fazer chamada de presença')" onclick="mudarTela('chamada')">
        <i class="icon">📞</i>
        <p>Chamada</p>
      </div>
      <div class="quadrado" id="nota" onmouseover="mostrarTexto('Inserir nota de aluno')" onclick="mudarTela('nota')">
        <i class="icon">📝</i>
        <p>Nota</p>
      </div>
      <div class="quadrado" id="conteudo" onmouseover="mostrarTexto('Adicionar conteúdo da aula')" onclick="mudarTela('conteudo')">
        <i class="icon">📚</i>
        <p>Conteúdo</p>
      </div>
      <div class="quadrado" id="calendario" onmouseover="mostrarTexto('Ver calendário acadêmico')" onclick="mudarTela('calendario')">
        <i class="icon">📅</i>
        <p>Calendário</p>
      </div>
      <div class="quadrado" id="alunos" onmouseover="mostrarTexto('Ver alunos matriculados')" onclick="mudarTela('alunos')">
        <i class="icon">👨‍🎓</i>
        <p>Alunos</p>
      </div>
      <div class="quadrado" id="registrar" onmouseover="mostrarTexto('Registrar aula')" onclick="mudarTela('registrar')">
        <i class="icon">🖊️</i>
        <p>Registrar Aula</p>
      </div>
    </div>
    <div class="barra">
      <div class="barra-texto" id="barra-texto">Passe o mouse sobre um ícone para ver a descrição.</div>
    </div>
  `;
}
const perfil = document.querySelector ('.perfil')
const menu = document.querySelector ('.menu')

perfil.onclick = () => {
    menu.classList.toggle('ativo')
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
  }

  const cursos = {
    "1": { 
      nome: "Análise e Desenvolvimento de Sistemas", 
      periodo: "Noturno", 
      coordenador: "Prof. Daniel", 
      disciplinas: [
        { 
          nome: "Linguagem de Programação", 
          url: "programacao.html", 
          cargaHoraria: "80h", 
          professor: "Prof. Stella Dornelas", 
          alunos: 8
        },
        { 
          nome: "Estrutura de Dados", 
          url: "estrutura_dados.html", 
          cargaHoraria: "60h", 
          professor: "Prof. Stella Dornelas", 
          alunos: 10
        },
        { 
          nome: "Banco de Dados", 
          url: "banco_dados.html", 
          cargaHoraria: "70h", 
          professor: "Prof. Stella Dornelas", 
          alunos: 5
        }
      ]
    },
    "2": { 
      nome: "Administração", 
      periodo: "Integral", 
      coordenador: "Prof. Ana Costa", 
      disciplinas: [
        { nome: "Gestão Financeira", 
          url: "gestao_financeira.html",
          cargaHoraria: "80h", 
          professor: "Prof. Stella Dornelas", 
          alunos: 30
        },
          { 
            nome: "Marketing", 
            url: "marketing.html", 
            cargaHoraria: "60h", 
            professor: "Prof. Stella Dornelas", 
            alunos: 25 
          },
          { 
            nome: "Recursos Humanos", 
            url: "recursos_humanos.html", 
            cargaHoraria: "70h", 
            professor: "Prof. Stella Dornelas", 
            alunos: 28 
        },
      ]
    },
      "3": { 
      nome: "Direito", 
      periodo: "Integral", 
      coordenador: "Prof. Roberto Souza", 
      disciplinas: [
        { nome: "Direito Constitucional", 
          url: "direito_constitucional.html",
          cargaHoraria: "80h", 
          professor: "Prof. Maria Silva", 
          alunos: 30
        },
          { 
            nome: "Direito Penal", 
            url: "direito_penal.html", 
            cargaHoraria: "60h", 
            professor: "Prof. Stella Dornelas", 
            alunos: 25 
          },
          { 
            nome: "Direito Civil", 
            url: "direito_civil.html", 
            cargaHoraria: "70h", 
            professor: "Prof. Stella Dornelas", 
            alunos: 28 
        },
      ]
    },
    "5": { 
      nome: "Design Gráfico", 
      periodo: "Noturno", 
      coordenador: "Prof. Lucas Almeida", 
      disciplinas: [
        { nome: "Teoria das Cores", 
          url: "teoria_cores.html",
          cargaHoraria: "80h", 
          professor: "Prof. Stella Dornelas", 
          alunos: 30
        },
          { 
            nome: "Ilustração Digital", 
            url: "lustracao_digital.html", 
            cargaHoraria: "60h", 
            professor: "Prof. Stella Dornelas", 
            alunos: 25 
          },
          { 
            nome: "Tipografia", 
            url: "tipografia.html", 
            cargaHoraria: "70h", 
            professor: "Prof. Stella Dornelas", 
            alunos: 28 
        },
      ]
    },
    // Adicione as outras disciplinas nos outros cursos...
  };
  function exibirInformacoesDisciplina() {
    const selectDisciplina = document.getElementById("select-disciplina");
    const infoDisciplina = document.getElementById("info-disciplina");
    const cargaHoraria = document.getElementById("carga-horaria");
    const professorDisciplina = document.getElementById("professor-disciplina");
    const alunosMatriculados = document.getElementById("alunos-matriculados");
  
    const cursoSelecionado = document.getElementById("select-curso").value;
    const disciplinaSelecionada = selectDisciplina.value;
  
    if (cursoSelecionado && disciplinaSelecionada) {
      const curso = cursos[cursoSelecionado];
      const disciplina = curso.disciplinas.find(disc => disc.url === disciplinaSelecionada);
  
      if (disciplina) {
        cargaHoraria.textContent = disciplina.cargaHoraria;
        professorDisciplina.textContent = disciplina.professor;
        alunosMatriculados.textContent = disciplina.alunos;
        infoDisciplina.classList.remove("hidden");
      }
    } else {
      infoDisciplina.classList.add("hidden");
    }
  }

  function exibirInformacoes() {
    const selectCurso = document.getElementById("select-curso");
    const infoCurso = document.getElementById("info-curso");
    const cursoNome = document.getElementById("curso-nome");
    const periodo = document.getElementById("periodo");
    const coordenador = document.getElementById("coordenador");
    const disciplinas = document.getElementById("disciplinas");
    const selectDisciplina = document.getElementById("select-disciplina");

    const cursoSelecionado = selectCurso.value;
    if (cursos[cursoSelecionado]) {
      const { nome, periodo: periodoTexto, coordenador: coordenadorTexto, disciplinas: listaDisciplinas } = cursos[cursoSelecionado];
      
      cursoNome.textContent = `Curso: ${nome}`;
      periodo.textContent = periodoTexto;
      coordenador.textContent = coordenadorTexto;
      disciplinas.textContent = listaDisciplinas.map(disc => disc.nome).join(", ");
      
      infoCurso.classList.remove("hidden");

      selectDisciplina.innerHTML = '<option value="">Selecione uma disciplina</option>';
      listaDisciplinas.forEach(disciplina => {
        const optionElement = document.createElement("option");
        optionElement.value = disciplina.url;
        optionElement.textContent = disciplina.nome;
        selectDisciplina.appendChild(optionElement);
      });
      selectDisciplina.disabled = false;
    } else {
      infoCurso.classList.add("hidden");
      selectDisciplina.disabled = true;
    }
  }

  function redirecionar() {
    const selectDisciplina = document.getElementById("select-disciplina");
    const url = selectDisciplina.value;

    if (url) {
      window.location.href = url;
    }
  }

  document.getElementById('theme-toggle').addEventListener('click', function() {
    // Alterna a classe 'dark-theme' no body
    document.body.classList.toggle('dark-theme');
  
    // Alterna entre o emoji de sol e lua
    const button = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-theme')) {
      button.textContent = '🌙'; // Emoji de lua quando estiver no tema escuro
    } else {
      button.textContent = '☀️'; // Emoji de sol quando estiver no tema claro
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('welcome-popup');
    const closePopupButton = document.getElementById('close-popup');
    const showTutorialButton = document.getElementById('show-tutorial');
    const tutorialContainer = document.getElementById('tutorial-container');
    const tutorialVideo = document.getElementById('tutorial-video');
  
    // Exibir o popup ao carregar a página
    popup.classList.add('active');
  
    // Fechar o popup
    closePopupButton.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  
    // Mostrar o tutorial
    showTutorialButton.addEventListener('click', () => {
      tutorialContainer.classList.toggle('hidden');
      if (!tutorialContainer.classList.contains('hidden')) {
        tutorialVideo.play(); // Reproduzir o vídeo automaticamente
      } else {
        tutorialVideo.pause(); // Pausar o vídeo quando ocultar
      }
    });
  });
  