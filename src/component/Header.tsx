import { Input, Row, Button } from 'antd';
import { useState } from 'react';
export default function Header(props: any) {
  const { handleAdd, handleSearch } = props;
  const [inputText, setInputText] = useState('');
  const [SearchText, setSearchText] = useState('');

  return (
    <div className="todo-header">
      <Row>
        <Input
          placeholder="添加"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onPressEnter={() => {
            handleAdd(inputText);
            setInputText('');
          }}
        />
        <Button
          type="primary"
          disabled={!inputText}
          onClick={() => {
            handleAdd(inputText);
            setInputText('');
          }}
        >
          添加
        </Button>
      </Row>
      <Row>
        {/* <Input
          placeholder="搜索"
          value={SearchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          type="primary"
          disabled={!SearchText}
          onClick={() => {
            handleSearch(SearchText);
            setSearchText('');
          }}
        >
          添加
        </Button> */}
        <Input
          placeholder="搜索"
          // onChange={(e) => setSearchText(e.target.value)}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Row>
    </div>
  );
}
