// import {useEffect} from 'react';
import {Review} from '../review/review';
import {ReviewType} from '../../types/offer';


type ReviewsListProps = {
  // id: number;
};

type Comments = ReviewType[];

export function ReviewsList(props: ReviewsListProps): JSX.Element {

  // const {id} = props;
  const commentsOffer: Comments = [];
  // useEffect(() => {
  //   if (id !== commentsId) {
  //     onLoadCommentsOffer(id);
  //   }
  // }, []);

  const getReviewsComponent = () => {
    if (commentsOffer.length === 0) {
      return '';
    }
    return commentsOffer.map((comment) => (
      <Review key={`${comment.id}-${comment.date}`} review={comment}/>
    ));
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


