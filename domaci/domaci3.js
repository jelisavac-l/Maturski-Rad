constfs=require('fs');
setTimeout(()=>{console.log('Time..');},4000)
console.log('Hello');






constfs=require('fs');
lettext=fs.readFileSync('./hello.txt')
console.log(text)
fs.readFileSync('./hello.txt', 'itf-8' );






constfs=require('fs');
fs.readFile('./hello.txt', 'utf-8',(err,data)=>{if(err){console.log(err); 
   } else{
       console.log(data);   
     }
    })




constevents=require('events');
constemitter=newevents.EventEmitter();
emitter.addListener('smile',()=>{
console.log('something funny')})
emitter.emit('smile')

constevents=require('events');
constemitter=newevents.EventEmitter();
class Child extends events {constructor(childName){super();this.childName=childName;    }}
let maxim=new Child ('Maxim');
maxim.on('scream', function() {console.log(this.childName+' je gladan' );})
maxim.emit('scream');




constreadline=require('readline')
constrl=readline.createInterface({
    input: process.stdin,
    output: process.stdout});

constrand=Math.floor(Math.random()*5);
console.log('Pogodi magicni broj');
rl.prompt();
rl.on('line' , function(line)
{
    if(line==rand){
        console.log('Pogodak');
        rl.close();
    }
else{
    console.log('Pokusaj ponovo');
    rl.prompt();
}
})




constreadline=require('readline')
constfs=require('fs')
constrl=readline.createInterface({
    input: process.stdin,
    output: process.stdout});

    constquestion= ['name', 'age', 'job'];
    let i=0;
    function ask(){
        if (question.length!=i){
            console.log('What is your '+question[i]);
            rl.prompt();i++;    }
            else{console.log('Thanks for info');
            rl.close(); }}
            ask();
            rl.on('line', function(line){
                fs.appendFile('db.txt', line+'\n',
                function(err){if(err) throwerr;
                    
                    ask();   })})
                    rl.on('close',function(){
                        fs.appendFileSync('db.txt','******************** \n');
                    })










constfs=require('fs');
constreadStream=fs.createReadStream('sample.mp4');
constwriteStream=fs.createWriteStream('samplecopy.mp4');
readStream.on('data', function(chunk){console.log(chunk);})
readStream.on('open', function(){console.log('Stream open');})
readStream.on('close', function(){console.log('Stream close');})
constfs=require('fs');
constreadStream=fs.createReadStream('sample.mp4');
constwriteStream=fs.createWriteStream('samplecopy.mp4')
readStream.on('data', function(chunk){writeStream.write(chunk)});
readStream.on('open', function(){
    console.log('Stream open');})
    readStream.on('close', function(){console.log('Stream close');})







source.pipe(destination)

constfs=require('fs');
constreadStream=fs.createReadStream('sample.mp4');
constwriteStream=fs.createWriteStream('samplecopy.mp4')
readStream.pipe(writeStream);