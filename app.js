document.addEventListener('DOMContentLoaded', () => {
  const formAluno = document.getElementById('formAluno');
  const mostrarAlunos = document.getElementById('mostrarAlunos');
  const listaAcimaMedia = document.getElementById('listaAcimaMedia');
  const listaAtencaoEspecial = document.getElementById('listaAtencaoEspecial');

  function calcularMediaDisciplinas(alunos) {
    const disciplinas = ['matematica', 'portugues', 'ciencias', 'historia', 'geografia'];
    const medias = {};

    disciplinas.forEach(disciplina => {
      const total = alunos.reduce((acc, aluno) => acc + aluno.disciplinas[disciplina], 0);
      medias[disciplina] = total / alunos.length || 0;
    });

    return medias;
  }

  function calcularMediaTurma(alunos) {
    if (alunos.length === 0) return 0;
    const totalNotas = alunos.reduce((acc, aluno) => acc + aluno.mediaNotas, 0);
    return totalNotas / alunos.length;
  }

  function exibirAlunos() {
    const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    const mediaTurma = calcularMediaTurma(alunos);
    const mediaDisciplinas = calcularMediaDisciplinas(alunos);

    listaAcimaMedia.innerHTML = '';
    listaAtencaoEspecial.innerHTML = '';
    listaMediaDisciplinas.innerHTML = '';

    const mediaTurmaDiv = document.createElement('div');
    mediaTurmaDiv.innerHTML = `<h3>Média da Turma: ${mediaTurma.toFixed(2)}</h3>`;
    listaAcimaMedia.appendChild(mediaTurmaDiv);

    Object.keys(mediaDisciplinas).forEach(disciplina => {
      const mediaDiv = document.createElement('div');
      mediaDiv.classList.add('mediaDisciplina');
      mediaDiv.innerHTML = `
                <h3>${disciplina.charAt(0).toUpperCase() + disciplina.slice(1)}</h3>
                <p>Média: ${mediaDisciplinas[disciplina].toFixed(2)}</p>
            `;
      listaMediaDisciplinas.appendChild(mediaDiv);
    });

    const alunosAcimaMedia = alunos.filter(aluno => aluno.mediaNotas > mediaTurma);
    const alunosAbaixoFrequencia = alunos.filter(aluno => aluno.frequencia < 75);

    alunosAcimaMedia.forEach(aluno => {
      const alunoDiv = document.createElement('div');
      alunoDiv.classList.add('aluno');
      alunoDiv.innerHTML = `
                <h3>${aluno.nome}</h3>
                <p>Média: ${aluno.mediaNotas.toFixed(2)}</p>
                <p>Frequência: ${aluno.frequencia}%</p>
            `;
      listaAcimaMedia.appendChild(alunoDiv);
    });

    alunosAbaixoFrequencia.forEach(aluno => {
      const alunoDiv = document.createElement('div');
      alunoDiv.classList.add('aluno');
      alunoDiv.innerHTML = `
                <h3>${aluno.nome}</h3>
                <p>Frequência: ${aluno.frequencia}%</p>
                <p>Média: ${aluno.mediaNotas.toFixed(2)}</p>
            `;
      listaAtencaoEspecial.appendChild(alunoDiv);
    });
  }

  formAluno.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const disciplinas = {
      matematica: parseFloat(document.getElementById('matematica').value),
      portugues: parseFloat(document.getElementById('portugues').value),
      ciencias: parseFloat(document.getElementById('ciencias').value),
      historia: parseFloat(document.getElementById('historia').value),
      geografia: parseFloat(document.getElementById('geografia').value)
    };
    const frequencia = parseFloat(document.getElementById('frequencia').value);


    const notasValidas = Object.values(disciplinas).every(nota => nota >= 0 && nota <= 10);
    const frequenciaValida = frequencia >= 0 && frequencia <= 100;

    if (!notasValidas) {
      alert('Nota inválida! Insira notas entre 0 e 10.');
      return;
    }

    if (!frequenciaValida) {
      alert('Frequência inválida! Insira uma frequência entre 0 e 100.');
      return;
    }

    const notas = Object.values(disciplinas);
    const mediaNotas = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

    const aluno = { nome, disciplinas, frequencia, mediaNotas };

    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    alunos.push(aluno);
    localStorage.setItem('alunos', JSON.stringify(alunos));

    formAluno.reset();
    alert('Aluno adicionado com sucesso!');
  });

  mostrarAlunos.addEventListener('click', exibirAlunos);
});

document.getElementById('limparDados').addEventListener('click', () => {
  localStorage.clear();
  alert('Todos os dados foram limpos!');
  document.getElementById('listaAcimaMedia').innerHTML = '';
  document.getElementById('listaAtencaoEspecial').innerHTML = '';
});
