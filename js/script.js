class CountdownTimer {
    constructor(data){
        this.selector = data.selector;
        this.targetDate = data.targetDate;
    }
    start(){
        setInterval(()=>{
            const startTime = this.targetDate.getTime();
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            this.updateTime(deltaTime)
        }, 1000)
    }
    pad(value){
        return String(value).padStart(2, '0');
    }
    updateTime(time){
         /*
 * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
 * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
 */
const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

/*
 * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
 * залишку% і ділимо його на кількість мілісекунд в одній годині
 * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
 */
const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

/*
 * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
 * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
 */
const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

/*
 * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
 * миллисекунд в одной секунде (1000)
 */
const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
document.querySelector('span[data-value ="days"]').textContent = days;
document.querySelector('span[data-value ="hours"]').textContent = hours;
document.querySelector('span[data-value ="mins"]').textContent = mins;
document.querySelector('span[data-value ="secs"]').textContent = secs;
    }
}



const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Sep 1, 2021'),
  });

  timer.start();
