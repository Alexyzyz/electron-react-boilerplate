import './TabButton.css';

interface TabButtonProps {
  title: string;
  isSelected: boolean;
  onSelect(): void;
}

export default function TabButton({
  title,
  isSelected,
  onSelect,
}: TabButtonProps) {
  return (
    <div className="MenuTabItem">
      <button className="MenuTabButton" type="button" onClick={onSelect}>
        <div
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            fontSize: '10px',
            color: isSelected ? '#FFC600' : 'white',
            fontWeight: isSelected ? 'bold' : 'normal',
          }}
        >
          <p
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </p>
        </div>
      </button>
      <div
        style={{
          width: '100%',
          height: 2,
          backgroundColor: isSelected ? '#FFC600' : 'transparent',
        }}
      />
    </div>
  );
}
