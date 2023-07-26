import React, { ReactNode, useState } from 'react';
import './LeftPanel.css';
import TabButton from './component/TabButton';
import { ReactComponent as IconFilter } from '../assets/icon_filter.svg';
import { ReactComponent as IconPlayer } from '../assets/icon_player.svg';

interface SearchButtonProps {
  icon: ReactNode;
}

interface SearchFieldProps {
  style?: React.CSSProperties;
}

function SearchButton({ icon }: SearchButtonProps) {
  return (
    <button
      type="button"
      style={{
        height: '100%',
        aspectRatio: 1,
        border: '2px solid #5A6F8D',
        borderRadius: 4,
        backgroundColor: 'white',
      }}
    >
      {icon}
    </button>
  );
}

function SearchField({ style }: SearchFieldProps) {
  return (
    <div
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        width: 130,
        height: 20,
        paddingLeft: '4px',
        backgroundColor: 'white',
        color: 'black',
        border: '2px solid #5A6F8D',
        borderRadius: 4,
        fontSize: '10px',
      }}
    >
      Search
    </div>
  );
}

SearchField.defaultProps = {
  style: {},
};

function Menu3DAssets() {
  return (
    <div className="Menu3DAssets">
      <div style={{ display: 'contents' }}>
        {/* Filter block */}
        <div className="Menu3DAssetsFilter">
          {/* Top - Search */}
          <div style={{ display: 'inline-block' }}>
            <SearchField style={{ marginBottom: 4 }} />
            <SearchField />
          </div>
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              float: 'right',
              marginLeft: 4,
            }}
          >
            <SearchButton
              icon={
                <IconFilter fill="#1F3E6B" style={{ width: 20, height: 20 }} />
              }
            />
          </div>
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              float: 'right',
            }}
          >
            <SearchButton
              icon={
                <IconPlayer fill="#1F3E6B" style={{ width: 20, height: 20 }} />
              }
            />
          </div>
          {/* Bottom - Categories */}
          <div />
        </div>
        {/* Inventory */}
        <div className="Menu3DAssetsInventory" />
      </div>
    </div>
  );
}

export default function LeftPanel() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="LeftPanel">
      <div className="MenuTabContainer">
        <TabButton
          title="3D Assets"
          isSelected={selectedTab === 0}
          onSelect={() => setSelectedTab(0)}
        />
        <TabButton
          title="Sky"
          isSelected={selectedTab === 1}
          onSelect={() => setSelectedTab(1)}
        />
        <TabButton
          title="BGM"
          isSelected={selectedTab === 2}
          onSelect={() => setSelectedTab(2)}
        />
        <TabButton
          title="Interaction"
          isSelected={selectedTab === 3}
          onSelect={() => setSelectedTab(3)}
        />
      </div>
      <Menu3DAssets />
    </div>
  );
}
