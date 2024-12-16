


function App() {
   setTimeout(()=> 
    document.querySelector('.list').innerHTML ='',5000
  )


let Game = [
  {Language:'JavaScript',color:'Yellow'},
  {Language:'Python',color:'Green'},
  {Language:'Java',color:'Red'},
  {Language:'C++',color:'Blue'},
  {Language:'c#',color:'Orange'},
  {Language:'PHP',color:'Gold'},
  {Language:'Ruby',color:'Pink'},
  {Language:'Go',color:'Grey'},
  {Language:'Rust',color:'Turquoise'},
  {Language:'Kotlin',color:'Magenta'},
  {Language:'TypeScript',color:'Silver'},
  {Language:'Scala',color:'Lime'},
  {Language:'Perl',color:'Navy'},
  {Language:'Haskell',color:'Lavender'},
  {Language:'MATLAB',color:'Purple'},
  {Language:'SQL',color:'Olive'},
  {Language:'C',color:'Aqua'},
  {Language:'Dart',color:'Ivory'},
  {Language:'Julia',color:'Chocolate'},
  {Language:'Lua',color:'Fuchsia'}

];
console.log(Game[1].color)
   function gameHandler(){
  let i;
  let lanChoice = document.querySelector('.language').value;
  console.log(lanChoice);
  let colChoice = document.querySelector('.color').value;
  console.log(colChoice);
  for(i; i <= Game.length -1 ;i++)
  if(lanChoice == Game[i].Language && colChoice == Game[i].color)
  {
      document.getElementById('result').innerHTML = 'You win';
  }else{
      document.getElementById('result').innerHTML = 'You lose';
  }
  
}
    return (
    <>
    <h2>Programming Languages</h2>
    <ol className='list' >
    <li style={{backgroundColor: 'Yellow'}}>JavaScript</li>
    <li style={{backgroundColor: 'Green'}}>Python</li>
    <li style={{backgroundColor: 'Red'}}>Java</li>
    <li style={{backgroundColor: 'Blue'}}>C++</li>
    <li style={{backgroundColor: 'Orange'}}>C#</li>
    <li style={{backgroundColor: 'Gold'}}>PHP</li>
    <li style={{backgroundColor: 'Pink'}}>Ruby</li>
    <li style={{backgroundColor: 'Grey'}}>Go</li>
    <li style={{backgroundColor: 'Turquoise'}}>Rust</li>
    <li style={{backgroundColor: 'Magenta'}}>Kotlin</li>
    <li style={{backgroundColor: 'Silver'}}>TypeScript</li>
    <li style={{backgroundColor: 'Lime'}}>Scala</li>
    <li style={{backgroundColor: 'Navy'}}>Perl</li>
    <li style={{backgroundColor: 'Lavender'}}>Haskell</li>
    <li style={{backgroundColor: 'Purple'}}>MATLAB</li>
    <li style={{backgroundColor: 'Olive'}}>SQL</li>
    <li style={{backgroundColor: 'Aqua'}}>C</li>
    <li style={{backgroundColor: 'Ivory'}}>Dart</li>
    <li style={{backgroundColor: 'Chocolate'}}>Julia</li>
    <li style={{backgroundColor: 'Fuchsia'}}>Lua</li>
    </ol>

    <label >Language</label><br />
    <input type="text" placeholder="Enter your language"  className="Language"/><br />
    <label >Color</label><br/>
    <input type="text" placeholder="Enter your corresponding color" className="color"  />

    <button onClick={gameHandler}>Submit</button>
    <p id="result"></p>
    </>
  );
}

export default App
