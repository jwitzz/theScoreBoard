const { useState } = React;

function Scoreboard() {

    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    function resetScores() {
        setScore1(0);
        setScore2(0);
    }

    return React.createElement("div", null,
        React.createElement("div", { className: "player" },
            React.createElement("h2", null, "Player 1"),
            React.createElement("div", { className: "score" }, score1),
            React.createElement("button", { onClick: () => setScore1(score1 + 1) }, "+"),
            React.createElement("button", { onClick: () => setScore1(score1 - 1) }, "-")
        ),
        React.createElement("div", { className: "player" },
            React.createElement("h2", null, "Player 2"),
            React.createElement("div", { className: "score" }, score2),
            React.createElement("button", { onClick: () => setScore2(score2 + 1) }, "+"),
            React.createElement("button", { onClick: () => setScore2(score2 - 1) }, "-")
            ),
        React.createElement("div", { style: { marginTop: "3rem"} },
            React.createElement("button", { onClick: resetScores }, "Reset")
        )
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Scoreboard));