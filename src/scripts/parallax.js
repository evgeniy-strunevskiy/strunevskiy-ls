
var parallax = (function () {
  var sky = document.querySelector('.parallax__layer_sky')
  var mountainONe = document.querySelector('.parallax__layer_mountain1')
  var baloon = document.querySelector('.parallax__layer_baloon')
  var cloud = document.querySelector('.parallax__layer_cloud')
  var man = document.querySelector('.parallax__layer_man')
  var mountainTwo = document.querySelector('.parallax__layer_mountain2')
  var white = document.querySelector('.parallax__layer_white')

  //Переменные для будды
  var skyBuddha = document.querySelector('.parallax__layer_sky-buddha')
  var mountainONeBuddha = document.querySelector('.parallax__layer_mountain1-buddha')
  var buddha = document.querySelector('.parallax__layer_buddha')
  var cloudBuddha = document.querySelector('.parallax__layer_cloud-buddha')
  var whiteBuddha = document.querySelector('.parallax__layer_white-buddha')


  return {
    move: function (block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var transformString = 'translate3d(0,' + strafe + ', 0)';

      var style = block.style;

      style.top = strafe;
      style.tranform = transformString;
      style.webkitTranform = transformString;
    },

    init: function (wScroll) {
      this.move(sky, wScroll, 10);
      this.move(mountainONe, wScroll, 20);
      this.move(baloon, wScroll, 30);
      this.move(cloud, wScroll, 40);
      this.move(man, wScroll, 50);
      this.move(mountainTwo, wScroll, 60);
      this.move(white, wScroll, 70);

      //Секция будда
      this.move(skyBuddha, wScroll, 10);
      this.move(mountainONeBuddha, wScroll, 20);
      this.move(buddha, wScroll, 30);
      this.move(cloudBuddha, wScroll, 40);
      this.move(whiteBuddha, wScroll, 70);
    }

  }

}());


window.onscroll = function () {
  var wScroll = window.pageYOffset;

  parallax.init(wScroll);

  console.log(buddha);
}