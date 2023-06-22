//seletores

const nextContato = document.querySelector('#nextContato');
const prevContato = document.querySelector('#prevContato');

const contato = document.querySelector('.contato');
const empresa = document.querySelector('.empresa');

const spanEtapas = document.querySelector('.spanEtapas')
const spanNumber = document.querySelector('.number')

const etapaEmpresa = document.querySelector('.etapaEmpresa')
const etapaEmpresaNumber = document.querySelector('.etapaEmpresaNumber');

//fim dos seletores

nextContato.addEventListener('click', () => {
    if (empresa.style.display === 'none') {

        const name = document.querySelector('#name').value;
        const telefone = document.querySelector('#telefone').value;
        const email = document.querySelector('#email').value;


        if (name === '' || telefone === '' || email === '') {
            exibirErro();
            return;
        } else {

            // Div contato fica none e mostra a div empresa
            contato.style.display = 'none';
            empresa.style.display = 'block';

            // Remove as cores do number e a opacity do header contato
            spanEtapas.classList.remove('activeSpan');
            spanNumber.classList.remove('activeNumber');

            // Adiciona as cores do number e a opacity no header empresa
            etapaEmpresa.classList.add('activeSpan');
            etapaEmpresaNumber.classList.add('activeNumber');
        }
    }
});



prevContato.addEventListener('click', () => {
    if (contato.style.display === 'none') {

        //div empresa fica none e mostra a div contato
        contato.style.display = 'block';
        empresa.style.display = 'none';

        //remove as cores do number e a opacity do header empresa
        etapaEmpresa.classList.remove('activeSpan');
        etapaEmpresaNumber.classList.remove('activeNumber');

        //adiciona as cores do number e a opacity no header contato
        spanEtapas.classList.add('activeSpan');
        spanNumber.classList.add('activeNumber');

    } else {
        //vazio
    }
})




//empresa e obejtivo codigo

const nextObjetivo = document.querySelector('#nextObjetivo');
const objetivo = document.querySelector('.objetivo');

const etapaProjeto = document.querySelector('.etapaProjeto')
const etapaProjetoNumber = document.querySelector('.etapaProjetoNumber');

nextObjetivo.addEventListener('click', () => {
    if (objetivo.style.display === 'none') {

        const nameEmpresa = document.querySelector('#nameEmpresa').value;
        const funcionarios = document.querySelector('#funcionarios').value;
        const textArea = document.querySelector('#textArea').value;

        if (nameEmpresa === '' || funcionarios === '' || textArea === '') {
            exibirErro();
            return;
        } else {

            // Div contato fica none e mostra a div empresa
            empresa.style.display = 'none';
            objetivo.style.display = 'block';

            // Remove as cores do number e a opacity do header contato
            etapaEmpresa.classList.remove('activeSpan');
            etapaEmpresaNumber.classList.remove('activeNumber');

            // Adiciona as cores do number e a opacity no header empresa
            etapaProjeto.classList.add('activeSpan');
            etapaProjetoNumber.classList.add('activeNumber');
        }
    }
});


const prevEmpresa = document.querySelector('#prevEmpresa');

prevEmpresa.addEventListener('click', () => {
    if (empresa.style.display === 'none') {

        //div empresa fica none e mostra a div contato
        empresa.style.display = 'block';
        objetivo.style.display = 'none';

        //remove as cores do number e a opacity do header empresa
        etapaProjeto.classList.remove('activeSpan');
        etapaProjetoNumber.classList.remove('activeNumber');

        //adiciona as cores do number e a opacity no header contato
        etapaEmpresa.classList.add('activeSpan');
        etapaEmpresaNumber.classList.add('activeNumber');

    }
})


const concluirForm = document.querySelector('#concluirForm');

concluirForm.addEventListener('click', () => {
    const textAreaObjetivo = document.querySelector('#objetivo').value;

    if (textAreaObjetivo === '') {
        exibirErro();
        return;
    } else {
        //quando clica no botao concluir esconde o objetivo
        objetivo.style.display = 'none';

        //seleciona o container concluir
        const concluirDiv = document.querySelector('.concluirDiv');

        //cria dentro do container uma div essa div com uma class
        const paragrafo = document.createElement('div');
        paragrafo.classList.add('textoEnviado');

        //pega o valor de name la do inico para exibir na mensagem
        const name = document.querySelector('#name').value;
        paragrafo.innerText = `Obrigado ${name} todos os dados foram enviados!`;

        //exibe o a div criada na tela 
        concluirDiv.appendChild(paragrafo);

        //e por final mostra todo o conteudo do container
        concluirDiv.style.display = 'block';
    }
});

//funçao para mostrar a mensagem de erro
function exibirErro() {
    const erro = document.querySelector('.erro');
    erro.style.display = 'flex';

    setTimeout(() => {
        erro.style.display = 'none';
    }, 5000)
}