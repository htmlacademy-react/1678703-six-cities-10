import {Review} from '../review/review';
import { comments } from '../../mocks/comments';
import {getCommentsSorting} from '../../utils';
import {useState} from 'react';

type ReviewsListProps = {
  id: string | undefined;
};


export function ReviewsList(props: ReviewsListProps): JSX.Element {

  const {id} = props;
  const [commentsQuantity, setCommentsQuantity] = useState(0);
  const commentsOffer = comments.filter((comment) => String(comment.id) === id);

  const getReviewsComponent = () => {
    if (commentsOffer.length === 0) {
      return '';
    }

    const sortinedComments = getCommentsSorting(commentsOffer);

    setCommentsQuantity(sortinedComments.length);

    // eslint-disable-next-line no-console
    console.log('222', sortinedComments.length);

    return sortinedComments.map((value, currentId) => {
      const keyValue = `${value}-${currentId}`;
      return <Review key={keyValue} review={value} />;
    });
  };


  return (
    <>
      <h2 className="reviews__title">
      Reviews &middot;{' '}
        <span className="reviews__amount">{commentsQuantity}</span>
      </h2>
      <ul className="reviews__list">
        {getReviewsComponent()}
      </ul>
    </>
  );
}


