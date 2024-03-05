import { useState } from 'react';
import IconWrap from '../ui/svgWrapper';
import { plusIcon } from '../../assets';
import AllFaqs from './allFaqs';
import FaqCard from '../modal/faqCard';
import ModalWraper from '../modal';
import DynamicContent from './dynamicContent';
import EditContentCards from '../modal/editContentCards';
import { useGetAllFaqQuery } from '../../redux/api/faq';

const ContentNavigation = ({
  value,
  isActive,
  setState,
}: {
  value: string;
  isActive: boolean;
  setState: () => void;
}) => (
  <span
    className={`py-2 h-[40px] cursor-pointer font-montserrat font-500 mr-10 ${
      isActive
        ? 'text-primary-200 border-b-[2px] border-primary-200'
        : 'text-shade-100'
    }`}
    onClick={setState}
  >
    {value}
  </span>
);

export default function ContentSection() {
  const [currentState, setCurrentState] = useState('faqs');
  const [openModal, setOpenModal] = useState(false);
  const openModalAction = () => setOpenModal(true);
  const closeModalAction = () => setOpenModal(false);
  const { data: faqs, isLoading } = useGetAllFaqQuery();
  const dynamicDisplay: {
    [key: string]: { content: React.ReactNode; modal: React.ReactNode };
  } = {
    faqs: {
      content: <AllFaqs faqs={faqs} isLoading={isLoading} />,
      modal: <FaqCard close={closeModalAction} />,
    },
    terms: {
      content: (
        <DynamicContent
          openEdit={openModalAction}
          header="Condition of Use"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        />
      ),
      modal: (
        <EditContentCards
          close={closeModalAction}
          header="Terms of Condition Details"
        />
      ),
    },
    policy: {
      content: (
        <DynamicContent
          openEdit={openModalAction}
          header="Privacy Policy"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        />
      ),
      modal: (
        <EditContentCards
          close={closeModalAction}
          header="Privacy Policy Details"
        />
      ),
    },
    about: {
      content: (
        <DynamicContent
          openEdit={openModalAction}
          header="About Tranzakt"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        />
      ),
      modal: (
        <EditContentCards close={closeModalAction} header="About Tranzakt" />
      ),
    },
    version: {
      content: (
        <DynamicContent
          openEdit={openModalAction}
          header="Version 1.0"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        />
      ),
      modal: (
        <EditContentCards
          close={closeModalAction}
          header="App Version Details"
        />
      ),
    },
  };
  return (
    <div className="w-full">
      <div className="flex items-center w-full justify-between py-4">
        <h2 className="text-[20px] font-montserrat pb-3 font-semibold">
          Content
        </h2>
        {currentState === 'faqs' && (
          <button
            type="submit"
            className="text-white bg-[#32C87D] w-[210px] gap-x-3 flex items-center justify-center  py-3  mt-2 rounded-md"
            onClick={openModalAction}
          >
            <IconWrap src={plusIcon} />
            Add FAQ
          </button>
        )}
      </div>{' '}
      <div className="flex px-8  flex-col  w-full p-4 h-[500px] bg-white mt-2 rounded-[16px]">
        <div className="flex py-3">
          <ContentNavigation
            value={`FAQs (${faqs?.data?.length ?? 0})`}
            isActive={currentState === 'faqs'}
            setState={() => setCurrentState('faqs')}
          />
          <ContentNavigation
            value={`Terms of Service`}
            isActive={currentState === 'terms'}
            setState={() => setCurrentState('terms')}
          />
          <ContentNavigation
            value={`Privacy policy`}
            isActive={currentState === 'policy'}
            setState={() => setCurrentState('policy')}
          />
          <ContentNavigation
            value={`About Tranzakt`}
            isActive={currentState === 'about'}
            setState={() => setCurrentState('about')}
          />
          <ContentNavigation
            value={`App Version`}
            isActive={currentState === 'version'}
            setState={() => setCurrentState('version')}
          />
        </div>
        <div className="mt-6 h-[350px] overflow-y-auto">
          {dynamicDisplay[currentState].content}
        </div>
        {openModal && (
          <ModalWraper show={openModal} close={closeModalAction}>
            {dynamicDisplay[currentState].modal}
          </ModalWraper>
        )}
      </div>
    </div>
  );
}
