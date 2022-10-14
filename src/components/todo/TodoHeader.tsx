import styled from 'styled-components';
import oc from 'open-color';

const TodoHeaderWrapper = styled.div`
  padding: 48px 48px 32px 40px;
  border-bottom: 1px solid ${oc.gray[1]};
  h1 {
    font-size: 24px;
    font-weight: 600;
  }
  .count {
    margin-top: 32px;
    font-weight: 500;
    color: ${oc.orange[7]};
  }
`;

const TodoHeader = ({ count }: { count: number }) => {
  return (
    <TodoHeaderWrapper>
      <h1>오늘의 할 일</h1>
      <div className='count'>
        {count ? `${count}개 남았습니다!` : '오늘의 할 일이 없습니다.'}
      </div>
    </TodoHeaderWrapper>
  );
};

export default TodoHeader;
