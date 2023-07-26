import './ModalOtis.css';
import { ReactComponent as OtisHead } from 'assets/otis/otis_head.svg';

export default function ModalOtis() {
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
        <OtisHead id="head" />
      </div>
    </div>
  );
}
