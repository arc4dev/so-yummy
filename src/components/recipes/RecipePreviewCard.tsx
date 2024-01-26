import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 200ms ease-in-out;
`;

const Card = styled.li`
  overflow: hidden;
  width: 343px;
  height: 323px;
  border-radius: 8px;
  background-color: lightblue;
  position: relative;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 0 10px 15px -3px var(--color-shadow),
      0 4px 6px -4px var(--color-shadow);

    ${CardImage} {
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 300px;
  }
`;

const CardTitle = styled.p`
  position: absolute;
  bottom: 20px;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  width: 90%;
  font-size: 1.14rem;
  background-color: var(--color-white);
  border-radius: 8px;
  padding: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
`;

type Props = {
  title: string;
  img: string;
  mealId: string;
};

const RecipePreviewCard = ({ title, img, mealId }: Props) => {
  return (
    <Card>
      <Link to={`/recipes/${mealId}`}>
        <CardImage src={img} alt={`Image of ${title}`} />
        <CardTitle>{title}</CardTitle>
      </Link>
    </Card>
  );
};

export default RecipePreviewCard;
