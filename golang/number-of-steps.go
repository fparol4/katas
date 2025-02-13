func numberOfSteps(num int) int {
    var attempts = 0 
    for num != 0 {
        attempts++
        if (num % 2 == 0) {
            num = num / 2
            continue
        }
        num -= 1 
    }    
    return attempts 
}
