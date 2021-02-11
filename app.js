let ru_word;
let de_word;


    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }


    function next(){
      let l_len = dict.length;  
      let l_cur_idx =  getRandomInt(l_len);
      document.getElementById("ru").value = dict[l_cur_idx][0];
      ru_word = dict[l_cur_idx][0];
      de_word = dict[l_cur_idx][1];
      document.getElementById("de_input").value = "";
      document.getElementById("de_lable").classList.replace("w3-text-green", "w3-text-dark-grey");
      document.getElementById("de_lable").classList.replace("w3-text-red", "w3-text-dark-grey");
   

      }


    function check(){
      let cur_de_word = document.getElementById("de_input").value;
      if(de_word === cur_de_word){
        document.getElementById("de_lable").classList.replace("w3-text-dark-grey","w3-text-green");
        
      }
      else{
        document.getElementById("de_lable").classList.replace("w3-text-dark-grey","w3-text-red" );
        document.getElementById("de_input").value += "   (" +  de_word + ")" ;
      }  

    }