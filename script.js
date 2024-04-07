let randomInt = -1
let input = []
let startArr = []
let numIterations = -1
let winStreak = 0
let bestWinStreak = 0
let numQuestions = 0
let numCorrect = 0
let sortsNames = ['Bubble Sort', 'Bubble Sort', 'Insertion Sort', 'Selection Sort', 'Merge Sort', 'Quicksort'];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('total-questions').innerText = `Questions Attempted: ${numQuestions}`;
    document.getElementById('accuracy').innerText = `Accuracy: 0.00%`;
    document.getElementById('win-streak').innerText = `Current Win Streak: ${winStreak}`;
    document.getElementById('best-win-streak').innerText = `Best Win Streak: ${bestWinStreak}`;    
    document.getElementById('answer-container').classList.add('hidden');
    const toggleBtn = document.getElementById('toggleBtn');
    const body = document.body;

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const mode = body.classList.contains('light-mode') ? 'light' : 'dark';
        toggleBtn.innerHTML = `<img src="moon_${mode.toLowerCase()}.png" alt="Moon">`;

    });

    document.getElementById('bubble-sort').addEventListener('click', () => {
        verifySort([0, 1]);
    });
    document.getElementById('selection-sort').addEventListener('click', () => {
        verifySort([2]);

    });
    document.getElementById('insertion-sort').addEventListener('click', () => {
        verifySort([3]);

    });
    document.getElementById('merge-sort').addEventListener('click', () => {
        verifySort([4]);

    });
    document.getElementById('quick-sort').addEventListener('click', () => {
        verifySort([5]);

    });

    document.getElementById('continue-button').addEventListener('click', () => {
        start();
    });

    start();

});

function start() {
    document.getElementById('answer-container').style.display = "none";
    document.getElementById('answer-selection').style.display = "block";
    document.getElementById('solution').innerText = "";
    numIterations = Math.floor(Math.random() * (6 - 3) + 3)
    input = []
    randomInt = Math.floor(Math.random() * 6);
    for (let i = 0; i < 12; i++) {
        x = Math.floor(Math.random() * 100);
        input.push(x);
    }
    startArr = [...input];
    if (randomInt === 0) {
        minBubble();
    }
    else if (randomInt === 1) {
        maxBubble();
    }
    else if (randomInt === 2) {
        selection();
    }
    else if (randomInt === 3) {
        insertion();
    }
    else if (randomInt === 4) {
        merge();
    }
    else if (randomInt === 5) {
        quick();
    }
    else {
        console.error("Random Integer not generated properly.");
    }
    document.getElementById('initial').innerText = "Start Array: [" + startArr.join(', ') + "]";
    document.getElementById('end').innerText = "End Array: [" + input.join(", ") + "]";
}

function minBubble() {
    for (let i = 0; i < numIterations; i++) {
        for (let j = input.length - 1; j > i; j--) {
            if (input[j] < input[j - 1]) {
                const temp = input[j];
                input[j] = input[j - 1];
                input[j - 1] = temp;
            }
        }
    }
}

function maxBubble() {
    for (let i = 0; i < numIterations; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[j] > input[j + 1]) {
                const temp = input[j];
                input[j] = input[j + 1];
                input[j + 1] = temp;
            }
        }
    }

}

function selection() {
    for (let i = 0; i < numIterations; i++) {
        let minIndex = i;
        for (let j = i + 1; j < input.length; ++j) {
            if (input[j] < input[minIndex]) {
                minIndex = j;
            }
        }
        [input[minIndex], input[i]] = [input[i], input[minIndex]];
    }
}

function insertion() {
    for (let i = input.length - 1; i > 0; i--) {
        if (input[i] < input[i - 1]) {
            const temp = input[i];
            input[i] = input[i - 1];
            input[i - 1] = temp;
        }
    }
    for (let i = 2; i < numIterations + 2; i++) {
        temp = input[i];
        j = i;
        while (temp < input[j - 1]) {
            input[j] = input[j - 1];
            j--;
        }
        input[j] = temp;
    }

}

