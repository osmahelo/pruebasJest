function createRobot(x1, y1) {
    // lanza error si x o y están fuera de los límites (0 a 10)
    let x = x1;
    let y = y1;

    function validate() {
        if (x >= 0 && x <= 10 && y >= 0 && y <= 10) return true;
        else return false;
      }

    return {
       // moveUp - incrementa y en 1
       moveUp() {
        y++;
        return validate() ? y : "Limite Arriba";
      },
       // moveDown - decrementa y en 1.
       moveDown() {
        y--;
        return validate() ? y : "Limite Abajo";
      },
       // moveLeft - decrementa x en 1.
       moveLeft() {
        x--;
        return validate() ? x : "Limite Izquierda";
      },
       // moveRight - incrementa x en 1
       moveRight() {
        x++;
        return validate() ? x : "Limite Derecha";
      },
       // getX - retorna x
       getX() {
        return x;
      },
       // getY - retorna y
       getY() {
        return y;
      },
    }
  }
  module.exports = createRobot;