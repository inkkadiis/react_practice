import { useState } from "react";
import "./App.css";
import Box from "./component/box";

//1. 박스 2개 (타이틀,사진,결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패결과에 따라 테두리 색이 바뀐다 (빨,초,검)

const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVFDwWLTyESP0XJZEh0AeM9u9HHJoDS3eFQA&s",
  },
  scissors: {
    name: "Scissors",
    img: "https://ciselier.com/cdn/shop/articles/PC-DERO-S01_Robuso_Kurve_B-2_2000x.jpg?v=1762011195",
  },
  paper: {
    name: "Paper",
    img: "https://www.paperpapers.com/media/catalog/product/cache/26af58b6178898faa120837a4d31a0be/f/a/faviniart-drawingwht-811.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judge(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에  key 값을 array로 뽑는다
    let randomItem = Math.floor(Math.random() * itemArray.length); // 소수점 아래는 버린다 math.floor // math.random 0~1 사이 랜덤 소수
    let final = itemArray[randomItem];

    return choice[final];
  };

  const judge = (user, computer) => {
    if (user.name === computer.name) {
      return "Draw";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
  };

  return (
    <div className="root">
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="buttonBox">
        <button className="button" onClick={() => play("rock")}>
          Rock
        </button>
        <button className="button" onClick={() => play("scissors")}>
          Scissors
        </button>
        <button className="button" onClick={() => play("paper")}>
          Paper
        </button>
      </div>
    </div>
  );
}

export default App;
