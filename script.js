function toogleMode(){

//* pegando o elemento html
const html = document.documentElement
// ? Simplificando essa mesma condição com o toogle
html.classList.toggle('light')
//* Testando se contém ou não a class light na tag html

// * Se sim remove se não adiciona
// if(html.classList.contains('light')){
//  html.classList.remove('light') 
// }else{

//  html.classList.add('light')
// }



// * Pegar a tag img e substituir a imagem

const img = document.querySelector('#profile img')
//* Condição para trocar a imagem

if(html.classList.contains('light')){

img.setAttribute('src', './assets/assets/avatar.png')
img.setAttribute('alt', 'Imagens do maik claro')


}else{
  img.setAttribute('src', './assets/assets/avatar-light.png')

  img.setAttribute('alt', 'Imagens do maik escuro')
}

}