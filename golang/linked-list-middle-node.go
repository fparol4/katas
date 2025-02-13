func solution(head *ListNode) *ListNode {
    idx, middle_node := 1, head 
    
    for head != nil {
        if idx % 2 == 0 {
            middle_node = middle_node.Next
        }  

        idx++
        head = head.Next
    }

    return middle_node
}
