# CONCEITOS  
<p>Declaração de variáveis:
<ul><li>var, let ou const</li></ul></p>

<p>Atribuição (recebe):
<ul><li>=</li></ul></p>

<p>Concatenação (string) ou soma (num):
<ul><li>+</li></ul></p>

<p>String:
<ul><li>'', "" ou ``</li></ul></p>

<p>Mudança de string para número:
<ul>
  <li>Number.parseInt(s) ou so parseInt(s)</li>
  <li>Number.parseFloat(s) ou so parseFloat(s)</li>
  <li>Number(s)</li>
</ul></p>

<p>Tratamento de decimais:
<ul><li>n.toFixed(x) em que x é o número de casas decimais que se deseja exibir</li></ul></p>

<p>Trocar . para , :
<ul><li>n.(alguma função, ex:toFixed).replace('.',',')</li></ul></p>

<p>Máscara de moeda (obs: substituir 'BRL' por 'USD' para dolar e 'EUR' para euro):
<ul><li>n.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})</li></ul></p>

<p>Placeholder (usar dentro da String com uso de ``):<ul><li>${variavel}</li></ul></p>

<p>Modificar caracteres na string
<ul>
  <li>s.toUpperCase() ->maiusculas</li>
  <li>s.toLowerCase() ->minusculas</li>
</ul>
</p>

<p>Tamanho da string:<ul><li>s.length</li></ul></p>

<p>Escrever no documento:
<ul><li>document.write('string que pode conter tags html')</li></ul></p>

<p>Concatenar html numa tag pegando seu id:
<ul><li>document.getElementById("id").innerHTML+=('string que pode conter tags html')</li></ul></p>

                                                            
