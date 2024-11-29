function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Draft Menu')
    .addItem('Run Snake Draft', 'snakeDraft')  
    .addToUi();
}

function snakeDraft() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const draftSheet = ss.getSheetByName("Draft System Demo"); //replace with the name of the draft sheet that has 6 columns: 1 for the team draft number and the other 5 for their 5 draft picks do not have headers and start at A1
  const playerDatabase = ss.getSheetByName("Players"); //replace with player database 

  const players = playerDatabase.getRange(6, 4, 237, 5).getValues();  //first value is the row number, the second value is the column number (starts at 0 ex. A=1, B=1), the third value is the number of rows to fetch (downwards) and the fourth value is the number of columns to fetch (to the right)
  players.sort((a, b) => b[0] - a[0]); //change value inside b and a with what columns it should sort with (ex. b[1]

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
//Last updated 2024-11-28
