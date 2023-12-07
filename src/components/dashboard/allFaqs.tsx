import ButtonLoader from '../button/buttonLoader';
import Faq from './faq';

type IProp = {
  faqs: ISuccessResponse<IFAQResponse[]> | undefined;
  isLoading: boolean;
};

const AllFaqs = ({ faqs, isLoading }: IProp) => {
  return (
    <div>
      {isLoading && <ButtonLoader />}
      {faqs?.data?.map((faq) => (
        <Faq
          key={faq.id}
          id={faq.id}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default AllFaqs;
