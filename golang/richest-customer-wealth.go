package main 

import (
	"fmt" 
)


var log = fmt.Println

func main () {
	ipt := [][]int {
		{1, 2, 3}, 
		{2, 3, 4},
	}
	answer := solution(ipt)
	log("answer -> ", answer)
}

func arr_sum(arr []int) int {
	sum := 0 
	for _, v := range arr { 
		sum += v 
	}
	return sum  
}

func solution (accounts [][]int) int { 
	var max_wealth int 
	for _, account := range accounts {
		account_ballance := arr_sum(account)
		if (account_ballance > max_wealth) { 
				max_wealth = account_ballance
		}
	}
	return max_wealth	
}


