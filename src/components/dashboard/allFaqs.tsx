import Faq from './faq';

const AllFaqs = () => {
  const values = [1, 2, 3, 4, 5];
  return (
    <div>
      {values.map((_, index) => (
        <Faq
          key={index}
          question="How is Tranzakt different from other financial services?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        />
      ))}
    </div>
  );
};

export default AllFaqs;
