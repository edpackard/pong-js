class Collision {
  isColliding(obj1, obj2) {
    if (
      obj1.x > obj2.x + obj2.width ||
      obj2.x > obj1.x + obj1.width ||
      obj1.y > obj2.y + obj2.height
    ) {
      return false;
    } else {
      return true;
    }
  }
}
