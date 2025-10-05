
<h1>Teste N1</h1>
<p>Desenvolvimento da loja GeekStore</p>
<p><i>Automação com Gulp</i></p>
<h2>Pré Requisitos</h2>
<p>Node</p>
<h2>Quick Start</h2>
<ul>
  <li>npm install</li>
  <li>gulp</li>
</ul>
<br/>
<br/>
<br/>
<h2>Estruturação e responsividade</h2>

<p><b>O layout foi estruturado em componentes:</b></p>
<h3>Header:</h3>
<p>Para uma melhor responsividade e um visual mais clean e garantir uma melhor performance criei duas estruturas para o header. Uma para Mobile e outra para Desktop</p>
<h3>Banner:</h3>
<p>O banner foi utilizado o mesmo Css funcional em mobile e desktop otimizando o desempenho. Para o Slide eu utilizei o Swiper Js</p>
<h3>Beneficios:</h3>
<p>Na seção de beneficios eu optei por criar um padrão em HTML ao inves de utilizar imagens. Dessa maneira, alem de otimizar, garante manipular de a cordo com o dispositivo.</p>
<h3>Shelf:</h3>
<p>Na seção de prateleira eu tomei a liberdade de inserir 5 produtos para diminuir os espaçamentos entre as grids em telas maiores e vai diminuindo conforme o tamanho da tela decai. Ao chegar 775px eu inseri botões para simular um slide que ao clicar muda os produtos da prateleira. Ao clicar em Adicionar, o botão muda para "Adicionado" e altera o total no carrinho no menu (Tanto no mobile quanto desktop)****</p>
<h3>Mosaico:</h3>
<p>Na seção de Mosaico desenvolvi de uma forma no mobile onde as imagens se colocam uma em baixo da outra que permite um enquadramento melhor das imagens na tela. Em telas maiores que 1440px optei por manter o os banners em posição original para seguir a grid do layout de referência espaçando um pouco os elementos.(Seguindo o layout de referencia cujo a tela é menor o espaçamento seria nas laterais)</p>
<h3>Sobre a loja:</h3>
<p>Na seção de sobre a loja, no mobile mantive os blocos um em baixo do outro para conseguir manter o tamanho da fonte legivel</p>
<h3>Em Por que escolher a GeekStore?:</h3>
<p>No mobile, optei por deixar os componentes um em baixo do outro para manter legivel e não quebrar em telas pequenas</p>
<h3>Em Newsletter:</h3>
<p>Caso o botão seja disparado sem preencher o campo ele da um erro e ao colocar o email uma mensagem de agradecimento aparece via Modal</p>
<h3>No Footer</h3>
<p>Mantive o layout respondendo ao design mas no mobile coloquei como blocos um em baixo do outro</p>

<h2>Funcionalidade e Otimização</h2>

<p>Como o "Adicionar" é feito de forma ilustrativa, pode ter cache no navegador não alterando. Recomendo recarregar com CTRL + SHIFT + R caso isso aconteça</p>
<p>No Header adicionei pontos e links ilustrativos que não estavam previsto no layout</p>
<p>As imagens do projeto estão hospedadas externamente por uma questão de otimização e velocidade de entrega. Em vez de compilar localmente, optei por URLs em CDN. <br/> Como na VTEX as imagens já são servidas via CDN interna, eu optei por simular esse mesmo cenário no teste</p>
