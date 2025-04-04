const itens = [
    {item: "IPHONE", descricao:"Iphone 11 - 128gb (Preto)", vendedor:"Por Aplle", tipo: "celulares", preco: "R$3.300", imagem: "img/transferir.jfif"},
    {item: "SAMSUNG",descricao:"Samsung A15 - 256gb 8gb Ram", vendedor:"Por Samsung", tipo: "celulares", preco: "R$1.100", imagem: "img/sansung a_15.jfif"},
    {item: "MOTOROLA",descricao:"Motorola G24 - 128gb", vendedor:"Por Motorla", tipo: "celulares", preco: "R$1.200", imagem: "img/motorola.png"},
    {item: "SAMSUNG",descricao:"Samsung A51", vendedor:"Por Samsung", tipo: "celulares", preco: "R$1.650", imagem: "img/sansung a_15.jfif"},
    {item: "IPHONE",descricao:"Iphone 15 - 128gb (Branco)", vendedor:"Por Aplle", tipo: "celulares", preco: "R$4.340", imagem: "img/iphone 15.jfif"},
    {item: "XIAOMI",descricao:"Xiaomi Redmi 11 - 128gb (Preto)", vendedor:"Por Xiaomi", tipo: "celulares", preco: "R$999", imagem: "img/xiaomi.jfif"},
    {item: "NOKIA",descricao:"Nokia tijolao - 12gb (Preto)", vendedor:"Por Casas Bahia", tipo: "celulares", preco: "R$320", imagem: "img/nokia.jfif"},

    {item:"CAMISA",descricao:"Camiseta", vendedor:"Renner", tipo: "roupas", preco: "R$56,00", imagem: "img/camisa.jfif"},
    {item:"CALÇA",descricao:"Calça jeans", vendedor:"Por Renner", tipo: "roupas", preco: "R$80,00", imagem: "img/calça.jfif"},
    {item:"TENIS",descricao:"Tenis Nike", vendedor:"Por Nike", tipo: "roupas", preco: "R$300,00", imagem: "img/tenis.jfif"},
    {item:"BLUSA",descricao:"Moletom", vendedor:"Por Riachuello", tipo: "roupas", preco: "R$150,00", imagem: "img/blusa.jfif"},
    {item:"BONÉ",descricao:"Boné", vendedor:"Por Amazon", tipo: "roupas", preco: "R$50,00", imagem: "img/bone.jfif"},
    {item:"SHORTS",descricao:"Shorts jeans", vendedor:"Por C&A", tipo: "roupas", preco: "R$49,90", imagem: "img/shorts.jfif"},

    {item:"HOTWEELS",descricao:"Carrinho Hotwells", vendedor:"Por RIHHAPY", tipo:"brinquedos", preco: "R$100", imagem: "img/carrinho.jfif"},
    {item:"Boneca",descricao:"Boneca Lia", vendedor:"Por RIHHAPY", tipo:"brinquedos", preco: "R$98", imagem: "img/boneca.jfif"},
    {item:"Barbie",descricao:"BARBIE", vendedor:"Por Brinqeudos", tipo:"brinquedos", preco: "R$200", imagem: "img/barbie.jfif"},
    {item:"Moto",descricao:"Moto Hotwells controle remoto ", vendedor:"Por RIHHAPY", tipo:"brinquedos", preco: "R$150", imagem: "img/moto.jfif"},
    {item:"Cozinha",descricao:"Cozinha ", vendedor:"Por JA", tipo:"brinquedos", preco: "R$300", imagem: "img/cozinha.jfif"},

    {item: "Harry Potter",descricao:"Harry Potter", vendedor:"Por Aplle", tipo: "livros", preco: "R$50", imagem: "img/harry.jfif"},
    {item: "Persy Jackson",descricao:"Persy Jackson - ladra ode raios", vendedor:"Por Aplle", tipo: "livros", preco: "R$39", imagem: "img/percy.jfif"},
    {item: "Turma da monica",descricao:"Turma da monica Gibi ", vendedor:"Por Aplle", tipo: "livros", preco: "R$25", imagem: "img/monica.jfif"},
    {item: "Biblia",descricao:"Biblia - Leao de Juda", vendedor:"Por Aplle", tipo: "livros", preco: "R$59", imagem: "img/biblia.jfif"},
    {item: "A cabana",descricao:"A cabana- Livro", vendedor:"Por Aplle", tipo: "livros", preco: "R$79", imagem: "img/cabana.jfif"},
    {item: "Biblia",descricao:"Bilbia NVI", vendedor:"Por Aplle", tipo: "livros", preco: "R$39", imagem: "img/biblia.jfif"}
   
];

function filtrarItems(event) {
    if (event) event.preventDefault(); // Garante que só previne comportamento padrão no formulário

    const itemTipo = document.getElementById("itemTipo").value;
    const itensFiltrados = itemTipo === "todos" ? itens : itens.filter(item => item.tipo === itemTipo);

    const itemLista = document.getElementById("itemLista"); // Corrigido o ID
    itemLista.innerHTML = "";

    itensFiltrados.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `

        <a class="caixaproduto" href="iphone11.html">
        <img class="imagem" src="${item.imagem}" alt="${item.item}">


        <div class="texto">
            <h4>${item.item}</h4>

            <p class= "descricao">${item.descricao}</p>
            <p class= "Vendedor">${item.vendedor}</p>
            

            <h3> ${item.preco}</h3>

         </div>   
             <p class="frete">Frete gratís</p>
             </a>
            `;
        itemLista.appendChild(li);
    });
}

document.getElementById('itemForm').addEventListener('submit', filtrarItems);

// Corrigido para carregar os itens ao iniciar
/*window.onload = filtrarItems;


document.addEventListener("DOMContentLoaded", function() {
    const banners = [
        "img/banner 1.jfif",
        "img/banner 2.jfif",
        "img/banner 3.jfif"
    ];

    let index = 0;
    const imagem = document.querySelector("#banner_main img");

    function atualizarImagem() {
        imagem.src = banners[index];
    }

    // Tornando as funções globais
    window.direita = function() {
        index = (index + 1) % banners.length;
        atualizarImagem();
    }

    window.esquerda = function() {
        index = (index - 1 + banners.length) % banners.length;
        atualizarImagem();
    }
});*/


document.addEventListener("DOMContentLoaded", function() {
    let indice = 0;
    const banners = document.querySelector('.banner');
    const totalBanners = banners.children.length;

    function atualizarCarrossel() {
        banners.style.transform = `translateX(-${indice * 100}%)`;
    }

    window.proximo = function() {
        indice = (indice + 1) % totalBanners;
        atualizarCarrossel();
    }

    window.anterior = function() {
        indice = (indice - 1 + totalBanners) % totalBanners;
        atualizarCarrossel();
    }

    // Carrossel automático
    setInterval(proximo, 3000); // Troca a cada 3 segundos
});