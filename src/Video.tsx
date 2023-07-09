import './style.css';
import { Still, Composition } from 'remotion';
import { Mattm9yMeta } from './mattm9yMeta/MetaCard';
import { StillTest } from './stillTest';
import { Bezos } from './Bezos';

export const RemotionVideo: React.FC = () => {

	const bezosRunTimeSeconds = 5 * 60

	return (
		<>
			<Composition
				id="Mattm9yMeta"
				component={Mattm9yMeta}
				width={1200}
				height={630}
				durationInFrames={125}
				fps={23}
			/>
			<Composition
				id="Bezos"
				component={Bezos}
				durationInFrames={bezosRunTimeSeconds * 30}
				fps={30}
				width={768}
				height={590}
			/>
			<Still id="StillTest" component={StillTest} width={600} height={600} />
		</>
	);
};
