function solution(array, commands) {
    var answer = [];
    
    for (let com of commands) {
        let slice = array.slice(com[0] - 1, com[1]).sort((a, b) => a - b);
        
        answer.push(slice[com[2] - 1]);
    }
    
    return answer;
}