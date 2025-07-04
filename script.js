 const cards = [
      [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31],
      [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31],
      [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31],
      [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]
    ];

    let currentCard = 0;
    let total = 0;

    const introBox = document.getElementById("intro-box");
    const cardBox = document.getElementById("card-box");
    const cardTitle = document.getElementById("card-title");
    const cardGrid = document.getElementById("card-grid");
    const resultCard = document.getElementById("result-card");
    const finalAnswer = document.getElementById("final-answer");
    const buttons = document.getElementById("buttons");

    function startTrick() {
      introBox.style.display = "none";
      cardBox.style.display = "block";
      buttons.style.display = "block";
      showCard();
    }

    function showCard() {
      cardBox.classList.add("flipping");

      setTimeout(() => {
        if (currentCard < cards.length) {
          cardTitle.textContent = `Card ${currentCard + 1}`;
          cardGrid.innerHTML = "";

          cards[currentCard].forEach(number => {
            const div = document.createElement("div");
            div.classList.add("number-card");
            div.textContent = number;
            cardGrid.appendChild(div);
          });

          cardBox.classList.remove("flipping");
        } else {
          // Hide card and buttons
          cardBox.style.display = "none";
          buttons.style.display = "none";

          // Show result card with flip
          finalAnswer.innerHTML = `You were thinking of : <br> <strong class="number">${total}</strong>`;
          resultCard.style.display = "block";
          resultCard.classList.add("flipping");

          setTimeout(() => { 
            resultCard.classList.remove("flipping");
          }, 300);
        }
      }, 300);
    }

    function recordAnswer(isYes) {
      if (isYes) {
        total += 2 ** (cards.length - 1 - currentCard);
      }
      currentCard++;
      showCard();
    }
    function resetTrick() {
  currentCard = 0;
  total = 0;
  resultCard.style.display = "none";
  introBox.style.display = "block";
}
