$(document).ready(function(){
	
  var dropDowns = 2;

  for (var i=1; i<=dropDowns; i++) {
    //on hover of the correct a, display the correct dropdown
    var link = ".drop-"+[i];
    $(link).mouseover({value: i}, function(e){
      $(".drop-down-content-"+[e.data.value]).css("display", "block");
      $(".drop-down-content-"+[e.data.value]).addClass("drop-down-style");
    });
    $(link).mouseleave({value: i}, function(e){
      $(".drop-down-content-"+[e.data.value]).css("display", "none");
    });
  }
  
});
window.onload = documentReady;



function documentReady(){

	var dice1; 
	var dice2;
	var dice3;
	var dice4;
	var dice5;
	var diceTOKArray = [];
	var diceFOKArray = [];
	var diceFHArray = [];
	var diceSSArray = [];
	var diceLSArray = [];
	
	var rolled1s = 0;
	var rolled2s = 0;
	var rolled3s = 0;
	var rolled4s = 0;
	var rolled5s = 0;
	var rolled6s = 0;
	var eitherSide;
	var upperSectionTotal = 0;
	var oneSubmitted = false;
	var twoSubmitted = false;
	var threeSubmitted = false;
	var fourSubmitted = false;
	var fiveSubmitted = false;
	var sixSubmitted = false;
	
	var scoredThisTurn = false;
	
	var chanceTotal = 0;
	
	var largeStraightScored = false;
	var yahtzeeScored = false;
	
	var lowerSectionTotal = 0;
	
	var TOK1 = 0;
	var TOK2 = 0;
	var TOK3 = 0;
	var TOK4 = 0;
	var TOK5 = 0;
	var TOK6 = 0;
	
	var FOK1 = 0;
	var FOK2 = 0;
	var FOK3 = 0;
	var FOK4 = 0;
	var FOK5 = 0;
	var FOK6 = 0;
	
	var FH1 = 0;
	var FH2 = 0;
	var FH3 = 0;
	var FH4 = 0;
	var FH5 = 0;
	var FH6 = 0;
	
	var SS1 = 0;
	var SS2 = 0;
	var SS3 = 0;
	var SS4 = 0;
	var SS5 = 0;
	var SS6 = 0;
	
	var LS1 = 0;
	var LS2 = 0;
	var LS3 = 0;
	var LS4 = 0;
	var LS5 = 0;
	var LS6 = 0;
	
	var TOKTotal = 0;
	var FOKTotal = 0;
	var rollsThisTurn = 0;
	
	var hold1Status = false;
	var hold2Status = false;
	var hold3Status = false;
	var hold4Status = false;
	var hold5Status = false;
	
	var rollButton = document.getElementById("rollAgain");
	var pickupButton = document.getElementById("pickupDice:");
	var changeHold1 = document.getElementById("roll1div");
	var changeHold2 = document.getElementById("roll2div");
	var changeHold3 = document.getElementById("roll3div");
	var changeHold4 = document.getElementById("roll4div");
	var changeHold5 = document.getElementById("roll5div");
	
	var dice1Img = "img/dice1.png";
	var dice2Img = "img/dice2.png";
	var dice3Img = "img/dice3.png";
	var dice4Img = "img/dice4.png";
	var dice5Img = "img/dice5.png";
	var dice6Img = "img/dice6.png";
	
	var firstDiceText = document.getElementById("firstDice");
	var firstDiceStatus = document.getElementById("dice1Status");
	var secondDiceText = document.getElementById("secondDice");
	var secondDiceStatus = document.getElementById("dice2Status");
	var thirdDiceText = document.getElementById("thirdDice");
	var thirdDiceStatus = document.getElementById("dice3Status");
	var fourthDiceText = document.getElementById("fourthDice");
	var fourthDiceStatus = document.getElementById("dice4Status");
	var fifthDiceText = document.getElementById("fifthDice");
	var fifthDiceStatus = document.getElementById("dice5Status");
	
	var scoreTotal = 0;
	
	var scoreOneButton = document.getElementById("scoreOneButton");
	var scoreOneOutput = document.getElementById("scoreOfOnes");
	var scoreTwoButton = document.getElementById("scoreTwoButton");
	var scoreTwoOutput = document.getElementById("scoreOfTwos");
	var scoreThreeButton = document.getElementById("scoreThreeButton");
	var scoreThreeOutput = document.getElementById("scoreOfThrees");
	var scoreFourButton = document.getElementById("scoreFourButton");
	var scoreFourOutput = document.getElementById("scoreOfFours");
	var scoreFiveButton = document.getElementById("scoreFiveButton");
	var scoreFiveOutput = document.getElementById("scoreOfFives");
	var scoreSixButton = document.getElementById("scoreSixButton");
	var scoreSixOutput = document.getElementById("scoreOfSixes");
	var scoreTOKOutput = document.getElementById("scoreOf3OfAKind");
	var scoreFOKOutput = document.getElementById("scoreOf4OfAKind");
	var scoreFHOutput = document.getElementById("scoreOfFullHouse");
	var scoreSSOutput = document.getElementById("scoreOfSmallStraight");
	var scoreLSOutput = document.getElementById("scoreOfLargeStraight");
	var chanceOutput = document.getElementById("scoreOfChance");
	var scratchOneButton = document.getElementById("scratchOneButton");
	var scratchTwoButton = document.getElementById("scratchTwoButton");
	var scratchThreeButton = document.getElementById("scratchThreeButton");
	var scratchFourButton = document.getElementById("scratchFourButton");
	var scratchFiveButton = document.getElementById("scratchFiveButton");
	var scratchSixButton = document.getElementById("scratchSixButton");
	var displayRemRolls = document.getElementById("displayRolls");
	
	var upperSectionDisplay = document.getElementById("upperSectionScore");
	var bonusScoreDisplay = document.getElementById("bonusScore");
	var upperFinalScore = document.getElementById("upperTotalScore");
	var finalLowerScore = document.getElementById("finalLowerTotal");
	var finalUpperScore = document.getElementById("finalUpperTotal");
	var finalGrandScore = document.getElementById("finalGrandTotal");
	
	rollButton.onclick = rollDice;
	pickupDice.onclick = resetDice;
	changeHold1.onclick = dice1Hold;
	changeHold2.onclick = dice2Hold;
	changeHold3.onclick = dice3Hold;
	changeHold4.onclick = dice4Hold;
	changeHold5.onclick = dice5Hold;
	
	scoreOneButton.onclick = scoreOnes;
	scoreTwoButton.onclick = scoreTwos;
	scoreThreeButton.onclick = scoreThrees;
	scoreFourButton.onclick = scoreFours;
	scoreFiveButton.onclick = scoreFives;
	scoreSixButton.onclick = scoreSixes;
	score3OfAKindButton.onclick = score3OfAKind;
	score4OfAKindButton.onclick = score4OfAKind;
	scoreFullHouseButton.onclick = scoreFullHouse;
	scoreSmallStraightButton.onclick = scoreSmallStraight;
	scoreLargeStraightButton.onclick = scoreLargeStraight;
	scoreYahtzeeButton.onclick = scoreYahtzee;
	scoreChanceButton.onclick = scoreChance;
	
	scratchOneButton.onclick = scratchOne;
	scratchTwoButton.onclick = scratchTwo;
	scratchThreeButton.onclick = scratchThree;
	scratchFourButton.onclick = scratchFour;
	scratchFiveButton.onclick = scratchFive;
	scratchSixButton.onclick = scratchSix;
	scratch3OfAKindButton.onclick = scratchTOK;
	scratch4OfAKindButton.onclick = scratchFOK;
	scratchFullHouseButton.onclick = scratchFH;
	scratchSmallStraightButton.onclick = scratchSS;
	scratchLargeStraightButton.onclick = scratchLS;
	scratchYahtzeeButton.onclick = scratchYahtzee;
	scratchChanceButton.onclick = scratchChance;
	
	upperSectionDisplay.innerHTML = upperSectionTotal;
	

	function rollDice()
	{
		displayRemRolls.innerHTML = "Remaining Rolls: " + (2 - rollsThisTurn);
		if(dice1 == undefined)
		{
			changeHold1.style.backgroundColor = "red";
			firstDiceStatus.innerHTML = "Rerolling";
			changeHold2.style.backgroundColor = "red";
			secondDiceStatus.innerHTML = "Rerolling";	
			changeHold3.style.backgroundColor = "red";
			thirdDiceStatus.innerHTML = "Rerolling";
			changeHold4.style.backgroundColor = "red";
			fourthDiceStatus.innerHTML = "Rerolling";	
			changeHold5.style.backgroundColor = "red";
			fifthDiceStatus.innerHTML = "Rerolling";			
		}
		if(rollsThisTurn < 3)
		{		
			if(largeStraightScored == true)
			{
				if(hold1Status == false)
				{
					if(dice1 == 1)
					{
						rolled1s--;
					}
					if(dice1 == 2)
					{
						rolled2s--;
					}
					if(dice1 == 3)
					{
						rolled3s--;
					}
					if(dice1 == 4)
					{
						rolled4s--;
					}
					if(dice1 == 5)
					{
						rolled5s--;
					}
					if(dice1 == 6)
					{
						rolled6s--;
					}
					if(rolled1s == 4)
					{
						dice1 = Math.floor((Math.random()*5)+2);
					}
					if(rolled2s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice1 = Math.floor((Math.random()*4)+3);
						}
						else
						{
							dice1 = 1;
						}
					}
					else if(rolled3s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice1 = Math.floor((Math.random()*2)+1);
						}
						else
						{
							dice1 = Math.floor((Math.random()*3)+4);
						}
					}
					else if(rolled4s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice1 = Math.floor((Math.random()*3)+1);
						}
						else
						{
							dice1 = Math.floor((Math.random()*2)+5);
						}
					}
					else if(rolled5s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice1 = Math.floor((Math.random()*4)+1);
						}
						else
						{
							dice1 = 6;
						}
					}
					else
					{
						if(rolled6s < 3)
						{
							dice1 = Math.floor((Math.random()*6)+1);
							if(dice1 == 6)
							{
								rolled6s++;
							}
						}
						else
						{
							dice1 = Math.floor((Math.random()*5)+1);
						}
					}
					if(dice1 == 1)
					{
						rolled1s++;
					}
					if(dice1 == 2)
					{
						rolled2s++;
					}
					if(dice1 == 3)
					{
						rolled3s++;
					}
					if(dice1 == 4)
					{
						rolled4s++;
					}
					if(dice1 == 5)
					{
						rolled5s++;
					}
				}
				if(hold2Status == false)
				{
					if(dice2 == 1)
					{
						rolled1s--;
					}
					if(dice2 == 2)
					{
						rolled2s--;
					}
					if(dice2 == 3)
					{
						rolled3s--;
					}
					if(dice2 == 4)
					{
						rolled4s--;
					}
					if(dice2 == 5)
					{
						rolled5s--;
					}
					if(dice2 == 6)
					{
						rolled6s--;
					}
					if(rolled1s == 4)
					{
						dice2 = Math.floor((Math.random()*5)+2);
					}
					if(rolled2s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice2 = Math.floor((Math.random()*4)+3);
						}
						else
						{
							dice2 = 1;
						}
					}
					else if(rolled3s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice2 = Math.floor((Math.random()*2)+1);
						}
						else
						{
							dice2 = Math.floor((Math.random()*3)+4);
						}
					}
					else if(rolled4s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice2 = Math.floor((Math.random()*3)+1);
						}
						else
						{
							dice2 = Math.floor((Math.random()*2)+5);
						}
					}
					else if(rolled5s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice2 = Math.floor((Math.random()*4)+1);
						}
						else
						{
							dice2 = 6;
						}
					}
					else
					{
						if(rolled6s < 3)
						{
							dice2 = Math.floor((Math.random()*6)+1);
							if(dice2 == 6)
							{
								rolled6s++;
							}
						}
						else
						{
							dice2 = Math.floor((Math.random()*5)+1);
						}
					}
					if(dice2 == 1)
					{
						rolled1s++;
					}
					if(dice2 == 2)
					{
						rolled2s++;
					}
					if(dice2 == 3)
					{
						rolled3s++;
					}
					if(dice2 == 4)
					{
						rolled4s++;
					}
					if(dice2 == 5)
					{
						rolled5s++;
					}
				}	
				if(hold3Status == false)
				{
					if(dice3 == 1)
					{
						rolled1s--;
					}
					if(dice3 == 2)
					{
						rolled2s--;
					}
					if(dice3 == 3)
					{
						rolled3s--;
					}
					if(dice3 == 4)
					{
						rolled4s--;
					}
					if(dice3 == 5)
					{
						rolled5s--;
					}
					if(dice3 == 6)
					{
						rolled6s--;
					}
					if(rolled1s == 4)
					{
						dice3 = Math.floor((Math.random()*5)+2);
					}
					if(rolled2s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice3 = Math.floor((Math.random()*4)+3);
						}
						else
						{
							dice3 = 1;
						}
					}
					else if(rolled3s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice3 = Math.floor((Math.random()*2)+1);
						}
						else
						{
							dice3 = Math.floor((Math.random()*3)+4);
						}
					}
					else if(rolled4s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice3 = Math.floor((Math.random()*3)+1);
						}
						else
						{
							dice3 = Math.floor((Math.random()*2)+5);
						}
					}
					else if(rolled5s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice3 = Math.floor((Math.random()*4)+1);
						}
						else
						{
							dice3 = 6;
						}
					}
					else
					{
						if(rolled6s < 3)
						{
							dice3 = Math.floor((Math.random()*6)+1);
							if(dice3 == 6)
							{
								rolled6s++;
							}
						}
						else
						{
							dice3 = Math.floor((Math.random()*5)+1);
						}
					}
					if(dice3 == 1)
					{
						rolled1s++;
					}
					if(dice3 == 2)
					{
						rolled2s++;
					}
					if(dice3 == 3)
					{
						rolled3s++;
					}
					if(dice3 == 4)
					{
						rolled4s++;
					}
					if(dice3 == 5)
					{
						rolled5s++;
					}
				}
				if(hold4Status == false)
				{
					if(dice4 == 1)
					{
						rolled1s--;
					}
					if(dice4 == 2)
					{
						rolled2s--;
					}
					if(dice4 == 3)
					{
						rolled3s--;
					}
					if(dice4 == 4)
					{
						rolled4s--;
					}
					if(dice4 == 5)
					{
						rolled5s--;
					}
					if(dice4 == 6)
					{
						rolled6s--;
					}
					if(rolled1s == 4)
					{
						dice4 = Math.floor((Math.random()*5)+2);
					}
					if(rolled2s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice4 = Math.floor((Math.random()*4)+3);
						}
						else
						{
							dice4 = 1;
						}
					}
					else if(rolled3s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice4 = Math.floor((Math.random()*2)+1);
						}
						else
						{
							dice4 = Math.floor((Math.random()*3)+4);
						}
					}
					else if(rolled4s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice4 = Math.floor((Math.random()*3)+1);
						}
						else
						{
							dice4 = Math.floor((Math.random()*2)+5);
						}
					}
					else if(rolled5s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice4 = Math.floor((Math.random()*4)+1);
						}
						else
						{
							dice4 = 6;
						}
					}
					else
					{
						if(rolled6s < 3)
						{
							dice4 = Math.floor((Math.random()*6)+1);
							if(dice4 == 6)
							{
								rolled6s++;
							}
						}
						else
						{
							dice4 = Math.floor((Math.random()*5)+1);
						}
					}
					if(dice4 == 1)
					{
						rolled1s++;
					}
					if(dice4 == 2)
					{
						rolled2s++;
					}
					if(dice4 == 3)
					{
						rolled3s++;
					}
					if(dice4 == 4)
					{
						rolled4s++;
					}
					if(dice4 == 5)
					{
						rolled5s++;
					}
				}
				if(hold5Status == false)
				{
					if(dice5 == 1)
					{
						rolled1s--;
					}
					if(dice5 == 2)
					{
						rolled2s--;
					}
					if(dice5 == 3)
					{
						rolled3s--;
					}
					if(dice5 == 4)
					{
						rolled4s--;
					}
					if(dice5 == 5)
					{
						rolled5s--;
					}
					if(dice5 == 6)
					{
						rolled6s--;
					}
					if(rolled1s == 4)
					{
						dice5 = Math.floor((Math.random()*5)+2);
					}
					if(rolled2s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice5 = Math.floor((Math.random()*4)+3);
						}
						else
						{
							dice5 = 1;
						}
					}
					else if(rolled3s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice5 = Math.floor((Math.random()*2)+1);
						}
						else
						{
							dice5 = Math.floor((Math.random()*3)+4);
						}
					}
					else if(rolled4s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice5 = Math.floor((Math.random()*3)+1);
						}
						else
						{
							dice5 = Math.floor((Math.random()*2)+5);
						}
					}
					else if(rolled5s == 4)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice5 = Math.floor((Math.random()*4)+1);
						}
						else
						{
							dice5 = 6;
						}
					}
					else
					{
						if(rolled6s < 3)
						{
							dice5 = Math.floor((Math.random()*6)+1);
							if(dice5 == 6)
							{
								rolled6s++;
							}
						}
						else
						{
							dice5 = Math.floor((Math.random()*5)+1);
						}
					}
					if(dice5 == 1)
					{
						rolled1s++;
					}
					if(dice5 == 2)
					{
						rolled2s++;
					}
					if(dice5 == 3)
					{
						rolled3s++;
					}
					if(dice5 == 4)
					{
						rolled4s++;
					}
					if(dice5 == 5)
					{
						rolled5s++;
					}
				}
			}
			else if(yahtzeeScored == true)
			{
				if(hold1Status == false)
				{
					if(dice1 == 1)
					{
						rolled1s--;
					}
					if(dice1 == 2)
					{
						rolled2s--;
					}
					if(dice1 == 3)
					{
						rolled3s--;
					}
					if(dice1 == 4)
					{
						rolled4s--;
					}
					if(dice1 == 5)
					{
						rolled5s--;
					}
					if(dice1 == 6)
					{
						rolled6s--;
					}
					if(rolled1s == 1 && rolled2s == 1 && rolled3s == 1 && rolled4s == 1)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice1 = Math.floor((Math.random()*4)+1);
						}
						else
						{
							dice1 = 6;
						}
					}
					else if(rolled2s == 1 && rolled3s == 1 && rolled4s == 1 && rolled5s == 1)
					{
						dice1 = Math.floor((Math.random()*4)+2);
					}
					if(rolled3s == 1 && rolled4s == 1 && rolled5s == 1 && rolled6s == 1)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice1 = Math.floor((Math.random()*4)+3);
						}
						else
						{
							dice1 = 1;
						}
					}
					else
					{
						if(rolled1s == 4)
						{
							dice1 = Math.floor((Math.random()*5)+2);
						}
						if(rolled2s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice1 = Math.floor((Math.random()*4)+3);
							}
							else
							{
								dice1 = 1;
							}
						}
						else if(rolled3s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice1 = Math.floor((Math.random()*2)+1);
							}
							else
							{
								dice1 = Math.floor((Math.random()*3)+4);
							}
						}
						else if(rolled4s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice1 = Math.floor((Math.random()*3)+1);
							}
							else
							{
								dice1 = Math.floor((Math.random()*2)+5);
							}
						}
						else if(rolled5s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice1 = Math.floor((Math.random()*4)+1);
							}
							else
							{
								dice1 = 6;
							}
						}
						else
						{
							if(rolled6s < 3)
							{
								dice1 = Math.floor((Math.random()*6)+1);
								if(dice1 == 6)
								{
									rolled6s++;
								}
							}
							else
							{
								dice1 = Math.floor((Math.random()*5)+1);
							}
						}
					}
					if(dice1 == 1)
					{
						rolled1s++;
					}
					if(dice1 == 2)
					{
						rolled2s++;
					}
					if(dice1 == 3)
					{
						rolled3s++;
					}
					if(dice1 == 4)
					{
						rolled4s++;
					}
					if(dice1 == 5)
					{
						rolled5s++;
					}
				}
				if(hold2Status == false)
				{
					if(dice2 == 1)
					{
						rolled1s--;
					}
					if(dice2 == 2)
					{
						rolled2s--;
					}
					if(dice2 == 3)
					{
						rolled3s--;
					}
					if(dice2 == 4)
					{
						rolled4s--;
					}
					if(dice2 == 5)
					{
						rolled5s--;
					}
					if(dice2 == 6)
					{
						rolled6s--;
					}
					if(rolled1s == 1 && rolled2s == 1 && rolled3s == 1 && rolled4s == 1)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice2 = Math.floor((Math.random()*4)+1);
						}
						else
						{
							dice2 = 6;
						}
					}
					else if(rolled2s == 1 && rolled3s == 1 && rolled4s == 1 && rolled5s == 1)
					{
						dice2 = Math.floor((Math.random()*4)+2);
					}
					if(rolled3s == 1 && rolled4s == 1 && rolled5s == 1 && rolled6s == 1)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice2 = Math.floor((Math.random()*4)+3);
						}
						else
						{
							dice2 = 1;
						}
					}
					else
					{
						if(rolled1s == 4)
						{
							dice2 = Math.floor((Math.random()*5)+2);
						}
						if(rolled2s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice2 = Math.floor((Math.random()*4)+3);
							}
							else
							{
								dice2 = 1;
							}
						}
						else if(rolled3s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice2 = Math.floor((Math.random()*2)+1);
							}
							else
							{
								dice2 = Math.floor((Math.random()*3)+4);
							}
						}
						else if(rolled4s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice2 = Math.floor((Math.random()*3)+1);
							}
							else
							{
								dice2 = Math.floor((Math.random()*2)+5);
							}
						}
						else if(rolled5s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice2 = Math.floor((Math.random()*4)+1);
							}
							else
							{
								dice2 = 6;
							}
						}
						else
						{
							if(rolled6s < 3)
							{
								dice2 = Math.floor((Math.random()*6)+1);
								if(dice2 == 6)
								{
									rolled6s++;
								}
							}
							else
							{
								dice2 = Math.floor((Math.random()*5)+1);
							}
						}
					}
					if(dice2 == 1)
					{
						rolled1s++;
					}
					if(dice2 == 2)
					{
						rolled2s++;
					}
					if(dice2 == 3)
					{
						rolled3s++;
					}
					if(dice2 == 4)
					{
						rolled4s++;
					}
					if(dice2 == 5)
					{
						rolled5s++;
					}
				}
				if(hold3Status == false)
				{
					if(dice3 == 1)
					{
						rolled1s--;
					}
					if(dice3 == 2)
					{
						rolled2s--;
					}
					if(dice3 == 3)
					{
						rolled3s--;
					}
					if(dice3 == 4)
					{
						rolled4s--;
					}
					if(dice3 == 5)
					{
						rolled5s--;
					}
					if(dice3 == 6)
					{
						rolled6s--;
					}
					if(rolled1s == 1 && rolled2s == 1 && rolled3s == 1 && rolled4s == 1)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice3 = Math.floor((Math.random()*4)+1);
						}
						else
						{
							dice3 = 6;
						}
					}
					else if(rolled2s == 1 && rolled3s == 1 && rolled4s == 1 && rolled5s == 1)
					{
						dice3 = Math.floor((Math.random()*4)+2);
					}
					if(rolled3s == 1 && rolled4s == 1 && rolled5s == 1 && rolled6s == 1)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice3 = Math.floor((Math.random()*4)+3);
						}
						else
						{
							dice3 = 1;
						}
					}
					else
					{
						if(rolled1s == 4)
						{
							dice3 = Math.floor((Math.random()*5)+2);
						}
						if(rolled2s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice3 = Math.floor((Math.random()*4)+3);
							}
							else
							{
								dice3 = 1;
							}
						}
						else if(rolled3s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice3 = Math.floor((Math.random()*2)+1);
							}
							else
							{
								dice3 = Math.floor((Math.random()*3)+4);
							}
						}
						else if(rolled4s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice3 = Math.floor((Math.random()*3)+1);
							}
							else
							{
								dice3 = Math.floor((Math.random()*2)+5);
							}
						}
						else if(rolled5s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice3 = Math.floor((Math.random()*4)+1);
							}
							else
							{
								dice3 = 6;
							}
						}
						else
						{
							if(rolled6s < 3)
							{
								dice3 = Math.floor((Math.random()*6)+1);
								if(dice3 == 6)
								{
									rolled6s++;
								}
							}
							else
							{
								dice3 = Math.floor((Math.random()*5)+1);
							}
						}
					}
					if(dice3 == 1)
					{
						rolled1s++;
					}
					if(dice3 == 2)
					{
						rolled2s++;
					}
					if(dice3 == 3)
					{
						rolled3s++;
					}
					if(dice3 == 4)
					{
						rolled4s++;
					}
					if(dice3 == 5)
					{
						rolled5s++;
					}
				}
				if(hold4Status == false)
				{
					if(dice4 == 1)
					{
						rolled1s--;
					}
					if(dice4 == 2)
					{
						rolled2s--;
					}
					if(dice4 == 3)
					{
						rolled3s--;
					}
					if(dice4 == 4)
					{
						rolled4s--;
					}
					if(dice4 == 5)
					{
						rolled5s--;
					}
					if(dice4 == 6)
					{
						rolled6s--;
					}
					if(rolled1s == 1 && rolled2s == 1 && rolled3s == 1 && rolled4s == 1)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice4 = Math.floor((Math.random()*4)+1);
						}
						else
						{
							dice4 = 6;
						}
					}
					else if(rolled2s == 1 && rolled3s == 1 && rolled4s == 1 && rolled5s == 1)
					{
						dice4 = Math.floor((Math.random()*4)+2);
					}
					if(rolled3s == 1 && rolled4s == 1 && rolled5s == 1 && rolled6s == 1)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice4 = Math.floor((Math.random()*4)+3);
						}
						else
						{
							dice4 = 1;
						}
					}
					else
					{
						if(rolled1s == 4)
						{
							dice4 = Math.floor((Math.random()*5)+2);
						}
						if(rolled2s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice4 = Math.floor((Math.random()*4)+3);
							}
							else
							{
								dice4 = 1;
							}
						}
						else if(rolled3s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice4 = Math.floor((Math.random()*2)+1);
							}
							else
							{
								dice4 = Math.floor((Math.random()*3)+4);
							}
						}
						else if(rolled4s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice4 = Math.floor((Math.random()*3)+1);
							}
							else
							{
								dice4 = Math.floor((Math.random()*2)+5);
							}
						}
						else if(rolled5s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice4 = Math.floor((Math.random()*4)+1);
							}
							else
							{
								dice4 = 6;
							}
						}
						else
						{
							if(rolled6s < 3)
							{
								dice4 = Math.floor((Math.random()*6)+1);
								if(dice4 == 6)
								{
									rolled6s++;
								}
							}
							else
							{
								dice4 = Math.floor((Math.random()*5)+1);
							}
						}
					}
					if(dice4 == 1)
					{
						rolled1s++;
					}
					if(dice4 == 2)
					{
						rolled2s++;
					}
					if(dice4 == 3)
					{
						rolled3s++;
					}
					if(dice4 == 4)
					{
						rolled4s++;
					}
					if(dice4 == 5)
					{
						rolled5s++;
					}
				}
				if(hold5Status == false)
				{
					if(dice5 == 1)
					{
						rolled1s--;
					}
					if(dice5 == 2)
					{
						rolled2s--;
					}
					if(dice5 == 3)
					{
						rolled3s--;
					}
					if(dice5 == 4)
					{
						rolled4s--;
					}
					if(dice5 == 5)
					{
						rolled5s--;
					}
					if(dice5 == 6)
					{
						rolled6s--;
					}
					if(rolled1s == 1 && rolled2s == 1 && rolled3s == 1 && rolled4s == 1)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice5 = Math.floor((Math.random()*4)+1);
						}
						else
						{
							dice5 = 6;
						}
					}
					else if(rolled2s == 1 && rolled3s == 1 && rolled4s == 1 && rolled5s == 1)
					{
						dice5 = Math.floor((Math.random()*4)+2);
					}
					if(rolled3s == 1 && rolled4s == 1 && rolled5s == 1 && rolled6s == 1)
					{
						eitherSide = Math.floor((Math.random()*2)+1);
						if(eitherSide == 1)
						{
							dice5 = Math.floor((Math.random()*4)+3);
						}
						else
						{
							dice5 = 1;
						}
					}
					else
					{
						if(rolled1s == 4)
						{
							dice5 = Math.floor((Math.random()*5)+2);
						}
						if(rolled2s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice5 = Math.floor((Math.random()*4)+3);
							}
							else
							{
								dice5 = 1;
							}
						}
						else if(rolled3s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice5 = Math.floor((Math.random()*2)+1);
							}
							else
							{
								dice5 = Math.floor((Math.random()*3)+4);
							}
						}
						else if(rolled4s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice5 = Math.floor((Math.random()*3)+1);
							}
							else
							{
								dice5 = Math.floor((Math.random()*2)+5);
							}
						}
						else if(rolled5s == 4)
						{
							eitherSide = Math.floor((Math.random()*2)+1);
							if(eitherSide == 1)
							{
								dice5 = Math.floor((Math.random()*4)+1);
							}
							else
							{
								dice5 = 6;
							}
						}
						else
						{
							if(rolled6s < 3)
							{
								dice5 = Math.floor((Math.random()*6)+1);
								if(dice5 == 6)
								{
									rolled6s++;
								}
							}
							else
							{
								dice5 = Math.floor((Math.random()*5)+1);
							}
						}
					}
					if(dice5 == 1)
					{
						rolled1s++;
					}
					if(dice5 == 2)
					{
						rolled2s++;
					}
					if(dice5 == 3)
					{
						rolled3s++;
					}
					if(dice5 == 4)
					{
						rolled4s++;
					}
					if(dice5 == 5)
					{
						rolled5s++;
					}
				}
					if(dice5 == 1)
					{
						rolled1s++;
					}
					if(dice5 == 2)
					{
						rolled2s++;
					}
					if(dice5 == 3)
					{
						rolled3s++;
					}
					if(dice5 == 4)
					{
						rolled4s++;
					}
					if(dice5 == 5)
					{
						rolled5s++;
					}
			}
			else
			{
				if(hold1Status == false)
				{
					if(dice1 == 6)
					{
						rolled6s--;
					}
					if(rolled6s < 3)
					{
						dice1 = Math.floor((Math.random()*6)+1);
						if(dice1 == 6)
						{
							rolled6s++;
						}
					}
					else
					{
						dice1 = Math.floor((Math.random()*5)+1);
					}
				}
				if(hold2Status == false)
				{
					if(dice2 == 6)
					{
						rolled6s--;
					
					}
					if(rolled6s < 3)
					{
						dice2 = Math.floor((Math.random()*6)+1);
						if(dice2 == 6)
						{
							rolled6s++;
						}
					}
					else
					{
						dice2 = Math.floor((Math.random()*5)+1);
					}
				}
				if(hold3Status == false)
				{
					if(dice3 == 6)
					{
						rolled6s--;
					}
					if(rolled6s < 3)
					{
						dice3 = Math.floor((Math.random()*6)+1);
						if(dice3 == 6)
						{
							rolled6s++;
						}
					}
					else
					{
						dice3 = Math.floor((Math.random()*5)+1);
					}
				}
				if(hold4Status == false)
				{
					if(dice4 == 6)
					{
						rolled6s--;
					}
					if(rolled6s < 3)
					{
						dice4 = Math.floor((Math.random()*6)+1);
						if(dice4 == 6)
						{
							rolled6s++;
						}
					}
					else
					{
						dice4 = Math.floor((Math.random()*5)+1);
					}
				}
				if(hold5Status == false)
				{
					if(dice5 == 6)
					{
						rolled6s--;
						
					}
					if(rolled6s < 3)
					{
						dice5 = Math.floor((Math.random()*6)+1);
						if(dice5 == 6)
						{
							rolled6s++;
						}
					}
					else
					{
						dice5 = Math.floor((Math.random()*5)+1);
					}
				}
			}
			
			
			firstDiceText.innerHTML = dice1;
			secondDiceText.innerHTML = dice2;
			thirdDiceText.innerHTML = dice3;
			fourthDiceText.innerHTML = dice4;
			fifthDiceText.innerHTML = dice5;
			if(dice1 == 1)
			{
				firstDiceText.innerHTML = "<img src=\"" + dice1Img + "\"/>"
			}
			if(dice1 == 2)
			{
				firstDiceText.innerHTML = "<img src=\"" + dice2Img + "\"/>"
			}
			if(dice1 == 3)
			{
				firstDiceText.innerHTML = "<img src=\"" + dice3Img + "\"/>"
			}
			if(dice1 == 4)
			{
				firstDiceText.innerHTML = "<img src=\"" + dice4Img + "\"/>"
			}
			if(dice1 == 5)
			{
				firstDiceText.innerHTML = "<img src=\"" + dice5Img + "\"/>"
			}
			if(dice1 == 6)
			{
				firstDiceText.innerHTML = "<img src=\"" + dice6Img + "\"/>"
			}
			if(dice2 == 1)
			{
				secondDiceText.innerHTML = "<img src=\"" + dice1Img + "\"/>"
			}
			if(dice2 == 2)
			{
				secondDiceText.innerHTML = "<img src=\"" + dice2Img + "\"/>"
			}
			if(dice2 == 3)
			{
				secondDiceText.innerHTML = "<img src=\"" + dice3Img + "\"/>"
			}
			if(dice2 == 4)
			{
				secondDiceText.innerHTML = "<img src=\"" + dice4Img + "\"/>"
			}
			if(dice2 == 5)
			{
				secondDiceText.innerHTML = "<img src=\"" + dice5Img + "\"/>"
			}
			if(dice2 == 6)
			{
				secondDiceText.innerHTML = "<img src=\"" + dice6Img + "\"/>"
			}
			if(dice3 == 1)
			{
				thirdDiceText.innerHTML = "<img src=\"" + dice1Img + "\"/>"
			}
			if(dice3 == 2)
			{
				thirdDiceText.innerHTML = "<img src=\"" + dice2Img + "\"/>"
			}
			if(dice3 == 3)
			{
				thirdDiceText.innerHTML = "<img src=\"" + dice3Img + "\"/>"
			}
			if(dice3 == 4)
			{
				thirdDiceText.innerHTML = "<img src=\"" + dice4Img + "\"/>"
			}
			if(dice3 == 5)
			{
				thirdDiceText.innerHTML = "<img src=\"" + dice5Img + "\"/>"
			}
			if(dice3 == 6)
			{
				thirdDiceText.innerHTML = "<img src=\"" + dice6Img + "\"/>"
			}
			if(dice4 == 1)
			{
				fourthDiceText.innerHTML = "<img src=\"" + dice1Img + "\"/>"
			}
			if(dice4 == 2)
			{
				fourthDiceText.innerHTML = "<img src=\"" + dice2Img + "\"/>"
			}
			if(dice4 == 3)
			{
				fourthDiceText.innerHTML = "<img src=\"" + dice3Img + "\"/>"
			}
			if(dice4 == 4)
			{
				fourthDiceText.innerHTML = "<img src=\"" + dice4Img + "\"/>"
			}
			if(dice4 == 5)
			{
				fourthDiceText.innerHTML = "<img src=\"" + dice5Img + "\"/>"
			}
			if(dice4 == 6)
			{
				fourthDiceText.innerHTML = "<img src=\"" + dice6Img + "\"/>"
			}
			if(dice5 == 1)
			{
				fifthDiceText.innerHTML = "<img src=\"" + dice1Img + "\"/>"
			}
			if(dice5 == 2)
			{
				fifthDiceText.innerHTML = "<img src=\"" + dice2Img + "\"/>"
			}
			if(dice5 == 3)
			{
				fifthDiceText.innerHTML = "<img src=\"" + dice3Img + "\"/>"
			}
			if(dice5 == 4)
			{
				fifthDiceText.innerHTML = "<img src=\"" + dice4Img + "\"/>"
			}
			if(dice5 == 5)
			{
				fifthDiceText.innerHTML = "<img src=\"" + dice5Img + "\"/>"
			}
			if(dice5 == 6)
			{
				fifthDiceText.innerHTML = "<img src=\"" + dice6Img + "\"/>"
			}
			rollsThisTurn++;
		}
		else
		{
			
		}
	}
	function rerollDice4()
	{
		
		dice4 = Math.floor((Math.random()*6)+1);
		if(dice4 == 4)
		{
			
			rerollDice4;
		}
	}
	function dice1Hold()
	{
		if(hold1Status == false)
		{
			hold1Status = true;
			changeHold1.style.backgroundColor = "green";
			firstDiceStatus.innerHTML = "Keeping";
		}
		else
		{
			hold1Status = false;
			changeHold1.style.backgroundColor = "red";
			firstDiceStatus.innerHTML = "Rerolling";
		}
	}
	function dice2Hold()
	{
		if(hold2Status == false)
		{
			hold2Status = true;
			changeHold2.style.backgroundColor = "green";
			secondDiceStatus.innerHTML = "Keeping";
		}
		else
		{
			hold2Status = false;
			changeHold2.style.backgroundColor = "red";
			secondDiceStatus.innerHTML = "Rerolling";
		}
	}
	function dice3Hold()
	{
		if(hold3Status == false)
		{
			hold3Status = true;
			changeHold3.style.backgroundColor = "green";
			thirdDiceStatus.innerHTML = "Keeping";
		}
		else
		{
			hold3Status = false;
			changeHold3.style.backgroundColor = "red";
			thirdDiceStatus.innerHTML = "Rerolling"
		}
	}
	function dice4Hold()
	{
		if(hold4Status == false)
		{
			hold4Status = true;
			changeHold4.style.backgroundColor = "green";
			fourthDiceStatus.innerHTML = "Keeping";
		}
		else
		{
			hold4Status = false;
			changeHold4.style.backgroundColor = "red";
			fourthDiceStatus.innerHTML = "Rerolling";
		}
	}
	function dice5Hold()
	{
		if(hold5Status == false)
		{
			hold5Status = true;
			changeHold5.style.backgroundColor = "green";
			fifthDiceStatus.innerHTML = "Keeping"
		}
		else
		{
			hold5Status = false;
			changeHold5.style.backgroundColor = "red";
			fifthDiceStatus.innerHTML = "Rerolling";
		}
	}
	function scoreOnes()
	{
		if(scoredThisTurn == false)
		{
			if(dice1 == 1)
			{
				scoreTotal += 1;
			}
			if(dice2 == 1)
			{
				scoreTotal += 1;
			}
			if(dice3 == 1)
			{
				scoreTotal += 1;
			}
			if(dice4 == 1)
			{
				scoreTotal += 1;
			}
			if(dice5 == 1)
			{
				scoreTotal += 1;
			}
			oneSubmitted = true;
			scoreOneOutput.innerHTML = scoreTotal;
			upperSectionTotal += scoreTotal;
			upperSectionDisplay.innerHTML = upperSectionTotal;
			grandScoreTotal = upperSectionTotal + lowerSectionTotal;
			finalGrandScore.innerHTML = grandScoreTotal;
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			scoreOneButton.style.display = "none";
			scratchOneButton.style.display = "none";
			scoredThisTurn = true;
			if(oneSubmitted == true && twoSubmitted == true && threeSubmitted == true && fourSubmitted == true && fiveSubmitted == true && sixSubmitted == true)
			{
				if(upperSectionTotal >= 63)
				{
					bonusScoreDisplay.innerHTML = 35;
					upperFinalScore.innerHTML = (upperSectionTotal + 35);
					finalUpperScore.innerHTML = (upperSectionTotal + 35);
					upperSectionTotal += 35;
					grandScoreTotal = upperSectionTotal + lowerSectionTotal;
					finalGrandScore.innerHTML = grandScoreTotal;
				}
				else
				{
					bonusScoreDisplay.innerHTML = 0;
					upperFinalScore.innerHTML = upperSectionTotal;
					finalUpperScore.innerHTML = upperSectionTotal;
				}
			}
		}
	}
	function scoreTwos()
	{
		if(scoredThisTurn == false)
		{
			if(dice1 == 2)
			{
				scoreTotal += 2;
			}
			if(dice2 == 2)
			{
				scoreTotal += 2;
			}
			if(dice3 == 2)
			{
				scoreTotal += 2;
			}
			if(dice4 == 2)
			{
				scoreTotal += 2;
			}
			if(dice5 == 2)
			{
				scoreTotal += 2;
			}
			twoSubmitted = true;
			
			scoreTwoOutput.innerHTML = scoreTotal;
			upperSectionTotal += scoreTotal;
			upperSectionDisplay.innerHTML = upperSectionTotal;
			grandScoreTotal = upperSectionTotal + lowerSectionTotal;
			finalGrandScore.innerHTML = grandScoreTotal;
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			scoreTwoButton.style.display = "none";
			scratchTwoButton.style.display = "none";
			scoredThisTurn = true;
			if(oneSubmitted == true && twoSubmitted == true && threeSubmitted == true && fourSubmitted == true && fiveSubmitted == true && sixSubmitted == true)
			{
				if(upperSectionTotal >= 63)
				{
					bonusScoreDisplay.innerHTML = 35;
					upperFinalScore.innerHTML = (upperSectionTotal + 35);
					finalUpperScore.innerHTML = (upperSectionTotal + 35);
					upperSectionTotal += 35;
					grandScoreTotal = upperSectionTotal + lowerSectionTotal;
					finalGrandScore.innerHTML = grandScoreTotal;
				}
				else
				{
					bonusScoreDisplay.innerHTML = 0;
					upperFinalScore.innerHTML = upperSectionTotal;
					finalUpperScore.innerHTML = upperSectionTotal;
				}
			}
		}
	}
	function scoreThrees()
	{
		if(scoredThisTurn == false)
		{
			if(dice1 == 3)
			{
				scoreTotal += 3;
			}
			if(dice2 == 3)
			{
				scoreTotal += 3;
			}
			if(dice3 == 3)
			{
				scoreTotal += 3;
			}
			if(dice4 == 3)
			{
				scoreTotal += 3;
			}
			if(dice5 == 3)
			{
				scoreTotal += 3;
			}
			threeSubmitted = true;
			
			scoreThreeOutput.innerHTML = scoreTotal;
			upperSectionTotal += scoreTotal;
			upperSectionDisplay.innerHTML = upperSectionTotal;
			grandScoreTotal = upperSectionTotal + lowerSectionTotal;
			finalGrandScore.innerHTML = grandScoreTotal;
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			scoreThreeButton.style.display = "none";
			scratchThreeButton.style.display = "none";
			scoredThisTurn = true;
			if(oneSubmitted == true && twoSubmitted == true && threeSubmitted == true && fourSubmitted == true && fiveSubmitted == true && sixSubmitted == true)
			{
				if(upperSectionTotal >= 63)
				{
					bonusScoreDisplay.innerHTML = 35;
					upperFinalScore.innerHTML = (upperSectionTotal + 35);
					finalUpperScore.innerHTML = (upperSectionTotal + 35);
					upperSectionTotal += 35;
					grandScoreTotal = upperSectionTotal + lowerSectionTotal;
					finalGrandScore.innerHTML = grandScoreTotal;
				}
				else
				{
					bonusScoreDisplay.innerHTML = 0;
					upperFinalScore.innerHTML = upperSectionTotal;
					finalUpperScore.innerHTML = upperSectionTotal;
				}
			}
		}
	}
	function scoreFours()
	{
		if(scoredThisTurn == false)
		{
			if(dice1 == 4)
			{
				scoreTotal += 4;
			}
			if(dice2 == 4)
			{
				scoreTotal += 4;
			}
			if(dice3 == 4)
			{
				scoreTotal += 4;
			}
			if(dice4 == 4)
			{
				scoreTotal += 4;
			}
			if(dice5 == 4)
			{
				scoreTotal += 4;
			}
			fourSubmitted = true;
			
			scoreFourOutput.innerHTML = scoreTotal;
			upperSectionTotal += scoreTotal;
			upperSectionDisplay.innerHTML = upperSectionTotal;
			grandScoreTotal = upperSectionTotal + lowerSectionTotal;
			finalGrandScore.innerHTML = grandScoreTotal;
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			scoreFourButton.style.display = "none";
			scratchFourButton.style.display = "none";
			scoredThisTurn = true;
			if(oneSubmitted == true && twoSubmitted == true && threeSubmitted == true && fourSubmitted == true && fiveSubmitted == true && sixSubmitted == true)
			{
				if(upperSectionTotal >= 63)
				{
					bonusScoreDisplay.innerHTML = 35;
					upperFinalScore.innerHTML = (upperSectionTotal + 35);
					finalUpperScore.innerHTML = (upperSectionTotal + 35);
					upperSectionTotal += 35;
					grandScoreTotal = upperSectionTotal + lowerSectionTotal;
					finalGrandScore.innerHTML = grandScoreTotal;
				}
				else
				{
					bonusScoreDisplay.innerHTML = 0;
					upperFinalScore.innerHTML = upperSectionTotal;
					finalUpperScore.innerHTML = upperSectionTotal;
				}
			}
		}
	}
	function scoreFives()
	{
		if(scoredThisTurn == false)
		{
			if(dice1 == 5)
			{
				scoreTotal += 5;
			}
			if(dice2 == 5)
			{
				scoreTotal += 5;
			}
			if(dice3 == 5)
			{
				scoreTotal += 5;
			}
			if(dice4 == 5)
			{
				scoreTotal += 5;
			}
			if(dice5 == 5)
			{
				scoreTotal += 5;
			}
			fiveSubmitted = true;
			
			scoreFiveOutput.innerHTML = scoreTotal;
			upperSectionTotal += scoreTotal;
			upperSectionDisplay.innerHTML = upperSectionTotal;
			grandScoreTotal = upperSectionTotal + lowerSectionTotal;
			finalGrandScore.innerHTML = grandScoreTotal;
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			scoreFiveButton.style.display = "none";
			scratchFiveButton.style.display = "none";
			scoredThisTurn = true;
			if(oneSubmitted == true && twoSubmitted == true && threeSubmitted == true && fourSubmitted == true && fiveSubmitted == true && sixSubmitted == true)
			{
				if(upperSectionTotal >= 63)
				{
					bonusScoreDisplay.innerHTML = 35;
					upperFinalScore.innerHTML = (upperSectionTotal + 35);
					finalUpperScore.innerHTML = (upperSectionTotal + 35);
					upperSectionTotal += 35;
					grandScoreTotal = upperSectionTotal + lowerSectionTotal;
					finalGrandScore.innerHTML = grandScoreTotal;
				}
				else
				{
					bonusScoreDisplay.innerHTML = 0;
					upperFinalScore.innerHTML = upperSectionTotal;
					finalUpperScore.innerHTML = upperSectionTotal;
				}
			}
		}
	}
	function scoreSixes()
	{
		if(scoredThisTurn == false)
		{
			if(dice1 == 6)
			{
				scoreTotal += 6;
			}
			if(dice2 == 6)
			{
				scoreTotal += 6;
			}
			if(dice3 == 6)
			{
				scoreTotal += 6;
			}
			if(dice4 == 6)
			{
				scoreTotal += 6;
			}
			if(dice5 == 6)
			{
				scoreTotal += 6;
			}
			sixSubmitted = true;
			
			scoreSixOutput.innerHTML = scoreTotal;
			upperSectionTotal += scoreTotal;
			upperSectionDisplay.innerHTML = upperSectionTotal;
			grandScoreTotal = upperSectionTotal + lowerSectionTotal;
			finalGrandScore.innerHTML = grandScoreTotal;
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			scoreSixButton.style.display = "none";
			scratchSixButton.style.display = "none";
			scoredThisTurn = true;
			if(oneSubmitted == true && twoSubmitted == true && threeSubmitted == true && fourSubmitted == true && fiveSubmitted == true && sixSubmitted == true)
			{
				if(upperSectionTotal >= 63)
				{
					bonusScoreDisplay.innerHTML = 35;
					upperFinalScore.innerHTML = (upperSectionTotal + 35);
					finalUpperScore.innerHTML = (upperSectionTotal + 35);
					upperSectionTotal += 35;
					grandScoreTotal = upperSectionTotal + lowerSectionTotal;
					finalGrandScore.innerHTML = grandScoreTotal;
				}
				else
				{
					bonusScoreDisplay.innerHTML = 0;
					upperFinalScore.innerHTML = upperSectionTotal;
					finalUpperScore.innerHTML = upperSectionTotal;
				}
			}
		}	
	}
	function score3OfAKind()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			diceTOKArray.push(dice1);
			diceTOKArray.push(dice2);
			diceTOKArray.push(dice3);
			diceTOKArray.push(dice4);
			diceTOKArray.push(dice5);
			
			diceTOKArray.sort();
			
			
			for (i = 0; i < diceTOKArray.length; i++) 
			{
				if(diceTOKArray[i] == 1)
				{
					TOK1 ++;
				}
				if(diceTOKArray[i] == 2)
				{
					TOK2 ++;
				}
				if(diceTOKArray[i] == 3)
				{
					TOK3 ++;
				}
				if(diceTOKArray[i] == 4)
				{
					TOK4 ++;
				}
				if(diceTOKArray[i] == 5)
				{
					TOK5 ++;
				}
				if(diceTOKArray[i] == 6)
				{
					TOK6 ++;
				}
			}
			
			if(TOK1 >= 3 || TOK2 >= 3 || TOK3 >= 3 || TOK4 >= 3 || TOK5 >= 3 || TOK6 >= 3)
			{
				TOKTotal = dice1 + dice2 + dice3 + dice4 + dice5;
				scoreTOKOutput.innerHTML = TOKTotal;
				lowerSectionTotal += TOKTotal;
				finalLowerScore.innerHTML = lowerSectionTotal;
				grandScoreTotal = upperSectionTotal + lowerSectionTotal;
				finalGrandScore.innerHTML = grandScoreTotal;
			}
			else
			{
				scoreTOKOutput.innerHTML = 0;
				scoreTOKOutput.style.textDecoration = "line-through";
			}
			
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			score3OfAKindButton.style.display = "none";
			scratch3OfAKindButton.style.display = "none";
		}
	}
	function score4OfAKind()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			diceFOKArray.push(dice1);
			diceFOKArray.push(dice2);
			diceFOKArray.push(dice3);
			diceFOKArray.push(dice4);
			diceFOKArray.push(dice5);
			
			diceFOKArray.sort();
			
			for (i = 0; i < diceFOKArray.length; i++) 
			{
				if(diceFOKArray[i] == 1)
				{
					FOK1 ++;
				}
				if(diceFOKArray[i] == 2)
				{
					FOK2 ++;
				}
				if(diceFOKArray[i] == 3)
				{
					FOK3 ++;
				}
				if(diceFOKArray[i] == 4)
				{
					FOK4 ++;
				}
				if(diceFOKArray[i] == 5)
				{
					FOK5 ++;
				}
				if(diceFOKArray[i] == 6)
				{
					FOK6 ++;
				}
			}
			
			if(FOK1 >= 4 || FOK2 >= 4 || FOK3 >= 4 || FOK4 >= 4 || FOK5 >= 4 || FOK6 >= 4)
			{
				FOKTotal = dice1 + dice2 + dice3 + dice4 + dice5;
				scoreFOKOutput.innerHTML = FOKTotal;
				lowerSectionTotal += FOKTotal;
				finalLowerScore.innerHTML = lowerSectionTotal;
				grandScoreTotal = upperSectionTotal + lowerSectionTotal;
				finalGrandScore.innerHTML = grandScoreTotal;
			}
			else
			{
				scoreFOKOutput.innerHTML = 0;
				scoreFOKOutput.style.textDecoration = "line-through";
			}
			
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			score4OfAKindButton.style.display = "none";
			scratch4OfAKindButton.style.display = "none";
		}
	}
	function scoreFullHouse()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			diceFHArray.push(dice1);
			diceFHArray.push(dice2);
			diceFHArray.push(dice3);
			diceFHArray.push(dice4);
			diceFHArray.push(dice5);
			
			diceFHArray.sort();
			
			for (i = 0; i < diceFHArray.length; i++) 
			{
				if(diceFHArray[i] == 1)
				{
					FH1 ++;
				}
				if(diceFHArray[i] == 2)
				{
					FH2 ++;
				}
				if(diceFHArray[i] == 3)
				{
					FH3 ++;
				}
				if(diceFHArray[i] == 4)
				{
					FH4 ++;
				}
				if(diceFHArray[i] == 5)
				{
					FH5 ++;
				}
				if(diceFHArray[i] == 6)
				{
					FH6 ++;
				}
			}
			if(FH1 == 3 || FH2 == 3 || FH3 == 3 || FH4 == 3 || FH5 == 3 || FH6 == 3)   
			{
				if(FH1 == 2 || FH2 == 2 || FH3 == 2 || FH4 == 2 || FH5 == 2 || FH6 == 2)
				{
					scoreFHOutput.innerHTML = 25;
					lowerSectionTotal += 25;
					finalLowerScore.innerHTML = lowerSectionTotal;
					grandScoreTotal = upperSectionTotal + lowerSectionTotal;
					finalGrandScore.innerHTML = grandScoreTotal;
				}
				else
				{
					scoreFHOutput.innerHTML = 0;
					scoreFHOutput.style.textDecoration = "line-through";
				}
			}
			else if(FH1 == 2 || FH2 == 2 || FH3 == 2 || FH4 == 2 || FH5 == 2 || FH6 == 2)
			{
				if(FH1 == 3 || FH2 == 3 || FH3 == 3 || FH4 == 3 || FH5 == 3 || FH6 == 3)
				{
					scoreFHOutput.innerHTML = 25;
					lowerSectionTotal += 25;
					finalLowerScore.innerHTML = lowerSectionTotal;
					grandScoreTotal = upperSectionTotal + lowerSectionTotal;
					finalGrandScore.innerHTML = grandScoreTotal;
				}
				else
				{
					scoreFHOutput.innerHTML = 0;
					scoreFHOutput.style.textDecoration = "line-through";
				}
			}
			else
			{
				scoreFHOutput.innerHTML = 0;
				scoreFHOutput.style.textDecoration = "line-through";
			}
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			scoreFullHouseButton.style.display = "none";
			scratchFullHouseButton.style.display = "none";
		}
	}
	function scoreSmallStraight()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			diceSSArray.push(dice1);
			diceSSArray.push(dice2);
			diceSSArray.push(dice3);
			diceSSArray.push(dice4);
			diceSSArray.push(dice5);
			
			diceSSArray.sort();
			
			for (i = 0; i < diceSSArray.length; i++) 
			{
				if(diceSSArray[i] == 1)
				{
					SS1 ++;
				}
				if(diceSSArray[i] == 2)
				{
					SS2 ++;
				}
				if(diceSSArray[i] == 3)
				{
					SS3 ++;
				}
				if(diceSSArray[i] == 4)
				{
					SS4 ++;
				}
				if(diceSSArray[i] == 5)
				{
					SS5 ++;
				}
				if(diceSSArray[i] == 6)
				{
					SS6 ++;
				}
			}
			if(SS1 >= 1 && SS2 >= 1 && SS3 >= 1 && SS4 >= 1)
			{
				scoreSSOutput.innerHTML = 30;
				lowerSectionTotal += 30;
				finalLowerScore.innerHTML = lowerSectionTotal;
				grandScoreTotal = upperSectionTotal + lowerSectionTotal;
				finalGrandScore.innerHTML = grandScoreTotal;
			}
			else if(SS2 >= 1 && SS3 >= 1 && SS4 >= 1 && SS5 >= 1)
			{
				scoreSSOutput.innerHTML = 30;
				lowerSectionTotal += 30;
				finalLowerScore.innerHTML = lowerSectionTotal;
				grandScoreTotal = upperSectionTotal + lowerSectionTotal;
				finalGrandScore.innerHTML = grandScoreTotal;
			}
			else if(SS3 >= 1 && SS4 >= 1 && SS5 >= 1 && SS6 >= 1)
			{
				scoreSSOutput.innerHTML = 30;
				lowerSectionTotal += 30;
				finalLowerScore.innerHTML = lowerSectionTotal;
				grandScoreTotal = upperSectionTotal + lowerSectionTotal;
				finalGrandScore.innerHTML = grandScoreTotal;
			}
			else
			{
				scoreSSOutput.innerHTML = 0;
				scoreSSOutput.style.textDecoration = "line-through";
			}
			
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			scoreSmallStraightButton.style.display = "none";
			scratchSmallStraightButton.style.display = "none";
		}
	}
	function scoreLargeStraight()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			diceLSArray.push(dice1);
			diceLSArray.push(dice2);
			diceLSArray.push(dice3);
			diceLSArray.push(dice4);
			diceLSArray.push(dice5);
			
			diceLSArray.sort();
			
			for (i = 0; i < diceLSArray.length; i++) 
			{
				if(diceLSArray[i] == 1)
				{
					LS1 ++;
				}
				if(diceLSArray[i] == 2)
				{
					LS2 ++;
				}
				if(diceLSArray[i] == 3)
				{
					LS3 ++;
				}
				if(diceLSArray[i] == 4)
				{
					LS4 ++;
				}
				if(diceLSArray[i] == 5)
				{
					LS5 ++;
				}
				if(diceLSArray[i] == 6)
				{
					LS6 ++;
				}
			}
			if(LS1 == 1 && LS2 == 1 && LS3 == 1 && LS4 == 1 && LS5 == 1)
			{
				scoreLSOutput.innerHTML = 40;
				lowerSectionTotal += 40;
				finalLowerScore.innerHTML = lowerSectionTotal;
				grandScoreTotal = upperSectionTotal + lowerSectionTotal;
				finalGrandScore.innerHTML = grandScoreTotal;
			}
			else if(LS2 == 1 && LS3 == 1 && LS4 == 1 && LS5 == 1 && LS6 == 1)
			{
				scoreLSOutput.innerHTML = 40;
				lowerSectionTotal += 40;
				finalLowerScore.innerHTML = lowerSectionTotal;
				grandScoreTotal = upperSectionTotal + lowerSectionTotal;
				finalGrandScore.innerHTML = grandScoreTotal;
			}
			else
			{
				scoreLSOutput.innerHTML = 0;
				scoreLSOutput.style.textDecoration = "line-through";
			}
			
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			scoreLargeStraightButton.style.display = "none";
			scratchLargeStraightButton.style.display = "none";
		}
	}
	function scoreYahtzee()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			if(dice1 == dice2 && dice1 == dice3 && dice1 == dice4 && dice1 == dice5)
			{
				scoreOfYahtzee.innerHTML = 50;
				pickupDice.style.display = "block";
				rollButton.style.display = "none";
				scoreYahtzeeButton.style.display = "none";
				scratchYahtzeeButton.style.display = "none";
				lowerSectionTotal += 50;
				finalLowerScore.innerHTML = lowerSectionTotal;
				grandScoreTotal = upperSectionTotal + lowerSectionTotal;
				finalGrandScore.innerHTML = grandScoreTotal;
			}
			else
			{
				scoreOfYahtzee.innerHTML = 0;
				scoreOfYahtzee.style.textDecoration = "line-through";
				pickupDice.style.display = "block";
				rollButton.style.display = "none";
				scoreYahtzeeButton.style.display = "none";
				scratchYahtzeeButton.style.display = "none";
			}
		}
	}
	function scoreChance()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			chanceTotal = dice1 + dice2 + dice3 + dice4 + dice5;
			chanceOutput.innerHTML = chanceTotal;
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			scoreChanceButton.style.display = "none";
			scratchChanceButton.style.display = "none";		
			lowerSectionTotal += chanceTotal;
			finalLowerScore.innerHTML = lowerSectionTotal;
			grandScoreTotal = upperSectionTotal + lowerSectionTotal;
			finalGrandScore.innerHTML = grandScoreTotal;
		}
	}
	function scratchOne()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			scoreOfOnes.innerHTML = 0;
			scoreOfOnes.style.textDecoration = "line-through";
			scoreOneButton.style.display = "none";
			scratchOneButton.style.display = "none";
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
		}
	}
	function scratchTwo()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			scoreOfTwos.innerHTML = 0;
			scoreOfTwos.style.textDecoration = "line-through";
			scoreTwoButton.style.display = "none";
			scratchTwoButton.style.display = "none";
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
		}
	}
	function scratchThree()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			scoreOfThrees.innerHTML = 0;
			scoreOfThrees.style.textDecoration = "line-through";
			scoreThreeButton.style.display = "none";
			scratchThreeButton.style.display = "none";
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
		}
	}
	function scratchFour()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			scoreOfFours.innerHTML = 0;
			scoreOfFours.style.textDecoration = "line-through";
			scoreFourButton.style.display = "none";
			scratchFourButton.style.display = "none";
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
		}
	}
	function scratchFive()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			scoreOfFives.innerHTML = 0;
			scoreOfFives.style.textDecoration = "line-through";
			scoreFiveButton.style.display = "none";
			scratchFiveButton.style.display = "none";
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
		}
	}
	function scratchSix()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			scoreOfSixes.innerHTML = 0;
			scoreOfSixes.style.textDecoration = "line-through";
			scoreSixButton.style.display = "none";
			scratchSixButton.style.display = "none";
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
		}
	}
	function scratchTOK()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			scoreTOKOutput.innerHTML = 0;
			scoreTOKOutput.style.textDecoration = "line-through";
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			score3OfAKindButton.style.display = "none";
			scratch3OfAKindButton.style.display = "none";
		}
	}
	function scratchFOK()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			scoreFOKOutput.innerHTML = 0;
			scoreFOKOutput.style.textDecoration = "line-through";
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			score4OfAKindButton.style.display = "none";
			scratch4OfAKindButton.style.display = "none";
		}
	}
	function scratchFH()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			scoreFHOutput.innerHTML = 0;
			scoreFHOutput.style.textDecoration = "line-through";
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			scoreFullHouseButton.style.display = "none";
			scratchFullHouseButton.style.display = "none";
		}
	}
	function scratchSS()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			scoreSSOutput.innerHTML = 0;
			scoreSSOutput.style.textDecoration = "line-through";
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			scoreSmallStraightButton.style.display = "none";
			scratchSmallStraightButton.style.display = "none";
		}
	}
	function scratchLS()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			scoreLSOutput.innerHTML = 0;
			scoreLSOutput.style.textDecoration = "line-through";
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			scoreLargeStraightButton.style.display = "none";
			scratchLargeStraightButton.style.display = "none";
		}
	}
	function scratchYahtzee()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			scoreOfYahtzee.innerHTML = 0;
			scoreOfYahtzee.style.textDecoration = "line-through";
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			scoreYahtzeeButton.style.display = "none";
			scratchYahtzeeButton.style.display = "none";
		}
	}
	function scratchChance()
	{
		if(scoredThisTurn == false)
		{
			scoredThisTurn = true;
			chanceOutput.innerHTML = 0;
			chanceOutput.style.textDecoration = "line-through";
			pickupDice.style.display = "block";
			rollButton.style.display = "none";
			scoreChanceButton.style.display = "none";
			scratchChanceButton.style.display = "none";
		}
	}
	function resetDice()
	{
		dice1 = undefined; 
		dice2 = undefined;
		dice3 = undefined;
		dice4 = undefined;
		dice5 = undefined;
		
		rolled1s = 0;
		rolled2s = 0;
		rolled3s = 0;
		rolled4s = 0;
		rolled5s = 0;
		rolled6s = 0;
		
		rollsThisTurn = 0;
		scoredThisTurn = false;
		hold1Status = false;
		hold2Status = false;
		hold3Status = false;
		hold4Status = false;
		hold5Status = false;
		
		firstDiceStatus.innerHTML = "";
		secondDiceStatus.innerHTML = "";
		thirdDiceStatus.innerHTML = "";
		fourthDiceStatus.innerHTML = "";
		fifthDiceStatus.innerHTML = "";
		
		firstDiceText.innerHTML = "";
		secondDiceText.innerHTML = "";
		thirdDiceText.innerHTML = "";
		fourthDiceText.innerHTML = "";
		fifthDiceText.innerHTML = "";
		
		changeHold1.style.backgroundColor = "white";
		changeHold2.style.backgroundColor = "white";
		changeHold3.style.backgroundColor = "white";
		changeHold4.style.backgroundColor = "white";
		changeHold5.style.backgroundColor = "white";
		scoreTotal = 0;	
		
		pickupDice.style.display = "none";
		rollButton.style.display = "block";
	}

}

