import { Button } from 'antd';
export default function Footer(props: any) {
  const { done, TodoListAll, Unfinished, clearAll } = props;

  return (
    <div className="todo-footer">
      <span>
        <span>已完成{done}</span> <span>/未完成{Unfinished}</span>/ 全部
        {TodoListAll}
      </span>
      <Button
        type="primary"
        danger
        onClick={() => {
          clearAll();
        }}
      >
        清除已完成任务
      </Button>
    </div>
  );
}
