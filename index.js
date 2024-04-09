// code your solution here

function superbowlWin(records){
    const winRecords = records.find(record => record.result === "W");
    return winRecords ? winRecords.year : undefined;

   
}
