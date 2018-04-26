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
LikeTinderSemCriterio()
