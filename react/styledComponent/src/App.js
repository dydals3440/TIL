import styled from 'styled-components';
const SimpleButton = styled.button`
  color: white;
  background-color: green;
`;
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;
// 일반적인 방법으로 만든 컴포넌트
const ReactButton = (props) => {
  console.log(props);
  return <button className={props.className}>{props.children}</button>;
};

const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

const PrimaryButton = styled.button`
  color: ${function (props) {
    console.log(props);
    if (props.primary) {
      return 'blue';
    } else {
      return 'black';
    }
  }};
`;
function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>상속 버튼</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>상속되지 않는다.</ReactLargeButton>
      <PrimaryButton primary>Normal</PrimaryButton>
    </div>
  );
}

export default App;
