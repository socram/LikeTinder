# LikeTinder

Robô em Javascript para dar Like no tinder:
Como rodar:

Abra o Tinder no navegador https://tinder.com/app/matches

Abra o console JAVASCRIPT ( Inspect Element / F12 )

Cole um dos script abaixo


* semCriterio.js

```javascript
function sleep(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function LikeTinderSemCriterio() 
{
	for ( var i = 0 ; i < 1000 ; i++ )
	{
		document.getElementsByClassName('button__text Pos(r) Z(1)')[2].click();
		await sleep(1000);
	}
}
LikeTinderSemCriterio();
```


* comCriterio.js


```javascript

var dislike=0; 
var superLike=1;
var like=2;

function sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve, ms));
}


function criteria(search)
{
	var listDislike =   [
							 "naoTenhoCritérioFoda-se",
							 "Colocar sua listDislike do que nao dar LIKE"
						];
				 
	var count = 0;	
	
	for (var i = 0; i < listDislike.length; i++) 
	{
		var re = new RegExp(listDislike[i],"gi");
		var res = search.match(re);
			
		if (res != null ) { count++; }
	}

	if (count > 0 ) return false;
	else return true;
}



async function Roda() 
{
	var qntMaxLikes	 = 100;
	var timeWait 	 = 1000;
	
	for (var i = 0; i < qntMaxLikes; i++) 
	{
		
		var allFields = document.getElementsByClassName('recCard__footer Pos(a) C(#fff) Ta(start) P(20px) B(0) W(100%)')[1].innerHTML;
		
		if ( criteria(allFields) )
		{
			console.log('Like');
			document.getElementsByClassName('button__text Pos(r) Z(1)')[like].click();
		}
		else
		{
			console.log('Dislike');
			document.getElementsByClassName('button__text Pos(r) Z(1)')[dislike].click();
		}
		
		await sleep(timeWait);
		
		console.clear();

		console.log(" ┬ ┬  ╦═╗┌─┐┌┐ ┌─┐┌┬┐  ╔╦╗┬┌┐┌┌┬┐┌─┐┬─┐ ");
		console.log(" │ │  ╠╦╝│ │├┴┐│ │ │    ║ ││││ ││├┤ ├┬┘ ");
		console.log("└┘└┘  ╩╚═└─┘└─┘└─┘ ┴    ╩ ┴┘└┘─┴┘└─┘┴└─ ");
		
		console.log("Rodando  " + i + " / " + qntMaxLikes);

	}
}
Roda();



```
Vídeo de Exemplo
[![Robô Tinder](https://img.youtube.com/vi/zbT9mSieR3M/0.jpg)](https://www.youtube.com/watch?v=zbT9mSieR3M)


