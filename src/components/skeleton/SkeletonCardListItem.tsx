import SkeletonBase from 'components/skeleton/Base';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const CardListRow = styled.li`
  ${SkeletonBase}
  width: auto;
  height: auto;
  box-sizing: border-box;
  flex: 0 0 50%;
  list-style-type: none;
  padding: 5px;
  text-align: center;

  & .image {
    width: 100px;
    height: 100px;
  }
`;

function SkeletonCardListRow({ children }: PropsWithChildren) {
  return (
    <CardListRow>
      <div className="card">
        <div className="image"></div>
        <div className="card-content">{children}</div>
      </div>
    </CardListRow>
  );
}

export default SkeletonCardListRow;
