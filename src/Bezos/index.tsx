import React from 'react';
import {
	staticFile,
	AbsoluteFill,
	OffthreadVideo,
	Audio
} from 'remotion';
import audio from "./output2.mp3";

export const Bezos: React.FC = () => {
	return (
		<AbsoluteFill
			className="border border-transparent overflow-hidden"
			style={{
				backgroundColor: 'rgb(14 20 27)',
			}}
		>
			<OffthreadVideo src={staticFile('bezos.mp4')} />
			<Audio src={audio} startFrom={322} />
		</AbsoluteFill>
	);
};
