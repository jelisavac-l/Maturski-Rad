function randomRedosled()
{
    let x,y;
    for(var i=0;i<arguments.length;i++)
    {
        x=Math.floor(Math.random()*(arguments.length));
        y=arguments[i];
        arguments[i]=arguments[x];
        arguments[x]=y;
    }
    for(var i=0;i<arguments.length;i++)
    {
       console.log(arguments[i]);
    }
}
randomRedosled(1,2,3,4,5);