class Unit {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.draw = () => {
            unit.rotAnim(grid.x + this.x, grid.y + this.y, [0], this.angle, 1.0, 4, 0);
        }
    }
}