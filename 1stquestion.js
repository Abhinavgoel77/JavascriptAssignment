let str = ` Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`;

let wordCount=0,statementCount=1,alphaCount=0; let word='';
let c=1;
for(let i=0;i<str.length;i++)
{
     
      
    word = word + str[i];
    if(str[i] == ' ')
    wordCount++;
    
    if(str[i] == '.' || str[i] == '?' || str[i] == '!')
    {
        if(wordCount =>3)
          {
            var masked = word.replace(/[0-9\d]/gi,"X"); 

              console.log(statementCount + ". " + masked);
              word="";
              statementCount++;
              wordCount=0;
          }
    }
    
}
