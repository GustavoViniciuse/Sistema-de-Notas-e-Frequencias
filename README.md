# Sistema de Notas e Frequências

Este projeto é um desafio proposto para criar um sistema para gerenciar as notas e frequências de seus alunos de maneira eficiente. A aplicação permite a inserção de notas para cinco disciplinas e o registro da frequência em percentual. O sistema calcula automaticamente as médias dos alunos e destaca aqueles que precisam de atenção especial.

## Instruções para Executar o Sistema

### Pré-requisitos

- Navegador web (Google Chrome, Firefox, etc.)
- Servidor HTTP local (opcional para visualização local)

### Passos para execução

1. **Baixar o projeto:** Clone o repositório do projeto em sua máquina local.

    ```bash
    git clone https://github.com/SeuUsuario/SeuRepositorio.git
    ```

2. **Abrir o arquivo HTML:** Navegue até o diretório onde o projeto foi clonado e abra o arquivo `index.html` em seu navegador.

3. **Interagir com o sistema:**
    - Insira os dados do aluno (nome, notas nas disciplinas, e frequência).
    - Clique em "Adicionar Aluno" para inserir os dados no sistema.
    - Utilize os botões de "Atualizar Lista" para ver os alunos cadastrados e "Limpar Dados" para remover todos os dados.

4. **Visualizar resultados:** Abaixo do formulário, você verá a lista de alunos com a média de notas acima da média da turma, alunos com frequência abaixo de 75%, e as médias da turma em cada disciplina.

## Lista de Premissas Assumidas

- **Notas de 0 a 10:** Cada disciplina recebe uma nota no intervalo de 0 a 10.
- **Frequência de 0% a 100%:** A frequência é dada em percentual e deve estar dentro desse intervalo.
- **Média da turma:** Calcula-se a média da turma em cada disciplina com base nas notas de todos os alunos.
- **Alunos acima da média:** Considera-se que a média de notas de um aluno deve ser superior à média da turma para que ele seja destacado.
- **Frequência crítica:** Frequência abaixo de 75% é considerada crítica e precisa de atenção especial.

## Decisões de Projeto

- **Linguagens utilizadas:** Foi decidido utilizar HTML e CSS para a estrutura e estilo da interface. O JavaScript foi empregado como backend para manipular os dados diretamente no navegador e armazenar as informações usando `localStorage`, o que simplifica o desenvolvimento e mantém os dados persistentes localmente.
- **Design Responsivo:** O layout foi projetado para ser acessível em diferentes tamanhos de tela.
- **Separação de Funções:** Funções diferentes para calcular a média das notas, determinar alunos acima da média, e identificar frequências críticas.
- **Utilização de Estruturas Condicionais Simples:** Para verificar as condições do problema (média, frequência).
- **Layout de Formulário:** O layout do formulário foi otimizado para ser intuitivo e fácil de usar, com botões claros para adição de alunos e limpeza de dados.


## O que mais você deve saber

- **Escalabilidade:** O sistema pode ser facilmente adaptado para incluir mais disciplinas ou funcionalidades, como exportação de dados ou integração com banco de dados.
- **Validação de Dados:** Não foi implementada uma validação robusta no frontend; espera-se que o usuário insira os dados corretamente.

- [Assistir ao vídeo sobre o projeto](https://youtu.be/ixAGH3ExBMI)



