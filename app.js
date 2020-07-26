const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

function degToRad(degrees) {
  return degrees * Math.PI / 180;
}

// Objects
function Planet(x, y, radius, color, orbit, orbitSpeed) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = 0;
  this.orbitSpeed = orbitSpeed * 0.001;

  this.update = () => {
    // Move points over time
    this.radians += this.orbitSpeed;
    this.x = x + Math.cos(this.radians) * (100 + orbit);
    this.y = y + Math.sin(this.radians) * (100 + orbit);
    this.draw();
  };

  this.draw = () => {
    // The Sun
    ctx.beginPath();
    ctx.arc(width/2, height/2, 20, 0, Math.PI * 2, false);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();

    // Planets that orbit the Sun
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

let planets;

function init() {
  planets = [];

  let Mercury = new Planet(width/2, height/2, 2, 'red', 1, 44);
  planets.push(Mercury);

  let Venus = new Planet(width/2, height/2, 3, 'gray', 30, 35);
  planets.push(Venus);

  let Earth = new Planet(width/2, height/2, 5, 'green', 50, 29);
  planets.push(Earth);

  let Mars = new Planet(width/2, height/2, 4, 'rgb(255, 10, 0)', 100, 24);
  planets.push(Mars);

  let Jupiter = new Planet(width/2, height/2, 13, 'rgb(255, 50, 0)', 200, 13);
  planets.push(Jupiter);

  let Saturn = new Planet(width/2, height/2, 11, 'rgb(250, 181, 127)', 300, 10);
  planets.push(Saturn);

  let Uranus = new Planet(width/2, height/2, 9, 'white', 500, 7);
  planets.push(Uranus);

  let Neptune = new Planet(width/2, height/2, 8, 'blue', 600, 5);
  planets.push(Neptune);

  let Pluto = new Planet(width/2, height/2, 1, 'white', 800, 4);
  planets.push(Pluto);
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, width, height);

  planets.forEach(planet => {
    planet.update();
  });
}

init();
animate();