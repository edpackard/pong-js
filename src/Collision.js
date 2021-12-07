class Collision {
  isColliding(obj1, obj2) {
    if (obj1.x >= obj2.x + obj2.width || obj2.x > obj1.x + obj1.width) {
      return false;
    } else {
      return true;
    }
  }
}
