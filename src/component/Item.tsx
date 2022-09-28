import { Button, Input, Checkbox, List, Row } from 'antd';
import { useState } from 'react';
export default function Item(props: any) {
  const {
    id,
    txt,
    done,
    handleDel,
    handleEdit,
    isEdit,
    handleUpdate,
    handleDone,
    SearchTodoList,
  } = props;

  const [value, setvalue] = useState('');

  return (
    // 写法一
    <li>
      <label>
        <Checkbox
          onChange={(e) => {
            handleDone(id, e.target.checked);
          }}
          defaultChecked={done}
        ></Checkbox>
        {isEdit === true ? (
          <div>
            <Input
              defaultValue={txt}
              onChange={(e) => setvalue(e.target.value)}
              onPressEnter={() => {
                handleUpdate(value, id);
                setvalue('');
              }}
            />
          </div>
        ) : (
          <span>{txt}</span>
        )}
      </label>
      <Button type="primary" danger onClick={() => handleDel(id)}>
        删除
      </Button>
      <Button type="primary" onClick={() => handleEdit(id)}>
        编辑
      </Button>
    </li>

    // 写法二
    // <List
    //   style={{ marginTop: 50 }}
    //   dataSource={SearchTodoList}
    //   renderItem={(item: any) => {
    //     return (
    //       <Row key={item.id}>
    //         <Checkbox onChange={(e) => handleDone(item.id, e.target.checked)} />
    //         {item.isEdit === true ? (
    //           <Input
    //             defaultValue={item.txt}
    //             onChange={(e) => setvalue(e.target.value)}
    //             onPressEnter={() => {
    //               handleUpdate(value, item.id);
    //               setvalue('');
    //             }}
    //           />
    //         ) : (
    //           item.txt
    //         )}
    //         <Button type="primary" onClick={() => handleEdit(item.id)}>
    //           编辑
    //         </Button>
    //         <Button danger onClick={() => handleDel(item.id)}>
    //           删除
    //         </Button>
    //       </Row>
    //     );
    //   }}
    // />
  );
}
