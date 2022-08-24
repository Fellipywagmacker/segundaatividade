const sub = document.querySelectorAll('h2');
        const titulo = new Array();
        sub.forEach(element => {
            
            titulo.push(element.textContent);
           
            const criarlink = document.createElement('a');
            criarlink.setAttribute('name', element.textContent);
            element.append(criarlink);
            
            const retornar = document.createElement('a');
            retornar.setAttribute('href', '#');
            retornar.textContent = "Voltar pra Sumário";
            element.parentElement.insertBefore(retornar, element.nextElementSibling);
        });
        const org = document.createElement('ol');
        document.body.insertBefore(org,document.querySelector('h1').nextElementSibling);
        titulo.forEach(topico => {
            
            const item = document.createElement('li');
            org.append(item);
           
            const transfolink = document.createElement('a');
            transfolink.setAttribute('href', `#${topico}`);
            transfolink.textContent = topico;
            item.append(transfolink);
        });


var dataAtual = new Date()
var dia = dataAtual.getDate()
var mes = (dataAtual.getMonth() + 1)
var ano = dataAtual.getFullYear()
var horas = dataAtual.getHours()
var minutos = dataAtual.getMinutes()
var div = document.getElementById('Horas')

    div.innerHTML = `Hoje é dia ${dia} / ${mes} / ${ano}. </br> Agora são ${horas} : ${minutos}`
    
