function toggleMode() {

    // Atributo para alterar o light mode por meio do "toggle"
    const html = document.documentElement
    html.classList.toggle('light')


    // Consultar a tag img
    const img = document.querySelector("#profile img")

    // Se tiver com a class light irá substituir a imagem
    if(html.classList.contains('light')) {
        img.setAttribute('src', 'assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Igor Duca sorrindo, com camisa preta e fundo azul, para representar o light mode')

    // Se não, irá deixar como está      
    } else {
        img.setAttribute('src', 'assets/avatar.png')
    }

}




//        html.classList.remove('light')
//    } 
    
//    else {
//        html.classList.add ('light')
//    }
