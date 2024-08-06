export interface Vector2Like {
  x: number
  y: number
}

export class Vector2 {
  constructor(public x = 0, public y = 0) {}

  set(x: number, y: number) {
    this.x = x
    this.y = y

    return this
  }

  setScalar(scalar: number) {
    this.x = scalar
    this.y = scalar

    return this
  }

  setX(x: number) {
    this.x = x

    return this
  }

  setY(y: number) {
    this.y = y

    return this
  }

  clone() {
    return new Vector2(this.x, this.y)
  }

  copy(v: Vector2) {
    this.x = v.x
    this.y = v.y

    return this
  }

  add(v: Vector2) {
    this.x += v.x
    this.y += v.y

    return this
  }

  addScalar(s: number) {
    this.x += s
    this.y += s

    return this
  }

  sub(v: Vector2) {
    this.x -= v.x
    this.y -= v.y

    return this
  }

  subScalar(s: number) {
    this.x -= s
    this.y -= s

    return this
  }

  multiply(v: Vector2) {
    this.x *= v.x
    this.y *= v.y

    return this
  }

  multiplyScalar(scalar: number) {
    this.x *= scalar
    this.y *= scalar

    return this
  }

  divide(v: Vector2) {
    this.x /= v.x
    this.y /= v.y

    return this
  }

  divideScalar(scalar: number) {
    return this.multiplyScalar(1 / scalar)
  }

  min(v: Vector2) {
    this.x = Math.min(this.x, v.x)
    this.y = Math.min(this.y, v.y)

    return this
  }

  max(v: Vector2) {
    this.x = Math.max(this.x, v.x)
    this.y = Math.max(this.y, v.y)

    return this
  }

  clamp(min: Vector2, max: Vector2) {
    // assumes min < max, componentwise

    this.x = Math.max(min.x, Math.min(max.x, this.x))
    this.y = Math.max(min.y, Math.min(max.y, this.y))

    return this
  }

  clampScalar(minVal: number, maxVal: number) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x))
    this.y = Math.max(minVal, Math.min(maxVal, this.y))

    return this
  }

  floor() {
    this.x = Math.floor(this.x)
    this.y = Math.floor(this.y)

    return this
  }

  ceil() {
    this.x = Math.ceil(this.x)
    this.y = Math.ceil(this.y)

    return this
  }

  round() {
    this.x = Math.round(this.x)
    this.y = Math.round(this.y)

    return this
  }

  roundToZero() {
    this.x = Math.trunc(this.x)
    this.y = Math.trunc(this.y)

    return this
  }

  negate() {
    this.x = -this.x
    this.y = -this.y

    return this
  }

  dot(v: Vector2) {
    return this.x * v.x + this.y * v.y
  }

  cross(v: Vector2) {
    return this.x * v.y - this.y * v.x
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  distanceTo(v: Vector2Like) {
    return Math.sqrt(this.distanceToSquared(v))
  }

  distanceToSquared(v: Vector2Like) {
    const dx = this.x - v.x,
      dy = this.y - v.y

    return dx * dx + dy * dy
  }

  manhattanDistanceTo(v: Vector2) {
    return Math.abs(this.x - v.x) + Math.abs(this.y - v.y)
  }

  *[Symbol.iterator]() {
    yield this.x
    yield this.y
  }
}
