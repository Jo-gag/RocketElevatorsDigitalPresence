 function menuChoice(){

        var type = document.getElementById("ddSelect").value
          if (type=="residentialVal") 
          {
            document.getElementById("residentialQ").style.display="block"
            document.getElementById("commercialQ").style.display="none"
            document.getElementById("corporateQ").style.display="none"
            document.getElementById("hybridQ").style.display="none" 
          }
          if (type=="commercialVal")
          {
            document.getElementById("residentialQ").style.display="none"
            document.getElementById("commercialQ").style.display="block"
            document.getElementById("corporateQ").style.display="none"
            document.getElementById("hybridQ").style.display="none"
          }
          if (type=="corporateVal") 
          {
            document.getElementById("residentialQ").style.display="none"
            document.getElementById("commercialQ").style.display="none"
            document.getElementById("corporateQ").style.display="block"
            document.getElementById("hybridQ").style.display="none" 
          }
          if (type=="hybridVal") 
          {
            document.getElementById("residentialQ").style.display="none"
            document.getElementById("commercialQ").style.display="none"
            document.getElementById("corporateQ").style.display="none"
            document.getElementById("hybridQ").style.display="block"
          }
          if (type=="select")
          {
            document.getElementById("residentialQ").style.display="none"
            document.getElementById("commercialQ").style.display="none"
            document.getElementById("corporateQ").style.display="none"
            document.getElementById("hybridQ").style.display="none"
          }

    }


var totalElevator =document.getElementById("requiredElevatorID").value;
var unitPrice =document.getElementById("unitPriceID").value;
var totalPrice =document.getElementById("totalPriceID").value;





function commElevators() {
  commercial_depElevator = document.getElementById("commercial_depElevator").value
  document.getElementById("requiredElevatorID").value = commercial_depElevator
  
}


function calculRes() {
  //residential
  var appartmentsRes =document.getElementById("residential_nb_appartments").value;
  var floorsRes =document.getElementById("residential_nb_floors").value;
  console.log("appartmentsRes",appartmentsRes)
  var avgAppRes = appartmentsRes / floorsRes
  document.getElementById("requiredElevatorID").value = avgAppRes
  var requiredCages = avgAppRes/6
  document.getElementById("requiredElevatorID").value = requiredCages
  
    var stdPrice =document.getElementById("standardPrice").value;
    var premPrice =document.getElementById("premiumPrice").value;
    var excelPrice =document.getElementById("exceliumPrice").value;
    var elvQuality =document.getElementById("elevatorQuality").value;
    if(elvQuality[0].checked)
    {
      var totalCostRes = (requiredCages * stdPrice) * 0.10
      document.getElementById("totalPriceID").value = totalCostRes
    }
    if(elvQuality[1].checked)
      {
      var totalCostRes = (requiredCages * premPrice) * 0.13
      document.getElementById("totalPriceID").value = totalCostRes
      }
      if(elvQuality[2].checked)
      {
      var totalCostRes = (requiredCages * excelPrice) * 0.16
      document.getElementById("totalPriceID").value = totalCostRes
      }
    
    }



function calculCorp() {
  //corporate
  var occupantsCorporate =document.getElementById("corporate_maxOccupants").value;
  var floorsCorp =document.getElementById("corporate_nb_floors").value;
  var basementsCorp =document.getElementById("corporate_nb_basements").value;

  var totOccCorpo = occupantsCorporate * (floorsCorp + basementsCorp)
  var ascenseurRequisCorp = totOccCorpo / 1000
  var requiredColumnCorp = (floorsCorp + basementsCorp)/20
  document.getElementById("requiredElevatorID").value = ascenseurRequisCorp / requiredColumnCorp

  
  
  
}


function calculHybrid() {
  //hybrid
  var occupantsHybrid =document.getElementById("hybrid_maxOccupants").value;
  var floorsHybrid =document.getElementById("hybrid_nb_floors").value;
  var basementsHybrid =document.getElementById("hybrid_nb_basements").value;

  var totOccHybrid = occupantsHybrid * (floorsHybrid + basementsHybrid)
  var ascenseurRequisHybrid = totOccHybrid / 1000
  var requiredColumnHybrid = (floorsHybrid + basementsHybrid) / 20
  document.getElementById("requiredElevatorsID").value = ascenseurRequisHybrid / requiredColumnHybrid



}
