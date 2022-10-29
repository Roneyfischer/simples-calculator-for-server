<center><h2>Informações gerais:</h2></center>
<Br>
<h3>Intro:</h3>
<Br>
<Br>
Trata-se da uma calculadora simples, construída em Javascript, para rodar em nodejs)
<Br>
Não possui front-end, podendo ser utilizado vuia postman ou semelhante
<Br>
<Br>
os dados devem ser passados no Body da requisição POST, no seguinte modelo:
<Br>
<div>
{<Br>
    "numb1":25,
    "numb2":40,
    "type":"*"
}
</div>
<Br>
As operações são as seguintes:
+:<Br>
-:<Br>
*:<Br>
/:<Br>
^:<Br>
<Br>
<h3>Pressupostos e detalhes técnicos:</h3>
<Br>
1.O projeto foi criado para eu aprimorar meus conhecimentos.
<Br> 
2. Procurei usar dois paradigmas distintos: orientação a objetos e programação funcional.
<Br>
Embora sejam diferentes, eu queria utilizar ambos, então acabei misturando estes paradigmas e seus conceitos.
<Br>
O projeta busca aplicar a imutabilidade, composição e pureza das funções, na medida do possível.
<Br>
Em razão da imutabilidade, é aplicado ao código o uso de cópias, para não alterar o input passado na função, afim de reduzir os efeitos colaterais, como erros em eventual novo uso dos mesmos imputs.
<Br>
<Br>
<Br>

<center><h2>Como rodar/executar:</h2></center>
<Br>

1. Rode "npm install";
   <Br>
2. Execute o ".env.exemple", removendo ".exemple", para ficar ".env";
   <Br>
3. Execute no console: "npm run dev" OU "npm run prod";
   <Br>

<style>
h2 {text-align: center;}
p {text-align: justify;}
</style>
