import SkeletonBase from 'components/skeleton/Base';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const CardListRow = styled.li`
  box-sizing: border-box;
  flex: 0 0 50%;
  list-style-type: none;
  padding: 5px;
  text-align: center;

  & .card {
    display: inline-block;
    width: 200px;
    border: 1px solid #d0d0d0;
    border-radius: 3px;
  }
`;

const Image = styled.div`
  ${SkeletonBase}
  width: 100px;
  height: 100px;
  margin: auto;
`;

const Content = styled.div`
  ${SkeletonBase}
  margin: auto;
`;

function SkeletonCardListRow() {
  const itemCount = Array.from({ length: 10 }, () => 0);
  return (
    <>
      {itemCount.map(() => (
        <CardListRow key={nanoid()}>
          <div className="card">
            <Image />
            <Content />
          </div>
        </CardListRow>
      ))}
    </>
  );
}

export default SkeletonCardListRow;
