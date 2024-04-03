async function consultarendereco(event){
  let cep = document.querySelector('#cep').value;
  event.preventDefault()
  try{
    let response = await fetch (`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    console.log(data);
    document.getElementById('rua').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.uf;
    console.log(response);
  }catch (error) {
    alert('cep invalido');
  }
   
  }
  
  async function getprevisao (){
    var lat = document.getElementById('lat').value;
    var long = document.getElementById('long').value;
    var firstName = document.getElementById('first-name').value;
    var email = document.getElementById('email').value;
    var cep = document.getElementById('cep').value;

    // Verificar se todos os campos obrigatórios estão preenchidos
    if (!lat || !long || !firstName || !email || !cep) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return; // Impedir o envio da solicitação se algum campo estiver em branco
    }

    try {
        const response = await fetch(
           `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m` 
        );
        const data = await response.json();
        console.log(data); 
        const temperature = data.hourly.temperature_2m[0]; 
        console.log(temperature);
        document.getElementById('tempo-prev').value = temperature + "°C"; 
    } catch(error) {
        alert('Coordenadas inválidas');
    }
}