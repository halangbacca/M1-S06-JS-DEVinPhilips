function randomUserGenerator(numeroDeUsuarios) {
    fetch(`https://randomuser.me/api/?results=${numeroDeUsuarios}`)
      .then((response) => response.json())
      .then (data => console.log(data.results[0].gender))
  }
  
 randomUserGenerator(4);
  