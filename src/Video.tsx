import './style.css';
import { Still, Composition } from 'remotion';
import { Mattm9yMeta } from './mattm9yMeta/MetaCard';
import { StillTest } from './stillTest';

export const RemotionVideo: React.FC = () => {
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
			<Still id="StillTest" component={StillTest} width={600} height={600} />
		</>
	);
};
