import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import translate, { setLanguage, getCurrentLanguage } from 'i18n/i18n';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import ModalLoading from './modal/ModalLoading';
import ModalOtis from './modal/ModalOtis';

interface MenuBarButtonProps {
  title: string;
  onClick(): void;
}

type ModalType = 'None' | 'Otis' | 'Loading';

function MenuBarButton({ title, onClick }: MenuBarButtonProps) {
  return (
    <div>
      <button className="MenuBarButton" type="button" onClick={onClick}>
        {title}
      </button>
    </div>
  );
}

function renderModal(type: ModalType) {
  switch (type) {
    case 'None':
      return null;
    case 'Otis':
      return <ModalOtis />;
    case 'Loading':
      return (
        <ModalLoading
          title={translate('ModalLoading_Title')}
          content={translate('ModalLoading_Content')}
        />
      );
    default:
      return null;
  }
}

function AppWindow() {
  const [activeModal, setActiveModal] = useState<ModalType>('None');
  const [rerender, callRerender] = useState(false);

  return (
    <div>
      {/* Menu bar */}
      <div className="MenuBar">
        <MenuBarButton
          title={translate('Scene')}
          onClick={() => setActiveModal('Loading')}
        />
        <MenuBarButton
          title={translate('Edit')}
          onClick={() => setActiveModal('Otis')}
        />
        <MenuBarButton
          title={translate('View')}
          onClick={() => setActiveModal('None')}
        />
        <MenuBarButton
          title={translate('Submission')}
          onClick={() => setActiveModal('None')}
        />
        <MenuBarButton
          title={translate('Settings')}
          onClick={() => {
            setLanguage(
              getCurrentLanguage() === 'English' ? 'Indonesian' : 'English'
            );
            callRerender(!rerender);
          }}
        />
        <MenuBarButton
          title={translate('Help')}
          onClick={() => setActiveModal('None')}
        />
      </div>
      {/* Left and right panel */}
      <div className="PanelContainer">
        <LeftPanel />
        <RightPanel />
      </div>
      {renderModal(activeModal)}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppWindow />} />
      </Routes>
    </Router>
  );
}
