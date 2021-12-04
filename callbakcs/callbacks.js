function imAsync(micallbakc)
{  
  setTimeout(function(){
    console.log('Hello, I\'m being  async function');
    micallbakc();
  },1000);
}
console.log('starting async process....');
imAsync(function ()
{
     console.log('ending async process....');
});

