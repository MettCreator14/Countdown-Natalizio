document.addEventListener('DOMContentLoaded', function() {
            const today = new Date();
            const currentDay = today.getDate();
            const currentMonth = today.getMonth() + 1;
            const targetDate = new Date(today.getFullYear(), 11, 1);

            if (currentMonth === 12) {
                if (currentDay === 25) {
                    document.body.innerHTML = "<h1>È Natale!</h1>";
                } else if (currentDay > 25) {
                    document.body.innerHTML = "<h1>Aspettiamo il mese di Natale!</h1>";
                    const countdownContainer = document.createElement('div');
                    countdownContainer.classList.add('countdown-container');
                    document.body.appendChild(countdownContainer);

                    const countdownTimer = document.createElement('div');
                    countdownTimer.classList.add('countdown-timer');
                    countdownContainer.appendChild(countdownTimer);

                    setInterval(function() {
                        const now = new Date();
                        const timeDiff = targetDate.getTime() - now.getTime();

                        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                        const hoursDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                        const secondsDiff = Math.floor((timeDiff % (1000 * 60)) / 1000);

                        countdownTimer.innerHTML = `
                        <div class="countdown-item">
                        <span class="countdown-value">${daysDiff}</span>
                        <span class="countdown-label">Giorni</span>
                        </div>
                        <div class="countdown-item">
                        <span class="countdown-value">${hoursDiff}</span>
                        <span class="countdown-label">Ore</span>
                        </div>
                        <div class="countdown-item">
                        <span class="countdown-value">${minutesDiff}</span>
                        <span class="countdown-label">Minuti</span>
                        </div>
                        <div class="countdown-item">
                        <span class="countdown-value">${secondsDiff}</span>
                        <span class="countdown-label">Secondi</span>
                        </div>
                        `;
                    }, 1000);

                } else if (currentDay >= 1) {
                    const days = document.querySelectorAll('.day');

                    days.forEach(function(day, index) {
                        const dayNumber = index + 1;
                        if (dayNumber < currentDay) {
                            day.classList.remove('locked');
                            day.classList.add('unlocked', 'past');
                        } else if (dayNumber === currentDay) {
                            day.classList.remove('locked');
                            day.classList.add('unlocked', 'current');
                        }
                    });

                    days.forEach(function(day, index) {
                        day.addEventListener('click', function() {
                            const dayNumber = index + 1;

                            if (day.classList.contains('unlocked') && !day.classList.contains('opened')) {
                                if (dayNumber < currentDay) {
                                    alert(`Il giorno ${dayNumber} è già passato.`);
                                } else if (dayNumber === currentDay) {
                                    alert(`Hai aperto il giorno ${dayNumber}!`);
                                    day.classList.add('opened');
                                } else {
                                    alert(`Non siamo ancora al giorno ${dayNumber}.`);
                                }
                            }
                        });
                    });
                }
            } else {
                document.body.innerHTML = `<h1>All'1 dicembre ${today.getFullYear()} mancano:</h1>`;
                const countdownContainer = document.createElement('div');
                countdownContainer.classList.add('countdown-container');
                document.body.appendChild(countdownContainer);

                const countdownTimer = document.createElement('div');
                countdownTimer.classList.add('countdown-timer');
                countdownContainer.appendChild(countdownTimer);

                setInterval(function() {
                    const now = new Date();
                    const timeDiff = targetDate.getTime() - now.getTime();

                    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                    const hoursDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                    const secondsDiff = Math.floor((timeDiff % (1000 * 60)) / 1000);

                    countdownTimer.innerHTML = `
                    <div class="countdown-item">
                    <span class="countdown-value">${daysDiff}</span>
                    <span class="countdown-label">Giorni</span>
                    </div>
                    <div class="countdown-item">
                    <span class="countdown-value">${hoursDiff}</span>
                    <span class="countdown-label">Ore</span>
                    </div>
                    <div class="countdown-item">
                    <span class="countdown-value">${minutesDiff}</span>
                    <span class="countdown-label">Minuti</span>
                    </div>
                    <div class="countdown-item">
                    <span class="countdown-value">${secondsDiff}</span>
                    <span class="countdown-label">Secondi</span>
                    </div>
                    `;
                }, 1000);
            }
        });
