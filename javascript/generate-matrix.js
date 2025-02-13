class GenerateMatrixUtil {
    static random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static generate({ width = 5, height = 5, min = 1, max = 10 } = {}) {
        let mtx = []
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                mtx[i] = mtx[i] || []
                mtx[i][j] = this.random(min, max)
            }
        }
        return mtx
    }
}

module.exports = GenerateMatrixUtil