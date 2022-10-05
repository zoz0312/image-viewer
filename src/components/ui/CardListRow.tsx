import { ReactNode } from 'react';
import styled from 'styled-components';

const Li = styled.li`
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

  & img {
    width: 100px;
    height: 100px;
  }

  & .card-content {
    padding: 0.5rem 0.2rem;
    background: #d0d0d0;
  }
`;

type Props = {
  children?: ReactNode;
  className?: string;
  imageSrc?: string;
};

function CardListRow({ imageSrc, children }: Props) {
  return (
    <Li>
      <div className="card">
        <img style={{ backgroundImage: `url(${imageSrc})` }} />
        <div className="card-content">{children}</div>
      </div>
    </Li>
  );
}
export default CardListRow;
