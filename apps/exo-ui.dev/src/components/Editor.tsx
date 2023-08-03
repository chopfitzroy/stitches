import type { SandpackFiles } from "@codesandbox/sandpack-react";

import { cyberpunk } from "@codesandbox/sandpack-themes";

import {
	SandpackPreview,
	SandpackProvider,
	SandpackCodeEditor,
} from "@codesandbox/sandpack-react";

interface EditorProps {
	dir: string;
	files: SandpackFiles;
	active: string;
}

// @TODO
// - Add open in Github button using `dir`
// - Add nicer open in Codesandbox button
// - Add console window
export const Editor = ({ files, active }: EditorProps) => {
	return (
		<div className="playground">
			<SandpackProvider
				files={files}
				theme={cyberpunk}
				template="react-ts"
				options={{
					activeFile: active,
					bundlerURL: "https://sandpack-bundler.pages.dev"
				}}
				customSetup={{
					dependencies: {
						"@vistas/exo-ui": "latest"
					}
				}}
			>
				<div className="playground-editor">
					<SandpackCodeEditor />
				</div>
				<div className="playground-preview">
					<SandpackPreview />
				</div>
			</SandpackProvider>
		</div>
	)
};