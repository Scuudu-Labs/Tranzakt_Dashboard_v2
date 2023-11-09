import { useGetAllFaqQuery } from '../../redux/api/faq';
import ButtonLoader from '../button/buttonLoader';
import Faq from './faq';

const AllFaqs = () => {
  const { data: faqs, isLoading } = useGetAllFaqQuery();
  return (
    <div>
      {isLoading && <ButtonLoader />}
      {!isLoading &&
        faqs?.data?.map((faq) => (
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
