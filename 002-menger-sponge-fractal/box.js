function Box(x, y, z, r) {
    this.pos = createVector(x, y, z);
    this.r = r;

    this.generate = function () {
        var boxs = [];

        for (var x = -1; x <= 1; ++x) {
            for (var y = -1; y <= 1; ++y) {
                for (var z = -1; z <= 1; ++z) {
                    if (abs(x) + abs(y) + abs(z) > 1) {
                        var newR = this.r / 3;
                        var b = new Box(this.pos.x + x * newR, this.pos.y + y * newR, this.pos.z + z * newR, newR);
                        boxs.push(b);
                    }
                }
            }
        }

        return boxs;
    }

    this.show = function () {
        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        noStroke();
        box(this.r);
        pop();
    }
}