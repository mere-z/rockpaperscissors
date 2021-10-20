function computerPlay() {
    const actions = ["rock", "paper", "scissors"];
    action = actions[Math.floor(Math.random() * actions.length)]
    return(action)
}