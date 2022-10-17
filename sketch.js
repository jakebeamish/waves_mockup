function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();

  // Use a sine wave as a base 'data input'
  // drawWave(amplitude, frequency, phase, yPosition)
  drawWave(1, 0.05, 0, height / 4);
  line(0, height / 4, width, height / 4);


  selector = drawSelector(mouseX, height / 4, 100, height - mouseY);

  drawWave(
    // 1 - mouseY / height,
    1,
    0.000000000001 * height - mouseY,

    // How to change phase so that it matches postion of selector?

    10 * (mouseX / width),
    height * 0.75
  );

  line(0, height * 0.75, width, height * 0.75)
}

function drawWave(amplitude, frequency, phase, yPosition) {
  // console.log(frequency + " Hz, " + amplitude + " A, " + phase)

  beginShape();
  for (let x = 0; x < width; x++) {
    y = sin(phase + x * frequency) * (amplitude * height / 10);
    vertex(x, yPosition - y);
  }
  endShape();
}

function drawSelector(x, y, amplitude, length) {
  push();
  fill(0, 100);
  rect(x, y - amplitude, length, amplitude * 2);
  pop();
  line(x, height / 4 + amplitude, 0, height * 0.75 - amplitude);
  line(x + length, y + amplitude, width, height * 0.75 - amplitude);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
