import { Card } from 'antd';
import 'antd/dist/antd.css';
import { useEffect, useMemo, useState } from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import './index.css';
import { lowerCase } from 'lodash';
import Item from './../component/Item';
export default function todoList() {
  const [list, setlist] = useState(
    JSON.parse(localStorage.getItem('todoList') || '[]'),
  );
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(list));
  }, [list]);

  // 添加
  const handleAdd = (val: string) => {
    if (!val) {
      alert('不得为空');
    } else {
      setlist([
        ...list,
        {
          id: list.length,
          done: false,
          txt: val,
          isEdit: false,
        },
      ]);
    }
  };

  // 删除
  const handleDel = (id: any) => {
    setlist(list.filter((item: any) => item.id != id));
  };

  // 编辑
  const handleEdit = (id: any) => {
    setlist(
      list.map((item: any) => {
        if (item.id === id) {
          item.isEdit = true;
        }
        return item;
      }),
    );
  };

  // 更新
  const handleUpdate = (val: any, id: any) => {
    setlist(
      list.map((item: any) => {
        if (item.id === id) {
          item.txt = val;
          item.isEdit = false;
        }
        return item;
      }),
    );
  };

  // 复选框
  const handleDone = (id: any, done: any) => {
    console.log(done);

    setlist(
      list.map((item: any) => {
        if (item.id === id) {
          item.done = done;
        }
        return item;
      }),
    );
  };

  // 搜索
  const handleSearch = (val: any) => {
    setSearchText(val);
  };

  // 计算搜索后的列表
  const SearchTodoList: Record<string, any>[] = useMemo(() => {
    if (!searchText) {
      return list;
    }

    return list?.filter((item: any) =>
      lowerCase(item.txt).includes(lowerCase(searchText)),
    );
  }, [list, searchText]);

  // 清除已完成
  const clearAll = () => {
    setlist(
      list.filter((item: any) => {
        return item.done !== true;
      }),
    );
  };

  // 已完成
  const done = useMemo(() => {
    return list.filter((item: any) => item.done !== false).length || 0;
  }, [list]);

  // 未完成
  const Unfinished = useMemo(() => {
    return list.filter((item: any) => item.done !== true).length || 0;
  }, [list]);

  // 全部
  const TodoListAll = useMemo(() => {
    return list.length;
  }, [list]);

  return (
    <div>
      <Card title="todoList" size="small" style={{ width: 800 }}>
        <Header handleAdd={handleAdd} handleSearch={handleSearch}></Header>

        {/* 写法一 */}
        <div style={{ marginTop: '10px' }}>
          {list.length
            ? SearchTodoList.map((item: any) => (
                <Item
                  key={item.id}
                  {...item}
                  handleDel={handleDel}
                  handleEdit={handleEdit}
                  handleUpdate={handleUpdate}
                  handleDone={handleDone}
                ></Item>
              ))
            : '无待办事项'}
        </div>

        {/* 写法二 */}
        {/* {list.length ? (
          <Item
            SearchTodoList={SearchTodoList}
            handleDel={handleDel}
            handleEdit={handleEdit}
            handleUpdate={handleUpdate}
            handleDone={handleDone}
          ></Item>
        ) : (
          '无待办事件'
        )} */}

        <Footer
          TodoListAll={TodoListAll}
          done={done}
          Unfinished={Unfinished}
          clearAll={clearAll}
        ></Footer>
      </Card>
    </div>
  );
}
