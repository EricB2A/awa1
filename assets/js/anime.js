const title = document.querySelector(".inner > h1");
console.log(title); // ok

var loopReverse = anime({
  targets: '.logo',
  translateX: 250,
  loop: 3,
  direction: 'reverse'
});
