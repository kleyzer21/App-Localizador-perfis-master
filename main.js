import '@picocss/pico'
import './style.css'
const formConsultaPerfis = document.querySelector('#ConsultaPerfis')
const inputBuscaGit = formConsultaPerfis.buscarGit // seleciona o input do cep a partir do formulário
const divDados = document.querySelector('#dados')
const btnConsultaPerfis =
  document.querySelector('#btnConsultaPerfis')

formConsultaPerfis.addEventListener('submit', function (event) {
  event.preventDefault() // anula comportamento padrão de envio do form ao clicar no botão
  ativaLoader(true)
  ConsultaPerfis(inputBuscaGit.value) // invoca a função passando o cep digitado por parâmetro
})

async function ConsultaPerfis(buscarGit) {
  let response = await fetch(`https://api.github.com/users/${buscarGit}`)
  let dadosCep = await response.json()
  if (dadosCep.erro) {
    divDados.innerHTML = `
      <div class="erro">Perfis não encontrado!</div>
    `
  } else {
    divDados.innerHTML = `
    <p> Nome: ${dadosBuscar.name}  </p>
    <p> Link: ${dadosBuscar.html_url}  </p>
    <p> Imagem: ${dadosBuscar.avatar_url}  </p>
  `
  }
  ativaLoader(false)
}

function ativaLoader(ativo) {
  if (ativo) {
    btnConsultaPerfis.
      setAttribute('aria-busy', 'true')
    btnConsultaPerfis.
      textContent = 'Consultando Perfis...'
  } else {
    btnConsultaPerfis.removeAttribute('aria-busy')
    btnConsultaPerifs.
      textContent = 'Consultar'
  }
}


