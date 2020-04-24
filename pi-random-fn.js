/**
 * Calcular PI utilizando uma função que gera números aleatórios entre 0 ~ 1
 *
 * A ideia é plotar trocentos pontos utilizando essa função,
 * pegar todos os que estão dentro do raio (sqrt(x**2 + y**2))
 * e calcular o length
 * 
 * Matemáticamente
 * 
 * 1/4 da área de um circulo é pi/4
 * a área do quadrado em que o circulo está tem o mesmo valor da quantidade de iterações
 * 
 * iterations / (pi/4) = areaCirculo 
 * calcularemos a area do circulo pegando todos os pontos que estão dentro do raio de 1, 
 * 
 * utilizando pitagoras -> 
 *  [0.5, 0.7] -> sqrt(0.5**2, 0.7**2) -> 0.86 -> dentro do circulo 
 *  [1, 1] -> sqrt(1, 1) -> 1.42 -> fora do circulo 
 * 
 *  A área do circulo é representada pela quantidade de pontos que foram encontrados 
 * dentro do raio 
 * 
 * iterations / (pi/4) = pontosDentroDoRaio
 * iterations / pntsDRaio = pi/4 
 * 4 * iterations / pntsDRaio = pi
 */

class CalculatePI {

    static pitagoras(x, y) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    }

    static generatePolar() {
        const random = () => Number(Math.random().toFixed(2))
        const polar = [random(), random()]
        return polar
    }

    static generatePolarNoRepeat(calculatedPolars) {
        const random = () => Number(Math.random().toFixed(2))
        while (true) {
            const polar = [random(), random()]
            const foundInCalculatedPolars = calculatedPolars
                .every(cordinates => cordinates
                    .every(cordinate => polar.includes(cordinate)))

            if (!calculatedPolars.length || !foundInCalculatedPolars) {
                return polar
            }
        }
    }

    static calculate(iterations = 10, radius = 1) {
        let i, inside = 0
        for (i = 1; i <= iterations; i++) {
            const [x, y] = this.generatePolar([])
            if (this.pitagoras(x, y) <= radius) {
                inside++
            }
        }

        return 4 * inside / iterations
    }

    static calculateNoRepeat(iterations = 10, radius = 1) {
        let i, polars = [], inside = 0
        for (i = 1; i <= iterations; i++) {
            const [x, y] = this.generatePolar(polars)//polars)
            if (this.pitagoras(x, y) <= radius) {
                inside++
            }
            polars.push([x, y])
        }

        return 4 * inside / iterations
    }
}

const pi = CalculatePI.calculate(99999990)
console.log('Valor de PI:', pi)