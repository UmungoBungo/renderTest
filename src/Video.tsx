import './style.css';
import { Still, Composition } from 'remotion';
import { Mattm9yMeta } from './mattm9yMeta/MetaCard';
import { BrokenRender } from './brokenRender/MetaCard';
import { StillTest } from './stillTest';
import { BrokenStill } from './brokenStill';
import { Bezos } from './Bezos';

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
			<Composition
				id="BrokenRender"
				component={BrokenRender}
				width={1200}
				height={630}
				durationInFrames={125}
				fps={23}
			/>
			<Still id="StillTest" component={StillTest} width={600} height={600} />
			<Still id="BrokenStill" component={BrokenStill} width={600} height={600} />
			<Composition
				id="BezosLong"
				component={Bezos}
				durationInFrames={5 * 60 * 30}
				fps={30}
				width={768}
				height={590}
			/>
			<Composition
				id="BezosShort"
				component={Bezos}
				durationInFrames={595}
				fps={30}
				width={768}
				height={590}
			/>
		</>
	);
};
