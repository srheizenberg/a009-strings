/*
# Exercício 1

Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
    ```
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3
    ```
    
Você deve usar apenas um `console.log()` para isso

  <details> */
  const nomeDoUsuario = prompt("Qual e o seu nome? ")
  prompt("liste três comidas favoritas")
  const comida1 = prompt('Qual e a sua comida favorita 1?')
  const comida2 = prompt('Qual e a sua comida favorita 2?')
  const comida3 = prompt('Qual e a sua comida favorita 3')

  console.log(`Estas são as comidas favoritas de ${nomeDoUsuario}\n-${comida1}\n-${comida2}\n-${comida3}`)