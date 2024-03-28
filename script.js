randomInt = -1
input = []
startArr = []
validAnswers = []
numIterations = Math.floor(Math.random() * (6 - 3) + 3)

function start() {
    validAnswers = []
    randomInt = Math.floor(Math.random() * 6);
    for (i = 0; i < 10; i++) {
        x = Math.floor(Math.random() * 50);
        input.push(x);
        startArr.push(x);
    }
    console.log(randomInt);
    console.log(`Start Array: ${startArr}`);
    if (randomInt === 0) {
        validAnswers.push("bubble");
        minBubble();
    }
    else if (randomInt === 1) {
        validAnswers.push("bubble");
        maxBubble();
    }
    else if (randomInt === 2) {
        validAnswers.push("selection");
        selection();
    }
    else if (randomInt === 3) {
        validAnswers.push("insertion");
        insertion();
    }
    else if (randomInt === 4) {
        validAnswers.push("merge");
        merge();
    }
    else if (randomInt === 5) {
        validAnswers.push("quick");
        quick();
    }
    else {
        console.error("Random Integer not generated properly.");
    }
    console.log(`End Array: ${input}`);
}

function minBubble() {
    for (i = 0; i < numIterations; i++) {
        for (j = input.length - 1; j > i; j--) {
            if (input[j] < input[j - 1]) {
                const temp = input[j];
                input[j] = input[j - 1];
                input[j - 1] = temp;
            }
        }
    }
}

function maxBubble() {
    for (i = 0; i < numIterations; i++) {
        for (j = 0; j < input.length - 1; j++) {
            if (input[j] > input[j + 1]) {
                const temp = input[j];
                input[j] = input[j + 1];
                input[j + 1] = temp;
            }
        }
    }

}

function selection() {
    for (i = 0; i < numIterations; i++) {
        minIndex = i;
        for (j = i + 1; j < input.length; ++j) {
            if (input[j] < input[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            const temp = input[minIndex];
            input[minIndex] = input[i];
            input[i] = temp;
        }
    }

}

function insertion() {
    for (i = input.length - 1; i > 0; i--) {
        if (input[i] < input[i - 1]) {
            const temp = input[i];
            input[i] = input[i - 1];
            input[i - 1] = temp;
        }
    }
    for (i = 2; i < numIterations + 2; i++) {
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

}

function quick() {
    quickIterations = Math.floor(numIterations / 2);

}

start();