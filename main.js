const app = document.getElementById('typewriter');

const typewriter = new typewriter(app,{
   loop: true,
   delay:10

});

typewriter
.typeString('La capital del sol')
.pauseFor(200)
.start();