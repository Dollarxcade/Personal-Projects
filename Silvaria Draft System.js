function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Draft Menu')
    .addItem('Run Snake Draft', 'snakeDraft')  
    .addToUi();
}

function snakeDraft() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const draftSheet = ss.getSheetByName("Draft System Demo"); 
  const playerDatabase = ss.getSheetByName("Players"); 

  const players = playerDatabase.getRange(6, 5, 237 - 5, 5).getValues();  

  players.sort((a, b) => b[0] - a[0]);

  const draftData = draftSheet.getDataRange().getValues();
  const teamCount = draftData.length; 

  const rounds = 5; 
  const draftOrder = [];

  for (let r = 0; r < rounds; r++) {
    if (r % 2 === 0) { 
      for (let t = 1; t <= teamCount; t++) {
        draftOrder.push(t);
      }
    } else { 
      for (let t = teamCount; t >= 1; t--) {
        draftOrder.push(t);
      }
    }
  }

  Logger.log("Draft Order: " + draftOrder);
  
let playerIndex = 0; 
const totalPicks = draftOrder.length; 
for (let i = 0; i < totalPicks && playerIndex < players.length; i++) {
    const teamRow = draftOrder[i]; 
    const teamRowIndex = teamRow; 
    
    Logger.log(`Pick ${i} for team ${teamRow}: ${players[playerIndex][2]}`);

    const isFirstRound = i < totalPicks / 2; 
    
    Logger.log(isFirstRound ? `First Round` : `Second Round`);

    if (teamRowIndex - 1 >= 0 && teamRowIndex - 1 < draftData.length) { 
      const nextEmptyCell = draftData[teamRowIndex - 1].findIndex(cell => !cell) + 1; 

      Logger.log(`Next empty cell for team ${teamRow}: ${nextEmptyCell}`);

      if (nextEmptyCell > 1 && nextEmptyCell <= 6) { 
        
        Logger.log(`Assigning ${players[playerIndex][2]} to team ${teamRow} at position ${nextEmptyCell}`);      
        
        const rowOffset = isFirstRound ? 0 : totalPicks; 
        draftSheet.getRange(teamRowIndex + rowOffset, nextEmptyCell).setValue(players[playerIndex][2]);
        
        playerIndex++; 
        Logger.log("Pick " + i + " for team " + teamRow + ": " + players[playerIndex-1][2]);
      }
    }
  }
}
//THIS CODE IS BROKEN DO NOT USE I REPEAT DO NOT USE IT WILL BREAK GOOGLE SHEETS
