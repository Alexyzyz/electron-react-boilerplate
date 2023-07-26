import './ModalLoading.css';
import { ReactComponent as IconSpinner } from 'assets/loading_spinner.svg';

interface ModalLoadingProps {
  title: string;
  content: string;
}

export default function ModalLoading({ title, content }: ModalLoadingProps) {
  return (
    <div
      style={{
        position: 'absolute',
        width: 300,
        height: 350,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#132B50',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          margin: 0,
          transform: 'translate(-50%, -50%)',
          alignItems: 'center',
        }}
      >
        <IconSpinner id="spinner" style={{ marginBottom: 4 }} />
        <div>
          <p style={{ fontWeight: 'bold', marginBottom: 8 }}>{title}</p>
          <p style={{ margin: 0 }}>{content}</p>
        </div>
      </div>
    </div>
  );
}
