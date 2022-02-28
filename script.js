function myFunction() {

     //aqui eu pego os inputs do html
     let fname = document.getElementById("fname").value;
     let lname = document.getElementById("lname").value;
     const date = document.getElementById("date").value;
     //agora eu separo a data
     const [bYear, bMonth, bDay]=date.split('-')
     //declaro idade que veremos depois
     var idade

     //crio a variavel que me dá informações atuais
     var dt= new Date();
     //dessa variavel eu pego dia, mês e ano
     var nDay= dt.getDate();
     var nMonth= dt.getMonth() +1;
     var nYear=dt.getFullYear();

     //agora eu calculo a idade
     idade = nYear - bYear
     if(nMonth < bMonth || nMonth == bMonth && nDay < bDay){
         idade--;}
     
     //comparo a data de nascimento com data atual pelo console
     console.log("aniversario do cliente: "+date)
     console.log("Data de hoje :"+nDay+"/"+nMonth+"/"+nYear)

          //crio uma variavel que diz se é maior ou não
     if (idade >= 18){
          maior="maior de idade! \nConclua seu cadastro baixando nosso app!"}
     else{
          maior="menor de idade...\n Infelizmente só é permitido maiores de idade."} 
     
     if(idade >200){
          alert("Favor conferir seus dados, se o problema persistir, recarregue a pagina.")}
          else{
          //texto final que vai aparecer no resultado do cadastro
     alert(`Seu nome é:  ${fname} ${lname}\nNasceu em ${bDay}/${bMonth}/${bYear}\nVocê tem ${idade} anos e é ${maior}`);}
   }