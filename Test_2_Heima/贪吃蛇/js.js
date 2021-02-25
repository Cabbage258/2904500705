var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var w = 15; //格子宽、高
var snaLen = 6; //初始长度
var snake = []; //身体长度
for (var i = 0; i < snaLen; i++) {
    snake[i] = new cell(i, 0, 39);
}
var head = snake[snaLen - 1]; //头部
//初始食物
var foodx = Math.ceil(Math.random() * 28 + 1);
var foody = Math.ceil(Math.random() * 28 + 1);
var food = new Food(foodx, foody);
//食物
function Food(x, y) {
    this.x = x;
    this.y = y;
    return this;
}

//身体
function cell(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
    return this;
}

//动作
function draw() {
    ctx.clearRect(0, 0, 450, 450);
    //画布局
    // 		for(var i = 0; i < 30; i++){
    // 			ctx.strokeStyle = "#ccc";//线条颜色
    // 			ctx.beginPath();
    // 			ctx.moveTo(0,i*w);
    // 			ctx.lineTo(450,i*w);

    // 			ctx.moveTo(i*w,0);
    // 			ctx.lineTo(i*w,450);
    // 			ctx.closePath();
    // 			ctx.stroke();
    // 		}
    //画蛇身
    for (var j = 0; j < snake.length; j++) {
        ctx.fillStyle = "black";
        if (j == snake.length - 1) {
            ctx.fillStyle = "red";
        }
        ctx.beginPath();
        ctx.rect(snake[j].x * w, snake[j].y * w, w, w);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
    //出现食物
    drawFood();
    //吃到食物
    if (head.x == food.x && head.y == food.y) {
        initFood();
        food = new Food(foodx, foody);
        //重新出现食物
        drawFood();

        //增加蛇的长度  有些小瑕疵，蛇身增长时应该是身体增长，而不是在蛇头上增长
        var newCell = new cell(head.x, head.y, head.d);
        switch (head.d) {
            case 40:
                newCell.y++;
                break; //下
            case 39:
                newCell.x++;
                break; //右
            case 38:
                newCell.y--;
                break; //上
            case 37:
                newCell.x--;
                break; //左
        }
        snake[snake.length] = newCell;
        head = newCell;
        //head =
    }
}
//随机初始化食物
function initFood() {
    foodx = Math.ceil(Math.random() * 28 + 1);
    foody = Math.ceil(Math.random() * 28 + 1);
    for (var i = 0; i < snake.length; i++) {
        if (snake[i].x == foodx && snake[i].y == foody) {
            initFood();
        }
    }
}
//画食物
function drawFood() {
    //绘制食物
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.rect(food.x * w, food.y * w, w, w);
    ctx.closePath();
    ctx.fill();
}
draw();
//监听键盘事件
document.onkeydown = function(e) {
    //下40 ， 右边39，左边37，上38  键盘事件
    var keyCode = e.keyCode;
    if (head.d - keyCode != 2 && head.d - keyCode != -2 && keyCode >= 37 && keyCode <= 40) {
        moveSnake(keyCode);
    }
}
//控制蛇移动方向
function moveSnake(keyCode) {
    var newSnake = [];
    var newCell = new cell(head.x, head.y, head.d); //头
    //身体
    for (var i = 1; i < snake.length; i++) {
        newSnake[i - 1] = snake[i];
    }
    newSnake[snake.length - 1] = newCell;
    newCell.d = keyCode;
    switch (keyCode) {
        case 40:
            newCell.y++;
            break; //下
        case 39:
            newCell.x++;
            break; //右
        case 38:
            newCell.y--;
            break; //上
        case 37:
            newCell.x--;
            break; //左
    }
    snake = newSnake;
    head = snake[snake.length - 1];
    checkDeath();
    draw();
}
//游戏规则
function checkDeath() {
    //超出边框
    if (head.x >= 30 || head.y >= 30 || head.x < 0 || head.y < 0) {
        alert("Game over!");
        window.location.reload();
    }
    //咬到自己
    for (var i = 0; i < snake.length - 1; i++) {
        if (head.x == snake[i].x && head.y == snake[i].y) {
            alert("Game over!");
            window.location.reload();
        }
    }
}
//蛇自动走
function moveClock() {
    moveSnake(head.d);
}

function beginGame() {
    setInterval(moveClock, 600);
}