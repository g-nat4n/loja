const itens = [
    {item: "Iphone 11", tipo: "celulares"},
    {item: "Samsaung A15", tipo: "celulares"},
    {item: "Motorola", tipo: "celulares"},
    {item: "Samsaung A51", tipo: "celulares"},
    {item: "Iphone 15", tipo: "celulares"},
    {item: "Xiaomi", tipo: "celulares"},
    {item: "Nokia", tipo: "celulares"},

    {item:"Camisa", tipo: "roupas"},
    {item:"Calça", tipo: "roupas"},
    {item:"Tenis", tipo: "roupas"},
    {item:"Blusa", tipo: "roupas"},
    {item:"Boné", tipo: "roupas"},
    {item:"Shorts", tipo: "roupas"},

    {item:"Carrinho", tipo:"brinquedos"},
    {item:"Boneca", tipo:"brinquedos"},
    {item:"Barbie", tipo:"brinquedos"},
    {item:"Moto", tipo:"brinquedos"},
    {item:"Cozinha", tipo:"brinquedos"},

    {item: "Harry Potter", tipo: "livros"},
    {item: "Persy Jackson", tipo: "livros"},
    {item: "Turma da monica", tipo: "livros"},
    {item: "Biblia", tipo: "livros"},
    {item: "A cabana", tipo: "livros"},
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
            <p><strong>${item.item}</strong></p>
            <p>Categoria: ${item.tipo}</p>`;
        itemLista.appendChild(li);
    });
}

document.getElementById('itemForm').addEventListener('submit', filtrarItems);

// Corrigido para carregar os itens ao iniciar
window.onload = filtrarItems;