function merge() {
    let groupSize = 5;
    while (groupSize === 5) {
        groupSize = Math.floor(Math.random() * (7 - 2) + 2);
    }
    for (let i = 0; i < input.length; i += groupSize) {
        const left = input.slice(0, i);
        const sorted = (input.slice(i, i + groupSize)).sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
        const right = input.slice(i + groupSize);
        input = left.concat(sorted).concat(right);
    }
}

function partition(left, right) {
    let pivot = --right;
    while (true) {
        while (input[left] < input[pivot]) {
            ++left;
        }
        while (left < right && input[right - 1] >= input[pivot]) {
            --right;
        }
        if (left >= right) {
            break;
        }
        let temp = input[left];
        input[left] = input[right - 1];
        input[right - 1] = temp;
    }
    let temp = input[pivot];
    input[pivot] = input[left];
    input[left] = temp;
    return left;
}

function iterativePartition(low, high) {
    const pivot = input[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (input[j] < pivot) {
            i++;
            [input[i], input[j]] = [input[j], input[i]];
        }
    }

    [input[i + 1], input[high]] = [input[high], input[i + 1]];
    return i + 1;
}

function iterativeQuickSort() {
    const stack = [];
    stack.push(0);
    stack.push(input.length - 1);

    while (stack.length > 0) {
        const high = stack.pop();
        const low = stack.pop();

        const p = iterativePartition(low, high);

        if (p - 1 > low) {
            stack.push(low);
            stack.push(p - 1);
        }

        if (p + 1 < high) {
            stack.push(p + 1);
            stack.push(high);
        }
    }
}

function partition(left, right) {
    let pivot = --right;
    while (true) {
        while (input[left] < input[pivot]) {
            ++left;
        }
        while (left < right && input[right - 1] >= input[pivot]) {
            --right;
        }
        if (left >= right) {
            break;
        }
        let temp = input[left];
        input[left] = input[right - 1];
        input[right - 1] = temp;
    }
    let temp = input[pivot];
    input[pivot] = input[left];
    input[left] = temp;
    return left;
}

function quick(left = 0, right = input.length, currIterations = Math.floor(Math.random() * 2)) {
    if (left == right) {
        return;
    }
    if (currIterations < 2) {
        ++currIterations;
        let pivot = partition(left, right);
        if (pivot - left < input.length - pivot) {
            quick(left, pivot, currIterations);
            quick(pivot + 1, right, currIterations);
        }
        else {
            quick(pivot + 1, right, currIterations);
            quick(left, pivot, currIterations);
        }
    }
}


function verifySort(type) {
    numQuestions++;
    if (type.includes(randomInt) || JSON.stringify(input) === JSON.stringify(startArr) || JSON.stringify(input) === JSON.stringify([...startArr].sort(function (a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    }))) {
        document.getElementById('answer-container').style.display = "block";
        document.getElementById('answer-selection').style.display = "none";
        document.getElementById('solution').style.color = "#0fa328";
        document.getElementById('solution').innerText = winStreak < 100 ? `Correct (Answer: ${sortsNames[type[0]]})` : 'STD Wizard! (Merlinius, is that you?)';
        numCorrect++;
        winStreak++;
        bestWinStreak = Math.max(winStreak, bestWinStreak);
    }
    else {
        document.getElementById('answer-container').style.display = "block";
        document.getElementById('answer-selection').style.display = "none";
        document.getElementById('solution').style.color = "#ff2f2f";
        document.getElementById('solution').innerText = `Incorrect (Answer: ${sortsNames[randomInt]})`;
        winStreak = 0;
    }
    document.getElementById('total-questions').innerText = `Questions Attempted: ${numQuestions}`;
    document.getElementById('accuracy').innerText = `Accuracy: ${(parseFloat(numCorrect)/parseFloat(numQuestions) * 100).toFixed(2)}%`;
    document.getElementById('win-streak').innerText = `Current Win Streak: ${winStreak}`;
    document.getElementById('best-win-streak').innerText = `Best Win Streak: ${bestWinStreak}`;
}