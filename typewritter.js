
   // code for typewritter effect

   let target = document.getElementsByClassName('dynamic-txts')[0];
   let target2 =  document.getElementsByClassName('dynamic-txts')[1];
   target.textContent = "";
   
   let arrayOfPhrases = ["Developer", "Leader", "Innovator"]
   
   let sizeOfPhraseArray = arrayOfPhrases.length;
   
           let n = 0;
   
           let letterIndex = 0;
           let phraseIndex = 0;
           function clearLetters(phrase)
           {
               if(letterIndex > -1)
               {
                   let updatedPhrase = "";
                   for(let i = 0; i<letterIndex; i++)
                   {
                       updatedPhrase += phrase[phraseIndex][i];
                   }
                   letterIndex--;
                   target.textContent = updatedPhrase;
                   target2.textContent = updatedPhrase;
                   setTimeout(()=>{clearLetters(phrase)}, 100)
               }else{
                   letterIndex++;
                   phraseIndex = (phraseIndex+1)%sizeOfPhraseArray;
                   setTimeout(()=>{typewritter(phrase)}
               , 100);
               }
               
           }
           function typewritter(phrase) {
   
               if(letterIndex === phrase[phraseIndex].length)
               {
                   clearLetters(phrase);
               }else if(letterIndex < phrase[phraseIndex].length){
               target.textContent += phrase[phraseIndex][letterIndex];
               target2.textContent += phrase[phraseIndex][letterIndex];
               letterIndex++;
               setTimeout(()=>{typewritter(phrase)}
               , 300);
           }
           }
           
           typewritter(arrayOfPhrases);