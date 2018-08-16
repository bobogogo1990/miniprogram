const app = getApp();
Page({
  data: {
    hey: '美丽的夜晚',
    x: 0,
    y: 0,
  },

  onLoad() {
    console.log('开始绘画');
    this.drawCanvas();
  },

  drawCanvas() {
    const ctx = wx.createCanvasContext('myCanvas1');
    const { windowWidth, windowHeight } = wx.getSystemInfoSync();
    ctx.setFillStyle('red');
    ctx.fillRect(10, 10, windowWidth - 20, 75);
    ctx.draw(true, function () {
      console.log('画图完成');
    });


    // 渐变色
    ctx.save();
    ctx.translate(35, 125);
    ctx.rotate(45 * Math.PI / 180);
    ctx.scale(0.5, 0.5);
    const grd = ctx.createLinearGradient(-25, -25, 0, 70);
    grd.addColorStop(0, 'red');
    grd.addColorStop(1, 'white');
    ctx.setFillStyle(grd);
    ctx.fillRect(-25, -25, 50, 50);
    ctx.draw(true);
    ctx.restore();

    // 圆形渐变
    const grd1 = ctx.createCircularGradient(150, 150, 50);
    grd1.addColorStop(0, 'red');
    grd1.addColorStop(1, 'white');
    ctx.setFillStyle(grd1);
    ctx.fillRect(100, 100, 100, 100);
    ctx.draw(true, function () {
      console.log('圆绘制完成');
    });

    // 画边
    ctx.beginPath()
    ctx.moveTo(10, 240);
    ctx.setLineWidth(5);
    ctx.setStrokeStyle('yellow');
    ctx.lineTo(80, 240);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineWidth(5);
    ctx.setStrokeStyle('red');
    ctx.moveTo(80, 240);
    ctx.lineTo(80, 280);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineWidth(5);
    ctx.setStrokeStyle('green');
    ctx.moveTo(80, 280);
    ctx.lineTo(10, 280);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineWidth(5);
    ctx.setStrokeStyle('#666');
    ctx.moveTo(10, 280);
    ctx.lineTo(10, 240);
    ctx.stroke();

    ctx.beginPath();
    ctx.setFillStyle('blue');
    ctx.rect(10, 240, 70, 40);
    ctx.fill();

    // 写文字
    ctx.setFontSize(20);
    ctx.setFillStyle('pink');
    ctx.setTextAlign('center');
    ctx.fillText('欢乐七夕节', 150, 240);
    ctx.fillText('你好呀', 150, 270);
    ctx.fillText('温馨中秋节', 150, 300);

    // 画图片
    ctx.drawImage('./../../imgs/logo.jpeg', 205, 210, 100, 100);


    ctx.draw(true);
  },

  updateCoordinates(e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y,
    });
  },

  tsHandler(e) {
    console.log('start');
    this.updateCoordinates(e);
  },
  tmHandler(e) {
    console.log('move');
    this.updateCoordinates(e);
  },
  teHandler(e) {
    this.setData({

    });
  }
});