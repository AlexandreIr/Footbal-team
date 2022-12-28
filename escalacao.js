players={playerName, playerNumber, playerPosition}

function addPlayer(){

    let playerName=document.getElementById('player-name').value
    let playerNumber=document.getElementById('player-number').value
    let playerPosition=document.getElementById('player-position').value

    

    


    let conf=confirm("Deseja realmente adicionar "+ playerName+" na posição "+playerPosition+" com o número "+playerNumber+"?")

    if (conf){

       let teamPlayers=document.getElementById('teamPlayers')


       let name=document.createElement('p')
       name.innerText="Nome: "+playerName

       let position=document.createElement('li')
       position.innerText="Posição: "+playerPosition

       let num=document.createElement('p')
       num.innerText="Número: "+playerNumber

       name.className='player'+num
       position.className='player'+num
       num.className='player'+num


       teamPlayers.appendChild(position)
       teamPlayers.appendChild(name)
       teamPlayers.appendChild(num)
       

       document.getElementById('player-name').value=''
       document.getElementById('player-number').value=''
    
    }else {
        alert("O jogador não foi salvo")
        document.getElementById('player-name').value=''
        document.getElementById('player-number').value=''
       
    }

    
}



function removePlayer(){
    let num=prompt("Digite o numero do jogador que deseja remover do time")
    
    let playerRemove=document.getElementsByClassName('player'+num)

    let conf=confirm("Deseja realmente remover esse jogador da escalação?")
    if (conf){
        document.getElementById('teamPlayers').removeChild(playerRemove)
    }else {
        alert("O jogador não foi removido do time")
    }

    document.getElementById('player-name').value=''
    document.getElementById('player-number').value=''
}
