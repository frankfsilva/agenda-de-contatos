const form = document.getElementById('form-agenda');                //recuperando o formulário
const inputNome = document.getElementById('nome');                  //recuperando o dado nome
const inputTelefone = document.getElementById('telefone');          //recuperando o telefone
const telefones = [];                                               //array para armazenar os telefones
let linhas ='';                                             


form.addEventListener('submit', function(e){                        //evento no botão
    e.preventDefault();                                             //anula evento padrão do botão
    adicionaContato();                                              //aplica a função
    atualizaTabela();                                               //aplica a função
});

function adicionaContato(){
    if (telefones.includes(inputTelefone.value)){
        alert(`O número ${inputTelefone.value} já foi utilizado`);
    } else {
        let linha = '<tr>';                                         //armazena a linha com os dados
        linha += `<td>${inputNome.value}</td>`;                     //criando o nome na linha
        linha += `<td>${inputTelefone.value}</td>`;                 //criando o telefone na linha     
        linha += '</tr>';                                           //fechando a linha
        
        linhas += linha;                                            //armazena os dados na linha

        telefones.push(inputTelefone.value);                        //empura o telefone inputado no array

        inputNome.value = '';                                       //limpa o input nome
        inputTelefone.value ='';                                    //limpa o input telefone
    }}


function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');            //recuperando o corpo da tabela
    corpoTabela.innerHTML = linhas;                                 //escrevendo no corpo da tabela html
}