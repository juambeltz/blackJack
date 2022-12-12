        let cards = []
        let sum = 0
        let hasBlackJack = false
        let isAlive = false
        let message = ""
        const messageEl = document.getElementById("message-el")
        const sumEl = document.getElementById("sum-el")
        const cardsEl = document.getElementById("cards-el")


        function getRandomCard() {
            let valorInicial = Math.floor(Math.random() * 13) + 1;
            if (valorInicial === 1) {
                valorInicial = 11                    
            } 
            else if (valorInicial > 10) {
                valorInicial = 10 
            }
            else {
                valorInicial = valorInicial
            }
            return valorInicial           
        }// en el blackjack el ass vale 11 y desde el 11 al 13 valen 10 cada uno

        function startGame() {
            isAlive = true;
            hasBlackJack = false
            let firstCard = getRandomCard() 
            let secondCard = getRandomCard() 
            sum =  firstCard + secondCard
            cards = [firstCard, secondCard]
            renderGame()
        }

        function renderGame() {            
            cardsEl.textContent = "Valores de las cartas: "
            for (let i = 0; i < cards.length; i++) {
                cardsEl.textContent += cards[i] + ", ";
            }
           
            sumEl.textContent = "Suma de los valores: " + sum

            if (sum <= 20) {
                message = "¿Querés una nueva carta?"
                messageEl.style.cssText = `
                    color: white; 
                    background-color: none;
                    `;

            } else if (sum === 21) {
                message = "Felicitaciones, tenés blackjack!!"
                messageEl.style.cssText = `
                    color: black; 
                    background-color: goldenrod;
                    `;
                hasBlackJack = true
            } else {
                message = "Woops, perdiste!"
                messageEl.style.cssText = `
                    color: red; 
                    background-color: white; 
                    `;
                isAlive = false 
            }
            messageEl.textContent = message
        }


        function newCard() {           
            if (!hasBlackJack && isAlive) {            
                let card = getRandomCard()
                sum += card         
                cards.push(card)
                renderGame()
            }
        }  