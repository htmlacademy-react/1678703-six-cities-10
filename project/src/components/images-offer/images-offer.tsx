

type ImagesOfferProps = {
  image: string;
};


export function ImagesOffer(props: ImagesOfferProps): JSX.Element{

  const {image} = props;

  return (
    <div className="property__image-wrapper">
      <img
        className="property__image"
        src={image}
        alt="Photo studio"
      />
    </div>
  );
}
