function abreNovaJanela(compras)
{
	const largura = Math.min(380, window.innerWidth);
    const altura = Math.min(480, window.innerHeight);

    let janela = window.open(
        "",
        "",
        `width=${largura},height=${altura},left=${largura},top=50`
    );
    janela.document.write("<html><head><title>Extrato de Compras</title><link rel='stylesheet' type='text/css' href='style.css'></head>");

    janela.document.write("<body><section id='principal'><h3>Feira Online: Extrato de Compras</h3><hr>");

    janela.document.write("<table><tr><td>PRODUTO</td><td>PREÇO</td><td>QUANTIDADE</td></tr>");
    let total = 0;
    compras.forEach((item) => {
                janela.document.write(`<tr><td>${item.nome}</td><td>${item.preco}</td><td>${item.quantidade} kg</td></tr>`);
                total += item.preco*item.quantidade;
    });
    janela.document.write("</table></section><hr>");

    janela.document.write(`<h5>Valor Total: ${total.toFixed(2)}</h5>`);

    janela.document.write('<button onclick="window.close()">Fechar</button>');
    janela.document.write('</section></body></html>');
}