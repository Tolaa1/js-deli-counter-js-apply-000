

function takeANumber(line, newPerson){
line.push(newPerson);
  return 
  (welcome, $`{newPerson}. You are number ${line.length} in line.;`);
} 

function nowServing(line){

 { if (line.length === 0) 
  return "There is nobody waiting to be served!"; 
   
  else
  return( "Currently serving ${line.shift().;")}
  
  
}
 
    
function currentLine(line){
  if (!line.length) {
    return "The line is Currently empty."}

const x = []
     for (let i = 0; i < line.length; i++) { 
      x.push(`${i + 1}. ${line[i]}`)
     }   
  
 return "The line is currently: ${x.join(', ')}`;"


     }
