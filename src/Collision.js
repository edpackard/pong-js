class Collision {
  isColliding(obj1, obj2) {
    if (obj1.x + obj1.width >= obj2.x) {
      return true;
    } else {
      return false;
    }
  }
}
