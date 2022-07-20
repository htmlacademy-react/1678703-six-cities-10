// import {useEffect} from 'react';
import {Review} from '../review/review';
import { comments } from '../../mocks/comments';

type ReviewsListProps = {
  id: string | undefined;
};


export function ReviewsList(props: ReviewsListProps): JSX.Element {

  const {id} = props;
  const commentsOffer = comments.filter((comment) => String(comment.id) === id);

  // useEffect(() => {
  //   if (id !== commentsId) {
  //     onLoadCommentsOffer(id);
  //   }
  // }, []);

  const getReviewsComponent = () => {
    if (commentsOffer.length === 0) {
      return '';
    }
    return commentsOffer.map((comment, currentId) => {
      const keyValue = `${comment}-${currentId}`;
      return (
        <Review key={keyValue} review={comment}/>
      );
    });
  };
  // console.log('222', commentsOffer)

  const commentsQuantity = commentsOffer.length !== 0 ? `${commentsOffer.length}` : '';

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


